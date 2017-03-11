/**
 *@providesModule rootReducer
 * @flow
 */
import { combineReducers } from "redux";
import navReducer from "NavigationReducer";
import userReducer from "UserReducer";
import {
  ApolloClient,
  createNetworkInterface,
  addTypeName
} from "react-apollo";
import type { NavigationState } from "react-navigation";

import type { State as UserState } from "UserReducer";
export const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: "http://192.168.43.249:8000/graphql"
  }),
  queryTransformer: addTypeName
});

const appReducer = combineReducers({
  nav: navReducer,
  user: userReducer,
  apollo: client.reducer()
});

export type State = {
  user: UserState,
  nav: NavigationState,
  apollo: any
};

export default appReducer;
