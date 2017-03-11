/**
 * @providesModule Family
 * @flow
 */
import React from "react";
import { StyleSheet, Text, View, ListView } from "react-native";
import PersonView from "PersonView";
import type { Person } from "Types";

const mockData = [
  {
    name: "asfdsad",
    surname: "asdasdasd",
    age: 23,
    location: "dasdasad",
    hometown: "sadasddas",
    photo: {
      url: "https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png"
    }
  },
  {
    name: "asgdfgdf",
    surname: "jghjfghjhgf",
    age: 33,
    location: "jghf",
    hometown: "hjgffj",
    photo: {
      url: "https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png"
    }
  },
  {
    name: "erterter",
    surname: "ghfghfdg",
    age: 24,
    location: "bnvvb",
    hometown: "dfg",
    photo: {
      url: "https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png"
    }
  }
];

type Props = {
  people: Array<Person>
};

class Family extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    }).cloneWithRows(mockData)
  };
  renderRow(person: Person) {
    return <PersonView person={person} />;
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          enableEmptySections={true}
          contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: { paddingLeft: 0, paddingTop: 0, backgroundColor: "white" }
});

export default Family;
