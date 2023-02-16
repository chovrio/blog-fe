import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./article";
const store = configureStore({
  reducer: {
    article: articleReducer,
  },
  devTools: false,
});

export default store;
