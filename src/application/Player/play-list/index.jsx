import React, { useCallback, useState } from 'react'
import {connect} from "react-redux"
import {CSSTransition} from "react-transition-group"
import {PlayListWrapper} from "./style"
// 播放列表
function PlayList(props) {
  const {showPlayList} = props

  const [isShow, setIsShow] = useState(false)

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
      <PlayListWrapper style={isShow ? {display: "block"}: {display: "none"}}>
      我是播放列表
      </PlayListWrapper>
    </CSSTransition>
  )
}
const mapStateToProps = state => {
  return {
    showPlayList: state.getIn(["player", "playListStatus"])
  }
}
const mapDispatchToProps = dispatch => {

}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(PlayList))