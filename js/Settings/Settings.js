/**
 * @providesModule Settings
 * @flow
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
const FBSDK = require("react-native-fbsdk");
const { LoginButton, AccessToken } = FBSDK;
import { connect } from "react-redux";
import type { State as AppState } from "rootReducer";
import Button from "apsl-react-native-button";

var FBLoginManager = require("NativeModules").FBLoginManager;

type Props = { isLogged: boolean, updateIsLogged(isLogged: boolean): void };

class Settings extends React.Component<void, Props, void> {
  static navigationOptions = {
    title: "Settings",
    header: <Button title={"asdsad"} onPress={() => {}} />
  };

  render() {
    return (
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10,
          marginBottom: 10
        }}>
        <Text>
          {`is user logged to facebook: ${this.props.isLogged.toString()}`}
        </Text>
        <Button
          style={styles.button}
          onPress={() => {
            this.props.updateIsLogged(false);
            this.props.navigation.navigate("Home");
          }}>
          <View>
            <Text style={styles.text}>Log out</Text>
          </View>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: "darkred"
  },
  text: {
    fontWeight: "700",
    fontSize: 17,
    justifyContent: "center",
    alignItems: "center",
    color: "black"
  }
});

const select = (state: AppState) => {
  return {
    isLogged: state.user.isLogged
  };
};

const dispatchToProps = dispatch => ({
  dispatch
});

export default connect(select, dispatchToProps)(Settings);
