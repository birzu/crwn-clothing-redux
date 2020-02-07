import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as LockIcon } from '../../assets/iconmonstr-lock-1.svg';
import CustomButton from '../custom-button/CustomButton.component';
import {
  selectCartTotalQuantity,
  selectCartTotalPrice
} from '../../redux/selectors/cart.selectors';

import './CheckoutSummary.styles.scss';

const mapStateToProps = createStructuredSelector({
  totalItems: selectCartTotalQuantity,
  totalPrice: selectCartTotalPrice
});

const CheckoutSummary = ({ totalItems, totalPrice }) => {
  return (
    <div className="checkout-summary">
      <h4 className="checkout-summary__heading heading-4">Order Summary</h4>
      <div className="checkout-summary__total-box checkout-summary__total-box--items">
        <span className="checkout-summary__text">Total items</span>
        <span className="checkout-summary__item-count">{totalItems}</span>
      </div>
      <div className="checkout-summary__total-box checkout-summary__total-box--price">
        <span className="checkout-summary__text">Total Price</span>
        <span className="checkout-summary__price">${totalPrice}</span>
      </div>
      <CustomButton
        className="btn btn--proceed-checkout checkout-summary__btn"
        text="Proceed to Checkout"
      >
        <LockIcon className="btn__inner-icon btn__inner-icon--lock-checkout" />
      </CustomButton>
    </div>
  );
};

export default connect(mapStateToProps, null)(CheckoutSummary);
