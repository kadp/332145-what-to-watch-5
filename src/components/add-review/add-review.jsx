import React, {Fragment, PureComponent} from "react";
import ReviewList from "../review-list/review-list";
import AddNewReview from "../add-new-review/add-new-review";
import PropTypes from "prop-types";
import {MovieType} from "../../types/films";

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    const {movie} = this.props;

    this.state = {reviews: movie.reviews};

    this.addNewReview = this.onAddNewReview.bind(this);
  }

  onAddNewReview(newReview) {
    this.setState({
      reviews: this.state.reviews.concat([newReview])
    });
  }

  render() {
    return (
      <Fragment>
        <div className="movie-card__reviews movie-card__row">
          <ReviewList reviews={this.state.reviews}/>
        </div>
        <AddNewReview onAddNewReview={this.addNewReview}/>
      </Fragment>
    );
  }
}

AddReview.propTypes = {
  movie: PropTypes.shape(MovieType).isRequired,
};
export default AddReview;
