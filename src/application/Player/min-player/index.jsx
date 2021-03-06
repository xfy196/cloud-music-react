import React, { useRef, useCallback } from 'react'
import { MiniPlayerContainer } from "./style"
import { CSSTransition } from "react-transition-group"
import ProgressCircle from "baseUI/progress-circle"
function MiniPlayer(props) {
  const { playing, song, percent, full } = props;
  const { clickPlaying, handleTogglePlayList, setFullScreen } = props;
  const miniPlayerContainer = useRef();
  const miniWrapperRef = useRef();
  const miniImageRef = useRef()

  return (
    <>
      <CSSTransition
        in={!full}
        timeout={400}
        classNames="mini"
        onEnter={() => {
          miniPlayerContainer.current.style.display = "flex"
         }}
        onExited={() => { 
          miniPlayerContainer.current.style.display = "none"
        }}
      >
        <MiniPlayerContainer onClick={() => setFullScreen(true)} ref={miniPlayerContainer}>
          <div className="icon">
            <div className="imgWrapper" ref={miniWrapperRef}>
              <img className={`play ${playing ? "" : "pause"}`} ref={miniImageRef} src={song.al.picUrl} alt="img" />
            </div>
          </div>
          <div className="text"><h2 className="name">{song.name}</h2><p className="desc">{song.ar[0].name}</p></div>
          {/* 播放的进度条 */}
          <div className="control">
            <ProgressCircle radius={32} percent={percent}>
              {playing ?
                <i className="icon-mini iconfont icon-pause" onClick={e => clickPlaying(e, false)}>&#xe650;</i>
                :
                <i className="icon-mini iconfont icon-play" onClick={e => clickPlaying(e, true)}>&#xe61e;</i>
              }
            </ProgressCircle>
          </div>
          <div className="control" onClick={(e) => {
            e.stopPropagation()
            handleTogglePlayList()
          }}>
            <i className="iconfont">&#xe640;</i>
          </div>
        </MiniPlayerContainer>
      </CSSTransition>

    </>
  )
}
export default React.memo(MiniPlayer);