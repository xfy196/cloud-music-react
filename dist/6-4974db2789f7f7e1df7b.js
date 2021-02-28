(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/application/Album/index.jsx":
/*!*****************************************!*\
  !*** ./src/application/Album/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var baseUI_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! baseUI/header */ "./src/baseUI/header/index.jsx");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/application/Album/style.js");
/* harmony import */ var baseUI_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! baseUI/scroll */ "./src/baseUI/scroll/index.js");
/* harmony import */ var _album_detail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/album-detail */ "./src/components/album-detail/index.jsx");
/* harmony import */ var _store_actionCreator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/actionCreator */ "./src/application/Album/store/actionCreator.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils */ "./src/utils/index.js");
/* harmony import */ var utils_EnterLoading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/EnterLoading */ "./src/utils/EnterLoading.js");
/* harmony import */ var baseUI_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! baseUI/loading */ "./src/baseUI/loading/index.jsx");
/* harmony import */ var assets_global_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/global-style */ "./src/assets/global-style.js");
/* harmony import */ var baseUI_music_note__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! baseUI/music-note */ "./src/baseUI/music-note/index.js");















function Album(props) {
  // 默认开始的时候为true但是点击返回的上一层的时候为false
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      showStatus = _useState2[0],
      setShowStatus = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState4 = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      title = _useState4[0],
      setTitle = _useState4[1]; // 这只滚动的时候header是否文字滚动


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      marquee = _useState6[0],
      setMarquee = _useState6[1]; // 拿到传过来的id值


  var id = props.match.params.id;
  var headEl = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var musicNoteRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var getAlbumListDispatch = props.getAlbumListDispatch;
  var songsCount = props.songsCount,
      pullUpLoading = props.pullUpLoading,
      currentAlbum = props.currentAlbum,
      enterLoading = props.enterLoading;
  var currentAlbumJS = currentAlbum.toJS(); // 将immutable的数据转换出来

  var handleBack = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setShowStatus(false);
  }, []);

  var handlePullUp = function handlePullUp() {};
  /* 
    点击歌曲出现的动画
  */


  var musicAnimation = function musicAnimation(x, y) {
    musicNoteRef.current.startAnimation({
      x: x,
      y: y
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getAlbumListDispatch(id);
  }, [getAlbumListDispatch, id]);
  var handleScroll = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (pos) {
    var headDOM = headEl.current;
    var minHeight = -headDOM.getBoundingClientRect().height;
    var percent = Math.abs(pos.y / minHeight);

    if (pos.y < minHeight) {
      headDOM.style.backgroundColor = assets_global_style__WEBPACK_IMPORTED_MODULE_12__["default"]["theme-color"]; // 加入动画效果

      headDOM.style.opacity = Math.min(1, (percent - 1) / 2); // 这只title文字

      setTitle(currentAlbumJS && currentAlbumJS.name);
      setMarquee(true);
    } else {
      headDOM.style.backgroundColor = '';
      headDOM.style.opacity = 1; // 设置title的值

      setTitle("歌单");
      setMarquee(false);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["CSSTransition"], {
    "in": showStatus,
    timeout: 300,
    appear: true,
    classNames: "fly",
    mountOnEnter: true,
    unmountOnExit: true,
    onExited: props.history.goBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    play: songsCount
  }, enterLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(utils_EnterLoading__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(baseUI_loading__WEBPACK_IMPORTED_MODULE_11__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(baseUI_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ref: headEl,
    title: title,
    isMarquee: marquee,
    handleClick: handleBack
  }), !Object(utils__WEBPACK_IMPORTED_MODULE_9__["isEmptyObject"])(currentAlbumJS) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(baseUI_scroll__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onScroll: handleScroll,
    pullUp: handlePullUp,
    pullUpLoading: pullUpLoading,
    bounceTop: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_album_detail__WEBPACK_IMPORTED_MODULE_7__["default"], {
    currentAlbum: currentAlbumJS,
    musicAnimation: musicAnimation
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(baseUI_music_note__WEBPACK_IMPORTED_MODULE_13__["default"], {
    ref: musicNoteRef
  })));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentAlbum: state.getIn(["album", "currentAlbum"]),
    enterLoading: state.getIn(["album", "enterLoading"]),
    songsCount: state.getIn(["player", "playList"]).size
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // 通过id拿到该id对应的歌单数据
    getAlbumListDispatch: function getAlbumListDispatch(id) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_8__["changeEnterLoading"])(true));
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_8__["getAlbumList"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Album)));

/***/ }),

/***/ "./src/application/Album/style.js":
/*!****************************************!*\
  !*** ./src/application/Album/style.js ***!
  \****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var _Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/global-style.js */ "./src/assets/global-style.js");


var _templateObject;



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position : fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom : ", ";\n  z-index: 100;\n  width: 100%;\n  overflow: hidden;\n  background : #f2f3f4;\n  transform-origin : right bottom;\n  &.fly-enter, &.fly-appear{\n    transform: rotateZ(30deg) translate3d(100%, 0, 0);\n  }\n  &.fly-enter-active, &.fly-appear-active{\n    transition: transform .3s;\n    transform: rotateZ(0deg) translate3d(0, 0, 0);\n  }\n  &.fly-exit{\n    transform: rotateZ(0deg) translate3d(0, 0, 0);\n  }\n  &.fly-exit-active{\n    transition: transform .3s;\n    transform: rotateZ(30deg) translate3d(100%, 0, 0);\n  }\n"])), function (props) {
  return props.play > 0 ? ".6rem" : 0;
});

/***/ }),

/***/ "./src/components/album-detail/index.jsx":
/*!***********************************************!*\
  !*** ./src/components/album-detail/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/components/album-detail/style.js");
/* harmony import */ var application_SongList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! application/SongList */ "./src/application/SongList/index.jsx");




function AlbumDetail(props) {
  var currentAlbum = props.currentAlbum,
      musicAnimation = props.musicAnimation;
  var tracks = currentAlbum.tracks || [];

  var renderTopDesc = function renderTopDesc() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["TopDesc"], {
      background: currentAlbum.coverImgUrl
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "background"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "img_wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "decorate"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: currentAlbum.coverImgUrl,
      alt: ""
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "play_count"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "iconfont play"
    }, "\uE885"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "count"
    }, parseInt(currentAlbum.playCount / 10000), "\u4E07"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "desc_wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title"
    }, currentAlbum.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "person"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "avatar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: currentAlbum.creator.avatarUrl,
      alt: ""
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "name"
    }, currentAlbum.creator.nickname))));
  };
  /* menu菜单的布局 */


  var renderMenu = function renderMenu() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["Menu"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "iconfont"
    }, "\uE6AD"), "\u8BC4\u8BBA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "iconfont"
    }, "\uE86F"), "\u70B9\u8D5E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "iconfont"
    }, "\uE62D"), "\u6536\u85CF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "iconfont"
    }, "\uE606"), "\u66F4\u591A"));
  };

  var renderSongList = function renderSongList() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(application_SongList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      songs: tracks,
      collectCount: currentAlbum.subscribedCount,
      showCollect: true,
      musicAnimation: musicAnimation
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, renderTopDesc(), renderMenu(), renderSongList());
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(AlbumDetail));

/***/ }),

/***/ "./src/components/album-detail/style.js":
/*!**********************************************!*\
  !*** ./src/components/album-detail/style.js ***!
  \**********************************************/
/*! exports provided: TopDesc, Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopDesc", function() { return TopDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/global-style */ "./src/assets/global-style.js");


var _templateObject, _templateObject2;



var TopDesc = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-size: 100%;\n  padding: .05rem .2rem;\n  padding-bottom: .5rem;\n  margin-bottom: .2rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 2.75rem;\n  position: relative;\n  .background {\n    z-index: -1;\n    background: contain;\n    background: url(", ") left top no-repeat;\n    background-position: 0 0;\n    background-size: 100% 100%;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    filter: blur(.2rem);\n  }\n  .img_wrapper{\n    width: 1.2rem;\n    height : 1.2rem;\n    position : relative;\n    .decorate{\n      position: absolute;\n      top: 0;\n      width: 100%;\n      height: .35rem;\n      border-radius: .03rem;\n      background: linear-gradient(hsla(0,0%,43%,.4),hsla(0,0%,100%,0));\n    }\n    img {\n      width: 1.20rem;\n      height: 1.20rem;\n      border-radius: .03rem;\n    }\n    .play_count {\n      position : absolute;\n      right: .02rem;\n      top: .02rem;\n      font-size: .12rem;\n      line-height: .15rem;\n      color: ", ";\n      .play {\n        vertical-align : top;\n      }\n    }\n  }\n  .desc_wrapper{\n    display : flex;\n    flex-direction: column;\n    justify-content : space-around;\n    flex : 1;\n    height: 1.20rem;\n    padding: 0 .1rem;\n    .title {\n      max-height : .7rem;\n      overflow : hidden;\n      text-overflow : ellipsis;\n      color : ", ";\n      font-weight : 700;\n      line-height : 1.5;\n      font-size : .16rem;\n    }\n    .person {\n      display : flex;\n      .avatar {\n        width: .2rem;\n        height: .2rem;\n        margin-right : .05rem;\n        img {\n          width: 100%;\n          height: 100%;\n          border-radius : 50%;\n        }\n      }\n      .name {\n        line-height: .2rem;\n        font-size: .14rem;\n        color: #bba8a8;\n      }\n    }\n  }\n"])), function (props) {
  return props.background;
}, assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-light"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-light"]);
var Menu = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2 || (_templateObject2 = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position : relative;\n  display : flex;\n  justify-content : space-between;\n  box-sizing: border-box;\n  padding: 0 .30rem .20rem .30rem;\n  margin: -1rem 0 0 0;\n  >div {\n    display : flex;\n    flex-direction: column;\n    line-height: .20rem;\n    text-align: center;\n    font-size: .12rem;\n    color: #3b1f1f;\n    color: ", ";\n    z-index: 1000;\n    font-weight: 500;\n  }\n"])), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-light"]);

/***/ })

}]);
//# sourceMappingURL=6-4974db2789f7f7e1df7b.js.map