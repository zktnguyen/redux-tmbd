import axios from 'axios';
export const FETCH_MOVIES = 'fetch_movies';
export const FETCH_MOVIE = 'fetch_movie';
export const FETCH_CREDITS = 'fetch_credits';

const ROOT_URL = 'https://api.themoviedb.org/3/search/movie?api_key=';
const MOVIE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'aebde7334bf6d11a38e0c1e8a4625470';


export function fetchMovies(searchTerm) {
  const request = axios.get(`${ROOT_URL}${API_KEY}&query=${searchTerm}&page=1`);
  return {
    type: FETCH_MOVIES,
    payload: request
  }
}

export function fetchMovie(movie_id) {
  const request = axios.get(`${MOVIE_URL}${movie_id}?api_key=${API_KEY}`);
  
  return {
    type: FETCH_MOVIE,
    payload: request
  }
}

export function fetchCredits(movie_id) {
  const request = axios.get(`${MOVIE_URL}${movie_id}/credits?api_key=${API_KEY}`);

  return {
    type: FETCH_CREDITS,
    payload: request
  }
}