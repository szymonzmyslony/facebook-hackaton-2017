/**
 *@providesModule FirstScreen
 * @flow
 */
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import { updateIsHost, updateIsLogged } from "UserReducer";

import { updateUserCredentials } from "UserReducer";
const FBSDK = require("react-native-fbsdk");
const { LoginButton, AccessToken } = FBSDK;
import type { State as AppState } from "rootReducer";
import Button from "apsl-react-native-button";
import { gql, graphql } from "react-apollo";

class FirstScreen extends React.Component {
  static navigationOptions = {
    title: "N  E  W  C  O  M  E  R"
  };
  render() {
    return (
      <View style={styles.main}>
        <View style={[{ height: 90 }, styles.notButtons]}>
          <Text style={{ fontSize: 30, fontWeight: "700", color: "darkgray" }}>
            Are you
          </Text>
        </View>
        <Button
          style={[
            {
              backgroundColor: this.props.isHost === false
                ? "dodgerblue"
                : "lightblue",
              opacity: this.props.isHost === false ? 100 : 50
            },
            styles.button
          ]}
          onPress={() => {
            this.props.updateIsHost(false);
          }}
        >
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
              backgroundColor: this.props.isHost === true
                ? "dodgerblue"
                : "lightblue",
              opacity: this.props.isHost === true ? 100 : 50
            },
            styles.button
          ]}
          onPress={() => {
            this.props.updateIsHost(true);
          }}
        >
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
          }}
        >
          <LoginButton
            style={[
              { opacity: this.props.isHost === "NONE" ? 0.2 : 1 },
              styles.fbButton
            ]}
            readPermissions={["user_friends", "user_likes"]}
            onLoginFinished={(error, result) => {
              this.props.updateIsLogged(true);
              this.props.navigation.navigate(
                this.props.isHost ? "Host" : "Guest"
              );
              if (error) {
              } else if (result.isCancelled) {
              } else {
                AccessToken.getCurrentAccessToken().then(data => {
                  if (data) {
                    this.props.updateUserCredentials(
                      data.userID,
                      data.accessToken
                    );
                    this.props.mutate({
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
  }
}
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
    isHost: state.user.isHost,
    isLogged: state.user.isLogged
  };
};

const dispatchToProps = dispatch => ({
  updateIsHost: isHost => dispatch(updateIsHost(isHost)),
  updateIsLogged: isLogged => dispatch(updateIsLogged(isLogged)),
  updateUserCredentials: (id: string, token: string) =>
    dispatch(updateUserCredentials(id, token))
});

const connected = connect(select, dispatchToProps)(FirstScreen);
export default graphql(submitUser)(connected);
