export const selectContacts = (state) => state.contacts.items;

export const selectContactById = (state) => state.contacts.contactInfo;

export const selectLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.isError;
