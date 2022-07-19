import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contact } from '../reducer/contact';

export const rootReducer = combineReducers({
  contacts: contact.reducer,

});
export const store = configureStore({
  reducer: {
    contact: contact.reducer,
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
