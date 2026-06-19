export const selectWishlistItems = (state) => state.cart.items;

export const selectWishlistTotalItems = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
