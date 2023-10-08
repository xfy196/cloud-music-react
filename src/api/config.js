import axios from "axios";
import { v4 as uuidv4 } from "uuid";
export const baseURL = "https://musicapi.xxytime.top";
import { Toast as AntdToast } from "antd-mobile";
const axiosInstance = axios.create({
  baseURL,
});

const CancelToken = axios.CancelToken;

const pending = new Map();
const gKey = (config) => {
  return config.url + "&" + config.method;
};
const addPending = (config) => {
  config.cancelToken = new CancelToken((c) => {
    pending.set(gKey(config), c);
  });
};
const removePending = (config) => {
  const key = gKey(config);
  if (pending.has(key)) {
    const cancel = pending.get(key);
    cancel && cancel();
    pending.delete(key);
  }
};

axiosInstance.interceptors.request.use((config) => {
  removePending(config);

  addPending(config);

  return config;
});

/* 
配置拦截器 响应的结果正确是什么结果错误又是什么结果
*/
axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status == 200) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response.data);
    }
  },
  (err) => {
    if (err.response.status) {
      switch (err.response.status) {
        case 404:
          AntdToast.fail(err.response.data.message);
          break;
        default:
          break;
      }
    }
    return Promise.reject(err.response);
  }
);
export { axiosInstance };

// 配置初始化的数据 歌手种类
export const categoryTypes = [
  {
    name: "华语男",
    type: "1",
    area: "7",
    key: "1001",
  },
  {
    name: "华语女",
    type: "2",
    area: "7",
    key: "1002",
  },
  {
    name: "华语组合",
    type: "3",
    area: "7",
    key: "1003",
  },
  {
    name: "欧美男",
    type: "1",
    area: "96",
    key: "2001",
  },
  {
    name: "欧美女",
    type: "2",
    area: "96",
    key: "2002",
  },
  {
    name: "欧美组合",
    type: "3",
    area: "96",
    key: "2003",
  },
  {
    name: "日本男",
    type: "1",
    area: "8",
    key: "6001",
  },
  {
    name: "日本女",
    type: "2",
    area: "8",
    key: "6002",
  },
  {
    name: "日本组合",
    type: "3",
    area: "96",
    key: "6003",
  },
  {
    name: "韩国男",
    type: "1",
    area: "16",
    key: "7001",
  },
  {
    name: "韩国女",
    type: "2",
    area: "16",
    key: "7002",
  },
  {
    name: "韩国组合",
    type: "3",
    area: "16",
    key: "7003",
  },
  {
    name: "其他男歌手",
    type: "1",
    area: "8",
    key: "4001",
  },
  {
    name: "其他女歌手",
    type: "2",
    area: "8",
    key: "4002",
  },
  {
    name: "其他组合",
    type: "3",
    area: "8",
    key: "4003",
  },
];

//歌手首字母
export const alphaTypes = [
  {
    key: "A",
    name: "A",
  },
  {
    key: "B",
    name: "B",
  },
  {
    key: "C",
    name: "C",
  },
  {
    key: "D",
    name: "D",
  },
  {
    key: "E",
    name: "E",
  },
  {
    key: "F",
    name: "F",
  },
  {
    key: "G",
    name: "G",
  },
  {
    key: "H",
    name: "H",
  },
  {
    key: "I",
    name: "I",
  },
  {
    key: "J",
    name: "J",
  },
  {
    key: "K",
    name: "K",
  },
  {
    key: "L",
    name: "L",
  },
  {
    key: "M",
    name: "M",
  },
  {
    key: "N",
    name: "N",
  },
  {
    key: "O",
    name: "O",
  },
  {
    key: "P",
    name: "P",
  },
  {
    key: "Q",
    name: "Q",
  },
  {
    key: "R",
    name: "R",
  },
  {
    key: "S",
    name: "S",
  },
  {
    key: "T",
    name: "T",
  },
  {
    key: "U",
    name: "U",
  },
  {
    key: "V",
    name: "V",
  },
  {
    key: "W",
    name: "W",
  },
  {
    key: "X",
    name: "X",
  },
  {
    key: "Y",
    name: "Y",
  },
  {
    key: "Z",
    name: "Z",
  },
];

//排行榜编号
export const RankTypes = {
  0: "云音乐新歌榜",
  1: "云音乐热歌榜",
  2: "网易原创歌曲榜",
  3: "云音乐飙升榜",
  4: "云音乐国电榜",
  5: "UK排行榜周榜",
  6: "美国Billboard周榜",
  7: "KTV唛榜",
  8: "iTunes榜",
  9: "Hit FM Top榜",
  10: "日本Oricon周榜",
  11: "韩国Melon排行榜周榜",
  12: "韩国Mnet排行榜周榜",
  13: "韩国Melon原声周榜",
  14: "中国TOP排行榜（港台榜）",
  15: "中国TOP排行榜（内地榜）",
  16: "香港电台中文歌曲龙虎榜",
  17: "华语金曲榜",
  18: "中国嘻哈榜",
  19: "法国 NRJ Vos Hits 周榜",
  20: "台湾Hito排行榜",
  21: "Beatport全球电子舞曲榜",
  22: "云音乐ACG音乐榜",
  23: "江小白YOLO云音乐说唱榜",
};

//歌单一页限定歌曲数量
export const ONE_PAGE_COUNT = 50;

//顶部的高度
export const HEADER_HEIGHT = 45;

//播放模式
export const playMode = {
  sequence: 0,
  loop: 1,
  random: 2,
};

// 倍速播放配置
export const list = [
  {
    key: 0.75,
    name: "x0.75",
  },
  {
    key: 1,
    name: "x1",
  },
  {
    key: 1.25,
    name: "x1.25",
  },
  {
    key: 1.5,
    name: "x1.5",
  },
  {
    key: 2,
    name: "x2",
  },
];

export const skins = [
  {
    id: uuidv4(),
    name: "网易红",
    color: "rgb(229, 71, 60)",
  },
  {
    id: uuidv4(),
    name: "企鹅绿",
    color: "rgb(49, 194, 124)",
  },
  {
    id: uuidv4(),
    name: "酷狗蓝",
    color: "rgb(12, 142, 217)",
  },
  {
    id: uuidv4(),
    name: "虾米橙",
    color: "rgb(255, 102, 0)",
  },
  {
    id: uuidv4(),
    name: "炫酷黑",
    color: "rgb(34, 34, 34)",
  },
  {
    id: uuidv4(),
    name: "可爱粉",
    color: "rgb(255, 135, 180)",
  },
  {
    id: uuidv4(),
    name: "土豪金",
    color: "rgb(250, 172, 98)",
  },
];
