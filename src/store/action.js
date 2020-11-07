export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
};
