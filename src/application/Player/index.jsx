import React, { useCallback, useEffect, useRef, useState } from 'react'
import { connect } from "react-redux"
import MiniPlayer from "./min-player"
import { changeCurrentSong, changePlayingState } from "./store/actionCreator"
import { getSongUrl, isEmptyObject } from "utils"
function Player(props) {
  const { speed, playList: immutablePlayList, currentIndex, currentSong: immutableCurrentSong, playing } = props;
  const { changeCurrentSongDispatch, togglePlayingDispatch } = props;
  // 当前播放歌曲的数据
  const [preSong, setPreSong] = useState({});
  const [playLyric, setPlayLyric] = useState("");
  // 这只每次点歌的时候当前的歌曲播放的时间点
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // 歌曲是否已经准备好的标识符
  const songReady = useRef(true);
  // 计算百分比
  let percent = isNaN(currentTime / duration) ? 0 : currentTime / duration;
  const audioRef = useRef();

  const playList = immutablePlayList.toJS();
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
    setPlayLyric("")
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
  }, [currentIndex, playList])

  useEffect(() => {
    playing ? audioRef.current.play() : audioRef.current.pause();
  }, [playing]);
  const clickPlaying = useCallback((e, state) => {
    // 首先阻止事件毛毛
    e.stopPropagation()
    togglePlayingDispatch(state);
  });

  const handleTogglePlayList = useCallback(() => {
    console.log("handleTogglePlayList");
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
        isEmptyObject(currentSong) ? null :
          <MiniPlayer
            playing={playing}
            clickPlaying={clickPlaying}
            handleTogglePlayList={handleTogglePlayList}
            song={currentSong}
            percent={percent}
          ></MiniPlayer>
      }
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
  speed: state.getIn(["player", "speed"])
});
const mapDispatchToProps = dispatch => ({
  changeCurrentSongDispatch(data) {
    dispatch(changeCurrentSong(data))
  },
  togglePlayingDispatch(data) {
    dispatch(changePlayingState(data))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Player))