import {extend} from "../utils";
import {ActionType} from "../store/action";
import {films} from "../mock/films";

let genreList = [];

const getGenres = (films) => {
  const genresSet = new Set();
  films.forEach((film) => {
    film.genre.forEach((genre) => {
      genresSet.add(genre);
    })
  })
  genreList = Array.from(genresSet);
};


const initialState = {
  genre: genreList,
  listCard: films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.COMEDIES:
      return extend(state, {
        genre: action.payload,
        listCard: films.
      });
    case ActionType.CRIME:
      return extend(state, {
        genre: action.payload,
      });
  }

  return state;
};




export {reducer};

const getListCard = (genre) => {

};
films.forEach((film) => {
  if (film.genre.includes(genre)) {
    sameGenre.push(film);
    sameGenre = sameGenre.slice(0, 4);
  }
});
