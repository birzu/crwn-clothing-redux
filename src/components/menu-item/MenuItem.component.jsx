import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.styles.scss';

const MenuItem = ({ _collectionId, size, title, imageUrl, history }) => {
  return (
    <figure
      className={`menu-item ${size ? `menu-item--${size}` : ''}`}
      onClick={e => {
        e.stopPropagation();
        history.push(`/collections/${_collectionId}`);
      }}
    >
      <img src={imageUrl} className="menu-item__img" alt="menu"></img>
      <figcaption className="menu-item__details">
        <h4 className="menu-item__title heading-4">{title.toUpperCase()}</h4>
        <span className="menu-item__shop-text">SHOP NOW</span>
      </figcaption>
    </figure>
  );
};

export default withRouter(MenuItem);
