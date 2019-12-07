import { post, get, put, del } from './request';
const BASE_URL = 'http://localhost:7891/api/v1/';

export const postUrl = (url) => post(`${BASE_URL}`,
  { originalURL: url });

export const getUrls = () => get(`${BASE_URL}`);

export const postHome = (title) => post(`${BASE_URL}/homes`,
  { title: title });



