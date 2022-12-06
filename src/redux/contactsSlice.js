import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const rejectAction = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const fulfilledAction = (state, action) => {
  state.error = null;
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      fulfilledAction(state, action);
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      rejectAction(state, action);
    },
    [addContact.pending](state, action) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      fulfilledAction(state, action);
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      rejectAction(state, action);
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      fulfilledAction(state, action);
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      rejectAction(state, action);
    },
  },
});

export const { addedContact, deletedContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
