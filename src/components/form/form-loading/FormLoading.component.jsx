import React from 'react';

import './FormLoading.styles.scss';

const FormLoading = ({ signin }) => {
  return (
    <div
      className={`form-loading ${
        signin ? 'form-loading--signin' : 'form-loading--register'
      }`}
    >
      <div className="form-loading__msg">
        {signin
          ? 'Please wait... logging in'
          : 'Please wait... registering as new user'}
      </div>
      <div className="form-loading__anim">
        <div className="form-loading__circle form-loading__circle--1"></div>
        <div className="form-loading__circle form-loading__circle--2"></div>
        <div className="form-loading__circle form-loading__circle--3"></div>
      </div>
    </div>
  );
};

export default FormLoading;
