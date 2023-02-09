import { Action, AnyAction, createSlice, Dispatch } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchError(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

export const fetchProducts = () => async (dispatch: Dispatch<Action<string>>) => {
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

export default slice.reducer;
