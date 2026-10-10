import styled, { keyframes } from "styled-components";
import style from "assets/global-style";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 0.14rem, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const MvDetailStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  overflow: hidden;
  background:
    radial-gradient(100% 50% at 50% 0%, rgba(20, 35, 55, 0.08), transparent 60%),
    linear-gradient(180deg, #eef1f5 0%, #e4e8ee 100%);
  transform-origin: right bottom;

  > header {
    color: #f1f1f1;
  }

  .stage {
    height: 100%;
    padding-top: 0.44rem;
    box-sizing: border-box;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .cinema {
    position: relative;
    background: #0d1016;
    box-shadow: 0 0.08rem 0.24rem rgba(10, 16, 24, 0.28);
  }

  .cinema-frame {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #000;
    overflow: hidden;
  }

  .video {
    width: 100%;
    height: 100%;

    .video-js {
      width: 100%;
      height: 100%;
      font-family: "DIN Alternate", "PingFang SC", "Hiragino Sans GB",
        "Microsoft YaHei", sans-serif;
    }

    .vjs-poster {
      background-size: cover;
      background-position: center;
    }

    .vjs-big-play-button {
      top: 50%;
      left: 50%;
      width: 0.56rem !important;
      height: 0.56rem !important;
      margin: -0.28rem 0 0 -0.28rem;
      padding: 0;
      border: none;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.94);
      line-height: 0;
      font-size: 0;

      .vjs-icon-placeholder {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .vjs-icon-placeholder::before {
        content: "";
        position: static !important;
        top: auto !important;
        left: auto !important;
        width: 0 !important;
        height: 0 !important;
        margin: 0 0 0 0.03rem;
        border-style: solid;
        border-width: 0.09rem 0 0.09rem 0.14rem;
        border-color: transparent transparent transparent ${style["theme-color"]};
        line-height: 0;
        text-align: left;
      }
    }

    .vjs-control-bar {
      background: linear-gradient(
        180deg,
        transparent,
        rgba(8, 10, 14, 0.78)
      );
      height: 0.4rem;
    }

    .vjs-play-progress,
    .vjs-volume-level {
      background-color: ${style["theme-color"]};
    }

    .vjs-slider {
      background: rgba(255, 255, 255, 0.22);
    }
  }

  .sheet {
    margin: -0.08rem 0.12rem 0.24rem;
    padding: 0.18rem 0.16rem 0.22rem;
    border-radius: 0.14rem;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 0.06rem 0.18rem rgba(20, 30, 40, 0.08);
    position: relative;
    z-index: 2;
    animation: ${fadeUp} 0.45s ease both;
  }

  .eyebrow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.08rem;
    margin-bottom: 0.1rem;
  }

  .eyebrow-label {
    font-size: ${style["font-size-ss"]};
    letter-spacing: 0.18em;
    color: ${style["theme-color"]};
    font-weight: 700;
  }

  .eyebrow-date {
    font-size: ${style["font-size-ss"]};
    color: ${style["font-color-desc-v2"]};
    letter-spacing: 0.04em;
  }

  .mv-title {
    margin: 0;
    font-family: "DIN Alternate", "Futura", "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", sans-serif;
    font-size: 0.2rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: 0.03em;
    color: ${style["font-color-desc"]};
  }

  .artist-row {
    display: flex;
    align-items: center;
    gap: 0.08rem;
    margin-top: 0.1rem;
  }

  .artist-avatar {
    width: 0.28rem;
    height: 0.28rem;
    border-radius: 50%;
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.35), transparent 50%),
      ${style["theme-color"]};
    flex-shrink: 0;
  }

  .artist-name {
    font-size: ${style["font-size-s"]};
    color: #666a70;
    letter-spacing: 0.04em;
    ${style.noWrap()}
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.08rem;
    margin-top: 0.16rem;
    padding-top: 0.14rem;
    border-top: 1px solid rgba(30, 40, 50, 0.08);
  }

  .stat {
    text-align: center;
    animation: ${fadeUp} 0.45s ease both;
    animation-delay: var(--stagger, 0ms);
  }

  .stat-value {
    display: block;
    font-family: "DIN Alternate", "Futura", "PingFang SC", sans-serif;
    font-size: ${style["font-size-l"]};
    font-weight: 700;
    color: ${style["font-color-desc"]};
    letter-spacing: 0.02em;
    line-height: 1.2;
  }

  .stat-label {
    display: block;
    margin-top: 0.04rem;
    font-size: ${style["font-size-ss"]};
    color: ${style["font-color-desc-v2"]};
    letter-spacing: 0.12em;
  }

  .desc-block {
    margin-top: 0.16rem;
    padding-top: 0.14rem;
    border-top: 1px solid rgba(30, 40, 50, 0.08);
    animation: ${fadeUp} 0.5s ease both;
    animation-delay: 120ms;
  }

  .desc-label {
    margin: 0 0 0.08rem;
    font-size: ${style["font-size-ss"]};
    letter-spacing: 0.16em;
    color: ${style["font-color-desc-v2"]};
  }

  .desc-text {
    margin: 0;
    font-size: ${style["font-size-s"]};
    line-height: 1.7;
    color: #5a5f66;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .empty-desc {
    margin-top: 0.16rem;
    padding: 0.14rem 0 0.02rem;
    text-align: center;
    font-size: ${style["font-size-ss"]};
    color: ${style["font-color-desc-v2"]};
    letter-spacing: 0.14em;
  }

  &.fly-enter,
  &.fly-appear {
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
  &.fly-enter-active,
  &.fly-appear-active {
    transition: transform 0.3s;
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit {
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit-active {
    transition: transform 0.3s;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
`;
