import React, { useEffect, useState, useCallback } from 'react'
import { connect } from "react-redux"
import { CSSTransition } from "react-transition-group"
import Header from "baseUI/header"
import { Container } from "./style"
import Scroll from "baseUI/scroll"
import {forceCheck} from "react-lazyload"
function Album(props) {
  // 默认开始的时候为true但是点击返回的上一层的时候为false
  const [showStatus, setShowStatus] = useState(true);
  // 拿到传过来的id值
  const id = props.match.params.id;
  const { songsCount, pullUpLoading } = props;

  const handleBack = () => useCallback(() => {
    setShowStatus(false);
  }, []);

  const handlePullUp = () => {

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
      <Container play={songsCount}>
        {/* 头部 */}
        <Header title={"歌单"} handleClick={handleBack}></Header>
        <Scroll
          onScroll={forceCheck}
          pullUp={handlePullUp}
          pullUpLoading={pullUpLoading}
          bounceTop={false}
        >
        </Scroll>
      </Container>
    </CSSTransition>
  )
}
export default connect(null, null)(React.memo(Album))