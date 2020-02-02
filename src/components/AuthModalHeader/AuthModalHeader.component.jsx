import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleAuthModalHidden } from '../../redux/reducers/auth.reducer';

import './AuthModalHeader.styles.scss';

const mapDispatchToProps = dispatch => ({
  toggleAuthModalHidden: () => dispatch(toggleAuthModalHidden())
});

const AuthModalHeader = ({ toggleAuthModalHidden }) => {
  const [titleActive, setTitleActive] = useState(1);
  return (
    <div className="auth-modal-header">
      <div
        onClick={() => setTitleActive(1)}
        className={
          titleActive === 1
            ? `auth-modal-header__title auth-modal-header__title--1 active`
            : 'auth-modal-header__title auth-modal-header__title--1'
        }
      >
        Sign In
      </div>
      <span className="title-separator"></span>
      <div
        onClick={() => setTitleActive(2)}
        className={
          titleActive === 2
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

export default withRouter(connect(null, mapDispatchToProps)(AuthModalHeader));
