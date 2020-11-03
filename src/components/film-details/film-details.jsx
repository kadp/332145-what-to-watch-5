import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {MovieType} from "../../types/films";

const Details = (props) => {
  const {movie} = props;
  return (
    <Fragment>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{movie.director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {movie.starring.map((actor, i) => <Fragment key={i}>{actor} <br /></Fragment>)}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{movie.duration}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">
              {movie.genre.map((genre, i) => <Fragment key={i}>{genre} <br /></Fragment>)}
            </span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{movie.year}</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

Details.propTypes = {
  movie: PropTypes.shape(MovieType).isRequired,
};

export default Details;
