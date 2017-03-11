/**
 *@providesModule App
 * @flow
 */
import React from "react";
import { AppRegistry, Text, View, TouchableHighlight } from "react-native";
import { addNavigationHelpers } from "react-navigation";
import { AppNavigator } from "NavigationReducer";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider, connect } from "react-redux";
import appReducer from "rootReducer";
import { persistStore, autoRehydrate } from "redux-persist";
import logger from "redux-logger";
import { AsyncStorage } from "react-native";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from "RootEpic";
import { navigateToFirstScreen } from "startUp";
const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
  appReducer,
  applyMiddleware(epicMiddleware),
  autoRehydrate()
);

persistStore(store, {
  storage: AsyncStorage,
  whitelist: ["user"]
});

class AppWithNavigationState extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppConnected />
      </Provider>
    );
  }
}
const appWithNoState = props => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.nav
    })}
  />
);

const select = state => {
  return {
    nav: state.nav
  };
};
const AppConnected = connect(select)(appWithNoState);
export default AppWithNavigationState;
