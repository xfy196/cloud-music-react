import React, { useEffect, useRef, useCallback } from 'react'
import { connect } from "react-redux"
import Horizen from "baseUI/horizen-item"
import { categoryTypes, alphaTypes } from "api/config"
import { NavContainer, ListContainer, List, ListItem } from "./style"
import { changeCategory, getHotSingerList, changeAlpha, getSingerList, changePullUpLoading, refreshMoreHotSingerList, changeListOffset, changePullDownLoading, refreshMoreSingerList } from "./store/actionCreator"
import Scroll from "baseUI/scroll"
import LazyLoad, { forceCheck } from "react-lazyload"
import singerLazyLoadImg from "./singer.png"
import Loading from "baseUI/loading"
import EnterLoading from "utils/EnterLoading"
import {renderRoutes} from "react-router-config"
function Singers(props) {

  const scrollRef = useRef(null);
  const { category, alpha, songsCount, enterLoading, pullUpLoading, pullDownLoading } = props;
  const { updateCategory, getHotSinger, updateAlpha, pullUpRefresh, pullDownRefresh } = props;
  useEffect(() => {
    if (!category) {
      getHotSinger();
    }
  }, [])

  /* 
    处理点击分类获取的key将这个key值重新放入props中然后通过这个值和分类列表的key进行比较保证点击的分类高亮显示
  */
  const handleUpdateCategory = (type, area) => {
    // 如果key值和上次当前选中的值相等直接return不需要再次触发dispatch方法
    if (category === (type + "-" + area)) {
      return;
    }
    updateCategory(type, area);

    //对应明星的数据加载功能为实现
  }
  const handleUpdateAlpha = (key) => {
    // 如果是重复点击直接return
    if (alpha === key) {
      return;
    }
    updateAlpha(key);
  }

  /* 
    处理上拉加载更多
  */
  const handlePullUp = () => {
    // 触发一个刷新的函数
    pullUpRefresh(category === "" && alpha === "");
  }

  const handlePullDown = () => {
    pullDownRefresh(category, alpha);
  }

  // 进入详情页面的函数
  const enterDetail = useCallback((id) => {
    props.history.push(`/singers/${id}`)
  })
  // 渲染歌手的数据
  const renderSingerList = () => {
    // 拿到歌手的数据
    const { singersList } = props;

    return (
      <List>
        {
          singersList.map((item, index) => {
            return (
              <ListItem key={item.id} className="border-bottom" onClick={() => enterDetail(item.id)}>
                <div className="img_container">
                  <LazyLoad overflow={true} placeholder={<img src={singerLazyLoadImg} alt="歌手" width="100%" height="100%" />}>
                    <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="歌手" />
                  </LazyLoad>
                </div>
                <span className="name">{item.name}</span>
              </ListItem>
            )
          })
        }
      </List>
    )
  }
  return (
    <>
      <NavContainer>
        <Horizen title={"分类(默认热门):"} handleClick={(type, area) => handleUpdateCategory(type, area)} list={categoryTypes} currentKey={category}></Horizen>
        <Horizen title={"首字母:"} handleClick={(key) => handleUpdateAlpha(key)} list={alphaTypes} currentKey={alpha}></Horizen>
      </NavContainer>
      <ListContainer play={songsCount}>
        <Scroll
          onScroll={forceCheck}
          ref={scrollRef}
          pullUp={handlePullUp}
          pullDown={handlePullDown}
          pullUpLoading={pullUpLoading}
          pullDownLoading={pullDownLoading}
        >
          {
            renderSingerList()
          }
        </Scroll>
      </ListContainer>
      {enterLoading ? <EnterLoading><Loading></Loading></EnterLoading> : null}
      {renderRoutes(props.route.routes)}
    </>
  )
}
const mapStateToProps = state => ({
  category: state.getIn(["singers", "category"]),
  singersList: state.getIn(["singers", "singersList"]),
  alpha: state.getIn(["singers", "alpha"]),
  enterLoading: state.getIn(["singers", "enterLoading"]),
  pullUpLoading: state.getIn(["singers", "pullUpLoading"]),
  pullDownLoading: state.getIn(["singers", "pullDownLoading"]),
  songsCount : state.getIn(["player", "playList"]).size
})
const mapDispatchTProps = dispatch => ({
  updateCategory(type, area) {
    // 派发更新分类数据
    dispatch(changeCategory(type, area));
    // 重新派发获取对应分类的歌手的数据
    dispatch(getSingerList());
  },
  updateAlpha(key) {
    dispatch(changeAlpha(key));
    dispatch(getSingerList());
  },
  getHotSinger() {
    dispatch(getHotSingerList())
  },
  // 滑动的函数
  pullUpRefresh(hotFlag) {
    // 更新正在加载更多的动画标识
    dispatch(changePullUpLoading(true));
    // 通过判断是否为加载热门歌手还是分类歌手派发不同的方法
    if (hotFlag) {
      // 重新加载更多热门歌手数据
      dispatch(refreshMoreHotSingerList());
    } else {
      dispatch(refreshMoreSingerList());
    }
  },
  pullDownRefresh(category, alpha) {
    dispatch(changePullDownLoading(true));
    dispatch(changeListOffset(0));
    if (category === "" && alpha === "") {
      // 说明这是热门数据的刷新
      dispatch(getHotSingerList());
    } else {
      // 否则说明含有分类和字母分类的数据刷新
      dispatch(getSingerList());
    }
  }
})
export default connect(mapStateToProps, mapDispatchTProps)(React.memo(Singers));