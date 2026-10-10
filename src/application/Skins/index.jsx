import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { SkinContainerStyled, SkinListStyled } from "./style";
import Header from "baseUI/header";
import globalStyle from "assets/global-style";
import { skins } from "api/config";

const normalizeColor = (value = "") =>
  value.replace(/\s+/g, "").toLowerCase();

function Skins() {
  const navigate = useNavigate();
  const nodeRef = useRef(null);
  const [show, setShow] = useState(false);
  const [activeColor, setActiveColor] = useState(() => {
    if (typeof window === "undefined") return skins[0]?.color || "#d44439";
    const current = getComputedStyle(document.documentElement)
      .getPropertyValue("--USER-THEME-COLOR")
      .trim();
    return current || skins[0]?.color || "#d44439";
  });

  const handleExit = useCallback(() => {
    setShow(false);
  }, []);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClickSkinItem = useCallback((color) => {
    document.documentElement.style.setProperty("--USER-THEME-COLOR", color);
    setActiveColor(color);
  }, []);

  return (
    <CSSTransition
      in={show}
      timeout={300}
      appear={true}
      classNames="fly"
      unmountOnExit
      nodeRef={nodeRef}
      onExit={() => navigate(-1)}
    >
      <SkinContainerStyled ref={nodeRef}>
        <Header
          handleClick={handleExit}
          color={globalStyle["theme-color"]}
          title="皮肤中心"
        />
        <SkinListStyled>
          <div className="intro">
            <p className="intro-title">选一张色卡</p>
            <p className="intro-desc">主题色会同步到顶栏、Tab 与播放器</p>
          </div>
          <ul className="skins">
            {skins.map((item, index) => {
              const selected =
                normalizeColor(activeColor) === normalizeColor(item.color);
              return (
                <li
                  key={item.id}
                  className={`skin-item${selected ? " is-active" : ""}`}
                  style={{
                    "--skin-color": item.color,
                    "--stagger": `${index * 45}ms`,
                  }}
                  onClick={() => handleClickSkinItem(item.color)}
                >
                  <div className="swatch">
                    <span className="swatch-ring" aria-hidden="true" />
                    <span className="swatch-shine" aria-hidden="true" />
                    {selected ? (
                      <span className="check" aria-hidden="true" />
                    ) : null}
                  </div>
                  <div className="meta">
                    <span className="name">{item.name}</span>
                    <span className="tag">{item.tag}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </SkinListStyled>
      </SkinContainerStyled>
    </CSSTransition>
  );
}

export default Skins;
