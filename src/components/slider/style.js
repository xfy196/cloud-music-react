import styled from "styled-components"
import globalStyle from "assets/global-style"
export const SliderContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: auto;
`
export const Swipe = styled.div`
  position: relative;
  width : 3.67rem;
  height: 1.6rem;
  margin: 0 auto;
  border-radius: .06rem;
  overflow: hidden;
  img{
    width: 100%;
    height: 1.6rem;
    border-radius : .06rem;
    vertical-align: top;
    object-fit: cover;
  }
`

export const SlideTrack = styled.div`
  display: flex;
  height: 100%;
  transform: translate3d(${(props) => -props.$index * 100}%, 0, 0);
  transition: transform 0.35s ease;
`

export const SlideItem = styled.div`
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`

export const Dots = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: .1rem;
  display: flex;
  justify-content: center;
  gap: .06rem;
  z-index: 2;
`

export const Dot = styled.span`
  width: .06rem;
  height: .06rem;
  border-radius: 50%;
  background: ${(props) =>
    props.$active ? globalStyle["theme-color"] : "rgba(0, 0, 0, 0.2)"};
  cursor: pointer;
`

export const Before = styled.div`
  position: absolute;
  top: -3rem;
  height: 4rem;
  width: 100%;
  background: ${globalStyle["theme-color"]};
`
