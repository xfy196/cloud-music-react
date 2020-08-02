import Styled from "styled-components"
import style from "assets/global-style"
export const Container = Styled.div`
  position: fixed;
  top: .94rem;
  bottom: ${props => props.play > 0 ? ".6rem" : 0};
  width: 100%;
  .offical,.global {
    margin: .1rem .05rem;
    font-weight: 700;
    font-size: ${style["font-size-m"]};
    color: ${style["font-color-desc"]};
  }
`
export const List = Styled.div`

`

export const ListItem = Styled.div`

`