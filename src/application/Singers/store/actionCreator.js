import * as actionTypes from "./actionTypes"
import { fromJS } from "immutable"
import { getSingerListRequest, getHotSingerListRequest } from "api/request"

// 改变歌手分类的方法
export const changeCategory = (data) => ({
  type: actionTypes.CHANGE_CATEGORY,
  data
})

// 获取新的singerList的action方法
export const changeSingerList = (data) => ({
  type: actionTypes.CHANGE_SINGER_LIST,
  data
});

// 在页面第一次加载时候我们需要加载歌手信息这个时候就需要加载分类信息
/* export const getSingerList = () => {
  return (dispatch) => {
    
  }
} */

/* 
  获取热榜的明星 offset为0获取
*/
export const getHotSingerList = () => {
  // 调用这个方法的时候我们需要怕发其他法方法
  return async (dispatch) => {
    try {

      let result = await getHotSingerListRequest(0)
      const list = result.artists;
      dispatch(changeSingerList(list));
    } catch (error) {
      console.log("请求热榜明星错误")
    }
  }
}