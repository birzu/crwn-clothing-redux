import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header.component';
import { hideCart } from './redux/reducers/cart.reducer';
import { persistUserSession } from './redux/reducers/user.reducer';

import HomePage from './pages/HomePage.component';
import ShopPage from './pages/ShopPage.component';
import CollectionPage from './pages/CollectionPage.component';
import CheckoutPage from './pages/CheckoutPage.component';

const mapDispatchToProps = dispatch => ({
  hideCart: () => dispatch(hideCart()),
  persistUser: () => dispatch(persistUserSession())
});

class App extends React.Component {
  componentDidMount() {
    const { persistUser } = this.props;
    persistUser();
  }

  render() {
    const { hideCart } = this.props;
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
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
