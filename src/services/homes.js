import { post, get, put, del } from './request';
const BASE_URL = 'https://good-manors.herokuapp.com/api/v1';

export const postHome = (title) => post(`${BASE_URL}/homes`,
  { title: title });

export const getHome = (homeId) => get(`${BASE_URL}/homes/${homeId}`);

export const getAllHomes = () => get(`${BASE_URL}/homes`);

export const getDefaultHomeId = () => get(`${BASE_URL}/users/default-home`);

export const setDefaultHomeId = (id) => put(`${BASE_URL}/users/default-home`,
  { home: id });

export const deleteHome = (id) => del(`${BASE_URL}/homes/${id}`);

export const postDrawer = (name, home) => post(`${BASE_URL}/drawers`,
  { name: name, home: home });

export const getHomeDrawers = (homeId) => get(`${BASE_URL}/drawers/home/${homeId}`);

export const deleteDrawer = (id) => del(`${BASE_URL}/drawers/${id}`);

export const postCard = (name, type, drawer) => post(`${BASE_URL}/cards`,
  { name: name, type: type, drawer: drawer });

export const getCard = (cardId) => get(`${BASE_URL}/${cardId}`);

export const updateCard = (id, body) => put(`${BASE_URL}/cards/${id}`,
  body);

export const deleteCard = (id) => del(`${BASE_URL}/cards/${id}`);

export const getDrawerCards = (drawerId) => get(`${BASE_URL}/cards/drawers/${drawerId}`);

export const initializeHome = (title, drawers, cards) => post(`${BASE_URL}/initialize`,
  { title: title, drawers: drawers, cards: cards });




