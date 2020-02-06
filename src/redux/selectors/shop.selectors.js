import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector([selectShop], shop =>
  Object.keys(shop.collections).length ? { ...shop.collections } : {}
);

export const selectCollectionById = createSelector(
  [selectShop],
  shop => collectionId =>
    shop.collections[collectionId] ? shop.collections[collectionId] : {}
);

export const selectCollectionsExists = createSelector(
  [selectShop],
  shop => !!Object.keys(shop.collections).length
);
