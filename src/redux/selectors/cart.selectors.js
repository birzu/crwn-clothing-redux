import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => {
  console.log(cart.items);
  return !!cart.items ? Object.values(cart.items) : [];
});

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.cartHidden
);

export const selectCartTotalQuantity = createSelector([selectCart], cart =>
  Object.values(cart.items).length
    ? Object.values(cart.items).reduce((acc, item) => acc + item.quantity, 0)
    : 0
);
