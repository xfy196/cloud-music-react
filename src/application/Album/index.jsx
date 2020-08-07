import React, { useEffect, useState, useCallback, useRef } from 'react'
import { connect } from "react-redux"
import { CSSTransition } from "react-transition-group"
import Header from "baseUI/header"
import { Container } from "./style"
import Scroll from "baseUI/scroll"
import { forceCheck } from "react-lazyload"
import AlbumDetail from "@/album-detail"
import { getAlbumList } from "./store/actionCreator"
import { isEmptyObject } from "utils"
import style from "assets/global-style"

function Album(props) {
  // 默认开始的时候为true但是点击返回的上一层的时候为false
  const [showStatus, setShowStatus] = useState(true);
  const [title, setTitle] = useState("")
  // 这只滚动的时候header是否文字滚动
  const [marquee, setMarquee] = useState(false);
  // 拿到传过来的id值
  const id = props.match.params.id;
  const headEl = useRef();
  const { getAlbumListDispatch } = props;
  const { songsCount, pullUpLoading, currentAlbum } = props;
  const currentAlbumJS = currentAlbum.toJS();
  // 将immutable的数据转换出来
  const handleBack = useCallback(() => {
    setShowStatus(false);
  }, []);

  const handlePullUp = () => {

  }
  useEffect(() => {
    getAlbumListDispatch(id);
  }, [getAlbumListDispatch, id]);

  const handleScroll = useCallback((pos) => {
    let headDOM = headEl.current;
    let minHeight = -headDOM.getBoundingClientRect().height;
    let percent = Math.abs(pos.y/minHeight);
    if(pos.y < minHeight){
      headDOM.style.backgroundColor = style["theme-color"];
      // 加入动画效果
      headDOM.style.opacity = Math.min(1, (percent - 1) / 2);
      // 这只title文字
      setTitle(currentAlbumJS&&currentAlbumJS.name);
      setMarquee(true);
    }else {
      headDOM.style.backgroundColor = '';
      headDOM.style.opacity = 1;
      // 设置title的值
      setTitle("歌单");
      setMarquee(false);
    }
  })
  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      appear={true}
      classNames="fly"
      mountOnEnter
      unmountOnExit
      onExited={props.history.goBack}
    >
      {/* 整个内容区域 */}
      <Container play={songsCount}>
        {/* 头部 */}
        <Header ref={headEl} title={title} isMarquee={marquee} handleClick={handleBack}></Header>
        {
          !isEmptyObject(currentAlbumJS) && (<Scroll
            onScroll={handleScroll}
            pullUp={handlePullUp}
            pullUpLoading={pullUpLoading}
            bounceTop={false}
          >
            <AlbumDetail currentAlbum={currentAlbumJS}></AlbumDetail>
          </Scroll>)
        }

      </Container>
    </CSSTransition>
  )
}
const mapStateToProps = state => ({
  currentAlbum: state.getIn(["album", "currentAlbum"])
})
const mapDispatchProps = (dispatch) => {
  return {
    // 通过id拿到该id对应的歌单数据
    getAlbumListDispatch(id) {
      dispatch(getAlbumList(id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchProps)(React.memo(Album))