/**
 *@providesModule rootReducer
 * @flow
 */
import { combineReducers } from "redux";
import navReducer from "NavigationReducer";
import userReducer from "UserReducer";
import type { State as UserState } from "UserReducer";

const appReducer = combineReducers({
  nav: navReducer,
  user: userReducer
});

export type State = {
  user: UserState
};

export default appReducer;
