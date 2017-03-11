/**
 *@providesModule UserReducer
 * @flow
 */

import { REHYDRATE } from "redux-persist/constants";

type UserAction = { type: "UPDATE_USERNAME" };
type UpdateIsHost = { type: "UPDATE_IS_HOST", isHost: isHost };

export const updateUsername = (name: string): UserAction => ({
  type: "UPDATE_USERNAME"
});

export const updateIsHost = (isHost: isHost): UpdateIsHost => ({
  type: "UPDATE_IS_HOST",
  isHost
});

type isHost = boolean | "NONE";

export type State = {
  name: string,
  isHost: isHost
};

const initialState = {
  name: "Chuj",
  isHost: "NONE"
};

const userReducer = (
  state: State = initialState,
  action: UserAction | UpdateIsHost
): State => {
  switch (action.type) {
    case "UPDATE_USERNAME":
      return { ...state, name: "Szymon" };
    case "UPDATE_IS_HOST":
      return { ...state, isHost: action.isHost };
    default:
      return state;
  }
};

export default userReducer;
