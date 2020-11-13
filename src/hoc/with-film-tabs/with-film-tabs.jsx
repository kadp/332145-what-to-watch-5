import React, {PureComponent, Fragment} from "react";
import FilmOverview from "../../components/film-overview/film-overview";
import FilmDetails from "../../components/film-details/film-details";
import FilmReviews from "../../components/film-reviews/film-reviews";

const withFilmTabs = (Component) => {
  class WithFilmTabs extends PureComponent {
    constructor(props) {
      super(props);
      console.log(`asdad`, props)
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

      return (

        <Component
          {...this.props}
          renderTabs={() => {
            const {movie} = this.props;
            let currentComponent = null;
            if (this.state.activeLink === `Overview`) {
              currentComponent = <FilmOverview movie={movie} />;
            } else if (this.state.activeLink === `Details`) {
              currentComponent = <FilmDetails movie={movie} />;
            } else if (this.state.activeLink === `Reviews`) {
              currentComponent = <FilmReviews reviews={movie.reviews} />;
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
          }}
        />
      );
    }
  }

  return WithFilmTabs;
};

export default withFilmTabs;
