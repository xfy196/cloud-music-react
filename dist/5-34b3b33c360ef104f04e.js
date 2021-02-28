(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/application/Singers/index.jsx":
/*!*******************************************!*\
  !*** ./src/application/Singers/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var baseUI_horizen_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baseUI/horizen-item */ "./src/baseUI/horizen-item/index.jsx");
/* harmony import */ var api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! api/config */ "./src/api/config.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/application/Singers/style.js");
/* harmony import */ var _store_actionCreator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/actionCreator */ "./src/application/Singers/store/actionCreator.js");
/* harmony import */ var baseUI_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! baseUI/scroll */ "./src/baseUI/scroll/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _singer_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./singer.png */ "./src/application/Singers/singer.png");
/* harmony import */ var baseUI_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! baseUI/loading */ "./src/baseUI/loading/index.jsx");
/* harmony import */ var utils_EnterLoading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/EnterLoading */ "./src/utils/EnterLoading.js");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/esm/react-router-config.js");













function Singers(props) {
  var scrollRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var category = props.category,
      alpha = props.alpha,
      songsCount = props.songsCount,
      enterLoading = props.enterLoading,
      pullUpLoading = props.pullUpLoading,
      pullDownLoading = props.pullDownLoading;
  var updateCategory = props.updateCategory,
      getHotSinger = props.getHotSinger,
      updateAlpha = props.updateAlpha,
      pullUpRefresh = props.pullUpRefresh,
      pullDownRefresh = props.pullDownRefresh;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!category) {
      getHotSinger();
    }
  }, []);
  /* 
    处理点击分类获取的key将这个key值重新放入props中然后通过这个值和分类列表的key进行比较保证点击的分类高亮显示
  */

  var handleUpdateCategory = function handleUpdateCategory(key) {
    // 如果key值和上次当前选中的值相等直接return不需要再次触发dispatch方法
    if (category === key) {
      return;
    }

    updateCategory(key); //对应明星的数据加载功能为实现
  };

  var handleUpdateAlpha = function handleUpdateAlpha(key) {
    // 如果是重复点击直接return
    if (alpha === key) {
      return;
    }

    updateAlpha(key);
  };
  /* 
    处理上拉加载更多
  */


  var handlePullUp = function handlePullUp() {
    // 触发一个刷新的函数
    pullUpRefresh(category === "" && alpha === "");
  };

  var handlePullDown = function handlePullDown() {
    pullDownRefresh(category, alpha);
  }; // 进入详情页面的函数


  var enterDetail = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (id) {
    props.history.push("/singers/".concat(id));
  }); // 渲染歌手的数据

  var renderSingerList = function renderSingerList() {
    // 拿到歌手的数据
    var singersList = props.singersList;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["List"], null, singersList.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
        key: item.id,
        className: "border-bottom",
        onClick: function onClick() {
          return enterDetail(item.id);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img_container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazyload__WEBPACK_IMPORTED_MODULE_7___default.a, {
        placeholder: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: _singer_png__WEBPACK_IMPORTED_MODULE_8__["default"],
          alt: "\u6B4C\u624B",
          width: "100%",
          height: "100%"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "".concat(item.picUrl, "?param=300x300"),
        width: "100%",
        height: "100%",
        alt: "\u6B4C\u624B"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "name"
      }, item.name));
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["NavContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseUI_horizen_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "分类(默认热门):",
    handleClick: function handleClick(key) {
      return handleUpdateCategory(key);
    },
    list: api_config__WEBPACK_IMPORTED_MODULE_3__["categoryTypes"],
    currentKey: category
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseUI_horizen_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "首字母:",
    handleClick: function handleClick(key) {
      return handleUpdateAlpha(key);
    },
    list: api_config__WEBPACK_IMPORTED_MODULE_3__["alphaTypes"],
    currentKey: alpha
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["ListContainer"], {
    play: songsCount
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseUI_scroll__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onScroll: react_lazyload__WEBPACK_IMPORTED_MODULE_7__["forceCheck"],
    ref: scrollRef,
    pullUp: handlePullUp,
    pullDown: handlePullDown,
    pullUpLoading: pullUpLoading,
    pullDownLoading: pullDownLoading
  }, renderSingerList())), enterLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(utils_EnterLoading__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseUI_loading__WEBPACK_IMPORTED_MODULE_9__["default"], null)) : null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_11__["renderRoutes"])(props.route.routes));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    category: state.getIn(["singers", "category"]),
    singersList: state.getIn(["singers", "singersList"]),
    alpha: state.getIn(["singers", "alpha"]),
    enterLoading: state.getIn(["singers", "enterLoading"]),
    pullUpLoading: state.getIn(["singers", "pullUpLoading"]),
    pullDownLoading: state.getIn(["singers", "pullDownLoading"]),
    songsCount: state.getIn(["player", "playList"]).size
  };
};

var mapDispatchTProps = function mapDispatchTProps(dispatch) {
  return {
    updateCategory: function updateCategory(id) {
      // 派发更新分类数据
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["changeCategory"])(id)); // 重新派发获取对应分类的歌手的数据

      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["getSingerList"])());
    },
    updateAlpha: function updateAlpha(key) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["changeAlpha"])(key));
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["getSingerList"])());
    },
    getHotSinger: function getHotSinger() {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["getHotSingerList"])());
    },
    // 滑动的函数
    pullUpRefresh: function pullUpRefresh(hotFlag) {
      // 更新正在加载更多的动画标识
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["changePullUpLoading"])(true)); // 通过判断是否为加载热门歌手还是分类歌手派发不同的方法

      if (hotFlag) {
        // 重新加载更多热门歌手数据
        dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["refreshMoreHotSingerList"])());
      } else {
        dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["refreshMoreSingerList"])());
      }
    },
    pullDownRefresh: function pullDownRefresh(category, alpha) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["changePullDownLoading"])(true));
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["changeListOffset"])(0));

      if (category === "" && alpha === "") {
        // 说明这是热门数据的刷新
        dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["getHotSingerList"])());
      } else {
        // 否则说明含有分类和字母分类的数据刷新
        dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["getSingerList"])());
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchTProps)(react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Singers)));

/***/ }),

/***/ "./src/application/Singers/singer.png":
/*!********************************************!*\
  !*** ./src/application/Singers/singer.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/singer-2681a7.png");

/***/ }),

/***/ "./src/application/Singers/style.js":
/*!******************************************!*\
  !*** ./src/application/Singers/style.js ***!
  \******************************************/
/*! exports provided: NavContainer, ListContainer, List, ListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavContainer", function() { return NavContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListContainer", function() { return ListContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var _Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/global-style.js */ "./src/assets/global-style.js");


var _templateObject, _templateObject2, _templateObject3, _templateObject4;



var NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  box-sizing: border-box;\n  position: fixed;\n  top: 95px;\n  width: 100%;\n  padding: 5px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column; \n"]))); // ；歌手列表容器

var ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2 || (_templateObject2 = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  top: 1.6rem;\n  left: 0;\n  bottom: ", ";\n  overflow: hidden;\n  width: 100%;\n"])), function (props) {
  return props.play ? ".6rem" : 0;
});
var List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3 || (_templateObject3 = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display : flex;\n  margin : auto;\n  flex-direction: column;\n  overflow: hidden;\n  .title {\n    margin:.1rem 0 .1rem .1rem;\n    color: ", ";\n    font-size: ", ";\n  }\n"])), assets_global_style_js__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc"], assets_global_style_js__WEBPACK_IMPORTED_MODULE_2__["default"]["font-size-s"]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4 || (_templateObject4 = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display : flex;\n  box-sizing : border-box;\n  flex-direction : row;\n  margin : 0 .05rem;\n  padding : .05rem 0;\n  align-items : center;\n  border-bottom: 1px solid ", ";\n  .img_container {\n    margin-right : .2rem;\n    img {\n      width : .5rem;\n      height : .5rem;\n      border-radius : .03rem;\n    }\n  }\n  .name {\n    font-weight: 500;\n    font-size : ", ";\n    color : ", "\n  }\n"])), assets_global_style_js__WEBPACK_IMPORTED_MODULE_2__["default"]["border-color"], assets_global_style_js__WEBPACK_IMPORTED_MODULE_2__["default"]["font-size-m"], assets_global_style_js__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc"]);

/***/ }),

/***/ "./src/baseUI/horizen-item/index.jsx":
/*!*******************************************!*\
  !*** ./src/baseUI/horizen-item/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scroll */ "./src/baseUI/scroll/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./src/baseUI/horizen-item/style.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);





/* 
水平列表的ui组件
*/

function Horizen(props) {
  // 因为第一次加载这个分类数据的时候呢我们的使用better-scroll的时候没有高度就无法进行滚动所以我们需要进行手动计算高度
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      refreshCategoryScroll = _useState2[0],
      setRefreshCategoryScroll = _useState2[1]; // 拿到这个bettrer-scroll作用的第一个元素的节点


  var Category = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null); // 使用Effect的方法来计算分类出现的宽度问题 每次进行比对宽度

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // 拿到当前分类节点
    var categoryDOM = Category.current; // 获取他下面所有的span标签

    var tagElems = categoryDOM.querySelectorAll("span"); // 定义总宽度的变量

    var totalWidth = 0; // 通过数组的方法循环求和宽度

    Array.from(tagElems).forEach(function (ele) {
      totalWidth += ele.offsetWidth;
    });
    totalWidth += 2;
    categoryDOM.style.width = "".concat(totalWidth, "px"); // 然后将state之后的状态设置为true放置多次计算

    setRefreshCategoryScroll(true);
  }, [refreshCategoryScroll]);
  var title = props.title,
      list = props.list,
      handleClick = props.handleClick,
      currentKey = props.currentKey;

  var clickHandle = function clickHandle(item) {
    handleClick(item.key);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_scroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "horizental",
    refresh: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: Category
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["List"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, title), list.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
      key: item.key,
      onClick: function onClick() {
        return clickHandle(item);
      },
      className: currentKey === item.key ? "selected border" : ""
    }, item.name);
  }))));
}

Horizen.defaultProps = {
  list: [],
  handleClick: null,
  title: ""
};
Horizen.PropTypes = {
  list: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.Array,
  title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  handleCLick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Horizen));

/***/ }),

/***/ "./src/baseUI/horizen-item/style.js":
/*!******************************************!*\
  !*** ./src/baseUI/horizen-item/style.js ***!
  \******************************************/
/*! exports provided: List, ListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var _Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/global-style */ "./src/assets/global-style.js");


var _templateObject, _templateObject2;



var List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display : flex;\n  align-items : center;\n  height : .3rem;\n  justify-content: center;\n  overflow: hidden;\n  >span:first-of-type{\n    display: block;\n    flex: 0 0 auto;\n    padding: .05rem 0;\n    color: grey;\n    font-size: ", ";\n    vertical-align: middle;\n  }\n"])), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-size-m"]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject2 || (_templateObject2 = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  flex: 0 0 auto;\n  font-size: ", ";\n  padding: .05rem .05rem;\n  border-radius: .1rem;\n  &.selected{\n    color: ", ";\n    border: 1px solid ", ";\n    opacity: 0.8;\n  }\n  &:before{\n    border: none;\n  }\n"])), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-size-m"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["theme-color"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["theme-color"]);

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


var _templateObject;



var EnterLoading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = Object(_Users_xufuying_Desktop_study_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed;\n    left: 0; right: 0; top: 0; bottom: 0;\n    width: 1rem;\n    height: 1rem;\n    margin: auto;\n"])));
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(EnterLoading));

/***/ })

}]);
//# sourceMappingURL=5-34b3b33c360ef104f04e.js.map