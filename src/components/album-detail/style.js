import Styled from "styled-components"
import style from "assets/global-style"

export const TopDesc = Styled.div`
  background-size: 100%;
  padding: .05rem .2rem;
  padding-bottom: .5rem;
  margin-bottom: .2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 2.75rem;
  position: relative;
  .background {
    z-index: -1;
    background: contain;
    background: url(${props => props.background}) left top no-repeat;
    background-position: 0 0;
    background-size: 100% 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(.2rem);
  }
  .img_wrapper{
    width: 1.2rem;
    height : 1.2rem;
    position : relative;
    .decorate{
      position: absolute;
      top: 0;
      width: 100%;
      height: .35rem;
      border-radius: .03rem;
      background: linear-gradient(hsla(0,0%,43%,.4),hsla(0,0%,100%,0));
    }
    img {
      width: 1.20rem;
      height: 1.20rem;
      border-radius: .03rem;
    }
    .play_count {
      position : absolute;
      right: .02rem;
      top: .02rem;
      font-size: .12rem;
      line-height: .15rem;
      color: ${style["font-color-light"]};
      .play {
        vertical-align : top;
      }
    }
  }
  .desc_wrapper{
    display : flex;
    flex-direction: column;
    justify-content : space-around;
    flex : 1;
    height: 1.20rem;
    padding: 0 .1rem;
    .title {
      max-height : .7rem;
      overflow : hidden;
      text-overflow : ellipsis;
      color : ${style["font-color-light"]};
      font-weight : 700;
      line-height : 1.5;
      font-size : .16rem;
    }
    .person {
      display : flex;
      .avatar {
        width: .2rem;
        height: .2rem;
        margin-right : .05rem;
        img {
          width: 100%;
          height: 100%;
          border-radius : 50%;
        }
      }
      .name {
        line-height: .2rem;
        font-size: .14rem;
        color: #bba8a8;
      }
    }
  }
`
export const Menu = Styled.div`
  position : relative;
  display : flex;
  justify-content : space-between;
  box-sizing: border-box;
  padding: 0 .30rem .20rem .30rem;
  margin: -1rem 0 0 0;
  >div {
    display : flex;
    flex-direction: column;
    line-height: .20rem;
    text-align: center;
    font-size: .12rem;
    color: #3b1f1f;
    color: ${style["font-color-light"]};
    z-index: 1000;
    font-weight: 500;
  }
`