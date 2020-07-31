import * as actionTypes from "./actionTypes"
import { fromJS } from "immutable"

const defaultStates = fromJS({
  bannerList: [],
  recommendList : []
})

// 暴露具体的方法
export default (state = defaultStates, action) => {
  switch(action.type){
    case actionTypes.CHANGE_BANNER:
      return state.set("bannerList", action.data);
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set("recommendList", action.data)
    default:
      return state
  }
}