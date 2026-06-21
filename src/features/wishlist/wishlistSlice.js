import { createSlice } from "@reduxjs/toolkit";
import { loadWishlist } from "./wishlistStorage";

const initialState = {
  items: loadWishlist(),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,

  reducers: {
    addToWishlist(state, action) {
      const product = action.payload;

      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) return;

      state.items.push(product);
    },

    removeFromWishlist(state, action) {
      const productId = action.payload;

      state.items = state.items.filter((item) => item.id !== productId);
    },

    clearWishlist(state) {
      state.items = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
