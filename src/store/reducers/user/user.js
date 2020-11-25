import {ActionType} from "../../action";
import {extend} from "../../../utils";
import {AuthorizationStatus} from "../../../constants";

export const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    default:
      return state;
  }
};
