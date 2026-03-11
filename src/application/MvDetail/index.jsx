import React, { useCallback, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { MvDetailStyled } from "./style";
import Header from "baseUI/header";
import { getMvDetail, changeEnterLoading } from "./store/actionCreator";
import EnterLoading from "utils/EnterLoading";
import Loading from "baseUI/loading";
import { VideoPlayer, VideoPlayerProps, VideoPlayerState } from '@videojs-player/react'
import videojs from "video.js"
import "video.js/dist/video-js.css"
function MvDetail(props) {
  const {
    match,
    mvDetail: immuableMvDetail,
    url: immuableUrl,
    enterLoading,
  } = props;
  const { changeEnterLoadingDispatch } = props;
  let mvDetail = immuableMvDetail.toJS();
  let url = immuableUrl.toJS();
  const { getMvDetailDispatch } = props;
  const [showStatus, setShowStatus] = useState(true);
  const headerRef = useRef();
  const videoRef = useRef();
  const [playerState, setPlayerState] = useState()
  const [config, setConfig] = useState(() => ({
    url: url.data.url,
    playbackRates: [0.75, 1, 1.5, 2, 3],
    volume: 0.6
  }))
  useEffect(() => {
    if(url.data.url) {
      console.log(1111)
      setConfig({
        ...config,
        url: url.data.url
      })
    }
  }, [url.data.url])
  const handleBack = useCallback(() => {
    setShowStatus(false);
    changeEnterLoadingDispatch(true);
  });

  /**
   * 第一次进入需要请求获取mv详情的接口
   */
  useEffect(() => {
    getMvDetailDispatch(match.params.id);
  }, [match.params.id]);
  const handleMounted = (payload) => {
    videoRef.current = payload.player
    setPlayerState(payload.state)
  }
  const handleStateChange = (state) => {
    setPlayerState(state)
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
      <MvDetailStyled>
        {enterLoading ? (
          <EnterLoading>
            <Loading style={{ zIndex: 100 }}></Loading>
          </EnterLoading>
        ) : (
          <>
            <Header
              handleClick={handleBack}
              title={mvDetail.data.name}
              ref={headerRef}
            ></Header>
            {config.url && <div className="mvDetail">
              <VideoPlayer
              className="video"
                crossorigin="anonymous"
                playsinline
                controls
                src={config.url}
                volume={config.volume}
                playbackRates={config.playbackRates}
                onMounted={handleMounted}
                onStateChange={handleStateChange}
              ></VideoPlayer>
              <div className="mvInfo">
                <span className="mvName">{mvDetail.data.name}</span>
                <span className="artistName">{mvDetail.data.artistName}</span>
              </div>
            </div>
            }
          </>
        )}
      </MvDetailStyled>
    </CSSTransition>
  );
}
const mapStateToProps = (state) => ({
  mvDetail: state.getIn(["mvDetail", "mvDetail"]),
  url: state.getIn(["mvDetail", "url"]),
  enterLoading: state.getIn(["mvDetail", "enterLoading"]),
});
const mapStateToDispatch = (dispatch) => ({
  getMvDetailDispatch(id) {
    dispatch(getMvDetail(id));
  },
  changeEnterLoadingDispatch(data) {
    dispatch(changeEnterLoading(data));
  },
});
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(React.memo(MvDetail));
