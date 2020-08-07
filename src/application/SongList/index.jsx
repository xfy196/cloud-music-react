import React, { useEffect, useState } from 'react'
import { SongItem, SongList } from "./style"
import {getName} from "utils"
const SongListCom = React.forwardRef((props, refs) => {
  const renderSongItem = (list) => {
    return (
      <SongItem>
        {
          list.length !== 0 && list.map((item, index) => (
            <li key={item.id}>
              <span className="index">{index + 1}</span>
              <div className="info">
                <span>{item.name}</span>
                <span>
                  {item.ar ? getName(item.ar) : getName(item.artists)} - {item.al ? item.al.name : item.album.name}
                </span>
              </div>
            </li>
          )
          )
        }
        {/* <li>
          <span className="index">1</span>
          <div className="info">
            <span>把孤独当作晚餐(DJ版)</span>
            <span>刘旭阳 - 把孤独当作晚餐</span>
          </div>
        </li>
        <li>
          <span className="index">1</span>
          <div className="info">
            <span>把孤独当作晚餐(DJ版)</span>
            <span>刘旭阳 - 把孤独当作晚餐</span>
          </div>
        </li>
        <li>
          <span className="index">1</span>
          <div className="info">
            <span>把孤独当作晚餐(DJ版)</span>
            <span>刘旭阳 - 把孤独当作晚餐</span>
          </div>
        </li>
        <li>
          <span className="index">1</span>
          <div className="info">
            <span>把孤独当作晚餐(DJ版)</span>
            <span>刘旭阳 - 把孤独当作晚餐</span>
          </div>
        </li>
        <li>
          <span className="index">1</span>
          <div className="info">
            <span>把孤独当作晚餐(DJ版)</span>
            <span>刘旭阳 - 把孤独当作晚餐</span>
          </div>
        </li>
        <li>
          <span className="index">1</span>
          <div className="info">
            <span>把孤独当作晚餐(DJ版)</span>
            <span>刘旭阳 - 把孤独当作晚餐</span>
          </div>
        </li>
        <li>
          <span className="index">1</span>
          <div className="info">
            <span>把孤独当作晚餐(DJ版)</span>
            <span>刘旭阳 - 把孤独当作晚餐</span>
          </div>
        </li>
        <li>
          <span className="index">1</span>
          <div className="info">
            <span>把孤独当作晚餐(DJ版)</span>
            <span>刘旭阳 - 把孤独当作晚餐</span>
          </div>
        </li>
        <li>
          <span className="index">1</span>
          <div className="info">
            <span>把孤独当作晚餐(DJ版)</span>
            <span>刘旭阳 - 把孤独当作晚餐</span>
          </div>
        </li>
        <li>
          <span className="index">1</span>
          <div className="info">
            <span>把孤独当作晚餐(DJ版)</span>
            <span>刘旭阳 - 把孤独当作晚餐</span>
          </div>
        </li>
        <li>
          <span className="index">1</span>
          <div className="info">
            <span>把孤独当作晚餐(DJ版)</span>
            <span>刘旭阳 - 把孤独当作晚餐</span>
          </div>
        </li>          <li>
          <span className="index">1</span>
          <div className="info">
            <span>把孤独当作晚餐(DJ版)</span>
            <span>刘旭阳 - 把孤独当作晚餐</span>
          </div>
        </li>
        <li>
          <span className="index">1</span>
          <div className="info">
            <span>把孤独当作晚餐(DJ版)</span>
            <span>刘旭阳 - 把孤独当作晚餐</span>
          </div>
        </li> */}
      </SongItem>
    )
  }
  return (
    <SongList>
      <div className="first_line border-bottom">
        <div className="play_all">
          <i className="iconfont">&#xe6e3;</i>
          <span>
            播放全部
          <span className="sum"> (共10首)</span>
          </span>
        </div>
        <div className="add_list">
          <i className="iconfont">&#xe62d;</i>
          <span>收藏(0.1万)</span>
        </div>
      </div>
      {renderSongItem(props.songs)}
    </SongList>
  )
})
export default React.memo(SongListCom);