import {
  DATA_REQUEST,
  DATA_FAILURE,
  GET_CONTACTS,
  GET_HISTORY,
  CREATE_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  UPDATE_PAGINATION,
  SHOW_FORM
} from '../constants/constants';

const addHistory = ({ data, id }) => {
  return (contact) => {
    return contact.id === id ? { ...contact, history: data } : contact;
  };
};

const updateContact = ({ data, id }) => {
  return (contact) => {
    return contact.id === id ? { ...contact, ...data } : contact;
  };
};

const deleteContact = (id) => {
  return (contact) => {
    return contact.id !== id;
  };
};

const ACTION_HANDLERS = {
  [DATA_REQUEST]: (state, action) => ({
    ...state,
    ...action.metadata
  }),
  [DATA_FAILURE]: (state, action) => ({
    ...state,
    ...action.metadata,
    error: action.error
  }),
  [GET_CONTACTS]: (state, action) => ({
    ...state,
    contacts: action.payload.data,
    ...action.metadata
  }),
  [GET_HISTORY]: (state, action) => ({
    ...state,
    contacts: state.contacts.map(addHistory(action.payload)),
    ...action.metadata
  }),
  [CREATE_CONTACT]: (state, action) => ({
    ...state,
    contacts: [...state.contacts, action.payload.data],
    ...action.metadata
  }),
  [UPDATE_CONTACT]: (state, action) => ({
    ...state,
    contacts: state.contacts.map(updateContact(action.payload)),
    selectedId: action.payload.id,
    ...action.metadata
  }),
  [DELETE_CONTACT]: (state, action) => ({
    ...state,
    contacts: state.contacts.filter(deleteContact(action.payload.id)),
    ...action.metadata
  }),
  [UPDATE_PAGINATION]: (state, action) => ({
    ...state,
    page: action.payload.page,
    limit: action.payload.limit,
    ...action.metadata
  }),
  [SHOW_FORM]: (state, action) => ({
    ...state,
    selectedId: action.payload.id,
    ...action.metadata
  })
};

const initialState = {
  contacts: [],
  isLoading: false,
  isActiveForm: false,
  selectedId: false,
  page: 1,
  limit: 10,
  error: false
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
