import Styled from "styled-components"
import style from "assets/global-style"
export const Container = Styled.div`
  position: fixed;
  top: .94rem;
  bottom: ${props => props.play > 0 ? ".6rem" : 0};
  width: 100%;
  .offical,.global {
    margin: .1rem .05rem;
    padding-top : .15rem;
    font-weight: 700;
    font-size: ${style["font-size-m"]};
    color: ${style["font-color-desc"]};
  }
`
export const List = Styled.ul`
  margin-top : .1rem;
  display : ${props => props.globalRank ? "flex" : ""};
  padding : 0 .05rem;
  flex-direction : row;
  flex-wrap : wrap;
  background: ${style["background-color"]};
  justify-content : space-between;
  &::after{
    content:"";
    display:block;
    width: 1.2rem
  }
`
export const ListItem = Styled.li`
/* 通过判断是否存在歌曲信息设置是否为弹性盒子 */
  display : ${props => props.tracks.length ? "flex" : ""};
  padding .03rem 0;
  border-bottom : 1px solid ${style["border-color"]};
  .img_wrapper {
    width:  ${props => props.tracks.length ? "1rem" : "1.2rem"};
    height: ${props => props.tracks.length ? "1rem" : "1.2rem"};
    position : relative;
    img {
      width: 100%;
      height: 100%;
      border-radius : .03rem;
    }
    .decorate {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: .35rem;
      border-radius: .03rem;
      background: linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,43%,.4));
    }
    .update_frequecy{
      position : absolute;
      left: .07rem;
      bottom: .07rem;
      font-size: ${style["font-size-ss"]};
      color: ${style["font-color-light"]};
    }
  }
`
export const SongList = Styled.ul`
  display: flex;
  flex : 1;
  padding : .1rem .1rem;
  flex-direction : column;
  justify-content: space-around;
  li {
    font-size: .12rem;
    color: grey;
  }
`