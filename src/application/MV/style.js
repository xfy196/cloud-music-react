import styled from "styled-components"

export const ListContainer = styled.div`
  position: fixed;
  top: .94rem;
  bottom: ${props => props.play > 0 ? ".6rem" : 0};
  width: 100%;
.am-list-item img {
    width: 1.8rem;
    height: auto;
}
.am-list-extra{
    flex: 1;
}
.mvInfo{
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    .playCount {
        color:#aaa;
        font-size: 14px;
        display:flex;
        align-items: center;
    }
    .name {
        font-size: 14px;
        color: #333;
    }
}
`