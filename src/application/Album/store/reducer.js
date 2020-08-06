import * as actionTypes from "./actionTypes"
import { fromJS } from "immutable"
const defaultState = fromJS({
  currentAlbum: []
})
export default (state = defaultState, action) => {
  switch (action.type){
    case actionTypes.CHANGE_ALBUM_LIST:
      return state.set("currentAlbum", action.data);
    default:
      return state;
  }
}