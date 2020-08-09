import React, { useEffect, useState } from 'react'
import { SongItem, SongList } from "./style"
import { getName } from "utils"
const SongListCom = React.forwardRef((props, refs) => {
  const { songs, collectCount, showCollect, musicAnimation } = props;
  const totalCount = songs.length;
  const selectItem = (e, index) => {
    musicAnimation(e.nativeEvent.clientX, e.nativeEvent.clientY);
  }
  const renderSongItem = (list) => {
    return (
      <SongItem>
        {
          list.length !== 0 && list.map((item, index) => (
            <li key={item.id} onClick={(e) => selectItem(e, index)}>
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
      </SongItem>
    )
  }
  const renderCollect = (collectCount) => {
    return (
      <div className="add_list">
        <i className="iconfont">&#xe62d;</i>
        <span>收藏({Math.floor(collectCount/1000)/10}万)</span>
      </div>
    )
  }
  return (
    <SongList>
      <div className="first_line border-bottom">
        <div className="play_all" onClick={(e) => selectItem(e, 0)}>
          <i className="iconfont">&#xe6e3;</i>
          <span>
            播放全部
          <span className="sum"> (共{totalCount}首)</span>
          </span>
        </div>
        {showCollect ? renderCollect(collectCount) : null}
      </div>
      {renderSongItem(songs)}
    </SongList>
  )
})
export default React.memo(SongListCom);