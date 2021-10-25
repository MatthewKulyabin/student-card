import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Container from '../components/container';
import TextField from '../components/textField';
import { CARD_NAME } from '../utils/CONSTS';
import { getFromLocalStorage } from '../utils/pureFunction';
import { validator } from '../utils/validator';

const CreateCard = ({ onSave }) => {
  const history = useHistory();
  const [newCard, setNewCard] = useState({
    name: '',
    surname: '',
    birthYear: '',
    portfolio: '',
  });
  const [oldCard, setOldCard] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const oldCard = getFromLocalStorage(CARD_NAME);
    if (oldCard) {
      setNewCard(oldCard);
      setOldCard(true);
    }
  }, []);

  console.log(oldCard);

  useEffect(() => {
    validate();
  }, [newCard]);

  const validatorConfig = {
    name: { isRequired: { message: 'Name is required' } },
    surname: { isRequired: { message: 'Surname is required' } },
    birthYear: {
      isRequired: { message: 'Birth Year is required' },
      validYear: { message: 'Birth Year is incorrect' },
    },
    portfolio: {
      isRequired: { message: 'Portfolio is required' },
      isUrl: { message: 'Portfolio should be an url' },
    },
  };

  const validate = () => {
    const errors = validator(newCard, validatorConfig);
    setErrors(errors);
    return !Object.keys(errors).length;
  };

  const handleChange = ({ target }) => {
    setNewCard((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    setNewCard((prev) => ({ ...prev, [e.target.name]: e.target.name.value }));
    onSave(newCard);
    history.push('/');
  };

  return (
    <Container>
      <h1>{oldCard ? 'Edit' : 'Create'}</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={newCard.name}
          onChange={handleChange}
          error={errors.name}
        />
        <TextField
          label="Surname"
          name="surname"
          value={newCard.surname}
          onChange={handleChange}
          error={errors.surname}
        />
        <TextField
          label="BirthYear"
          name="birthYear"
          value={newCard.birthYear}
          onChange={handleChange}
          error={errors.birthYear}
        />
        <TextField
          label="Portfolio"
          name="portfolio"
          value={newCard.portfolio}
          onChange={handleChange}
          error={errors.portfolio}
        />

        {oldCard && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => history.goBack()}
            style={{ marginRight: '5%' }}
          >
            Back
          </button>
        )}
        <button
          className="btn btn-primary"
          disabled={Object.keys(errors).length}
        >
          {oldCard ? 'Refresh' : 'Create'}
        </button>
      </form>
    </Container>
  );
};

export default CreateCard;
