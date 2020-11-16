import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Review from "../review/review";

const FilmReviews = ({reviews}) => {

  const firstColReviews = [];
  const secondColReviews = [];

  reviews.forEach((review, i) => {
    if (i % 2 === 1) {
      firstColReviews.push(review);
    } else {
      secondColReviews.push(review);
    }
  });
  return (
    <Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {firstColReviews.map((review) => (
            <Review
              key={review.text.length}
              text={review.text}
              author={review.author}
              date={review.date}
              raiting={review.raiting}
            />
          ))}
        </div>
        <div className="movie-card__reviews-col">
          {secondColReviews.map((review) => (
            <Review
              key={review.text.length}
              text={review.text}
              author={review.author}
              date={review.date}
              raiting={review.raiting}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

FilmReviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default FilmReviews;
