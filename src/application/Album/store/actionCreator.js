import * as actionTypes from "./actionTypes"
import {getAlbumListRequest} from "api/request"
import {fromJS} from "immutable"
// 改变album的值
export const changeAlbumList = (data) => {
  return {
    type : actionTypes.CHANGE_ALBUM_LIST,
    data : fromJS(data)
  }
}
export const changeEnterLoading = (data) => {
  return {
    type : actionTypes.CHANGE_ALBUM_ENTER_LOADING,
    data
  }
}
// 请求album数据的异步操作
export const getAlbumList = (id) => {
  return async(dispatch) => {
    try {
      let result = await getAlbumListRequest(id);
      dispatch(changeAlbumList(result.playlist))
      dispatch(changeEnterLoading(false))
    } catch (error) {
      console.log("获取歌单数据失败")
    }

  }
}