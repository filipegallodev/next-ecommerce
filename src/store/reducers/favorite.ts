import {
  loadFavoriteFromLocalStorage,
  saveFavoriteOnLocalStorage,
} from "@/helper/localStorage";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favorite",
  initialState: {
    empty: loadFavoriteFromLocalStorage() ? false : true,
    items: loadFavoriteFromLocalStorage()
      ? loadFavoriteFromLocalStorage()
      : <IProduct[]>[],
  },
  reducers: {
    saveFavorite(state, action) {
      state.items.push(action.payload);
      state.empty = false;
      saveFavoriteOnLocalStorage(state.items);
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
