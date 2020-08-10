import React from 'react'
import { renderRoutes } from "react-router-config"
import { Top, Tab, TabItem } from "./HomeLayout.style"
import {NavLink} from "react-router-dom"
import Player from "application/Player"
export default function HomeLayout(props) {

  let { route } = props;
  return (
    <>
      <Top>
        <span className="iconfont menu" onClick={() => alert("该功能正在研发之中，敬请等待")}>
          &#xe65c;
        </span>
        <span className="title">
          云音乐
        </span>
        <span className="iconfont search" onClick={() => props.history.push("/search")}>
          &#xe62b;
        </span>
      </Top>
        <Tab>
          <NavLink to="/recommend" activeClassName="selected">
            <TabItem>
              <span>推荐</span>
            </TabItem>
          </NavLink>
          <NavLink to="/singers" activeClassName="selected">
            <TabItem>
              <span>歌手</span>
            </TabItem>
          </NavLink>
          <NavLink to="/rank" activeClassName="selected">
            <TabItem>
              <span>排行榜</span>
            </TabItem>
          </NavLink>
        </Tab>
      {renderRoutes(route.routes)}
      <Player></Player>
    </>
  )
}
