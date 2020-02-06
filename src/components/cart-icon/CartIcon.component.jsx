import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';

import { selectCartTotalQuantity } from '../../redux/selectors/cart.selectors';
import './CartIcon.styles.scss';

const mapStateToProps = createStructuredSelector({
  cartTotalQuantity: selectCartTotalQuantity
});

const CartIcon = ({ cartTotalQuantity }) => {
  return (
    <div className="cart-icon">
      <Icon className="cart-icon__img" />
      <span className="cart-icon__quantity">{cartTotalQuantity}</span>
    </div>
  );
};

export default connect(mapStateToProps, null)(CartIcon);
