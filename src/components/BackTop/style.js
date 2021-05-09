import styled from "styled-components"
export const BackTopContainer = styled.div`
    position: absolute;
    right: 0.2rem;
    bottom: 0.2rem;
    z-index: 100;
    .back-top-wrapper{
        position: relative;
        width: 40px;
        height: 40px;
        border-radius: 100%;
        border: 1px solid #ccc;
        svg{
            position:absolute;
            left: 50%;
            top: 50%;
            transform: translate3d(-50%, -50%, 0);
        }
    }
`