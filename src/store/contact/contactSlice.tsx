import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactState } from "../../types";


const initialState = {
  byKey: {
    1: {
      key: 1,
      value: "Nguyễn",
      lastName: "Tiến Nam",
      phones: ["0327942405", "0266338", "0266338", "0266338"],
      position: "Mobile",
      emails: ["nam@gmail.com"],
      avatar: "https://randomuser.me/api/portraits/men/36.jpg",
      addresses: ["Hai Ba Trung"],
      birthday: ["10/3"],
      company: "Google"
    },
    2: {
      key: 2,
      value: "Vũ",
      lastName: "Mạnh Linh",
      phones: ["0327942405"],
      position: "UI/UX Design",
      emails: ["dautu@gmail.com"],
      avatar: "https://randomuser.me/api/portraits/men/26.jpg",
      addresses: [],
      birthday: [],
      company: "Google"
    }

  },
  query: { all: ["1", "2"] }
};
export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {

    updateContact: (state, action: PayloadAction<ContactState>) => {
      let byKey = { ...state.byKey, [action.payload.key]: action.payload };
      let query = { ...state.query, all: Object.keys(byKey) };
      return { byKey, query };
    },
    deleteContact: (state, action: PayloadAction<{ key: string }>) => {
      let byKey = { ...state.byKey };
      // @ts-ignore
      delete byKey[action.payload.key];
      let query = { ...state.query, all: Object.keys(byKey) };
      return { byKey, query };
    },
  }
  });


export const {  deleteContact, updateContact } = contactSlice.actions;
export default contactSlice.reducer;
