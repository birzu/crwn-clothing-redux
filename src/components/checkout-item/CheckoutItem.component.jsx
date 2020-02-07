import React from 'react';
import { connect } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
  decCartItemQuantity
} from '../../redux/reducers/cart.reducer';

import './CheckoutItem.styles.scss';
import { selectCartItemTotalPriceById } from '../../redux/selectors/cart.selectors';

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item)),
  removeItem: itemId => dispatch(removeItemFromCart(itemId)),
  decreaseQuantity: itemId => dispatch(decCartItemQuantity(itemId))
});

const mapStateToProps = (state, { item: { id } }) => ({
  itemPriceTotal: selectCartItemTotalPriceById(state)(id)
});

const CheckoutItem = ({
  item,
  removeItem,
  decreaseQuantity,
  addItem,
  itemPriceTotal
}) => {
  const { name, id, imageUrl, quantity } = item;

  return (
    <div className="checkout-item">
      <div className="checkout-item__img-wrapper">
        <img
          className="checkout-item__img"
          src={imageUrl}
          alt={`${name}`}
        ></img>
      </div>
      <div className="checkout-item__details">
        <p className="checkout-item__name">{name}</p>
        <p className="checkout-item__price">${itemPriceTotal}</p>
      </div>
      <div className="checkout-item__quantity-wrapper">
        <p
          className="checkout-item__quantity-dec"
          onClick={e => {
            e.stopPropagation();
            decreaseQuantity(id);
          }}
        >
          &#10094;
        </p>
        <p className="checkout-item__quantity">{quantity}</p>
        <p
          className="checkout-item__quantity-inc"
          onClick={e => {
            e.stopPropagation();
            addItem(item);
          }}
        >
          &#10095;
        </p>
      </div>
      <div
        className="checkout-item__remove"
        onClick={e => {
          e.stopPropagation();
          removeItem(id);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
