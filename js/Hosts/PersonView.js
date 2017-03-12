/**
 *@providesModule PersonView
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Animated,
  TouchableOpacity,
  TouchableHighlight,
  Button
} from "react-native";
import { connect } from "react-redux";
import type { Person } from "Types";

type Props = {
  person: Person
};

const Separator = () => <View style={styles.separator} />;

const personView = (props: any) => {
  const AddButton = () => {
    return props.isGuest === false
      ? <View style={{ position: "absolute", right: 1, paddingTop: 9 }}>
          <TouchableHighlight
            style={[{ backgroundColor: "lightblue" }, styles.button]}
            onPress={() => {}}
          >
            <Text
              style={{
                fontSize: 25,
                color: "white",
                fontWeight: "700",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 4
              }}
            >
              +
            </Text>
          </TouchableHighlight>
        </View>
      : <View />;
  };
  // const { node } = props;
  return (
    <View style={{ backgroundColor: props.isGuest ? "lightblue" : "#E9E9EF" }}>
      <View
        style={[
          styles.mainCard,
          { backgroundColor: props.isGuest ? "lightblue" : "#E9E9EF" }
        ]}
      >
        <View style={{ alignItems: "flex-start" }}>
          <Image
            style={{
              width: 59,
              height: 59,
              marginTop: 1.5
            }}
            source={{
              uri: props.picture
                ? props.picture
                : "https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png"
            }}
          />
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={{ marginLeft: 15, flexDirection: "row" }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              {
                `${props.firstName ? props.firstName : "michal"} ${props.lastName ? props.lastName : "kazmierski"}`
              }
            </Text>
            <View style={{ marginTop: 5, paddingLeft: 7 }}>
              <Text style={{ fontSize: 14 }}>
                {`${props.birthday ? props.birthday : "defalult birthday"}`}
              </Text>
            </View>
          </View>
          <View style={{ height: 2 }} />
          <View style={{ marginLeft: 15, flexDirection: "row" }}>
            <Text style={{ fontSize: 14 }}>
              {
                `Location: ${props.location ? props.location : "default location"}`
              }
            </Text>
          </View>
          <View style={{ height: 2 }} />
          <View style={{ marginLeft: 15, flexDirection: "row" }}>
            <Text style={{ fontSize: 14 }}>
              {`Hometown: ${props.hometown}`}
            </Text>
          </View>
        </View>
        <AddButton />
      </View>

      <Separator />

    </View>
  );
};

const styles = StyleSheet.create({
  mainCard: {
    borderColor: "#F5F5F5",
    marginTop: 7,
    marginBottom: 7,
    paddingRight: 10,
    paddingLeft: 15,
    height: 60,
    flexDirection: "row"
  },
  commonStyle: {
    paddingRight: 30,
    paddingLeft: 30,
    height: 250,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1
  },
  separator: { height: 1, backgroundColor: "#F5F5F5" },
  nameStyle: { paddingTop: 150, fontWeight: "bold" },
  descriptionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 7,
    paddingLeft: 7,
    justifyContent: "space-between"
  },
  fbFriends: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 7
  },
  bottom: {
    borderTopWidth: 1,
    borderColor: "#F5F5F5",
    backgroundColor: "#FFFFFF",
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 7,
    paddingLeft: 7
  },
  bottomText: { color: "#4A4A4A", fontSize: 13 },
  reviews: { color: "#034F84", fontSize: 20, paddingLeft: 150 },
  restaurantName: { fontSize: 15, fontWeight: "bold", color: "#4A4A4A" },
  deleteButtonStyle: {
    height: 30,
    width: 30,
    position: "absolute",
    top: 20,
    right: 20
  },
  button: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 0,
    backgroundColor: "dodgerblue",
    marginRight: 20
  }
});

export default personView;
