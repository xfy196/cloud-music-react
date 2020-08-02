import * as actionTypes from "./actionTypes"
import { fromJS } from "immutable"

const defaultStates = fromJS({
  category: "",
  singersList: [],
  alpha: "",
  listOffset: 0,
  enterLoading: true,
  pullUpLoading: false,
  pullDownLoading: false
});

export default (state = defaultStates, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return state.merge({
        "category": action.data,
        listOffset: 0,
        enterLoading: true
      });
    case actionTypes.CHANGE_SINGER_LIST:
      return state.set(
        "singersList", action.data
      );
    case actionTypes.CHANGE_ALPHA:
      return state.merge({
        "alpha": action.data,
        listOffset: 0,
        enterLoading: true
      });
    case actionTypes.CHANGE_SINGER_LIST:
      return state.set(
        "singersList", action.data
      )
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set("enterLoading", action.data);
    case actionTypes.CHANGE_PULLUP_LOADING:
      return state.set("pullUpLoading", action.data)
    case actionTypes.CHANGE_PULLDOWN_LOADING:
      return state.set("pullDownLoading", action.data);
    case actionTypes.CHANGE_LIST_OFFSET:
      return state.set("listOffset", action.data);
    default:
      return state
  }
}
