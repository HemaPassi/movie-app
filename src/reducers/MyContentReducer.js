/* eslint-disable default-case */
import { ADD_MOVIE, REMOVE_MOVIE, WATCHED_MOVIE } from "../actions/index";
export default function (state = [], action) {
  switch (action.type) {
    case ADD_MOVIE:
      const movieWatched = state.filter(
        (movie) =>
          movie.Title === action.payload.Title && movie.watched === true
      );
      if (
        movieWatched.length === 0 ||
        action.payload.key === "moveToFavourite"
      ) {
        const newState = state.filter(
          (movie) =>
            movie.Title !== action.payload.Title && movie.added === true
        );
        action.payload.added = true;
        action.payload.watched = false;
        return [...newState, action.payload];
      }

    case WATCHED_MOVIE:
      const watchedState = state.filter(
        (movie) => movie.Title !== action.payload.Title
      );
      action.payload.watched = true;
      return [...watchedState, action.payload];

    case REMOVE_MOVIE:
      return state.filter((movie) => movie.Title !== action.payload.Title);
  }

  return state;
}
