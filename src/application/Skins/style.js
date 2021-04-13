import styled from "styled-components";

export const SkinContainerStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffffff;
    &.fly-enter, &.fly-appear{
    opacity: 1;
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
export const SkinListStyled = styled.div`
    padding-top: calc(.44rem + 4vw);
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
    .skins{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .skin-item {
            color: #fff;
            flex: 0 0 48vw;
            height: 48vw;
            font-size: .16rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 4vw;
        }
    }
`