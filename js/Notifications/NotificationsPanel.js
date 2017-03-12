/**
 *@providesModule NotificationsPanel
 * @flow
 */
import React from "react";
import { TouchableHighlight, Button, Text, View, ListView } from "react-native";
import Notifications from "Notifications";
type State = { dataSource: any };
import type { Notification } from "Notifications";
type Props = { posts: Array<Notification> };

class NotificationsPanel extends React.Component {
  static navigationOptions = {
    title: "Notifications"
  };
  render() {
    return (
      <Notifications
        loading={false}
        notifications={[
          {
            type: "hahahah",
            name: "Szymson",
            surname: "Zmyslony",
            url: "https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png"
          },
          {
            type: "hahahah",
            name: "Maciej",
            surname: "Krasiński",
            url: "https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png"
          },
          {
            type: "hahahah",
            name: "Tosia",
            surname: "Ruszkowska",
            url: "https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png"
          }
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
