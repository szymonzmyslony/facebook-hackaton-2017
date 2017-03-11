/**
 *@providesModule NavigationReducer
 * @flow
 */
import MainHost from "MainScreen";
import MainRefugee from "MainRefugee";
import FirstScreen from "FirstScreen";
import Settings from "../Settings/Settings";
import { addNavigationHelpers, StackNavigator } from "react-navigation";
import type { NavigationState } from "react-navigation";
export const AppNavigator = StackNavigator({
  Home: { screen: FirstScreen },
  Host: { screen: MainHost },
  Guest: { screen: MainRefugee },
  Settings: { screen: Settings }
});

const navReducer = (state: NavigationState, action: any) => {
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
