import { loadFavoriteItems } from "@/helper/localStorage";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favorite",
  initialState: {
    empty: loadFavoriteItems() ? false : true,
    items: loadFavoriteItems() ? loadFavoriteItems() : <IProduct[]>[],
  },
  reducers: {
    saveFavorite(state, action) {
      state.items.push(action.payload);
      state.empty = false;
    },
    removeFavorite(state, action) {
      state.items = state.items.filter(
        (product: IProduct) => product.id !== action.payload.id
      );
      if (state.items.length === 0) {
        state.empty = true;
      }
    },
  },
});

export const { saveFavorite, removeFavorite } = slice.actions;

export default slice.reducer;
