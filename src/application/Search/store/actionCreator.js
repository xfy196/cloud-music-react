import * as actionTypes from "./actionTypes"
import {fromJS} from "immutable" 
import {getHotKeyWordsRequest, getSuggestListRequest, getResultSongsListRequest} from "api/request"
// 改变热点歌曲
export const changeHotKeyWords = (data) => ({
  type : actionTypes.CHANGE_HOT_KEY_WORDS,
  data : fromJS(data)
})

export const changeSuggestList = (data) => {
  return {
    type : actionTypes.CHANGE_SUGGEST_LIST,
    data : fromJS(data)
  }
}

export const changeSongsList = (data) => ({
  type : actionTypes.CHANGE_SONGS_LIST,
  data : fromJS(data)
})

export const changeEnterLoading = (data) => ({
  type : actionTypes.CHANGE_ENTER_LOADING,
  data
})

// 获取热点歌曲
export const getHotKeyWords = () => {
  return async (dispatch) => {
    dispatch(changeEnterLoading(false))
    // 获取热点关键词的数据
    let res = await getHotKeyWordsRequest();
    
    dispatch(changeHotKeyWords(res.result.hots));
  }
}


// 获取搜索关键字的结果
export const getSuggestList = (query) => {
  return async(dispatch) => {
    dispatch(changeEnterLoading(true));
    let res = await getSuggestListRequest(query);
    if(!res){
      return
    }
    let data = res.result || [];
    dispatch(changeSuggestList(data));

    // 通过搜索关键字获取歌手歌曲的信息
    let songData = await getResultSongsListRequest(query)
    if(!songData){
      return
    }
    let sData = songData.result || [];
    dispatch(changeSongsList(sData));
    dispatch(changeEnterLoading(false))

  }
}
