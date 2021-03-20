import {combineReducers} from "redux-immutable"
import {reducer as recommendReducer} from "application/Recommend/store"
import {reducer as singersReducer} from "application/Singers/store"
import {reducer as rankReducer} from "application/Rank/store"
import {reducer as albumReducer} from "application/Album/store"
import {reducer as singerReducer} from "application/Singer/store"
import {reducer as playerReducer} from "application/Player/store"
import {reducer as searchReducer} from "application/Search/store"
import {reducer as mvReducer} from "../application/MV/store"
export default combineReducers({
  recommend : recommendReducer,
  singers : singersReducer,
  rank : rankReducer,
  album : albumReducer,
  singerInfo : singerReducer,
  player : playerReducer,
  search : searchReducer,
  mv: mvReducer
})