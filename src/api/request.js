import { axiosInstance } from "./config"

/* 
获取轮播图
*/
export const getBannerRequest = () => {
  return axiosInstance.get("/api/banner");
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

// 排行榜请求接口
export const getRankListRequest = () => {
  return axiosInstance.get(`/api/toplist/detail`);
}
// 获取歌单的请求接口
export const getAlbumListRequest = (id) => {
  return axiosInstance.get("/api/playlist/detail?id=" + id)
}
// 获取歌手的歌单数据
export const getSingerDataRequest = id => {
  return axiosInstance.get("/api/artists?id=" + id);
}