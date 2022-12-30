import axios from 'axios';
// To Do if ENV = Dev Or Test
let API_URL = 'http://35.202.47.80:3000/auth/';
if (process.env.NODE_ENV === 'development') {
  API_URL = 'http://localhost:3000/auth/';
}
export const register = (email: string, password: string, role: string) => {
  const roles: Array<string> = [];
  roles.push(role);
  return axios.post(API_URL + 'signup', {
    email,
    password,
    roles,
  });
};

export const login = (email: string, password: string) => {
  return axios
    .post(API_URL + 'signin', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  return null;
};
