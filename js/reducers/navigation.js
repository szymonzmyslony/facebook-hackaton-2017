/**
 *@providesModule NavigationReducer
 * @flow
 */
import MainHost from "MainScreenHost";
import MainGuest from "MainScreenGuest";
import FirstScreen from "FirstScreen";
import Settings from "../Settings/Settings";
import CreateEvent from "CreateEvent";
import NotificationsPanel from "../Notifications/NotificationsPanel";
import { addNavigationHelpers, StackNavigator } from "react-navigation";
import type { NavigationState } from "react-navigation";
export const AppNavigator = StackNavigator({
  Home: { screen: FirstScreen },
  Host: { screen: MainHost },
  Guest: { screen: MainGuest },
  Settings: { screen: Settings },
  CreateEvent: { screen: CreateEvent },
  NotificationsPanel: { screen: NotificationsPanel }
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
