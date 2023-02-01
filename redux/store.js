import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { filterSlice } from "./filterSlice";
import { commentApi } from "./commentApi";

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    commentApi.middleware,
  ],
});

setupListeners(store.dispatch);
