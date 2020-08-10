import React, { useRef, useCallback } from 'react'
import { MiniPlayerContainer } from "./style"
import { CSSTransition } from "react-transition-group"
import ProgressCircle from "baseUI/progress-circle"
function MiniPlayer(props) {
  const { playing, song, percent } = props;
  const { clickPlaying, handleTogglePlayList } = props;
  const miniPlayerContainer = useRef();
  const miniWrapperRef = useRef();
  const miniImageRef = useRef()

  return (
    <>
      <CSSTransition
        in={true}
        timeout={400}
        classNames="mini"
        onEnter={() => { }}
        onExited={() => { }}
      >
        <MiniPlayerContainer ref={miniPlayerContainer}>
          <div className="icon">
            <div className="imgWrapper" ref={miniWrapperRef}>
              <img className={`play ${playing ? "" : "pause"}`} ref={miniImageRef} src="https://p4.music.126.net/dE3BEAkOBI8WW84DOYKZ8A==/109951164159332447.jpg" alt="img" />
            </div>
          </div>
          <div className="text"><h2 className="name">Like You!</h2><p className="desc">Danny Shark</p></div>
          {/* 播放的进度条 */}
          <div className="control">
            <ProgressCircle radius={32} percent={.5}>
              {playing ?
                <i className="icon-mini iconfont icon-pause" onClick={e => clickPlaying(e, false)}>&#xe650;</i>
                :
                <i className="icon-mini iconfont icon-play" onClick={e => clickPlaying(e, true)}>&#xe61e;</i>
              }
            </ProgressCircle>
          </div>
          <div className="control" onClick={handleTogglePlayList}>
            <i className="iconfont">&#xe640;</i>
          </div>
        </MiniPlayerContainer>
      </CSSTransition>

    </>
  )
}
export default React.memo(MiniPlayer);