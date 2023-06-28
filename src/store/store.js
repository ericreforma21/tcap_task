import { configureStore } from "@reduxjs/toolkit";
import storeReducer from './storeReducer';

export const store = configureStore({
  reducer: storeReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
