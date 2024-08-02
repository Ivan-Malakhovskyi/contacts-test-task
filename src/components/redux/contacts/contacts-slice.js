import { createSlice } from "@reduxjs/toolkit";
import { getContactsList } from "./contacts-operations";

const handelPending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],

    isLoading: false,
    isError: null,
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter((contact) => {
        contact.id !== action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getContactsList.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.isError = null;
    });
    builder.addCase(getContactsList.pending, handelPending);
    builder.addCase(getContactsList.rejected, handleRejected);
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
