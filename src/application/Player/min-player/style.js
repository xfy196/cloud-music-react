import Styled, {keyframes} from "styled-components"
import style from "assets/global-style"

const rotate = keyframes`
  0%{
    transform : rotate(0);
  }
  100%{
    transform : rotate(360deg);
  }
`
export const MiniPlayerContainer = Styled.div`
  position : fixed;
  bottom: 0;
  left: 0;
  display : flex;
  align-items : center;
  z-index : 1000;
  width: 100%;
  height: 60px;
  background : ${style["highlight-background-color"]};
  &.mini-enter {
    transform : translate3d(0,100%,0);
    transition : all 0.4s;
  }
  &.mini-enter-active {
    transform : translate3d(0, 0, 0);
    transition : 0.4s;
  }
  &.mini-exit-active{
    transform : translate3d(0, 100%, 0);
    transition : all 0.4s;
  }
  .icon {
    flex : 0 0 40px;
    width: 40px;
    height : 40px;
    padding : 0 10px 0 20px;
    box-sizing : content-box;
    .imgWrapper {
      width: 100%;
      height: 100%;
      img {
        width: 40px;
        height : 40px;
        border-radius : 50%;
        &.play {
          animation : ${rotate} 10s infinite;
        }
        &.pause {
          animation-play-state : paused;
        }
      }
    }
  }
  .text {
    display : flex;
    flex-direction : column;
    flex : 1;
    justify-content : center;
    line-height : 20px;
    overflow: hidden;
    .name {
      margin-bottom: 2px;
      font-size : 12px;
      color : ${style["font-size-desc-v2"]};
      ${style["nowrap"]};
    }
    .desc {
      font-size: 12px;
      color: ${style["font-color-desc-v2"]};
      ${style.noWrap()};
    }
  }
  .control {
    flex : 0 0 30px;
    padding : 0 10px;
    .iconfont, .icon-playlist {
      font-size : 30px;
      color : ${style["theme-color"]}; 
    }
    .icon-mini {
      font-size : 16px;
      position : absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-45%,-63%, 0)
    }
  }
`