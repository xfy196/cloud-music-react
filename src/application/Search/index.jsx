import React, {useState} from 'react'
import {CSSTransition} from "react-transition-group"
import {connect} from "react-redux"
import {Container} from "./style"
import SearchBox from "baseUI/search-box"
function Search(props) {
  const [show, setShow] = useState(true);
  return (
    <CSSTransition
      in={show}
      timeout={300}
      appear={true}
      classNames="fly"
      unmountOnExit
      onExit={() => props.history.goBack()}
    >
      <Container play={0}>
        <div className="search_box_wrapper">
          <SearchBox></SearchBox>
        </div>
      </Container>
    </CSSTransition>
  )
}
export default React.memo(Search);