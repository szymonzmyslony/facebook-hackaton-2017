/**
 *@providesModule MainScreen
 * @flow
 */

import React from "react";
import { Text, View } from "react-native";
import { TabNavigator } from "react-navigation";
import Events from "Events";
import YourGuest from "Family";
const MainHost = TabNavigator(
  {
    Family: { screen: YourGuest },
    Events: { screen: Events }
  },
  {
    tabBarOptions: {
      activeTintColor: "dodgerblue",
      labelStyle: {
        fontSize: 17,
        marginBottom: 15,
        fontWeight: "600"
      },
      style: {
        backgroundColor: "white"
      },
      scrollEnabled: true
    },
    swipeEnabled: true,
    animationEnaled: true
  }
);

MainHost.navigationOptions = {
  title: "Be nice to others"
};

export default MainHost;
