import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Review from "../review/review";

const ReviewList = (props) => {
  const {reviews} = props;

  return (
    <Fragment>
      {reviews.map((review, i) => (
        <Review
          key={review + i}
          text={review.text}
          author={review.author}
          date={review.date}
          raiting={review.raiting}
        />
      ))}
    </Fragment>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewList;
