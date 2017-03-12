/**
 *@providesModule People
 * @flow
 */
import React from "react";
import { Text, View, ListView } from "react-native";
type State = { dataSource: any };
import renderPerson from "PersonView";

export type Person = {
  firstName: string,
  lastName: string,
  birthday: string,
  location: string
};

type Props = { people: Array<Person>, loading: boolean };
import Loading from "loading";

class People extends React.Component {
  // constructor(props: Props) {
  //   super(props);
  // }

  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    }).cloneWithRows(this.props.people)
  };
  // componentWillReceiveProps = (nextProps: Props) => {
  //   if (!nextProps.loading) {
  //     if (this.props.people !== nextProps.people) {
  //       this.setState({
  //         dataSource: this.state.dataSource.cloneWithRows(nextProps.people)
  //       });
  //     }
  //   }
  // };

  render() {
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={renderPerson.bind(this)}
      />
    );
  }
}

export default People;
