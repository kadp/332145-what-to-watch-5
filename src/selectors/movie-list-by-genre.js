import {createSelector} from "reselect";
import {DEFAULT_GENRE} from "../constants";

const getGenre = (state) => state.STATEAPP.genre;

const getFilm = (state) => state.DATA.films;

export const getFilmsByGenre = createSelector(
    getGenre, getFilm, (genre, films) => {

      let sameGenre = [];

      if (genre === DEFAULT_GENRE) {
        sameGenre = films;
      } else {
        films.forEach((film) => {
          if (film.genre.includes(genre)) {
            sameGenre.push(film);
          }
        });
      }
      return sameGenre;
    }
);
