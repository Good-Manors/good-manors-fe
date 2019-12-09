import { getHome, getHomeDrawers } from '../services/homes';
export const SET_HOME = 'CREATE_URL';

export const setHome = (homeId) => dispatch => {
  return Promise.all(
    getHome(homeId),
    getHomeDrawers(homeId)
  )
    .then(home =>
      dispatch({
        type: SET_HOME,
        payload: {
          title: home[0].title,
          homeId: home[0]._id,
          drawers: home[1]
        }
      }));
};

export const ADD_CARD = 'ADD_CARD';

