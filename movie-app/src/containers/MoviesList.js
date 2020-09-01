import React, { useState } from "react";
import { connect } from "react-redux";
import { addMovie, removeMovie, watchedMovie } from "../actions/index";
import { bindActionCreators } from "redux";
import MovieItem from "../components/MovieItem";
import TabPanelWrapper from "../components/TabPanel";
import "./MoviesList.scss";

/* MovieList : is to render data on dom - fetched  from api */
const MoviesList = (props) => {
  const [isAddButton, setIsAddButton] = useState(false);

  const onMovieSelect = (movie, key) => {
    // eslint-disable-next-line default-case
    switch (key) {
      case "add":
      case "moveToFavourite":
        props.addMovie(movie, key);
        break;
      case "remove":
        props.removeMovie(movie);
        break;
      case "watched":
        props.watchedMovie(movie);
        break;
      default:
        break;
    }
  };

  const renderedList = props.movies.map((movie) => {
    if (movie.Response.toLowerCase() === "false") {
      return (
        <div key="error" className="error">
          {movie.Error}
        </div>
      );
    }
    return (
      <MovieItem
        key={movie.Title + "list"}
        onMovieSelect={onMovieSelect}
        movie={movie}
        buttons={{ add: "Add to my Favourites" }}
      ></MovieItem>
    );
  });

  const renderedMyContentList = props.myContent
    .filter((movie) => movie.watched !== true)
    .map((movie) => {
      return (
        <MovieItem
          key={movie.Title + "_added"}
          onMovieSelect={onMovieSelect}
          movie={movie}
          buttons={{ remove: "Remove", watched: "Watched" }}
        ></MovieItem>
      );
    });

  const renderedWatchedList = props.myContent
    .filter((movie) => movie.watched === true)
    .map((movie) => {
      return (
        <MovieItem
          key={movie.Title + "_watched"}
          onMovieSelect={onMovieSelect}
          movie={movie}
          buttons={{ moveToFavourite: "Move to Favourite" }}
        ></MovieItem>
      );
    });

  // const setCount = (key) => {
  //   let message = "Please add Movies in 'My Panel'";
  //   setIsAddButton(false);
  //   if (favouriteList < props.myContent.length) {
  //     //  setFavouriteList(props.myContent.length);
  //     favouriteList = props.myContent.length;
  //   } else {
  //     if (key === "add") {
  //       message = "Movie Added in 'My Panel'";
  //       setIsAddButton(true);
  //     }
  //   }
  // };

  return (
    <>
      {/* {isAddButton && <div>Movie Added in 'My Panel'</div>} */}
      {props.movies.length > 0 && (
        <div className="list-wrapper">
          <div className="left-panel">{renderedList}</div>
          <div className="right-panel">
            <TabPanelWrapper
              renderedMyContentList={renderedMyContentList}
              renderedWatchedList={renderedWatchedList}
            />
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ movies, myContent }) => {
  return { movies, myContent };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMovie, removeMovie, watchedMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
