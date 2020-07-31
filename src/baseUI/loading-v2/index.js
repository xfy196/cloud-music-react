import React from 'react'
import Styled, { keyframes } from "styled-components"
import globalStyle from "assets/global-style"
// 动画加载效果
const dance = keyframes`
 0%, 40%, 100% {
   transform : scaleY(0.4);
   transform-origin : center bottom;
 }
 20%{
   transform : scaleY(1.0)
 }
`
// 动画的盒子
const Loading = Styled.div`
  height: .1rem;
  width: 100%;
  margin : auto;
  text-align: center;
  font-size : .1rem;
  >div{
    display : inline-block;
    background-color : ${globalStyle["theme-color"]};
    height: 100%;
    width: .01rem;
    margin-right : .02rem;
    animation : ${dance} 1s infinite
  }
  >div:nth-child(2){
    animation-delay : -.4s;
  }
  >div:nth-child(3){
    animation-delay : -.6s;
  }
  >div:nth-child(4){
    animation-delay : -.4s;
  }
  >div:nth-child(5){
    animation-delay : -.2s;
  }
`
function LoadingV2() {
  return (
    <Loading>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <span>拼命加载中...</span>
    </Loading>
  )
}
export default React.memo(LoadingV2);