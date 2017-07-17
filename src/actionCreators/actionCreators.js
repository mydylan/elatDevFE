import {
  DATA_FAILURE,
  GET_CONTACTS,
  GET_HISTORY,
  CREATE_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SHOW_FORM,
  HIDE_FORM
} from '../constants/constants';

export function dataFailureAction(error) {
  return {
    type: DATA_FAILURE,
    error
  };
}

export function getContactsAction(data) {
  return {
    type: GET_CONTACTS,
    payload: {
      data
    },
    error: false
  };
}

export function getHistoryAction(data, id) {
  return {
    type: GET_HISTORY,
    payload: {
      data, id
    },
    error: false
  };
}

export function createContactAction(data) {
  return {
    type: CREATE_CONTACT,
    payload: {
      data
    },
    metadata: {
      isActiveForm: false
    },
    error: false
  };
}

export function updateContactAction(data, id) {
  return {
    type: UPDATE_CONTACT,
    payload: {
      data, id
    },
    metadata: {
      isActiveForm: false
    },
    error: false
  };
}

export function deleteContactAction(id) {
  return {
    type: DELETE_CONTACT,
    payload: {
      id
    },
    error: false
  };
}

export function showFormAction(id) {
  return {
    type: SHOW_FORM,
    payload: {
      id
    },
    metadata: {
      isActiveForm: true
    }
  };
}

export function hideFormAction() {
  return {
    type: HIDE_FORM,
    metadata: {
      isActiveForm: false
    }
  };
}
