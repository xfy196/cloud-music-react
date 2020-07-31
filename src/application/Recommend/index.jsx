import React, { useEffect } from 'react'
import { connect } from "react-redux"
import * as actionCreator from "./store/actionCreator"
import Slider from "@/slider"
import RecommendList from "@/list"
import { Content } from "./style"
import { renderRoutes } from "react-router-config"
import Scroll from "baseUI/scroll"
import {forceCheck} from "react-lazyload"
const mapStateToProps = state => {
  return {
    bannerList: state.getIn(["recommend", "bannerList"]),
    recommendList: state.getIn(["recommend", "recommendList"]),
    // songsCount : state.getIn(["play", "playList"]).size
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
function index(props) {
  const { bannerList, recommendList, songsCount } = props;
  const { getBannerDataDispatch, getRecommendDataDispatch } = props;
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
      <Content>

        <Scroll play={songsCount} onScroll={forceCheck}>
          <div>
            <Slider bannerList={bannerListJS}></Slider>
            <RecommendList recommendList={recommendListJS}></RecommendList>
          </div>
        </Scroll>
        {renderRoutes(props.route.routes)}
      </Content>
    </>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(index));