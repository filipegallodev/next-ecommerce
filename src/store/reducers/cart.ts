import { isProduct } from "@/helper/verifyTypes";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: <ICart>{
    open: false,
    empty: true,
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addProduct(state, action) {
      if (!isProduct(action.payload)) return;
      state.empty = false;
      state.items.push(action.payload);
      state.totalPrice += action.payload.price;
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
