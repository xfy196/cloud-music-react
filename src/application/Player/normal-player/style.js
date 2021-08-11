import styled, {keyframes} from "styled-components"
import style from "assets/global-style"
import needle from "./needle.png"
import disc from "./disc.png"

const rotate = keyframes`
    0%{
        transform: rotate(0)
    }
    100%{
        transform: rotate(360deg)
    }
`
export const NormalPlayerContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 150;
    background: ${style["background-color"]};
    .background{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.6;
        filter: blur(20px);
        &.layer{
            background: ${style["font-color-desc"]};
            opacity: 0.3;
            filter: none;
        }
    }
    &.normal-enter,
    &.normal-exit-done{
        .top{
            transform: translate3d(0, -100px, 0); 
        }
        .bottom{
            transform: translate3d(0, 100px, 0)
        }
    }
    &.normal-enter-active,
    &.normal-exit-active{
        .top,
        .bottom{
            transform: translate3d(0, 0, 0);
            transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32);
        }
        opacity: 1;
        transition: all 0.4s;
    }
    &.normal-exit-active{
        opacity: 0;
    }
`
export const Top = styled.div`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 8%;
    margin-bottom: 15px;
    border: 1px solid ${style["border-color-v2"]};
    padding-bottom: 5px;
    .back{
        margin-left: 5px;
        z-index: 50;
        .iconfont {
            display: block;
            padding: 9px;
            font-size: 24px;
            color: ${style["font-color-desc"]};
            font-weight: bold;
            transform: rotate(90deg)
        }
    }
    .text{
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-top: 10px;
    }
    .title{
        line-height: 25px;
        font-size: ${style["font-size-l"]};
        color: ${style["font-color-desc"]};
        ${style.noWrap()}
    }
    .subTitle{
        line-height: 25px;
        font-size: ${style["font-size-m"]};
        color: ${style["font-color-desc"]};
        ${style.noWrap()}
    }
`

export const Middle = styled.div`
    position: fixed;
    width: 100%;
    top: 8%;
    bottom: 170px;
    white-space: nowrap;
    font-size: 0;
    overflow: hidden;
    .fade-enter{
        opacity: 0;
    }
    .fade-enter-active{
        opacity: 1;
        transition: all 0.4s;
    }
    .fade-enter-done{
        transition: none;
    }
    .fade-exit-active{
        opacity: 0;
    }
    .fade-exit-done{
        opacity: 0;
    }
`

export const CDWrapper = styled.div`
    margin: auto;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    .needle{
        position: absolute;
        top: -6.67vw;
        left: 48vw;
        width: 25vw;
        height: 40vw;
        z-index: 100;
        background-image: url(${needle});
        ${style.bgFull()};
        transform-origin: 4.5vw 4.5vw;
        transition: all 0.3s;
        transform: rotate(0);
        &.pause{
        transform: rotate(-30deg);
        }
    }
    .cd{
        top: 16%;
        position: absolute;
        width: 70%;
        height: 70vw;
        background-image: url(${disc});
        border: 4px solid ${style["border-color-v2"]};
        border-radius: 50%;
        ${style.bgFull()};
        .image {
            position: absolute;
            left: 0;right: 0;
            top: 0;bottom: 0;
            width: 68%;
            height: 68%;
            margin: auto;
            border-radius: 50%;
            }
        .play {
            animation: ${rotate} 20s linear infinite;
            &.pause{
                animation-play-state: paused;
            }
        }
    }
    .playing_lyric{
        position: absolute;
        margin: auto;
        width: 80%;
        top: 95vw;
        font-size: 14px;
        line-height: 20px;
        white-space: normal;
        text-align: center;
        color: rgba(255, 255, 255, 0.5);
    }
`
// 歌词布局
export const LyricContainer = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
`
export const LyricWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    p {
        line-height: 32px;
        color: rgba(255, 255, 255, 0.5);
        white-space: normal;
        font-size: ${style["font-size-l"]};
        z-index: 1000;
        &.current {
            color: #fff;
        }
        &.pure{
            position: relative;
            top: 30vh;
        }
    }
`
// 下方音乐工具栏
export const Bottom = styled.div`
    position: absolute;
    bottom: 50px;
    width: 100%;
`
export const List = styled.div`
    width: 70%;
    margin: auto;
    display: flex;
    align-items: center;
    height: 30px;
    justify-content: space-around;
    overflow: hidden;
    >span:first-of-type{
        display: block;
        flex: 0 0 auto;
        padding: 5px 0;
        color: ${style["font-color-desc-v2"]};
        font-size: ${style["font-size-m"]};
        vertical-align: middle;
    }
`
export const ListItem = styled.div`
    flex: 0 0 auto;
    font-size: ${style["font-size-m"]};
    padding: 5px 5px;
    border-radius: 10px;
    color: ${style["font-color-desc-v2"]};
    &.selected{
        color: ${style["theme-color"]};
        border: 1px solid ${style["theme-color"]};
        opacity: 0.8;
    }
`
export const ProgressWrapper = styled.div`
    width: 80%;
    display: flex;
    align-items:center;
    margin: 0 auto;
    padding: 10px 0;
    .time {
        color: ${style["font-color-desc"]};
        font-size: ${style["font-size-s"]};
        flex: 0 0 30px;
        line-height: 30px;
        width: 30px;
        &.time-l {
        text-align: left;
        }
        &.time-r {
        text-align: right;
        }
    }
    .progress-bar-wrapper{
        flex: 1;
    }
`
export const Operators = styled.div`
    display: flex;
    align-items: center;
    .icon{
        font-weight: 300;
        flex: 1;
        color: ${style["font-color-desc"]};
        &.disable{
            color: ${style["theme-color-shadow"]};
        }
        i{
            font-weight: 300;
            font-size: 30px;
        }
    }
    .i-left{
        text-align: right;
    }
    .i-center{
        text-align: center;
        padding: 0 20px;
        i{
            font-size: 40px;
        }
    }
    .i-right{
        text-align: left;
    }
    .icon-favorite {
        color: ${style["theme-color"]};
    }
`