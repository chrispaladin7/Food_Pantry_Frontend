import axios from 'axios';
import authHeader from './auth-header';
// To Do if ENV = Dev Or Test
let API_URL = 'http://35.202.47.80:3000/item/';
if (process.env.NODE_ENV === 'development') {
  API_URL = 'http://localhost:3000/item/';
}

export const getAllItemsForPackage = (packageId: number) => {
    return axios.post(
      API_URL + 'getallforpackage',
      { packageId },
      {
        headers: authHeader(),
      }
    );
  };
