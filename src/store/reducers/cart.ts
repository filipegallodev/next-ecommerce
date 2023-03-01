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
        if (product.id === action.payload.id && product.amount) {
          product.amount += 1;
          return product;
        }
        return product;
      });

      if (!state.items.find((product) => product.id === action.payload.id)) {
        state.items.push({
          ...action.payload,
          amount: 1,
        });
      }
    },
    removeOneProduct(state, action) {
      state.totalPrice -= action.payload.price;

      state.items = state.items.filter((product) => {
        if (product.id !== action.payload.id) return product;
        if (product.amount) {
          product.amount -= 1;
          console.log(product.amount);
          if (product.amount >= 1) return product;
        }
      });

      if (state.items.length === 0) state.empty = true;
    },
    removeProduct(state, action) {
      state.items = state.items.filter((product) => {
        if (product.id !== action.payload.id) return product;
        state.totalPrice -= product.amount
          ? product.amount * product.price
          : product.price;
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

export const {
  addProduct,
  removeOneProduct,
  removeProduct,
  openCart,
  closeCart,
} = slice.actions;

export default slice.reducer;
