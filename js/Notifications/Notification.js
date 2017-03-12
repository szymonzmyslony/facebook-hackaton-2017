/**
 *@providesModule Notification
 * @flow
 */
import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  Image,
  Text,
  View,
  ListView
} from "react-native";
import type { Notification } from "Notifications";
type Props = { post: Notification };

const Separator = () => <View style={styles.separator} />;
const notification = (props: Props) => {
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
              {"Need help?"}
            </Text>
          </View>
          <View style={{ height: 2 }} />
          <View style={{ marginLeft: 15, flexDirection: "row" }}>
            <Text style={{ fontSize: 14 }}>
              {"Henrik van Bakel"}
            </Text>
          </View>
          <View style={{ height: 2 }} />
          <View style={{ marginLeft: 15, flexDirection: "row" }}>
            <Text style={{ fontSize: 14 }}>
              {"Location: Berlin"}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            marginBottom: 10,
            paddingLeft: 30
          }}
        >
          <TouchableHighlight
            style={[{ backgroundColor: "lightblue" }, styles.button]}
            onPress={() => {}}
          >
            <Text style={styles.text}>YES</Text>
          </TouchableHighlight>
          <View style={{ width: 10 }} />
          <TouchableHighlight
            style={[{ backgroundColor: "orangered" }, styles.button]}
            onPress={() => {}}
          >
            <Text style={styles.text}>NO</Text>
          </TouchableHighlight>
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
  separator: { height: 1, backgroundColor: "#F5F5F5" },
  text: {
    fontWeight: "700",
    fontSize: 17,
    justifyContent: "center",
    alignItems: "center",
    color: "white"
  },
  button: {
    height: 40,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 0
  }
});

export default notification;
