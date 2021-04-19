import Styled from "styled-components"
import style from "assets/global-style"

export const SongList = Styled.div`
  background : #fff;
  opacity: 0.98;
  border-top-left-radius : .1rem;
  border-top-right-radius : .1rem;
  .first_line {
    display : flex;
    box-sizing: border-box;
    padding: .1rem 0;
    margin-left: .1rem;
    position: relative;
    justify-content: space-between;
    border-bottom-style: solid;
    border-bottom-color: ${style["border-color"]};
    .play_all {
      display: inline-block;
      line-height: .24rem;
      color: ${style["font-color-desc"]};
      i{
        font-size : .24rem;
        margin-right: .1rem;
        vertical-align: top;
      }
      >span{
        vertical-align : top;
        font-size : .16rem;
      }
      .sum {
        font-size: .12rem;
        color: ${style["font-color-desc-v2"]};
      }
    }
    .add_list {
      display : flex;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 1.3rem;
      line-height: .34rem;
      background: ${style["theme-color"]};
      color: ${style["font-color-light"]};
      font-size: 0;
      border-radius: .03rem;
      vertical-align: top;
      i{
        vertical-align: top;
        font-size: .1rem;
        margin: 0 .05rem 0 .1rem;
      }
      span {
        font-size: .14rem;
        line-height: .34rem;
      }
    }
  }
`
export const SongItem = Styled.ul`
  >li {
    display : flex;
    align-items : center;
    height : .6rem;
    .index {
      font-size : .16rem;
      flex-basis: .6rem;
      width: .60rem;
      height: .60rem;
      line-height: .60rem;
      text-align: center;
    }
    .info {
      box-sizing : border-box;
      flex: 1;
      height : 100%;
      display :flex;
      flex-direction : column;
      padding : .05rem 0;
      justify-content : space-around;
      border-bottom-style : solid;
      border-bottom-color : ${style["border-color"]};
      text-overflow: ellipsis;
      overflow : hidden;
      white-space : nowrap; 
      >span{
        text-overflow : ellipsis;
        overflow: hidden;
        white-space : nowrap;
        display: flex;
        align-items: center;
        line-height: 1;
        flex: 1;
        &:first-child {
          font-size : .16rem;
          color : ${style["font-color-desc"]};
        }
        &:last-child {
          font-size : .12rem;
          color : ${style["font-color-desc-v2"]};
        }
      }
    }
  }
`