import React, { useEffect, useRef, memo, useState } from 'react'
import Scroll from "../scroll"
import { List, ListItem } from "./style"
import PropTypes from "prop-types"
/* 
水平列表的ui组件
*/
function Horizen(props) {
  // 因为第一次加载这个分类数据的时候呢我们的使用better-scroll的时候没有高度就无法进行滚动所以我们需要进行手动计算高度
  const [refreshCategoryScroll, setRefreshCategoryScroll] = useState(false);

  // 拿到这个bettrer-scroll作用的第一个元素的节点
  const Category = useRef(null);
  // 使用Effect的方法来计算分类出现的宽度问题 每次进行比对宽度
  useEffect(() => {
    // 拿到当前分类节点
    let categoryDOM = Category.current;
    // 获取他下面所有的span标签
    let tagElems = categoryDOM.querySelectorAll("span");
    // 定义总宽度的变量
    let totalWidth = 0;
    // 通过数组的方法循环求和宽度
    Array.from(tagElems).forEach(ele => {
      totalWidth += ele.offsetWidth;
    });
    totalWidth += 2;
    categoryDOM.style.width = `${totalWidth}px`;
    // 然后将state之后的状态设置为true放置多次计算
    setRefreshCategoryScroll(true);
  }, [refreshCategoryScroll]);

  const { title, list, handleClick, currentKey } = props;
  const clickHandle = (item) => {
    handleClick(item.key)
  }
  return (
    <Scroll direction={"horizental"} refresh={true}>
      <div ref={Category}>
        <List>
          <span>{title}</span>
          {
            list.map(item => (
              <ListItem key={item.key}
                onClick={() => clickHandle(item)}
                className={ currentKey===item.key ? "selected border" : ""}
              >
                {item.name}
              </ListItem>
            ))
          }
        </List>
      </div>
    </Scroll>
  )
}
Horizen.defaultProps = {
  list: [],
  handleClick: null,
  title: ""
}
Horizen.PropTypes = {
  list: PropTypes.Array,
  title: PropTypes.string,
  handleCLick: PropTypes.func
}
export default memo(Horizen);