/**
 *@providesModule FacebookLogin
 * @flow
 */

import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
const FBSDK = require("react-native-fbsdk");
const { LoginButton, AccessToken } = FBSDK;

class Login extends Component {
  render() {
    return (
      <View>
        <LoginButton
          readPermissions={["user_friends", "user_likes"]}
          onLoginFinished={(error, result) => {
            if (error) {
            } else if (result.isCancelled) {
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                if (data) {
                  this.props.presentWelcome();
                }
              });
            }
          }}
        />

      </View>
    );
  }
}
export default Login;
