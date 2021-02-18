import React, { useCallback, useEffect, useRef, useState } from 'react'
import { connect } from "react-redux"
import MiniPlayer from "./min-player"
import { changeCurrentSong, changePlayingState, changePlayListStatus, changeFullScreen, changeSpeed, changeSequecePlayList, changeCurrentIndex, changeMode } from "./store/actionCreator"
import { getSongUrl, isEmptyObject, shuffle, findIndex } from "utils"
import PlayList from "./play-list/index"
import NormalPlayer from "./normal-player"
import { getLyricRequest } from "api/request"
import Lyric from 'api/lyric-parser'
import Toast from "baseUI/toast"
import { playMode } from 'api/config'
import {Toast as AntdToast} from "antd-mobile"
function Player(props) {
  const { speed, playList: immutablePlayList, currentIndex, currentSong: immutableCurrentSong, playing, mode, fullScreen, sequencePlayList: immutableSequencePlayList } = props;
  const { changeCurrentSongDispatch, togglePlayingDispatch, togglePlayListStatus, playListStatus, toggleFullScreenDispatch, changeSpeedDispatch,changePlayListDispatch, changeCurrentIndexDispatch, changeModeDispatch } = props;
  
  const sequencePlayList = immutableSequencePlayList.toJS()

  // 当前播放歌曲的数据
  const [preSong, setPreSong] = useState({});
  // 歌曲的歌词
  const [currentPlayingLyric, setCurrentPlayingLyric] = useState("");
  // 这只每次点歌的时候当前的歌曲播放的时间点
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // 歌曲是否已经准备好的标识符
  const songReady = useRef(true);
  // 计算百分比
  let percent = isNaN(currentTime / duration) ? 0 : currentTime / duration;
  const audioRef = useRef();

  const toastRef = useRef()

  const playList = immutablePlayList.toJS();

  const currentLyric = useRef(null)

  const currentLineNum = useRef(0)

  const [modeText, setModeText] = useState("")

  const currentSong = immutableCurrentSong.toJS();
  useEffect(() => {
    if (!playList.length || currentIndex === -1 || playList[currentIndex].id === preSong.id || !playList[currentIndex] || !songReady.current) {
      return;
    }
    // songReady.current = false;
    let current = playList[currentIndex]
    setPreSong(current);
    changeCurrentSongDispatch(current);
    // 设置歌词
    setCurrentPlayingLyric("")
    // 设置当前audio
    audioRef.current.src = getSongUrl(current.id);
    audioRef.current.autoplay = true;
    audioRef.current.playbackRate = speed;

    // 设置播放状态
    togglePlayingDispatch(true);
    // 设置当前歌曲时间播放点
    setCurrentTime(0);
    // 设置总秒数
    setDuration((current.dt / 1000) | 0);
    // 获取当前歌曲的歌词
    getLyric(current.id)
  }, [currentIndex, playList])

  useEffect(() => {
    playing ? audioRef.current.play() : audioRef.current.pause();
  }, [playing]);


  // 当全屏变换的时候获取歌曲文字
  useEffect(() => {
    if (!fullScreen) {
      return
    }
    // 判断是否存在存储歌曲文字的ref对象
    if (currentLyric.current && currentLyric.current.lines.length) {
      // 处理歌曲文字
      handleLyric({
        lineNum: currentLineNum.current,
        txt: currentLyric.current.lines[currentLineNum.current].txt
      })
    }
  }, [fullScreen])

  /**
   * 处理歌曲歌词显示的函数
   */
  const handleLyric = useCallback(({ lineNum, txt }) => {
    // 不存在歌词的时候直接结束
    if (!currentLyric.current) {
      return
    }
    currentLineNum.current = lineNum
    setCurrentPlayingLyric(txt)
  })

  /**
   * 通过id的歌曲的歌词
   */
  const getLyric = useCallback((id) => {
    let lyric = "";
    if (currentLyric.current) {
      currentLyric.current.stop()
    }

    setTimeout(() => {
      songReady.current = true
    }, 3000)

    getLyricRequest(id).then(data => {
      lyric = data.lrc && data.lrc.lyric;
      if (!lyric) {
        currentLyric.current = null
        return;
      }
      // 创建歌词的对象
      currentLyric.current = new Lyric(lyric, handleLyric, speed)
      currentLyric.current.play()
      currentLineNum.current = 0
      currentLyric.current.seek(0)
    }).catch(() => {
      currentLyric.current = ""
      songReady.current = true
      audioRef.current.play()
    })
  })
  const clickPlaying = useCallback((e, state) => {
    // 首先阻止事件毛毛
    e.stopPropagation()
    togglePlayingDispatch(state);
    if(currentLyric.current){
      currentLyric.current.togglePlay(currentTime * 1000)
    }
  });

  const changeMode = () => {
    let newMode = (mode + 1) % 3;
    if (newMode === 0) {
      //顺序模式
      changePlayListDispatch(sequencePlayList);
      let index = findIndex(currentSong, sequencePlayList);
      changeCurrentIndexDispatch(index);
      setModeText("顺序循环");
    } else if (newMode === 1) {
      //单曲循环
      changePlayListDispatch(sequencePlayList);
      setModeText("单曲循环");
    } else if (newMode === 2) {
      //随机播放
      let newList = shuffle(sequencePlayList);
      let index = findIndex(currentSong, newList);
      changePlayListDispatch(newList);
      changeCurrentIndexDispatch(index);
      setModeText("随机播放");
    }
    changeModeDispatch(newMode);
    toastRef.current.show();
  };
  // 改变播放列表状态
  const handleTogglePlayList = useCallback(() => {
    // 改变状态
    togglePlayListStatus(!playListStatus)
  });


  /* 
    绑定时间更新函数
  */
  const updateTime = e => {
    setCurrentTime(e.target.currentTime);
  };

  /* 
    绑定歌曲播放结束的函数
  */
  const handleEnd = () => {
    // 首先判断当前播放模式
    if(mode === playMode.loop){
      // 循环模式
      handleLoop()
    }else {
      handleNext()
    }
  }

  /* 
    绑定歌曲播放错误的事件
  */
  const handleError = () => {
    songReady.current = true
    handleNext()
    AntdToast.fail("播放错误", 1000)
  }


  // 执行循环
  const handleLoop = useCallback(() => {
    audioRef.current.currentTime = 0
    togglePlayingDispatch(true)
    audioRef.current.play()
    // 重新设置歌词对象的偏移量seek
    if(currentLyric.current){
      currentLyric.current.seek(0)
    }
  })

  //   上一首
  const handlePrev = useCallback(() => {
    if(playList.length === 1){
      // 执行歌曲循环
      handleLoop()
      return;
    }
    // 如果超过一首歌曲
    let index = currentIndex - 1
    // 判断当前歌曲是否是播放状态
    if(!playing){
      togglePlayingDispatch(true)
    }
    changeCurrentIndexDispatch(index)
  })

//   下一首
  const handleNext = useCallback(() => {
    if(playList.length === 1){
      handleLoop()
      return;
    }
    let index = currentIndex + 1
    // 如果下一首的index等于播放列表的长度重新设置index为第一首歌曲
    if(index === playList.length){
      index = 0
    }
    if(!playing){
      togglePlayingDispatch(true)
    }
    changeCurrentIndexDispatch(index)
  })
  // 点击切换速度
  const clickSpeed = useCallback((newSpeed) => {
    changeSpeedDispatch(newSpeed)
    audioRef.current.playbackRate = newSpeed
    currentLyric.current.changeSpeed(newSpeed)
    currentLyric.current.seek(currentTime * 1000)
  })

  // 进度重新修改
  const onProgressChange = useCallback((curPercent) => {
    const newTime = curPercent * duration;
    setCurrentTime(newTime)
    audioRef.current.currentTime = newTime
    // 判断是否暂定
    if (!playing) {
      togglePlayingDispatch(true)
    }
    // 如果存在当前的歌词的对象吗，我们需要重新计算当前进度对应的歌词
    if (currentLyric.current) {
      currentLyric.current.seek(newTime * 1000)
    }
  })
  return (
    <>
      {
        isEmptyObject(currentSong) ? null : (
          <NormalPlayer
            full={fullScreen}
            song={currentSong}
            toggleFullScreenDispatch={toggleFullScreenDispatch}
            playing={playing}
            currentPlayingLyric={currentPlayingLyric}
            currentLyric={currentLyric.current}
            currentLineNum={currentLineNum.current}
            speed={speed}
            clickSpeed={clickSpeed}
            currentTime={currentTime}
            percent={percent}
            onProgressChange={onProgressChange}
            mode={mode}
            togglePlayListDispatch={handleTogglePlayList}
            clickPlaying={clickPlaying}
            changeMode={changeMode}
            modeText={modeText}
            handlePrev={handlePrev}
            handleNext={handleNext}
          >
          </NormalPlayer>
        )
      }
      {
        isEmptyObject(currentSong) ? null :
          <MiniPlayer
            playing={playing}
            clickPlaying={clickPlaying}
            handleTogglePlayList={handleTogglePlayList}
            song={currentSong}
            percent={percent}
            full={fullScreen}
            setFullScreen={toggleFullScreenDispatch}
          ></MiniPlayer>
      }


      {/* playList的组件 */}
      <PlayList clearPreSong={setPreSong.bind(null, {})} mode={mode}></PlayList>
      <audio
        ref={audioRef}
        onTimeUpdate={updateTime}
        onEnded={handleEnd}
        onError={handleError}
      ></audio>
      <Toast text={modeText} ref={toastRef}></Toast>
    </>
  )
}
const mapStateToProps = state => ({
  playList: state.getIn(["player", "playList"]),
  currentIndex: state.getIn(["player", "currentIndex"]),
  currentSong: state.getIn(["player", "currentSong"]),
  playing: state.getIn(["player", "playing"]),
  speed: state.getIn(["player", "speed"]),
  playListStatus: state.getIn(["player", "playListStatus"]),
  mode: state.getIn(["player", "mode"]),
  fullScreen: state.getIn(["player", "fullScreen"]),
  sequencePlayList: state.getIn(["player", "sequencePlayList"])
});
const mapDispatchToProps = dispatch => ({
  changePlayListDispatch(data) {
    dispatch(changeSequecePlayList(data))
  },
  changeCurrentIndexDispatch(data){
    dispatch(changeCurrentIndex(data))
  },
  changeCurrentSongDispatch(data) {
    dispatch(changeCurrentSong(data))
  },
  changeModeDispatch(data){
    dispatch(changeMode(data))
  },
  togglePlayingDispatch(data) {
    dispatch(changePlayingState(data))
  },
  togglePlayListStatus(data) {
    dispatch(changePlayListStatus(data))
  },
  toggleFullScreenDispatch(data) {
    dispatch(changeFullScreen(data))
  },
  changeSpeedDispatch(data) {
    dispatch(changeSpeed(data))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Player))