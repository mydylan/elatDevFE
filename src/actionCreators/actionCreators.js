import {
  DATA_REQUEST,
  DATA_FAILURE,
  GET_CONTACTS,
  GET_HISTORY,
  CREATE_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SHOW_FORM
} from '../constants/constants';

export function dataRequestAction() {
  return {
    type: DATA_REQUEST,
    metadata: {
      isLoading: true
    },
    error: false
  };
}

export function dataFailureAction(error) {
  return {
    type: DATA_FAILURE,
    metadata: {
      isLoading: false
    },
    error
  };
}

export function getContactsAction(data) {
  return {
    type: GET_CONTACTS,
    payload: {
      data
    },
    metadata: {
      isLoading: false
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
    metadata: {
      isLoading: false
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
      isLoading: false,
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
      isLoading: false,
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
    metadata: {
      isLoading: false
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
