import { FETCH_MOVIES, FETCH_MOVIE } from '../actions';

export default function (state = [], action) {
  switch(action.type) {
    case FETCH_MOVIES:
      return action.payload.data.results.slice(0,9);
    case FETCH_MOVIE:
      console.log(action.payload.data);
      break;
    default:
      return state;
  }
}