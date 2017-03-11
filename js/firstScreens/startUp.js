// /**
//  * @providesModule startUp
//  * @flow
//  */
//
// const FBSDK = require("react-native-fbsdk");
// const { AccessToken } = FBSDK;
// import type { isHost } from "UserReducer";
// import { NavigationActions } from "react-navigation";
// const navigateToFirst = NavigationActions.navigate({
//   routeName: "Home"
// });
//
// const navigateToHost = NavigationActions.reset({
//   index: 0,
//   actions: [
//     NavigationActions.navigate({
//       routeName: "Host"
//     })
//   ]
// });
//
// const navigateToGuest = NavigationActions.reset({
//   index: 0,
//   actions: [
//     NavigationActions.navigate({
//       routeName: "Guest"
//     })
//   ]
// });
//
// export const navigateToFirstScreen = (isHost: isHost, dispatch: any) => {
//   AccessToken.getCurrentAccessToken()
//     .then(data => {
//       if (data) {
//         if (isHost === "NONE") {
//         } else if (isHost) {
//           dispatch(navigateToHost);
//         } else {
//           dispatch(navigateToGuest);
//         }
//       } else {
//       }
//     })
//     .catch(function(error) {});
// };
