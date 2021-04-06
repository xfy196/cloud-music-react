import styled from "styled-components"

export const MvDetailStyled = styled.div`
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
  >header{
      color: inherit;
  }
  .mvDetail{
      padding-top: 0.49rem;
      video{
          width: 100%;
          height: auto;
      }
      .mvInfo{
          display: flex;
          padding: 0 .1rem;
          flex-direction: column;
          .mvName {
              color: #000;
              font-weight: 600;
              font-size: 14px;
          }
          .artistName{
              font-size: 12px;
              color: #666;
              margin-top: .03rem;
          }
      }
  }
  &.fly-enter, &.fly-appear{
    transform: rotateZ(30deg) translate3d(100%, 0, 0)
  }
  &.fly-enter-active, &.fly-appear-active{
      transition: transform 0.3s;
      transform: rotateZ(0deg) translate3d(0, 0, 0)
  }
  &.fly-exit{
      transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit-active{
   transition: transform 0.3s;
   transform: rotateZ(30deg) translate3d(100%, 0, 0)   
  }
`