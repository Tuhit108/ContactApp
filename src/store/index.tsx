import {  configureStore } from "@reduxjs/toolkit";
import { contactSlice } from './contact/contactSlice';
import { useAppSelector } from "../hooks";
export const store = configureStore({
  reducer: {
    contact: contactSlice.reducer,
  },
});
export const useSelectContacts = () => {
  return useAppSelector((state: RootState) => state.contact);
};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
