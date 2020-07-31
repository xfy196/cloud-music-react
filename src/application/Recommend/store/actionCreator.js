import * as actionTypes from "./actionTypes"
import { fromJS } from "immutable"
import { getBannerRequest, getRecommendRequest } from "api/request"
export const changeBanner = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data)
});
export const changeRecommend = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data)
})
export const changePlayList = (data) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  data: fromJS(data)
})
export const getBannerList = () => {
  return async (dispatch) => {
    try {
      const data = await getBannerRequest();
      const action = changeBanner(data.banners);
      dispatch(action);

    } catch (error) {
      console.log("轮播图获取数据失败")
    }
  }
}
export const getRecommendList = () => {
  return async (dispatch) => {
    try {
      const data = await getRecommendRequest()
      const action = changeRecommend(data.result);
      dispatch(action)
    } catch (error) {
      console.log("推荐歌单数据获取失败")
    }
  }
}
export const getPlayList = () => {
  return async (dispatch) => {
    try {
        const data = await getPlayListRequest();
    } catch (error) {
      
    }
  }
}