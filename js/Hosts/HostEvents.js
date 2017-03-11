/**
 *@providesModule HostEvents
 * @flow
 */
import React from "react";
import { Text, View, ListView } from "react-native";
import Events from "Events";
type State = { dataSource: any };
import { gql, graphql } from "react-apollo";
import type { Post } from "Events";
type Props = { posts: Array<Post> };

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

const HostEvents = (result: any) => {
  const { data } = result;
  return (
    <Events
      loading={data.loading}
      posts={data.allEventPosts ? data.allEventPosts.edges : []}
    />
  );
};

export default graphql(FetchedPosts)(HostEvents);
