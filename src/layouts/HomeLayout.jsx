import React, { useCallback, useState } from "react";
import { renderRoutes } from "react-router-config";
import { Top, Tab, TabItem } from "./HomeLayout.style";
import { NavLink } from "react-router-dom";
import Player from "application/Player";
import { Drawer, Icon } from "antd-mobile";
import {DrawerBox} from "./HomeLayout.style.js"
import imgUrl from "../assets/images/huanfu.png"
export default function HomeLayout(props) {
  const [open, setOpen] = useState(false);
  /**
   * 打开抽屉
   */
  const handleOpenDrawer = useCallback(() => {
    setOpen(!open);
  });

  let { route,history } = props;

  const renderSidebar = useCallback(() => {
    return (
        <DrawerBox imgUrl={imgUrl}>
          <div className="headerBackground"></div>
          <div onClick={() => {
            setOpen(false)
            history.push("/changeSkins")
          }} className="skinItem">
            <span>皮肤中心</span>
            <Icon className="rightArrow" type="right"></Icon>
          </div>
        </DrawerBox>
    );
  });
  return (
    <>
      <Top>
        <span className="iconfont menu" onClick={handleOpenDrawer}>
          &#xe65c;
        </span>
        <span className="title">云音乐</span>
        <span
          className="iconfont search"
          onClick={() => props.history.push("/search")}
        >
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
        <NavLink to="/mv" activeClassName="selected">
          <TabItem>
            <span>MV</span>
          </TabItem>
        </NavLink>
      </Tab>
      {renderRoutes(route.routes)}
      <Drawer
        sidebar={renderSidebar()}
        style={open ? { display: "block" } : { display: "none" }}
        open={open}
        sidebarStyle={{width: "80%", background: "#fff"}}
        onOpenChange={handleOpenDrawer}
      ></Drawer>
      <Player></Player>
    </>
  );
}
