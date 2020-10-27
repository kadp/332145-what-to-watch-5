import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import InputReview from "../input-review/input-review";
import {RATING} from "../../constants";

class AddNewReview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: ``,
      author: `NewUser`,
      date: `November 27, 2020`,
      raiting: `3`,
    };

    this.defaultRating = `3`;
    this.handleTextOnChange = this.handleTextOnChange.bind(this);
    this.onHandleRatingOnChange = this.handleRatingOnChange.bind(this);
    this.handleButtonSubmit = this.handleButtonSubmit.bind(this);
  }

  handleTextOnChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleRatingOnChange(e) {
    this.setState({
      raiting: e.target.value,
    });
  }

  handleButtonSubmit(e) {
    e.preventDefault();
    this.props.onAddNewReview(this.state);
    this.setState({
      text: ``,
      author: `NewUser`,
      date: `November 27, 2020`,
      raiting: `3`,
    });
  }

  render() {
    return (
      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={this.handleButtonSubmit}>
          <div className="rating">
            <div className="rating__stars">
              {RATING.map((rating) => (
                <InputReview
                  key={rating}
                  rating={rating}
                  onChange={this.onHandleRatingOnChange}
                  сhecked={this.state.raiting}
                />))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" value={this.state.text} placeholder="Review text" onChange={this.handleTextOnChange}></textarea>
            <div className="add-review__submit" >
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>
    );
  }
}

AddNewReview.propTypes = {
  onAddNewReview: PropTypes.func.isRequired,
};

export default AddNewReview;
