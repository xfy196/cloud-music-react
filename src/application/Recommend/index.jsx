import React, { useEffect, useRef } from 'react'
import { connect } from "react-redux"
import * as actionCreator from "./store/actionCreator"
import Slider from "@/slider"
import RecommendList from "@/list"
import { Content } from "./style"
import { renderRoutes } from "react-router-config"
import Scroll from "baseUI/scroll"
import { forceCheck } from "react-lazyload"
import Loading from "baseUI/loading-v2"
import EnterLoading from "utils/EnterLoading"
import BackTop from "@/BackTop/index"
function index(props) {
  const { bannerList, recommendList, songsCount, enterLoading } = props;
  const { getBannerDataDispatch, getRecommendDataDispatch } = props;
  const scrollRef = useRef({
    scrollContainerRef: {}
  })
  useEffect(() => {
    // 如果轮播图的数据不为零说明已经存在这些数据了
    if (!bannerList.size) {
      getBannerDataDispatch();
    }
    if (!RecommendList.size) {
      getRecommendDataDispatch();
    }
  }, []);
  // 通过toJS的方式来将数据全部取出
  const bannerListJS = bannerList ? bannerList.toJS() : [];
  const recommendListJS = recommendList ? recommendList.toJS() : [];
  return (
    <>
      <Content play={songsCount}>
        <Scroll ref={scrollRef} onScroll={forceCheck}>
          <div>
            <Slider bannerList={bannerListJS}></Slider>
            <RecommendList scrollRef={scrollRef} recommendList={recommendListJS}></RecommendList>
          </div>
          {/* TODO 后期优化返回头部的功能 */}
        {/* <BackTop></BackTop> */}
        </Scroll>
        {enterLoading ? <EnterLoading><Loading></Loading></EnterLoading> : null}
        {renderRoutes(props.route.routes)}
      </Content>
    </>
  )
}
const mapStateToProps = state => {
  return {
    bannerList: state.getIn(["recommend", "bannerList"]),
    recommendList: state.getIn(["recommend", "recommendList"]),
    songsCount : state.getIn(["player", "playList"]).size,
    enterLoading: state.getIn(["recommend", "enterLoading"])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionCreator.getBannerList())
    },
    getRecommendDataDispatch() {
      dispatch(actionCreator.getRecommendList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(index));