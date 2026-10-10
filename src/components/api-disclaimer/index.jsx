import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled, { keyframes } from "styled-components";
import style from "assets/global-style";

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const zoomIn = keyframes`
  0% { transform: scale(0); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  background-color: ${style["background-color-shadow"]};
  &.disclaimer-fade-enter-active,
  &.disclaimer-fade-appear-active {
    animation: ${fadeIn} 0.3s;
    .disclaimer_content {
      animation: ${zoomIn} 0.3s;
    }
  }
  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 100;
    .disclaimer_content {
      width: 2.7rem;
      border-radius: 0.13rem;
      background-color: ${style["highlight-background-color"]};
      .title {
        padding: 0.19rem 0.15rem 0;
        text-align: center;
        font-size: ${style["font-size-l"]};
        font-weight: 500;
        color: ${style["font-color-desc"]};
      }
      .text {
        padding: 0.12rem 0.15rem 0.19rem;
        line-height: 0.22rem;
        text-align: center;
        font-size: ${style["font-size-m"]};
        color: ${style["font-color-desc-v2"]};
      }
      .operate_btn {
        line-height: 0.22rem;
        padding: 0.1rem 0;
        border-top: 1px solid ${style["border-color"]};
        text-align: center;
        font-size: ${style["font-size-l"]};
        font-weight: 500;
        color: ${style["theme-color"]};
      }
    }
  }
`;

function ApiDisclaimer() {
  const [show, setShow] = useState(true);
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      timeout={300}
      appear
      in={show}
      classNames="disclaimer-fade"
      nodeRef={nodeRef}
      unmountOnExit
    >
      <Wrapper ref={nodeRef} onClick={(e) => e.stopPropagation()}>
        <div>
          <div className="disclaimer_content">
            <p className="title">温馨提示</p>
            <p className="text">
              API 接口服务只提供参考学习，切勿商用，一切后果请自行负责。
            </p>
            <div className="operate_btn" onClick={() => setShow(false)}>
              我知道了
            </div>
          </div>
        </div>
      </Wrapper>
    </CSSTransition>
  );
}

export default React.memo(ApiDisclaimer);
