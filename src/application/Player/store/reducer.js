import * as actionTypes from "./actionTypes"
import { fromJS } from "immutable";
import {findIndex} from "utils"
import {playMode} from "../../../api/config"
import { useCallback } from "react";
const defaultState = fromJS({
  playList: [],
  currentIndex: -1,
  currentSong: {},
  playing: false,
  speed: 1,
  sequencePlayList : [],
  playListStatus: false,
  mode: playMode.sequence,
  fullScreen: false
})


/* 

  处理点击的歌曲需要插入的新歌曲
*/
const handleInsertSong = (state, song) => {
  const playList = JSON.parse(JSON.stringify(state.get('playList').toJS()));
  const sequenceList = JSON.parse(JSON.stringify(state.get('sequencePlayList').toJS()));
  let currentIndex = state.get('currentIndex');
  //看看有没有同款
  let fpIndex = findIndex(song, playList);
  // 如果是当前歌曲直接不处理
  if (fpIndex === currentIndex && currentIndex !== -1) return state;
  currentIndex++;
  // 把歌放进去,放到当前播放曲目的下一个位置
  playList.splice(currentIndex, 0, song);
  // 如果列表中已经存在要添加的歌
  if (fpIndex > -1) {
    if (currentIndex > fpIndex) {
      playList.splice(fpIndex, 1);
      currentIndex--;
    } else {
      playList.splice(fpIndex + 1, 1);
    }
  }

  let sequenceIndex = findIndex(playList[currentIndex], sequenceList) + 1;
  let fsIndex = findIndex(song, sequenceList);
  sequenceList.splice(sequenceIndex, 0, song);
  if (fsIndex > -1) {
    if (sequenceIndex > fsIndex) {
      sequenceList.splice(fsIndex, 1);
      sequenceIndex--;
    } else {
      sequenceList.splice(fsIndex + 1, 1);
    }
  }
  return state.merge({
    'playList': fromJS(playList),
    'sequencePlayList': fromJS(sequenceList),
    'currentIndex': fromJS(currentIndex),
  });
}

// 删除某一个歌曲
const handleDeleteSong = (state, song) => {
  console.log(state.get("playList").toJS())
  return state
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.data);
    case actionTypes.CHANGE_CURRENT_INDEX:
      return state.set("currentIndex", action.data);
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.data)
    case actionTypes.CHANGE_PLAYING:
      return state.set("playing", action.data)
    case actionTypes.INSERT_SONG:
      return handleInsertSong(state, action.data)
    case actionTypes.CHANGE_PLAY_LIST_STATUS:
      return state.set("playListStatus", action.data)
    case actionTypes.SET_SEQUECE_PLAYLIST:
      return state.set('sequencePlayList', action.data);
    case actionTypes.CHANGE_MODE:
      return state.set("mode", action.data)
    case actionTypes.DELETE_SONG:
      return handleDeleteSong(state, action.data)
    case actionTypes.CHANGE_FULL_SCREEN:
      return state.set("fullScreen", action.data)
    default:
      return state;
  }
}