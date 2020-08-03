import styled from "styled-components"

export const SliderContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: auto;
  background: white;
`
export const Swipe = styled.div`
  width : 3.67rem;
  height: 1.6rem;
  margin: 0 auto;
  border-radius: .06rem;
  div{
    border-radius : .06rem;
  }
  img{
    height: 1.6rem;
    border-radius : .06rem
  }
  .slider-decorator-0{
    bottom : .1rem !important;
  }
`
export const Before = styled.div`
  position: absolute;
  top: -3rem;
  height: 4rem;
  width: 100%;
  background: #d44439;
`