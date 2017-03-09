/**
 *@providesModule FirstScreen
 * @flow
 */
import React from "react";
import { AppRegistry, Text, View, TouchableHighlight } from "react-native";
import { StackNavigator, NavigationActions } from "react-navigation";
import {testUserEpic} from "UserReducer"
import { connect } from "react-redux";

const firstScreen = (props: any) => (
  <View>
    <TouchableHighlight onPress={() => props.navigation.navigate("Host")}>
      <Text>I'm a host</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={() => {props.navigation.navigate("Guest")
      props.test()}}>
        <Text>I'm a Guest</Text>
      </TouchableHighlight>
  </View>
);

const dispatchToProps = dispatch => ({
  test: () => dispatch(testUserEpic()),
});

export default connect(null, dispatchToProps)(firstScreen);
