import styled, { keyframes } from "styled-components";
import style from "assets/global-style";

const riseIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 0.12rem, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const ListContainer = styled.div`
  position: fixed;
  top: 0.94rem;
  bottom: ${(props) => (props.play > 0 ? "60px" : 0)};
  width: 100%;
  overflow: hidden;
  background:
    radial-gradient(90% 40% at 100% 0%, rgba(20, 40, 60, 0.05), transparent 55%),
    linear-gradient(180deg, #f2f4f7 0%, #e8ecf1 100%);

  .scroll-content {
    padding: 0.12rem 0.14rem 0.28rem;
    box-sizing: border-box;
  }

  .section-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 0.12rem;
    padding: 0 0.02rem;
  }

  .section-title {
    margin: 0;
    font-family: "DIN Alternate", "Futura", "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", sans-serif;
    font-size: 0.2rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: ${style["font-color-desc"]};
    line-height: 1.2;
  }

  .section-sub {
    font-size: ${style["font-size-ss"]};
    color: ${style["font-color-desc-v2"]};
    letter-spacing: 0.14em;
  }

  .mv-list {
    display: flex;
    flex-direction: column;
    gap: 0.12rem;
  }

  .mv-card {
    display: flex;
    align-items: stretch;
    gap: 0.12rem;
    padding: 0.1rem;
    background: #fff;
    border-radius: 0.12rem;
    box-shadow: 0 0.03rem 0.1rem rgba(20, 30, 40, 0.06);
    animation: ${riseIn} 0.4s ease both;
    animation-delay: var(--stagger, 0ms);
    -webkit-tap-highlight-color: transparent;
    transition: transform 0.18s ease, box-shadow 0.18s ease;

    &:active {
      transform: scale(0.985);
      box-shadow: 0 0.02rem 0.06rem rgba(20, 30, 40, 0.08);
    }
  }

  .poster {
    position: relative;
    flex: 0 0 42%;
    max-width: 1.7rem;
    aspect-ratio: 16 / 10;
    border-radius: 0.08rem;
    overflow: hidden;
    background: #d8dde3;
  }

  .poster-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .poster-shade {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(
        180deg,
        transparent 42%,
        rgba(10, 14, 20, 0.55) 100%
      ),
      linear-gradient(
        90deg,
        rgba(10, 14, 20, 0.08),
        transparent 40%
      );
    pointer-events: none;
  }

  .play-badge {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0.36rem;
    height: 0.36rem;
    margin: -0.18rem 0 0 -0.18rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.92);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0.02rem 0.08rem rgba(0, 0, 0, 0.18);
    pointer-events: none;

    &::after {
      content: "";
      width: 0;
      height: 0;
      margin-left: 0.02rem;
      border-style: solid;
      border-width: 0.06rem 0 0.06rem 0.1rem;
      border-color: transparent transparent transparent ${style["theme-color"]};
    }
  }

  .play-count {
    position: absolute;
    left: 0.06rem;
    bottom: 0.05rem;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: 0.03rem;
    padding: 0.02rem 0.06rem;
    border-radius: 0.04rem;
    background: rgba(8, 10, 14, 0.45);
    color: #f5f5f5;
    font-size: ${style["font-size-ss"]};
    line-height: 1.4;
    letter-spacing: 0.02em;

    .iconfont {
      font-size: 0.1rem;
      line-height: 1;
    }
  }

  .mv-body {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 0.06rem;
    padding: 0.02rem 0.02rem 0.02rem 0;
  }

  .mv-copy {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.06rem;
  }

  .mv-name {
    margin: 0;
    font-family: "DIN Alternate", "Futura", "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", sans-serif;
    font-size: ${style["font-size-m"]};
    font-weight: 700;
    color: ${style["font-color-desc"]};
    letter-spacing: 0.02em;
    line-height: 1.35;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .mv-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.06rem 0.08rem;
    font-size: ${style["font-size-ss"]};
    color: ${style["font-color-desc-v2"]};
    letter-spacing: 0.04em;
  }

  .mv-artist {
    max-width: 100%;
    ${style.noWrap()}
  }

  .mv-duration {
    position: relative;
    padding-left: 0.08rem;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      width: 0.03rem;
      height: 0.03rem;
      margin-top: -0.015rem;
      border-radius: 50%;
      background: currentColor;
      opacity: 0.7;
    }
  }

  .mv-arrow {
    flex-shrink: 0;
    color: #c2c7ce;
    font-size: 0.14rem;
    font-weight: bold;
  }

  .more-btn {
    display: block;
    width: 100%;
    margin-top: 0.16rem;
    padding: 0.12rem 0;
    border: none;
    border-radius: 0.1rem;
    background: rgba(255, 255, 255, 0.72);
    color: ${style["theme-color"]};
    font-size: ${style["font-size-s"]};
    font-weight: 600;
    letter-spacing: 0.12em;
    text-align: center;
    box-shadow: inset 0 0 0 1px rgba(20, 30, 40, 0.06);
    -webkit-tap-highlight-color: transparent;

    &:active {
      opacity: 0.85;
    }

    &:disabled {
      opacity: 0.55;
    }
  }

  .list-end {
    margin-top: 0.16rem;
    text-align: center;
    font-size: ${style["font-size-ss"]};
    color: ${style["font-color-desc-v2"]};
    letter-spacing: 0.16em;
  }
`;
