import * as actionTypes from "./actionTypes"
import {fromJS} from "immutable";
const defaultState = fromJS({
  playList : [],
  currentIndex : -1,
  currentSong : {}
})
export default (state = defaultState, action) => {
  switch(action.type){
    case  actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.data);
    case actionTypes.CHANGE_CURRENT_INDEX:
      return state.set("currentIndex", action.data);
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.data)
    default:
      return state;
  }
}