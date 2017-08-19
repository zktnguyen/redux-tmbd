import { combineReducers } from 'redux';
import moviesReducer from './reducer_movies';

const rootReducer = combineReducers({
  movies: moviesReducer
});

export default rootReducer;
