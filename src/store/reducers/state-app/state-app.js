import {ActionType} from "../../../store/action";
import {extend} from "../../../utils";
import {DEFAULT_GENRE, SHOW_MORE_STEP} from "../../../constants";


export const initialState = {
  genre: DEFAULT_GENRE,
  showMoreCount: SHOW_MORE_STEP,
};


export const stateApp = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
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
