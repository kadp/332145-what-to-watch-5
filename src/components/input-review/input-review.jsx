import React, {Fragment} from "react";
import PropTypes from "prop-types";


const InputReview = (props) => {
  const {rating} = props;
  return (
    <Fragment>
      <input className="rating__input" id={rating} type="radio" name="rating" value={rating} />
      <label className="rating__label" htmlFor={rating}>Rating {rating}</label>
    </Fragment>
  );
};

InputReview.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default InputReview;

/*
<input className="rating__input" id="star-1" type="radio" name="rating" value="1" checked={this.state.raiting === 1} onChange={this.handleRatingOnChange} />
<label className="rating__label" htmlFor="star-1">Rating 1</label>

<input className="rating__input" id="star-2" type="radio" name="rating" value="2" checked={this.state.raiting === 2} onChange={this.handleRatingOnChange} />
<label className="rating__label" htmlFor="star-2">Rating 2</label>

<input className="rating__input" id="star-3" type="radio" name="rating" value="3" checked={this.state.raiting === 3} onChange={this.handleRatingOnChange} />
<label className="rating__label" htmlFor="star-3">Rating 3</label>

<input className="rating__input" id="star-4" type="radio" name="rating" value="4" checked={this.state.raiting === 4} onChange={this.handleRatingOnChange} />
<label className="rating__label" htmlFor="star-4">Rating 4</label>

<input className="rating__input" id="star-5" type="radio" name="rating" value="5" checked={this.state.raiting === 5} onChange={this.handleRatingOnChange} />
<label className="rating__label" htmlFor="star-5">Rating 5</label>
*/
