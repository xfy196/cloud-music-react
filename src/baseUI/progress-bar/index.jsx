import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from "styled-components"
import style from "assets/global-style"
const ProgressBarWrapper = styled.div`
    height: 30px;
    .bar-inner{
        position: relative;
        top: 13px;
        height: 4px;
        background-color: rgba(0, 0, 0, 0.3);
        .progress{
           position: absolute;
           height: 100%;
            background: ${style["theme-color"]};
        }
        .progress-btn-wrapper{
            position: absolute;
            left: -8px;
            top: -13px;
            width: 30px;
            height: 30px;
            .progress-btn{
                position: relative;
                top: 7px;
                left: 7px;
                box-sizing: border-box;
                width: 16px;
                height: 16px;
                border: 3px solid ${style["border-color"]};
                border-radius: 50%;
                background: ${style["theme-color"]};
            }
        }
    }
`

function ProgressBar(props) {

    const {percent, onProgressChange} = props;

    const progressBar = useRef()
    
    const progress = useRef()

    const progressBtn = useRef()
    
    const progressBtnWidth = 16;

    const [touch, setTouch] = useState({})

    // 监听percent的变化
    useEffect(() => {
        // 进度条大于等于0 或者小于等于1同时触摸的未开启的时候
        if(percent >= 0 && percent <=1 && !touch.initiated){
            // 真个bar的宽度
            const barWidth = progressBar.current.clientWidth
            // 偏移的宽度
            const offsetWidth = percent * barWidth
            progress.current.style.width = `${offsetWidth}px`
            // 设置bar的按钮的位置
            progressBtn.current.style.transform = `translate3d(${offsetWidth}px, 0, 0)`
        }
    }, [percent])

    const _offset = useCallback((offsetWidth) => {
        progress.current.style.width = `${offsetWidth}px`
        progressBtn.current.style.transform = `translate3d(${offsetWidth}px, 0, 0)`
    })

    const _changePercent = useCallback(() => {
        const barWidth = progressBar.current.clientWidth
        const curPercent = progress.current.clientWidth / barWidth;
        onProgressChange(curPercent)
    })
    // 进度条点击的事件
    const progressClick = useCallback((e) => {
        const rect = progressBar.current.getBoundingClientRect()
        // 计算出便宜的宽度
        const offsetWidth = e.pageX - rect.left
        // 设置进度条
        _offset(offsetWidth)
        // 改变进度
        _changePercent()
    })
    // 进度条触摸开始
    const progressTouchStart = useCallback((e) => {
        const startTouch = {}
        startTouch.initiated = true;
        startTouch.startX = e.touches[0].pageX
        startTouch.left = progress.current.clientWidth
        setTouch(startTouch)
    })

    // 进度条触摸移动开始
    const progressTouchMove = useCallback((e) => {
        // 如果触摸没有开始直接结束移动
        if(!touch.initiated){
            return;
        }
        // 计算移动的x的位置
        const detailX = e.touches[0].pageX - touch.startX
        // 计算当前进度条真实的宽度
        const barWidth = progressBar.current.clientWidth - progressBtnWidth
        // 计算进度条的偏移量
        // 取最小值，进行边界计算
        const offsetWidth = Math.min(Math.max(0, detailX + touch.left), barWidth)
        _offset(offsetWidth)
    })

    // 进度条触摸结束
    const progressTouchEnd = useCallback((e) => {
        // 设置标识阀为false
        touch.initiated = false
        setTouch({
            ...touch
        })
        _changePercent()
    })
    return (
        <ProgressBarWrapper>
            <div className="bar-inner" ref={progressBar} onClick={progressClick}>
                <div className="progress" ref={progress}></div>
                <div className="progress-btn-wrapper"
                onTouchStart={progressTouchStart}
                onTouchMove={progressTouchMove}
                onTouchEnd={progressTouchEnd}
                ref={progressBtn}>
                    <div className="progress-btn"></div>
                </div>
            </div>
        </ProgressBarWrapper>
    )
}
export default React.memo(ProgressBar)