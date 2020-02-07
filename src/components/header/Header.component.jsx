import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { ReactComponent as MenuIcon } from '../../assets/iconmonstr-menu-2.svg';

import {
  toggleAuthModalHidden,
  toggleCurrentForm
} from '../../redux/reducers/auth.reducer';
import { toggleCartHidden } from '../../redux/reducers/cart.reducer';
import { selectCartHidden } from '../../redux/selectors/cart.selectors';
import { selectAuthModalHidden } from '../../redux/selectors/auth.selectors';

import CartIcon from '../cart-icon/CartIcon.component';
import CartModal from '../cart-modal/CartModal.component';
import FormModal from '../form/form-modal/FormModal.component';
import ShopDropdown from '../shop-dropdown/ShopDropdown.component';

import './Header.styles.scss';

const mapStateToProps = createStructuredSelector({
  authModalHidden: selectAuthModalHidden,
  cartModalHidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  toggleAuthModalHidden: () => dispatch(toggleAuthModalHidden()),
  toggleCurrentForm: formType => dispatch(toggleCurrentForm(formType)),
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const Header = ({
  authModalHidden,
  toggleAuthModalHidden,
  toggleCurrentForm,
  toggleCartHidden,
  cartModalHidden
}) => {
  const renderAuthModal = () => {
    return <FormModal />;
  };

  const renderCartModal = () => {
    return <CartModal />;
  };

  const renderHeader = () => {
    return (
      <Fragment>
        <header className="app-header">
          <Link className="link app-header__link app-header__link--home" to="/">
            <Logo className="app-header__logo" />
          </Link>
          <div className="app-header__dropdown-wrapper">
            <Link
              className="link app-header__link app-header__link--shop"
              to="/shop"
            >
              <MenuIcon className="link__inner-icon link__inner-icon--menu" />
              SHOP
            </Link>
            <ShopDropdown />
          </div>

          <ul className="app-header__nav">
            <li
              className="app-header__nav-item app-header__nav-btn app-header__nav-btn--register"
              onClick={() => {
                toggleCurrentForm('register');
                toggleAuthModalHidden();
              }}
            >
              REGISTER
            </li>
            <li
              className="app-header__nav-item app-header__nav-btn app-header__nav-btn--signin"
              onClick={() => {
                toggleCurrentForm('signin');
                toggleAuthModalHidden();
              }}
            >
              SIGN IN
            </li>
            <li
              className="app-header__nav-item app-header__nav-btn app-header__nav-btn--cart"
              onClick={e => {
                e.stopPropagation();
                toggleCartHidden();
              }}
            >
              <CartIcon />
            </li>
          </ul>
        </header>
        {!cartModalHidden ? renderCartModal() : null}
        {!authModalHidden ? renderAuthModal() : null}
      </Fragment>
    );
  };

  return renderHeader();
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
