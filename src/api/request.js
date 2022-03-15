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
export const getSingerListRequest = (type, area, alpha, offset) => {
  return axiosInstance.get(`/api/artist/list?type=${type}&area=${area}&initial=${alpha.toLowerCase()}&offset=${offset}`);
}

// 排行榜请求接口
export const getRankListRequest = () => {
  return axiosInstance.get(`/api/toplist/detail`);
}
// 获取歌单的请求接口s
export const getAlbumListRequest = (id) => {
  return axiosInstance.get("/api/playlist/detail?id=" + id)
}
// 获取歌手的歌单数据
export const getSingerDataRequest = id => {
  return axiosInstance.get("/api/artists?id=" + id);
}

// 获取热点关键字的内容
export const getHotKeyWordsRequest = () => {
  return axiosInstance.get("/api/search/hot");
}

// 获取热点关键字的数据
export const getSuggestListRequest = (query) => {
  return axiosInstance.get("/api/search/suggest?keywords=" + query);
}
// 获取关键字查询的结果数据
export const getResultSongsListRequest = (query) => {
  return axiosInstance.get("/api/search?keywords=" + query);
}

// 获取歌曲详细信息
export const getSongDetailRequest = id => {
  return axiosInstance.get(`/api/song/detail?ids=${id}`);
};

// 获取歌词
export const getLyricRequest = id => {
  return axiosInstance.get(`/api/lyric?id=${id}`);
};

// 获取mv列表
export const getMvListRequest = (area, offset, limit) => {
  return axiosInstance.get(`/api/mv/all?area=${area}&offset=${offset}&limit=${limit}`)
}
// 获取mv的详情
export const getMvDetailRequest = (id) => {
  return axiosInstance.get(`/api/mv/detail?mvid=${id}`)
}
export const getMvUrl = (id) => {
  return axiosInstance.get(`/api/mv/url?id=${id}`)
}
/**
 * 通过一组ids获取这一组ids所对应的所有的歌曲数据 
 * @param {*} ids 
 */
export const getSongs = (ids) => {
  return axiosInstance.get(`/api/song/detail?ids=${ids}`)
}

/**
 * 获取收藏里的歌曲数据
 */
export const getTrackSongs = (params) => {
  return axiosInstance.get('/api/playlist/track/all', {
    params
  })
}

/**
 * 检查歌曲是否可用
 * @param {*} id 
 * @returns 
 */
export const checkSong = (id) => {
  return axiosInstance.get(`/api/check/music?id=${id}`)
}