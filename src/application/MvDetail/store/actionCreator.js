import * as actionTypes from "./actionTypes"
import { getMvDetailRequest, getMvUrl } from "api/request"
import { fromJS } from "immutable"
/**
 * 请求该id的mv详情信息
 * @param {} id 
 * @returns 
 */
export const getMvDetail = (id) => {
  return async (dispatch) => {
    try {

      let data = await getMvDetailRequest(id)
      if (data.code == 200) {

        dispatch(changeMvDetail(data))
      }
      let url = await getMvUrl(id)
      if (url.code == 200) {

        dispatch(changeMvUrl(url))
      }
    } catch (error) {

    }
  }
}

/**
 * 
 * 改变mv的详情信息
 * @param {*} data 
 * @returns 
 */
export const changeMvDetail = (data) => {
  return {
    type: actionTypes.SET_MV_DETAIL,
    data: fromJS(data)
  }
}

export const changeMvUrl = (data) => {
  return {
    type: actionTypes.SET_MV_URL,
    data: fromJS(data)
  }
}