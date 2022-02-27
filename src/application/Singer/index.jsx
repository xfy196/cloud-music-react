import React, { useEffect, useState, useRef, useCallback } from 'react'
import { connect } from "react-redux"
import { CSSTransition } from "react-transition-group"
import { Container, ImgWrapper, CollectionButton, BgLayer, SongListWrapper } from "./style"
import { getSingerInfo, changeSingerEnterLoading } from "./store/actionCreator"
import Header from "baseUI/header"
import Scroll from "baseUI/scroll"
import SongList from "../SongList"
import EnterLoading from "utils/EnterLoading"
import Loading from "baseUI/loading"
import MusicNote from "baseUI/music-note"
function Singer(props) {

  // 维护一个初始化的高度的状态
  const initialHeight = useRef(0);
  const [showStatus, setShowStatus] = useState(true);
  const OFFSET = 5;
  const id = props.match.params.id

  const { artist, hotSongs, songsCount, enterLoading } = props;
  const { getSingerDataDispatch } = props;

  const artists = artist.toJS();
  const songs = hotSongs.toJS();
  const headerRef = useRef();
  const layRef = useRef();
  const imgWrapperRef = useRef();
  const scrollSongWrapperRef = useRef();
  const collectionButtonRef = useRef();
  const songsRef = useRef();
  const musicNoteRef = useRef();
  useEffect(() => {
    getSingerDataDispatch(id);
  }, [getSingerDataDispatch, id]);

  useEffect(() => {
    if (!enterLoading) {
      // 获取图片的高度
      let h = imgWrapperRef.current.offsetHeight;
      initialHeight.current = h;
      // 需要为滚动区域的list设置top值
      scrollSongWrapperRef.current.style.top = `${(h - OFFSET)}px`
      layRef.current.style.top = `${(h - OFFSET)}px`
      songsRef.current.refresh();
    }
  }, [enterLoading])


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
      // transform:scale变大
      imageDom.style.transform = `scale(${1 + percent})`;
      // button按钮的文职也需要向下移动
      buttonDom.style.transform = `translate3d(0, ${newY}px, 0)`;
      // layDom文职也需要改变
      layDom.style.top = `${(height - OFFSET + Math.abs(newY))}px`

    } else if (newY >= minScrollY) {
      //  y轴的坐标大于最小可滚动的值，
      layDom.style.top = `${(height - OFFSET - Math.abs(newY))}px`;
      imageDom.style.paddingTop = "75%";
      imageDom.style.height = 0;
      imageDom.style.zIndex = -1;
      // button按钮的动画效果
      buttonDom.style.transform = `translate3d(0, ${newY}px, 0)`;
      buttonDom.style.opacity = `${1 - percent * 2}`;
    } else if (newY < minScrollY) {
      // 说明达到我这是的最大滚动的距离这个时候需要让header显示
      headerDom.style.zIndex = 100;
      imageDom.style.paddingTop = 0;
      imageDom.style.height = `${headerDom.getBoundingClientRect().height}px`;
      imageDom.style.zIndex = 99;
    }
  }
  const musicAnimation = (x, y) => {
    musicNoteRef.current.startAnimation({ x, y });
  };
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
        {
          enterLoading ? <EnterLoading><Loading style={{ zIndex: 100 }}></Loading></EnterLoading> : (
            <>
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
                  <SongList
                    songs={songs}
                    showCollect={false}
                    musicAnimation={musicAnimation}
                  ></SongList>
                </Scroll>
              </SongListWrapper>
              <MusicNote ref={musicNoteRef}></MusicNote>
            </>)
        }
      </Container>

    </CSSTransition>
  )
}
const mapStateToProps = state => ({
  artist: state.getIn(["singerInfo", "artist"]),
  hotSongs: state.getIn(["singerInfo", "hotSongs"]),
  songsCount: state.getIn(["player", "playList"]).size,
  enterLoading: state.getIn(["singerInfo", "enterLoading"])
});
const mapDispatchToProps = dispatch => ({
  getSingerDataDispatch(id) {
    dispatch(changeSingerEnterLoading(true))
    dispatch(getSingerInfo(id));
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singer));