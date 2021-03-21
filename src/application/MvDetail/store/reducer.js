import * as actionTypes from "./actionTypes"
import { fromJS } from "immutable"
const defaultState = fromJS({
  mvDetail: {
    data: {}
  },
  url: {
    data: {}
  }
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_MV_DETAIL:
      return state.set("mvDetail", action.data);
    case actionTypes.SET_MV_URL:
      return state.set("url", action.data)
    default:
      return state;
  }
}