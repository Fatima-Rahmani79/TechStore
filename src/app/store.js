import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import { saveCart } from "../features/cart/cartStorage";
import { saveWishlist } from "../features/wishlist/wishlistStorage";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

store.subscribe(() => {
  saveCart(store.getState().cart.items);
  saveWishlist(store.getState().wishlist.items);
});
