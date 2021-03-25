(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/application/MvDetail/index.jsx":
/*!********************************************!*\
  !*** ./src/application/MvDetail/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/application/MvDetail/style.js");
/* harmony import */ var baseUI_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! baseUI/header */ "./src/baseUI/header/index.jsx");
/* harmony import */ var _store_actionCreator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/actionCreator */ "./src/application/MvDetail/store/actionCreator.js");
/* harmony import */ var utils_EnterLoading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/EnterLoading */ "./src/utils/EnterLoading.js");
/* harmony import */ var baseUI_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! baseUI/loading */ "./src/baseUI/loading/index.jsx");










function MvDetail(props) {
  var match = props.match,
      immuableMvDetail = props.mvDetail,
      immuableUrl = props.url,
      enterLoading = props.enterLoading;
  var changeEnterLoadingDispatch = props.changeEnterLoadingDispatch;
  var mvDetail = immuableMvDetail.toJS();
  var url = immuableUrl.toJS();
  var getMvDetailDispatch = props.getMvDetailDispatch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      showStatus = _useState2[0],
      setShowStatus = _useState2[1];

  var headerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var handleBack = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setShowStatus(false);
    changeEnterLoadingDispatch(true);
  });
  /**
   * 第一次进入需要请求获取mv详情的接口
   */

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getMvDetailDispatch(match.params.id);
  }, [match.params.id]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["CSSTransition"], {
    "in": showStatus,
    timeout: 300,
    appear: true,
    classNames: "fly",
    mountOnEnter: true,
    unmountOnExit: true,
    onExited: props.history.goBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["MvDetailStyled"], null, enterLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(utils_EnterLoading__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(baseUI_loading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      zIndex: 100
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(baseUI_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleClick: handleBack,
    title: mvDetail.data.name,
    ref: headerRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mvDetail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("video", {
    controls: true,
    src: url.data.url
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mvInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "mvName"
  }, mvDetail.data.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "artistName"
  }, mvDetail.data.artistName))))));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    mvDetail: state.getIn(["mvDetail", "mvDetail"]),
    url: state.getIn(["mvDetail", "url"]),
    enterLoading: state.getIn(["mvDetail", "enterLoading"])
  };
};

var mapStateToDispatch = function mapStateToDispatch(dispatch) {
  return {
    getMvDetailDispatch: function getMvDetailDispatch(id) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_6__["getMvDetail"])(id));
    },
    changeEnterLoadingDispatch: function changeEnterLoadingDispatch(data) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_6__["changeEnterLoading"])(data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapStateToDispatch)(react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(MvDetail)));

/***/ }),

/***/ "./src/application/MvDetail/style.js":
/*!*******************************************!*\
  !*** ./src/application/MvDetail/style.js ***!
  \*******************************************/
/*! exports provided: MvDetailStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MvDetailStyled", function() { return MvDetailStyled; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position : fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom : 0;\n  z-index: 100;\n  width: 100%;\n  overflow: hidden;\n  background : #f2f3f4;\n  transform-origin : right bottom;\n  >header{\n      color: inherit;\n  }\n  .mvDetail{\n      padding-top: 0.49rem;\n      video{\n          width: 100%;\n          height: auto;\n      }\n      .mvInfo{\n          display: flex;\n          padding: 0 .1rem;\n          flex-direction: column;\n          .mvName {\n              color: #000;\n              font-weight: 600;\n              font-size: 14px;\n          }\n          .artistName{\n              font-size: 12px;\n              color: #666;\n              margin-top: .03rem;\n          }\n      }\n  }\n  &.fly-enter, &.fly-appear{\n    transform: rotateZ(30deg) translate3d(100%, 0, 0)\n  }\n  &.fly-enter-active, &.fly-appear-active{\n      transition: transform 0.3s;\n      transform: rotateZ(0deg) translate3d(0, 0, 0)\n  }\n  &.fly-exit{\n      transform: rotateZ(0deg) translate3d(0, 0, 0);\n  }\n  &.fly-exit-active{\n   transition: transform 0.3s;\n   transform: rotateZ(30deg) translate3d(100%, 0, 0)   \n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var MvDetailStyled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());

/***/ }),

/***/ "./src/baseUI/header/index.jsx":
/*!*************************************!*\
  !*** ./src/baseUI/header/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position : fixed;\n  padding : .05rem .1rem;\n  padding-top : 0;\n  height : .44rem;\n  width : 100%;\n  z-index: 100;\n  display : flex;\n  line-height : .44rem;\n  color: #f1f1f1;\n  >i{\n    margin-right: .05rem;\n    font-size: .2rem;\n    width: .2rem;\n  }\n  h1{\n    font-size: .16rem;\n    font-weight: 700;\n    margin : 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ContainerHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].header(_templateObject());
var Header = Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function (props, ref) {
  var title = props.title,
      handleClick = props.handleClick,
      isMarquee = props.isMarquee;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContainerHeader, {
    ref: ref
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "iconfont back",
    onClick: handleClick
  }, "\uE655"), // eslint-disable-next-line
  isMarquee ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("marquee", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, title)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, title));
});
Header.defaultProps = {
  handleClick: function handleClick() {},
  title: ''
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Header));

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
//# sourceMappingURL=8-bf4d11b065680c89ebac.js.map