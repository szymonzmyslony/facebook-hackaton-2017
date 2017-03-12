/**
 * @providesModule Notifications
 * @flow
 */

import React from "react";
import { Text, View, ListView } from "react-native";
type State = { dataSource: any };
import renderPost from "Notification";
import Loading from "loading";

export type Notification = {
  type: string,
  name: string,
  surname: name,
  url: string
};

type Props = { notifications: Array<Notification>, loading: boolean };

class Notifications extends React.Component<void, Props, State> {
  constructor(props: Props) {
    super(props);
  }
  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    }).cloneWithRows(this.props.notifications)
  };
  componentWillReceiveProps = (nextProps: Props) => {
    if (!nextProps.loading) {
      if (this.props.notifications !== nextProps.notifications) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(
            nextProps.notifications
          )
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

export default Notifications;
