import React, { useCallback, useRef, useState } from 'react'
import {connect} from "react-redux"
import {CSSTransition} from "react-transition-group"
import {PlayListWrapper, ListHeader, ScrollWrapper, ListContent} from "./style"
import {changePlayListStatus} from "../store/actionCreator"
import {playMode} from "api/config"
import Scroll from "baseUI/scroll/index"
import {getName} from "utils/index"
// 播放列表
function PlayList(props) {
  const {showPlayList, togglePlayListDispatch, mode, playList: immutablePlayList} = props

  const playList = immutablePlayList.toJS()

  const [isShow, setIsShow] = useState(false)

  const listWrapperRef = useRef()

  const listContentRef = useRef()
  // 动画进入的回调

  const onEnterCB = useCallback(() => {
    // 进入时改变显示状态

    setIsShow(true)

  })

  // 进入动画结束的时候回调函数
  
  const onEnteredCB = useCallback(() => {

  })

  // 正在进入的动画中执行的回调函数
  const onEnteringCB = useCallback(() => {

  })
  

  // 执行退出的操作
  const onExitCB = useCallback(() => {
    
  })

  // 正在退出的回调函数
  const onExitingCB = useCallback(() => {

  })

  //一退出的回调函数
  const onExitedCB = useCallback(() => {

  })

  // 改变当前的播放模式
  const getPlayMode = useCallback(() => {
    let content, text;
    if(mode === playMode.sequence) {
      content = "&#xe625;";
      text = "顺序播放";
    } else if(mode === playMode.loop) {
      content = "&#xe653;";co
      text = "单曲循环";
    } else {
      content = "&#xe61b;";
      text = "随机播放";
    }
    return (
      <div>
        <i className="iconfont" onClick={(e) => changeMode(e)}  dangerouslySetInnerHTML={{__html: content}}></i>
        <span className="text" onClick={(e) => changeMode(e)}>{text}</span>
      </div>
    )
  })

  // 处理滚动的函数
  const handleScroll = useCallback(pos => {

  })

  return (
    <CSSTransition
      in={showPlayList}
      timeout={300}
      classNames="list-fade"
      onEnter={onEnterCB}
      onEntering={onEnteringCB}
      onEntered={onEnteredCB}
      onExit={onExitCB}
      onExited={onExitedCB}
      onExiting={onExitingCB}
    >
      <PlayListWrapper
      ref={listWrapperRef}
      onClick={() => {
        togglePlayListDispatch(false)
        setIsShow(false)
      }} style={isShow ? {display: "block"}: {display: "none"}}>
        <div className="list-wrapper">
          <ListHeader>
            <h1 className="title">
              { getPlayMode() }
              <i className="iconfont clear">&#xe63d;</i>
            </h1>
          </ListHeader>
          <ScrollWrapper>
            {/* 自己封装的滚动的插件 */}
            <Scroll
            ref={listContentRef}
            onScroll={pos => handleScroll(pos)}
            bounceTop={false}
            >
              <ListContent>
                {
                  playList.map(item => {
                    return (
                      <li className="item" key={item.id}>
                        {}
                        <span className="text">{item.name}-{getName(item.ar)}</span>
                      </li>
                    )
                  })
                }
              </ListContent>
            </Scroll>
          </ScrollWrapper>
        </div>
      </PlayListWrapper>
    </CSSTransition>
  )
}
const mapStateToProps = state => {
  return {
    showPlayList: state.getIn(["player", "playListStatus"]),
    playList: state.getIn(["player", "playList"])
  }
}
const mapDispatchToProps = dispatch => {
  return {
    togglePlayListDispatch(data){
      dispatch(changePlayListStatus(data))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(PlayList))