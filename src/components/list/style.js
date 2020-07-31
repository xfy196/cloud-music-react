import Styled from "styled-components"
import style from 'assets/global-style';

export const ListWrapper = Styled.div`
  max-width: 100%;
  .title{
    font-weight: 700;
    padding-left: .06rem;
    font-size: .14rem;
    line-height: .6rem; 
    color: ${style["font-color"]};
  }
`
export const List = Styled.div`
  width: 100%;
  display : flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  &:after {
    content : "",
    flex: auto
  }
`
export const ListItem = Styled.div`
   position: relative;
  width: 32%;
  .decorate {
    z-index: 1;
    position: absolute;
    top: 0;
    width: 100%;
    height: .35rem;
    border-radius: .03rem;
    background: linear-gradient(hsla(0,0%,43%,.4),hsla(0,0%,100%,0));
  }
  .img_wrapper{
    position: relative;
    height: 0;
    padding-bottom: 100%;
    .play_count {
      z-index: 1;
      position: absolute;
      right: .02rem;
      top: .02rem;
      font-size: ${style["font-size-s"]};
      line-height: .15rem;
      color: ${style["font-color-light"]};
      .play{
        vertical-align: top;
      }
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: .03rem;
    }
  }
  .desc {
      overflow: hidden;
      margin-top: .02rem;
      padding: 0 .02rem;
      height: .5rem;
      text-align: left;
      font-size: ${style["font-size-s"]};
      line-height: 1.4;
      color: ${style["font-color-desc"]};
    }
`