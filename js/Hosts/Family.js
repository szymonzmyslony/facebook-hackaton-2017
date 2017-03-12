/**
 * @providesModule Family
 * @flow
 */
import React from "react";
import { Button, StyleSheet, Text, View, ListView } from "react-native";
import People from "People";
import type { Person } from "Types";
type State = { dataSource: any };
import { gql, graphql } from "react-apollo";
import type { State as AppState } from "rootReducer";
import { connect } from "react-redux";

const people = [
  {
    firstName: "John",
    lastName: "Sparrow",
    birthday: "19-04-1993",
    location: "Berlin, Germany",
    hometown: "Aleppo, Syria",
    isGuest: true,
    picture: "https://2.gravatar.com/avatar/27eb4093e7ce0ed7c4f5fe1a7f027ab6?s=256&d=identicon&r=G"
  },
  {
    firstName: "Mohammed",
    lastName: "Ali",
    birthday: "23-05-1986",
    location: "Berlin, Germany",
    hometown: "Damascus, Syria",
    isGuest: true,
    picture: "https://s-media-cache-ak0.pinimg.com/236x/6b/a6/0a/6ba60aebe4c64bd33d7ad285565f78d8.jpg"
  },
  {
    firstName: "Aliya.",
    lastName: "Muttawa",
    birthday: "23-05-1976",
    location: "Berlin, Germany",
    hometown: "Raqqa, Syria",
    isGuest: true,
    picture: "https://www.lebanoninapicture.com/Prv/Images/Pages/Page_89053/syrian-refugee-nermin-abrouch-8-who-fled-with-h-2-16-2017-4-29-00-pm-t.jpg"
  },
  {
    firstName: "Aliya.",
    lastName: "Muttawa",
    birthday: "23-05-1976",
    location: "Berlin, Germany",
    hometown: "Raqqa, Syria",
    isGuest: false,
    picture: "https://www.lebanoninapicture.com/Prv/Images/Pages/Page_89053/syrian-refugee-nermin-abrouch-8-who-fled-with-h-2-16-2017-4-29-00-pm-t.jpg"
  }
];

class Family extends React.Component {
  static navigationOptions = {
    title: "Your family",
    header: (navigation, defaultHeader) => ({
      right: (
        <Button
          title={". . .  "}
          onPress={() => navigation.navigate("Settings")}
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
    return <People loading={false} people={people} />;
  }
}

const styles = StyleSheet.create({
  list: { paddingLeft: 0, paddingTop: 0, backgroundColor: "white" }
});
export default Family;
// const FetchedPosts = gql`
// query {
//   user(id: 109541496244907) {
//     connectedUsers {
//       edges {
//         node {
//           userId,
//           firstName,
//           lastName,
//           picture,
//           location
//         }
//       }
//     }
//   }
// }`;
//
// // const select = (state: AppState) => {
//   return {
//     userId: state.user.userId
//   };
// };
//
// const dispatchToProps = dispatch => ({});
//
// const connected = connect(select, dispatchToProps)(Family);

// export default graphql(FetchedPosts)(Family);
