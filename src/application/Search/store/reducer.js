import * as actionTypes from "./actionTypes"
import {fromJS} from "immutable"

const defaultState = fromJS({
  hotList : [],
  suggestList: {},
  songsList : {},
  enterLoading : true
})
export default (state = defaultState, action) => {
  switch(action.type){
    case actionTypes.CHANGE_HOT_KEY_WORDS:
      return state.set("hotList", action.data);
    case actionTypes.CHANGE_SUGGEST_LIST:
      return state.set("suggestList", action.data)
    case actionTypes.CHANGE_SONGS_LIST:
      return state.set("songsList", action.data)
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set("enterLoading", action.data)
    default:
      return state;
  }
}