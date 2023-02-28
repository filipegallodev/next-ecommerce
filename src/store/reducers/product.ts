import { Action, createSlice, Dispatch } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    data: null,
    error: null,
    product: null,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.error = null;
      if (action.payload.length) {
        state.data = action.payload;
      } else {
        state.product = action.payload;
      }
    },
    fetchError(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

export const fetchProducts =
  () => async (dispatch: Dispatch<Action<string>>) => {
    try {
      dispatch(fetchStarted());
      const response = await fetch("https://fakestoreapi.com/products/");
      if (!response.ok) throw new Error("Error: " + response.status);
      const data = await response.json();
      dispatch(fetchSuccess(data));
    } catch (error) {
      if (error instanceof ErrorEvent) dispatch(fetchError(error.message));
    }
  };

export const fetchOneProduct =
  (id: string) => async (dispatch: Dispatch<Action<string>>) => {
    try {
      dispatch(fetchStarted());
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) throw new Error("Error: " + response.status);
      const data = await response.json();
      dispatch(fetchSuccess(data));
    } catch (error) {
      if (error instanceof ErrorEvent) dispatch(fetchError(error.message));
    }
  };

export default slice.reducer;
