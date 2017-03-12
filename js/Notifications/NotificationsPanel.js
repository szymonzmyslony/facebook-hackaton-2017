/**
 *@providesModule NotificationsPanel
 * @flow
 */
import React from "react";
import { TouchableHighlight, Button, Text, View, ListView } from "react-native";
import Notifications from "Notifications";
type State = { dataSource: any };
import type { Notification } from "Notifications";

const people = [
  {
    name: "John",
    lastName: "Sparrow",
    birthday: "19-04-1993",
    location: "Berlin, Germany",
    hometown: "Aleppo, Syria",
    isGuest: true,
    picture: "https://2.gravatar.com/avatar/27eb4093e7ce0ed7c4f5fe1a7f027ab6?s=256&d=identicon&r=G"
  },
  {
    name: "Mohammed",
    lastName: "Ali",
    birthday: "23-05-1986",
    location: "Berlin, Germany",
    hometown: "Damascus, Syria",
    isGuest: true,
    picture: "https://s-media-cache-ak0.pinimg.com/236x/6b/a6/0a/6ba60aebe4c64bd33d7ad285565f78d8.jpg"
  },
  {
    name: "Aliya.",
    lastName: "Muttawa",
    birthday: "23-05-1976",
    location: "Berlin, Germany",
    hometown: "Raqqa, Syria",
    isGuest: true,
    picture: "https://www.lebanoninapicture.com/Prv/Images/Pages/Page_89053/syrian-refugee-nermin-abrouch-8-who-fled-with-h-2-16-2017-4-29-00-pm-t.jpg"
  }
];
class NotificationsPanel extends React.Component {
  static navigationOptions = {
    title: "Notifications"
  };
  render() {
    return <Notifications loading={false} notifications={people} />;
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
