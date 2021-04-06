import styled from "styled-components";

export const ListContainer = styled.div`
  position: fixed;
  top: 0.94rem;
  bottom: ${(props) => (props.play > 0 ? ".6rem" : 0)};
  width: 100%;
  overflow: hidden;
  .mvList {
    height: 100%;
    .am-list-body {
      height: 100%;
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
    }
  }
  .img_wrapper {
    position: relative;
    .playCount {
      color: #ddd;
      font-size: 14px;
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 0.05rem;
      right: 0.05rem;
    }
  }
  .am-list-item {
    padding-bottom: 0.2rem;
    &:nth-last-of-type(1) {
      padding-bottom: 0;
    }
  }
  .am-list-item img {
    width: 1.8rem;
    height: auto;
  }
  .am-list-extra {
    flex: 1;
  }
  .mvInfo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;

    .name {
      font-size: 14px;
      color: #333;
    }
  }
  .moreBtn {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 1.2rem;
    top: 0.12rem;
    background: #d44439;
  }
`;
