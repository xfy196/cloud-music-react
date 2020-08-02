import {axiosInstance} from "./config"

/* 
获取轮播图
*/
export const getBannerRequest = () => {
  return axiosInstance.get("/api//banner");
}
/* 
获取推荐歌单
*/
export const getRecommendRequest = () => {
  return axiosInstance.get("/api/personalized")
}

/* 
  获取热榜明星数据
*/
export const getHotSingerListRequest = (offset) => {
  return axiosInstance.get(`/api/top/artists/?offset=${offset}`)
} 

/* 
 通过分类信息和姓名首字母和页码数获取歌手数据
*/
export const getSingerListRequest = (category, alpha, offset) => {
  return axiosInstance.get(`/api/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${offset}`);
}

export const getRankListRequest = () => {
  return axiosInstance.get(`/api/toplist/detail`);
}