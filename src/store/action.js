export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  INCREMENT_SHOW_MORE_COUNT: `INCREMENT_SHOW_MORE_COUNT`,
  LOAD_FILMLIST: `LOAD_FILMLIST`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilmsByGenre: (filmFilterList) => ({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: filmFilterList,
  }),
  incrementShowMoreCount: (showMoreCount) => ({
    type: ActionType.INCREMENT_SHOW_MORE_COUNT,
    payload: showMoreCount,
  })
};

export const loadFilmList = (filmList) => ({
  type: ActionType.LOAD_FILMLIST,
  payload: filmList,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
