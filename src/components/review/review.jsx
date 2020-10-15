import React from "react";
import PropTypes from "prop-types";

const Review = (props) => {
  const {text, author, date, raiting} = props;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime="2016-12-24">{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{raiting}</div>
    </div>
  );
};

Review.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  raiting: PropTypes.string.isRequired,
};

export default Review;
