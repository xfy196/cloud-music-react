import React from 'react'
import LazyLoad from "react-lazyload"
import { withRouter } from "react-router-dom"
import { ListWrapper, List, ListItem } from "./style"
import lazyLoadImg from "./music.png"
/* 
  推荐的列表
*/
function RecommendList(props) {
  const { recommendList } = props;
  // 点击触发进入歌单详情的页面
  const enterDetail = (id) => {
    props.history.push(`/recommend/${id}`);
  }
  return (
    <ListWrapper>
      <h1 className="title">推荐歌单</h1>
      <List>
        {
          recommendList.length !==0 &&
          recommendList.map(item => (
            <ListItem key={item.id} onClick={() => enterDetail(item.id)}>
              <div className="img_wrapper">
                <div className="decorate"></div>
                <LazyLoad scroll={true} placeholder={<img width="100%" height="100%" src={lazyLoadImg} alt="music" />}>
                  <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music" />
                </LazyLoad>
                <div className="play_count">
                  <i className="iconfont play">&#xe885;</i>
                  <span className="count">{Math.floor(item.playCount / 10000)}万</span>
                </div>
              </div>
              <div className="desc">{item.name}</div>
            </ListItem>
          ))
        }
      </List>
    </ListWrapper>
  )
}
export default withRouter(React.memo(RecommendList))