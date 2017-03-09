/**
 *@providesModule App
 * @flow
 */
import React from "react";
import { AppRegistry, Text, View, TouchableHighlight } from "react-native";
import { addNavigationHelpers } from "react-navigation";
import { AppNavigator } from "navigationReducer";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider, connect } from "react-redux";
import appReducer from "rootReducer";
import { persistStore, autoRehydrate } from "redux-persist";
import logger from "redux-logger";
import { AsyncStorage } from "react-native";

const middleware = () => {
  if (__DEV__) {
    return [logger()];
  }
  return [];
};
const store = createStore(
  appReducer,
  compose(applyMiddleware(...middleware())),
  autoRehydrate()
);

persistStore(store, {
  storage: AsyncStorage,
  whitelist: ["navReducer"]
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
