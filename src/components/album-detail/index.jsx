import React from 'react'
import { TopDesc, Menu } from './style'
import SongList from "application/SongList"
function AlbumDetail(props) {
  const { currentAlbum } = props;
  const tracks = currentAlbum.tracks || [];
  const renderTopDesc = () => {
    return (
       <TopDesc background = { currentAlbum.coverImgUrl } >
        <div className="background"></div>
        <div className="img_wrapper">
          <div className="decorate"></div>
          <img src={currentAlbum.coverImgUrl} alt="" />
          <div className="play_count">
            <i className="iconfont play">&#xe885;</i>
            <span className="count">0.1万</span>
          </div>
        </div>
        <div className="desc_wrapper">
          <div className="title">{currentAlbum.name}</div>
          <div className="person">
            <div className="avatar">
              <img src={currentAlbum.creator.avatarUrl} alt="" />
            </div>
            <div className="name">{currentAlbum.creator.nickname}</div>
          </div>
        </div>
    </TopDesc>

    )
  }

/* menu菜单的布局 */
const renderMenu = () => {
  return (
    <Menu>
      <div>
        <i className="iconfont">&#xe6ad;</i>
          评论
        </div>
      <div>
        <i className="iconfont">&#xe86f;</i>
          点赞
        </div>
      <div>
        <i className="iconfont">&#xe62d;</i>
          收藏
        </div>
      <div>
        <i className="iconfont">&#xe606;</i>
          更多
        </div>
    </Menu>
  )
}
const renderSongList = () => {
  return (
    <SongList songs={tracks}></SongList>
  )
}
return (
  <div>
    {renderTopDesc()}
    {renderMenu()}
    {renderSongList()}
  </div>
)
}
export default React.memo(AlbumDetail)
