import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Container from '../components/container';
import { CARD_NAME } from '../utils/CONSTS';
import {
  getCapitalString,
  getFromLocalStorage,
  addToLocalStorage,
} from '../utils/pureFunction';

const Card = () => {
  const [card, setCard] = useState({});
  useEffect(() => {
    setCard(getFromLocalStorage(CARD_NAME));
  }, []);

  return (
    <Container>
      <h1>Student Card</h1>
      {Object.keys(card).length ? (
        <>
          {Object.keys(card).map((fieldName, idx) => (
            <p key={idx}>
              <b>{getCapitalString(fieldName)}: </b>
              {fieldName === 'portfolio' ? (
                <a href={card[fieldName]}>{card[fieldName]}</a>
              ) : (
                card[fieldName]
              )}
            </p>
          ))}
          <Link to="/card_create" className="btn btn-primary">
            Edit Student
          </Link>
        </>
      ) : (
        <>
          <div className="mb-2">No data</div>
          <Link to="/card_create" className="btn btn-primary">
            Add Student
          </Link>
        </>
      )}
    </Container>
  );
};

export default Card;
