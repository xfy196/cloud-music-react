import * as actionTypes from "./actionTypes"
import { fromJS, Map } from "immutable"
const defaultState = Map({
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