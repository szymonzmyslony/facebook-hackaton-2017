/**
 *@providesModule FirstScreen
 * @flow
 */
import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import { testUserEpic } from "UserReducer";
import { connect } from "react-redux";
import type { UpdateIsHost } from "UserReducer";
import { updateIsHost } from "UserReducer";
const FBSDK = require("react-native-fbsdk");
const { LoginButton, AccessToken } = FBSDK;

const firstScreen = (props: any) => (
  <View>
    <TouchableHighlight
      onPress={() => {
        props.navigation.navigate("Host");
        props.updateIsHost(true);
      }}>
      <Text>I'm a host</Text>
    </TouchableHighlight>
    <TouchableHighlight
      onPress={() => {
        props.navigation.navigate("Guest");
        props.updateIsHost(false);
      }}>
      <Text>I'm a Guest</Text>
    </TouchableHighlight>
    <View>
      <LoginButton
        readPermissions={["user_friends", "user_likes"]}
        onLoginFinished={(error, result) => {
          if (error) {
          } else if (result.isCancelled) {
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              if (data) {
              }
            });
          }
        }}
      />

    </View>
  </View>
);

const dispatchToProps = dispatch => ({
  updateIsHost: isHost => dispatch(updateIsHost(isHost))
});

export default connect(null, dispatchToProps)(firstScreen);
