import React from 'react';
import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';

import './CartIcon.styles.scss';
const CartIcon = () => {
  return (
    <div className="cart-icon">
      <Icon className="cart-icon__img" />
      <span className="cart-icon__quantity">5</span>
    </div>
  );
};

export default CartIcon;
