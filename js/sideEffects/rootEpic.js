/**
 *@providesModule RootEpic
 * @flow
 */

import { combineEpics } from 'redux-observable';
import changeName from "UserEpic"

const rootEpic = combineEpics(
  changeName
);

export default rootEpic;
