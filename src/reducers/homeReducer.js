import { SET_HOME } from '../actions/homeActions';

const initialState = {
  homeId: '',
  title: '',
  drawers: [],
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_HOME:
      return action.payload;
    default:
      return state;
  }
}
