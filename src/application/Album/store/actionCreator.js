import * as actionTypes from "./actionTypes";
import { getAlbumListRequest, getSongs, getTrackSongs } from "api/request";
import { fromJS } from "immutable";
// 改变album的值
export const changeAlbumList = (data) => {
  return {
    type: actionTypes.CHANGE_ALBUM_LIST,
    data: fromJS(data),
  };
};
export const changeEnterLoading = (data) => {
  return {
    type: actionTypes.CHANGE_ALBUM_ENTER_LOADING,
    data,
  };
};
export const changeSongs = (data) => {
  return {
    type: actionTypes.CHANGE_ALBUM_SONGS,
    data: fromJS(data),
  };
};
// 请求album数据的异步操作
export const getAlbumList = (id) => {
  return async (dispatch) => {
    try {
      let result = await getAlbumListRequest(id);
      // let ids = result.playlist.trackIds.reduce((prev, cur, index, arr) => {
      //   return prev.concat(cur.id)
      // }, []).join(",")
      // let songs = await getSongs(ids)
      let songs = await getTrackSongs({
        id,
        limit: 10,
        offset: 0,
      });
      dispatch(changeSongs(songs.songs));
      dispatch(changeAlbumList(result.playlist));
      dispatch(changeEnterLoading(false));
      songs = await getTrackSongs({
        id,
        limit: result.playlist.trackIds.length,
        offset: 0,
      });
      dispatch(changeSongs(songs.songs));
    } catch (error) {
      console.log("获取歌单数据失败");
    }
  };
};
