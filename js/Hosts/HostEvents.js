/**
 *@providesModule HostEvents
 * @flow
 */
import React from "react";
import { TouchableHighlight, Button, Text, View, ListView } from "react-native";
import Events from "Events";
type State = { dataSource: any };
export type Post = { title: string };
type Props = { posts: Array<Post> };

class HostEvents extends React.Component {
  static navigationOptions = {
    title: "Events",
    header: (navigation, defaultHeader) => ({
      right: (
        <Button
          title={"+"}
          onPress={() => navigation.navigate("CreateEvent")}
        />
      )
    })
  };
  render() {
    return (
      <Events
        posts={[
          { title: "hahahah" },
          { title: "hahahah" },
          { title: "hahahah" }
        ]}
      />
    );
  }
}

export default HostEvents;
