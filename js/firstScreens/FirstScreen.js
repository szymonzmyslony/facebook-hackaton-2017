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
              backgroundColor: this.props.isHost === true
                ? "dodgerblue"
                : "lightblue",
              opacity: this.props.isHost === true ? 100 : 50
            },
            styles.button
          ]}
          onPress={() => {
            this.props.updateIsHost(true);
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
                        userID: data.userID,
                        accessToken: data.accessToken,
                        isHost: true
                      })
                      .then(p => {
                        this.props.navigation.navigate(
                          this.props.isHost ? "Host" : "Guest"
                        );
                      })
                      .catch(error => {
                        debugger;
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
// const isHost = true;

// const newUser = gql`mutation {newUser($id: String!) {
//     newUser(input: {userId:"109541496244907",accessToken:"EAAUKNgKXb3gBAArPdqQaevmrKiD6xBZAzygMncM0Li8ASaxCMzjwNqsJMg4oUPPzx1oZB65tWgzlmad6ZBIwlUZBeBp2EcSpcB5gHzhmipzbgvZCQlrgc8TYJxiRnQ87oe79Wep71ZAWTdbdM5ZAY4yKXB77oVhPIwz2wpJwyBZCLs7O12xRtC6frKGYUznnxirfZC9QE5dM1ITkhDNzF9UlWmoUSljuMYZAwZD", isHost: true }) {
//       clientMutationId
//     }
//   }}
// `;

// const newUser = gql`mutation {
//   newUser{input: {userId:"109541496244907",accessToken:"EAAUKNgKXb3gBAArPdqQaevmrKiD6xBZAzygMncM0Li8ASaxCMzjwNqsJMg4oUPPzx1oZB65tWgzlmad6ZBIwlUZBeBp2EcSpcB5gHzhmipzbgvZCQlrgc8TYJxiRnQ87oe79Wep71ZAWTdbdM5ZAY4yKXB77oVhPIwz2wpJwyBZCLs7O12xRtC6frKGYUznnxirfZC9QE5dM1ITkhDNzF9UlWmoUSljuMYZAwZD", isHost: true }} {
//     clientMutationId
//
//   }
// }`;

const userId = "109314856267823";
const isHost = true;
const accessToken = "EAAUKNgKXb3gBADpKFUYhHlzppn2iLRmRu1ANoqVuRAk2WFjnOU3ZCWAey8NbiJLR4qi4YMNn7QnWF3Js67M8OygvsB42XZAioDHFfg2SHG9JUFKF6iRq9SR00b6PmzVSntXWdDwwCrvSsJHMv2UVBZAaZBUBs6ZB3cYJ0YRDFOoEhcOIXn1yZBwU5oBMLwldp2Nu0MYvASWSgzziVZCtrg3K8DkAMD1lHoZD";
const newUser = gql`mutation
  newUser($userId: String!, $isHost: boolean!, $accessToken: String!){
    newUser(userId:$userId, isHost:$isHost, accessToken:$accessToken) {
    user {
      userId,
      firstName,
      lastName,
      gender,
      location,
      email,
      picture
    }
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
  updateUserCredentials: (id: string, token: string) =>
    dispatch(updateUserCredentials(id, token))
});

const connected = connect(select, dispatchToProps)(FirstScreen);
export default graphql(newUser, {
  props: ({ mutate }) => ({
    submit: (id, token, isHost) => mutate({ variables: { id, token, isHost } })
  })
})(connected);
