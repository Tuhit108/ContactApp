import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import { contactSlice } from "./contact/contactSlice";
import { useSelector } from "react-redux";

const reducers = combineReducers({
  contact: contactSlice.reducer
});
const persistConfig = {
  key: "root",
  storage: AsyncStorage
};
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const useContacts = () => {
  return useSelector((state: RootState) => state.contact);
};

export const useContact = (contactId: string) => {
  return useSelector((state: RootState) => state?.contact?.byKey[contactId]);
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
