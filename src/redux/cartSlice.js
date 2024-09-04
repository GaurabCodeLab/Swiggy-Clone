import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    resDetails: null,
    cartItems: [],
    quantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItem: (state) => {
      state.cartItems.pop();
    },
    clearCart: (state) => {
      state.cartItems.length = 0;
      state.totalAmount = 0;
      state.quantity = 0;
    },
    getResDetails: (state, action) => {
      state.resDetails = action.payload;
    },
    totalAmount: (state, action) => {
      state.totalAmount =
        state.totalAmount + Number(Number(action.payload).toFixed(2));
    },
    increaseQuantity: (state) => {
      state.quantity++;
    },
    decreaseQuantity: (state) => {
      state.quantity--;
    },
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  removeItem,
  clearCart,
  getResDetails,
  totalAmount,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
