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
  return state.isLoadingSelector;
};

const isActiveSelector = (state) => {
  return state.isActiveSelector;
};

const pageSelector = (state) => {
  return state.page;
};

const limitSelector = (state) => {
  return state.limit;
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
  pageSelector,
  limitSelector
};
