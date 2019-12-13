import { signup, login, verifySession, endSession } from '../services/auth';

export const SET_SESSION = 'SET_SESSION';
export const SET_SESSION_LOADING = 'SET_SESSION_LOADING';
export const SET_SESSION_ERROR = 'SET_SESSION_ERROR';
export const SET_SESSION_END = 'SET_SESSION_END';
export const SET_SESSION_DEFAULT = 'SET_SESSION_DEFAULT';

export const sessionSignup = (username, password) => dispatch => {
  dispatch({
    type: SET_SESSION_LOADING
  });

  return signup(username, password)
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    });
};

export const sessionLogin = (username, password) => dispatch => {
  dispatch({
    type: SET_SESSION_LOADING
  });
  return login(username, password)
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    });
};

export const sessionVerify = () => dispatch => {
  dispatch({
    type: SET_SESSION_LOADING
  });

  return verifySession()
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    })
    .catch(err => {
      dispatch({
        type: SET_SESSION_ERROR,
        payload: err
      });
    });
};

export const sessionEnd = () => dispatch => {
  dispatch({
    type: SET_SESSION_LOADING
  });

  return endSession()
    .then(() => {
      dispatch({
        type: SET_SESSION_END
      });
    });
};
