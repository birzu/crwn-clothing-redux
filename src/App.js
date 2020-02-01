import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.component';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
