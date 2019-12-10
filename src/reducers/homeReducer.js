import { SET_HOME } from '../actions/homeActions';


export default function reducer(state = {}, action) {
  switch(action.type) {
    case SET_HOME:
      return action.payload;
    default:
      return state;
  }
}
