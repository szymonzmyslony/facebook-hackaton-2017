/**
 *@providesModule FirstScreen
 * @flow
 */
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import { updateIsHost, updateUserCredentials } from "UserReducer";
const FBSDK = require("react-native-fbsdk");
const { LoginButton, AccessToken } = FBSDK;
import type { State as AppState } from "rootReducer";
import Button from "apsl-react-native-button";
import { gql, graphql } from "react-apollo";

const firstScreen = (props: any) => (
  <View style={styles.main}>
    <View style={[{ height: 90 }, styles.notButtons]}>
      <Text style={{ fontSize: 30, fontWeight: "700", color: "darkgray" }}>
        Are you
      </Text>
    </View>
    <Button
      style={[
        {
          backgroundColor: props.isHost === false ? "dodgerblue" : "lightblue",
          opacity: props.isHost === false ? 100 : 50
        },
        styles.button
      ]}
      onPress={() => {
        props.updateIsHost(false);
      }}>
      <View>
        <Text style={styles.text}>looking for help</Text>
      </View>
    </Button>
    <View style={[{ height: 50 }, styles.notButtons]}>
      <Text style={{ fontSize: 30, fontWeight: "700", color: "darkgray" }}>
        or

      </Text>
    </View>
    <View style={{ height: 10 }} />
    <Button
      style={[
        {
          backgroundColor: props.isHost === true ? "dodgerblue" : "lightblue",
          opacity: props.isHost === true ? 100 : 50
        },
        styles.button
      ]}
      onPress={() => {
        props.updateIsHost(true);
      }}>
      <View>
        <Text style={styles.text}>willing to help</Text>
      </View>
    </Button>
    <View style={{ height: 180 }} />
    <View style={[{ height: 80 }, styles.notButtons]}>
      <Text style={{ fontSize: 20, fontWeight: "700", color: "darkgray" }}>
        log in to continue
      </Text>
    </View>
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch"
      }}>
      <LoginButton
        style={[
          { opacity: props.isHost === "NONE" ? 0.2 : 1 },
          styles.fbButton
        ]}
        readPermissions={["user_friends", "user_likes"]}
        onLoginFinished={(error, result) => {
          props.navigation.navigate(props.isHost ? "Host" : "Guest");
          if (error) {
          } else if (result.isCancelled) {
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              if (data) {
                props.updateUserCredentials(data.userID, data.accessToken);
                props.newUser({
                  variables: { id: data.userID, token: data.accessToken }
                });
              }
            });
          }
        }}
      />

    </View>
  </View>
);

const submitUser = gql`mutation {
    newUser(input:
      {userId: $id, accessToken:$token})
    {
      clientMutationId
    }
  }`;
const styles = StyleSheet.create({
  button: {
    borderWidth: 0,
    borderRadius: 20
  },
  text: {
    fontWeight: "700",
    fontSize: 17,
    justifyContent: "center",
    alignItems: "center",
    color: "white"
  },
  main: {
    marginLeft: 30,
    marginRight: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  notButtons: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  fbButton: {
    height: 40,
    width: 310,
    marginBottom: 15,
    borderWidth: 0,
    borderRadius: 20
  },
  topCaption: { fontWeight: "800", fontSize: 30, color: "#983B59" }
});

const select = (state: AppState) => {
  return {
    isHost: state.user.isHost
  };
};

const dispatchToProps = dispatch => ({
  updateIsHost: isHost => dispatch(updateIsHost(isHost)),
  updateUserCredentials: (id: string, token: string) =>
    dispatch(updateUserCredentials(id, token))
});

const connected = connect(select, dispatchToProps)(firstScreen);
export default graphql(submitUser)(connected);
