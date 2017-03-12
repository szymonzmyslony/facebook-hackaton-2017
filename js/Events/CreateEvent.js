/**
 * @providesModule CreateEvent
 * @flow
 */
import React from "react";
import { StyleSheet, DatePickerIOS, Text, View, ListView } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Hoshi } from "react-native-textinput-effects";
import GooglePlacesAutocomplete from "./autocomplete";
import Button from "apsl-react-native-button";
import { gql, graphql } from "react-apollo";
import { connect } from "react-redux";

class CreateEvent extends React.Component {
  static navigationOptions = {
    title: "Create event"
  };

  static defaultProps = {
    date: new Date(),
    timeZoneOffsetInHours: (-1) * new Date().getTimezoneOffset() / 60
  };

  state = {
    date: this.props.date,
    timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
    location: "",
    title: "",
    description: ""
  };

  onDateChange = (date: any) => {
    this.setState({ date: date });
  };

  onLocationChange = (location: string) => {
    this.setState({ location: location });
  };

  onTimezoneChange = (event: any) => {
    var offset = parseInt(event.nativeEvent.text, 10);
    if (isNaN(offset)) {
      return;
    }
    this.setState({ timeZoneOffsetInHours: offset });
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: "#E9E9EF",
          flex: 1,
          flexDirection: "column"
        }}>
        <View style={{ height: 5 }} />
        <View
          style={{
            height: 40,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: "#E9E9EF"
          }}>
          <Hoshi
            label={"Title"}
            // this is used as active border color
            borderColor={"dodgerblue"}
            // this is used to set backgroundColor of label mask.
            // please pass the backgroundColor of your TextInput container.
            backgroundColor={"#E9E9EF"}
            onChangeText={text => {
              this.setState({ title: text });
            }}
          />
          <View style={{ height: 5 }} />
          <Hoshi
            label={"Short description"}
            // this is used as active border color
            borderColor={"dodgerblue"}
            // this is used to set backgroundColor of label mask.
            // please pass the backgroundColor of your TextInput container.
            backgroundColor={"#E9E9EF"}
            onChangeText={text => {
              this.setState({ description: text });
            }}
          />

          <View style={{ height: 20 }} />
          <Text style={{ color: "#758291", fontSize: 16, paddingLeft: 16 }}>
            Date
          </Text>
          <DatePickerIOS
            date={this.state.date}
            mode="datetime"
            timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
            onDateChange={this.onDateChange}
          />
          <Text style={{ color: "#758291", fontSize: 16, paddingLeft: 16 }}>
            Location
          </Text>
        </View>
        <View style={{ position: "absolute", top: 415, marginLeft: 6 }}>
          <GooglePlacesAutocomplete
            placeholder="Where"
            minLength={2}
            /* minimum length of text to search*/
            autoFocus={false}
            listViewDisplayed="auto"
            /* true/false/undefined*/
            fetchDetails={true}
            onPress={(data, details) => {
              this.onLocationChange(data.description);
            }}
            getDefaultValue={() => {
              return ""; // text input default value
            }}
            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: "AIzaSyC-5HEBKhk067cX09_31YljiGF6ysGTAzI",
              // language of the results
              // default: 'geocode'
              // types: "(cities)"
              language: "en"
            }}
            GoogleReverseGeocodingQuery={{}}
            GooglePlacesSearchQuery={{
              // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
              rankby: "distance",
              types: "food"
            }}
            filterReverseGeocodingByTypes={[
              "locality",
              "administrative_area_level_3"
            ]}
            /* filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities*/
            predefinedPlaces={this.props.locationHistory}
          />
        </View>
        <View style={{ position: "absolute", top: 550 }}>
          <Button
            style={[
              {
                backgroundColor: "dodgerblue"
              },
              styles.button
            ]}
            onPress={() => {
              this.props
                .submit({
                  title: this.state.title,
                  location: this.state.location,
                  creator: this.props.id,
                  text: "GOWNO",
                  dateTime: "2017-03-12T00:00:00+00:00"
                })
                .then(data => {
                  this.props.navigation.back();
                })
                .catch(error => {
                  console.log(error);
                });
            }}>
            <View>
              <Text style={styles.text}>Create</Text>
            </View>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 0,
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 30,
    width: 310
  },
  text: {
    fontWeight: "700",
    fontSize: 17,
    justifyContent: "center",
    alignItems: "center",
    color: "white"
  },
  main: {
    marginLeft: 30,
    marginRight: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  notButtons: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  fbButton: {
    height: 40,
    width: 310,
    marginBottom: 15,
    borderWidth: 0,
    borderRadius: 20
  },
  topCaption: { fontWeight: "800", fontSize: 30, color: "#983B59" }
});

const newEventPost = gql`mutation newEventPost($title: String!, $location:String!, $creator: String!, $text: String!, $dateTime:String!){
    newEventPost(input:
      {title: $title, location: $location , creator: $creator, text:$text, dateTime: $dateTime})
    {
      clientMutationId
    }
  }`;

const select = state => {
  return {
    id: state.user.userId
  };
};
const connected = connect(select)(CreateEvent);
export default graphql(newEventPost, {
  props: ({ mutate }) => ({
    submit: ({ title, location, creator, text, dateTime }) => mutate({
      variables: { title, location, creator, text, dateTime }
    })
  })
})(connected);
