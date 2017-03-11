/**
 *@providesModule Post
 * @flow
 */
import React from "react";
import { Text, View, ListView } from "react-native";
import type { Post } from "Events";
type Props = { post: Post };
const post = (props: Props) => {
  const { node } = props;
  return <Text style={{ height: 30, width: 80 }}>{node.creator.userId}</Text>;
};

export default post;
