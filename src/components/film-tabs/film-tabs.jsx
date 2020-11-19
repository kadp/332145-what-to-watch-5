import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {MovieType} from "../../types/films";
import {FILM_TABS} from "../../constants";
import FilmOverview from "../../components/film-overview/film-overview";
import FilmDetails from "../../components/film-details/film-details";
import FilmReviews from "../../components/film-reviews/film-reviews";

const FilmTabs = (props) => {

  const {movie, activeLink, onLinkClick} = props;

  let currentComponent = null;
  if (activeLink === FILM_TABS.OVERVIEW) {
    currentComponent = <FilmOverview movie={movie} />;
  } else if (activeLink === FILM_TABS.DETAILS) {
    currentComponent = <FilmDetails movie={movie} />;
  } else if (activeLink === FILM_TABS.REVIEWS) {
    currentComponent = <FilmReviews reviews={movie.reviews} />;
  }
  return (
    <Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item ${activeLink === FILM_TABS.OVERVIEW ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={onLinkClick}>
              Overview
            </a>
          </li>
          <li className={`movie-nav__item ${activeLink === FILM_TABS.DETAILS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={onLinkClick}>
              Details
            </a>
          </li>
          <li className={`movie-nav__item ${activeLink === FILM_TABS.REVIEWS ? `movie-nav__item--active` : `` }`}>
            <a href="#" className="movie-nav__link" onClick={onLinkClick}>
              Reviews
            </a>
          </li>
        </ul>
      </nav>
      {currentComponent}
    </Fragment>
  );
};

FilmTabs.propTypes = {
  movie: PropTypes.shape(MovieType).isRequired,
  activeLink: PropTypes.string.isRequired,
  onLinkClick: PropTypes.func.isRequired,
};

export default FilmTabs;
