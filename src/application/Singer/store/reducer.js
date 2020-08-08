import * as actionTypes from "./actionTypes"
import {fromJS} from "immutable"
const defaultState = fromJS({
  artist : {},
  hotSongs : []
})
export default (state = defaultState, action) => {
  switch (action.type){
    case actionTypes.CHANGE_SINGER_ARTISTS:
      return state.set("artist", action.data);
    case actionTypes.CHANGE_SINGER_SONGS:
      return state.set("hotSongs", action.data);
    default:
      return state;
  }
}