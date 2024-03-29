import React from 'react'
import { SongItem, SongList } from "./style"
import { getName } from "utils"
import { connect } from "react-redux"
import { changePlayList, changeCurrentIndex, changeSequecePlayList} from "application/Player/store/actionCreator"
import {checkSong} from "api/request"
const SongListCom = React.forwardRef((props, refs) => {
  const { songs, collectCount, showCollect, musicAnimation } = props;
  const { changePlayListDispatch, changeCurrentIndexDispatch, changeSequecePlayListDispatch } = props;
  const totalCount = songs.length;
  const selectItem = (e, index, id) => {
    // 在选中之前我们需要检测一下这首歌到底能不能播放
    // TODO 暂时还没有搞懂网易云音乐这个检查是什么意思，好像不完全是无法播放的接口
    // checkSong(id).then(res => {
      // if(res.success){
        changePlayListDispatch(songs);
        changeSequecePlayListDispatch(songs)
        changeCurrentIndexDispatch(index);
      // }
    // })
    musicAnimation(e.nativeEvent.clientX, e.nativeEvent.clientY);
  }
  const renderSongItem = (list) => {
    return (
      <SongItem>
        {
          list.length !== 0 && list.map((item, index) => (
            <li key={item.id} onClick={(e) => selectItem(e, index, item.id)}>
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
        <span>收藏({Math.floor(collectCount / 1000) / 10}万)</span>
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
const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({
  changePlayListDispatch(data) {
    dispatch(changePlayList(data));
  },
  changeCurrentIndexDispatch(data) {
    dispatch(changeCurrentIndex(data));
  },
  changeSequecePlayListDispatch(data){
    dispatch(changeSequecePlayList(data))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(SongListCom));