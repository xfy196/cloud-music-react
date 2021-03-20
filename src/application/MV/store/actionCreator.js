import * as actionTypes from "./actionTypes"
import {getMvListRequest} from "api/request"
import { fromJS } from "immutable";
export const getMvList = (area) => {
  return async (dispatch) => {
    try {
      let data = await getMvListRequest(area);
      dispatch(changeMvList(data))
      data.code == 200 ? dispatch(changeLoading(false)): dispatch(changeLoading(true))
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