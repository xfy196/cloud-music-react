import React, { useCallback, useEffect, useRef, useState } from 'react'
import { connect } from "react-redux"
import MiniPlayer from "./min-player"
import { changeCurrentSong, changePlayingState, changePlayListStatus, changeFullScreen } from "./store/actionCreator"
import { getSongUrl, isEmptyObject } from "utils"
import PlayList from "./play-list/index"
import NormalPlayer from "./normal-player"
import {getLyricRequest} from "../../api/request"
import Lyric from '../../api/lyric-parser'
function Player(props) {
  const { speed, playList: immutablePlayList, currentIndex, currentSong: immutableCurrentSong, playing, mode, fullScreen } = props;
  const { changeCurrentSongDispatch, togglePlayingDispatch, togglePlayListStatus, playListStatus, toggleFullScreenDispatch } = props;
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
  const playList = immutablePlayList.toJS();

  const currentLyric = useRef()

  const currentLineNum = useRef(0)

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
    getLyric(current.id)
    // 获取当前歌曲的歌词

  }, [currentIndex, playList])

  useEffect(() => {
    playing ? audioRef.current.play() : audioRef.current.pause();
  }, [playing]);


  // 当全屏变换的时候获取歌曲文字
  useEffect(() => {
    if(!fullScreen){
      return
    }
    // 判断是否存在存储歌曲文字的ref对象
    if(currentLyric.current && currentLyric.current.lines.length){
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
  const handleLyric = useCallback(({lineNum, txt}) => {
    // 不存在歌词的时候直接结束
    if(!currentLyric.current){
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
    if(currentLyric.current){
      currentLyric.current.stop()
    }

    setTimeout(() => {
      songReady.current = true
    }, 3000)

    getLyricRequest(id).then(data => {
      lyric = data.lrc && data.lrc.lyric;
      if(!lyric){
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
  });

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
  const handleEnd = e => {

  }

  /* 
    绑定歌曲播放错误的事件
  */
  const handleError = e => {
  }

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
  fullScreen: state.getIn(["player", "fullScreen"])
});
const mapDispatchToProps = dispatch => ({
  changeCurrentSongDispatch(data) {
    dispatch(changeCurrentSong(data))
  },
  togglePlayingDispatch(data) {
    dispatch(changePlayingState(data))
  },
  togglePlayListStatus(data){
    dispatch(changePlayListStatus(data))
  },
  toggleFullScreenDispatch(data){
    dispatch(changeFullScreen(data))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Player))