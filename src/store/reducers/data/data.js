import {ActionType} from "../../action";
import {extend} from "../../../utils";

export const initialState = {
  films: [],
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMLIST:
      return extend(state, {
        films: action.payload,
      });
    default:
      return state;
  }
};
