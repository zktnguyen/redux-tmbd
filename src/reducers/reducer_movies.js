import { FETCH_MOVIES, FETCH_MOVIE } from '../actions';

export default function (state = {}, action) {
  switch(action.type) {
    case FETCH_MOVIES:
      console.log(action.payload.data);
      break;
    case FETCH_MOVIE:
      console.log(action.payload.data);
      break;
    default:
      return state;
  }
}