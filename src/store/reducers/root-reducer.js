import {combineReducers} from "redux";
import {data} from "./data/data";
import {stateApp} from "./state-app/state-app";

export const NameSpace = {
  DATA: `DATA`,
  STATEAPP: `STATEAPP`,
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.STATEAPP]: stateApp,
});

