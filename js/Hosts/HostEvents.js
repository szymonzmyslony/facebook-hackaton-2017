/**
 *@providesModule HostEvents
 * @flow
 */
import React from "react";
import { TouchableHighlight, Button, Text, View, ListView } from "react-native";
import Events from "Events";
type State = { dataSource: any };
import { gql, graphql } from "react-apollo";
import type { Post } from "Events";
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

const FetchedPosts = gql`
query {
allEventPosts {
edges {
  node {
    location,
    creator {
      userId
    },
    timeCreated
  }
}
}
}`;

export default graphql(FetchedPosts)(HostEvents);
