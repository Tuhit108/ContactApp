import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import {ContactState} from "../types";
type initialStateType = {
  contactList: ContactState[];
};
const contactList:ContactState[] = [
  {key: 1, value: 'Nguyễn',lastName:'Tiến Nam', phones: ['0327942405','0266338','0266338','0266338'],position : 'Mobile',emails :['nam@gmail.com'],avatar:'https://source.unsplash.com/random/200x200?sig=incrementingkeyentifier',addresses: ['Hai Ba Trung'],birthday:['10/3'],company:'Google'},
  {key: 2, value: 'Vũ',lastName:'Mạnh Linh', phones: ['0327942405'],position : 'UI/UX Design',emails :['dautu@gmail.com',] ,avatar:'https://source.unsplash.com/random/200x200?sig=3',addresses:[] ,birthday:[],company:'Google'},
  {key: 3, value: 'Trần',lastName:'Thái Hà', phones: ['0321287805'],position : 'Mobile',emails :[],avatar:'https://source.unsplash.com/random/200x200?sig=10',addresses: [],birthday:[],company:'Google'},
]

const initialState: initialStateType = {contactList,};
export const contact = createSlice({
    name: 'contact',
    initialState,
    reducers:{
      addNewContact: (state, action :PayloadAction<ContactState>)=>{
        state.contactList.push(action.payload)
      },
      updateContact: (state, action: PayloadAction<ContactState>) => {


        state.contactList = state.contactList.map((contact) =>
          contact.key === action.payload.key ? action.payload : contact
        );
      },
      deleteContact: (state, action: PayloadAction<{ key:number}>) => {
        state.contactList = state.contactList.filter(
          (book) => book.key != action.payload.key
        );
      },
    },

  }
);


export const {addNewContact,deleteContact,updateContact}=contact.actions;
export default contact.reducer;
