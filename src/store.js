import { configureStore } from "@reduxjs/toolkit";
import count from "./counterSlice";
import kreslaSlice from './kreslaSlice'

export const store = configureStore({
  reducer: {
    counter:count,
    kresla:kreslaSlice
  },
});
