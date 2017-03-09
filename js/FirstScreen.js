/**
 *@providesModule FirstScreen
 * @flow
 */
import React, {Component} from "react";
import { AppRegistry, Text, View, TouchableHighlight } from "react-native";
import { StackNavigator, NavigationActions } from "react-navigation";
import {testUserEpic} from "UserReducer"
import { connect } from "react-redux";

const FBSDK = require("react-native-fbsdk");
const { LoginButton, AccessToken } = FBSDK;

// const firstScreen = (props: any) => (
//   <View>
//     <TouchableHighlight onPress={() => props.navigation.navigate("Host")}>
//       <Text>I'm a host</Text>
//     </TouchableHighlight>
//     <TouchableHighlight onPress={() => {props.navigation.navigate("Guest")
//       props.test()}}>
//       <Text>I'm a Guest</Text>
//     </TouchableHighlight>
//   </View>
// );

class Login extends Component {
  render() {
    return (
      <View>
        <View >
          <Text >
            Fastest way to help refugees
          </Text>
          <Text >Wherever you are.</Text>
        </View>
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

const dispatchToProps = dispatch => ({
  test: () => dispatch(testUserEpic()),
});

export default connect(null, dispatchToProps)(Login);
