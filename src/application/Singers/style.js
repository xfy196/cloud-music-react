import Styled from "styled-components"
import style from "assets/global-style.js"
export const NavContainer = Styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 95px;
  width: 100%;
  padding: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column; 
`
// ；歌手列表容器
export const ListContainer = Styled.div`
  position: fixed;
  top: 1.6rem;
  left: 0;
  bottom: ${props => props.play ? ".6rem" : 0};
  overflow: hidden;
  width: 100%;
`
export const List = Styled.div`
  display : flex;
  margin : auto;
  flex-direction: column;
  overflow: hidden;
  .title {
    margin:.1rem 0 .1rem .1rem;
    color: ${style["font-color-desc"]};
    font-size: ${style["font-size-s"]};
  }
`
export const ListItem = Styled.div`
  display : flex;
  box-sizing : border-box;
  flex-direction : row;
  margin : 0 .05rem;
  padding : .05rem 0;
  align-items : center;
  border-bottom: 1px solid ${style["border-color"]};
  .img_container {
    margin-right : .2rem;
    img {
      width : .5rem;
      height : .5rem;
      border-radius : .03rem;
    }
  }
  .name {
    font-weight: 500;
    font-size : ${style["font-size-m"]};
    color : ${style["font-color-desc"]}
  }
`