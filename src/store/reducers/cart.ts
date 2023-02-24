import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    open: false,
    empty: true,
    items: <IProduct[]>[],
    totalPrice: 0,
  },
  reducers: {
    addProduct(state, action) {
      state.empty = false;
      state.totalPrice += action.payload.price;

      state.items.filter((product) => {
        if (product.id === action.payload.id && product.quantity) {
          product.quantity += 1;
          product.price += action.payload.price;
          return product;
        }
        return product;
      });

      if (!state.items.find((product) => product.id === action.payload.id)) {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeProduct(state, action) {
      state.items = state.items.filter((product) => {
        if (product.id !== action.payload.id) return product;
        state.totalPrice -= product.price;
      });

      if (state.items.length === 0) state.empty = true;
    },
    openCart(state) {
      state.open = true;
    },
    closeCart(state) {
      state.open = false;
    },
  },
});

export const { addProduct, removeProduct, openCart, closeCart } = slice.actions;

export default slice.reducer;
