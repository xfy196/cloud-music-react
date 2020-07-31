import {combineReducers} from "redux-immutable"
import {reducer as recommendReducer} from "application/Recommend/store"
export default combineReducers({
  recommend : recommendReducer
})