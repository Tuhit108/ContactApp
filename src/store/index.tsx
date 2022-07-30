import {  configureStore } from "@reduxjs/toolkit";
import { contactSlice } from './contact/contactSlice';
export const store = configureStore({
  reducer: {
    contact: contactSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
