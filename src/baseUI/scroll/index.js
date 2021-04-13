import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle, useMemo } from "react"
import BScroll from "better-scroll"
import PropTypes from "prop-types"
import Styled from "styled-components"
import { debounce } from "utils/"
import Loading from "../loading"
import Loading2 from "../loading-v2"

const ScrollContainer = Styled.div`
    width: 100%;
    height: 100%;
    overflow : auto
`
const PullUpLoading = Styled.div`
  position: absolute;
  left:0; right:0;
  bottom: .05rem;
  width: .6rem;
  height: .6rem;
  margin: auto;
  z-index: 100;
`

export const PullDownLoading = Styled.div`
  position: absolute;
  left:0; right:0;
  top: 0px;
  height: .3rem;
  margin: auto;
  z-index: 100;
`


const Scroll = forwardRef((props, ref) => {
    /* 可以通过dispatch派发BScroll的对象 然后通过useState拿到这个BScroll对象 */
    const [bScroll, setBScroll] = useState();
    const { direction, click, refresh, pullUpLoading, pullDownLoading, bounceTop, bounceBottom } = props
    const { pullUp, pullDown, onScroll } = props;

    let pullUpDebounce = useMemo(() => {
        return debounce(pullUp, 500)
    }, [pullUp]);

    let pullDownDebounce = useMemo(() => {
        return debounce(pullDown, 500)
    }, [pullDown]);

    const scrollContainerRef = useRef();

    useEffect(() => {
        const scroll = new BScroll(scrollContainerRef.current, {
            scrollX: direction === "horizental",
            scrollY: direction === "vertical",
            probeType: 3,
            click: click,
            bounce: {
                top: bounceTop,
                bottom: bounceBottom
            }
        });
        setBScroll(scroll);
        return () => {
            setBScroll(null);
        }
    }, []);

    useEffect(() => {
        if (!bScroll || !onScroll) return;
        bScroll.on('scroll', onScroll)
        return () => {
            bScroll.off('scroll', onScroll);
        }
    }, [onScroll, bScroll]);

    useEffect(() => {
        if (!bScroll || !pullUp) return;
        const handlePullUp = () => {
            //判断是否滑动到了底部
            if (bScroll.y <= bScroll.maxScrollY + 100) {
                pullUpDebounce();
            }
        };
        bScroll.on('scrollEnd', handlePullUp);
        return () => {
            bScroll.off('scrollEnd', handlePullUp);
        }
    }, [pullUp, pullUpDebounce, bScroll]);

    useEffect(() => {
        if (!bScroll || !pullDown) return;
        const handlePullDown = (pos) => {
            //判断用户的下拉动作
            if (pos.y > 50) {
                pullDownDebounce();
            }
        };
        bScroll.on('touchEnd', handlePullDown);
        return () => {
            bScroll.off('touchEnd', handlePullDown);
        }
    }, [pullDown, pullDownDebounce, bScroll]);


    useEffect(() => {
        if (refresh && bScroll) {
            bScroll.refresh();
        }
    });
    useImperativeHandle(ref, () => ({
        refresh() {
            if (bScroll) {
                bScroll.refresh();
                bScroll.scrollTo(0, 0);
            }
        },
        getBScroll() {
            if (bScroll) {
                return bScroll;
            }
        },
        scrollContainerRef
    }));
    const PullUpDisplayStyle = pullUpLoading ? { display: "" } : { display: "none" };
    const PullDownDisplayStyle = pullDownLoading ? { display: "" } : { display: "none" };
    return (
        <ScrollContainer ref={scrollContainerRef} >
            {props.children}
            {/* 滑到底部加载动画 */}
            <PullUpLoading style={PullUpDisplayStyle}><Loading></Loading></PullUpLoading>
            {/* 顶部下拉刷新动画 */}
            <PullDownLoading style={PullDownDisplayStyle}><Loading2></Loading2></PullDownLoading>
        </ScrollContainer >
    )

});
Scroll.defaultProps = {
    direction: "vertical",
    click: true,
    refresh: true,
    onScroll: null,
    pullUpLoading: false,
    pullDownLoading: false,
    pullUp: null,
    pullDown: null,
    bounceTop: true,
    bounceBottom: true
}
Scroll.propTypes = {
    direction: PropTypes.oneOf(['vertical', 'horizental']),
    refresh: PropTypes.bool,
    onScroll: PropTypes.func,
    pullUp: PropTypes.func,
    pullDown: PropTypes.func,
    pullUpLoading: PropTypes.bool,
    pullDownLoading: PropTypes.bool,
    bounceTop: PropTypes.bool,//是否支持向上吸顶
    bounceBottom: PropTypes.bool//是否支持向下吸顶
};
export default Scroll;