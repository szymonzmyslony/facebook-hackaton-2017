/**
 *@providesModule Events
 * @flow
 */
import React from "react";
import { Text, View, ListView } from "react-native";
type State = { dataSource: any };
import renderPost from "Post";

export type Post = {
  title: string,
  description: string,
  dateTime: string,
  location: string,
  creatorName: string,
  createSurname: string,
  picture: string
};

type Props = { posts: Array<Post>, loading: boolean };
import Loading from "loading";
class Events extends React.Component<void, Props, State> {
  constructor(props: Props) {
    super(props);
  }
  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    }).cloneWithRows(this.props.posts)
  };
  componentWillReceiveProps = (nextProps: Props) => {
    if (!nextProps.loading) {
      if (this.props.posts !== nextProps.posts) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(nextProps.posts)
        });
      }
    }
  };

  render() {
    if (this.props.loading) {
      return <Loading />;
    }
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
