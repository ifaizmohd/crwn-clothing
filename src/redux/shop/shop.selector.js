import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const selectShopCollection = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopCollection],
    (collections) => collections[collectionUrlParam]
  );

export const selectCollectionsOverview = createSelector(
  [selectShopCollection],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
