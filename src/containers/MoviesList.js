import React, { useState } from "react";
import { connect } from "react-redux";
import { addMovie, removeMovie, watchedMovie } from "../actions/index";
import { bindActionCreators } from "redux";
import MovieItem from "../components/MovieItem";
import TabPanelWrapper from "../components/TabPanel";
import "./MoviesList.scss";

/* MovieList : is to render data on dom - fetched  from api */
const MoviesList = (props) => {
  /* this is click event on buttons - will trigger based on button clicked by child component */
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

  /* will call api and responsible to render list of all the movies */
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

  /*this funciton is to render list in 'My favouries' user can also remove or move item in watched list */
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

  /* responsible to render watched list*/
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

  return (
    <>
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
