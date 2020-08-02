import * as actionTypes from "./actionTypes"
import { getSingerListRequest, getHotSingerListRequest } from "api/request"

// 改变歌手分类的方法
export const changeCategory = (data) => ({
  type: actionTypes.CHANGE_CATEGORY,
  data
})

export const changeAlpha = (data) => ({
  type: actionTypes.CHANGE_ALPHA,
  data
})

// 获取新的singerList的action方法
export const changeSingerList = (data) => ({
  type: actionTypes.CHANGE_SINGER_LIST,
  data
});

export const changeListOffset = (data) => ({
  type: actionTypes.CHANGE_LIST_OFFSET,
  data
})
// 修改数据加载成功之前的动画
export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
})

export const changePullUpLoading = (data) => ({
  type: actionTypes.CHANGE_PULLUP_LOADING,
  data
})

export const changePullDownLoading = (data) => ({
  type: actionTypes.CHANGE_PULLDOWN_LOADING,
  data
})
// 在页面第一次加载时候我们需要加载歌手信息这个时候就需要加载分类信息
export const getSingerList = () => {
  return async (dispatch, getState) => {
    const category = getState().getIn(["singers", "category"]);
    const alpha = getState().getIn(["singers", "alpha"]);
    const offset = getState().getIn(["singers", "listOffset"]);
    try {

      const result = await getSingerListRequest(category, alpha, offset)
      const data = result.artists;
      // 派发数据
      dispatch(changeSingerList(data));
      dispatch(changeEnterLoading(false))
      dispatch(changeListOffset(data.length));
      dispatch(changePullDownLoading(false));
    } catch (error) {
      console.log("请求歌手数据错误");
    }
  }
}

/* 
  获取热榜的明星 offset为0获取
*/
export const getHotSingerList = () => {
  // 调用这个方法的时候我们需要怕发其他法方法
  return async (dispatch) => {
    try {
      let result = await getHotSingerListRequest(0)
      const list = result.artists;
      dispatch(changeSingerList(list))
      dispatch(changeEnterLoading(false))
      dispatch(changeListOffset(list.length))
      dispatch(changePullDownLoading(false));
    } catch (error) {
      console.log("请求热榜明星错误")
    }
  }
}

/* 
上拉加载更多
*/
export const refreshMoreHotSingerList = () => {
  return async (dispatch, getState) => {
    try {
      const offset = getState().getIn(["singers", "listOffset"]);
      const singerList = getState().getIn(["singers", "singersList"]);
      let result = await getHotSingerListRequest(offset);
      const list = [...singerList, ...result.artists];
      dispatch(changeSingerList(list));
      dispatch(changePullUpLoading(false))
      dispatch(changeListOffset(list.length))
    } catch (error) {
      console.log("加载更多失败");
    }
  }
}
/* 
  加载更多歌手信息带有查询条件的
*/
export const refreshMoreSingerList = () => {
  return async (dispatch, getState) => {
    try {
      const category = getState().getIn(["singers", "category"]);
      const alpha = getState().getIn(["singers", "alpha"]);
      const offset = getState().getIn(["singers", "listOffset"]);
      const singerList = getState().getIn(["singers", "singersList"]);
      let result = await getSingerListRequest(category, alpha, offset);
      const list = [...singerList, ...result.artists];
      dispatch(changeSingerList(list));
      dispatch(changePullUpLoading(false));
      dispatch(changeListOffset(list.length));
    } catch (error) {
      console.log(加载歌手数据失败)
    }
  }
}