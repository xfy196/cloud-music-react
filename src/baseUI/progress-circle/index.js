import React from 'react'
import Styled from "styled-components"
import style from "assets/global-style"

const CircleWrapper = Styled.div`
  position : relative;
  display: flex;
  align-items: center;
  circle {
    stroke-width: 8px;
    transform-origin: center;
    &.progress-background{
      transform: scale(0.9);
      stroke: ${style["theme-color-shadow"]};
    }
    &.progress-bar{
      transform: scale(0.9) rotate(-90deg);
      stroke: ${style["theme-color"]};
    }
  }
`

function ProgressCircle(props) {

  const { radius, percent } = props;

  // 背景圆的包裹首先我们需要知道圆的周长 单位为人所以乘1
  const dashArray = Math.PI * 100;
  // 通过传入的百分比去计算高亮部分和未高亮部分
  const dashOffset = (1 - percent) * dashArray;
  return (
    <>
      <CircleWrapper>
        <svg width={radius} height={radius} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle className="progress-background" r="50" cx="50" cy="50" fill="transparent" />
          <circle className="progress-bar" r="50" cx="50" cy="50" fill="transparent"
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset} />
        </svg>
        {props.children}
      </CircleWrapper>
    </>
  )
}
export default React.memo(ProgressCircle)