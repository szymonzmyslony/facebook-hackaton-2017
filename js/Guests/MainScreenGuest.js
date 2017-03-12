/**
 *@providesModule MainScreenGuest
 * @flow
 */

import React from "react";
import { Text, View } from "react-native";
import { TabNavigator } from "react-navigation";
import HostEvents from "HostEvents";
import GuestEvents from "GuestEvents";
import Family from "Family";

const MainGuest = TabNavigator(
  {
    Family: { screen: Family },
    Events: {
      screen: GuestEvents
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "dodgerblue",
      labelStyle: {
        fontSize: 17,
        marginBottom: 15,
        fontWeight: "400"
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

export default MainGuest;
