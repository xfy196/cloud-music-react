import React, { forwardRef, useRef, useEffect , useImperativeHandle } from 'react'
import Styled from "styled-components"
import style from "assets/global-style"
const Container = Styled.div`
  .icon_wrapper{
    position: fixed;
    z-index: 1000;
    margin-top: -.1rem;
    margin-left: -.1rem;
    color: ${style["theme-color"]};
    font-size: .14rem;
    display: none;
    transition: transform 1s cubic-bezier(.62,-0.1,.86,.57);
    transform: translate3d(0, 0, 0);
    >div{
      transition: transform 1s;
    }
  }
`
const MusicNote = forwardRef((props, ref) => {
  const iconsRef = useRef();

  const ICON_NUMBER = 10;

  /* 
    创建节点的函数
  */
  const createNode = (txt) => {
    // 创建icon的内容块
    const template = `<div class='icon_wrapper'>${txt}</div>`;
    // 在创建一个节点用来将上面的字符串变为dom节点的
    let tempNode = document.createElement('div');
    tempNode.innerHTML = template;
    // 返回第一个节点就是上面创建的icon内容块区域的节点
    return tempNode.firstChild;
  }

/* 
  第一次创建动画的盒子
*/
  useEffect(() => {
    // 首先创建10个存放iconfont图标的盒子，创建10个的原因是首屏展示的做多不会超过10个
    for (let i = 0; i < ICON_NUMBER; i++) {
      // 循环创建存放iconfont的盒子
      let node = createNode(`<div class="iconfont">&#xe642;</div>`);
      // 放入到icon_wrapper盒子之中
      iconsRef.current.appendChild(node);
    }
    // 将伪数组转为标准数组
    let domArray = [].slice.call(iconsRef.current.children)
    // 伪数组循环
    domArray.forEach(item => {
      // 每一个iconfont的节点设置是否在运动状态 默认为false
      item.running = false;
      // 加入动画监听 动画结束的监听
      item.addEventListener('transitionend', function () {
        // 动画结束节点隐藏
        this.style['display'] = 'none';
        // 动画移动位置回复初始状态
        this.style["transform"] = `translate3d(0, 0, 0)`;
        // 动画运行标识设置为false
        this.running = false;

        let icon = this.querySelector('div');
        // 找到这个运动的icon设置动画移动的位置为初始值
        icon.style["transform"] = `translate3d(0, 0, 0)`;
      }, false);
    });
  }, []);

  
  /* 
    开启动画的操作
  */
  const startAnimation = ({x, y}) => {
    for(let i = 0; i < ICON_NUMBER; i++) {
      let domArray = [].slice.call(iconsRef.current.children)
      let item = domArray[i]
      // 选择一个空闲的元素来开始动画
      if (item.running === false) {
        item.style.left = x / 100 + "rem";
        item.style.top = y / 100 + "rem";
        item.style.display = "inline-block";
        setTimeout(() => {
          item.running = true;
          // 外部的盒子实现落下的一个动画 盒子没有固定的宽度所以没法将两个动画放在一起
          item.style["transform"] = `translate3d(-.4rem, 7.5rem, 0)`;
          let icon = item.querySelector("div");
          // icon实现向左移动的效果
          icon.style["transform"] = `translate3d(-.4rem, 0, 0)`;
        }, 20);
        break;
      }
    }
  };

  /* 
    科技将该ref组件的方法提供给外部使用
  */
  useImperativeHandle(ref, () => ({
    startAnimation
  }));

  return (
    <Container ref={iconsRef}></Container>
  )
})
export default React.memo(MusicNote);