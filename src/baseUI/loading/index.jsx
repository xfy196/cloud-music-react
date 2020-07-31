import React from 'react'
import Styled from "styled-components"
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
  
`
function Loading() {
  return (
    <div>
      
    </div>
  )
}
export default React.memo(Loading);