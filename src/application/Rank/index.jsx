import React, { useEffect } from 'react'
import { Container, List, SongList, ListItem } from "./style"
import Scroll from "baseUI/scroll"
import { connect } from "react-redux"
import { getRankList } from "./store/actionCreator"
import { filterIndex } from "utils"
import Loading from "baseUI/loading"
import EnterLoading from "utils/EnterLoading"
function Rank(props) {
  const { rankList, loading } = props;
  const { getRankListDispatch } = props;
  useEffect(() => {
    if (!rankList.length) {
      getRankListDispatch();
    }
  }, []);
  const renderSongList = (list) => {
    return list.length !== 0 && (
      <SongList>
        {
          list.map((item, index) => (
            <li key={index}>{index + 1}. {item.first} {item.second}</li>
          ))
        }
      </SongList>
    )
  }
  const renderRankList = (list, global) => {
    return (
      <List globalRank={global}>
        {
          list.map(item => (
            <ListItem key={item.id} className="border-bottom" tracks={item.tracks}>
              <div className="img_wrapper">
                <img src={item.coverImgUrl} alt="" />
                <div className="decorate"></div>
                <span className="update_frequecy">{item.updateFrequency}</span>
              </div>
              {renderSongList(item.tracks)}
            </ListItem>
          ))
        }
      </List>
    )
  }

  // 需要对rankList的数据进行一次处理先拿到官方榜的数据需要过滤数据拿到对象的index下标在进行slice
  let globalStartIndex = filterIndex(rankList);
  // 官方榜的数据
  let officalList = rankList.slice(0, globalStartIndex);
  // 全球榜的数据
  let globalList = rankList.slice(globalStartIndex)
  return (
    <Container>
      <Scroll>
        <div>
          <h2 className="offical">官方榜</h2>
          {renderRankList(officalList)}
          <h2 className="global">全球榜</h2>
          {renderRankList(globalList, true)}
          {/* 判断是否载入动画 */}
          {loading ? <EnterLoading><Loading></Loading></EnterLoading> : null}
        </div>
      </Scroll>
    </Container>
  )
}
const mapStateToProps = state => ({
  rankList: state.getIn(["rank", "rankList"]),
  loading: state.getIn(["rank", "loading"])
})
const mapStateToDispatch = (dispatch) => ({
  getRankListDispatch() {
    dispatch(getRankList())
  }
})
export default connect(mapStateToProps, mapStateToDispatch)(React.memo(Rank));
