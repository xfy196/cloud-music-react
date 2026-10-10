import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { ListContainer } from "./style";
import {
  getMvList,
  changeLoading,
  changePullUpLoding,
  getMvLoadingMore,
  setOffset,
} from "./store/actionCreator";
import { Outlet, useNavigate } from "react-router-dom";
import Scroll from "baseUI/scroll";
import Loading from "baseUI/loading";
import EnterLoading from "utils/EnterLoading";
import { forceCheck } from "react-lazyload";
import { formatPlayTime } from "utils";

const formatPlayCount = (count = 0) => {
  if (count < 10000) return String(count);
  if (count < 100000000) {
    const value = count / 10000;
    return `${value >= 100 ? Math.floor(value) : value.toFixed(1).replace(/\.0$/, "")}万`;
  }
  return `${(count / 100000000).toFixed(1).replace(/\.0$/, "")}亿`;
};

/**
 * 推荐MV的组件
 * @returns
 */
function MV(props) {
  const navigate = useNavigate();
  const {
    area,
    mvList,
    pullUpLoading,
    hasMore,
    offset,
    limit,
    enterLoading,
    songsCount,
  } = props;
  const {
    getMvListDispatch,
    changeLoadingDispatch,
    changePullUpLoadingDispatch,
    setOffsetDispatch,
    getMvLoadingMoreDispatch,
  } = props;

  useEffect(() => {
    getMvListDispatch(area);
  }, []);

  const handlePullUp = useCallback(() => {
    if (!pullUpLoading && hasMore) {
      setOffsetDispatch(offset + limit);
      changePullUpLoadingDispatch(true);
      getMvLoadingMoreDispatch(area, offset + limit, limit);
    }
  }, [
    area,
    hasMore,
    limit,
    offset,
    pullUpLoading,
    changePullUpLoadingDispatch,
    getMvLoadingMoreDispatch,
    setOffsetDispatch,
  ]);

  const handlePullDown = useCallback(() => {
    setOffsetDispatch(0);
    changeLoadingDispatch(true);
    getMvListDispatch(area);
  }, [area, changeLoadingDispatch, getMvListDispatch, setOffsetDispatch]);

  return (
    <>
      <ListContainer play={songsCount}>
        <Scroll
          onScroll={forceCheck}
          pullUp={handlePullUp}
          pullDown={handlePullDown}
        >
          <div className="scroll-content">
            <div className="section-head">
              <h2 className="section-title">{area}</h2>
              <span className="section-sub">MUSIC VIDEO</span>
            </div>
            <div className="mv-list">
              {mvList.map((item, index) => (
                <article
                  key={item.id}
                  className="mv-card"
                  style={{ "--stagger": `${Math.min(index, 10) * 40}ms` }}
                  onClick={() => navigate(`/mv/${item.id}`)}
                >
                  <div className="poster">
                    <img
                      className="poster-img"
                      src={item.cover}
                      alt={item.name}
                    />
                    <div className="poster-shade" />
                    <span className="play-badge" aria-hidden="true" />
                    <span className="play-count">
                      <i className="iconfont play">&#xe885;</i>
                      <span>{formatPlayCount(item.playCount)}</span>
                    </span>
                  </div>
                  <div className="mv-body">
                    <div className="mv-copy">
                      <h3 className="mv-name">{item.name}</h3>
                      <div className="mv-meta">
                        {item.artistName ? (
                          <span className="mv-artist">{item.artistName}</span>
                        ) : null}
                        {item.duration ? (
                          <span className="mv-duration">
                            {formatPlayTime(item.duration / 1000)}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <i className="iconfont mv-arrow">&#xe662;</i>
                  </div>
                </article>
              ))}
            </div>
            {hasMore ? (
              <button
                type="button"
                className="more-btn"
                disabled={pullUpLoading}
                onClick={handlePullUp}
              >
                {pullUpLoading ? "加载中…" : "加载更多"}
              </button>
            ) : mvList.length > 0 ? (
              <p className="list-end">已经到底了</p>
            ) : null}
            {enterLoading ? (
              <EnterLoading>
                <Loading></Loading>
              </EnterLoading>
            ) : null}
          </div>
        </Scroll>
      </ListContainer>
      <Outlet />
    </>
  );
}

const mapStateToProps = (state) => {
  const mvList = state.getIn(["mv", "mvList"]);
  return {
    area: state.getIn(["mv", "area"]),
    mvList: mvList?.toJS ? mvList.toJS() : mvList || [],
    pullDownLoading: state.getIn(["mv", "pullDownLoading"]),
    pullUpLoading: state.getIn(["mv", "pullUpLoading"]),
    hasMore: state.getIn(["mv", "hasMore"]),
    count: state.getIn(["mv", "count"]),
    offset: state.getIn(["mv", "offset"]),
    limit: state.getIn(["mv", "limit"]),
    songsCount: state.getIn(["player", "playList"]).size,
    enterLoading: state.getIn(["mv", "enterLoading"]),
  };
};

const mapStateToDispatch = (dispatch) => ({
  getMvListDispatch(area) {
    dispatch(getMvList(area));
  },
  changeLoadingDispatch(data) {
    dispatch(changeLoading(data));
  },
  changePullUpLoadingDispatch(data) {
    dispatch(changePullUpLoding(data));
  },
  getMvLoadingMoreDispatch(area, offset, limit) {
    dispatch(getMvLoadingMore(area, offset, limit));
  },
  setOffsetDispatch(offset) {
    dispatch(setOffset(offset));
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(React.memo(MV));
