import React, { useCallback, useEffect, useRef, useState } from 'react'
import { connect } from "react-redux"
import { CSSTransition } from "react-transition-group"
import { MvDetailStyled } from "./style"
import Header from "baseUI/header"
import { getMvDetail } from './store/actionCreator'

function MvDetail(props) {
    const { match, mvDetail: immuableMvDetail, url: immuableUrl } = props;
    let mvDetail = immuableMvDetail.toJS()
    let url = immuableUrl.toJS()
    const { getMvDetailDispatch } = props;
    const [showStatus, setShowStatus] = useState(true)
    const headerRef = useRef()
    const handleBack = useCallback(() => {
        setShowStatus(false)
    })

    /**
     * 第一次进入需要请求获取mv详情的接口
     */
    useEffect(() => {
        getMvDetailDispatch(match.params.id)
    }, [match.params.id])
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
                <>
                    <Header
                        handleClick={handleBack}
                        title={mvDetail.data.name}
                        ref={headerRef}
                    ></Header>
                    <div className="mvDetail">
                        <video controls src={url.data.url}></video>
                        <div className="mvInfo">
                            <span className="mvName">{mvDetail.data.name}</span>
                            <span className="artistName">{mvDetail.data.artistName}</span>
                        </div>
                    </div>
                </>
            </MvDetailStyled>
        </CSSTransition>
    )
}
const mapStateToProps = state => ({
    mvDetail: state.getIn(["mvDetail", "mvDetail"]),
    url: state.getIn(["mvDetail", "url"])
})
const mapStateToDispatch = (dispatch) => ({
    getMvDetailDispatch(id) {
        dispatch(getMvDetail(id))
    }
})
export default connect(mapStateToProps, mapStateToDispatch)(React.memo(MvDetail))