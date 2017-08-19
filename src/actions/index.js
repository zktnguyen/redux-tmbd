import axios from 'axios';
export const FETCH_MOVIES = 'fetch_movies';
export const FETCH_MOVIE = 'fetch_movie';


export function fetchMovies() {
  const request = '';
  return {
    type: FETCH_MOVIES,
    payload: request
  }
}