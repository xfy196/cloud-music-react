import * as actionTypes from "./actionTypes"
import { getSingerDataRequest } from "api/request"
import { fromJS } from "immutable"
export const changeSingerArtists = (data) => {
  return {
    type: actionTypes.CHANGE_SINGER_ARTISTS,
    data: fromJS(data)
  }
};

export const changeSingerSongs = (data) => ({
  type: actionTypes.CHANGE_SINGER_SONGS,
  data: fromJS(data)
})

/* 
  通过id获取歌手歌单的数据
*/
export const getSingerInfo = id => {
  return async (dispatch) => {
    try {
      let result = await getSingerDataRequest(id);
      dispatch(changeSingerArtists(result.artist));
      dispatch(changeSingerSongs(result.hotSongs));
      
    } catch (error) {
      console.log("获取歌手歌单数据失败")
    }
  }
}