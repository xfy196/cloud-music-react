import * as actionTypes from "./actionTypes"
import {fromJS} from "immutable"

/* 
  改变当前的播放歌单的数据
*/
export const changePlayList = (data) => ({
  type : actionTypes.CHANGE_PLAY_LIST,
  data : fromJS(data)
});

export const changeCurrentIndex = (data) => ({
  type : actionTypes.CHANGE_CURRENT_INDEX,
  data
});


export const changeCurrentSong = data => ({
  type : actionTypes.CHANGE_CURRENT_SONG,
  data : fromJS(data)
})