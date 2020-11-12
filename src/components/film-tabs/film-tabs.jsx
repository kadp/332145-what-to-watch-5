import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import {MovieType} from "../../types/films";
import FilmOverview from "../film-overview/film-overview";
import FilmDetails from "../film-details/film-details";
import FilmReviews from "../film-reviews/film-reviews";


class FilmTabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeLink: `Overview`,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      activeLink: e.target.textContent,
    });
  }

  render() {
    let currentComponent = null;
    if (this.state.activeLink === `Overview`) {
      currentComponent = <FilmOverview movie={this.props.movie} />;
    } else if (this.state.activeLink === `Details`) {
      currentComponent = <FilmDetails movie={this.props.movie} />;
    } else if (this.state.activeLink === `Reviews`) {
      currentComponent = <FilmReviews reviews={this.props.movie.reviews} />;
    }

    return (
      <Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className={`movie-nav__item ${this.state.activeLink === `Overview` ? `movie-nav__item--active` : ``}`}>
              <a
                href="#"
                className="movie-nav__link"
                onClick={this.handleClick}
              >
                Overview
              </a>
            </li>
            <li
              className={`movie-nav__item ${this.state.activeLink === `Details` ? `movie-nav__item--active` : ``}`}>
              <a
                href="#"
                className="movie-nav__link"
                onClick={this.handleClick}
              >
                Details
              </a>
            </li>
            <li
              className={`movie-nav__item ${this.state.activeLink === `Reviews` ? `movie-nav__item--active` : ``}`}>
              <a
                href="#"
                className="movie-nav__link"
                onClick={this.handleClick}
              >
                Reviews
              </a>
            </li>
          </ul>
        </nav>

        {currentComponent}
      </Fragment>
    );
  }
}

FilmTabs.propTypes = {
  movie: PropTypes.shape(MovieType).isRequired,
};

export default FilmTabs;
