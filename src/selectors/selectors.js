import { createSelector } from 'reselect';

const contactById = (contacts, id) => {
  return contacts.find((contact) => {
    return contact.id === id;
  });
};

const contactsSelector = (state) => {
  return state.contactList.contacts;
};

const idSelector = (state) => {
  return state.contactList.selectedId;
};

const isLoadingSelector = (state) => {
  return state.contactList.isLoading;
};

const isActiveSelector = (state) => {
  return state.contactList.isActiveForm;
};

const contactByIdSelector = createSelector(
  contactsSelector,
  idSelector,
  contactById
);

export {
  contactsSelector,
  isActiveSelector,
  isLoadingSelector,
  contactByIdSelector,
  idSelector
};
