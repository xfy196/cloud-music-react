import Styled from "styled-components"
import React from "react"
const EnterLoading = Styled.div`
    position: fixed;
    left: 0; right: 0; top: 0; bottom: 0;
    width: 1rem;
    height: 1rem;
    margin: auto;
`
export default React.memo(EnterLoading)