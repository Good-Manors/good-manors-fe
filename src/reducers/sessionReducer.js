import { SET_SESSION, SET_SESSION_LOADING, SET_SESSION_ERROR, SET_SESSION_END, SET_SESSION_DEFAULT } from '../actions/sessionActions';

const initialState = {
  _id: null,
  username: null,
  defaultHome: '',
  loading: true,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_SESSION_LOADING:
      return { ...state, loading: true };
    case SET_SESSION:
      return { ...action.payload, loading: false, error: null };
    case SET_SESSION_END:
      return { initialState };
    case SET_SESSION_ERROR:
      return { ...state, loading: false, error: action.payload };
    case SET_SESSION_DEFAULT:
      return { ...state, defaultHome: action.payload };
    default:
      return state;
  }
}
