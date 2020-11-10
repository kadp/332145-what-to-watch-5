import {ActionType} from "../store/action";
import films from "../mock/films";
import {extend} from "../utils";
import {DEFAULT_GENRE, SHOW_MORE_STEP} from "../constants";

const defaultFilms = films;

export const initialState = {
  genre: DEFAULT_GENRE,
  films,
  showMoreCount: SHOW_MORE_STEP,
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
        films: getFilmsByGenre(action.payload, defaultFilms),
        showMoreCount: SHOW_MORE_STEP,
      });
    case ActionType.GET_FILMS_BY_GENRE:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.INCREMENT_SHOW_MORE_COUNT:
      return extend(state, {
        showMoreCount: SHOW_MORE_STEP + action.payload,
      });
    default:
      return state;
  }
};

const getFilmsByGenre = (genre, filmsList) => {
  let sameGenre = [];
  if (genre === DEFAULT_GENRE) {
    sameGenre = defaultFilms;
  } else {
    filmsList.forEach((film) => {
      if (film.genre.includes(genre)) {
        sameGenre.push(film);
      }
    });
  }
  return sameGenre;
};

