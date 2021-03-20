import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { List } from "antd-mobile"
import { ListContainer } from "./style"
import { getMvList } from "./store/actionCreator"
import Scroll from "baseUI/scroll"

const Item = List.Item
/**
 * 推荐MV的组件
 * @returns 
 */
function MV(props) {

    const { area, mvList, loading, count, hasMore } = props
    const { getMvListDispatch } = props;
    useEffect(() => {
        getMvListDispatch()
    }, [])
    return (
        <ListContainer>
            <Scroll>
                <List renderHeader={() => area}>
                    {
                        mvList.map(item => {
                            return (
                                <Item
                                    wrap={true}
                                    multipleLine={true}
                                    extra={
                                        <div className="mvInfo">
                                            <span className="playCount">
                                                <i className="iconfont play">&#xe885;</i>
                                                <span>{item.playCount}</span>
                                            </span>
                                            <span className="name">{item.name}</span>
                                        </div>
                                    }
                                    thumb={item.cover}
                                    key={item.id}>

                                </Item>
                            )
                        })
                    }

                </List>
            </Scroll>
        </ListContainer>
    )
}
const mapStateToProps = state => ({
    area: state.getIn(["mv", "area"]),
    mvList: state.getIn(["mv", "mvList"]),
    loading: state.getIn(["mv", "loading"]),
    hasMore: state.getIn(["mv", "hasMore"]),
    count: state.getIn(["mv", "count"])
})
const mapStateToDispatch = (dispatch) => ({
    getMvListDispatch(area) {
        dispatch(getMvList(area))
    }
})

export default connect(mapStateToProps, mapStateToDispatch)(React.memo(MV))
