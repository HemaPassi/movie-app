import { combineReducers } from "redux";
import MoviesReducer from "./MoviesReducer";
import MyContentReducer from "./MyContentReducer";

const rootReducer = combineReducers({
  movies: MoviesReducer,
  myContent: MyContentReducer,
});

export default rootReducer;
