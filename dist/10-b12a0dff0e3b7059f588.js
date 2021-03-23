(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./src/application/MV/index.jsx":
/*!**************************************!*\
  !*** ./src/application/MV/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/button/style/css */ "./node_modules/antd-mobile/lib/button/style/css.js");
/* harmony import */ var antd_mobile_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/button */ "./node_modules/antd-mobile/lib/button/index.js");
/* harmony import */ var antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_mobile_lib_list_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd-mobile/lib/list/style/css */ "./node_modules/antd-mobile/lib/list/style/css.js");
/* harmony import */ var antd_mobile_lib_list_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_list_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd-mobile/lib/list */ "./node_modules/antd-mobile/lib/list/index.js");
/* harmony import */ var antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./src/application/MV/style.js");
/* harmony import */ var _store_actionCreator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/actionCreator */ "./src/application/MV/store/actionCreator.js");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/esm/react-router-config.js");
/* harmony import */ var baseUI_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! baseUI/scroll */ "./src/baseUI/scroll/index.js");










var Item = antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_3___default.a.Item;
/**
 * 推荐MV的组件
 * @returns 
 */

function MV(props) {
  var area = props.area,
      mvList = props.mvList,
      pullUpLoading = props.pullUpLoading,
      pullDownLoading = props.pullDownLoading,
      count = props.count,
      hasMore = props.hasMore,
      offset = props.offset,
      limit = props.limit,
      history = props.history;
  var getMvListDispatch = props.getMvListDispatch,
      changeLoadingDispatch = props.changeLoadingDispatch,
      changePullUpLoadingDispatch = props.changePullUpLoadingDispatch,
      setOffsetDispatch = props.setOffsetDispatch,
      getMvLoadingMoreDispatch = props.getMvLoadingMoreDispatch;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    getMvListDispatch(area);
  }, []);
  /**
   * 上拉
   */

  var handlePullUp = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    if (!pullUpLoading) {
      setOffsetDispatch(offset + limit);
      changePullUpLoadingDispatch(true);
      getMvLoadingMoreDispatch(area, offset + limit, limit);
    }
  });
  /**
   * 下拉
   */

  var handlePullDown = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    setOffsetDispatch(0);
    changeLoadingDispatch(true);
    getMvListDispatch(area);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["ListContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(baseUI_scroll__WEBPACK_IMPORTED_MODULE_9__["default"], {
    pullUp: handlePullUp,
    pullDown: handlePullDown,
    pullDownLoading: pullDownLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "mvList",
    renderHeader: function renderHeader() {
      return area;
    }
  }, mvList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Item, {
      onClick: function onClick() {
        history.push("/mv/".concat(item.id));
      },
      arrow: "horizontal",
      wrap: true,
      multipleLine: true,
      extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "mvInfo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "name"
      }, item.name)),
      thumb: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "img_wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "playCount"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        className: "iconfont play"
      }, "\uE885"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, item.playCount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: item.cover,
        alt: ""
      })),
      key: item.id
    });
  }), hasMore ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: handlePullUp,
    activeStyle: false,
    loading: pullUpLoading,
    className: "moreBtn",
    size: "small",
    inline: true,
    type: "primary"
  }, "\u52A0\u8F7D\u66F4\u591A") : ""))), Object(react_router_config__WEBPACK_IMPORTED_MODULE_8__["renderRoutes"])(props.route.routes));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    area: state.getIn(["mv", "area"]),
    mvList: state.getIn(["mv", "mvList"]),
    pullDownLoading: state.getIn(["mv", "pullDownLoading"]),
    pullUpLoading: state.getIn(["mv", "pullUpLoading"]),
    hasMore: state.getIn(["mv", "hasMore"]),
    count: state.getIn(["mv", "count"]),
    offset: state.getIn(["mv", "offset"]),
    limit: state.getIn(["mv", "limit"])
  };
};

var mapStateToDispatch = function mapStateToDispatch(dispatch) {
  return {
    getMvListDispatch: function getMvListDispatch(area) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_7__["getMvList"])(area));
    },
    // 改变下拉刷新列表数据
    changeLoadingDispatch: function changeLoadingDispatch(data) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_7__["changeLoading"])(data));
    },
    changePullUpLoadingDispatch: function changePullUpLoadingDispatch(data) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_7__["changePullUpLoding"])(data));
    },
    getMvLoadingMoreDispatch: function getMvLoadingMoreDispatch(area, offset, limit) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_7__["getMvLoadingMore"])(area, offset, limit));
    },
    setOffsetDispatch: function setOffsetDispatch(offset) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_7__["setOffset"])(offset));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapStateToDispatch)(react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(MV)));

/***/ }),

/***/ "./src/application/MV/style.js":
/*!*************************************!*\
  !*** ./src/application/MV/style.js ***!
  \*************************************/
/*! exports provided: ListContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListContainer", function() { return ListContainer; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  top: .94rem;\n  bottom: ", ";\n  width: 100%;\n  .mvList{\n      .am-list-body{\n        padding-top: .2rem;\n        padding-bottom: .2rem;\n      }\n  }\n  .img_wrapper{\n      position: relative;\n      .playCount {\n        color:#ddd;\n        font-size: 14px;\n        display:flex;\n        align-items: center;\n        position: absolute;\n        bottom: .05rem;\n        right: .05rem;\n    }\n\n  }\n.am-list-item{\n    padding-bottom: .2rem;\n    &:nth-last-of-type(1){\n        padding-bottom: 0;\n    }\n}\n.am-list-item img {\n    width: 1.8rem;\n    height: auto;\n}\n.am-list-extra{\n    flex: 1;\n}\n.mvInfo{\n    width: 100%;\n    display:flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    text-align: left;\n    \n    .name {\n        font-size: 14px;\n        color: #333;\n    }\n}\n.moreBtn{\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 1.2rem;\n    top: .12rem;\n    background: #d44439;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.play > 0 ? ".6rem" : 0;
});

/***/ })

}]);
//# sourceMappingURL=10-b12a0dff0e3b7059f588.js.map