import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/operations';

function isPendingAction(action) {
  return action.type.endsWith('pending');
}

function RejectedAction(action) {
  return action.type.endsWith('rejected');
}

function FulfilledAction(action) {
  action.type.endsWith('fulfilled');
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => ({
        items: state.items.filter(contact => contact.id !== action.payload.id),
        isLoading: false,
      }))
      .addMatcher(isPendingAction, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(RejectedAction, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(FulfilledAction, (state, action) => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
