import styled from "styled-components"
import style from "../../../assets/global-style"
export const PlayListWrapper = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
background-color: ${style["background-color-shadow"]};
z-index: 1001;
&.list-fade-enter{
    opacity: 0;
}
&.list-fade-enter-active{
    opacity: 1;
    transition: all 0.3s;
}
&.list-fade-exit{
    opacity: 1;
}
&.list-fade-exit-active{
    opacity: 0;
    transition: all 0.3;
}
.list-wrapper{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-radius: 10px 10px 0 0;
    background-color: ${style["highlight-background-color"]}
}
`
export const ListHeader = styled.div`
position: relative;
padding: 20px 30px 10px 20px;
.title {
    display: flex;
    align-items: center;
    margin: 0;
    & > div{
        display: flex;
        flex: 1;
        align-items: center;
        .iconfont{
            font-size: 18px;
            margin-right: 10px;
            color: #d44439;
        }
        .text{
            font-size: 14px;
            flex: 1;
            color: #2E3030;
            font-size: 14px;
        }
    }
    .clear{
        position: relative;
        color: #d44439;
        font-size: 16px;
        font-weight: normal;
    }
}
`

// 外层的滚动的盒子
export const ScrollWrapper = styled.div`

`

export const ListContent = styled.div`
overflow: hidden;
height: 400px;
.item{
    display: flex;
    align-items: center;
    padding: 0 30px 0 20px;
    height: 40px;
    overflow: hidden;
    .current{
        color: #d44439;
        width: 20px;
        font-size: 12px;
        font-weight: normal;
    }
    .like{
        position: relative;
        font-size: 14px;
        margin-right: 15px;
        color: #d44439;
    }
    .delete{
        font-weight: normal;
        color: #d44439;
        position: relative;
    }
    .text{
        font-size: 14px;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #bba8a8;
    }
}
`