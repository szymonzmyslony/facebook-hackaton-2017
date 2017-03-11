/**
 *@providesModule FirstScreen
 * @flow
 */
import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import { updateIsHost } from "UserReducer";
const FBSDK = require("react-native-fbsdk");
const { LoginButton, AccessToken } = FBSDK;
import type { State as AppState } from "rootReducer";

const firstScreen = (props: any) => (
  <View>
    <TouchableHighlight
      underlayColor={"transparent"}
      onPress={() => {
        props.updateIsHost(true);
      }}>
      <Text style={{ color: props.isHost === true ? "red" : "black" }}>
        I'm a host
      </Text>
    </TouchableHighlight>
    <TouchableHighlight
      underlayColor={"transparent"}
      onPress={() => {
        props.updateIsHost(false);
      }}>
      <Text style={{ color: props.isHost === false ? "red" : "black" }}>
        I'm a Guest
      </Text>
    </TouchableHighlight>
    <View>
      <LoginButton
        readPermissions={["user_friends", "user_likes"]}
        onLoginFinished={(error, result) => {
          props.navigation.navigate(props.isHost ? "Host" : "Guest");
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

const select = (state: AppState) => {
  return {
    isHost: state.user.isHost
  };
};

const dispatchToProps = dispatch => ({
  updateIsHost: isHost => dispatch(updateIsHost(isHost)),
  dispatch
});

export default connect(select, dispatchToProps)(firstScreen);
