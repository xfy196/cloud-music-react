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
  height: .6rem;
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
    flex : 0 0 .4rem;
    width: .4rem;
    height : .4rem;
    padding : 0 .1rem 0 .2rem;
    box-sizing : content-box;
    .imgWrapper {
      width: 100%;
      height: 100%;
      img {
        width: .4rem;
        height : .4rem;
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
    line-height : .2rem;
    overflow: hidden;
    .name {
      margin-bottom: .02rem;
      font-size : ${style["font-size-s"]};
      color : ${style["font-size-desc-v2"]};
      ${style["nowrap"]};
    }
    .desc {
      font-size: ${style["font-size-s"]};
      color: ${style["font-color-desc-v2"]};
      ${style.noWrap()};
    }
  }
  .control {
    flex : 0 0 .3rem;
    padding : 0 .1rem;
    .iconfont, .icon-playlist {
      font-size : .3rem;
      color : ${style["theme-color"]}; 
    }
    .icon-mini {
      font-size : .16rem;
      position : absolute;
      left: .08rem;
      top: .08rem;
      &.icon-play {
        left : .09rem;
      }
    }
  }
`