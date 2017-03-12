/**
 *@providesModule NotificationsPanel
 * @flow
 */
import React from "react";
import { TouchableHighlight, Button, Text, View, ListView } from "react-native";
import Notifications from "Notifications";
type State = { dataSource: any };
import { gql, graphql } from "react-apollo";
import type { Notification } from "Notifications";
type Props = { posts: Array<Notification> };

class NotificationsPanel extends React.Component {
  static navigationOptions = {
    title: "Notifications panel"
  };
  render() {
    return (
      <Notifications
        loading={false}
        notifications={[
          { title: "hahahah" },
          { title: "hahahah" },
          { title: "hahahah" }
        ]}
      />
    );
  }
}

// const FetchedNotifications = gql`
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

//export default graphql(FetchedNotifications)(NotificationsPanel);
export default NotificationsPanel;
