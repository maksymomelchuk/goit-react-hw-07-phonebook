import axios from 'axios';

axios.defaults.baseURL = 'https://6390a05465ff41831119c8b1.mockapi.io';

export const fetchAPI = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addAPI = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const deleteAPI = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
