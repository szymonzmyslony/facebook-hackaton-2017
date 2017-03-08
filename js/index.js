/**
 * @providesModule App
 * @flow
 */

 // import type { State as AppState } from "AppReducer";
 // import { CardStack } from "NavigationExperimental";
 // import reducer from "./reducers";
 import { applyMiddleware, compose, createStore } from "redux";
 import { Provider, connect } from "react-redux";
 import logger from "redux-logger";
 import React, { Component } from "react";
 // import { persistStore, autoRehydrate } from "redux-persist";
 import { AsyncStorage, NetInfo } from "react-native";
 import {
   StyleSheet,
   Text,
   View,
   Image,
   TouchableHighlight,
   ActivityIndicator
 } from "react-native";

const middleware = () => {
  if (__DEV__) {
    return [logger()];
  }
  return [];
};
const store = createStore(
  // reducer,
   compose(applyMiddleware(...middleware()))
);

const App = () => (
  <Provider store={store}>
    <ConnectedAroundMe />
  </Provider>
);

class AroundMe extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.props.t}
        </Text>
        <Text style={styles.instructions}>
          To get started, sdds edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{"\n"}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const select = (s) => {
  return {
    t: 'DUPADUPADUPA'
  };
};
const dispatchToProps = dispatch => ({
  dispatch
});

const ConnectedAroundMe = connect(select, dispatchToProps)(AroundMe)

export default App
