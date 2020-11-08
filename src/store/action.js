export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  INCREMENT_SHOW_MORE_COUNT: `INCREMENT_SHOW_MORE_COUNT`,
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
