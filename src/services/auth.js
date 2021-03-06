import { post, get } from './request';

const AUTH_URL = 'https://good-manors.herokuapp.com/api/v1/auth';

export const signup = (username, password) => post(`${AUTH_URL}/signup`,
  { username, password });

export const login = (username, password) => post(`${AUTH_URL}/signin`,
  { username, password });

export const verifySession = () => get(`${AUTH_URL}/verify`);

export const endSession = () => get(`${AUTH_URL}/signout`);
