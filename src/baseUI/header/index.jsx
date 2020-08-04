import React, { forwardRef } from 'react'
import Styled from "styled-components"
import PropTypes from "prop-types"
const ContainerHeader = Styled.header`
  position : fixed;
  padding : .05rem .1rem;
  padding-top : 0;
  height : .4rem;
  width : 100%;
  z-index: 100;
  display : flex;
  line-height : .4rem;
  color: #f1f1f1;
  >i{
    margin-right: .05rem;
    font-size: .2rem;
    width: .2rem;
  }
  >h1{
    font-size: .16rem;
    font-weight: 700;
    margin : 0;
  }
`
const Header = forwardRef((props, ref) => {
  const { title, handleClick } = props;
  return (
    <ContainerHeader ref={ref}>
      <i className="iconfont back" onClick={handleClick}>&#xe655;</i>
      <h1>歌单</h1>
    </ContainerHeader>
  )
});

Header.defaultProps = {
  handleClick: () =>{

  },
  title : '标题',
}
Header.propTypes = {
  handleClick: PropTypes.func,
  title : PropTypes.string
}
export default React.memo(Header)