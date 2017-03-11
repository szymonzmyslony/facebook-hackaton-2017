/**
 * @providesModule startUp
 * @flow
 */

const FBSDK = require("react-native-fbsdk");
const { AccessToken } = FBSDK;
import { NavigationActions } from "react-navigation";
const navigateToFirst = NavigationActions.navigate({
  routeName: "Home"
});

const navigateToHost = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({
      routeName: "Host"
    })
  ]
});

const navigateToGuest = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({
      routeName: "Guest"
    })
  ]
});

export const navigateToFirstScreen = (store: any) => {
  AccessToken.getCurrentAccessToken()
    .then(data => {
      if (data) {
        if (store.user.loggedIn) {
          store.dispatch(navigateToHost);
        }
        if (store.user.isHost === "NONE") {
        } else if (store.user.isHost) {
          store.dispatch(navigateToHost);
        } else {
          store.dispatch(navigateToGuest);
        }
      } else {
      }
    })
    .catch(function(error) {});
};
