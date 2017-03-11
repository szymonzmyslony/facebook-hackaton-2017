/**
 *@providesModule Events
 * @flow
 */
import React from "react";
import { Text, View, ListView } from "react-native";
import Events from "Events";
type State = { dataSource: any };
export type Post = { title: string };
type Props = { posts: Array<Post> };

const HostEvents = () => (
  <Events
    posts={[{ title: "hahahah" }, { title: "hahahah" }, { title: "hahahah" }]}
  />
);

export default HostEvents;
