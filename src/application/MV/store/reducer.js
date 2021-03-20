import * as actionTypes from "./actionTypes"
import {fromJS} from "immutable"
const defaultState = fromJS({
  mvList: [],
  hasMore: false,
  count: 0,
  area: "全部",
  loading: true
})

export default (state = defaultState, action) => {
  switch(action.type){
    case actionTypes.SET_MV_LIST:
      return state.merge({
        mvList: action.data.data,
        count: action.data.count,
        hasMore: action.data.hasMore
      })
    default:
      return state;
  }
}