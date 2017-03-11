/**
 * @providesModule CreateEvent
 * @flow
 */
import React from "react";
import { Button, Text, View, ListView } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Fumi } from "react-native-textinput-effects";

const localState = {
  location: "",
  date: "",
  title: ""
};

class CreateEvent extends React.Component {
  static navigationOptions = {
    title: "Create event"
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: "lightblue",
          flex: 1,
          flexDirection: "column"
        }}
      >
        <Fumi
          style={{ flex: 1 }}
          label={"Course Name"}
          iconClass={FontAwesomeIcon}
          iconName={"university"}
          iconColor={"#f95a25"}
        />
      </View>
    );
  }
}

export default CreateEvent;
