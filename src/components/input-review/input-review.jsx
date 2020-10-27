import React, {Fragment} from "react";
import PropTypes from "prop-types";


const InputReview = (props) => {
  const {rating, onChange, сhecked} = props;
  return (
    <Fragment>
      <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating} onChange={onChange} checked={сhecked === rating} />
      <label className="rating__label" htmlFor={`star-${rating}`}>{`Rating ${rating}`}</label>
    </Fragment>
  );
};

InputReview.propTypes = {
  rating: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  сhecked: PropTypes.string.isRequired,
};

export default InputReview;

