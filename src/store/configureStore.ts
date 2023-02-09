import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cart from "./reducers/cart";
import product from "./reducers/product";

const reducer = combineReducers({ product, cart });
const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
