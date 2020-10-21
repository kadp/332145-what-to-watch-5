import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class AddNewReview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: ``,
      author: `currentUser`,
      date: `December 20, 2016`,
      raiting: `3`,
    };

    this.handleTextOnChange = this.handleTextOnChange.bind(this);
    this.handleRatingOnChange = this.handleRatingOnChange.bind(this);
    this.handleButtonSubmit = this.handleButtonSubmit.bind(this);
  }

  handleTextOnChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleRatingOnChange(e) {
    this.setState({
      raiting: e.target.value
    });
  }

  handleButtonSubmit(e) {
    e.preventDefault();
    this.props.onAddNewReview(this.state);
  }

  render() {
    return (
      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={this.handleButtonSubmit}>
          <div className="rating">
            <div className="rating__stars" onChange={this.handleRatingOnChange}>
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
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
