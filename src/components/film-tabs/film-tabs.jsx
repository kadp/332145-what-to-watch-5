import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import {MovieType} from "../../types/films";
import FilmOverview from "../film-overview/film-overview";
import FilmDetails from "../film-details/film-details";
import ReviewList from "../review-list/review-list";
import AddNewReview from "../add-new-review/add-new-review";

class FilmTabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {currentComponent: <FilmOverview movie={this.props.movie}/>};

    this.handleOverviewClick = this.handleOverviewClick.bind(this);
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
    this.handleReviewsClick = this.handleReviewsClick.bind(this);
  }

  handleOverviewClick(e) {
    e.preventDefault();
    this.setState({
      currentComponent: <FilmOverview movie={this.props.movie}/>
    });
  }

  handleDetailsClick(e) {
    e.preventDefault();
    this.setState({
      currentComponent: <FilmDetails movie={this.props.movie}/>
    });
  }

  handleReviewsClick(e) {
    e.preventDefault();
    this.setState({
      currentComponent: <Fragment><ReviewList reviews={this.props.movie.reviews}/> <AddNewReview /></Fragment>
    });
  }

  render() {

    return (
      <Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className="movie-nav__item movie-nav__item--active">
              <a href="#" className="movie-nav__link" onClick={this.handleOverviewClick}>Overview</a>
            </li>
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link" onClick={this.handleDetailsClick}>Details</a>
            </li>
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link" onClick={this.handleReviewsClick}>Reviews</a>
            </li>
          </ul>
        </nav>

        {this.state.currentComponent}
      </Fragment>
    );
  }
}

FilmTabs.propTypes = {
  movie: PropTypes.shape(MovieType).isRequired,
};

export default FilmTabs;
