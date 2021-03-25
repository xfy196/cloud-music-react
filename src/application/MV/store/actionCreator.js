import * as actionTypes from "./actionTypes"
import { getMvListRequest } from "api/request"
export const getMvList = (area, offset=0, limit=30) => {
  return async (dispatch) => {
    try {
      let data = await getMvListRequest(area, offset, limit);
      dispatch(changeEnterLoading(false))
      if(data.code == 200){

        dispatch(changeMvList(data))
      }
      data.code == 200 ? dispatch(changeLoading(false)) : dispatch(changeLoading(true))
    } catch (error) {

    }
  }

}
export const changeMvList = (data) => ({
  type: actionTypes.SET_MV_LIST,
  data
})

export const changeLoading = (data) => {
  return {
    type: actionTypes.CHNAGE_LOADING,
    data
  }
}
/**
 *改变进场的加载动画 
 * @param {*} data 
 * @returns 
 */
export const changeEnterLoading = (data) => {
  return {
    type: actionTypes.CHANGE_ENTERLOADING,
    data
  }
}
export const changePullUpLoding = (data) => {
  return {
    type: actionTypes.CHANGE_PULL_UP_LOADING,
    data
  }
}
export const getMvLoadingMore = (area, offset, limit) => {
  return async (dispatch) => {

    try {
      let data = await getMvListRequest(area, offset, limit)
      if (data.code == 200) {
        dispatch(changeMvList(data))
        dispatch(changePullUpLoding(false))
      }
    } catch (error) {

    }
  }
}
/**
 * 修改offset的值 
 * @param {*} offset 
 */
export const setOffset = (offset) => {
  return {
    type: actionTypes.SET_OFFSET,
    data: offset
  }
}