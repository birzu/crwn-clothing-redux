import React from 'react';

import './CustomButton.styles.scss';

const CustomButton = ({ text, cls, children, ...otherProps }) => {
  return (
    <button className={`btn ${cls}`} {...otherProps}>
      {children}
      {text}
    </button>
  );
};

export default CustomButton;
