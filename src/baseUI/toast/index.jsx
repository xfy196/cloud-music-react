import React, {forwardRef, useState, useImperativeHandle, useCallback} from "react"
import {CSSTransition} from "react-transition-group"
import styled from "styled-components"
import style from "assets/global-style"

const ToastWrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    z-index: 1000;
    &.drop.enter{
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }
    &.drop-enter-active{
        opacity: 1;
        transition: all 0.3s;
        transform: translate3d(0, 0, 0);
    }
    &.drop-exit-active{
        opacity: 0;
        transition: all 0.3s;
        transform: translate3d(0, 100%, 0);
    }
    .text{
        text-align: center;
        line-height: 50px;
        color: #fff;
        font-size: ${style["font-size-l"]}
    }
`
/**
 * Toast弹窗
 * @param {*} props 
 */
const Toast = forwardRef((props, ref) => {
    const [show, setShow] = useState(false)
    const [timer, setTimer] = useState("")
    const {text} = props
    useImperativeHandle(ref, () => ({
        show(){
            if(timer){
                clearTimeout(timer)
            }
            setShow(true)
            setTimer(setTimeout(() => {
                setShow(false)
            }, 3000))
        }
    }))
    return (
        <CSSTransition
        in={show}
        timeout={300}
        classNames="drop"
        unmountOnExit
        >
            <ToastWrapper>
                <div className="text">{text}</div>
            </ToastWrapper>
        </CSSTransition>
    )
})
export default React.memo(Toast)