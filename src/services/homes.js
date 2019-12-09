import { post, get, put, del } from './request';
const BASE_URL = 'http://localhost:7891/api/v1';

export const postHome = (title) => post(`${BASE_URL}/homes`,
  { title: title });

export const getHome = (homeId) => get(`${BASE_URL}/homes/${homeId}`);

export const postDrawer = (name, home) => post(`${BASE_URL}/drawers`,
  { name: name, home: home });

export const getHomeDrawers = (homeId) => get(`${BASE_URL}/drawers/home/${homeId}`);


export const postCard = (name, drawer) => post(`${BASE_URL}/cards`,
  { name: name, drawer: drawer });

export const getCard = (cardId) => get(`${BASE_URL}/${cardId}`);

export const updateCard = (id, body) => put(`${BASE_URL}/cards/${id}`,
  body);

export const deleteCard = (id) => del(`${BASE_URL}/${id}`);

export const getDrawerCards = (drawerId) => get(`${BASE_URL}/cards/drawers/${drawerId}`);




