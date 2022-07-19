import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import {ContactState} from "../types";
type initialStateType = {
  contactList: ContactState[];
};
const contactList:ContactState[] = [
  {key: 1, value: 'Nguyễn',lastName:'Tiến Nam', phone: ['0327942405','0266338','0266338','0266338'],position : 'Mobile',email :['nam@gmail.com'],avatar:'https://source.unsplash.com/random/200x200?sig=incrementingkeyentifier',addresses: ['Hai Ba Trung'],birthday:['10/3'],company:'Google'},
  {key: 2, value: 'Vũ',lastName:'Mạnh Linh', phone: ['0327942405'],position : 'UI/UX Design',email :['dautu@gmail.com',] ,avatar:'https://source.unsplash.com/random/200x200?sig=3',addresses:[] ,birthday:[],company:'Google'},
  {key: 3, value: 'Trần',lastName:'Thái Hà', phone: ['0321287805'],position : 'Mobile',email :[],avatar:'https://source.unsplash.com/random/200x200?sig=10',addresses: [],birthday:[],company:'Google'},
]

const initialState: initialStateType = {contactList,};
export const contact = createSlice({
    name: 'contact',
    initialState,
    reducers:{
      addNewContact: (state, action :PayloadAction<ContactState>)=>{
        state.contactList.push(action.payload)
      }
    },

  }
);


export const {addNewContact}=contact.actions;
export default contact.reducer;
