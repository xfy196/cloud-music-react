import React from 'react'
import { NavLink } from "react-router-dom"
import { renderRoutes } from "react-router-config"
import { Top } from "./HomeLayout.style"
export default function HomeLayout(props) {
  let { route } = props;
  return (
    <div>
      <Top>
        <span className="iconfont menu">
          &#xe65c;

        </span>
        <span className="title">
          云音乐
        </span>
        <span className="iconfont search">
          &#xe62b;

        </span>
      </Top>
    </div>
  )
}
