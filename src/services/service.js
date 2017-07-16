import { apiServerUrl } from '../../config/base';

const Service = {

  getContacts: () => {
    return fetch(`${apiServerUrl}/contacts`);
  },

  getHistoryById: (id) => {
    return fetch(`${apiServerUrl}/contacts/${id}/history`);
  },

  createContact: (data) => {
    return fetch(`${apiServerUrl}/contacts`, { method: 'post', body: JSON.stringify(data) });
  },

  updateContact: (id, data) => {
    return fetch(`${apiServerUrl}/contacts/${id}`, { method: 'put', body: JSON.stringify(data) });
  },

  deleteContact: (id) => {
    return fetch(`${apiServerUrl}/contacts/${id}`, { method: 'delete' });
  }

};

export default Service;
