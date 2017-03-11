/**
 *@providesModule MainScreen
 * @flow
 */

import React from "react";
import { Text, View } from "react-native";
import { TabNavigator } from "react-navigation";
import HostEvents from "HostEvents";
import Family from "Family";
const MainHost = TabNavigator(
  {
    Family: { screen: Family },
    Events: { screen: HostEvents }
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

export default MainHost;
