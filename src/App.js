import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header.component';

import HomePage from './pages/HomePage.component';
import ShopPage from './pages/ShopPage.component';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
