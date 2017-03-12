/**
 *@providesModule Post
 * @flow
 */
import React from "react";
import { StyleSheet, Image, Text, View, ListView } from "react-native";
import type { Post } from "Events";
type Props = { post: Post };

const Separator = () => <View style={styles.separator} />;
const post = (props: Props) => {
  const { node } = props;
  return (
    <View>
      <View style={styles.mainCard}>
        <View style={{ alignItems: "flex-start" }}>
          <Image
            style={{
              width: 59,
              height: 59,
              marginTop: 1.5
            }}
            source={{
              uri: node.creator.picture
                ? node.creator.picture
                : "https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png"
            }}
          />
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={{ marginLeft: 15, flexDirection: "row" }}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              {node.creator.firstName ? node.creator.firstName : "name"}
            </Text>
            <View style={{ width: 5 }} />
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              {node.creator.lastName ? node.creator.lastName : "surname"}
            </Text>

          </View>
          <View style={{ flexDirection: "row", paddingLeft: 14 }}>
            <Text style={{ fontSize: 16, fontWeight: "300" }}>
              {node.title ? node.title : "Default event"}
            </Text>
            <View style={{ width: 10 }} />
            <Text style={{ fontSize: 14, paddingTop: 1 }}>
              {node.location ? node.location : "Default location "}
            </Text>
          </View>
          <View style={{ height: 2 }} />
          <View style={{ marginLeft: 15, flexDirection: "row" }}>
            <Text style={{ fontSize: 14 }}>
              {node.dateTime ? node.dateTime : "29 Feb 1999 07:06 AM  "}
            </Text>

          </View>

          <View style={{ height: 2 }} />
          <View style={{ marginLeft: 15, flexDirection: "row", width: 280 }}>
            <Text style={{ fontSize: 14 }}>
              {node.text ? node.text : "Default details"}
            </Text>
          </View>
        </View>
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
    height: 115,
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
  separator: { height: 1, backgroundColor: "#F5F5F5" }
});

export default post;
