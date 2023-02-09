import { isProduct } from "@/helper/verifyTypes";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: <ICart>{
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
  },
});

export const { addProduct } = slice.actions;

export default slice.reducer;
