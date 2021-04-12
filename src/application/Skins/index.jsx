import React, { useCallback, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { SkinContainerStyled } from "./style";
function Skins() {
    let [show, setShow] = useState(false)
    // 处理动画进入的函数
    const handleExit = useCallback(() => {

    })
  return (
    <CSSTransition
        show={show}
        timeout={300}
        appear={true}
        classNames="fly"
        unmountOnExit
        onExit={handleExit}
    >
      <SkinContainerStyled>Skins</SkinContainerStyled>
    </CSSTransition>
  );
}

export default Skins;