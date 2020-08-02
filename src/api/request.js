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
  return axiosInstance.get(`/api/artist/list?offset=${offset}`)
} 