import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import {
  toggleAuthModalHidden,
  toggleCurrentForm
} from '../../redux/reducers/auth.reducer';
import { selectCurrentForm } from '../../redux/selectors/auth.selectors';

import './AuthModalHeader.styles.scss';

const mapDispatchToProps = dispatch => ({
  toggleAuthModalHidden: () => dispatch(toggleAuthModalHidden()),
  toggleCurrentForm: formType => dispatch(toggleCurrentForm(formType))
});

const mapStateToProps = createStructuredSelector({
  currentForm: selectCurrentForm
});

const AuthModalHeader = ({
  toggleAuthModalHidden,
  toggleCurrentForm,
  currentForm
}) => {
  return (
    <div className="auth-modal-header">
      <div
        onClick={() => {
          toggleCurrentForm('signin');
        }}
        className={
          currentForm === 'signin'
            ? `auth-modal-header__title auth-modal-header__title--1 active`
            : 'auth-modal-header__title auth-modal-header__title--1'
        }
      >
        Sign In
      </div>
      <span className="title-separator"></span>
      <div
        onClick={() => {
          toggleCurrentForm('register');
        }}
        className={
          currentForm === 'register'
            ? `auth-modal-header__title auth-modal-header__title--2 active`
            : 'auth-modal-header__title auth-modal-header__title--2'
        }
      >
        Register
      </div>
      <div
        className="auth-modal-header__dismis"
        onClick={() => toggleAuthModalHidden()}
      >
        &#10005;
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthModalHeader);
