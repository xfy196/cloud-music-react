import * as actionTypes from "./actionTypes"
import { fromJS } from "immutable"
const defaultState = fromJS({
  currentAlbum: {},
  enterLoading : false,
  songs: []
})
export default (state = defaultState, action) => {
  switch (action.type){
    case actionTypes.CHANGE_ALBUM_LIST:
      return state.set("currentAlbum", action.data);
    case actionTypes.CHANGE_ALBUM_ENTER_LOADING:
      return state.set("enterLoading", action.data)
    case actionTypes.CHANGE_ALBUM_SONGS:
      return state.set("songs", action.data)
    default:
      return state;
  }
}