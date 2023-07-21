import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart";
import counterReducre from "./counter";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    counter: counterReducre,
  },
});

export default store;
