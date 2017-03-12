/**
 *@providesModule GuestEvents
 * @flow
 */

import React from "react";
import { TouchableHighlight, Button, Text, View, ListView } from "react-native";
import Events from "Events";
type State = { dataSource: any };

import type { Post } from "Events";
type Props = { posts: Array<Post> };

class GuestEvents extends React.Component {
  static navigationOptions = {
    title: "Events",
    header: (navigation, defaultHeader) => ({
      right: (
        <Button
          title={"offers  "}
          onPress={() => navigation.navigate("CreateEvent")}
        />
      ),
      left: (
        <Button
          title={"  notif"}
          onPress={() => navigation.navigate("NotificationsPanel")}
        />
      )
    })
  };
  render() {
    return <Events loading={false} posts={{ title: "gowno" }} />;
  }
}

export default GuestEvents;
