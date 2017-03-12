/**
 *@providesModule HostEvents
 * @flow
 */
import React from "react";
import { TouchableHighlight, Button, Text, View, ListView } from "react-native";
import Events from "Events";
type State = { dataSource: any };
import type { Post } from "Events";
type Props = { posts: Array<Post> };

class HostEvents extends React.Component {
  static navigationOptions = {
    title: "Events",
    header: (navigation, defaultHeader) => ({
      right: (
        <Button
          title={"add  "}
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
    return (
      <Events
        loading={this.props.data.loading}
        posts={
          this.props.data.allEventPosts
            ? this.props.data.allEventPosts.edges
            : []
        }
      />
    );
  }
}

// const FetchedPosts = gql`
// query {
// allEventPosts {
// edges {
//   node {
//     location,
//     creator {
//       userId
//     },
//     timeCreated
//   }
// }
// }
// }`;

export default HostEvents;
