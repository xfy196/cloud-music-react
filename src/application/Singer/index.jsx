import React, { useEffect, useState, useRef, useCallback } from 'react'
import { connect } from "react-redux"
import { CSSTransition } from "react-transition-group"
import { Container, ImgWrapper, CollectionButton, BgLayer, SongListWrapper } from "./style"
import { getSingerInfo } from "./store/actionCreator"
import Header from "baseUI/header"
import Scroll from "baseUI/scroll"
import SongList from "../SongList/"
function Singer(props) {

  // 维护一个初始化的高度的状态
  const initialHeight = useRef(0);
  const [showStatus, setShowStatus] = useState(true);
  const OFFSET = 5;
  const id = props.match.params.id

  const { artist, hotSongs, songsCount } = props;
  const { getSingerDataDispatch } = props;

  const artists = artist.toJS();
  const songs = hotSongs.toJS();
  const headerRef = useRef();
  const layRef = useRef();
  const imgWrapperRef = useRef();
  const scrollSongWrapperRef = useRef();
  const collectionButtonRef = useRef();
  const songsRef = useRef();
  useEffect(() => {
    getSingerDataDispatch(id);
    // 获取图片的高度
    let h = imgWrapperRef.current.offsetHeight;
    initialHeight.current = h;
    // 需要为滚动区域的list设置top值
    scrollSongWrapperRef.current.style.top = `${(h - OFFSET) / 100}rem`
    layRef.current.style.top = `${(h - OFFSET) / 100}rem`
    songsRef.current.refresh();
  }, [getSingerDataDispatch, id])


  const handleBack = useCallback(() => {
    setShowStatus(false);
  }, []);

  const handleScroll = (pos) => {
    // 获取初始化的值
    let height = initialHeight.current;
    let newY = pos.y;
    let imageDom = imgWrapperRef.current;
    let buttonDom = collectionButtonRef.current;
    let scrollSongWrapperDom = scrollSongWrapperRef.current;
    let layDom = layRef.current;
    let headerDom = headerRef.current;
    // 最小的高度
    let minScrollY = -(height - OFFSET - headerDom.getBoundingClientRect().height);
    // 通过总高度的变化计算每次的百分比算法
    // 当percent的为1的时候说明已经完成达到需要最顶端的位置 这个时候我们需要将图片的z-index的设置
    const percent = Math.abs(newY / height);
    /* 
      分为newY大于0的情况和newY小于零的情况
    
    */
    if (newY > 0) {
      //  说明是向下滑动需要将图片的内容向下拉动同时图片进行放大的效果
    } else {
      //  小于零我们只需要检测当高度达到一定值的时候我么需要让图片的z-index大于歌单的z-index
    }
  }
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
      <Container>
        <Header
          handleClick={handleBack}
          title={artists.name}
          ref={headerRef}
        ></Header>
        <ImgWrapper ref={imgWrapperRef} background={artists.picUrl}>
          <div className="filter"></div>
        </ImgWrapper>
        <CollectionButton ref={collectionButtonRef}>
          <i className="iconfont">&#xe62d;</i>
          <span className="text">收藏</span>
        </CollectionButton>
        <BgLayer ref={layRef}></BgLayer>
        <SongListWrapper ref={scrollSongWrapperRef} play={songsCount}>
          <Scroll
            onScroll={handleScroll}
            ref={songsRef}
          >
            <SongList songs={songs} showCollect={false}></SongList>
          </Scroll>
        </SongListWrapper>
      </Container>
    </CSSTransition>
  )
}
const mapStateToProps = state => ({
  artist: state.getIn(["singerInfo", "artist"]),
  hotSongs: state.getIn(["singerInfo", "hotSongs"]),
  songsCount: state.getIn(["player", "playList"])
});
const mapDispatchToProps = dispatch => ({
  getSingerDataDispatch(id) {
    dispatch(getSingerInfo(id));
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singer));