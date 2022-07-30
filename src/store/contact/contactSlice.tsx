import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactState } from "../../types";

type initialStateType = {
  contactList: ContactState[];
};
const contactList: ContactState[] = [
  {
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
  {
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
  },
  {
    key: 3,
    value: "Trầnnn",
    lastName: "Thái Hà",
    phones: ["0321287805"],
    position: "Mobile",
    emails: [],
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    addresses: [],
    birthday: [],
    company: "Google"
  },
  {
    key: 4,
    value: "Nguyễn",
    lastName: "Tiến Hùng",
    phones: ["0327942405", "0266338", "0266338", "0266338"],
    position: "Mobile",
    emails: ["nam@gmail.com","dh@gmail.com"],
    avatar: "https://randomuser.me/api/portraits/men/16.jpg",
    addresses: ["Hai Ba Trung"],
    birthday: ["10/3"],
    company: "Googlee"
  },

];

const initialState: initialStateType = { contactList };
export const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {

      updateContact: (state, action: PayloadAction<ContactState>) => {
        const checkitem= state.contactList.find(item => item.key === action.payload.key)
        if(checkitem){state.contactList = state.contactList.map((contact) =>
          contact.key === action.payload.key ? action.payload : contact
        );}
        else {
          state.contactList.push(action.payload);
        }
      },
      deleteContact: (state, action: PayloadAction<{ key: number }>) => {
        state.contactList = state.contactList.filter(
          (contact) => contact.key != action.payload.key
        );
      }
    }

  }
);


export const {  deleteContact, updateContact } = contactSlice.actions;
export default contactSlice.reducer;
