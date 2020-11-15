import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {MovieType} from "../../types/films";
import InputReview from "../input-review/input-review";
import {RATING} from "../../constants";

class AddNewReview extends PureComponent {

  render() {

    const {movie, text, raiting, submit, defaultState} = this.props;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={movie.poster} alt={movie.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="movie-page.html" className="breadcrumbs__link">{movie.title}</a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={movie.poster} alt={movie.title} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form" onSubmit={submit}>
            <div className="rating">
              <div className="rating__stars">
                {RATING.map((rating) => (
                  <InputReview
                    key={rating}
                    rating={rating}
                    onChange={raiting}
                    сhecked={defaultState.raiting}
                  />))}
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" value={defaultState.text} placeholder="Review text" onChange={text}></textarea>
              <div className="add-review__submit" >
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>
      </section>
    );
  }
}

AddNewReview.propTypes = {
  movie: PropTypes.shape(MovieType).isRequired,
  defaultState: PropTypes.object.isRequired,
  text: PropTypes.func.isRequired,
  raiting: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default AddNewReview;
