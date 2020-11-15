import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import {MovieType} from "../../types/films";
import FilmOverview from "../../components/film-overview/film-overview";
import FilmDetails from "../../components/film-details/film-details";
import FilmReviews from "../../components/film-reviews/film-reviews";

class FilmTabs extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movie, activeLink, onLinkClick} = this.props;

    let currentComponent = null;
    if (activeLink === `Overview`) {
      currentComponent = <FilmOverview movie={movie} />;
    } else if (activeLink === `Details`) {
      currentComponent = <FilmDetails movie={movie} />;
    } else if (activeLink === `Reviews`) {
      currentComponent = <FilmReviews reviews={movie.reviews} />;
    }
    return (
      <Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className={`movie-nav__item ${activeLink === `Overview` ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link" onClick={onLinkClick}>
                Overview
              </a>
            </li>
            <li className={`movie-nav__item ${activeLink === `Details` ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link" onClick={onLinkClick}>
                Details
              </a>
            </li>
            <li className={`movie-nav__item ${activeLink === `Reviews` ? `movie-nav__item--active` : `` }`}>
              <a href="#" className="movie-nav__link" onClick={onLinkClick}>
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
  activeLink: PropTypes.string.isRequired,
  onLinkClick: PropTypes.func.isRequired,
};

export default FilmTabs;
