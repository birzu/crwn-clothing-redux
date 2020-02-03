import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import FormModal from '../form/form-modal/FormModal.component';

import { toggleAuthModalHidden } from '../../redux/reducers/auth.reducer';
import { selectAuthModalHidden } from '../../redux/selectors/auth.selectors';

import CartIcon from '../cart-icon/CartIcon.component';
import './Header.styles.scss';

const mapStateToProps = createStructuredSelector({
  authModalHidden: selectAuthModalHidden
});

const mapDispatchToProps = dispatch => ({
  toggleAuthModalHidden: () => dispatch(toggleAuthModalHidden())
});

const Header = ({ authModalHidden, toggleAuthModalHidden }) => {
  const renderModal = () => {
    return <FormModal />;
  };
  const renderHeader = () => {
    return (
      <Fragment>
        <header className="app-header">
          <Logo className="app-header__logo" />
          <ul className="app-header__nav">
            <li className="app-header__nav-item">SHOP</li>
            <li
              className="app-header__nav-item"
              onClick={() => toggleAuthModalHidden()}
            >
              SIGN IN
            </li>
            <li className="app-header__nav-item">REGISTER</li>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
