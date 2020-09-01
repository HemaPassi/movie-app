import axios from "axios";
const API_KEY = "589d6260";
const BASE_URL = `http://www.omdbapi.com/?&apikey=${API_KEY}`;
//http://www.omdbapi.com/?i=tt3896198&apikey=589d6260
export const FETCH_MOVIES = "FETCH_MOVIES";
export const ADD_MOVIE = "ADD_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const WATCHED_MOVIE = "WATCHED_MOVIE";

export function fetchMovies(title = "") {
  const url = `${BASE_URL}&t=${title}`;
  const request = axios.get(url);
  return { type: FETCH_MOVIES, payload: request };
}

export function addMovie(movie, key) {
  return { type: ADD_MOVIE, payload: { ...movie, key } };
}

export function removeMovie(movie) {
  return { type: REMOVE_MOVIE, payload: movie };
}

export function watchedMovie(movie) {
  return { type: WATCHED_MOVIE, payload: movie };
}
