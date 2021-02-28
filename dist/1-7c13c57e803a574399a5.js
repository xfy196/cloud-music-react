(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/application/SongList/index.jsx":
/*!********************************************!*\
  !*** ./src/application/SongList/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/application/SongList/style.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils */ "./src/utils/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var application_Player_store_actionCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! application/Player/store/actionCreator */ "./src/application/Player/store/actionCreator.js");





var SongListCom = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, refs) {
  var songs = props.songs,
      collectCount = props.collectCount,
      showCollect = props.showCollect,
      musicAnimation = props.musicAnimation;
  var changePlayListDispatch = props.changePlayListDispatch,
      changeCurrentIndexDispatch = props.changeCurrentIndexDispatch,
      changeSequecePlayListDispatch = props.changeSequecePlayListDispatch;
  var totalCount = songs.length;

  var selectItem = function selectItem(e, index) {
    changePlayListDispatch(songs);
    changeSequecePlayListDispatch(songs);
    changeCurrentIndexDispatch(index);
    musicAnimation(e.nativeEvent.clientX, e.nativeEvent.clientY);
  };

  var renderSongItem = function renderSongItem(list) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["SongItem"], null, list.length !== 0 && list.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: item.id,
        onClick: function onClick(e) {
          return selectItem(e, index);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "index"
      }, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item.ar ? Object(utils__WEBPACK_IMPORTED_MODULE_2__["getName"])(item.ar) : Object(utils__WEBPACK_IMPORTED_MODULE_2__["getName"])(item.artists), " - ", item.al ? item.al.name : item.album.name)));
    }));
  };

  var renderCollect = function renderCollect(collectCount) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add_list"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "iconfont"
    }, "\uE62D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u6536\u85CF(", Math.floor(collectCount / 1000) / 10, "\u4E07)"));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["SongList"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "first_line border-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "play_all",
    onClick: function onClick(e) {
      return selectItem(e, 0);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "iconfont"
  }, "\uE6E3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u64AD\u653E\u5168\u90E8", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sum"
  }, " (\u5171", totalCount, "\u9996)"))), showCollect ? renderCollect(collectCount) : null), renderSongItem(songs));
});

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changePlayListDispatch: function changePlayListDispatch(data) {
      dispatch(Object(application_Player_store_actionCreator__WEBPACK_IMPORTED_MODULE_4__["changePlayList"])(data));
    },
    changeCurrentIndexDispatch: function changeCurrentIndexDispatch(data) {
      dispatch(Object(application_Player_store_actionCreator__WEBPACK_IMPORTED_MODULE_4__["changeCurrentIndex"])(data));
    },
    changeSequecePlayListDispatch: function changeSequecePlayListDispatch(data) {
      dispatch(Object(application_Player_store_actionCreator__WEBPACK_IMPORTED_MODULE_4__["changeSequecePlayList"])(data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SongListCom)));

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
/* harmony import */ var _Users_xufuying_Desktop_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/global-style */ "./src/assets/global-style.js");


function _templateObject2() {
  var data = Object(_Users_xufuying_Desktop_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  >li {\n    display : flex;\n    align-items : center;\n    height : .6rem;\n    .index {\n      font-size : .16rem;\n      flex-basis: .6rem;\n      width: .60rem;\n      height: .60rem;\n      line-height: .60rem;\n      text-align: center;\n    }\n    .info {\n      box-sizing : border-box;\n      flex: 1;\n      height : 100%;\n      display :flex;\n      flex-direction : column;\n      padding : .05rem 0;\n      justify-content : space-around;\n      border-bottom-style : solid;\n      border-bottom-color : ", ";\n      text-overflow: ellipsis;\n      overflow : hidden;\n      white-space : nowrap; \n      >span{\n        text-overflow : ellipsis;\n        overflow: hidden;\n        white-space : nowrap;\n        &:first-child {\n          font-size : .16rem;\n          color : ", ";\n        }\n        &:last-child {\n          font-size : .12rem;\n          color : ", ";\n        }\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_xufuying_Desktop_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background : #fff;\n  opacity: 0.98;\n  border-radius : .1rem;\n  .first_line {\n    display : flex;\n    box-sizing: border-box;\n    padding: .1rem 0;\n    margin-left: .1rem;\n    position: relative;\n    justify-content: space-between;\n    border-bottom-style: solid;\n    border-bottom-color: ", ";\n    .play_all {\n      display: inline-block;\n      line-height: .24rem;\n      color: ", ";\n      i{\n        font-size : .24rem;\n        margin-right: .1rem;\n        vertical-align: top;\n      }\n      >span{\n        vertical-align : top;\n        font-size : .16rem;\n      }\n      .sum {\n        font-size: .12rem;\n        color: ", ";\n      }\n    }\n    .add_list {\n      display : flex;\n      align-items: center;\n      position: absolute;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      width: 1.3rem;\n      line-height: .34rem;\n      background: #d44439;\n      color: ", ";\n      font-size: 0;\n      border-radius: .03rem;\n      vertical-align: top;\n      i{\n        vertical-align: top;\n        font-size: .1rem;\n        margin: 0 .05rem 0 .1rem;\n      }\n      span {\n        font-size: .14rem;\n        line-height: .34rem;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var SongList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["border-color"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc-v2"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-light"]);
var SongItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul(_templateObject2(), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["border-color"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc-v2"]);

/***/ }),

/***/ "./src/baseUI/header/index.jsx":
/*!*************************************!*\
  !*** ./src/baseUI/header/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xufuying_Desktop_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_Users_xufuying_Desktop_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position : fixed;\n  padding : .05rem .1rem;\n  padding-top : 0;\n  height : .44rem;\n  width : 100%;\n  z-index: 100;\n  display : flex;\n  line-height : .44rem;\n  color: #f1f1f1;\n  >i{\n    margin-right: .05rem;\n    font-size: .2rem;\n    width: .2rem;\n  }\n  h1{\n    font-size: .16rem;\n    font-weight: 700;\n    margin : 0;\n  }\n"]);

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
  title: '标题'
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Header));

/***/ }),

/***/ "./src/baseUI/music-note/index.js":
/*!****************************************!*\
  !*** ./src/baseUI/music-note/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xufuying_Desktop_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/global-style */ "./src/assets/global-style.js");


function _templateObject() {
  var data = Object(_Users_xufuying_Desktop_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .icon_wrapper{\n    position: fixed;\n    z-index: 1000;\n    margin-top: -.1rem;\n    margin-left: -.1rem;\n    color: ", ";\n    font-size: .14rem;\n    display: none;\n    transition: transform 1s cubic-bezier(.62,-0.1,.86,.57);\n    transform: translate3d(0, 0, 0);\n    >div{\n      transition: transform 1s;\n    }\n  }\n"]);

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

/***/ "./src/utils/EnterLoading.js":
/*!***********************************!*\
  !*** ./src/utils/EnterLoading.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xufuying_Desktop_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_Users_xufuying_Desktop_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed;\n    left: 0; right: 0; top: 0; bottom: 0;\n    width: 1rem;\n    height: 1rem;\n    margin: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var EnterLoading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(EnterLoading));

/***/ })

}]);
//# sourceMappingURL=1-7c13c57e803a574399a5.js.map