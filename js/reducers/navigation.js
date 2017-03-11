/**
 *@providesModule NavigationReducer
 * @flow
 */
import MainHost from "MainHost";
import MainRefugee from "MainRefugee";
import FirstScreen from "FirstScreen";
import FacebookLogin from "FacebookLogin";
import { addNavigationHelpers, StackNavigator } from "react-navigation";

export const AppNavigator = StackNavigator({
  Home: { screen: FirstScreen },
  Host: { screen: MainHost },
  Guest: { screen: MainRefugee }
});

const navReducer = (state: any, action: any) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  if (
    action.type === "Navigation/NAVIGATE" &&
    (action.routeName === "Host" || action.routeName === "Guest")
  ) {
    return {
      index: 0,
      routes: [newState.routes[1]]
    };
  }
  return newState || state;
};

export default navReducer;
