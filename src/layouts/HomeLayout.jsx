import React, { useCallback, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  Top,
  Tab,
  TabItem,
  DrawerBox,
  DrawerMask,
  DrawerPanel,
} from "./HomeLayout.style";
import Player from "application/Player";
import imgUrl from "../assets/images/huanfu.png";

export default function HomeLayout() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenDrawer = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const closeDrawer = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Top>
        <span className="iconfont menu" onClick={handleOpenDrawer}>
          &#xe65c;
        </span>
        <span className="title">云音乐</span>
        <span
          className="iconfont search"
          onClick={() => navigate("/search")}
        >
          &#xe62b;
        </span>
      </Top>
      <Tab>
        <NavLink
          to="/recommend"
          className={({ isActive }) => (isActive ? "selected" : undefined)}
        >
          <TabItem>
            <span>推荐</span>
          </TabItem>
        </NavLink>
        <NavLink
          to="/singers"
          className={({ isActive }) => (isActive ? "selected" : undefined)}
        >
          <TabItem>
            <span>歌手</span>
          </TabItem>
        </NavLink>
        <NavLink
          to="/rank"
          className={({ isActive }) => (isActive ? "selected" : undefined)}
        >
          <TabItem>
            <span>排行榜</span>
          </TabItem>
        </NavLink>
        <NavLink
          to="/mv"
          className={({ isActive }) => (isActive ? "selected" : undefined)}
        >
          <TabItem>
            <span>MV</span>
          </TabItem>
        </NavLink>
      </Tab>
      <Outlet />
      <DrawerMask $open={open} onClick={closeDrawer} />
      <DrawerPanel $open={open}>
        <DrawerBox imgUrl={imgUrl}>
          <div className="headerBackground"></div>
          <div
            onClick={() => {
              closeDrawer();
              navigate("/changeSkins");
            }}
            className="skinItem"
          >
            <span>皮肤中心</span>
            <i className="iconfont rightArrow">&#xe662;</i>
          </div>
        </DrawerBox>
      </DrawerPanel>
      <Player></Player>
    </>
  );
}
