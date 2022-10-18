import { combineReducers } from "redux";
import { incReducer, descReducer } from "./syncReducer";
import { asyncReducer } from "./asyncReducer";

export default combineReducers({ incReducer, descReducer, asyncReducer });
