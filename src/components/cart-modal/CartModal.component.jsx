import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { clearCart, hideCart } from '../../redux/reducers/cart.reducer';
import { selectCartItems } from '../../redux/selectors/cart.selectors';

import CartItem from '../cart-item/CartItem.component';

import './CartModal.styles.scss';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart()),
  hideCart: () => dispatch(hideCart())
});

const CartModal = ({ cartItems, clearCart, history, hideCart }) => {
  const renderCartItems = items => {
    return (
      <div className="cart-modal" onClick={e => e.stopPropagation()}>
        <div className="cart-modal__header"></div>
        <div className="cart-modal__content">
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="cart-modal__actions">
          <p className="cart-modal__clear-cart" onClick={() => clearCart()}>
            Clear cart
          </p>
          <p
            className="cart-modal__to-checkout"
            onClick={() => {
              hideCart();
              history.push('/checkout');
            }}
          >
            Checkout
          </p>
        </div>
      </div>
    );
  };

  const renderEmptyCart = () => {
    return (
      <div className="cart-modal">
        <div className="cart-modal__header cart-modal__header--empty">
          Cart is empty!
        </div>
        <div className="cart-modal__actions">
          <p className="cart-modal__to-shop">
            <Link to="/shop" className="link cart-modal__link-to-shop">
              Browse shop
            </Link>
          </p>
        </div>
      </div>
    );
  };

  return cartItems.length ? renderCartItems(cartItems) : renderEmptyCart();
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartModal)
);
