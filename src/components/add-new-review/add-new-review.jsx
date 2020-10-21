import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class AddNewReview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: ``,
      author: `currentUser`,
      date: `December 20, 2016`,
      raiting: 3,
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
      raiting: parseInt(e.target.value, 10)
    });
  }

  handleButtonSubmit(e) {
    e.preventDefault();
    this.props.onAddNewReview(this.state);
    this.setState({
      text: ``,
      author: `currentUser`,
      date: `December 20, 2016`,
      raiting: 3,
    });
  }

  render() {
    return (
      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={this.handleButtonSubmit}>
          <div className="rating">
            <div className="rating__stars">
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
