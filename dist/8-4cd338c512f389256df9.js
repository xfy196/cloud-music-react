(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/application/Singer/index.jsx":
/*!******************************************!*\
  !*** ./src/application/Singer/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/application/Singer/style.js");
/* harmony import */ var _store_actionCreator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/actionCreator */ "./src/application/Singer/store/actionCreator.js");
/* harmony import */ var baseUI_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! baseUI/header */ "./src/baseUI/header/index.jsx");
/* harmony import */ var baseUI_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! baseUI/scroll */ "./src/baseUI/scroll/index.js");
/* harmony import */ var _SongList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SongList */ "./src/application/SongList/index.jsx");
/* harmony import */ var utils_EnterLoading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/EnterLoading */ "./src/utils/EnterLoading.js");
/* harmony import */ var baseUI_loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! baseUI/loading */ "./src/baseUI/loading/index.jsx");
/* harmony import */ var baseUI_music_note__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! baseUI/music-note */ "./src/baseUI/music-note/index.js");













function Singer(props) {
  // 维护一个初始化的高度的状态
  var initialHeight = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      showStatus = _useState2[0],
      setShowStatus = _useState2[1];

  var OFFSET = 5;
  var id = props.match.params.id;
  var artist = props.artist,
      hotSongs = props.hotSongs,
      songsCount = props.songsCount,
      enterLoading = props.enterLoading;
  var getSingerDataDispatch = props.getSingerDataDispatch;
  var artists = artist.toJS();
  var songs = hotSongs.toJS();
  var headerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var layRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var imgWrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var scrollSongWrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var collectionButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var songsRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var musicNoteRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getSingerDataDispatch(id);
  }, [getSingerDataDispatch, id]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!enterLoading) {
      // 获取图片的高度
      var h = imgWrapperRef.current.offsetHeight;
      initialHeight.current = h; // 需要为滚动区域的list设置top值

      scrollSongWrapperRef.current.style.top = "".concat((h - OFFSET) / 100, "rem");
      layRef.current.style.top = "".concat((h - OFFSET) / 100, "rem");
      songsRef.current.refresh();
    }
  }, [enterLoading]);
  var handleBack = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setShowStatus(false);
  }, []);

  var handleScroll = function handleScroll(pos) {
    // 获取初始化的值
    var height = initialHeight.current;
    var newY = pos.y;
    var imageDom = imgWrapperRef.current;
    var buttonDom = collectionButtonRef.current;
    var scrollSongWrapperDom = scrollSongWrapperRef.current;
    var layDom = layRef.current;
    var headerDom = headerRef.current; // 最小的高度

    var minScrollY = -(height - OFFSET - headerDom.getBoundingClientRect().height); // 通过总高度的变化计算每次的百分比算法
    // 当percent的为1的时候说明已经完成达到需要最顶端的位置 这个时候我们需要将图片的z-index的设置

    var percent = Math.abs(newY / height);
    /* 
      分为newY大于0的情况和newY小于零的情况
    
    */

    if (newY > 0) {
      //  说明是向下滑动需要将图片的内容向下拉动同时图片进行放大的效果
      // transform:scale变大
      imageDom.style.transform = "scale(".concat(1 + percent, ")"); // button按钮的文职也需要向下移动

      buttonDom.style.transform = "translate3d(0, ".concat(newY / 100, "rem, 0)"); // layDom文职也需要改变

      layDom.style.top = "".concat((height - OFFSET + Math.abs(newY)) / 100, "rem");
    } else if (newY >= minScrollY) {
      //  y轴的坐标大于最小可滚动的值，
      layDom.style.top = "".concat((height - OFFSET - Math.abs(newY)) / 100, "rem");
      imageDom.style.paddingTop = "75%";
      imageDom.style.height = 0;
      imageDom.style.zIndex = -1; // button按钮的动画效果

      buttonDom.style.transform = "translate3d(0, ".concat(newY / 100, "rem, 0)");
      buttonDom.style.opacity = "".concat(1 - percent * 2);
    } else if (newY < minScrollY) {
      // 说明达到我这是的最大滚动的距离这个时候需要让header显示
      headerDom.style.zIndex = 100;
      imageDom.style.paddingTop = 0;
      imageDom.style.height = "".concat(headerDom.getBoundingClientRect().height / 100, "rem");
      imageDom.style.zIndex = 99;
    }
  };

  var musicAnimation = function musicAnimation(x, y) {
    musicNoteRef.current.startAnimation({
      x: x,
      y: y
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["CSSTransition"], {
    "in": showStatus,
    timeout: 300,
    appear: true,
    classNames: "fly",
    mountOnEnter: true,
    unmountOnExit: true,
    onExited: props.history.goBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    play: songsCount
  }, enterLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(utils_EnterLoading__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(baseUI_loading__WEBPACK_IMPORTED_MODULE_10__["default"], {
    style: {
      zIndex: 100
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(baseUI_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    handleClick: handleBack,
    title: artists.name,
    ref: headerRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["ImgWrapper"], {
    ref: imgWrapperRef,
    background: artists.picUrl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "filter"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["CollectionButton"], {
    ref: collectionButtonRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "iconfont"
  }, "\uE62D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text"
  }, "\u6536\u85CF")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["BgLayer"], {
    ref: layRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["SongListWrapper"], {
    ref: scrollSongWrapperRef,
    play: songsCount
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(baseUI_scroll__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onScroll: handleScroll,
    ref: songsRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SongList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    songs: songs,
    showCollect: false,
    musicAnimation: musicAnimation
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(baseUI_music_note__WEBPACK_IMPORTED_MODULE_11__["default"], {
    ref: musicNoteRef
  }))));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    artist: state.getIn(["singerInfo", "artist"]),
    hotSongs: state.getIn(["singerInfo", "hotSongs"]),
    songsCount: state.getIn(["player", "playList"]).size,
    enterLoading: state.getIn(["singerInfo", "enterLoading"])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getSingerDataDispatch: function getSingerDataDispatch(id) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["changeSingerEnterLoading"])(true));
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["getSingerInfo"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Singer)));

/***/ }),

/***/ "./src/application/Singer/style.js":
/*!*****************************************!*\
  !*** ./src/application/Singer/style.js ***!
  \*****************************************/
/*! exports provided: Container, ImgWrapper, CollectionButton, BgLayer, SongListWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgWrapper", function() { return ImgWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionButton", function() { return CollectionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgLayer", function() { return BgLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongListWrapper", function() { return SongListWrapper; });
/* harmony import */ var _Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/global-style */ "./src/assets/global-style.js");


function _templateObject5() {
  var data = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  z-index: 50;\n  top: 0;\n  left: 0;\n  bottom: ", ";\n  right: 0;\n  >div{\n    position: absolute;\n    left: 0;\n    width: 100%;\n    overflow: visible;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  border-radius: .1rem;\n  z-index: 50;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position : fixed;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  box-sizing : border-box;\n  width : 1.2rem;\n  height : .4rem;\n  z-index : 50;\n  color : ", ";\n  background : ", ";\n  border-radius : .2rem;\n  text-align : center;\n  font-size : 0;\n  line-height : .4rem;\n  margin-top : -.55rem;\n  .iconfont {\n    display : inline-block;\n    margin-right : .1rem;\n    font-size : .12rem;\n    vertical-align : .01rem;\n  }\n  .text {\n    display : inline-block;\n    font-size : .14rem;\n    letter-spacing : .05rem;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position : relative;\n  width: 100%;\n  height: 0;\n  padding-top : 75%;\n  transform-origin: top;\n  background: url(", ");\n  background-size: cover;\n  z-index: 50;\n  .filter {\n    position : absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background : rgba(7,17,27,0.3);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position : fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom : 0;\n  z-index: 100;\n  width: 100%;\n  overflow: hidden;\n  background : #f2f3f4;\n  transform-origin : right bottom;\n  &.fly-enter, &.fly-appear{\n    transform: rotateZ(30deg) translate3d(100%, 0, 0);\n  }\n  &.fly-enter-active, &.fly-appear-active{\n    transition: transform .3s;\n    transform: rotateZ(0deg) translate3d(0, 0, 0);\n  }\n  &.fly-exit{\n    transform: rotateZ(0deg) translate3d(0, 0, 0);\n  }\n  &.fly-exit-active{\n    transition: transform .3s;\n    transform: rotateZ(30deg) translate3d(100%, 0, 0);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2(), function (props) {
  return props.background;
});
var CollectionButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3(), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-light"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["theme-color"]);
var BgLayer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());
var SongListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5(), function (props) {
  return props.play ? ".6rem" : 0;
});

/***/ })

}]);
//# sourceMappingURL=8-4cd338c512f389256df9.js.map