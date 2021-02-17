import React, { useCallback, useRef, useState } from 'react'
import { connect } from "react-redux"
import { CSSTransition } from "react-transition-group"
import { PlayListWrapper, ListHeader, ScrollWrapper, ListContent } from "./style"
import { changePlayListStatus, changeCurrentIndex, changePlayList, changeMode, deleteSong, changeSequecePlayList, changeCurrentSong, changePlayingState } from "../store/actionCreator"
import { playMode } from "api/config"
import Scroll from "baseUI/scroll/index"
import { getName, findIndex, shuffle, prefixStyle } from "utils/index"
import Comfirm from "baseUI/confirm"
// 播放列表
function PlayList(props) {
  const { showPlayList, togglePlayListDispatch, mode,
    playList: immutablePlayList, currentSong: immutableCurrentSong,
    currentIndex, changeCurrentIndexDispatch, sequencePlayList: immutableSequencePlayList,
    changePlayListDispatch, changeModeDispatch, deleteSongDispatch, clearDisptach,
    clearPreSong } = props

  const playList = immutablePlayList.toJS()

  const currentSong = immutableCurrentSong.toJS()

  const sequencePlayList = immutableSequencePlayList.toJS()

  const [isShow, setIsShow] = useState(false)

  const [distance, setDistance] = useState(0)

  const listWrapperRef = useRef()

  const listContentRef = useRef()

  const [startY, setStartY] = useState(0)

  const [canTouch, setCanTouch] = useState(true)

  const [initialed, setInitialed] = useState(false)

  // 弹框的实例对象
  const confirmRef = useRef()
  // 动画进入的回调

  const transform = prefixStyle("transform")

  const onEnterCB = useCallback(() => {
    // 进入时改变显示状态
    setIsShow(true)
    listWrapperRef.current.style[transform] = "translate3d(0, 100%, 0)"
  }, [transform])

  // 进入动画结束的时候回调函数

  const onEnteredCB = useCallback(() => {

  }, [transform])

  // 正在进入的动画中执行的回调函数
  const onEnteringCB = useCallback(() => {
    listWrapperRef.current.style["transition"] = "all 0.3s";
    listWrapperRef.current.style[transform] = "translate3d(0, 0, 0)";
  }, [transform])


  // 执行退出的操作
  const onExitCB = useCallback(() => {
    listWrapperRef.current.style[transform] = `translate3d(0, ${distance}px, 0)`
  }, [transform, distance])

  // 正在退出的回调函数
  const onExitingCB = useCallback(() => {
    listWrapperRef.current.style["transition"] = "all 0.3s";
    listWrapperRef.current.style[transform] = "translate3d(0, 100%, 0)";
  }, [transform])

  //一退出的回调函数
  const onExitedCB = useCallback(() => {
    setIsShow(false)
    listWrapperRef.current.style[transform] = "translate3d(0, 100%, 0)";
  }, [transform])


  // 改变播放模式的函数
  const changeMode = useCallback(e => {
    let newMode = (mode + 1) % 3
    // 判断模式的值 0 顺序播放 1 循环播放 2 随机播放
    if (newMode === 0) {
      changePlayListDispatch(sequencePlayList)
      // 拿到当前的歌曲的下标重新设置
      let index = findIndex(currentSong, sequencePlayList)
      changeCurrentIndexDispatch(index)
    } else if (newMode === 1) {
      // 循环模式
      changePlayListDispatch(sequencePlayList)
    } else if (newMode === 2) {
      // 随机播放
      // 首先进行歌曲列表冲洗洗牌， 洗牌算法
      let newList = shuffle(sequencePlayList)
      // 找到当前歌曲在list中的下标
      let index = findIndex(currentSong, newList)
      // 重新设置playList
      changePlayListDispatch(newList)
      changeCurrentIndexDispatch(index)
    }
    changeModeDispatch(newMode)
  })

  // 改变当前的播放模式
  const getPlayMode = useCallback(() => {
    let content, text;
    if (mode === playMode.sequence) {
      content = "&#xe625;";
      text = "顺序播放";
    } else if (mode === playMode.loop) {
      content = "&#xe653;";
      text = "单曲循环";
    } else {
      content = "&#xe61b;";
      text = "随机播放";
    }
    return (
      <div>
        <i className="iconfont" onClick={(e) => changeMode(e)} dangerouslySetInnerHTML={{ __html: content }}></i>
        <span className="text">{text}</span>
      </div>
    )
  })

  // 处理滚动的函数
  const handleScroll = useCallback(pos => {

  })

  // 获取当前的歌曲的字体图标
  const getCurrentIcon = useCallback((item) => {
    // 判断当前id是否和歌单传入的id一致
    const current = currentSong.id === item.id
    const className = current ? "icon-play" : ""
    const content = current ? "&#xe6e3;" : ""
    return (<i className={`current iconfont ${className}`} dangerouslySetInnerHTML={{ __html: content }}></i>)
  })

  // 设置最爱的图标
  const getFavoriteIcon = useCallback((item) => {
    return (
      <i className="iconfont">&#xe601;</i>
    )
  })

  // 删除歌单列表中的歌曲
  const handleDeleteSong = useCallback((e, item) => {
    e.stopPropagation()
    deleteSongDispatch(item)
  })

  // 改变当前播放音乐的下标
  const handleChangeCurrentIndex = useCallback((index) => {
    // 如果当前的index等于store存储的index那么我们就直接结束， 否则我们就重新设置index
    if (currentIndex === index) {
      return;
    }
    // 改变当前的音乐的下标
    changeCurrentIndexDispatch(index)
  })

  // 处理是否显示提示框
  const handleShowClear = useCallback((e) => {
    e.stopPropagation()
    confirmRef.current.show()
  })

  // 清空列表中的所有歌曲
  const handleConfirmClear = useCallback(() => {
    clearDisptach();
    // 清除上一次的歌曲数据
    clearPreSong()
  })

  // 处理触摸开始的函数
  const handleTouchStart = useCallback((e) => {
    if(!canTouch || initialed){
      return;
    }
    listWrapperRef.current.style[transform] = ""
    setDistance(0)
    setStartY(e.nativeEvent.touches[0].pageY)
    setInitialed(true)
  })
  // 处理触摸移动的方法
  const handleTouchMove = useCallback((e) => {
    if(!canTouch || !initialed){
      return
    }
    let distance = e.nativeEvent.touches[0].pageY - startY
    console.log(distance)
    if(distance < 0){
      return
    }
    setDistance(distance)
    listWrapperRef.current.style[transform] = `translate3d(0, ${distance}px, 0)`
  })
  // 处理触摸结束的方法
  const handleTouchEnd = useCallback((e) => {
    // 触摸结束需要恢复初始状态
    setInitialed(false)
    // 判断touch产生的距离， 大于150直接关闭
    if(distance >= 150){
      togglePlayListDispatch(false)
    }else {
      // 直接恢复之前的样子
      listWrapperRef.current.style["transition"] = "all 0.3s"
      listWrapperRef.current.style[transform] = "translate3d(0,0,0)"
    }
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
        onClick={() => {
          togglePlayListDispatch(false)
          setIsShow(false)
        }} style={isShow ? { display: "block" } : { display: "none" }}>
        <div
        ref={listWrapperRef}
        onClick={(e) => {
          e.stopPropagation()
        }}
        onTouchStart={handleTouchStart} 
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="list-wrapper">
          <ListHeader>
            <h1 className="title">
              {getPlayMode()}
              <i onClick={(e) => handleShowClear(e)} className="iconfont clear">&#xe63d;</i>
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
                  playList.map((item, index) => {
                    return (
                      <li onClick={() => handleChangeCurrentIndex(index)} className="item" key={item.id}>
                        {getCurrentIcon(item)}
                        <span className="text">{item.name}-{getName(item.ar)}</span>
                        <span className="like">
                          {getFavoriteIcon(item)}
                        </span>
                        <span className="delete" onClick={(e) => handleDeleteSong(e, item)}>
                          <i className="iconfont">&#xe63d;</i>
                        </span>
                      </li>
                    )
                  })
                }
              </ListContent>
            </Scroll>
          </ScrollWrapper>
        </div>
        <Comfirm ref={confirmRef} text={"是否删除全部?"} cancelBtnText={"取消"} confirmBtnText={"确定"} handleConfirm={handleConfirmClear}></Comfirm>
      </PlayListWrapper>
    </CSSTransition>
  )
}
const mapStateToProps = state => {
  return {
    showPlayList: state.getIn(["player", "playListStatus"]),
    playList: state.getIn(["player", "playList"]),
    currentSong: state.getIn(["player", "currentSong"]),
    currentIndex: state.getIn(["player", "currentIndex"]),
    sequencePlayList: state.getIn(["player", "sequencePlayList"])
  }
}
const mapDispatchToProps = dispatch => {
  return {
    togglePlayListDispatch(data) {
      dispatch(changePlayListStatus(data))
    },
    changeCurrentIndexDispatch(data) {
      dispatch(changeCurrentIndex(data))
    },
    changePlayListDispatch(data) {
      dispatch(changePlayList(data))
    },
    changeModeDispatch(data) {
      dispatch(changeMode(data))
    },
    deleteSongDispatch(data) {
      dispatch(deleteSong(data))
    },
    clearDisptach() {
      // 清空播放列表
      dispatch(changePlayList([]))
      dispatch(changeSequecePlayList([]))
      dispatch(changeCurrentIndex(-1))
      dispatch(changePlayListStatus(false))
      dispatch(changeCurrentSong({}))
      dispatch(changePlayingState(false))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(PlayList))