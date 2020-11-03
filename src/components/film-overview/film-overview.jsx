import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {MovieType} from "../../types/films";

const FilmOverview = (props) => {
  const {movie} = props;
  const starring = movie.starring.join(` `);

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{movie.level}</span>
          <span className="movie-rating__count">{movie.count} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">

        {movie.description.map((text, i) => <p key={i}>{text}</p>)}

        <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
      </div>

    </Fragment>
  );
};

FilmOverview.propTypes = {
  movie: PropTypes.shape(MovieType).isRequired,
};

export default FilmOverview;
