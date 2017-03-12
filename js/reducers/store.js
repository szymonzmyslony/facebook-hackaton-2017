/**
 *@providesModule rootReducer
 * @flow
 */
import { combineReducers } from "redux";
import navReducer from "NavigationReducer";
import userReducer from "UserReducer";

import type { NavigationState } from "react-navigation";

import type { State as UserState } from "UserReducer";
// export const client = new ApolloClient({
//   networkInterface: createNetworkInterface({
//     uri: "http://54.173.162.75:8000/graphql"
//   }),
//   queryTransformer: addTypeName
// });

const appReducer = combineReducers({
  nav: navReducer,
  user: userReducer
});

export type State = {
  user: UserState,
  nav: NavigationState
};

export default appReducer;
