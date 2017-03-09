/**
 *@providesModule FirstScreen
 * @flow
 */
import React from "react";
import { AppRegistry, Text, View, TouchableHighlight } from "react-native";
import { StackNavigator, NavigationActions } from "react-navigation";

const firstScreen = props => (
  <View>
    <TouchableHighlight onPress={() => props.navigation.navigate("Host")}>
      <Text>I'm a host</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={() => props.navigation.navigate("Guest")}>
      <Text>I'm a Guest</Text>
    </TouchableHighlight>
  </View>
);

export default firstScreen;
