/**
 *@providesModule rootReducer
 * @flow
 */
import { combineReducers } from "redux";
import navReducer from "NavigationReducer";
import userReducer from "UserReducer";

const appReducer = combineReducers({
  nav: navReducer,
  user: userReducer
});

export default appReducer;
