import {combineReducers} from "redux-immutable"
import {reducer as recommendReducer} from "application/Recommend/store"
import {reducer as singersReducer} from "application/Singers/store"
export default combineReducers({
  recommend : recommendReducer,
  singers : singersReducer
})