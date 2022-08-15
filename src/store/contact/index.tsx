import {RawContact} from "@/types";
import {useSelector, batch} from 'react-redux';
import {createDynamicReducer} from "@/utils/createDynamicReducers";
import { RootState, store } from "@/store";

// Tao ra mot mang rong voi kieu phan tu la RawContact
const initContact = {
  byKey: {},
  query: {all:[]},
};

const {setStore, reducer, sync, useByKey, setQueries,removeByKey} =
  createDynamicReducer<RawContact>('contacts', 'id', initContact);

export const setContactStore = setStore;
export const contactReducer = reducer;
export const useContact = useByKey;
export const syncContact = sync;
export const setContactQueries = setQueries;
export const removeContactByKey = removeByKey;

export const updateContact = (contacts: RawContact[]) => {
  let query: {[id: string]: string[]} = {};
  let ids = store.getState()?.contacts?.query['all'] || [];
  for (let contact of contacts) {
    ids = ids.concat([contact.id.toString()]);
  }
  batch(() => {
    syncContact(contacts);
    setContactQueries({
      all:[...new Set(ids)],
      ...query,
    });
  });
};

export const removeContact = (id: string) => {
  const ids = store.getState()?.contacts?.query['all'] || [];
  let _contacts: string[] = ids.filter(_id => _id !== id);
  batch(() => {
    removeContactByKey(id)
    setContactQueries({
      all: _contacts,
    });
  });
};

export const useContacts = () => {
  return useSelector((state: RootState) => state.contacts);
};


