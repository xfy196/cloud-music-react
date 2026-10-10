import React, { useCallback, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { MvDetailStyled } from "./style";
import Header from "baseUI/header";
import { getMvDetail, changeEnterLoading } from "./store/actionCreator";
import EnterLoading from "utils/EnterLoading";
import Loading from "baseUI/loading";
import { VideoPlayer } from "@videojs-player/react";
import "video.js/dist/video-js.css";
import globalStyle from "assets/global-style";
import { formatPlayTime } from "utils";

const formatPlayCount = (count = 0) => {
  if (count < 10000) return String(count);
  if (count < 100000000) {
    const value = count / 10000;
    return `${value >= 100 ? Math.floor(value) : value.toFixed(1).replace(/\.0$/, "")}万`;
  }
  return `${(count / 100000000).toFixed(1).replace(/\.0$/, "")}亿`;
};

const formatPublishTime = (value) => {
  if (!value) return "";
  if (typeof value === "string") return value.slice(0, 10);
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, "0");
  const d = `${date.getDate()}`.padStart(2, "0");
  return `${y}-${m}-${d}`;
};

function MvDetail(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    mvDetail: immutableMvDetail,
    url: immutableUrl,
    enterLoading,
  } = props;
  const { changeEnterLoadingDispatch, getMvDetailDispatch } = props;
  const mvDetail = immutableMvDetail.toJS();
  const url = immutableUrl.toJS();
  const detail = mvDetail.data || {};
  const videoUrl = url?.data?.url || "";

  const [showStatus, setShowStatus] = useState(true);
  const headerRef = useRef();
  const videoRef = useRef();
  const nodeRef = useRef(null);
  const [config, setConfig] = useState(() => ({
    url: videoUrl,
    playbackRates: [0.75, 1, 1.5, 2, 3],
    volume: 0.6,
  }));

  useEffect(() => {
    if (videoUrl) {
      setConfig((prev) => ({
        ...prev,
        url: videoUrl,
      }));
    }
  }, [videoUrl]);

  const handleBack = useCallback(() => {
    setShowStatus(false);
    changeEnterLoadingDispatch(true);
  }, [changeEnterLoadingDispatch]);

  useEffect(() => {
    getMvDetailDispatch(id);
  }, [id]);

  const handleMounted = (payload) => {
    videoRef.current = payload.player;
  };

  const publishDate = formatPublishTime(detail.publishTime);
  const description = detail.desc || detail.briefDesc || "";
  const durationText = detail.duration
    ? formatPlayTime(detail.duration / 1000)
    : "";

  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      appear={true}
      classNames="fly"
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
      onExited={() => navigate(-1)}
    >
      <MvDetailStyled ref={nodeRef}>
        {enterLoading ? (
          <EnterLoading>
            <Loading style={{ zIndex: 100 }}></Loading>
          </EnterLoading>
        ) : (
          <>
            <Header
              handleClick={handleBack}
              title={detail.name || "MV详情"}
              color={globalStyle["theme-color"]}
              isMarquee={Boolean(detail.name && detail.name.length > 12)}
              ref={headerRef}
            />
            <div className="stage">
              <section className="cinema">
                <div className="cinema-frame">
                  {config.url ? (
                    <VideoPlayer
                      className="video"
                      crossorigin="anonymous"
                      playsinline
                      controls
                      poster={detail.cover}
                      src={config.url}
                      volume={config.volume}
                      playbackRates={config.playbackRates}
                      onMounted={handleMounted}
                    />
                  ) : null}
                </div>
              </section>

              <section className="sheet">
                <div className="eyebrow">
                  <span className="eyebrow-label">MUSIC VIDEO</span>
                  {publishDate ? (
                    <span className="eyebrow-date">{publishDate}</span>
                  ) : null}
                </div>
                <h1 className="mv-title">{detail.name}</h1>
                <div className="artist-row">
                  <span className="artist-avatar" aria-hidden="true" />
                  <span className="artist-name">
                    {detail.artistName || "未知艺术家"}
                    {durationText ? ` · ${durationText}` : ""}
                  </span>
                </div>

                <div className="stats">
                  <div className="stat" style={{ "--stagger": "40ms" }}>
                    <span className="stat-value">
                      {formatPlayCount(detail.playCount || 0)}
                    </span>
                    <span className="stat-label">播放</span>
                  </div>
                  <div className="stat" style={{ "--stagger": "80ms" }}>
                    <span className="stat-value">
                      {formatPlayCount(detail.likeCount || 0)}
                    </span>
                    <span className="stat-label">点赞</span>
                  </div>
                  <div className="stat" style={{ "--stagger": "120ms" }}>
                    <span className="stat-value">
                      {formatPlayCount(detail.commentCount || 0)}
                    </span>
                    <span className="stat-label">评论</span>
                  </div>
                </div>

                {description ? (
                  <div className="desc-block">
                    <p className="desc-label">简介</p>
                    <p className="desc-text">{description}</p>
                  </div>
                ) : (
                  <p className="empty-desc">暂无更多介绍</p>
                )}
              </section>
            </div>
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
