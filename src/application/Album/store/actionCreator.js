import * as actionTypes from "./actionTypes"
import {getAlbumListRequest} from "api/request"
import {Map} from "immutable"
// 改变album的值
export const changeAlbumList = (data) => {
  return {
    type : actionTypes.CHANGE_ALBUM_LIST,
    data : Map(data)
  }
}
// 请求album数据的异步操作
export const getAlbumList = (id) => {
  return async(dispatch) => {
    try {
      let result = await getAlbumListRequest(id);
      dispatch(changeAlbumList(result.playlist))
    } catch (error) {
      console.log("获取歌单数据失败")
    }

  }
}