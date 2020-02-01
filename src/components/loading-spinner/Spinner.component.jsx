import React from 'react';

import './Spinner.styles.scss';

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner__dot spinner__dot--1"></div>
      <div className="spinner__dot spinner__dot--2"></div>
      <div className="spinner__dot spinner__dot--3"></div>
      <div className="spinner__dot spinner__dot--4"></div>
      <div className="spinner__dot spinner__dot--5"></div>
      <div className="spinner__dot spinner__dot--6"></div>
    </div>
  );
};

export default Spinner;
