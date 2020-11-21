import React, {Fragment} from "react";
import PropTypes from "prop-types";


const FilmOverview = ({movie}) => {

  const starring = movie.starring.join(` `);

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Good</span>
          <span className="movie-rating__count">{movie.scores_count} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">

        <p>{movie.description}</p>

        <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
      </div>

    </Fragment>
  );
};

FilmOverview.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default FilmOverview;
