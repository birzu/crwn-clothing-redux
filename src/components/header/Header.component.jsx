import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import FormModal from '../form/form-modal/FormModal.component';

import {
  toggleAuthModalHidden,
  toggleCurrentForm
} from '../../redux/reducers/auth.reducer';
import { selectAuthModalHidden } from '../../redux/selectors/auth.selectors';

import CartIcon from '../cart-icon/CartIcon.component';
import './Header.styles.scss';

const mapStateToProps = createStructuredSelector({
  authModalHidden: selectAuthModalHidden
});

const mapDispatchToProps = dispatch => ({
  toggleAuthModalHidden: () => dispatch(toggleAuthModalHidden()),
  toggleCurrentForm: formType => dispatch(toggleCurrentForm(formType))
});

const Header = ({
  authModalHidden,
  toggleAuthModalHidden,
  toggleCurrentForm,
  history
}) => {
  const renderModal = () => {
    return <FormModal />;
  };
  const renderHeader = () => {
    return (
      <Fragment>
        <header className="app-header">
          <Link className="link app-header__link" to="/">
            <Logo className="app-header__logo" />
          </Link>

          <ul className="app-header__nav">
            <li className="app-header__nav-item">
              <Link className="link app-header__link" to="/shop">
                SHOP
              </Link>
            </li>
            <li
              className="app-header__nav-item"
              onClick={() => {
                toggleCurrentForm('signin');
                toggleAuthModalHidden();
              }}
            >
              SIGN IN
            </li>
            <li
              className="app-header__nav-item"
              onClick={() => {
                toggleCurrentForm('register');
                toggleAuthModalHidden();
              }}
            >
              REGISTER
            </li>
            <li className="app-header__nav-item">
              <CartIcon />
            </li>
          </ul>
        </header>
        {!authModalHidden ? renderModal() : null}
      </Fragment>
    );
  };

  return renderHeader();
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
