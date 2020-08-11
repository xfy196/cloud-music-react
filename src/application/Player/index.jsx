import React, {useCallback, useEffect} from 'react'
import {connect} from "react-redux"
import MiniPlayer from "./min-player"
import {changeCurrentSong} from "./store/actionCreator"
function Player(props) {
  const {playList : immutablePlayList, currentIndex, currentSong : immutableCurrentSong} = props;
  const {changeCurrentSongDispatch} = props;

  const playList  = immutablePlayList.toJS();
  const currentSong = immutableCurrentSong.toJS();
  console.log(currentSong);
  useEffect(() => {
    if(!playList.length || currentIndex===-1){
      return;
    }
    let currentSong = playList[currentIndex]
    changeCurrentSongDispatch(currentSong);
  }, [currentIndex])

  const clickPlaying = useCallback((e, bool) => {
    console.log("clickPlaying")
  });

  const handleTogglePlayList = useCallback(() => {
    console.log("handleTogglePlayList");
  })
  return (
    <>
      <MiniPlayer
        playing={false}
        clickPlaying={clickPlaying}
        handleTogglePlayList={handleTogglePlayList}
      ></MiniPlayer>
    </>
  )
}
const mapStateToProps = state => ({
  playList : state.getIn(["player", "playList"]),
  currentIndex : state.getIn(["player", "currentIndex"]),
  currentSong : state.getIn(["player", "currentSong"])
});
const mapDispatchToProps = dispatch => ({
  changeCurrentSongDispatch(data){
    dispatch(changeCurrentSong(data));
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Player))