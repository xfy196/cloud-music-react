import styled from "styled-components"

export const Content = styled.div`
    position: fixed;
    top: .94rem;
    left: 0;
    bottom: ${props => props.play > 0 ? "60px" : 0};
    width: 100%;
`
