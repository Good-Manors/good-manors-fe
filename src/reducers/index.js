import { combineReducers } from 'redux';
import session from './sessionReducer';
import homes from './homeReducer';

export default combineReducers({
  session
});
