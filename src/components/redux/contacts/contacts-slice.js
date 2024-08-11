import { createSlice } from "@reduxjs/toolkit";
import {
  addTagToContact,
  createContact,
  deleteContactById,
  getContactById,
  getContactsList,
} from "./contacts-operations";

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
    contactInfo: [],
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
    builder.addCase(getContactById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = null;
      state.contactInfo = action.payload;
    });
    builder.addCase(getContactById.pending, handelPending),
      builder.addCase(getContactById.rejected, handleRejected);
    builder.addCase(createContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = null;
      state.items.unshift(action.payload);
    });
    builder.addCase(createContact.pending, handelPending),
      builder.addCase(createContact.rejected, handleRejected);
    builder.addCase(deleteContactById.fulfilled, (state, action) => {
      state.isError = null;
      state.isLoading = false;
      state.items = state.items.filter(
        (item) => item.id !== action.payload.ids[0]
      );
    });
    builder.addCase(deleteContactById.pending, handelPending);
    builder.addCase(deleteContactById.rejected, handleRejected);
    builder.addCase(addTagToContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = null;

      state.contactInfo[0].tags = [...action.payload.tags];
    });
    builder.addCase(addTagToContact.pending, handelPending);
    builder.addCase(addTagToContact.rejected, handleRejected);
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
