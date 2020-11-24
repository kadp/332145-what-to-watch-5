import {loadFilmList, requireAuthorization} from "./action";
import {AuthorizationStatus} from "../constants";


export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
  .then(({data}) => dispatch(loadFilmList(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}, history) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
  .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
  .then(() => history.push(`/`))
);

