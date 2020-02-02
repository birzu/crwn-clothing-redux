import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header.component';

import HomePage from './pages/HomePage.component';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
