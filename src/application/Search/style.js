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