export const ActionType = {
  ALL_GENRES: `ALL_GENRES`,
  COMEDIES: `COMEDIES`,
  CRIME: `CRIME`,
  DOCUMENTARY: `DOCUMENTARY`,
  DRAMAS: `DRAMAS`,
  HORROR: `HORROR`,
  KIDS_FAMILY: `KIDS_FAMILY`,
  ROMANCE: `ROMANCE`,
  SCI_FI: `SCI_FI`,
  THRILLERS: `THRILLERS`,
};

export const ActionCreator = {
  getGenre: () => ({
    type: ActionType.COMEDIES,
    payload: `комедия`,
  })
}
