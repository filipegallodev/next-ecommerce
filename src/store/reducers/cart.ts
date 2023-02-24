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
    openCart(state) {
      state.open = true;
    },
    closeCart(state) {
      state.open = false;
    },
  },
});

export const { addProduct, openCart, closeCart } = slice.actions;

export default slice.reducer;
