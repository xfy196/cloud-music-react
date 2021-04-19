import React, { useCallback, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { SkinContainerStyled, SkinListStyled } from "./style";
import Header from "baseUI/header"
import globalStyle from "assets/global-style"
import {skins} from "api/config"
function Skins(props) {
    const {history} = props;
    let [show, setShow] = useState(false)
    // 处理动画进入的函数
    const handleExit = useCallback(() => {
        setShow(false)
    })

    useEffect(() => {
        setShow(true)
    })

    /**
     * 点击皮肤我们需要切换var定义的变量中的函数
     */
    const handleClickSkinItem = useCallback((color) => {
        let htmlNode = document.documentElement
        htmlNode.style.setProperty("--USER-THEME-COLOR", color)
    })
  return (
    <CSSTransition
        in={show}
        timeout={300}
        appear={true}
        classNames="fly"
        unmountOnExit
        onExit={() => history.goBack()}
    >
      <SkinContainerStyled>
      <Header handleClick={handleExit} color={globalStyle["theme-color"]} title={"皮肤中心"}></Header>
      <SkinListStyled>
          <ul className="skins">
              {
                  skins.length > 0 ? skins.map(item => {
                    return (
                        <li onClick={handleClickSkinItem.bind(null, item.color)} key={item.id} style={{background: item.color}} className="skin-item">{item.name}</li>
                    )
                  }) : ""
              }
          </ul>
      </SkinListStyled>
      </SkinContainerStyled>
    </CSSTransition>
  );
}

export default Skins;