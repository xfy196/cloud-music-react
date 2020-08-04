import React from 'react'
import { TopDesc, Menu } from './style'
import SongList from "application/SongList"
function AlbumDetail(props) {
  console.log(props.currentAlbum);
  const renderTopDesc = () => {
    return (
      <TopDesc>
        <div className="background"></div>
        <div className="img_wrapper">
          <div className="decorate"></div>
          <img src="https://p1.music.126.net/hE-8I3SZIpTc9krlr9hxjw==/109951164813179109.jpg" alt="" />
          <div className="play_count">
            <i className="iconfont play">&#xe885;</i>
            <span className="count">0.1万</span>
          </div>
        </div>
        <div className="desc_wrapper">
          <div className="title">心情寄存馆／生活很难 那我用旋律祝你快乐</div>
          <div className="person">
            <div className="avatar">
              <img src="https://p1.music.126.net/hxe8FOzaJY4GrJ8ufYGemw==/109951164672471643.jpg" alt="" />
            </div>
            <div className="name">宇宙播报机</div>
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
     <SongList></SongList>
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
