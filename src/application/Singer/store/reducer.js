import * as actionTypes from "./actionTypes"
import {fromJS} from "immutable"
const defaultState = fromJS({
  artist : {},
  hotSongs : [],
  enterLoading : true
})
export default (state = defaultState, action) => {
  switch (action.type){
    case actionTypes.CHANGE_SINGER_ARTISTS:
      return state.set("artist", action.data);
    case actionTypes.CHANGE_SINGER_SONGS:
      return state.set("hotSongs", action.data);
    case actionTypes.CHANGE_SINGER_ENTER_LOADING:
      return state.set("enterLoading", action.data);
    default:
      return state;
  }
}