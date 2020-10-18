import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Review from "../review/review";

const ReviewList = (props) => {
  const {reviews} = props;
  // todo: 1) reviews > 10. 2) нечетное кол-во.
  const firstColReviews = reviews.slice(0, 3);
  const secondColReviews = reviews.slice(3, 6);

  return (
    <Fragment>
      <div className="movie-card__reviews-col">
        {firstColReviews.map((review, i) => (
          <Review
            key={review + i}
            text={review.text}
            author={review.author}
            date={review.date}
            raiting={review.raiting}
          />
        ))}
      </div>
      <div className="movie-card__reviews-col">
        {secondColReviews.map((review, i) => (
          <Review
            key={review + i}
            text={review.text}
            author={review.author}
            date={review.date}
            raiting={review.raiting}
          />
        ))}
      </div>
    </Fragment>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewList;
