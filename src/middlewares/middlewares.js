import Service from '../services/service';
import {
  dataFailureAction,
  getContactsAction,
  getHistoryAction,
  createContactAction,
  updateContactAction,
  deleteContactAction,
  showFormAction,
  hideFormAction
} from '../actionCreators/actionCreators';
import list from '../mocks/list';

const errorHandler = (dispatch) => {
  return (err) => {
    dispatch(dataFailureAction(err));
  };
};

const parse = (data) => {
  return {
    ...data,
    history: []
  };
};

export function getContacts() {
  return (dispatch) => {
    return Service.getContacts()
// USED RESPONSE
      // .then((response) => {
      //   return response.json().then((data) => {
      //     dispatch(getContactsAction(data.map(parse)));
      //   });
// USED MOCKED LIST
      .then(() => {
        dispatch(getContactsAction(list.map(parse)));
      })
      .catch(errorHandler);
  };
}

export function getHistory(id) {
  return (dispatch) => {
    return Service.getHistoryById(id)
      .then((response) => {
        return response.json().then((data) => {
          dispatch(getHistoryAction(data[0].history, id));
        });
      })
      .catch(errorHandler);
  };
}

export function createContact(contact) {
  return (dispatch) => {
    return Service.createContact(contact)
      .then((response) => {
        return response.json().then((data) => {
          dispatch(createContactAction(parse(data)));
        });
      })
      .catch(errorHandler);
  };
}

export function updateContact(id, contact) {
  return (dispatch) => {
    return Service.updateContact(id, contact)
      .then((response) => {
        return response.json().then((data) => {
          dispatch(updateContactAction(parse(data), id));
        });
      })
      .catch(errorHandler);
  };
}

export function deleteContact(id) {
  return (dispatch) => {
    return Service.deleteContact(id)
      .then(() => {
        return dispatch(deleteContactAction(id));
      })
      .catch(errorHandler);
  };
}

export function showForm(id) {
  return (dispatch) => {
    return dispatch(showFormAction(id));
  };
}

export function hideForm(id) {
  return (dispatch) => {
    return dispatch(hideFormAction(id));
  };
}
