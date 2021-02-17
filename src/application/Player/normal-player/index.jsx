import React, {useCallback, useRef, useState} from 'react'
import {CSSTransition} from "react-transition-group"
import {NormalPlayerContainer, Top, Middle, CDWrapper, LyricCintainer} from "./style"
import {getName} from "utils/index"
function NormalPlayer(props) {
    const {full, song, playing, currentPlayingLyric, currentLyric} = props

    const {toggleFullScreenDispatch} = props;

    const normalPlayerRef = useRef()

    const cdWrapperRef = useRef()

    const [currentState, setCurrentState] = useState("")

    const enter = useCallback(() => {
        normalPlayerRef.current.style.display = "block"
    })

    const afterEnter = useCallback(() => {

    })

    const exit = useCallback(() => {
        normalPlayerRef.current.style.display = "none"

    })
    
    const afterExit = useCallback(() => {

    })

    // 设置cd的状态
    const toggleCurrentState = useCallback(() => {
        let nextState = "";
        if(currentState !== "lyric"){
            nextState = "lyric"
        }else {
            nextState = ""
        }
        setCurrentState(nextState)
    })
    return (
        <CSSTransition
        in={full}
        timeout={400}
        mountOnEnter
        onEnter={enter}
        onEntered={afterEnter}
        onExit={exit}
        onExited={afterExit}
        classNames="normal"
        >
            <NormalPlayerContainer ref={normalPlayerRef}>
                <div className="background">
                    <img width="100%" height="100%" src={song.al.picUrl + "?params=300x300"} alt="歌曲图片"/>
                </div>
                <div className="background layer"></div>
                <Top
                    className="top"
                >
                    <div className="back" onClick={() => toggleFullScreenDispatch(false)}>
                        <i className="iconfont icon-back">&#xe662;</i>
                    </div>
                    <div className="text">
                        <div className="title">{song.name}</div>
                        <div className="subTitle">{getName(song.ar)}</div>
                    </div>
                </Top>
                <Middle ref={cdWrapperRef} onClick={toggleCurrentState}>
                    <CSSTransition
                        timeout={400}
                        classNames="fade"
                        in={currentState !== "lyric"}
                    >
                        <CDWrapper
                        style={{
                            visibility: currentState !== "lyric" ? "visible": "hidden"
                        }}
                        playing={playing}
                        >
                            <div className={`needle ${playing ? '' : 'pause'}`}></div>
                            <div className="cd">
                                <img className={`image play ${playing ? '' : "pause"}`} src={song.al.picUrl + "?param=400x400"} alt=""/>
                            </div>
                            <p className="playing_lyric">{currentPlayingLyric}</p>
                        </CDWrapper>
                    </CSSTransition>
                    <CSSTransition
                        timeout={400}
                        className="fade"
                        in={currentState === "lyric"}
                    >
                        <LyricCintainer></LyricCintainer>
                    </CSSTransition>
                </Middle>
            </NormalPlayerContainer>
        </CSSTransition>
    )
}
export default React.memo(NormalPlayer)