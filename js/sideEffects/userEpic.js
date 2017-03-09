/**
 *@providesModule UserEpic
 * @flow
 */
import {updateUsername} from "UserReducer"
import 'rxjs'

const changeName = (action$ : any, store: any) =>
    action$.filter(action => {return action.type === 'TEST'})
      .mapTo(updateUsername("asdas"));

export default changeName;
