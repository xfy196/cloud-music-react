import * as actionTypes from "./actionTypes"
import { fromJS, List } from "immutable"
const defaultState = fromJS({
  mvList: [],
  hasMore: false,
  count: 0,
  area: "全部",
  pullUpLoading: false,
  pullDownLoading: true,
  offset: 0,
  limit: 30
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_MV_LIST:
      return state.set("mvList", state.get("offset") == 0 ? action.data.data : List(state.get("mvList")).push(...action.data.data)).set("count", state.get("offset") == 0 ? action.data.count : state.get("count")).set("hasMore", action.data.hasMore)
    case actionTypes.CHNAGE_LOADING:
      return state.set("pullDownLoading", action.data)
    case actionTypes.CHANGE_PULL_UP_LOADING:
      return state.set("pullUpLoading", action.data)
    case actionTypes.SET_OFFSET:
      return state.set("offset", action.data)
    default:
      return state;
  }
}