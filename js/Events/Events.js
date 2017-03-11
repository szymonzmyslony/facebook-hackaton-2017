/**
 *@providesModule Events
 * @flow
 */
import React from "react";
import { Text, View, ListView } from "react-native";
type State = { dataSource: any };
import renderPost from "./post";
export type Post = {};
type Props = { posts: Array<Post> };
class Events extends React.Component<void, Props, State> {
  constructor(props: Props) {
    super(props);
  }
  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    }).cloneWithRows(this.props.posts)
  };

  render() {
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={renderPost}
      />
    );
  }
}

export default Events;
