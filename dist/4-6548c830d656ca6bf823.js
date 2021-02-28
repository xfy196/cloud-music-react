(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/application/Search/index.jsx":
/*!******************************************!*\
  !*** ./src/application/Search/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/application/Search/style.js");
/* harmony import */ var application_SongList_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! application/SongList/style */ "./src/application/SongList/style.js");
/* harmony import */ var baseUI_search_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! baseUI/search-box */ "./src/baseUI/search-box/index.js");
/* harmony import */ var baseUI_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! baseUI/scroll */ "./src/baseUI/scroll/index.js");
/* harmony import */ var _store_actionCreator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/actionCreator */ "./src/application/Search/store/actionCreator.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _singer_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./singer.png */ "./src/application/Search/singer.png");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils */ "./src/utils/index.js");
/* harmony import */ var utils_EnterLoading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/EnterLoading */ "./src/utils/EnterLoading.js");
/* harmony import */ var baseUI_loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! baseUI/loading */ "./src/baseUI/loading/index.jsx");
/* harmony import */ var baseUI_music_note__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! baseUI/music-note */ "./src/baseUI/music-note/index.js");
/* harmony import */ var _Player_store_actionCreator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Player/store/actionCreator */ "./src/application/Player/store/actionCreator.js");

















function Search(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      query = _useState4[0],
      setQuery = _useState4[1];

  var hotList = props.hotList,
      suggestList = props.suggestList,
      songsList = props.songsList,
      enterLoading = props.enterLoading,
      songsCount = props.songsCount;
  var getHotKeyWordsDispatch = props.getHotKeyWordsDispatch,
      getSuggestListDispatch = props.getSuggestListDispatch,
      getSongsDetailDispatch = props.getSongsDetailDispatch;
  var musicNoteRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var suggests = suggestList.toJS();
  var songs = songsList.toJS();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setShow(true);

    if (!hotList.size) {
      getHotKeyWordsDispatch();
    }
  }, []);

  var handleQuery = function handleQuery(q) {
    setQuery(q);

    if (!q) {
      return;
    }

    getSuggestListDispatch(q);
  };

  var renderHotKey = function renderHotKey() {
    var list = hotList ? hotList.toJS() : [];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, list.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item border",
        key: item.first,
        onClick: function onClick() {
          return setQuery(item.first);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, item.first));
    }));
  };

  var renderSingers = function renderSingers() {
    var singers = suggests.artists;

    if (!singers || !singers.length) {
      return;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["List"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "title"
    }, "\u76F8\u5173\u6B4C\u624B"), singers.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
        key: item.id,
        className: "border-bottom",
        onClick: function onClick() {
          return enterDetail(item.id);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img_container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_lazyload__WEBPACK_IMPORTED_MODULE_9___default.a, {
        placeholder: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: _singer_png__WEBPACK_IMPORTED_MODULE_10__["default"],
          alt: "\u6B4C\u624B",
          width: "100%",
          height: "100%"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "".concat(item.picUrl, "?param=300x300"),
        width: "100%",
        height: "100%",
        alt: "\u6B4C\u624B"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "name"
      }, "\u6B4C\u624B : ", item.name));
    }));
  };

  var selectItem = function selectItem(e, id) {
    getSongsDetailDispatch(id);
    musicNoteRef.current.startAnimation({
      x: e.nativeEvent.clientX,
      y: e.nativeEvent.clientY
    });
  };

  var renderSongs = function renderSongs() {
    if (Object(utils__WEBPACK_IMPORTED_MODULE_11__["isEmptyObject"])(songs) || !songs.songs.length) {
      return;
    }

    var list = songs.songs;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(application_SongList_style__WEBPACK_IMPORTED_MODULE_5__["SongItem"], {
      style: {
        paddingLeft: ".2rem"
      }
    }, list.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        key: item.id,
        onClick: function onClick(e) {
          return selectItem(e, item.id);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, item.ar ? Object(utils__WEBPACK_IMPORTED_MODULE_11__["getName"])(item.ar) : Object(utils__WEBPACK_IMPORTED_MODULE_11__["getName"])(item.artists), " - ", item.al ? item.al.name : item.album.name)));
    }));
  };

  var handleHeaderGoBack = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setShow(false);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
    "in": show,
    timeout: 300,
    appear: true,
    classNames: "fly",
    unmountOnExit: true,
    onExit: function onExit() {
      return props.history.goBack();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    play: songsCount
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "search_box_wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(baseUI_search_box__WEBPACK_IMPORTED_MODULE_6__["default"], {
    handleClick: handleHeaderGoBack,
    newQuery: query,
    handleQuery: handleQuery
  })), enterLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(utils_EnterLoading__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(baseUI_loading__WEBPACK_IMPORTED_MODULE_13__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["ShortcutWrapper"], {
    shows: !query
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(baseUI_scroll__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["HotKey"], {
    className: "border-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "title"
  }, "\u70ED\u95E8\u641C\u7D22"), renderHotKey())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["ShortcutWrapper"], {
    shows: query
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(baseUI_scroll__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onScroll: react_lazyload__WEBPACK_IMPORTED_MODULE_9__["forceCheck"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, renderSingers(), renderSongs())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(baseUI_music_note__WEBPACK_IMPORTED_MODULE_14__["default"], {
    ref: musicNoteRef
  })));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    hotList: state.getIn(["search", "hotList"]),
    suggestList: state.getIn(["search", "suggestList"]),
    songsList: state.getIn(["search", "songsList"]),
    enterLoading: state.getIn(["search", "enterLoading"]),
    songsCount: state.getIn(["player", "playList"]).size
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getHotKeyWordsDispatch: function getHotKeyWordsDispatch() {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_8__["getHotKeyWords"])());
    },
    getSuggestListDispatch: function getSuggestListDispatch(query) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_8__["getSuggestList"])(query));
    },
    getSongsDetailDispatch: function getSongsDetailDispatch(id) {
      dispatch(Object(_Player_store_actionCreator__WEBPACK_IMPORTED_MODULE_15__["getSongsDetail"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Search)));

/***/ }),

/***/ "./src/application/Search/singer.png":
/*!*******************************************!*\
  !*** ./src/application/Search/singer.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/singer-2681a7.png");

/***/ }),

/***/ "./src/application/Search/style.js":
/*!*****************************************!*\
  !*** ./src/application/Search/style.js ***!
  \*****************************************/
/*! exports provided: Container, ShortcutWrapper, HotKey, List, ListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortcutWrapper", function() { return ShortcutWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotKey", function() { return HotKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var _Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/global-style */ "./src/assets/global-style.js");


function _templateObject5() {
  var data = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display : flex;\n  box-sizing : border-box;\n  flex-direction : row;\n  margin : 0 .05rem;\n  padding : .05rem 0;\n  align-items : center;\n  border-bottom: 1px solid ", ";\n  .img_container {\n    margin-right : .2rem;\n    img {\n      width : .5rem;\n      height : .5rem;\n      border-radius : .03rem;\n    }\n  }\n  .name {\n    font-weight: 500;\n    font-size : ", ";\n    color : ", "\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display : flex;\n  margin : auto;\n  flex-direction: column;\n  overflow: hidden;\n  .title {\n    margin:.1rem 0 .1rem .1rem;\n    color: #666;\n    font-size: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin : 0 .2rem .2rem .2rem;\n  border-color : #ccc;\n  border-style : solid;\n  .title {\n    padding-top: .35rem;\n    margin-bottom: .1rem;\n    font-size: ", ";\n    color: #666;\n    font-weight : normal;\n  }\n  .item {\n    display : inline-block;\n    padding: .1rem .15rem;\n    margin: 0 .1rem .06rem 0;\n    background: ", ";\n    font-size: ", ";\n    color: ", ";\n    border-color : #d3d4da;\n    &:before {\n      border-radius: .8rem;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position : absolute;\n  top : .4rem;\n  bottom: 0;\n  width: 100%;\n  display : ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position : fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  z-index: 100;\n  overflow : hidden;\n  background: #fcfcfd;\n  transform-origin: right bottom;\n  bottom : ", ";\n  &.fly-enter, &.fly-appear{\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n  &.fly-enter-active, &.fly-appear-active{\n    opacity: 1;\n    transition: all .3s;\n    transform: translate3d(0, 0, 0);\n  }\n  &.fly-exit{\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n  &.fly-exit-active{\n    opacity: 0;\n    transition: all .3s;\n    transform: translate3d(100%, 0, 0);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.play > 0 ? ".6rem" : 0;
});
var ShortcutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2(), function (props) {
  return props.shows ? "" : "none";
});
var HotKey = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3(), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-size-m"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["highlight-background-color"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-size-m"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4(), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-size-s"]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5(), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["border-color"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-size-m"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc"]);

/***/ }),

/***/ "./src/application/SongList/style.js":
/*!*******************************************!*\
  !*** ./src/application/SongList/style.js ***!
  \*******************************************/
/*! exports provided: SongList, SongItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongList", function() { return SongList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongItem", function() { return SongItem; });
/* harmony import */ var _Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/global-style */ "./src/assets/global-style.js");


function _templateObject2() {
  var data = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  >li {\n    display : flex;\n    align-items : center;\n    height : .6rem;\n    .index {\n      font-size : .16rem;\n      flex-basis: .6rem;\n      width: .60rem;\n      height: .60rem;\n      line-height: .60rem;\n      text-align: center;\n    }\n    .info {\n      box-sizing : border-box;\n      flex: 1;\n      height : 100%;\n      display :flex;\n      flex-direction : column;\n      padding : .05rem 0;\n      justify-content : space-around;\n      border-bottom-style : solid;\n      border-bottom-color : ", ";\n      text-overflow: ellipsis;\n      overflow : hidden;\n      white-space : nowrap; \n      >span{\n        text-overflow : ellipsis;\n        overflow: hidden;\n        white-space : nowrap;\n        &:first-child {\n          font-size : .16rem;\n          color : ", ";\n        }\n        &:last-child {\n          font-size : .12rem;\n          color : ", ";\n        }\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background : #fff;\n  opacity: 0.98;\n  border-radius : .1rem;\n  .first_line {\n    display : flex;\n    box-sizing: border-box;\n    padding: .1rem 0;\n    margin-left: .1rem;\n    position: relative;\n    justify-content: space-between;\n    border-bottom-style: solid;\n    border-bottom-color: ", ";\n    .play_all {\n      display: inline-block;\n      line-height: .24rem;\n      color: ", ";\n      i{\n        font-size : .24rem;\n        margin-right: .1rem;\n        vertical-align: top;\n      }\n      >span{\n        vertical-align : top;\n        font-size : .16rem;\n      }\n      .sum {\n        font-size: .12rem;\n        color: ", ";\n      }\n    }\n    .add_list {\n      display : flex;\n      align-items: center;\n      position: absolute;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      width: 1.3rem;\n      line-height: .34rem;\n      background: #d44439;\n      color: ", ";\n      font-size: 0;\n      border-radius: .03rem;\n      vertical-align: top;\n      i{\n        vertical-align: top;\n        font-size: .1rem;\n        margin: 0 .05rem 0 .1rem;\n      }\n      span {\n        font-size: .14rem;\n        line-height: .34rem;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var SongList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["border-color"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc-v2"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-light"]);
var SongItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul(_templateObject2(), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["border-color"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc-v2"]);

/***/ }),

/***/ "./src/baseUI/music-note/index.js":
/*!****************************************!*\
  !*** ./src/baseUI/music-note/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/global-style */ "./src/assets/global-style.js");


function _templateObject() {
  var data = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .icon_wrapper{\n    position: fixed;\n    z-index: 1000;\n    margin-top: -.1rem;\n    margin-left: -.1rem;\n    color: ", ";\n    font-size: .14rem;\n    display: none;\n    transition: transform 1s cubic-bezier(.62,-0.1,.86,.57);\n    transform: translate3d(0, 0, 0);\n    >div{\n      transition: transform 1s;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), assets_global_style__WEBPACK_IMPORTED_MODULE_3__["default"]["theme-color"]);
var MusicNote = Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function (props, ref) {
  var iconsRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var ICON_NUMBER = 10;
  /* 
    创建节点的函数
  */

  var createNode = function createNode(txt) {
    // 创建icon的内容块
    var template = "<div class='icon_wrapper'>".concat(txt, "</div>"); // 在创建一个节点用来将上面的字符串变为dom节点的

    var tempNode = document.createElement('div');
    tempNode.innerHTML = template; // 返回第一个节点就是上面创建的icon内容块区域的节点

    return tempNode.firstChild;
  };
  /* 
    第一次创建动画的盒子
  */


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // 首先创建10个存放iconfont图标的盒子，创建10个的原因是首屏展示的做多不会超过10个
    for (var i = 0; i < ICON_NUMBER; i++) {
      // 循环创建存放iconfont的盒子
      var node = createNode("<div class=\"iconfont\">&#xe642;</div>"); // 放入到icon_wrapper盒子之中

      iconsRef.current.appendChild(node);
    } // 将伪数组转为标准数组


    var domArray = [].slice.call(iconsRef.current.children); // 伪数组循环

    domArray.forEach(function (item) {
      // 每一个iconfont的节点设置是否在运动状态 默认为false
      item.running = false; // 加入动画监听 动画结束的监听

      item.addEventListener('transitionend', function () {
        // 动画结束节点隐藏
        this.style['display'] = 'none'; // 动画移动位置回复初始状态

        this.style["transform"] = "translate3d(0, 0, 0)"; // 动画运行标识设置为false

        this.running = false;
        var icon = this.querySelector('div'); // 找到这个运动的icon设置动画移动的位置为初始值

        icon.style["transform"] = "translate3d(0, 0, 0)";
      }, false);
    });
  }, []);
  /* 
    开启动画的操作
  */

  var startAnimation = function startAnimation(_ref) {
    var x = _ref.x,
        y = _ref.y;

    var _loop = function _loop(i) {
      var domArray = [].slice.call(iconsRef.current.children);
      var item = domArray[i]; // 选择一个空闲的元素来开始动画

      if (item.running === false) {
        item.style.left = x / 100 + "rem";
        item.style.top = y / 100 + "rem";
        item.style.display = "inline-block";
        setTimeout(function () {
          item.running = true; // 外部的盒子实现落下的一个动画 盒子没有固定的宽度所以没法将两个动画放在一起

          item.style["transform"] = "translate3d(-.4rem, 7.5rem, 0)";
          var icon = item.querySelector("div"); // icon实现向左移动的效果

          icon.style["transform"] = "translate3d(-.4rem, 0, 0)";
        }, 20);
        return "break";
      }
    };

    for (var i = 0; i < ICON_NUMBER; i++) {
      var _ret = _loop(i);

      if (_ret === "break") break;
    }
  };
  /* 
    科技将该ref组件的方法提供给外部使用
  */


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useImperativeHandle"])(ref, function () {
    return {
      startAnimation: startAnimation
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    ref: iconsRef
  });
});
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(MusicNote));

/***/ }),

/***/ "./src/baseUI/search-box/index.js":
/*!****************************************!*\
  !*** ./src/baseUI/search-box/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/global-style */ "./src/assets/global-style.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils */ "./src/utils/index.js");



function _templateObject() {
  var data = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display : flex;\n  align-items : center;\n  box-sizing : border-box;\n  width : 100%;\n  padding : 0 .06rem;\n  padding-right : .1rem;\n  height : .4rem;\n  background : ", ";\n  .icon-back{\n    font-size: .20rem;\n    color: ", ";\n    padding-right : .06rem;\n  }\n  .inputCover {\n    display : flex;\n    align-items : center;\n    height : .3rem;\n    border-radius : .2rem;\n    background : #ebecec;\n    flex : 1;\n    .search {\n      width : .16rem;\n      height : .16rem;\n      color : #ccc;\n      margin: 0 .08rem;\n    }\n    input {\n      height: 100%;\n      font-size : .14rem;\n      color : #333;\n      border : 0;\n      outline : none;\n      width: 100%;\n      background rgba(0,0,0,0)\n    }\n    .icon-delete{\n      color : #bbb;\n      margin-right : .1rem;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var SearchBoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), assets_global_style__WEBPACK_IMPORTED_MODULE_4__["default"]["theme-color"], assets_global_style__WEBPACK_IMPORTED_MODULE_4__["default"]["font-color-light"]);

function SearchBox(props) {
  var handleClick = props.handleClick,
      handleQuery = props.handleQuery,
      newQuery = props.newQuery;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState2 = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var displayStyle = query ? {
    display: "block"
  } : {
    display: "none"
  };
  var queryRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // 点击热门和输入的不一样的时候
    if (newQuery !== query) {
      queryRef.current.value = newQuery;
    }

    setQuery(newQuery);
  }, [newQuery]);
  /* 
    点击删除按钮清空搜索内容，复原原来的状态
  */

  var clearQuery = function clearQuery() {
    setQuery("");
    queryRef.current.value = "";
    queryRef.current.focus();
  };

  var handleChange = function handleChange(e) {
    var query = e.target.value;
    setQuery(query);
  };
  /* 
    处理搜索逻辑的函数进行去抖
  */


  var handleQueryDebounce = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(utils__WEBPACK_IMPORTED_MODULE_5__["debounce"])(handleQuery, 500);
  }, [handleQuery]); // 处理搜索框内容发生改变之后出发查询方法

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    handleQueryDebounce(query);
  }, [query]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SearchBoxWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "iconfont icon-back",
    onClick: handleClick
  }, "\uE655"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "inputCover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "iconfont search"
  }, "\uE62B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    autoFocus: true,
    type: "text",
    ref: queryRef,
    placeholder: "\u641C\u7D22\u6B4C\u66F2\u3001\u6B4C\u624B\u3001\u4E13\u8F91",
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "iconfont icon-delete",
    onClick: clearQuery,
    style: displayStyle
  }, "\uE600")));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(SearchBox));

/***/ }),

/***/ "./src/utils/EnterLoading.js":
/*!***********************************!*\
  !*** ./src/utils/EnterLoading.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed;\n    left: 0; right: 0; top: 0; bottom: 0;\n    width: 1rem;\n    height: 1rem;\n    margin: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var EnterLoading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(EnterLoading));

/***/ })

}]);
//# sourceMappingURL=4-6548c830d656ca6bf823.js.map