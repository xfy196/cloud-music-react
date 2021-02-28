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
  height: .44rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: ${style["theme-color"]};
  z-index: 10;
  box-shadow: 0 -1px #d44439, 0 1px #d44439;
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