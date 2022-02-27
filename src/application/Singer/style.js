import Styled from "styled-components"
import style from "assets/global-style"
export const Container = Styled.div`
  position : fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom : 0;
  z-index: 100;
  width: 100%;
  overflow: hidden;
  background : #f2f3f4;
  transform-origin : right bottom;
  &.fly-enter, &.fly-appear{
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
  &.fly-enter-active, &.fly-appear-active{
    transition: transform .3s;
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit{
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit-active{
    transition: transform .3s;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
`

export const ImgWrapper = Styled.div`
  position : relative;
  width: 100%;
  padding-top : 75%;
  transform-origin: top;
  background: url(${props => props.background});
  background-size: cover;
  z-index: 50;
  .filter {
    position : absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background : rgba(7,17,27,0.3);
  }
`
export const CollectionButton = Styled.div`
  position : fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  box-sizing : border-box;
  width : 1.2rem;
  height : .4rem;
  z-index : 50;
  color : ${style["font-color-light"]};
  background : ${style["theme-color"]};
  border-radius : .2rem;
  text-align : center;
  font-size : 0;
  line-height : .4rem;
  margin-top : -.55rem;
  .iconfont {
    display : inline-block;
    margin-right : .1rem;
    font-size : .12rem;
    vertical-align : .01rem;
  }
  .text {
    display : inline-block;
    font-size : .14rem;
    letter-spacing : .05rem;
  }
`
export const BgLayer = Styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: white;
  border-radius: .1rem;
  z-index: 50;
`
export const SongListWrapper = Styled.div`
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;
  bottom: ${props => props.play ? "60px" : 0};
  right: 0;
  >div{
    position: absolute;
    left: 0;
    width: 100%;
    overflow: visible;
  }
`