import { createSelector } from 'reselect';

const contactById = (contacts, id) => {
  return contacts.find((contact) => {
    return contact.id === id;
  });
};

const contactsSelector = (state) => {
  return state.contacts;
};

const idSelector = (state) => {
  return state.selectedId;
};

const isLoadingSelector = (state) => {
  return state.isLoading;
};

const isActiveSelector = (state) => {
  return state.isActiveForm;
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
