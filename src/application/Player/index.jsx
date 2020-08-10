import React, {useCallback} from 'react'
import {connect} from "react-redux"
import MiniPlayer from "./min-player"
function Player(props) {
  
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
export default connect(null, null)(React.memo(Player))