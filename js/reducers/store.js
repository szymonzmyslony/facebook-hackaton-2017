/**
 *@providesModule rootReducer
 * @flow
 */
import { combineReducers } from "redux";
import navReducer from "navigationReducer";
const appReducer = combineReducers({
  nav: navReducer
});

export default appReducer;
