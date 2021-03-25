(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/application/Recommend/index.jsx":
/*!*********************************************!*\
  !*** ./src/application/Recommend/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actionCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/actionCreator */ "./src/application/Recommend/store/actionCreator.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/slider */ "./src/components/slider/index.jsx");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/list */ "./src/components/list/index.jsx");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/application/Recommend/style.js");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/esm/react-router-config.js");
/* harmony import */ var baseUI_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! baseUI/scroll */ "./src/baseUI/scroll/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var baseUI_loading_v2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! baseUI/loading-v2 */ "./src/baseUI/loading-v2/index.js");
/* harmony import */ var utils_EnterLoading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/EnterLoading */ "./src/utils/EnterLoading.js");












function index(props) {
  var bannerList = props.bannerList,
      recommendList = props.recommendList,
      songsCount = props.songsCount,
      enterLoading = props.enterLoading;
  var getBannerDataDispatch = props.getBannerDataDispatch,
      getRecommendDataDispatch = props.getRecommendDataDispatch;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // 如果轮播图的数据不为零说明已经存在这些数据了
    if (!bannerList.size) {
      getBannerDataDispatch();
    }

    if (!_list__WEBPACK_IMPORTED_MODULE_4__["default"].size) {
      getRecommendDataDispatch();
    }
  }, []); // 通过toJS的方式来将数据全部取出

  var bannerListJS = bannerList ? bannerList.toJS() : [];
  var recommendListJS = recommendList ? recommendList.toJS() : [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_5__["Content"], {
    play: songsCount
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseUI_scroll__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onScroll: react_lazyload__WEBPACK_IMPORTED_MODULE_8__["forceCheck"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    bannerList: bannerListJS
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
    recommendList: recommendListJS
  }))), enterLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(utils_EnterLoading__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseUI_loading_v2__WEBPACK_IMPORTED_MODULE_9__["default"], null)) : null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_6__["renderRoutes"])(props.route.routes)));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    bannerList: state.getIn(["recommend", "bannerList"]),
    recommendList: state.getIn(["recommend", "recommendList"]),
    songsCount: state.getIn(["player", "playList"]).size,
    enterLoading: state.getIn(["recommend", "enterLoading"])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getBannerDataDispatch: function getBannerDataDispatch() {
      dispatch(_store_actionCreator__WEBPACK_IMPORTED_MODULE_2__["getBannerList"]());
    },
    getRecommendDataDispatch: function getRecommendDataDispatch() {
      dispatch(_store_actionCreator__WEBPACK_IMPORTED_MODULE_2__["getRecommendList"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(index)));

/***/ }),

/***/ "./src/application/Recommend/style.js":
/*!********************************************!*\
  !*** ./src/application/Recommend/style.js ***!
  \********************************************/
/*! exports provided: Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed;\n    top: .94rem;\n    left: 0;\n    bottom: ", ";\n    width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.play > 0 ? ".6rem" : 0;
});

/***/ }),

/***/ "./src/components/list/index.jsx":
/*!***************************************!*\
  !*** ./src/components/list/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./src/components/list/style.js");
/* harmony import */ var _music_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./music.png */ "./src/components/list/music.png");





/* 
  推荐的列表
*/

function RecommendList(props) {
  var recommendList = props.recommendList; // 点击触发进入歌单详情的页面

  var enterDetail = function enterDetail(id) {
    props.history.push("/recommend/".concat(id));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["ListWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title"
  }, "\u63A8\u8350\u6B4C\u5355"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["List"], null, recommendList.length !== 0 && recommendList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
      key: item.id,
      onClick: function onClick() {
        return enterDetail(item.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "img_wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "decorate"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazyload__WEBPACK_IMPORTED_MODULE_1___default.a, {
      scroll: true,
      placeholder: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        width: "100%",
        height: "100%",
        src: _music_png__WEBPACK_IMPORTED_MODULE_4__["default"],
        alt: "music"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: item.picUrl + "?param=300x300",
      width: "100%",
      height: "100%",
      alt: "music"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "play_count"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "iconfont play"
    }, "\uE885"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "count"
    }, Math.floor(item.playCount / 10000), "\u4E07"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "desc"
    }, item.name));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(RecommendList)));

/***/ }),

/***/ "./src/components/list/music.png":
/*!***************************************!*\
  !*** ./src/components/list/music.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/music-6275a6.png");

/***/ }),

/***/ "./src/components/list/style.js":
/*!**************************************!*\
  !*** ./src/components/list/style.js ***!
  \**************************************/
/*! exports provided: ListWrapper, List, ListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListWrapper", function() { return ListWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/global-style */ "./src/assets/global-style.js");


function _templateObject3() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n   position: relative;\n  width: 32%;\n  .decorate {\n    z-index: 1;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: .35rem;\n    border-radius: .03rem;\n    background: linear-gradient(hsla(0,0%,43%,.4),hsla(0,0%,100%,0));\n  }\n  .img_wrapper{\n    position: relative;\n    height: 0;\n    padding-bottom: 100%;\n    .play_count {\n      z-index: 1;\n      position: absolute;\n      right: .02rem;\n      top: .02rem;\n      font-size: ", ";\n      line-height: .15rem;\n      color: ", ";\n      .play{\n        vertical-align: top;\n      }\n    }\n    img {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      border-radius: .03rem;\n    }\n  }\n  .desc {\n      overflow: hidden;\n      margin-top: .02rem;\n      padding: 0 .02rem;\n      height: .5rem;\n      text-align: left;\n      font-size: ", ";\n      line-height: 1.4;\n      color: ", ";\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  display : flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  &:after {\n    content : \"\",\n    flex: auto\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-width: 100%;\n  .title{\n    font-weight: 700;\n    padding-left: .06rem;\n    font-size: .14rem;\n    line-height: .4rem; \n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3(), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-size-s"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-light"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-size-s"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc"]);

/***/ }),

/***/ "./src/components/slider/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/slider/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/carousel/style/css */ "./node_modules/antd-mobile/lib/carousel/style/css.js");
/* harmony import */ var antd_mobile_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/carousel */ "./node_modules/antd-mobile/lib/carousel/index.js");
/* harmony import */ var antd_mobile_lib_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./src/components/slider/style.js");




/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(function index(props) {
  var bannerList = props.bannerList;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["SliderContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["Before"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["Swipe"], null, bannerList.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_mobile_lib_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
    autoplay: true,
    infinite: true,
    dotActiveStyle: {
      backgroundColor: "#d44439"
    },
    dotStyle: {
      background: "#000",
      opacity: .2
    }
  }, bannerList.map(function (val) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      key: val,
      href: "#",
      style: {
        display: 'inline-block',
        width: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: val.imageUrl,
      alt: "\u63A8\u8350",
      style: {
        width: '100%',
        verticalAlign: 'top'
      },
      onLoad: function onLoad() {
        window.dispatchEvent(new Event('resize'));
      }
    }));
  }))));
}));

/***/ }),

/***/ "./src/components/slider/style.js":
/*!****************************************!*\
  !*** ./src/components/slider/style.js ***!
  \****************************************/
/*! exports provided: SliderContainer, Swipe, Before */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderContainer", function() { return SliderContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swipe", function() { return Swipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Before", function() { return Before; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject3() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  top: -3rem;\n  height: 4rem;\n  width: 100%;\n  background: #d44439;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width : 3.67rem;\n  height: 1.6rem;\n  margin: 0 auto;\n  border-radius: .06rem;\n  div{\n    border-radius : .06rem;\n  }\n  img{\n    height: 1.6rem;\n    border-radius : .06rem\n  }\n  .slider-decorator-0{\n    bottom : .1rem !important;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var SliderContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var Swipe = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var Before = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());

/***/ }),

/***/ "./src/utils/EnterLoading.js":
/*!***********************************!*\
  !*** ./src/utils/EnterLoading.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed;\n    left: 0; right: 0; top: 0; bottom: 0;\n    width: 1rem;\n    height: 1rem;\n    margin: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var EnterLoading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(EnterLoading));

/***/ })

}]);
//# sourceMappingURL=4-80771a24e13fded63a52.js.map