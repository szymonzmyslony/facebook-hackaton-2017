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
    uri: "http://my-api.graphql.com"
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
