import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector([selectShop], shop =>
  Object.keys(shop.collections).length ? { ...shop.collections } : {}
);

export const selectCollectionByTitle = createSelector(
  [selectShop],
  shop => colTitle =>
    shop.collections[colTitle.toLowerCase()]
      ? shop.collections[colTitle.toLowerCase()].items
      : []
);

export const selectCollectionsExists = createSelector(
  [selectShop],
  shop => !!Object.keys(shop.collections).length
);
