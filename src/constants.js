export const ROUTER_LINK = {
  MAIN: `/`,
  SING_IN: `/login`,
  MY_LIST: `/mylist`,
  FILM: `/films/:id`,
  ADD_REVIEW: `/films/:id/review`,
  PLAYER: `/player/:id`,
  DETAILS: `/films/:id/details`
};

export const RATING = [`1`, `2`, `3`, `4`, `5`];

export const DEFAULT_GENRE = `All Genres`;

export const SHOW_MORE_STEP = 8;

export const FILM_TABS = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

export const DEFAULT_FORM_REVIEW = {
  TEXT: ``,
  AUTHOR: `NewUser`,
  DATE: `November 27, 2020`,
  RAITING: `3`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};
