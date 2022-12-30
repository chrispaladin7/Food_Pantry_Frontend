import axios from 'axios';
import authHeader from './auth-header';
// To Do if ENV = Dev Or Test
let API_URL = 'http://35.202.47.80:3000/receiver/';
if (process.env.NODE_ENV === 'development') {
  API_URL = 'http://localhost:3000/receiver/';
}

export const addReceiver = (receiver: {}) => {
  return axios.post(
    API_URL + 'create',
    { receiver },
    {
      headers: authHeader(),
    }
  );
};

export const updateReceiver = (receiver: {}) => {
  return axios.post(
    API_URL + 'update',
    { receiver },
    {
      headers: authHeader(),
    }
  );
};

export const getReceiver = () => {
  return axios.get(API_URL + 'get', {
    headers: authHeader(),
  });
};
