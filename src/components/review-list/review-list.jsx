import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Review from "../review/review";

const ReviewList = (props) => {
  const {reviews} = props;
  // todo: 1) reviews > 10. 2) нечетное кол-во.
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
      <div className="movie-card__reviews-col">
        {firstColReviews.map((review, i) => (
          <Review
            key={i}
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
            key={i}
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
