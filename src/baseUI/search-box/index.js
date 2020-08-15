import React, { useRef, useEffect, useState, useMemo } from 'react'
import Styled from "styled-components"
import style from "assets/global-style"
import { debounce } from "utils"
const SearchBoxWrapper = Styled.div`
  display : flex;
  align-items : center;
  box-sizing : border-box;
  width : 100%;
  padding : 0 .06rem;
  padding-right : .1rem;
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
    .icon-delete{
      color : #bbb;
      margin-right : .1rem;
    }
  }
`
function SearchBox(props) {
  const { handleClick, handleQuery, newQuery } = props;
  const [query, setQuery] = useState('');
  const displayStyle = query ? { display: "block" } : { display: "none" }
  const queryRef = useRef();

  useEffect(() => {
    // 点击热门和输入的不一样的时候
    if (newQuery !== query) {
      queryRef.current.value = newQuery;
    }
    setQuery(newQuery);
  }, [newQuery])

  /* 
    点击删除按钮清空搜索内容，复原原来的状态
  */
  const clearQuery = () => {
    setQuery("")
    queryRef.current.value = "";
    queryRef.current.focus();
  }
  const handleChange = (e) => {
    let query = e.target.value;
    setQuery(query);
  }

  /* 
    处理搜索逻辑的函数进行去抖
  */
  const handleQueryDebounce = useMemo(() => {
    return debounce(handleQuery, 500);
  }, [handleQuery])
  // 处理搜索框内容发生改变之后出发查询方法
  useEffect(() => {
    handleQueryDebounce(query);
  }, [query])
  return (
    <SearchBoxWrapper>
      <i className="iconfont icon-back" onClick={handleClick}>&#xe655;</i>
      <div className="inputCover">
        <i className="iconfont search">&#xe62b;</i>
        <input autoFocus type="text" ref={queryRef} placeholder="搜索歌曲、歌手、专辑" onChange={handleChange} />
        <i className="iconfont icon-delete" onClick={clearQuery} style={displayStyle}>&#xe600;</i>

      </div>
    </SearchBoxWrapper>
  )
}
export default React.memo(SearchBox);