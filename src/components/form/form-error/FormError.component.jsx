import React from 'react';
import { ErrorMessage } from 'react-hook-form';

import { ReactComponent as ErrorIcon } from '../../../assets/iconmonstr-warning-8.svg';

import './FormError.styles.scss';

const FormError = ({ errors, name }) => {
  return (
    <ErrorMessage className="error-msg" errors={errors} name={name}>
      {({ message }) => (
        <div className="form-error">
          <ErrorIcon className="form-error__icon" />
          <div className="form-error__msg">{message}</div>
        </div>
      )}
    </ErrorMessage>
  );
};

export default FormError;
