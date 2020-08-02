import React, { useEffect } from 'react'
import { connect } from "react-redux"
import Horizen from "baseUI/horizen-item"
import { categoryTypes } from "api/config"
import { NavContainer } from "./style"
import {changeCategory, getHotSingerList} from "./store/actionCreator"
function Singers(props) {

  const { category, singersList } = props;
  const { updateCategory, getHotSinger } = props;
  useEffect(() => {
    if(!category){
      getHotSinger();
    }
  }, [])

  /* 
    处理点击分类获取的key将这个key值重新放入props中然后通过这个值和分类列表的key进行比较保证点击的分类高亮显示
  */
  const handleUpdateCategory = (key) => {
    // 如果key值和上次当前选中的值相等直接return不需要再次触发dispatch方法
    if (category === key) {
      return;
    }
    updateCategory(key);

    //对应明星的数据加载功能为实现
  }
  return (
    <>
      <NavContainer>
        <Horizen title={"分类(默认热门):"} handleClick={(key) => handleUpdateCategory(key)} list={categoryTypes} currentCateKey={category}></Horizen>
      </NavContainer>
      {
        singersList.map(item => (
          <h4 key={item.id}>{item.name}</h4>
        ))
      }
    </>
  )
}
const mapStateToProps = state => ({
  category: state.getIn(["singers", "category"]),
  singersList : state.getIn(["singers", "singersList"])
})
const mapDispatchTProps = dispatch => ({
  updateCategory(id) {
    // 派发更新分类数据
    dispatch(changeCategory(id));
    // dispatch(getSingerList());
  },
  getHotSinger(){
    dispatch(getHotSingerList())
  }
})
export default connect(mapStateToProps, mapDispatchTProps)(React.memo(Singers));