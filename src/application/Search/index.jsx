import React, { useState, useEffect, useCallback, useRef } from 'react'
import { CSSTransition } from "react-transition-group"
import { connect } from "react-redux"
import { Container, ShortcutWrapper, HotKey, List, ListItem } from "./style"
import { SongItem } from "application/SongList/style"
import SearchBox from "baseUI/search-box"
import Scroll from "baseUI/scroll"
import { getHotKeyWords, getSuggestList } from "./store/actionCreator"
import LazyLoad, { forceCheck } from "react-lazyload"
import singerLazyLoadImg from "./singer.png"
import { isEmptyObject, getName } from "utils"
import EnterLoading from "utils/EnterLoading"
import Loading from "baseUI/loading"
import MusicNote from "baseUI/music-note"
import {getSongsDetail} from "../Player/store/actionCreator"
function Search(props) {
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState('');
  const { hotList, suggestList, songsList, enterLoading, songsCount } = props;
  const { getHotKeyWordsDispatch, getSuggestListDispatch,getSongsDetailDispatch  } = props;

  const musicNoteRef = useRef();

  const suggests = suggestList.toJS();
  const songs = songsList.toJS();
  useEffect(() => {
    setShow(true);
    if (!hotList.size) {
      getHotKeyWordsDispatch();
    }
  }, []);

  const handleQuery = (q) => {
    setQuery(q);
    if (!q) {
      return;
    }
    getSuggestListDispatch(q);

  }
  const renderHotKey = () => {
    const list = hotList ? hotList.toJS() : [];
    return (

      <ul>
        {
          list.map(item => (
            <li className="item border" key={item.first} onClick={() => setQuery(item.first)}>
              <span>{item.first}</span>
            </li>
          ))
        }
      </ul>
    )
  }
  const renderSingers = () => {
    let singers = suggests.artists;
    if (!singers || !singers.length) {
      return;
    }
    return (
      <List>
        <h3 className="title">相关歌手</h3>
        {
          singers.map((item, index) => {
            return (
              <ListItem key={item.id} className="border-bottom" onClick={() => enterDetail(item.id)}>
                <div className="img_container">
                  <LazyLoad placeholder={<img src={singerLazyLoadImg} alt="歌手" width="100%" height="100%" />}>
                    <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="歌手" />
                  </LazyLoad>
                </div>
                <span className="name">歌手 : {item.name}</span>
              </ListItem>
            )
          })
        }
      </List>
    )
  }


  const selectItem = (e, id) => {
    getSongsDetailDispatch(id);
    musicNoteRef.current.startAnimation({x : e.nativeEvent.clientX, y : e.nativeEvent.clientY});
  }

  const renderSongs = () => {
    if (isEmptyObject(songs) || !songs.songs.length) {
      return
    }
    const list = songs.songs;
    return (
      <SongItem style={{ paddingLeft: ".2rem" }}>

        {
          list.map((item, index) => (
            <li key={item.id} onClick={(e) => selectItem(e, item.id)}>
              <div className="info">
                <span>{item.name}</span>
                <span>
                  {item.ar ? getName(item.ar) : getName(item.artists)} - {item.al ? item.al.name : item.album.name}
                </span>
              </div>
            </li>
          )
          )
        }
      </SongItem>
    )
  }
  const handleHeaderGoBack = useCallback(() => {
    setShow(false);
  }, []);
  return (
    <CSSTransition
      in={show}
      timeout={300}
      appear={true}
      classNames="fly"
      unmountOnExit
      onExit={() => props.history.goBack()}
    >
      <Container play={songsCount}>

        <div className="search_box_wrapper">
          <SearchBox
            handleClick={handleHeaderGoBack}
            newQuery={query}
            handleQuery={handleQuery}
          ></SearchBox>
        </div>
        {enterLoading ? <EnterLoading><Loading></Loading></EnterLoading> :
          <>
            <ShortcutWrapper shows={!query}>
              <Scroll>
                <div>
                  <HotKey className="border-top">
                    <h3 className="title">热门搜索</h3>
                    {renderHotKey()}
                  </HotKey>
                </div>
              </Scroll>
            </ShortcutWrapper>
            <ShortcutWrapper shows={query}>
              <Scroll onScroll={forceCheck}>
                <div>
                  {renderSingers()}
                  {/* {renderAlbum()} */}
                  {renderSongs()}
                </div>
              </Scroll>
            </ShortcutWrapper>
          </>
        }
        <MusicNote ref={musicNoteRef}></MusicNote>
      </Container>
    </CSSTransition>
  )
}

const mapStateToProps = state => ({
  hotList: state.getIn(["search", "hotList"]),
  suggestList: state.getIn(["search", "suggestList"]),
  songsList: state.getIn(["search", "songsList"]),
  enterLoading: state.getIn(["search", "enterLoading"]),
  songsCount : state.getIn(["player", "playList"]).size
})
const mapDispatchToProps = dispatch => ({
  getHotKeyWordsDispatch() {
    dispatch(getHotKeyWords())
  },
  getSuggestListDispatch(query) {
    dispatch(getSuggestList(query))
  },
  getSongsDetailDispatch(id){
    dispatch(getSongsDetail(id))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search));