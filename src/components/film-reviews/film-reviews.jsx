import React, {Fragment, PureComponent} from "react";
import ReviewList from "../review-list/review-list";
import PropTypes from "prop-types";
import {MovieType} from "../../types/films";

class FilmReviews extends PureComponent {
  constructor(props) {
    super(props);

    const {movie} = this.props;

    this.state = {reviews: movie.reviews};
  }

  render() {
    return (
      <Fragment>
        <div className="movie-card__reviews movie-card__row">
          <ReviewList reviews={this.state.reviews}/>
        </div>
      </Fragment>
    );
  }
}

FilmReviews.propTypes = {
  movie: PropTypes.shape(MovieType).isRequired,
};
export default FilmReviews;
