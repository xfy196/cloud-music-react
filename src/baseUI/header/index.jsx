import React, { forwardRef } from 'react'
import Styled from "styled-components"
import PropTypes from "prop-types"
const ContainerHeader = Styled.header`
  position : fixed;
  padding : .05rem .1rem;
  padding-top : 0;
  height : .44rem;
  width : 100%;
  z-index: 100;
  display : flex;
  line-height : .44rem;
  background: ${({color}) => color ? color: ""};
  color: #f1f1f1;
  >i{
    margin-right: .05rem;
    font-size: .2rem;
    width: .2rem;
  }
  h1{
    font-size: .16rem;
    font-weight: 700;
    margin : 0;
  }
`
const Header = forwardRef((props, ref) => {
  const { title, handleClick, isMarquee, color} = props;
  return (
    <ContainerHeader color={color} ref={ref}>
      <i className="iconfont back" onClick={handleClick}>&#xe655;</i>
      {
        // eslint-disable-next-line
        isMarquee ? <marquee><h1>{title}</h1></marquee> :
          <h1>{title}</h1>
      }
    </ContainerHeader>
  )
});

Header.defaultProps = {
  handleClick: () => {

  },
  title: '',
}
Header.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string
}
export default React.memo(Header)