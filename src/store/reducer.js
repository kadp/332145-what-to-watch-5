import {ActionType} from "../store/action";
import films from "../mock/films";
import {extend} from "../utils";

export const initialState = {
  genre: `Все жанры`,
  films,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
      });
    default:
      return state;
  }
};
