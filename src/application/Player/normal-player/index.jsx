import React, { useCallback, useEffect, useRef, useState } from 'react'
import { CSSTransition } from "react-transition-group"
import Scroll from "baseUI/scroll"
import { NormalPlayerContainer, Top, Middle, CDWrapper, LyricCintainer, LyricWrapper, Bottom, List, ListItem, ProgressWrapper, Operators } from "./style"
import { getName } from "utils/index"
import animations from "create-keyframe-animation"
import { prefixStyle, formatPlayTime } from "utils"
import ProgressBar from "baseUI/progress-bar"
import {list, playMode} from "api/config"
function NormalPlayer(props) {
    const { full, song, playing, currentPlayingLyric, currentLyric, currentLineNum, speed, currentTime, percent, mode } = props

    const { toggleFullScreenDispatch, clickSpeed, onProgressChange, togglePlayListDispatch, clickPlaying, changeMode, handlePrev, handleNext } = props;

    const normalPlayerRef = useRef()

    const cdWrapperRef = useRef()

    const lyricLineRefs = useRef([])

    const lyricScrollRef = useRef()

    const [currentState, setCurrentState] = useState("")

    const transform = prefixStyle("transform")

    // 监听当前行数的变化切换当前的歌词
    useEffect(() => {
        if (!lyricScrollRef.current) return;
        let bScroll = lyricScrollRef.current.getBScroll();
        if (currentLineNum > 5) {
            let lineEl = lyricLineRefs.current[currentLineNum - 5].current;
            bScroll.scrollToElement(lineEl, 1000);
        } else {
            bScroll.scrollTo(0, 0, 1000);
        }
    }, [currentLineNum])

    const enter = useCallback(() => {
        normalPlayerRef.current.style.display = "block"
        const { x, y, scale } = _getPosAndScale()
        let animation = {
            0: {
                transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`
            },
            60: {
                transform: `translate3d(0, 0, 0) scale(1.1)`
            },
            100: {
                transform: `translate3d(0, 0, 0) scale(1)`
            }
        }
        animations.registerAnimation({
            name: "move",
            animation,
            presets: {
                duration: 400,
                easing: "linear"
            }
        })
        animations.runAnimation(cdWrapperRef.current, "move")
    }, [])

    const afterEnter = useCallback(() => {
        // 离开之后解绑之前的animations对象注册的动画
        const cdWrapperDom = cdWrapperRef.current;
        animations.unregisterAnimation("move");
        cdWrapperDom.style.animation = ""
    })

    const exit = useCallback(() => {
        // 如果不存在的时候直接就退出
        if (!cdWrapperRef.current) {
            return;
        }
        const cdWrapperDom = cdWrapperRef.current;
        cdWrapperDom.style.transition = "all 0.4s"
        const { x, y, scale } = _getPosAndScale()
        cdWrapperDom.style[transform] = `translate3d(${x}px, ${y}px, 0) scale(${scale})`

    })

    const afterExit = useCallback(() => {
        if (!cdWrapperRef.current) {
            return;
        }
        const cdWrapperDom = cdWrapperRef.current;
        cdWrapperDom.style.transition = ""
        cdWrapperDom.style[transform] = ""
        normalPlayerRef.current.style.display = "none"
        setCurrentState("")
    })

    // 计算cd转盘的动画
    const _getPosAndScale = useCallback(() => {
        const targetWidth = 40;
        const paddingLeft = 40;
        const paddingBottom = 30;
        const paddingTop = 80;
        const width = window.innerWidth * 0.8;
        const scale = targetWidth / width;
        const x = -(window.innerWidth / 2 - paddingLeft)
        const y = window.innerHeight - paddingTop - width / 2 - paddingBottom
        return {
            x,
            y,
            scale
        }
    })

    // 设置cd的状态
    const toggleCurrentState = useCallback(() => {
        let nextState = "";
        if (currentState !== "lyric") {
            nextState = "lyric"
        } else {
            nextState = ""
        }
        setCurrentState(nextState)
    })

    const getPlayMode = () => {
        let content;
        if (mode === playMode.sequence) {
          content = "&#xe625;";
        } else if (mode === playMode.loop) {
          content = "&#xe653;";
        } else {
          content = "&#xe61b;";
        }
        return content;
      };

    //   暂定和播放
      const clickPlayingCB = useCallback((e) => {
        clickPlaying(e, !playing)
      }, [clickPlaying, playing])

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
                    <img width="100%" height="100%" src={song.al.picUrl + "?params=300x300"} alt="歌曲图片" />
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
                                visibility: currentState !== "lyric" ? "visible" : "hidden"
                            }}
                            playing={playing}
                        >
                            <div className={`needle ${playing ? '' : 'pause'}`}></div>
                            <div className="cd">
                                <img className={`image play ${playing ? '' : "pause"}`} src={song.al.picUrl + "?param=400x400"} alt="" />
                            </div>
                            <p className="playing_lyric">{currentPlayingLyric}</p>
                        </CDWrapper>
                    </CSSTransition>
                    <CSSTransition
                        timeout={400}
                        className="fade"
                        in={currentState === "lyric"}
                    >
                        <LyricCintainer>
                            <Scroll
                                ref={lyricScrollRef}
                            >
                                <LyricWrapper
                                    style={{
                                        visibility:
                                            currentState === "lyric" ? "visible" : "hidden"
                                    }}
                                    className="lyric_wrapper"
                                >
                                    {
                                        currentLyric
                                            ? currentLyric.lines.map((item, index) => {
                                                lyricLineRefs.current[index] = React.createRef();
                                                return (
                                                    <p
                                                        className={`text ${currentLineNum === index ? "current" : ""
                                                            }`}
                                                        key={item + index}
                                                        ref={lyricLineRefs.current[index]}
                                                    >
                                                        {item.txt}
                                                    </p>
                                                );
                                            })
                                            : <p className="text pure">纯音乐，请欣赏。</p>}
                                </LyricWrapper>
                            </Scroll>
                        </LyricCintainer>
                    </CSSTransition>
                </Middle>
                <Bottom className="bottom">
                    <List>
                        <span>倍速听歌</span>
                        {
                            list.map((item) => {
                                return (
                                    <ListItem
                                        key={item.key}
                                        className={`${speed === item.key ? "selected" : ""}`}
                                        onClick={() => {
                                            // 选择速度
                                            clickSpeed(item.key)
                                        }}
                                    >
                                        {item.name}
                                    </ListItem>
                                )  
                            })
                        }
                    </List>
                    {/* 播放进度条 */}
                    <ProgressWrapper>
                        <span className="time time-l">{formatPlayTime(currentTime)}</span>
                        <div className="progress-bar-wrapper">
                            <ProgressBar
                                percent={percent}
                                onProgressChange={onProgressChange}
                            ></ProgressBar>
                        </div>
                    </ProgressWrapper>
                    <Operators>
                        <div className="icon i-left"
                            onClick={changeMode}
                        >
                            <i
                                className="iconfont"
                                dangerouslySetInnerHTML={{ __html: getPlayMode() }}
                            ></i>
                        </div>
                        <div className="icon i-left" onClick={handlePrev}>
                            <i className="iconfont">&#xe6e1;</i>
                            </div>
                            <div className="icon i-center">
                            <i
                                className="iconfont"
                                onClick={clickPlayingCB}
                                dangerouslySetInnerHTML={{
                                __html: playing ? "&#xe723;" : "&#xe731;"
                                }}
                            ></i>
                            </div>
                            <div className="icon i-right" onClick={handleNext}>
                            <i className="iconfont">&#xe718;</i>
                            </div>
                            <div
                            className="icon i-right"
                            onClick={() => togglePlayListDispatch(true)}
                            >
                            <i className="iconfont">&#xe640;</i>
                        </div>
                    </Operators>
                </Bottom>
            </NormalPlayerContainer>
        </CSSTransition>
    )
}
export default React.memo(NormalPlayer)