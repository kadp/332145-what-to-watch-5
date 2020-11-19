import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {MovieType} from "../../types/films";
import FilmTabs from "../film-tabs/film-tabs";
import {ROUTER_LINK} from "../../constants";
import withFilmTabs from "../../hoc/with-film-tabs/with-film-tabs";

const FilmTabsWrapped = withFilmTabs(FilmTabs);

const Film = ({movie, films, renderCard}) => {

  const genre = movie.genre[0];
  let sameGenre = [];

  films.forEach((film) => {
    if (film.genre.includes(genre)) {
      sameGenre.push(film);
      sameGenre = sameGenre.slice(0, 4);
    }
  });

  return (
    <Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movie.poster} alt={movie.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movie.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{movie.year}</span>
              </p>

              <div className="movie-card__buttons">

                <Link to={ROUTER_LINK.PLAYER}
                  className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>

                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={ROUTER_LINK.ADD_REVIEW} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={movie.poster} alt={movie.title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <FilmTabsWrapped movie={movie} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            {sameGenre.map(renderCard)}
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

Film.propTypes = {
  movie: PropTypes.shape(MovieType).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(MovieType)),
  renderCard: PropTypes.func.isRequired,
};

export default Film;
