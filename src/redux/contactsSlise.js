import { createSlice } from '@reduxjs/toolkit';
import shortid from "shortid";
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const LS_KEY = 'render_contact_key';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.items.push(payload);
      },
      prepare: newContact => {
        return {
          payload: { ...newContact, id: shortid() },
        };
      },
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(contactId => contactId.id !== payload);
    },
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

const persistedContactsSlice = persistReducer(
  { key: LS_KEY, storage, whitelist: ['items'] },
  contactsSlice.reducer
);

export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;

export default persistedContactsSlice;