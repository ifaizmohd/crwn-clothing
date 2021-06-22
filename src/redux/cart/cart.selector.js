const { createSelector } = require("reselect");

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumuledQuantity, cartItem) => accumuledQuantity + cartItem.quantity,
      0
    )
);
