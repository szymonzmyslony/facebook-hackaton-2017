/**
 *@providesModule UserReducer
 * @flow
 */

import { REHYDRATE } from "redux-persist/constants";

type UserAction = { type: "UPDATE_USERNAME" };
type UpdateIsHost = { type: "UPDATE_IS_HOST", isHost: isHost };

type UpdateUserCredentials = { type: "CREDENTIALS", id: string, token: string };

export const updateUserCredentials = (
  id: string,
  token: string
): UpdateUserCredentials => ({
  type: "CREDENTIALS",
  id,
  token
});

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
  isHost: isHost,
  userId: string,
  accesToken: string
};

const initialState = {
  name: "Chuj",
  isHost: "NONE",
  userId: "",
  accesToken: ""
};

const userReducer = (
  state: State = initialState,
  action: UserAction | UpdateIsHost | UpdateUserCredentials
): State => {
  switch (action.type) {
    case "CREDENTIALS":
      return { ...state, userId: action.id, accesToken: action.token };
    case "UPDATE_USERNAME":
      return { ...state, name: "Szymon" };
    case "UPDATE_IS_HOST":
      return { ...state, isHost: action.isHost };
    default:
      return state;
  }
};

export default userReducer;
