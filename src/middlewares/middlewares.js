import Service from '../services/service';
import {
  dataRequestAction,
  dataFailureAction,
  getContactsAction,
  getHistoryAction,
  createContactAction,
  updateContactAction,
  deleteContactAction,
  paginateAction
} from '../actionCreators/actionCreators';

const errorHandler = (dispatch) => {
  return (err) => {
    dispatch(dataFailureAction(err));
  };
};

export function getContacts(limit, page) {
  return (dispatch) => {
    dispatch(dataRequestAction());
    return Service.getContacts(limit, page)
      .then((response) => {
        return response.json().then((data) => {
          dispatch(getContactsAction(data));
          dispatch(paginateAction(limit, page));
        });
      })
      .catch(errorHandler);
  };
}

export function getHistory(id) {
  return (dispatch) => {
    dispatch(dataRequestAction());
    return Service.getHistoryById(id)
      .then((response) => {
        return response.json().then((data) => {
          dispatch(getHistoryAction(data, id));
        });
      })
      .catch(errorHandler);
  };
}

export function createContact(contact) {
  return (dispatch) => {
    dispatch(dataRequestAction());
    return Service.createContact(contact)
      .then((response) => {
        return response.json().then((data) => {
          dispatch(createContactAction(data));
        });
      })
      .catch(errorHandler);
  };
}

export function updateContact(id, contact) {
  return (dispatch) => {
    dispatch(dataRequestAction());
    return Service.updateContact(id, contact)
      .then((response) => {
        return response.json().then((data) => {
          dispatch(updateContactAction(data, id));
        });
      })
      .catch(errorHandler);
  };
}

export function deleteContact(id) {
  return (dispatch) => {
    dispatch(dataRequestAction());
    return Service.deleteContact(id)
      .then(() => {
        return dispatch(deleteContactAction(id));
      })
      .catch(errorHandler);
  };
}
