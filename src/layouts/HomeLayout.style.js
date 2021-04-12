import styled from "styled-components"
import style from "assets/global-style.js"

export const Top = styled.div`
  display : flex;
  justify-content: space-between;
  align-items : center;
  flex-direction: row;
  padding: .05rem .1rem;
  z-index : 2;
  background: ${style["theme-color"]};
  & > span{
    line-height : .4rem;
    color : #f1f1f1;
    font-size : .2rem;
    &.iconfont {
      font-size : .25rem
    }
  }
`
export const Tab = styled.div`
  height: .45rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: ${style["theme-color"]};
  z-index: 10;
  box-shadow: 0 -1px ${style["theme-color"]}, 0 1px ${style["theme-color"]};
  a {
    flex: 1;
    font-size: .14rem;
    color: #e4e4e4;
    &.selected {
      span {
        padding: .03rem 0;
        font-weight: 700;
        color: #f1f1f1;
        border-bottom: .02rem solid #f1f1f1;
      }
    }
  }
`;

export const TabItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const DrawerBox = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  .headerBackground{
    height: 44.44444vw;
    text-align: center;
    line-height: 44.44444vw;
    background-color: var(--THEME);
    opacity: .8;
    background-position: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: ${(props) => {
      return `url(${props.imgUrl})`
    }}
  }
  .skinItem{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: .16rem;
    border-bottom: 1px solid #ccc;
    line-height: .48rem;
    span {
      text-indent: .05rem;
    }
    .rightArrow{
      margin-right: .05rem;
    }
  }
`