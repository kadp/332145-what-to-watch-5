import {loadFilmList} from "./action";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
  .then(({data}) => dispatch(loadFilmList(data)))
);
