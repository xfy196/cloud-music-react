import React, { useCallback, useEffect } from 'react'
import { connect } from "react-redux"
import { List, Button } from "antd-mobile"
import { ListContainer } from "./style"
import { getMvList, changeLoading, changePullUpLoding, getMvLoadingMore, setOffset } from "./store/actionCreator"
import {renderRoutes} from "react-router-config"
import Scroll from "baseUI/scroll"

const Item = List.Item
/**
 * 推荐MV的组件
 * @returns 
 */
function MV(props) {

    const { area, mvList, pullUpLoading, pullDownLoading, count, hasMore, offset, limit, history } = props
    const { getMvListDispatch, changeLoadingDispatch, changePullUpLoadingDispatch, setOffsetDispatch, getMvLoadingMoreDispatch } = props;
    useEffect(() => {
        getMvListDispatch(area)
    }, [])
    /**
     * 上拉
     */
    const handlePullUp = useCallback(() => {

        if (!pullUpLoading) {

            setOffsetDispatch(offset + limit)
            changePullUpLoadingDispatch(true)
            getMvLoadingMoreDispatch(area, offset + limit, limit)
        }

    })
    /**
     * 下拉
     */
    const handlePullDown = useCallback(() => {
        setOffsetDispatch(0)
        changeLoadingDispatch(true)
        getMvListDispatch(area)
    })
    return (
        <>
        <ListContainer>
            <Scroll
                pullUp={handlePullUp}
                pullDown={handlePullDown}
                pullDownLoading={pullDownLoading}
            >
                <List className="mvList" renderHeader={() => area}>
                    {
                        mvList.map(item => {
                            return (
                                <Item
                                onClick={() => {
                                    history.push(`/mv/${item.id}`)
                                }}
                                    arrow="horizontal"
                                    wrap={true}
                                    multipleLine={true}
                                    extra={
                                        <div className="mvInfo">

                                            <span className="name">{item.name}</span>
                                        </div>
                                    }
                                    thumb={
                                        <div className="img_wrapper">
                                            <span className="playCount">
                                                <i className="iconfont play">&#xe885;</i>
                                                <span>{item.playCount}</span>
                                            </span>
                                            <img src={item.cover} alt="" />
                                        </div>
                                    }
                                    key={item.id}>

                                </Item>
                            )
                        })
                    }

                    {
                        hasMore ? <Button onClick={handlePullUp} activeStyle={false} loading={pullUpLoading} className="moreBtn" size="small" inline type="primary">加载更多</Button> : ""

                    }
                </List>
            </Scroll>
        </ListContainer>
        {renderRoutes(props.route.routes)}
        </>
    )
}
const mapStateToProps = state => ({
    area: state.getIn(["mv", "area"]),
    mvList: state.getIn(["mv", "mvList"]),
    pullDownLoading: state.getIn(["mv", "pullDownLoading"]),
    pullUpLoading: state.getIn(["mv", "pullUpLoading"]),
    hasMore: state.getIn(["mv", "hasMore"]),
    count: state.getIn(["mv", "count"]),
    offset: state.getIn(["mv", "offset"]),
    limit: state.getIn(["mv", "limit"])
})
const mapStateToDispatch = (dispatch) => ({
    getMvListDispatch(area) {
        dispatch(getMvList(area))
    },
    // 改变下拉刷新列表数据
    changeLoadingDispatch(data) {
        dispatch(changeLoading(data))
    },
    changePullUpLoadingDispatch(data) {
        dispatch(changePullUpLoding(data))
    },
    getMvLoadingMoreDispatch(area, offset, limit) {
        dispatch(getMvLoadingMore(area, offset, limit))
    },
    setOffsetDispatch(offset) {
        dispatch(setOffset(offset))
    }
})

export default connect(mapStateToProps, mapStateToDispatch)(React.memo(MV))
