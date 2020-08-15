import Styled from "styled-components"
import style from "assets/global-style"


export const Container = Styled.div`
  position : fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  overflow : hidden;
  background: #fcfcfd;
  transform-origin: right bottom;
  bottom : ${props => props.play > 0 ? ".6rem" : 0};
  &.fly-enter, &.fly-appear{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  &.fly-enter-active, &.fly-appear-active{
    opacity: 1;
    transition: all .3s;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit{
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit-active{
    opacity: 0;
    transition: all .3s;
    transform: translate3d(100%, 0, 0);
  }
`
export const ShortcutWrapper = Styled.div`
  position : absolute;
  top : .4rem;
  bottom: 0;
  width: 100%;
  display : ${props => props.shows ? "" : "none"};
`
export const HotKey = Styled.div`
  margin : 0 .2rem .2rem .2rem;
  border-color : #ccc;
  border-style : solid;
  .title {
    padding-top: .35rem;
    margin-bottom: .1rem;
    font-size: ${style["font-size-m"]};
    color: #666;
    font-weight : normal;
  }
  .item {
    display : inline-block;
    padding: .1rem .15rem;
    margin: 0 .1rem .06rem 0;
    background: ${style["highlight-background-color"]};
    font-size: ${style["font-size-m"]};
    color: ${style["font-color-desc"]};
    border-color : #d3d4da;
    &:before {
      border-radius: .8rem;
    }
  }
`
export const List = Styled.div`
  display : flex;
  margin : auto;
  flex-direction: column;
  overflow: hidden;
  .title {
    margin:.1rem 0 .1rem .1rem;
    color: #666;
    font-size: ${style["font-size-s"]};
  }
`
export const ListItem = Styled.div`
  display : flex;
  box-sizing : border-box;
  flex-direction : row;
  margin : 0 .05rem;
  padding : .05rem 0;
  align-items : center;
  border-bottom: 1px solid ${style["border-color"]};
  .img_container {
    margin-right : .2rem;
    img {
      width : .5rem;
      height : .5rem;
      border-radius : .03rem;
    }
  }
  .name {
    font-weight: 500;
    font-size : ${style["font-size-m"]};
    color : ${style["font-color-desc"]}
  }
`