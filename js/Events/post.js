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
  //  const { node } = props;
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
              uri: "https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png"
            }}
          />
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={{ marginLeft: 15, flexDirection: "row" }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              {"Wyjcie na dziwki"}
            </Text>
          </View>
          <View style={{ height: 2 }} />
          <View style={{ marginLeft: 15, flexDirection: "row" }}>
            <Text style={{ fontSize: 14 }}>
              {"13 Mar 2017 3:00 PM     Poznan"}
            </Text>
          </View>
          <View style={{ height: 2 }} />
          <View style={{ marginLeft: 15, flexDirection: "row" }}>
            <Text style={{ fontSize: 14 }}>
              {"Details: asdadsadsaddsa"}
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
  separator: { height: 1, backgroundColor: "#F5F5F5" }
});

export default post;
