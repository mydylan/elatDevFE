import { apiServerUrl } from '../../config/base';

const Service = {

  getContacts: (limit, page) => {
    return fetch(`${apiServerUrl}/?limit=${limit}&page=${page}`);
  },

  getHistoryById: (id) => {
    return fetch(`${apiServerUrl}/${id}`);
  },

  createContact: (data) => {
    return fetch(`${apiServerUrl}`, { method: 'post', body: JSON.stringify(data) });
  },

  updateContact: (id, data) => {
    return fetch(`${apiServerUrl}/${id}`, { method: 'put', body: JSON.stringify(data) });
  },

  deleteContact: (id) => {
    return fetch(`${apiServerUrl}/${id}`, { method: 'delete' });
  }

};

export default Service;
