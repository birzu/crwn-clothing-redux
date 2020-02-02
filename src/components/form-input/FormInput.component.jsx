import React, { Fragment } from 'react';

import './FormInput.styles.scss';

const FormInput = ({
  inputRef,
  text,
  id,
  inputCls,
  labelCls,
  children,
  ...otherProps
}) => {
  return (
    <Fragment>
      {otherProps.label ? (
        <label className={labelCls} htmlFor={id}>
          {otherProps.label}
        </label>
      ) : null}
      <div className={`${inputCls}-wrapper`}>
        <input id={id} ref={inputRef} className={inputCls} {...otherProps}>
          {text}
        </input>
        {children}
      </div>
    </Fragment>
  );
};

export default FormInput;
