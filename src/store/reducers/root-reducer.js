import {combineReducers} from "redux";
import {data} from "./data/data";
import {stateApp} from "./state-app/state-app";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  STATEAPP: `STATEAPP`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.STATEAPP]: stateApp,
  [NameSpace.USER]: user,
});

