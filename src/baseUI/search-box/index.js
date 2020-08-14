import React from 'react'
import Styled from "styled-components"
import style from "assets/global-style"
const SearchBoxWrapper = Styled.div`
  display : flex;
  align-items : center;
  box-sizing : border-box;
  width : 100%;
  padding : 0 .06rem;
  padding-right : .2rem;
  height : .4rem;
  background : ${style["theme-color"]};
  .icon-back{
    font-size: .20rem;
    color: ${style["font-color-light"]};
    padding-right : .06rem;
  }
  .inputCover {
    display : flex;
    align-items : center;
    height : .3rem;
    border-radius : .2rem;
    background : #ebecec;
    flex : 1;
    .search {
      width : .16rem;
      height : .16rem;
      color : #ccc;
      margin: 0 .08rem;
    }
    input {
      height: 100%;
      font-size : .14rem;
      color : #333;
      border : 0;
      outline : none;
      width: 100%;
      background rgba(0,0,0,0)
    }
  }
`
function SearchBox(props) {
  return (
    <SearchBoxWrapper>
      <i className="iconfont icon-back" onClick={() => props.back()}>&#xe655;</i>
      <div className="inputCover">
        <i className="iconfont search">&#xe62b;</i>
        <input autoFocus type="text" placeholder="搜索歌曲、歌手、专辑"/>
      </div>
    </SearchBoxWrapper>
  )
}
export default SearchBox