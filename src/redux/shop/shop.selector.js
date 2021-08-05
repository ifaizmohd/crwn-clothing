import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const selectShopCollection = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopCollection], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectCollectionsOverview = createSelector(
  [selectShopCollection],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectIsFetching = createSelector(
  [shopSelector],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [shopSelector],
  (shop) => !!shop.collections
);
