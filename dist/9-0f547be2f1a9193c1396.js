(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./src/application/Rank/index.jsx":
/*!****************************************!*\
  !*** ./src/application/Rank/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/application/Rank/style.js");
/* harmony import */ var baseUI_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baseUI/scroll */ "./src/baseUI/scroll/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actionCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/actionCreator */ "./src/application/Rank/store/actionCreator.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils */ "./src/utils/index.js");
/* harmony import */ var baseUI_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! baseUI/loading */ "./src/baseUI/loading/index.jsx");
/* harmony import */ var utils_EnterLoading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/EnterLoading */ "./src/utils/EnterLoading.js");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/esm/react-router-config.js");










function Rank(props) {
  var rankList = props.rankList,
      loading = props.loading;
  var getRankListDispatch = props.getRankListDispatch;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!rankList.length) {
      getRankListDispatch();
    }
  }, []);

  var enterDetail = function enterDetail(id) {
    props.history.push("/rank/".concat(id));
  };

  var renderSongList = function renderSongList(list) {
    return list.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["SongList"], null, list.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: index
      }, index + 1, ". ", item.first, " ", item.second);
    }));
  };

  var renderRankList = function renderRankList(list, global) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["List"], {
      globalRank: global
    }, list.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
        key: item.id,
        className: "border-bottom",
        onClick: function onClick() {
          return enterDetail(item.id);
        },
        tracks: item.tracks
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img_wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: item.coverImgUrl,
        alt: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "decorate"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "update_frequecy"
      }, item.updateFrequency)), renderSongList(item.tracks));
    }));
  }; // 需要对rankList的数据进行一次处理先拿到官方榜的数据需要过滤数据拿到对象的index下标在进行slice


  var globalStartIndex = Object(utils__WEBPACK_IMPORTED_MODULE_5__["filterIndex"])(rankList); // 官方榜的数据

  var officalList = rankList.slice(0, globalStartIndex); // 全球榜的数据

  var globalList = rankList.slice(globalStartIndex);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseUI_scroll__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "offical"
  }, "\u5B98\u65B9\u699C"), renderRankList(officalList), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "global"
  }, "\u5168\u7403\u699C"), renderRankList(globalList, true), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(utils_EnterLoading__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseUI_loading__WEBPACK_IMPORTED_MODULE_6__["default"], null)) : null)), Object(react_router_config__WEBPACK_IMPORTED_MODULE_8__["renderRoutes"])(props.route.routes));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    rankList: state.getIn(["rank", "rankList"]),
    loading: state.getIn(["rank", "loading"])
  };
};

var mapStateToDispatch = function mapStateToDispatch(dispatch) {
  return {
    getRankListDispatch: function getRankListDispatch() {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_4__["getRankList"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapStateToDispatch)(react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Rank)));

/***/ }),

/***/ "./src/application/Rank/style.js":
/*!***************************************!*\
  !*** ./src/application/Rank/style.js ***!
  \***************************************/
/*! exports provided: Container, List, ListItem, SongList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongList", function() { return SongList; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/global-style */ "./src/assets/global-style.js");


function _templateObject4() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex : 1;\n  padding : .1rem .1rem;\n  flex-direction : column;\n  justify-content: space-around;\n  li {\n    font-size: .12rem;\n    color: grey;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n/* \u901A\u8FC7\u5224\u65AD\u662F\u5426\u5B58\u5728\u6B4C\u66F2\u4FE1\u606F\u8BBE\u7F6E\u662F\u5426\u4E3A\u5F39\u6027\u76D2\u5B50 */\n  display : ", ";\n  padding .03rem 0;\n  border-bottom : 1px solid ", ";\n  .img_wrapper {\n    width:  ", ";\n    height: ", ";\n    position : relative;\n    img {\n      width: 100%;\n      height: 100%;\n      border-radius : .03rem;\n    }\n    .decorate {\n      position: absolute;\n      bottom: 0;\n      width: 100%;\n      height: .35rem;\n      border-radius: .03rem;\n      background: linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,43%,.4));\n    }\n    .update_frequecy{\n      position : absolute;\n      left: .07rem;\n      bottom: .07rem;\n      font-size: ", ";\n      color: ", ";\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top : .1rem;\n  display : ", ";\n  padding : 0 .05rem;\n  flex-direction : row;\n  flex-wrap : wrap;\n  background: ", ";\n  justify-content : space-between;\n  &::after{\n    content:\"\";\n    display:block;\n    width: 1.2rem\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  top: .94rem;\n  bottom: ", ";\n  width: 100%;\n  .offical,.global {\n    margin: .1rem .05rem;\n    padding-top : .15rem;\n    font-weight: 700;\n    font-size: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.play > 0 ? ".6rem" : 0;
}, assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-size-m"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul(_templateObject2(), function (props) {
  return props.globalRank ? "flex" : "";
}, assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["background-color"]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li(_templateObject3(), function (props) {
  return props.tracks.length ? "flex" : "";
}, assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["border-color"], function (props) {
  return props.tracks.length ? "1rem" : "1.2rem";
}, function (props) {
  return props.tracks.length ? "1rem" : "1.2rem";
}, assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-size-ss"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-light"]);
var SongList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul(_templateObject4());

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
//# sourceMappingURL=9-0f547be2f1a9193c1396.js.map