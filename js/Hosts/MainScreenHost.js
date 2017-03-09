/**
 *@providesModule MainHost
 * @flow
 */

import React from "react";
import { Text, View } from "react-native";
import { TabNavigator } from "react-navigation";
import Events from "HostEvents";
import YourGuest from "YourGuest";
const MainHost = TabNavigator({
  Events: { screen: Events },
  YourGuest: { screen: YourGuest }
});

MainHost.navigationOptions = {
  title: "Be nice to others"
};

export default MainHost;
