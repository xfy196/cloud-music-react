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


  useEffect(() => {
    for (let i = 0; i < ICON_NUMBER; i++) {
      let node = createNode(`<div class="iconfont">&#xe642;</div>`);
      iconsRef.current.appendChild(node);
    }
    let domArray = [].slice.call(iconsRef.current.children)
    domArray.forEach(item => {
      item.running = false;
      item.addEventListener('transitionend', function () {
        this.style['display'] = 'none';
        this.style["transform"] = `translate3d(0, 0, 0)`;
        this.running = false;

        let icon = this.querySelector('div');
        icon.style["transform"] = `translate3d(0, 0, 0)`;
      }, false);
    });
  }, []);

  
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
          item.style["transform"] = `translate3d(0, 7.5rem, 0)`;
          let icon = item.querySelector("div");
          icon.style["transform"] = `translate3d(-.4rem, 0, 0)`;
        }, 20);
        break;
      }
    }
  };

  useImperativeHandle(ref, () => ({
    startAnimation
  }));

  return (
    <Container ref={iconsRef}></Container>
  )
})
export default React.memo(MusicNote);