import React, { useState } from 'react';
import { Route, Switch } from 'react-router';

import Card from './layouts/card';
import CreateCard from './layouts/createCard';
import { CARD_NAME } from './utils/CONSTS';
import { addToLocalStorage } from './utils/pureFunction';

const App = () => {
  const handleSave = (card) => {
    addToLocalStorage(CARD_NAME, card);
  };

  return (
    <Switch>
      <Route
        path="/card_create"
        render={() => <CreateCard onSave={handleSave} />}
      />
      <Route path="/" render={() => <Card />} />
    </Switch>
  );
};

export default App;
