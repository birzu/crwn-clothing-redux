import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header.component';
import { hideCart } from './redux/reducers/cart.reducer';

import HomePage from './pages/HomePage.component';
import ShopPage from './pages/ShopPage.component';
import CollectionPage from './pages/CollectionPage.component';

const mapDispatchToProps = dispatch => ({
  hideCart: () => dispatch(hideCart())
});

const App = ({ hideCart }) => {
  return (
    <div className="app" onClick={() => hideCart()}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route
          exact
          path="/collections/:collectionId"
          component={CollectionPage}
        />
      </Switch>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(App);
