import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/selectors/cart.selectors';

import CheckoutItem from '../checkout-item/CheckoutItem.component';
import CheckoutSummary from '../checkout-summary/CheckoutSummary.component';

import './CheckoutOverview.styles.scss';

const mapStateToProps = createStructuredSelector({
  checkoutItems: selectCartItems
});

const CheckoutOverview = ({ checkoutItems }) => {
  const renderCheckoutHeader = () => (
    <div className="checkout-overview__header">
      <p className="checkout-overview__header-title checkout-overview__header-title--item">
        Item
      </p>
      <p className="checkout-overview__header-title checkout-overview__header-title--details">
        Details
      </p>
      <p className="checkout-overview__header-title checkout-overview__header-title--quantity">
        Quantity
      </p>
      <p className="checkout-overview__header-title checkout-overview__header-title--remove">
        Remove
      </p>
    </div>
  );

  const renderEmptyOverview = () => {
    return (
      <div className="checkout-overview checkout-overview--empty">
        <div className="checkout-overview__content">
          <p className="checkout-overview__msg">Your shopping cart is empty!</p>
        </div>
      </div>
    );
  };

  const renderOverview = items => (
    <div className="checkout-overview">
      {renderCheckoutHeader()}
      <div className="checkout-overview__content">
        {items.map(item => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </div>
      <div className="checkout-overview__summary">
        <CheckoutSummary />
      </div>
    </div>
  );

  return checkoutItems.length
    ? renderOverview(checkoutItems)
    : renderEmptyOverview();
};

export default connect(mapStateToProps, null)(CheckoutOverview);
