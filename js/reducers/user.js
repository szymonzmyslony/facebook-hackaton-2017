/**
 *@providesModule UserReducer
 * @flow
 */


import { REHYDRATE } from "redux-persist/constants";

type UserAction = {type: "UPDATE_USERNAME"}

export const updateUsername = (name: string): UserAction => (
  {type: "UPDATE_USERNAME"}
)

type Test =   {type: "TEST"}
export const testUserEpic = () : Test => (
  {type: "TEST"}
)

export type State = {
  name: string
};

const initialState = {
  name: "Chuj"
};

const userReducer = (state: State = initialState, action: UserAction): State => {
  switch (action.type) {
    case "UPDATE_USERNAME":
      return { ...state, name: "Szymon"};
    default:
      return state;
  }
};

export default userReducer;
