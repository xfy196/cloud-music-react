import * as actionTypes from "./actionTypes"
import { fromJS } from "immutable"

const defaultStates = fromJS({
  // 轮播图的数据
  bannerList: [],
  // 推荐歌单的数据
  recommendList : [],
  // 是否出现进入动画的判断条件
  enterLoading : true
})

// 暴露具体的方法
export default (state = defaultStates, action) => {
  switch(action.type){
    case actionTypes.CHANGE_BANNER:
      return state.set("bannerList", action.data);
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set("recommendList", action.data)
    case actionTypes.CHANGE_ENTER_LOADING:
        return state.set("enterLoading", action.data);
    default:
      return state
  }
}