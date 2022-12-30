import axios from 'axios';
import authHeader from './auth-header';
// To Do if ENV = Dev Or Test
let API_URL = 'http://35.202.47.80:3000/package/';
if (process.env.NODE_ENV === 'development') {
  API_URL = 'http://localhost:3000/package/';
}

export const getAllPackages = () => {
    return axios.get(
      API_URL + 'getall',
      {
        headers: authHeader(),
      }
    );
  };
