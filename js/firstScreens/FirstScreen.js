/**
 *@providesModule FirstScreen
 * @flow
 */
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import { updateIsHost } from "UserReducer";

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
              if (error) {
              } else if (result.isCancelled) {
              } else {
                AccessToken.getCurrentAccessToken().then(data => {
                  if (data) {
                    this.props.updateUserCredentials(
                      data.userID,
                      data.accessToken
                    );

                    this.props
                      .submit({
                        userId: data.userID,
                        accessToken: data.accessToken,
                        isHost: this.props.isHost
                      })
                      .then(data => {
                        this.props.navigation.navigate(
                          this.props.isHost ? "Host" : "Guest"
                        );
                      })
                      .catch(error => {
                        console.log(error);
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

type Inp = { userId: string, accessToken: string, isHost: boolean };
const newUser = gql`mutation newUser($userId:String!, $accessToken:String!, $isHost:Boolean!){
  newUser(input:{userId:$userId, accessToken:$accessToken, isHost: $isHost} ) {
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

const connected = connect(select, dispatchToProps)(FirstScreen);
export default graphql(newUser, {
  props: ({ mutate }) => ({
    submit: ({ userId, accessToken, isHost }) =>
      mutate({ variables: { userId, accessToken, isHost } })
  })
})(connected);
