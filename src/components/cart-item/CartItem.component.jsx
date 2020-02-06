import React from 'react';
import { connect } from 'react-redux';

import {
  removeItemFromCart,
  addItemToCart,
  decCartItemQuantity
} from '../../redux/reducers/cart.reducer';

import './CartItem.styles.scss';

const mapDispatchToProps = dispatch => ({
  removeItem: itemId => dispatch(removeItemFromCart(itemId)),
  addItem: item => dispatch(addItemToCart(item)),
  decraseQuantity: itemId => dispatch(decCartItemQuantity(itemId))
});

const CartItem = ({ item, removeItem, addItem, decraseQuantity }) => {
  const { imageUrl, name, price, quantity, id } = item;
  return (
    <div className="cart-item">
      <img className="cart-item__img" src={imageUrl} alt={name}></img>
      <div className="cart-item__details">
        <p className="cart-item__name">{name}</p>
        <p className="cart-item__price">${price}</p>
      </div>
      <div className="cart-item__actions">
        <p
          className="cart-item__quantity-dec"
          onClick={() => decraseQuantity(id)}
        >
          &#10094;
        </p>
        <p className="cart-item__quantity">{quantity}</p>
        <p className="cart-item__quantity-inc" onClick={() => addItem(item)}>
          &#10095;
        </p>
      </div>
      <div className="cart-item__remove" onClick={() => removeItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CartItem);
