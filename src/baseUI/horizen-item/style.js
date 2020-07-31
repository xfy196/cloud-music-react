import Styled from "styled-components"
import globalStyle from "assets/global-style"

export const List = Styled.div`
  display : flex;
  align-items : center;
  height : .3rem;
  justify-content: center;
  overflow: hidden;
  >span:first-of-type{
    display: block;
    flex: 0 0 auto;
    padding: .05rem 0;
    color: grey;
    font-size: ${globalStyle["font-size-m"]};
    vertical-align: middle;
  }
`
export const ListItem = Styled.span`
  flex: 0 0 auto;
  font-size: ${globalStyle["font-size-m"]};
  padding: .05rem .05rem;
  border-radius: .1rem;
  &.selected{
    color: ${globalStyle["theme-color"]};
    border: 1px solid ${globalStyle["theme-color"]};
    opacity: 0.8;
  }
`