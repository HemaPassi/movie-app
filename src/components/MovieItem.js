import React from "react";
import "./MovieItem.scss";

const MovieItem = ({ movie, buttons, onMovieSelect }) => {
  const {
    Title,
    Poster,
    Writer,
    Year,
    Type,
    Rated,
    Released,
    Language,
    Actors,
    added,
  } = movie;
  const onClickHandler = (movie, key) => {
    onMovieSelect(movie, key);
  };

  return (
    <div className="movie-item">
      <div className="img-container">
        <img src={Poster} />
      </div>
      <div className="right">
        <div className="details">
          <div className="title">{Title}</div>
          <div>
            <span>By:</span>
            <span>{Writer}</span>
          </div>
          <div>
            <span>Year:</span>
            <span>{Year}</span>
          </div>
          <div>
            <span>Type:</span>
            <span>{Type}</span>
          </div>
          <div>
            <span>Rated:</span>
            <span>{Rated}</span>
          </div>
          <div>
            <span>Released:</span>
            <span>{Released}</span>
          </div>
          <div>
            <span>Language:</span>
            <span>{Language}</span>
          </div>
          <div>
            <span>Actors:</span>
            <span>{Actors}</span>
          </div>
        </div>
        <div className="button-wrapper">
          {Object.entries(buttons).map(function ([key, value]) {
            return (
              <button
                className={`option-btn ${key}`}
                key={key}
                onClick={() => onClickHandler(movie, key)}
              >
                {value}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
