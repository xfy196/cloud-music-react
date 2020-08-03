import * as actionTypes from "./actionTypes"
import { getRankListRequest } from "api/request";

export const changeRankList = (data) => ({
  type: actionTypes.CHANGE_RANK_LIST,
  data
});

export const changeRankLoading = (data) => ({
  type: actionTypes.CHANGE_RANK_LOADING,
  data
})
/* 
  获取排行榜数据
*/
export const getRankList = () => {
  return async (dispatch) => {

    try {
      let result = await getRankListRequest();
      dispatch(changeRankList(result.list))
      dispatch(changeRankLoading(false));
    } catch (error) {
      console.log("排行榜数据获取失败")
    }
  }
}