import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleAuthModalHidden } from '../../redux/reducers/auth.reducer';

import './AuthModalHeader.styles.scss';

const mapDispatchToProps = dispatch => ({
  toggleAuthModalHidden: () => dispatch(toggleAuthModalHidden())
});

const AuthModalHeader = ({ toggleAuthModalHidden }) => {
  return (
    <div className="auth-modal-header">
      <div className="auth-modal-header__title heading-3 title-active">
        Sign In
      </div>
      <span className="title-separator">&#10072;</span>
      <div className="auth-modal-header__title heading-3">Register</div>
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
