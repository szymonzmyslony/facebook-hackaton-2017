/**
 *@providesModule navigationReducer
 * @flow
 */
import MainHost from "MainHost";
import MainRefugee from "MainRefugee";
import FirstScreen from "../FirstScreen";
import { addNavigationHelpers, StackNavigator } from "react-navigation";

export const AppNavigator = StackNavigator({
  Home: { screen: FirstScreen },
  Host: { screen: MainHost },
  Guest: { screen: MainRefugee }
});

const navReducer = (state: any, action: any) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default navReducer;
