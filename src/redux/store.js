import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/main_slice";

export default configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});
