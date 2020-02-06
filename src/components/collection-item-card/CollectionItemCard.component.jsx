import React from 'react';
import { connect } from 'react-redux';

import { addItemToCart } from '../../redux/reducers/cart.reducer';

import { ReactComponent as CartIcon } from '../../assets/iconmonstr-shopping-cart-2.svg';
import CustomButton from '../custom-button/CustomButton.component';

import './CollectionItemCard.styles.scss';

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
});

const CollectionItemCard = ({ item, addItemToCart }) => {
  const { imageUrl, name, price } = item;
  console.log(item);
  return (
    <div className="collection-item-card">
      <div className="collection-item-card__overlay"></div>
      <img
        src={imageUrl}
        className="collection-item-card__img"
        alt={`${name}`}
      ></img>
      <div className="collection-item-card__details">
        <p className="collection-item-card__name">{name}</p>
        <p className="collection-item-card__price">${price}</p>
      </div>
      <CustomButton
        type="button"
        cls="btn--cart collection-item-card__btn"
        text="Add to cart"
        onClick={e => {
          e.stopPropagation();
          addItemToCart(item);
        }}
      >
        <CartIcon className="btn__inner-icon btn__inner-icon--cart" />
      </CustomButton>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CollectionItemCard);
