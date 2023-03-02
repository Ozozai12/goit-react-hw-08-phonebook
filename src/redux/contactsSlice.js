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
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        fulfilledAction(state, action);
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        rejectAction(state, action);
      })
      .addCase(addContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        fulfilledAction(state, action);
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        rejectAction(state, action);
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        fulfilledAction(state, action);
        const index = state.items.findIndex(
          contact => contact._id === action.payload._id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        rejectAction(state, action);
      }),
});

export const { addedContact, deletedContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
