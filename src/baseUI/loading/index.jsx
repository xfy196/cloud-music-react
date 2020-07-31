import React from 'react'
import Styled, { keyframes } from "styled-components"
import globalStyle from "assets/global-style"
// 动画加载效果
const loading = keyframes`
 0%, 100% {
   transform : scale(0);
 }
 50%{
   transform : scale(1.0)
 }
`
// 动画的盒子
const LoadingWrapper = Styled.div`
  >div {
    position : absolute;
    top: 0; bottom : 0; left : 0; right : 0;
    margin 0 auto;
    width: .6rem;
    height: .6rem;
    opacity : 0.6;
    border-radius : 50%;
    background-color: ${globalStyle["theme-color"]};
    animation : ${loading} 1.4s infinite ease-in
  }
`
function Loading() {
  return (
    <LoadingWrapper>
      <div></div>
      <div></div>
    </LoadingWrapper>
  )
}
export default React.memo(Loading);