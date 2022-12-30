import axios from 'axios';
import authHeader from './auth-header';
// To Do if ENV = Dev Or Test
let API_URL = 'http://35.202.47.80:3000/user/';
if (process.env.NODE_ENV === 'development') {
  API_URL = 'http://localhost:3000/user/';
}
export const getPublicContent = () => {
  return axios.get(API_URL + 'all');
};
export const getCourierView = () => {
  return axios.get(API_URL + 'courier', { headers: authHeader() });
};
export const getDonorView = () => {
  return axios.get(API_URL + 'donor', { headers: authHeader() });
};
export const getReceiverView = () => {
  return axios.get(API_URL + 'reciever', { headers: authHeader() });
};
export const getAdminBoard = () => {
  return axios.get(API_URL + 'admin', { headers: authHeader() });
};
