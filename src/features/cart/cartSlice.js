import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart(state, action) {
      const product = action.payload;

      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },

    removeFromCart(state, action) {
      const productId = action.payload;

      state.items = state.items.filter((item) => item.id !== productId);
    },

    increaseQuantity(state, action) {},

    decreaseQuantity(state, action) {},

    clearCart(state) {},
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
