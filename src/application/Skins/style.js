import styled, { keyframes } from "styled-components";
import style from "assets/global-style";

const riseIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, .18rem, 0) scale(.96);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

const checkPop = keyframes`
  from {
    opacity: 0;
    transform: scale(.6);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const SkinContainerStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(120% 55% at 100% 0%, rgba(20, 40, 60, 0.05), transparent 50%),
    linear-gradient(180deg, #f3f5f7 0%, #e7ebef 100%);
  &.fly-enter,
  &.fly-appear {
    opacity: 1;
    transform: translate3d(100%, 0, 0);
  }
  &.fly-enter-active,
  &.fly-appear-active {
    opacity: 1;
    transition: all 0.3s;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit-active {
    opacity: 0;
    transition: all 0.3s;
    transform: translate3d(100%, 0, 0);
  }
`;

export const SkinListStyled = styled.div`
  padding-top: calc(0.44rem + 0.12rem);
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  .intro {
    padding: 0.12rem 0.16rem 0.06rem;
  }

  .intro-title {
    margin: 0;
    font-family: "DIN Alternate", "Futura", "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", sans-serif;
    font-size: 0.22rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: ${style["font-color-desc"]};
    line-height: 1.3;
  }

  .intro-desc {
    margin: 0.06rem 0 0;
    font-size: ${style["font-size-s"]};
    color: ${style["font-color-desc-v2"]};
    letter-spacing: 0.02em;
    line-height: 1.5;
  }

  .skins {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.12rem;
    padding: 0.1rem 0.14rem 0.28rem;
  }

  .skin-item {
    position: relative;
    list-style: none;
    border: none;
    padding: 0;
    margin: 0;
    background: #fff;
    border-radius: 0.14rem;
    overflow: hidden;
    box-shadow: 0 0.04rem 0.12rem rgba(30, 30, 30, 0.06);
    transform-origin: center;
    animation: ${riseIn} 0.45s ease both;
    animation-delay: var(--stagger, 0ms);
    transition: transform 0.18s ease, box-shadow 0.18s ease;
    -webkit-tap-highlight-color: transparent;

    &:active {
      transform: scale(0.97);
    }

    &.is-active {
      box-shadow:
        0 0 0 0.02rem var(--skin-color),
        0 0.06rem 0.16rem rgba(30, 30, 30, 0.1);
    }
  }

  .swatch {
    position: relative;
    height: 0;
    padding-bottom: 72%;
    background:
      linear-gradient(
        145deg,
        rgba(255, 255, 255, 0.22) 0%,
        transparent 42%,
        rgba(0, 0, 0, 0.16) 100%
      ),
      var(--skin-color);
    overflow: hidden;
  }

  .swatch-ring {
    position: absolute;
    right: -18%;
    top: -28%;
    width: 78%;
    height: 120%;
    border-radius: 50%;
    border: 0.01rem solid rgba(255, 255, 255, 0.22);
    box-shadow:
      inset 0 0 0 0.08rem rgba(255, 255, 255, 0.06),
      inset 0 0 0 0.16rem rgba(0, 0, 0, 0.05);
    pointer-events: none;
  }

  .swatch-ring::after {
    content: "";
    position: absolute;
    inset: 28%;
    border-radius: 50%;
    border: 0.01rem solid rgba(255, 255, 255, 0.18);
    background: rgba(0, 0, 0, 0.08);
  }

  .swatch-shine {
    position: absolute;
    left: -20%;
    top: 0;
    width: 45%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.18),
      transparent
    );
    transform: skewX(-18deg);
    pointer-events: none;
  }

  .check {
    position: absolute;
    right: 0.08rem;
    bottom: 0.08rem;
    width: 0.24rem;
    height: 0.24rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.96);
    animation: ${checkPop} 0.28s ease both;

    &::after {
      content: "";
      position: absolute;
      left: 0.08rem;
      top: 0.05rem;
      width: 0.05rem;
      height: 0.1rem;
      border: solid var(--skin-color);
      border-width: 0 0.02rem 0.02rem 0;
      transform: rotate(45deg);
    }
  }

  .meta {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.08rem;
    padding: 0.1rem 0.1rem 0.12rem;
  }

  .name {
    font-family: "DIN Alternate", "Futura", "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", sans-serif;
    font-size: ${style["font-size-m"]};
    font-weight: 700;
    color: ${style["font-color-desc"]};
    letter-spacing: 0.04em;
    ${style.noWrap()}
  }

  .tag {
    flex-shrink: 0;
    font-size: ${style["font-size-ss"]};
    color: ${style["font-color-desc-v2"]};
    letter-spacing: 0.12em;
  }
`;
