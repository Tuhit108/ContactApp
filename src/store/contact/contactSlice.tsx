import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RawContact } from "../../types";


const initialState: {
  byKey: { [id: string]: RawContact },
  query: {
    [id: string]: string[]
  }
} = {
  byKey: {},
  query: {
    all: []
  }
};
export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateContact: (state, action: PayloadAction<RawContact>) => {
      let byKey = { ...state.byKey, [action.payload.id]: action.payload };
      let query = { ...state.query, all: Object.keys(byKey) };
      return { byKey, query };
    },
    deleteContact: (state, action: PayloadAction<{ id: string }>) => {
      let byKey = { ...state.byKey };
      delete byKey[action.payload.id];
      let query = { ...state.query, all: Object.keys(byKey) };
      return { byKey, query };
    }
  }
});


export const { deleteContact, updateContact } = contactSlice.actions;
export default contactSlice.reducer;
