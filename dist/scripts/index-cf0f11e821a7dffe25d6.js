/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"scripts/index": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"scripts/index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "-" + {"0":"a1db89e53381affee7b2","1":"f17969c73731866a3a94","2":"f3ed6d1f82ec0efeb3b3","3":"fb1728d6910a0cc249a4","4":"80771a24e13fded63a52","5":"f552b7105220682a1d53","6":"1e531c453450b097d9c4","7":"6336640b55ef133d0555","8":"bf4d11b065680c89ebac","9":"0f547be2f1a9193c1396","10":"b12a0dff0e3b7059f588","11":"02126968290396a71cc6"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"2":1,"3":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + ({}[chunkId]||chunkId) + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~scripts/index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return APP; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "./src/style.js");
/* harmony import */ var assets_iconfont_iconfont__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/iconfont/iconfont */ "./src/assets/iconfont/iconfont.js");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/esm/react-router-config.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes */ "./src/routes/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/index */ "./src/store/index.js");













var APP = /*#__PURE__*/function (_Component) {
  Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(APP, _Component);

  var _super = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(APP);

  function APP() {
    Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, APP);

    return _super.apply(this, arguments);
  }

  Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(APP, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
        store: _store_index__WEBPACK_IMPORTED_MODULE_11__["default"]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__["GlobalStyle"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(assets_iconfont_iconfont__WEBPACK_IMPORTED_MODULE_8__["IconStyle"], null), Object(react_router_config__WEBPACK_IMPORTED_MODULE_9__["renderRoutes"])(_routes__WEBPACK_IMPORTED_MODULE_10__["default"]))));
    }
  }]);

  return APP;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "./src/api/config.js":
/*!***************************!*\
  !*** ./src/api/config.js ***!
  \***************************/
/*! exports provided: baseURL, axiosInstance, categoryTypes, alphaTypes, RankTypes, ONE_PAGE_COUNT, HEADER_HEIGHT, playMode, list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axiosInstance", function() { return axiosInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryTypes", function() { return categoryTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaTypes", function() { return alphaTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankTypes", function() { return RankTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE_PAGE_COUNT", function() { return ONE_PAGE_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_HEIGHT", function() { return HEADER_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playMode", function() { return playMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var baseURL = "https://music.xxytime.top";
var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: baseURL
});
/* 
配置拦截器 响应的结果正确是什么结果错误又是什么结果
*/

axiosInstance.interceptors.response.use(function (res) {
  return res.data;
}, function (err) {
  console.log(err, "网络错误");
});
 // 配置初始化的数据 歌手种类

var categoryTypes = [{
  name: "华语男",
  key: "1001"
}, {
  name: "华语女",
  key: "1002"
}, {
  name: "华语组合",
  key: "1003"
}, {
  name: "欧美男",
  key: "2001"
}, {
  name: "欧美女",
  key: "2002"
}, {
  name: "欧美组合",
  key: "2003"
}, {
  name: "日本男",
  key: "6001"
}, {
  name: "日本女",
  key: "6002"
}, {
  name: "日本组合",
  key: "6003"
}, {
  name: "韩国男",
  key: "7001"
}, {
  name: "韩国女",
  key: "7002"
}, {
  name: "韩国组合",
  key: "7003"
}, {
  name: "其他男歌手",
  key: "4001"
}, {
  name: "其他女歌手",
  key: "4002"
}, {
  name: "其他组合",
  key: "4003"
}]; //歌手首字母

var alphaTypes = [{
  key: "A",
  name: "A"
}, {
  key: "B",
  name: "B"
}, {
  key: "C",
  name: "C"
}, {
  key: "D",
  name: "D"
}, {
  key: "E",
  name: "E"
}, {
  key: "F",
  name: "F"
}, {
  key: "G",
  name: "G"
}, {
  key: "H",
  name: "H"
}, {
  key: "I",
  name: "I"
}, {
  key: "J",
  name: "J"
}, {
  key: "K",
  name: "K"
}, {
  key: "L",
  name: "L"
}, {
  key: "M",
  name: "M"
}, {
  key: "N",
  name: "N"
}, {
  key: "O",
  name: "O"
}, {
  key: "P",
  name: "P"
}, {
  key: "Q",
  name: "Q"
}, {
  key: "R",
  name: "R"
}, {
  key: "S",
  name: "S"
}, {
  key: "T",
  name: "T"
}, {
  key: "U",
  name: "U"
}, {
  key: "V",
  name: "V"
}, {
  key: "W",
  name: "W"
}, {
  key: "X",
  name: "X"
}, {
  key: "Y",
  name: "Y"
}, {
  key: "Z",
  name: "Z"
}]; //排行榜编号

var RankTypes = {
  "0": "云音乐新歌榜",
  "1": "云音乐热歌榜",
  "2": "网易原创歌曲榜",
  "3": "云音乐飙升榜",
  "4": "云音乐国电榜",
  "5": "UK排行榜周榜",
  "6": "美国Billboard周榜",
  "7": "KTV唛榜",
  "8": "iTunes榜",
  "9": "Hit FM Top榜",
  "10": "日本Oricon周榜",
  "11": "韩国Melon排行榜周榜",
  "12": "韩国Mnet排行榜周榜",
  "13": "韩国Melon原声周榜",
  "14": "中国TOP排行榜（港台榜）",
  "15": "中国TOP排行榜（内地榜）",
  "16": "香港电台中文歌曲龙虎榜",
  "17": "华语金曲榜",
  "18": "中国嘻哈榜",
  "19": "法国 NRJ Vos Hits 周榜",
  "20": "台湾Hito排行榜",
  "21": "Beatport全球电子舞曲榜",
  "22": "云音乐ACG音乐榜",
  "23": "江小白YOLO云音乐说唱榜"
}; //歌单一页限定歌曲数量

var ONE_PAGE_COUNT = 50; //顶部的高度

var HEADER_HEIGHT = 45; //播放模式

var playMode = {
  sequence: 0,
  loop: 1,
  random: 2
}; // 倍速播放配置

var list = [{
  key: 0.75,
  name: "x0.75"
}, {
  key: 1,
  name: "x1"
}, {
  key: 1.25,
  name: "x1.25"
}, {
  key: 1.5,
  name: "x1.5"
}, {
  key: 2,
  name: "x2"
}];

/***/ }),

/***/ "./src/api/lyric-parser.js":
/*!*********************************!*\
  !*** ./src/api/lyric-parser.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lyric; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");


var tagRegMap = {
  title: 'ti',
  artist: 'ar',
  album: 'al',
  offset: 'offset',
  by: 'by'
};
var STATE_PAUSE = 0;
var STATE_PLAYING = 1;

function noop() {} // 符合歌词的时间正则表达式


var timeExp = /\[(\d{2,}):(\d{2})(?:[\.\:](\d{2,3}))?]/g;

var Lyric = /*#__PURE__*/function () {
  function Lyric(lrc) {
    var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Lyric);

    this.lrc = lrc;
    this.tags = {};
    this.lines = [];
    this.handler = handler;
    this.state = STATE_PAUSE;
    this.curLineIndex = 0;
    this.speed = speed;
    this.offset = 0;

    this._init();
  } // 初始化的函数


  Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Lyric, [{
    key: "_init",
    value: function _init() {
      this._initTag();

      this._initLines();
    } // 初始化标签

  }, {
    key: "_initTag",
    value: function _initTag() {
      for (var tag in tagRegMap) {
        var matches = this.lrc.match(new RegExp("\\[".concat(tagRegMap[tag], ":([^\\]]*)]"), 'i'));
        this.tags[tag] = matches && (matches[1] || "");
      }
    } // 初始化的文字线标

  }, {
    key: "_initLines",
    value: function _initLines() {
      var lines = this.lrc.split('\n');

      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var result = timeExp.exec(line);

        if (result) {
          var txt = line.replace(timeExp, '').trim();

          if (txt) {
            if (result[3].length === 3) {
              result[3] = result[3] / 10;
            }

            this.lines.push({
              time: result[1] * 60 * 1000 + result[2] * 1000 + (result[3] || 0) * 10,
              txt: txt
            });
          }
        }
      }

      this.lines.sort(function (a, b) {
        return a.time - b.time;
      });
    }
  }, {
    key: "_findcurLineIndex",
    value: function _findcurLineIndex(time) {
      for (var i = 0; i < this.lines.length; i++) {
        if (time <= this.lines[i].time) {
          return i;
        }
      }

      return this.lines.length - 1;
    }
  }, {
    key: "_callHandler",
    value: function _callHandler(i) {
      if (i < 0) {
        return;
      }

      this.handler({
        txt: this.lines[i].txt,
        lineNum: i
      });
    }
  }, {
    key: "_playRest",
    value: function _playRest() {
      var _this = this;

      var isSeek = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var line = this.lines[this.curLineIndex];
      var delay;

      if (isSeek) {
        delay = line.time - (+new Date() - this.startStamp);
      } else {
        //拿到上一行的歌词开始时间，算间隔
        var preTime = this.lines[this.curLineIndex - 1] ? this.lines[this.curLineIndex - 1].time : 0;
        delay = line.time - preTime;
      }

      this.timer = setTimeout(function () {
        _this._callHandler(_this.curLineIndex++);

        if (_this.curLineIndex < _this.lines.length && _this.state === STATE_PLAYING) {
          _this._playRest();
        }
      }, delay / this.speed);
    }
  }, {
    key: "changeSpeed",
    value: function changeSpeed(speed) {
      this.speed = speed;
    }
  }, {
    key: "play",
    value: function play() {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var isSeek = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!this.lines.length) {
        return;
      }

      this.state = STATE_PLAYING;
      this.curLineIndex = this._findcurLineIndex(offset); //现在正处于第this.curLineIndex-1行

      this._callHandler(this.curLineIndex - 1);

      this.offset = offset;
      this.startStamp = +new Date() - offset;

      if (this.curLineIndex < this.lines.length) {
        clearTimeout(this.timer);

        this._playRest(isSeek);
      }
    }
  }, {
    key: "togglePlay",
    value: function togglePlay(offset) {
      if (this.state === STATE_PLAYING) {
        this.stop();
        this.offset = offset;
      } else {
        this.state = STATE_PLAYING;
        this.play(offset, true);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this.state = STATE_PAUSE;
      this.offset = 0;
      clearTimeout(this.timer);
    }
  }, {
    key: "seek",
    value: function seek(offset) {
      this.play(offset, true);
    }
  }]);

  return Lyric;
}();



/***/ }),

/***/ "./src/api/request.js":
/*!****************************!*\
  !*** ./src/api/request.js ***!
  \****************************/
/*! exports provided: getBannerRequest, getRecommendRequest, getHotSingerListRequest, getSingerListRequest, getRankListRequest, getAlbumListRequest, getSingerDataRequest, getHotKeyWordsRequest, getSuggestListRequest, getResultSongsListRequest, getSongDetailRequest, getLyricRequest, getMvListRequest, getMvDetailRequest, getMvUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBannerRequest", function() { return getBannerRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecommendRequest", function() { return getRecommendRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotSingerListRequest", function() { return getHotSingerListRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingerListRequest", function() { return getSingerListRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRankListRequest", function() { return getRankListRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbumListRequest", function() { return getAlbumListRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingerDataRequest", function() { return getSingerDataRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotKeyWordsRequest", function() { return getHotKeyWordsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuggestListRequest", function() { return getSuggestListRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResultSongsListRequest", function() { return getResultSongsListRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSongDetailRequest", function() { return getSongDetailRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLyricRequest", function() { return getLyricRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMvListRequest", function() { return getMvListRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMvDetailRequest", function() { return getMvDetailRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMvUrl", function() { return getMvUrl; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/api/config.js");

/* 
获取轮播图
*/

var getBannerRequest = function getBannerRequest() {
  return _config__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get("/api/banner");
};
/* 
获取推荐歌单
*/

var getRecommendRequest = function getRecommendRequest() {
  return _config__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get("/api/personalized");
};
/* 
  获取热榜明星数据
*/

var getHotSingerListRequest = function getHotSingerListRequest(offset) {
  return _config__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get("/api/top/artists/?offset=".concat(offset));
};
/* 
 通过分类信息和姓名首字母和页码数获取歌手数据
*/

var getSingerListRequest = function getSingerListRequest(category, alpha, offset) {
  return _config__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get("/api/artist/list?cat=".concat(category, "&initial=").concat(alpha.toLowerCase(), "&offset=").concat(offset));
}; // 排行榜请求接口

var getRankListRequest = function getRankListRequest() {
  return _config__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get("/api/toplist/detail");
}; // 获取歌单的请求接口s

var getAlbumListRequest = function getAlbumListRequest(id) {
  return _config__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get("/api/playlist/detail?id=" + id);
}; // 获取歌手的歌单数据

var getSingerDataRequest = function getSingerDataRequest(id) {
  return _config__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get("/api/artists?id=" + id);
}; // 获取热点关键字的内容

var getHotKeyWordsRequest = function getHotKeyWordsRequest() {
  return _config__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get("/api/search/hot");
}; // 获取热点关键字的数据

var getSuggestListRequest = function getSuggestListRequest(query) {
  return _config__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get("/api/search/suggest?keywords=" + query);
}; // 获取关键字查询的结果数据

var getResultSongsListRequest = function getResultSongsListRequest(query) {
  return _config__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get("/api/search?keywords=" + query);
}; // 获取歌曲详细信息

var getSongDetailRequest = function getSongDetailRequest(id) {
  return _config__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get("/api/song/detail?ids=".concat(id));
}; // 获取歌词

var getLyricRequest = function getLyricRequest(id) {
  return _config__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get("/api/lyric?id=".concat(id));
}; // 获取mv列表

var getMvListRequest = function getMvListRequest(area, offset, limit) {
  return _config__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get("/api/mv/all?area=".concat(area, "&offset=").concat(offset, "&limit=").concat(limit));
}; // 获取mv的详情

var getMvDetailRequest = function getMvDetailRequest(id) {
  return _config__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get("/api/mv/detail?mvid=".concat(id));
};
var getMvUrl = function getMvUrl(id) {
  return _config__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get("/api/mv/url?id=".concat(id));
};

/***/ }),

/***/ "./src/application/Album/store/actionCreator.js":
/*!******************************************************!*\
  !*** ./src/application/Album/store/actionCreator.js ***!
  \******************************************************/
/*! exports provided: changeAlbumList, changeEnterLoading, getAlbumList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeAlbumList", function() { return changeAlbumList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeEnterLoading", function() { return changeEnterLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbumList", function() { return getAlbumList; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionTypes */ "./src/application/Album/store/actionTypes.js");
/* harmony import */ var api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! api/request */ "./src/api/request.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");




 // 改变album的值

var changeAlbumList = function changeAlbumList(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_ALBUM_LIST"],
    data: Object(immutable__WEBPACK_IMPORTED_MODULE_4__["fromJS"])(data)
  };
};
var changeEnterLoading = function changeEnterLoading(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_ALBUM_ENTER_LOADING"],
    data: data
  };
}; // 请求album数据的异步操作

var getAlbumList = function getAlbumList(id) {
  return /*#__PURE__*/function () {
    var _ref = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var result;
      return _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(api_request__WEBPACK_IMPORTED_MODULE_3__["getAlbumListRequest"])(id);

            case 3:
              result = _context.sent;
              dispatch(changeAlbumList(result.playlist));
              dispatch(changeEnterLoading(false));
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log("获取歌单数据失败");

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/application/Album/store/actionTypes.js":
/*!****************************************************!*\
  !*** ./src/application/Album/store/actionTypes.js ***!
  \****************************************************/
/*! exports provided: CHANGE_ALBUM_LIST, CHANGE_ALBUM_ENTER_LOADING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_ALBUM_LIST", function() { return CHANGE_ALBUM_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_ALBUM_ENTER_LOADING", function() { return CHANGE_ALBUM_ENTER_LOADING; });
// 获取歌单集types
var CHANGE_ALBUM_LIST = "album/CHANGE_ALBUM_LIST"; // 修改歌单载入动画的types

var CHANGE_ALBUM_ENTER_LOADING = "album/CHANGE_ALBUM_ENTER_LOADING";

/***/ }),

/***/ "./src/application/Album/store/index.js":
/*!**********************************************!*\
  !*** ./src/application/Album/store/index.js ***!
  \**********************************************/
/*! exports provided: reducer, actionCreator, actionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/application/Album/store/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./src/application/Album/store/actionTypes.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return _actionTypes__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _actionCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionCreator */ "./src/application/Album/store/actionCreator.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionCreator", function() { return _actionCreator__WEBPACK_IMPORTED_MODULE_2__; });





/***/ }),

/***/ "./src/application/Album/store/reducer.js":
/*!************************************************!*\
  !*** ./src/application/Album/store/reducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/application/Album/store/actionTypes.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");


var defaultState = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])({
  currentAlbum: {},
  enterLoading: false
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_ALBUM_LIST"]:
      return state.set("currentAlbum", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_ALBUM_ENTER_LOADING"]:
      return state.set("enterLoading", action.data);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/application/MV/store/actionCreator.js":
/*!***************************************************!*\
  !*** ./src/application/MV/store/actionCreator.js ***!
  \***************************************************/
/*! exports provided: getMvList, changeMvList, changeLoading, changePullUpLoding, getMvLoadingMore, setOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMvList", function() { return getMvList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeMvList", function() { return changeMvList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLoading", function() { return changeLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePullUpLoding", function() { return changePullUpLoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMvLoadingMore", function() { return getMvLoadingMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOffset", function() { return setOffset; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionTypes */ "./src/application/MV/store/actionTypes.js");
/* harmony import */ var api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! api/request */ "./src/api/request.js");




var getMvList = function getMvList(area) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;
  return /*#__PURE__*/function () {
    var _ref = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var data;
      return _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(api_request__WEBPACK_IMPORTED_MODULE_3__["getMvListRequest"])(area, offset, limit);

            case 3:
              data = _context.sent;

              if (data.code == 200) {
                dispatch(changeMvList(data));
              }

              data.code == 200 ? dispatch(changeLoading(false)) : dispatch(changeLoading(true));
              _context.next = 10;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var changeMvList = function changeMvList(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SET_MV_LIST"],
    data: data
  };
};
var changeLoading = function changeLoading(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHNAGE_LOADING"],
    data: data
  };
};
var changePullUpLoding = function changePullUpLoding(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_PULL_UP_LOADING"],
    data: data
  };
};
var getMvLoadingMore = function getMvLoadingMore(area, offset, limit) {
  return /*#__PURE__*/function () {
    var _ref2 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      var data;
      return _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Object(api_request__WEBPACK_IMPORTED_MODULE_3__["getMvListRequest"])(area, offset, limit);

            case 3:
              data = _context2.sent;

              if (data.code == 200) {
                dispatch(changeMvList(data));
                dispatch(changePullUpLoding(false));
              }

              _context2.next = 9;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
/**
 * 修改offset的值 
 * @param {*} offset 
 */

var setOffset = function setOffset(offset) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SET_OFFSET"],
    data: offset
  };
};

/***/ }),

/***/ "./src/application/MV/store/actionTypes.js":
/*!*************************************************!*\
  !*** ./src/application/MV/store/actionTypes.js ***!
  \*************************************************/
/*! exports provided: SET_MV_LIST, CHNAGE_LOADING, CHANGE_PULL_UP_LOADING, GET_MORE, SET_OFFSET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MV_LIST", function() { return SET_MV_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHNAGE_LOADING", function() { return CHNAGE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PULL_UP_LOADING", function() { return CHANGE_PULL_UP_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MORE", function() { return GET_MORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_OFFSET", function() { return SET_OFFSET; });
var SET_MV_LIST = "mv/SET_MV_LIST";
var CHNAGE_LOADING = "mv/CHNAGE_LOADING";
var CHANGE_PULL_UP_LOADING = "mv/CHANGE_PULL_UP_LOADING";
var GET_MORE = "mv/GET_MORE";
var SET_OFFSET = "mv/SET_OFFSET";

/***/ }),

/***/ "./src/application/MV/store/index.js":
/*!*******************************************!*\
  !*** ./src/application/MV/store/index.js ***!
  \*******************************************/
/*! exports provided: actionCreator, actionTypes, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionCreator */ "./src/application/MV/store/actionCreator.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionCreator", function() { return _actionCreator__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./src/application/MV/store/actionTypes.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return _actionTypes__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/application/MV/store/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/application/MV/store/reducer.js":
/*!*********************************************!*\
  !*** ./src/application/MV/store/reducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./src/application/MV/store/actionTypes.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");



var defaultState = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])({
  mvList: [],
  hasMore: false,
  count: 0,
  area: "全部",
  pullUpLoading: false,
  pullDownLoading: true,
  offset: 0,
  limit: 30
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _List;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_MV_LIST"]:
      return state.set("mvList", state.get("offset") == 0 ? action.data.data : (_List = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])(state.get("mvList"))).push.apply(_List, Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(action.data.data))).set("count", state.get("offset") == 0 ? action.data.count : state.get("count")).set("hasMore", action.data.hasMore);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["CHNAGE_LOADING"]:
      return state.set("pullDownLoading", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["CHANGE_PULL_UP_LOADING"]:
      return state.set("pullUpLoading", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_OFFSET"]:
      return state.set("offset", action.data);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/application/MvDetail/store/actionCreator.js":
/*!*********************************************************!*\
  !*** ./src/application/MvDetail/store/actionCreator.js ***!
  \*********************************************************/
/*! exports provided: getMvDetail, changeMvDetail, changeMvUrl, changeEnterLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMvDetail", function() { return getMvDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeMvDetail", function() { return changeMvDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeMvUrl", function() { return changeMvUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeEnterLoading", function() { return changeEnterLoading; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionTypes */ "./src/application/MvDetail/store/actionTypes.js");
/* harmony import */ var api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! api/request */ "./src/api/request.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");





/**
 * 请求该id的mv详情信息
 * @param {} id 
 * @returns 
 */

var getMvDetail = function getMvDetail(id) {
  return /*#__PURE__*/function () {
    var _ref = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var data, url;
      return _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(api_request__WEBPACK_IMPORTED_MODULE_3__["getMvDetailRequest"])(id);

            case 3:
              data = _context.sent;

              if (data.code == 200) {
                dispatch(changeMvDetail(data));
              }

              _context.next = 7;
              return Object(api_request__WEBPACK_IMPORTED_MODULE_3__["getMvUrl"])(id);

            case 7:
              url = _context.sent;

              if (url.code == 200) {
                dispatch(changeMvUrl(url));
              }

              dispatch(changeEnterLoading(false));
              _context.next = 14;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
/**
 * 
 * 改变mv的详情信息
 * @param {*} data 
 * @returns 
 */

var changeMvDetail = function changeMvDetail(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SET_MV_DETAIL"],
    data: Object(immutable__WEBPACK_IMPORTED_MODULE_4__["fromJS"])(data)
  };
};
var changeMvUrl = function changeMvUrl(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SET_MV_URL"],
    data: Object(immutable__WEBPACK_IMPORTED_MODULE_4__["fromJS"])(data)
  };
};
var changeEnterLoading = function changeEnterLoading(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SET_ENTERLOADING"],
    data: data
  };
};

/***/ }),

/***/ "./src/application/MvDetail/store/actionTypes.js":
/*!*******************************************************!*\
  !*** ./src/application/MvDetail/store/actionTypes.js ***!
  \*******************************************************/
/*! exports provided: SET_MV_DETAIL, SET_MV_URL, SET_ENTERLOADING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MV_DETAIL", function() { return SET_MV_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MV_URL", function() { return SET_MV_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ENTERLOADING", function() { return SET_ENTERLOADING; });
var SET_MV_DETAIL = "mvDetail/SET_MV_DETAIL";
var SET_MV_URL = "mvDetail/SET_MV_URL";
var SET_ENTERLOADING = "mvDetail/SET_ENTERLOADING";

/***/ }),

/***/ "./src/application/MvDetail/store/index.js":
/*!*************************************************!*\
  !*** ./src/application/MvDetail/store/index.js ***!
  \*************************************************/
/*! exports provided: actionCreator, actionTypes, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionCreator */ "./src/application/MvDetail/store/actionCreator.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionCreator", function() { return _actionCreator__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./src/application/MvDetail/store/actionTypes.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return _actionTypes__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/application/MvDetail/store/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/application/MvDetail/store/reducer.js":
/*!***************************************************!*\
  !*** ./src/application/MvDetail/store/reducer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/application/MvDetail/store/actionTypes.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");


var defaultState = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])({
  mvDetail: {
    data: {}
  },
  url: {
    data: {}
  },
  enterLoading: true
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_MV_DETAIL"]:
      return state.set("mvDetail", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_MV_URL"]:
      return state.set("url", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_ENTERLOADING"]:
      return state.set("enterLoading", action.data);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/application/Player/index.jsx":
/*!******************************************!*\
  !*** ./src/application/Player/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_toast_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/toast/style/css */ "./node_modules/antd-mobile/lib/toast/style/css.js");
/* harmony import */ var antd_mobile_lib_toast_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/toast */ "./node_modules/antd-mobile/lib/toast/index.js");
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _min_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./min-player */ "./src/application/Player/min-player/index.jsx");
/* harmony import */ var _store_actionCreator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/actionCreator */ "./src/application/Player/store/actionCreator.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils */ "./src/utils/index.js");
/* harmony import */ var _play_list_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./play-list/index */ "./src/application/Player/play-list/index.jsx");
/* harmony import */ var _normal_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./normal-player */ "./src/application/Player/normal-player/index.jsx");
/* harmony import */ var api_request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! api/request */ "./src/api/request.js");
/* harmony import */ var api_lyric_parser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! api/lyric-parser */ "./src/api/lyric-parser.js");
/* harmony import */ var baseUI_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! baseUI/toast */ "./src/baseUI/toast/index.jsx");
/* harmony import */ var api_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! api/config */ "./src/api/config.js");















function Player(props) {
  var speed = props.speed,
      immutablePlayList = props.playList,
      currentIndex = props.currentIndex,
      immutableCurrentSong = props.currentSong,
      playing = props.playing,
      mode = props.mode,
      fullScreen = props.fullScreen,
      immutableSequencePlayList = props.sequencePlayList;
  var changeCurrentSongDispatch = props.changeCurrentSongDispatch,
      togglePlayingDispatch = props.togglePlayingDispatch,
      togglePlayListStatus = props.togglePlayListStatus,
      playListStatus = props.playListStatus,
      toggleFullScreenDispatch = props.toggleFullScreenDispatch,
      changeSpeedDispatch = props.changeSpeedDispatch,
      changePlayListDispatch = props.changePlayListDispatch,
      changeCurrentIndexDispatch = props.changeCurrentIndexDispatch,
      changeModeDispatch = props.changeModeDispatch;
  var sequencePlayList = immutableSequencePlayList.toJS(); // 当前播放歌曲的数据

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState2 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      preSong = _useState2[0],
      setPreSong = _useState2[1]; // 歌曲的歌词


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState4 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      currentPlayingLyric = _useState4[0],
      setCurrentPlayingLyric = _useState4[1]; // 这只每次点歌的时候当前的歌曲播放的时间点


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState6 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      currentTime = _useState6[0],
      setCurrentTime = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState8 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      duration = _useState8[0],
      setDuration = _useState8[1]; // 歌曲是否已经准备好的标识符


  var songReady = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(true); // 计算百分比

  var percent = isNaN(currentTime / duration) ? 0 : currentTime / duration;
  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var toastRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var playList = immutablePlayList.toJS();
  var currentLyric = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var currentLineNum = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(0);

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState10 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
      modeText = _useState10[0],
      setModeText = _useState10[1];

  var currentSong = immutableCurrentSong.toJS();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!playList.length || currentIndex === -1 || playList[currentIndex].id === preSong.id || !playList[currentIndex] || !songReady.current) {
      return;
    } // songReady.current = false;


    var current = playList[currentIndex];
    setPreSong(current);
    changeCurrentSongDispatch(current); // 设置歌词

    setCurrentPlayingLyric(""); // 设置当前audio

    audioRef.current.src = Object(utils__WEBPACK_IMPORTED_MODULE_7__["getSongUrl"])(current.id);
    audioRef.current.autoplay = true;
    audioRef.current.playbackRate = speed; // 设置播放状态

    togglePlayingDispatch(true); // 设置当前歌曲时间播放点

    setCurrentTime(0); // 设置总秒数

    setDuration(current.dt / 1000 | 0); // 获取当前歌曲的歌词

    getLyric(current.id);
  }, [currentIndex, playList]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    playing ? audioRef.current.play() : audioRef.current.pause();
  }, [playing]); // 当全屏变换的时候获取歌曲文字

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!fullScreen) {
      return;
    } // 判断是否存在存储歌曲文字的ref对象


    if (currentLyric.current && currentLyric.current.lines.length) {
      // 处理歌曲文字
      handleLyric({
        lineNum: currentLineNum.current,
        txt: currentLyric.current.lines[currentLineNum.current].txt
      });
    }
  }, [fullScreen]);
  /**
   * 处理歌曲歌词显示的函数
   */

  var handleLyric = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (_ref) {
    var lineNum = _ref.lineNum,
        txt = _ref.txt;

    // 不存在歌词的时候直接结束
    if (!currentLyric.current) {
      return;
    }

    currentLineNum.current = lineNum;
    setCurrentPlayingLyric(txt);
  });
  /**
   * 通过id的歌曲的歌词
   */

  var getLyric = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (id) {
    var lyric = "";

    if (currentLyric.current) {
      currentLyric.current.lrc = "";
      currentLyric.current.stop();
    }

    setTimeout(function () {
      songReady.current = true;
    }, 3000);
    Object(api_request__WEBPACK_IMPORTED_MODULE_10__["getLyricRequest"])(id).then(function (data) {
      lyric = data.lrc && data.lrc.lyric;

      if (!lyric) {
        currentLyric.current = null;
        return;
      } // 创建歌词的对象


      currentLyric.current = new api_lyric_parser__WEBPACK_IMPORTED_MODULE_11__["default"](lyric, handleLyric, speed);
      currentLyric.current.play();
      currentLineNum.current = 0;
      currentLyric.current.seek(0);
    })["catch"](function () {
      currentLyric.current = "";
      songReady.current = true;
      audioRef.current.play();
    });
  });
  var clickPlaying = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e, state) {
    // 首先阻止事件毛毛
    e.stopPropagation();
    togglePlayingDispatch(state);

    if (currentLyric.current) {
      currentLyric.current.togglePlay(currentTime * 1000);
    }
  });

  var changeMode = function changeMode() {
    var newMode = (mode + 1) % 3;

    if (newMode === 0) {
      //顺序模式
      changePlayListDispatch(sequencePlayList);
      var index = Object(utils__WEBPACK_IMPORTED_MODULE_7__["findIndex"])(currentSong, sequencePlayList);
      changeCurrentIndexDispatch(index);
      setModeText("顺序循环");
    } else if (newMode === 1) {
      //单曲循环
      changePlayListDispatch(sequencePlayList);
      setModeText("单曲循环");
    } else if (newMode === 2) {
      //随机播放
      var newList = Object(utils__WEBPACK_IMPORTED_MODULE_7__["shuffle"])(sequencePlayList);

      var _index = Object(utils__WEBPACK_IMPORTED_MODULE_7__["findIndex"])(currentSong, newList);

      changePlayListDispatch(newList);
      changeCurrentIndexDispatch(_index);
      setModeText("随机播放");
    }

    changeModeDispatch(newMode);
    toastRef.current.show();
  }; // 改变播放列表状态


  var handleTogglePlayList = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    // 改变状态
    togglePlayListStatus(!playListStatus);
  });
  /* 
    绑定时间更新函数
  */

  var updateTime = function updateTime(e) {
    setCurrentTime(e.target.currentTime);
  };
  /* 
    绑定歌曲播放结束的函数
  */


  var handleEnd = function handleEnd() {
    // 首先判断当前播放模式
    if (mode === api_config__WEBPACK_IMPORTED_MODULE_13__["playMode"].loop) {
      // 循环模式
      handleLoop();
    } else {
      handleNext();
    }
  };
  /* 
    绑定歌曲播放错误的事件
  */


  var handleError = function handleError() {
    songReady.current = true;
    currentLyric.current ? currentLyric.current.lrc = "" : "";
    handleNext();

    antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1___default.a.fail("播放错误", 1);
  }; // 执行循环


  var handleLoop = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    audioRef.current.currentTime = 0;
    togglePlayingDispatch(true);
    audioRef.current.play(); // 重新设置歌词对象的偏移量seek

    if (currentLyric.current) {
      currentLyric.current.seek(0);
    }
  }); //   上一首

  var handlePrev = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    if (playList.length === 1) {
      // 执行歌曲循环
      handleLoop();
      return;
    } // 如果超过一首歌曲


    var index = currentIndex - 1; // 判断当前歌曲是否是播放状态

    if (!playing) {
      togglePlayingDispatch(true);
    }

    changeCurrentIndexDispatch(index);
  }); //   下一首

  var handleNext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    if (playList.length === 1) {
      handleLoop();
      return;
    }

    var index = currentIndex + 1; // 如果下一首的index等于播放列表的长度重新设置index为第一首歌曲

    if (index === playList.length) {
      index = 0;
    }

    if (!playing) {
      togglePlayingDispatch(true);
    }

    changeCurrentIndexDispatch(index);
  }); // 点击切换速度

  var clickSpeed = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (newSpeed) {
    changeSpeedDispatch(newSpeed);
    audioRef.current.playbackRate = newSpeed;
    currentLyric.current.changeSpeed(newSpeed);
    currentLyric.current.seek(currentTime * 1000);
  }); // 进度重新修改

  var onProgressChange = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (curPercent) {
    var newTime = curPercent * duration;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime; // 判断是否暂定

    if (!playing) {
      togglePlayingDispatch(true);
    } // 如果存在当前的歌词的对象吗，我们需要重新计算当前进度对应的歌词


    if (currentLyric.current) {
      currentLyric.current.seek(newTime * 1000);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, Object(utils__WEBPACK_IMPORTED_MODULE_7__["isEmptyObject"])(currentSong) ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_normal_player__WEBPACK_IMPORTED_MODULE_9__["default"], {
    full: fullScreen,
    song: currentSong,
    toggleFullScreenDispatch: toggleFullScreenDispatch,
    playing: playing,
    currentPlayingLyric: currentPlayingLyric,
    currentLyric: currentLyric.current,
    currentLineNum: currentLineNum.current,
    speed: speed,
    clickSpeed: clickSpeed,
    currentTime: currentTime,
    percent: percent,
    onProgressChange: onProgressChange,
    mode: mode,
    togglePlayListDispatch: handleTogglePlayList,
    clickPlaying: clickPlaying,
    changeMode: changeMode,
    modeText: modeText,
    handlePrev: handlePrev,
    handleNext: handleNext
  }), Object(utils__WEBPACK_IMPORTED_MODULE_7__["isEmptyObject"])(currentSong) ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_min_player__WEBPACK_IMPORTED_MODULE_5__["default"], {
    playing: playing,
    clickPlaying: clickPlaying,
    handleTogglePlayList: handleTogglePlayList,
    song: currentSong,
    percent: percent,
    full: fullScreen,
    setFullScreen: toggleFullScreenDispatch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_play_list_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    clearPreSong: setPreSong.bind(null, {}),
    mode: mode
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("audio", {
    ref: audioRef,
    onTimeUpdate: updateTime,
    onEnded: handleEnd,
    onError: handleError
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(baseUI_toast__WEBPACK_IMPORTED_MODULE_12__["default"], {
    text: modeText,
    ref: toastRef
  }));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    playList: state.getIn(["player", "playList"]),
    currentIndex: state.getIn(["player", "currentIndex"]),
    currentSong: state.getIn(["player", "currentSong"]),
    playing: state.getIn(["player", "playing"]),
    speed: state.getIn(["player", "speed"]),
    playListStatus: state.getIn(["player", "playListStatus"]),
    mode: state.getIn(["player", "mode"]),
    fullScreen: state.getIn(["player", "fullScreen"]),
    sequencePlayList: state.getIn(["player", "sequencePlayList"])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changePlayListDispatch: function changePlayListDispatch(data) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_6__["changeSequecePlayList"])(data));
    },
    changeCurrentIndexDispatch: function changeCurrentIndexDispatch(data) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_6__["changeCurrentIndex"])(data));
    },
    changeCurrentSongDispatch: function changeCurrentSongDispatch(data) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_6__["changeCurrentSong"])(data));
    },
    changeModeDispatch: function changeModeDispatch(data) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_6__["changeMode"])(data));
    },
    togglePlayingDispatch: function togglePlayingDispatch(data) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_6__["changePlayingState"])(data));
    },
    togglePlayListStatus: function togglePlayListStatus(data) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_6__["changePlayListStatus"])(data));
    },
    toggleFullScreenDispatch: function toggleFullScreenDispatch(data) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_6__["changeFullScreen"])(data));
    },
    changeSpeedDispatch: function changeSpeedDispatch(data) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_6__["changeSpeed"])(data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(Player)));

/***/ }),

/***/ "./src/application/Player/min-player/index.jsx":
/*!*****************************************************!*\
  !*** ./src/application/Player/min-player/index.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/application/Player/min-player/style.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var baseUI_progress_circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! baseUI/progress-circle */ "./src/baseUI/progress-circle/index.js");





function MiniPlayer(props) {
  var playing = props.playing,
      song = props.song,
      percent = props.percent,
      full = props.full;
  var clickPlaying = props.clickPlaying,
      handleTogglePlayList = props.handleTogglePlayList,
      setFullScreen = props.setFullScreen;
  var miniPlayerContainer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var miniWrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var miniImageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
    "in": !full,
    timeout: 400,
    classNames: "mini",
    onEnter: function onEnter() {
      miniPlayerContainer.current.style.display = "flex";
    },
    onExited: function onExited() {
      miniPlayerContainer.current.style.display = "none";
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["MiniPlayerContainer"], {
    onClick: function onClick() {
      return setFullScreen(true);
    },
    ref: miniPlayerContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "imgWrapper",
    ref: miniWrapperRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "play ".concat(playing ? "" : "pause"),
    ref: miniImageRef,
    src: song.al.picUrl,
    alt: "img"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "name"
  }, song.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "desc"
  }, song.ar[0].name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseUI_progress_circle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    radius: 32,
    percent: percent
  }, playing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-mini iconfont icon-pause",
    onClick: function onClick(e) {
      return clickPlaying(e, false);
    }
  }, "\uE650") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-mini iconfont icon-play",
    onClick: function onClick(e) {
      return clickPlaying(e, true);
    }
  }, "\uE61E"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "control",
    onClick: function onClick(e) {
      e.stopPropagation();
      handleTogglePlayList();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "iconfont"
  }, "\uE640")))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(MiniPlayer));

/***/ }),

/***/ "./src/application/Player/min-player/style.js":
/*!****************************************************!*\
  !*** ./src/application/Player/min-player/style.js ***!
  \****************************************************/
/*! exports provided: MiniPlayerContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniPlayerContainer", function() { return MiniPlayerContainer; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/global-style */ "./src/assets/global-style.js");


function _templateObject2() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position : fixed;\n  bottom: 0;\n  left: 0;\n  display : flex;\n  align-items : center;\n  z-index : 1000;\n  width: 100%;\n  height: 60px;\n  background : ", ";\n  &.mini-enter {\n    transform : translate3d(0,100%,0);\n    transition : all 0.4s;\n  }\n  &.mini-enter-active {\n    transform : translate3d(0, 0, 0);\n    transition : 0.4s;\n  }\n  &.mini-exit-active{\n    transform : translate3d(0, 100%, 0);\n    transition : all 0.4s;\n  }\n  .icon {\n    flex : 0 0 40px;\n    width: 40px;\n    height : 40px;\n    padding : 0 10px 0 20px;\n    box-sizing : content-box;\n    .imgWrapper {\n      width: 100%;\n      height: 100%;\n      img {\n        width: 40px;\n        height : 40px;\n        border-radius : 50%;\n        &.play {\n          animation : ", " 10s infinite;\n        }\n        &.pause {\n          animation-play-state : paused;\n        }\n      }\n    }\n  }\n  .text {\n    display : flex;\n    flex-direction : column;\n    flex : 1;\n    justify-content : center;\n    line-height : 20px;\n    overflow: hidden;\n    .name {\n      margin-bottom: 2px;\n      font-size : 12px;\n      color : ", ";\n      ", ";\n    }\n    .desc {\n      font-size: 12px;\n      color: ", ";\n      ", ";\n    }\n  }\n  .control {\n    flex : 0 0 30px;\n    padding : 0 10px;\n    .iconfont, .icon-playlist {\n      font-size : 30px;\n      color : ", "; \n    }\n    .icon-mini {\n      font-size : 16px;\n      position : absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate3d(-45%,-63%, 0)\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  0%{\n    transform : rotate(0);\n  }\n  100%{\n    transform : rotate(360deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var rotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var MiniPlayerContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2(), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["highlight-background-color"], rotate, assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-size-desc-v2"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["nowrap"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc-v2"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"].noWrap(), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["theme-color"]);

/***/ }),

/***/ "./src/application/Player/normal-player/disc.png":
/*!*******************************************************!*\
  !*** ./src/application/Player/normal-player/disc.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/disc-49129d.png");

/***/ }),

/***/ "./src/application/Player/normal-player/index.jsx":
/*!********************************************************!*\
  !*** ./src/application/Player/normal-player/index.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var baseUI_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! baseUI/scroll */ "./src/baseUI/scroll/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/application/Player/normal-player/style.js");
/* harmony import */ var utils_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
/* harmony import */ var create_keyframe_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! create-keyframe-animation */ "./node_modules/create-keyframe-animation/index.js");
/* harmony import */ var create_keyframe_animation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(create_keyframe_animation__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var baseUI_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! baseUI/progress-bar */ "./src/baseUI/progress-bar/index.jsx");
/* harmony import */ var api_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! api/config */ "./src/api/config.js");











function NormalPlayer(props) {
  var full = props.full,
      song = props.song,
      playing = props.playing,
      currentPlayingLyric = props.currentPlayingLyric,
      currentLyric = props.currentLyric,
      currentLineNum = props.currentLineNum,
      speed = props.speed,
      currentTime = props.currentTime,
      percent = props.percent,
      mode = props.mode;
  var toggleFullScreenDispatch = props.toggleFullScreenDispatch,
      clickSpeed = props.clickSpeed,
      onProgressChange = props.onProgressChange,
      togglePlayListDispatch = props.togglePlayListDispatch,
      clickPlaying = props.clickPlaying,
      changeMode = props.changeMode,
      handlePrev = props.handlePrev,
      handleNext = props.handleNext;
  var normalPlayerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var cdWrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var lyricLineRefs = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([]);
  var lyricScrollRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      currentState = _useState2[0],
      setCurrentState = _useState2[1];

  var transform = Object(utils_index__WEBPACK_IMPORTED_MODULE_5__["prefixStyle"])("transform"); // 监听当前行数的变化切换当前的歌词

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!lyricScrollRef.current) return;
    var bScroll = lyricScrollRef.current.getBScroll();

    if (currentLineNum > 5) {
      var lineEl = lyricLineRefs.current[currentLineNum - 5].current;
      bScroll.scrollToElement(lineEl, 1000);
    } else {
      bScroll.scrollTo(0, 0, 1000);
    }
  }, [currentLineNum]);
  var enter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    normalPlayerRef.current.style.display = "block";

    var _getPosAndScale2 = _getPosAndScale(),
        x = _getPosAndScale2.x,
        y = _getPosAndScale2.y,
        scale = _getPosAndScale2.scale;

    var animation = {
      0: {
        transform: "translate3d(".concat(x, "px, ").concat(y, "px, 0) scale(").concat(scale, ")")
      },
      60: {
        transform: "translate3d(0, 0, 0) scale(1.1)"
      },
      100: {
        transform: "translate3d(0, 0, 0) scale(1)"
      }
    };
    create_keyframe_animation__WEBPACK_IMPORTED_MODULE_6___default.a.registerAnimation({
      name: "move",
      animation: animation,
      presets: {
        duration: 400,
        easing: "linear"
      }
    });
    create_keyframe_animation__WEBPACK_IMPORTED_MODULE_6___default.a.runAnimation(cdWrapperRef.current, "move");
  });
  var afterEnter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    // 离开之后解绑之前的animations对象注册的动画
    var cdWrapperDom = cdWrapperRef.current;
    create_keyframe_animation__WEBPACK_IMPORTED_MODULE_6___default.a.unregisterAnimation("move");
    cdWrapperDom.style.animation = "";
  });
  var exit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    // 如果不存在的时候直接就退出
    if (!cdWrapperRef.current) {
      return;
    }

    var cdWrapperDom = cdWrapperRef.current;
    cdWrapperDom.style.transition = "all 0.4s";

    var _getPosAndScale3 = _getPosAndScale(),
        x = _getPosAndScale3.x,
        y = _getPosAndScale3.y,
        scale = _getPosAndScale3.scale;

    cdWrapperDom.style[transform] = "translate3d(".concat(x, "px, ").concat(y, "px, 0) scale(").concat(scale, ")");
  });
  var afterExit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!cdWrapperRef.current) {
      return;
    }

    var cdWrapperDom = cdWrapperRef.current;
    cdWrapperDom.style.transition = "";
    cdWrapperDom.style[transform] = "";
    normalPlayerRef.current.style.display = "none";
    setCurrentState("");
  }); // 计算cd转盘的动画

  var _getPosAndScale = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var targetWidth = 40;
    var paddingLeft = 40;
    var paddingBottom = 30;
    var paddingTop = 80;
    var width = window.innerWidth * 0.8;
    var scale = targetWidth / width;
    var x = -(window.innerWidth / 2 - paddingLeft);
    var y = window.innerHeight - paddingTop - width / 2 - paddingBottom;
    return {
      x: x,
      y: y,
      scale: scale
    };
  }); // 设置cd的状态


  var toggleCurrentState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var nextState = "";

    if (currentState !== "lyric") {
      nextState = "lyric";
    } else {
      nextState = "";
    }

    setCurrentState(nextState);
  });

  var getPlayMode = function getPlayMode() {
    var content;

    if (mode === api_config__WEBPACK_IMPORTED_MODULE_8__["playMode"].sequence) {
      content = "&#xe625;";
    } else if (mode === api_config__WEBPACK_IMPORTED_MODULE_8__["playMode"].loop) {
      content = "&#xe653;";
    } else {
      content = "&#xe61b;";
    }

    return content;
  }; //   暂定和播放


  var clickPlayingCB = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    clickPlaying(e, !playing);
  }, [clickPlaying, playing]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
    "in": full,
    timeout: 400,
    mountOnEnter: true,
    onEnter: enter,
    onEntered: afterEnter,
    onExit: exit,
    onExited: afterExit,
    classNames: "normal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["NormalPlayerContainer"], {
    ref: normalPlayerRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    width: "100%",
    height: "100%",
    src: song.al.picUrl + "?params=300x300",
    alt: "\u6B4C\u66F2\u56FE\u7247"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "background layer"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["Top"], {
    className: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "back",
    onClick: function onClick() {
      return toggleFullScreenDispatch(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "iconfont icon-back"
  }, "\uE662")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "title"
  }, song.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "subTitle"
  }, Object(utils_index__WEBPACK_IMPORTED_MODULE_5__["getName"])(song.ar)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["Middle"], {
    ref: cdWrapperRef,
    onClick: toggleCurrentState
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
    timeout: 400,
    classNames: "fade",
    "in": currentState !== "lyric"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["CDWrapper"], {
    style: {
      visibility: currentState !== "lyric" ? "visible" : "hidden"
    },
    playing: playing
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "needle ".concat(playing ? '' : 'pause')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "cd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "image play ".concat(playing ? '' : "pause"),
    src: song.al.picUrl + "?param=400x400",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "playing_lyric"
  }, currentPlayingLyric))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
    timeout: 400,
    className: "fade",
    "in": currentState === "lyric"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["LyricCintainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(baseUI_scroll__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: lyricScrollRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["LyricWrapper"], {
    style: {
      visibility: currentState === "lyric" ? "visible" : "hidden"
    },
    className: "lyric_wrapper"
  }, currentLyric ? currentLyric.lines.map(function (item, index) {
    lyricLineRefs.current[index] = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "text ".concat(currentLineNum === index ? "current" : ""),
      key: item + index,
      ref: lyricLineRefs.current[index]
    }, item.txt);
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "text pure"
  }, "\u7EAF\u97F3\u4E50\uFF0C\u8BF7\u6B23\u8D4F\u3002")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["Bottom"], {
    className: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["List"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u500D\u901F\u542C\u6B4C"), api_config__WEBPACK_IMPORTED_MODULE_8__["list"].map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
      key: item.key,
      className: "".concat(speed === item.key ? "selected" : ""),
      onClick: function onClick() {
        // 选择速度
        clickSpeed(item.key);
      }
    }, item.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["ProgressWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "time time-l"
  }, Object(utils_index__WEBPACK_IMPORTED_MODULE_5__["formatPlayTime"])(currentTime)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "progress-bar-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(baseUI_progress_bar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    percent: percent,
    onProgressChange: onProgressChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["Operators"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "icon i-left",
    onClick: changeMode
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "iconfont",
    dangerouslySetInnerHTML: {
      __html: getPlayMode()
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "icon i-left",
    onClick: handlePrev
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "iconfont"
  }, "\uE6E1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "icon i-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "iconfont",
    onClick: clickPlayingCB,
    dangerouslySetInnerHTML: {
      __html: playing ? "&#xe723;" : "&#xe731;"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "icon i-right",
    onClick: handleNext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "iconfont"
  }, "\uE718")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "icon i-right",
    onClick: function onClick() {
      return togglePlayListDispatch(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "iconfont"
  }, "\uE640"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(NormalPlayer));

/***/ }),

/***/ "./src/application/Player/normal-player/needle.png":
/*!*********************************************************!*\
  !*** ./src/application/Player/normal-player/needle.png ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/needle-3ac526.png");

/***/ }),

/***/ "./src/application/Player/normal-player/style.js":
/*!*******************************************************!*\
  !*** ./src/application/Player/normal-player/style.js ***!
  \*******************************************************/
/*! exports provided: NormalPlayerContainer, Top, Middle, CDWrapper, LyricCintainer, LyricWrapper, Bottom, List, ListItem, ProgressWrapper, Operators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalPlayerContainer", function() { return NormalPlayerContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Top", function() { return Top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Middle", function() { return Middle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDWrapper", function() { return CDWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LyricCintainer", function() { return LyricCintainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LyricWrapper", function() { return LyricWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bottom", function() { return Bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressWrapper", function() { return ProgressWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Operators", function() { return Operators; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/global-style */ "./src/assets/global-style.js");
/* harmony import */ var _needle_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./needle.png */ "./src/application/Player/normal-player/needle.png");
/* harmony import */ var _disc_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./disc.png */ "./src/application/Player/normal-player/disc.png");


function _templateObject12() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    align-items: center;\n    .icon{\n        font-weight: 300;\n        flex: 1;\n        color: ", ";\n        &.disable{\n            color: ", ";\n        }\n        i{\n            font-weight: 300;\n            font-size: 30px;\n        }\n    }\n    .i-left{\n        text-align: right;\n    }\n    .i-center{\n        text-align: center;\n        padding: 0 20px;\n        i{\n            font-size: 40px;\n        }\n    }\n    .i-right{\n        text-align: left;\n    }\n    .icon-favorite {\n        color: ", ";\n    }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 80%;\n    display: flex;\n    align-items:center;\n    margin: 0 auto;\n    padding: 10px 0;\n    .time {\n        color: ", ";\n        font-size: ", ";\n        flex: 0 0 30px;\n        line-height: 30px;\n        width: 30px;\n        &.time-l {\n        text-align: left;\n        }\n        &.time-r {\n        text-align: right;\n        }\n    }\n    .progress-bar-wrapper{\n        flex: 1;\n    }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    flex: 0 0 auto;\n    font-size: ", ";\n    padding: 5px 5px;\n    border-radius: 10px;\n    color: ", ";\n    &.selected{\n        color: ", ";\n        border: 1px solid ", ";\n        opacity: 0.8;\n    }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 70%;\n    margin: auto;\n    display: flex;\n    align-items: center;\n    height: 30px;\n    justify-content: space-around;\n    overflow: hidden;\n    >span:first-of-type{\n        display: block;\n        flex: 0 0 auto;\n        padding: 5px 0;\n        color: ", ";\n        font-size: ", ";\n        vertical-align: middle;\n    }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: absolute;\n    bottom: 50px;\n    width: 100%;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: absolute;\n    left: 0;\n    right: 0;\n    width: 100%;\n    box-sizing: border-box;\n    text-align: center;\n    p {\n        line-height: 32px;\n        color: rgba(255, 255, 255, 0.5);\n        white-space: normal;\n        font-size: ", ";\n        z-index: 1000;\n        &.current {\n            color: #fff;\n        }\n        &.pure{\n            position: relative;\n            top: 30vh;\n        }\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n   position: absolute;\n   top: 0;\n   left: 0;\n   bottom: 0;\n   right: 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: auto;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    .needle{\n        position: absolute;\n        top: -6.67vw;\n        left: 48vw;\n        width: 25vw;\n        height: 40vw;\n        z-index: 100;\n        background-image: url(", ");\n        ", ";\n        transform-origin: 4.5vw 4.5vw;\n        transition: all 0.3s;\n        transform: rotate(0);\n        &.pause{\n        transform: rotate(-30deg);\n        }\n    }\n    .cd{\n        top: 16%;\n        position: absolute;\n        width: 70%;\n        height: 70vw;\n        background-image: url(", ");\n        border: 4px solid ", ";\n        border-radius: 50%;\n        ", ";\n        .image {\n            position: absolute;\n            left: 0;right: 0;\n            top: 0;bottom: 0;\n            width: 68%;\n            height: 68%;\n            margin: auto;\n            border-radius: 50%;\n            }\n        .play {\n            animation: ", " 20s linear infinite;\n            &.pause{\n                animation-play-state: paused;\n            }\n        }\n    }\n    .playing_lyric{\n        position: absolute;\n        margin: auto;\n        width: 80%;\n        top: 95vw;\n        font-size: 14px;\n        line-height: 20px;\n        white-space: normal;\n        text-align: center;\n        color: rgba(255, 255, 255, 0.5);\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed;\n    width: 100%;\n    top: 8%;\n    bottom: 170px;\n    white-space: nowrap;\n    font-size: 0;\n    overflow: hidden;\n    .fade-enter{\n        opacity: 0;\n    }\n    .fade-enter-active{\n        opacity: 1;\n        transition: all 0.4s;\n    }\n    .fade-enter-done{\n        transition: none;\n    }\n    .fade-exit-active{\n        opacity: 0;\n    }\n    .fade-exit-done{\n        opacity: 0;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    box-sizing: border-box;\n    position: absolute;\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 8%;\n    margin-bottom: 15px;\n    border: 1px solid ", ";\n    padding-bottom: 5px;\n    .back{\n        margin-left: 5px;\n        z-index: 50;\n        .iconfont {\n            display: block;\n            padding: 9px;\n            font-size: 24px;\n            color: ", ";\n            font-weight: bold;\n            transform: rotate(90deg)\n        }\n    }\n    .text{\n        display: flex;\n        flex: 1;\n        flex-direction: column;\n        margin-top: 10px;\n    }\n    .title{\n        line-height: 25px;\n        font-size: ", ";\n        color: ", ";\n        ", "\n    }\n    .subTitle{\n        line-height: 25px;\n        font-size: ", ";\n        color: ", ";\n        ", "\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 150;\n    background: ", ";\n    .background{\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0.6;\n        filter: blur(20px);\n        &.layer{\n            background: ", ";\n            opacity: 0.3;\n            filter: none;\n        }\n    }\n    &.normal-enter,\n    &.normal-exit-done{\n        .top{\n            transform: translate3d(0, -100px, 0); \n        }\n        .bottom{\n            transform: translate3d(0, 100px, 0)\n        }\n    }\n    &.normal-enter-active,\n    &.normal-exit-active{\n        .top,\n        .bottom{\n            transform: translate3d(0, 0, 0);\n            transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32);\n        }\n        opacity: 1;\n        transition: all 0.4s;\n    }\n    &.normal-exit-active{\n        opacity: 0;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    0%{\n        transform: rotate(0)\n    }\n    100%{\n        transform: rotate(360deg)\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var rotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var NormalPlayerContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2(), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["background-color"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc"]);
var Top = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3(), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["border-color-v2"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-size-l"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"].noWrap(), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-size-m"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"].noWrap());
var Middle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());
var CDWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5(), _needle_png__WEBPACK_IMPORTED_MODULE_3__["default"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"].bgFull(), _disc_png__WEBPACK_IMPORTED_MODULE_4__["default"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["border-color-v2"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"].bgFull(), rotate); // 歌词布局

var LyricCintainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6());
var LyricWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject7(), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-size-l"]); // 下方音乐工具栏

var Bottom = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject8());
var List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject9(), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc-v2"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-size-m"]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject10(), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-size-m"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc-v2"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["theme-color"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["theme-color"]);
var ProgressWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject11(), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-size-s"]);
var Operators = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject12(), assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["font-color-desc"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["theme-color-shadow"], assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["theme-color"]);

/***/ }),

/***/ "./src/application/Player/play-list/index.jsx":
/*!****************************************************!*\
  !*** ./src/application/Player/play-list/index.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/application/Player/play-list/style.js");
/* harmony import */ var _store_actionCreator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actionCreator */ "./src/application/Player/store/actionCreator.js");
/* harmony import */ var api_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! api/config */ "./src/api/config.js");
/* harmony import */ var baseUI_scroll_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! baseUI/scroll/index */ "./src/baseUI/scroll/index.js");
/* harmony import */ var utils_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
/* harmony import */ var baseUI_confirm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! baseUI/confirm */ "./src/baseUI/confirm/index.jsx");









 // 播放列表

function PlayList(props) {
  var showPlayList = props.showPlayList,
      togglePlayListDispatch = props.togglePlayListDispatch,
      mode = props.mode,
      immutablePlayList = props.playList,
      immutableCurrentSong = props.currentSong,
      currentIndex = props.currentIndex,
      changeCurrentIndexDispatch = props.changeCurrentIndexDispatch,
      immutableSequencePlayList = props.sequencePlayList,
      changePlayListDispatch = props.changePlayListDispatch,
      changeModeDispatch = props.changeModeDispatch,
      deleteSongDispatch = props.deleteSongDispatch,
      clearDisptach = props.clearDisptach,
      clearPreSong = props.clearPreSong;
  var playList = immutablePlayList.toJS();
  var currentSong = immutableCurrentSong.toJS();
  var sequencePlayList = immutableSequencePlayList.toJS();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isShow = _useState2[0],
      setIsShow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState4 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      distance = _useState4[0],
      setDistance = _useState4[1];

  var listWrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var listContentRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState6 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      startY = _useState6[0],
      setStartY = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState8 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      canTouch = _useState8[0],
      setCanTouch = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState10 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      initialed = _useState10[0],
      setInitialed = _useState10[1]; // 弹框的实例对象


  var confirmRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(); // 动画进入的回调

  var transform = Object(utils_index__WEBPACK_IMPORTED_MODULE_8__["prefixStyle"])("transform");
  var onEnterCB = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    // 进入时改变显示状态
    setIsShow(true);
    listWrapperRef.current.style[transform] = "translate3d(0, 100%, 0)";
  }, [transform]); // 进入动画结束的时候回调函数

  var onEnteredCB = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {}, [transform]); // 正在进入的动画中执行的回调函数

  var onEnteringCB = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    listWrapperRef.current.style["transition"] = "all 0.3s";
    listWrapperRef.current.style[transform] = "translate3d(0, 0, 0)";
  }, [transform]); // 执行退出的操作

  var onExitCB = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    listWrapperRef.current.style[transform] = "translate3d(0, ".concat(distance, "px, 0)");
  }, [transform, distance]); // 正在退出的回调函数

  var onExitingCB = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    listWrapperRef.current.style["transition"] = "all 0.3s";
    listWrapperRef.current.style[transform] = "translate3d(0, 100%, 0)";
  }, [transform]); //一退出的回调函数

  var onExitedCB = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setIsShow(false);
    listWrapperRef.current.style[transform] = "translate3d(0, 100%, 0)";
  }, [transform]); // 改变播放模式的函数

  var changeMode = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    var newMode = (mode + 1) % 3; // 判断模式的值 0 顺序播放 1 循环播放 2 随机播放

    if (newMode === 0) {
      changePlayListDispatch(sequencePlayList); // 拿到当前的歌曲的下标重新设置

      var index = Object(utils_index__WEBPACK_IMPORTED_MODULE_8__["findIndex"])(currentSong, sequencePlayList);
      changeCurrentIndexDispatch(index);
    } else if (newMode === 1) {
      // 循环模式
      changePlayListDispatch(sequencePlayList);
    } else if (newMode === 2) {
      // 随机播放
      // 首先进行歌曲列表冲洗洗牌， 洗牌算法
      var newList = Object(utils_index__WEBPACK_IMPORTED_MODULE_8__["shuffle"])(sequencePlayList); // 找到当前歌曲在list中的下标

      var _index = Object(utils_index__WEBPACK_IMPORTED_MODULE_8__["findIndex"])(currentSong, newList); // 重新设置playList


      changePlayListDispatch(newList);
      changeCurrentIndexDispatch(_index);
    }

    changeModeDispatch(newMode);
  }); // 改变当前的播放模式

  var getPlayMode = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var content, text;

    if (mode === api_config__WEBPACK_IMPORTED_MODULE_6__["playMode"].sequence) {
      content = "&#xe625;";
      text = "顺序播放";
    } else if (mode === api_config__WEBPACK_IMPORTED_MODULE_6__["playMode"].loop) {
      content = "&#xe653;";
      text = "单曲循环";
    } else {
      content = "&#xe61b;";
      text = "随机播放";
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "iconfont",
      onClick: function onClick(e) {
        return changeMode(e);
      },
      dangerouslySetInnerHTML: {
        __html: content
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "text"
    }, text));
  }); // 处理滚动的函数

  var handleScroll = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (pos) {}); // 获取当前的歌曲的字体图标

  var getCurrentIcon = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (item) {
    // 判断当前id是否和歌单传入的id一致
    var current = currentSong.id === item.id;
    var className = current ? "icon-play" : "";
    var content = current ? "&#xe6e3;" : "";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "current iconfont ".concat(className),
      dangerouslySetInnerHTML: {
        __html: content
      }
    });
  }); // 设置最爱的图标

  var getFavoriteIcon = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "iconfont"
    }, "\uE601");
  }); // 删除歌单列表中的歌曲

  var handleDeleteSong = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e, item) {
    e.stopPropagation();
    deleteSongDispatch(item);
  }); // 改变当前播放音乐的下标

  var handleChangeCurrentIndex = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (index) {
    // 如果当前的index等于store存储的index那么我们就直接结束， 否则我们就重新设置index
    if (currentIndex === index) {
      return;
    } // 改变当前的音乐的下标


    changeCurrentIndexDispatch(index);
  }); // 处理是否显示提示框

  var handleShowClear = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    e.stopPropagation();
    confirmRef.current.show();
  }); // 清空列表中的所有歌曲

  var handleConfirmClear = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    clearDisptach(); // 清除上一次的歌曲数据

    clearPreSong();
  }); // 处理触摸开始的函数

  var handleTouchStart = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    if (!canTouch || initialed) {
      return;
    }

    listWrapperRef.current.style[transform] = "";
    setDistance(0);
    setStartY(e.nativeEvent.touches[0].pageY);
    setInitialed(true);
  }); // 处理触摸移动的方法

  var handleTouchMove = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    if (!canTouch || !initialed) {
      return;
    }

    var distance = e.nativeEvent.touches[0].pageY - startY;
    console.log(distance);

    if (distance < 0) {
      return;
    }

    setDistance(distance);
    listWrapperRef.current.style[transform] = "translate3d(0, ".concat(distance, "px, 0)");
  }); // 处理触摸结束的方法

  var handleTouchEnd = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    // 触摸结束需要恢复初始状态
    setInitialed(false); // 判断touch产生的距离， 大于150直接关闭

    if (distance >= 150) {
      togglePlayListDispatch(false);
    } else {
      // 直接恢复之前的样子
      listWrapperRef.current.style["transition"] = "all 0.3s";
      listWrapperRef.current.style[transform] = "translate3d(0,0,0)";
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["CSSTransition"], {
    "in": showPlayList,
    timeout: 300,
    classNames: "list-fade",
    onEnter: onEnterCB,
    onEntering: onEnteringCB,
    onEntered: onEnteredCB,
    onExit: onExitCB,
    onExited: onExitedCB,
    onExiting: onExitingCB
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["PlayListWrapper"], {
    onClick: function onClick() {
      togglePlayListDispatch(false);
      setIsShow(false);
    },
    style: isShow ? {
      display: "block"
    } : {
      display: "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: listWrapperRef,
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    className: "list-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["ListHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "title"
  }, getPlayMode(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    onClick: function onClick(e) {
      return handleShowClear(e);
    },
    className: "iconfont clear"
  }, "\uE63D"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["ScrollWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(baseUI_scroll_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: listContentRef,
    onScroll: function onScroll(pos) {
      return handleScroll(pos);
    },
    bounceTop: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["ListContent"], null, playList.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      onClick: function onClick() {
        return handleChangeCurrentIndex(index);
      },
      className: "item",
      key: item.id
    }, getCurrentIcon(item), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "text"
    }, item.name, "-", Object(utils_index__WEBPACK_IMPORTED_MODULE_8__["getName"])(item.ar)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "like"
    }, getFavoriteIcon(item)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "delete",
      onClick: function onClick(e) {
        return handleDeleteSong(e, item);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "iconfont"
    }, "\uE63D")));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(baseUI_confirm__WEBPACK_IMPORTED_MODULE_9__["default"], {
    ref: confirmRef,
    text: "是否删除全部?",
    cancelBtnText: "取消",
    confirmBtnText: "确定",
    handleConfirm: handleConfirmClear
  })));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    showPlayList: state.getIn(["player", "playListStatus"]),
    playList: state.getIn(["player", "playList"]),
    currentSong: state.getIn(["player", "currentSong"]),
    currentIndex: state.getIn(["player", "currentIndex"]),
    sequencePlayList: state.getIn(["player", "sequencePlayList"])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    togglePlayListDispatch: function togglePlayListDispatch(data) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["changePlayListStatus"])(data));
    },
    changeCurrentIndexDispatch: function changeCurrentIndexDispatch(data) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["changeCurrentIndex"])(data));
    },
    changePlayListDispatch: function changePlayListDispatch(data) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["changePlayList"])(data));
    },
    changeModeDispatch: function changeModeDispatch(data) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["changeMode"])(data));
    },
    deleteSongDispatch: function deleteSongDispatch(data) {
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["deleteSong"])(data));
    },
    clearDisptach: function clearDisptach() {
      // 清空播放列表
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["changePlayList"])([]));
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["changeSequecePlayList"])([]));
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["changeCurrentIndex"])(-1));
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["changePlayListStatus"])(false));
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["changeCurrentSong"])({}));
      dispatch(Object(_store_actionCreator__WEBPACK_IMPORTED_MODULE_5__["changePlayingState"])(false));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(PlayList)));

/***/ }),

/***/ "./src/application/Player/play-list/style.js":
/*!***************************************************!*\
  !*** ./src/application/Player/play-list/style.js ***!
  \***************************************************/
/*! exports provided: PlayListWrapper, ListHeader, ScrollWrapper, ListContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayListWrapper", function() { return PlayListWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListHeader", function() { return ListHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollWrapper", function() { return ScrollWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListContent", function() { return ListContent; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assets_global_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/global-style */ "./src/assets/global-style.js");


function _templateObject4() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\noverflow: hidden;\nheight: 400px;\n.item{\n    display: flex;\n    align-items: center;\n    padding: 0 30px 0 20px;\n    height: 40px;\n    overflow: hidden;\n    .current{\n        color: #d44439;\n        width: 20px;\n        font-size: 12px;\n        font-weight: normal;\n    }\n    .like{\n        position: relative;\n        font-size: 14px;\n        margin-right: 15px;\n        color: #d44439;\n    }\n    .delete{\n        font-weight: normal;\n        color: #d44439;\n        position: relative;\n    }\n    .text{\n        font-size: 14px;\n        flex: 1;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        color: #bba8a8;\n    }\n}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nposition: relative;\npadding: 20px 30px 10px 20px;\n.title {\n    display: flex;\n    align-items: center;\n    margin: 0;\n    & > div{\n        display: flex;\n        flex: 1;\n        align-items: center;\n        .iconfont{\n            font-size: 18px;\n            margin-right: 10px;\n            color: #d44439;\n        }\n        .text{\n            font-size: 14px;\n            flex: 1;\n            color: #2E3030;\n            font-size: 14px;\n        }\n    }\n    .clear{\n        position: relative;\n        color: #d44439;\n        font-size: 16px;\n        font-weight: normal;\n    }\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nposition: fixed;\ntop: 0;\nleft: 0;\nbottom: 0;\nright: 0;\nbackground-color: ", ";\nz-index: 1001;\n&.list-fade-enter{\n    opacity: 0;\n}\n&.list-fade-enter-active{\n    opacity: 1;\n    transition: all 0.3s;\n}\n&.list-fade-exit{\n    opacity: 1;\n}\n&.list-fade-exit-active{\n    opacity: 0;\n    transition: all 0.3;\n}\n.list-wrapper{\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    border-radius: 10px 10px 0 0;\n    background-color: ", "\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var PlayListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), _assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["background-color-shadow"], _assets_global_style__WEBPACK_IMPORTED_MODULE_2__["default"]["highlight-background-color"]);
var ListHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2()); // 外层的滚动的盒子

var ScrollWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var ListContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());

/***/ }),

/***/ "./src/application/Player/store/actionCreator.js":
/*!*******************************************************!*\
  !*** ./src/application/Player/store/actionCreator.js ***!
  \*******************************************************/
/*! exports provided: changePlayList, changeSequecePlayList, changeCurrentIndex, changeCurrentSong, insertSong, changePlayingState, getSongsDetail, changePlayListStatus, changeMode, deleteSong, changeFullScreen, changeSpeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePlayList", function() { return changePlayList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSequecePlayList", function() { return changeSequecePlayList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCurrentIndex", function() { return changeCurrentIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCurrentSong", function() { return changeCurrentSong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertSong", function() { return insertSong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePlayingState", function() { return changePlayingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSongsDetail", function() { return getSongsDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePlayListStatus", function() { return changePlayListStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeMode", function() { return changeMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSong", function() { return deleteSong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeFullScreen", function() { return changeFullScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSpeed", function() { return changeSpeed; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionTypes */ "./src/application/Player/store/actionTypes.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var api_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! api/request */ "./src/api/request.js");





/* 
  改变当前的播放歌单的数据
*/

var changePlayList = function changePlayList(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_PLAY_LIST"],
    data: Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(data)
  };
};
var changeSequecePlayList = function changeSequecePlayList(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SET_SEQUECE_PLAYLIST"],
    data: Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(data)
  };
};
/* 
  改变当前选中歌曲的下标
*/

var changeCurrentIndex = function changeCurrentIndex(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_CURRENT_INDEX"],
    data: data
  };
};
/* 
  改变当前播放的歌曲
*/

var changeCurrentSong = function changeCurrentSong(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_CURRENT_SONG"],
    data: Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(data)
  };
};
var insertSong = function insertSong(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["INSERT_SONG"],
    data: Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(data)
  };
};
var changePlayingState = function changePlayingState(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_PLAYING"],
    data: data
  };
};
var getSongsDetail = function getSongsDetail(id) {
  return /*#__PURE__*/function () {
    var _ref = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var res, song;
      return _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(api_request__WEBPACK_IMPORTED_MODULE_4__["getSongDetailRequest"])(id);

            case 2:
              res = _context.sent;

              if (res) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return");

            case 5:
              song = res.songs[0];
              dispatch(insertSong(song));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}; // 改变播放列表的状态

var changePlayListStatus = function changePlayListStatus(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_PLAY_LIST_STATUS"],
    data: data
  };
};
var changeMode = function changeMode(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_MODE"],
    data: data
  };
}; // 删除某一个歌曲

var deleteSong = function deleteSong(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["DELETE_SONG"],
    data: data
  };
};
var changeFullScreen = function changeFullScreen(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_FULL_SCREEN"],
    data: data
  };
};
var changeSpeed = function changeSpeed(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_SPEED"],
    data: data
  };
};

/***/ }),

/***/ "./src/application/Player/store/actionTypes.js":
/*!*****************************************************!*\
  !*** ./src/application/Player/store/actionTypes.js ***!
  \*****************************************************/
/*! exports provided: CHANGE_PLAY_LIST, CHANGE_CURRENT_INDEX, CHANGE_CURRENT_SONG, CHANGE_PLAYING, INSERT_SONG, CHANGE_PLAY_LIST_STATUS, SET_SEQUECE_PLAYLIST, CHANGE_MODE, DELETE_SONG, CHANGE_FULL_SCREEN, CHANGE_SPEED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PLAY_LIST", function() { return CHANGE_PLAY_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_CURRENT_INDEX", function() { return CHANGE_CURRENT_INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_CURRENT_SONG", function() { return CHANGE_CURRENT_SONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PLAYING", function() { return CHANGE_PLAYING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSERT_SONG", function() { return INSERT_SONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PLAY_LIST_STATUS", function() { return CHANGE_PLAY_LIST_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SEQUECE_PLAYLIST", function() { return SET_SEQUECE_PLAYLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_MODE", function() { return CHANGE_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_SONG", function() { return DELETE_SONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_FULL_SCREEN", function() { return CHANGE_FULL_SCREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_SPEED", function() { return CHANGE_SPEED; });
var CHANGE_PLAY_LIST = "player/CHANGE_PLAY_LIST";
var CHANGE_CURRENT_INDEX = "player/CHANGE_CURRENT_INDEX";
var CHANGE_CURRENT_SONG = "player/CHANGE_CURRENT_SONG";
var CHANGE_PLAYING = "player/CHANGE_PLAYING";
var INSERT_SONG = "player/INSERT_SONG";
var CHANGE_PLAY_LIST_STATUS = "player/CHANGE_PLAY_LIST_STATUS";
var SET_SEQUECE_PLAYLIST = "player/SET_SEQUECE_PLAYLIST";
var CHANGE_MODE = "player/CHANGE_MODE";
var DELETE_SONG = "player/DELETE_SONG";
var CHANGE_FULL_SCREEN = "player/CHANGE_FULL_SCREEN";
var CHANGE_SPEED = "player/CHANGE_SPEED";

/***/ }),

/***/ "./src/application/Player/store/index.js":
/*!***********************************************!*\
  !*** ./src/application/Player/store/index.js ***!
  \***********************************************/
/*! exports provided: actionTypes, actionCreator, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/application/Player/store/actionTypes.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return _actionTypes__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _actionCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionCreator */ "./src/application/Player/store/actionCreator.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionCreator", function() { return _actionCreator__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/application/Player/store/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/application/Player/store/reducer.js":
/*!*************************************************!*\
  !*** ./src/application/Player/store/reducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/application/Player/store/actionTypes.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils */ "./src/utils/index.js");
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/config */ "./src/api/config.js");




var defaultState = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])({
  playList: [],
  currentIndex: -1,
  currentSong: {},
  playing: false,
  speed: 1,
  sequencePlayList: [],
  playListStatus: false,
  mode: _api_config__WEBPACK_IMPORTED_MODULE_3__["playMode"].sequence,
  fullScreen: false
});
/* 

  处理点击的歌曲需要插入的新歌曲
*/

var handleInsertSong = function handleInsertSong(state, song) {
  var playList = JSON.parse(JSON.stringify(state.get('playList').toJS()));
  var sequenceList = JSON.parse(JSON.stringify(state.get('sequencePlayList').toJS()));
  var currentIndex = state.get('currentIndex'); // 查询是否存在相同的歌曲

  var fpIndex = Object(utils__WEBPACK_IMPORTED_MODULE_2__["findIndex"])(song, playList); // 如果是当前歌曲直接不处理

  if (fpIndex === currentIndex && currentIndex !== -1) return state;
  currentIndex++; // 把歌放进去,放到当前播放曲目的下一个位置

  playList.splice(currentIndex, 0, song); // 如果列表中已经存在要添加的歌

  if (fpIndex > -1) {
    if (currentIndex > fpIndex) {
      playList.splice(fpIndex, 1);
      currentIndex--;
    } else {
      playList.splice(fpIndex + 1, 1);
    }
  }

  var sequenceIndex = Object(utils__WEBPACK_IMPORTED_MODULE_2__["findIndex"])(playList[currentIndex], sequenceList) + 1;
  var fsIndex = Object(utils__WEBPACK_IMPORTED_MODULE_2__["findIndex"])(song, sequenceList);
  sequenceList.splice(sequenceIndex, 0, song);

  if (fsIndex > -1) {
    if (sequenceIndex > fsIndex) {
      sequenceList.splice(fsIndex, 1);
      sequenceIndex--;
    } else {
      sequenceList.splice(fsIndex + 1, 1);
    }
  }

  return state.merge({
    'playList': Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])(playList),
    'sequencePlayList': Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])(sequenceList),
    'currentIndex': Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])(currentIndex)
  });
}; // 删除某一个歌曲


var handleDeleteSong = function handleDeleteSong(state, song) {
  var index = state.get("playList").findIndex(function (item) {
    return item.get("id") === song.id;
  });
  return state.set("playList", state.get("playList")["delete"](index));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_PLAY_LIST"]:
      return state.set("playList", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_CURRENT_INDEX"]:
      return state.set("currentIndex", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_CURRENT_SONG"]:
      return state.set("currentSong", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_PLAYING"]:
      return state.set("playing", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["INSERT_SONG"]:
      return handleInsertSong(state, action.data.toJS());

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_PLAY_LIST_STATUS"]:
      return state.set("playListStatus", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_SEQUECE_PLAYLIST"]:
      return state.set('sequencePlayList', action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_MODE"]:
      return state.set("mode", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["DELETE_SONG"]:
      return handleDeleteSong(state, action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_FULL_SCREEN"]:
      return state.set("fullScreen", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_SPEED"]:
      return state.set("speed", action.data);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/application/Rank/store/actionCreator.js":
/*!*****************************************************!*\
  !*** ./src/application/Rank/store/actionCreator.js ***!
  \*****************************************************/
/*! exports provided: changeRankList, changeRankLoading, getRankList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeRankList", function() { return changeRankList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeRankLoading", function() { return changeRankLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRankList", function() { return getRankList; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionTypes */ "./src/application/Rank/store/actionTypes.js");
/* harmony import */ var api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! api/request */ "./src/api/request.js");




var changeRankList = function changeRankList(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_RANK_LIST"],
    data: data
  };
};
var changeRankLoading = function changeRankLoading(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_RANK_LOADING"],
    data: data
  };
};
/* 
  获取排行榜数据
*/

var getRankList = function getRankList() {
  return /*#__PURE__*/function () {
    var _ref = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var result;
      return _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(api_request__WEBPACK_IMPORTED_MODULE_3__["getRankListRequest"])();

            case 3:
              result = _context.sent;
              dispatch(changeRankList(result.list));
              dispatch(changeRankLoading(false));
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log("排行榜数据获取失败");

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/application/Rank/store/actionTypes.js":
/*!***************************************************!*\
  !*** ./src/application/Rank/store/actionTypes.js ***!
  \***************************************************/
/*! exports provided: CHANGE_RANK_LIST, CHANGE_RANK_LOADING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_RANK_LIST", function() { return CHANGE_RANK_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_RANK_LOADING", function() { return CHANGE_RANK_LOADING; });
var CHANGE_RANK_LIST = "rank/CHANGE_RANK_LIST";
var CHANGE_RANK_LOADING = "rank/CHANGE_RANK_LOADING";

/***/ }),

/***/ "./src/application/Rank/store/index.js":
/*!*********************************************!*\
  !*** ./src/application/Rank/store/index.js ***!
  \*********************************************/
/*! exports provided: actionCreator, actionTypes, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionCreator */ "./src/application/Rank/store/actionCreator.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionCreator", function() { return _actionCreator__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./src/application/Rank/store/actionTypes.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return _actionTypes__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/application/Rank/store/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/application/Rank/store/reducer.js":
/*!***********************************************!*\
  !*** ./src/application/Rank/store/reducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/application/Rank/store/actionTypes.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");


var defaultState = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])({
  rankList: [],
  loading: true
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_RANK_LIST"]:
      return state.set("rankList", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_RANK_LOADING"]:
      return state.set("loading", action.data);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/application/Recommend/store/actionCreator.js":
/*!**********************************************************!*\
  !*** ./src/application/Recommend/store/actionCreator.js ***!
  \**********************************************************/
/*! exports provided: changeBanner, changeRecommend, changePlayList, changeEnterLoading, getBannerList, getRecommendList, getPlayList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeBanner", function() { return changeBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeRecommend", function() { return changeRecommend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePlayList", function() { return changePlayList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeEnterLoading", function() { return changeEnterLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBannerList", function() { return getBannerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecommendList", function() { return getRecommendList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlayList", function() { return getPlayList; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionTypes */ "./src/application/Recommend/store/actionTypes.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var api_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! api/request */ "./src/api/request.js");





var changeBanner = function changeBanner(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_BANNER"],
    data: Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(data)
  };
};
var changeRecommend = function changeRecommend(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_RECOMMEND_LIST"],
    data: Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(data)
  };
};
var changePlayList = function changePlayList(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_PLAY_LIST"],
    data: Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(data)
  };
};
var changeEnterLoading = function changeEnterLoading(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_ENTER_LOADING"],
    data: Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(data)
  };
};
var getBannerList = function getBannerList() {
  return /*#__PURE__*/function () {
    var _ref = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var data;
      return _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(api_request__WEBPACK_IMPORTED_MODULE_4__["getBannerRequest"])();

            case 3:
              data = _context.sent;
              dispatch(changeBanner(data.banners));
              dispatch(changeEnterLoading(false));
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log("轮播图获取数据失败");

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var getRecommendList = function getRecommendList() {
  return /*#__PURE__*/function () {
    var _ref2 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      var data, action;
      return _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Object(api_request__WEBPACK_IMPORTED_MODULE_4__["getRecommendRequest"])();

            case 3:
              data = _context2.sent;
              action = changeRecommend(data.result);
              dispatch(action);
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.log("推荐歌单数据获取失败");

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var getPlayList = function getPlayList() {
  return /*#__PURE__*/function () {
    var _ref3 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
      var data;
      return _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return getPlayListRequest();

            case 3:
              data = _context3.sent;
              _context3.next = 8;
              break;

            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](0);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 6]]);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/application/Recommend/store/actionTypes.js":
/*!********************************************************!*\
  !*** ./src/application/Recommend/store/actionTypes.js ***!
  \********************************************************/
/*! exports provided: CHANGE_BANNER, CHANGE_RECOMMEND_LIST, CHANGE_PLAY_LIST, CHANGE_ENTER_LOADING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_BANNER", function() { return CHANGE_BANNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_RECOMMEND_LIST", function() { return CHANGE_RECOMMEND_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PLAY_LIST", function() { return CHANGE_PLAY_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_ENTER_LOADING", function() { return CHANGE_ENTER_LOADING; });
var CHANGE_BANNER = "home/recommend/CHANGE_BANNER";
var CHANGE_RECOMMEND_LIST = "home/recommend/CHANGE_RECOMMEND_LIST";
var CHANGE_PLAY_LIST = "home/songs_count/CHANGE_PLAY_LIST";
var CHANGE_ENTER_LOADING = "home/enter_loading/CHANGE_ENTER_LOADING";

/***/ }),

/***/ "./src/application/Recommend/store/index.js":
/*!**************************************************!*\
  !*** ./src/application/Recommend/store/index.js ***!
  \**************************************************/
/*! exports provided: reducer, actionCreator, actionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/application/Recommend/store/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./src/application/Recommend/store/actionTypes.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return _actionTypes__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _actionCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionCreator */ "./src/application/Recommend/store/actionCreator.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionCreator", function() { return _actionCreator__WEBPACK_IMPORTED_MODULE_2__; });





/***/ }),

/***/ "./src/application/Recommend/store/reducer.js":
/*!****************************************************!*\
  !*** ./src/application/Recommend/store/reducer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/application/Recommend/store/actionTypes.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");


var defaultStates = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])({
  // 轮播图的数据
  bannerList: [],
  // 推荐歌单的数据
  recommendList: [],
  // 是否出现进入动画的判断条件
  enterLoading: true
}); // 暴露具体的方法

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultStates;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_BANNER"]:
      return state.set("bannerList", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_RECOMMEND_LIST"]:
      return state.set("recommendList", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_ENTER_LOADING"]:
      return state.set("enterLoading", action.data);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/application/Search/store/actionCreator.js":
/*!*******************************************************!*\
  !*** ./src/application/Search/store/actionCreator.js ***!
  \*******************************************************/
/*! exports provided: changeHotKeyWords, changeSuggestList, changeSongsList, changeEnterLoading, getHotKeyWords, getSuggestList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeHotKeyWords", function() { return changeHotKeyWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSuggestList", function() { return changeSuggestList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSongsList", function() { return changeSongsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeEnterLoading", function() { return changeEnterLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotKeyWords", function() { return getHotKeyWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuggestList", function() { return getSuggestList; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionTypes */ "./src/application/Search/store/actionTypes.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var api_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! api/request */ "./src/api/request.js");




 // 改变热点歌曲

var changeHotKeyWords = function changeHotKeyWords(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_HOT_KEY_WORDS"],
    data: Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(data)
  };
};
var changeSuggestList = function changeSuggestList(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_SUGGEST_LIST"],
    data: Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(data)
  };
};
var changeSongsList = function changeSongsList(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_SONGS_LIST"],
    data: Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(data)
  };
};
var changeEnterLoading = function changeEnterLoading(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_ENTER_LOADING"],
    data: data
  };
}; // 获取热点歌曲

var getHotKeyWords = function getHotKeyWords() {
  return /*#__PURE__*/function () {
    var _ref = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var res;
      return _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(changeEnterLoading(false)); // 获取热点关键词的数据

              _context.next = 3;
              return Object(api_request__WEBPACK_IMPORTED_MODULE_4__["getHotKeyWordsRequest"])();

            case 3:
              res = _context.sent;
              dispatch(changeHotKeyWords(res.result.hots));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}; // 获取搜索关键字的结果

var getSuggestList = function getSuggestList(query) {
  return /*#__PURE__*/function () {
    var _ref2 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      var res, data, songData, sData;
      return _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch(changeEnterLoading(true));
              _context2.next = 3;
              return Object(api_request__WEBPACK_IMPORTED_MODULE_4__["getSuggestListRequest"])(query);

            case 3:
              res = _context2.sent;

              if (res) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return");

            case 6:
              data = res.result || [];
              dispatch(changeSuggestList(data)); // 通过搜索关键字获取歌手歌曲的信息

              _context2.next = 10;
              return Object(api_request__WEBPACK_IMPORTED_MODULE_4__["getResultSongsListRequest"])(query);

            case 10:
              songData = _context2.sent;

              if (songData) {
                _context2.next = 13;
                break;
              }

              return _context2.abrupt("return");

            case 13:
              sData = songData.result || [];
              dispatch(changeSongsList(sData));
              dispatch(changeEnterLoading(false));

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/application/Search/store/actionTypes.js":
/*!*****************************************************!*\
  !*** ./src/application/Search/store/actionTypes.js ***!
  \*****************************************************/
/*! exports provided: CHANGE_HOT_KEY_WORDS, CHANGE_SUGGEST_LIST, CHANGE_SONGS_LIST, CHANGE_ENTER_LOADING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_HOT_KEY_WORDS", function() { return CHANGE_HOT_KEY_WORDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_SUGGEST_LIST", function() { return CHANGE_SUGGEST_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_SONGS_LIST", function() { return CHANGE_SONGS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_ENTER_LOADING", function() { return CHANGE_ENTER_LOADING; });
var CHANGE_HOT_KEY_WORDS = "search/CHANGE_HOT_KEY_WORDS";
var CHANGE_SUGGEST_LIST = "search/CHANGE_SUGGEST_LIST";
var CHANGE_SONGS_LIST = "search/CHANGE_SONGS_LIST";
var CHANGE_ENTER_LOADING = "search/CHANGE_ENTER_LOADING";

/***/ }),

/***/ "./src/application/Search/store/index.js":
/*!***********************************************!*\
  !*** ./src/application/Search/store/index.js ***!
  \***********************************************/
/*! exports provided: reducer, actionCreator, actionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/application/Search/store/actionTypes.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return _actionTypes__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _actionCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionCreator */ "./src/application/Search/store/actionCreator.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionCreator", function() { return _actionCreator__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/application/Search/store/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/application/Search/store/reducer.js":
/*!*************************************************!*\
  !*** ./src/application/Search/store/reducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/application/Search/store/actionTypes.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");


var defaultState = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])({
  hotList: [],
  suggestList: {},
  songsList: {},
  enterLoading: true
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_HOT_KEY_WORDS"]:
      return state.set("hotList", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_SUGGEST_LIST"]:
      return state.set("suggestList", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_SONGS_LIST"]:
      return state.set("songsList", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_ENTER_LOADING"]:
      return state.set("enterLoading", action.data);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/application/Singer/store/actionCreator.js":
/*!*******************************************************!*\
  !*** ./src/application/Singer/store/actionCreator.js ***!
  \*******************************************************/
/*! exports provided: changeSingerArtists, changeSingerSongs, changeSingerEnterLoading, getSingerInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSingerArtists", function() { return changeSingerArtists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSingerSongs", function() { return changeSingerSongs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSingerEnterLoading", function() { return changeSingerEnterLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingerInfo", function() { return getSingerInfo; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionTypes */ "./src/application/Singer/store/actionTypes.js");
/* harmony import */ var api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! api/request */ "./src/api/request.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");





var changeSingerArtists = function changeSingerArtists(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_SINGER_ARTISTS"],
    data: Object(immutable__WEBPACK_IMPORTED_MODULE_4__["fromJS"])(data)
  };
};
var changeSingerSongs = function changeSingerSongs(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_SINGER_SONGS"],
    data: Object(immutable__WEBPACK_IMPORTED_MODULE_4__["fromJS"])(data)
  };
};
var changeSingerEnterLoading = function changeSingerEnterLoading(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_SINGER_ENTER_LOADING"],
    data: data
  };
};
/* 
  通过id获取歌手歌单的数据
*/

var getSingerInfo = function getSingerInfo(id) {
  return /*#__PURE__*/function () {
    var _ref = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var result;
      return _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(api_request__WEBPACK_IMPORTED_MODULE_3__["getSingerDataRequest"])(id);

            case 3:
              result = _context.sent;
              dispatch(changeSingerArtists(result.artist));
              dispatch(changeSingerSongs(result.hotSongs));
              dispatch(changeSingerEnterLoading(false));
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.log("获取歌手歌单数据失败");

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/application/Singer/store/actionTypes.js":
/*!*****************************************************!*\
  !*** ./src/application/Singer/store/actionTypes.js ***!
  \*****************************************************/
/*! exports provided: CHANGE_SINGER_ARTISTS, CHANGE_SINGER_SONGS, CHANGE_SINGER_ENTER_LOADING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_SINGER_ARTISTS", function() { return CHANGE_SINGER_ARTISTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_SINGER_SONGS", function() { return CHANGE_SINGER_SONGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_SINGER_ENTER_LOADING", function() { return CHANGE_SINGER_ENTER_LOADING; });
var CHANGE_SINGER_ARTISTS = "singer/CHANGE_SINGER_ARTISTS";
var CHANGE_SINGER_SONGS = "singer/CHANGE_SINGER_SONGS";
var CHANGE_SINGER_ENTER_LOADING = "singer/CHANGE_SINGER_ENTER_LOADING";

/***/ }),

/***/ "./src/application/Singer/store/index.js":
/*!***********************************************!*\
  !*** ./src/application/Singer/store/index.js ***!
  \***********************************************/
/*! exports provided: actionTypes, actionCreator, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/application/Singer/store/actionTypes.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return _actionTypes__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _actionCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionCreator */ "./src/application/Singer/store/actionCreator.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionCreator", function() { return _actionCreator__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/application/Singer/store/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/application/Singer/store/reducer.js":
/*!*************************************************!*\
  !*** ./src/application/Singer/store/reducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/application/Singer/store/actionTypes.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");


var defaultState = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])({
  artist: {},
  hotSongs: [],
  enterLoading: true
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_SINGER_ARTISTS"]:
      return state.set("artist", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_SINGER_SONGS"]:
      return state.set("hotSongs", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_SINGER_ENTER_LOADING"]:
      return state.set("enterLoading", action.data);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/application/Singers/store/actionCreator.js":
/*!********************************************************!*\
  !*** ./src/application/Singers/store/actionCreator.js ***!
  \********************************************************/
/*! exports provided: changeCategory, changeAlpha, changeSingerList, changeListOffset, changeEnterLoading, changePullUpLoading, changePullDownLoading, getSingerList, getHotSingerList, refreshMoreHotSingerList, refreshMoreSingerList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCategory", function() { return changeCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeAlpha", function() { return changeAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSingerList", function() { return changeSingerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeListOffset", function() { return changeListOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeEnterLoading", function() { return changeEnterLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePullUpLoading", function() { return changePullUpLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePullDownLoading", function() { return changePullDownLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingerList", function() { return getSingerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotSingerList", function() { return getHotSingerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshMoreHotSingerList", function() { return refreshMoreHotSingerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshMoreSingerList", function() { return refreshMoreSingerList; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionTypes */ "./src/application/Singers/store/actionTypes.js");
/* harmony import */ var api_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! api/request */ "./src/api/request.js");




 // 改变歌手分类的方法

var changeCategory = function changeCategory(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["CHANGE_CATEGORY"],
    data: data
  };
};
var changeAlpha = function changeAlpha(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["CHANGE_ALPHA"],
    data: data
  };
}; // 获取新的singerList的action方法

var changeSingerList = function changeSingerList(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["CHANGE_SINGER_LIST"],
    data: data
  };
};
var changeListOffset = function changeListOffset(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["CHANGE_LIST_OFFSET"],
    data: data
  };
}; // 修改数据加载成功之前的动画

var changeEnterLoading = function changeEnterLoading(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["CHANGE_ENTER_LOADING"],
    data: data
  };
};
var changePullUpLoading = function changePullUpLoading(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["CHANGE_PULLUP_LOADING"],
    data: data
  };
};
var changePullDownLoading = function changePullDownLoading(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["CHANGE_PULLDOWN_LOADING"],
    data: data
  };
}; // 在页面第一次加载时候我们需要加载歌手信息这个时候就需要加载分类信息

var getSingerList = function getSingerList() {
  return /*#__PURE__*/function () {
    var _ref = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(dispatch, getState) {
      var category, alpha, offset, result, data;
      return _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              category = getState().getIn(["singers", "category"]);
              alpha = getState().getIn(["singers", "alpha"]);
              offset = getState().getIn(["singers", "listOffset"]);
              _context.prev = 3;
              _context.next = 6;
              return Object(api_request__WEBPACK_IMPORTED_MODULE_4__["getSingerListRequest"])(category, alpha, offset);

            case 6:
              result = _context.sent;
              data = result.artists; // 派发数据

              dispatch(changeSingerList(data));
              dispatch(changeEnterLoading(false));
              dispatch(changeListOffset(data.length));
              dispatch(changePullDownLoading(false));
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](3);
              console.log("请求歌手数据错误");

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 14]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};
/* 
  获取热榜的明星 offset为0获取
*/

var getHotSingerList = function getHotSingerList() {
  // 调用这个方法的时候我们需要怕发其他法方法
  return /*#__PURE__*/function () {
    var _ref2 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(dispatch) {
      var result, list;
      return _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Object(api_request__WEBPACK_IMPORTED_MODULE_4__["getHotSingerListRequest"])(0);

            case 3:
              result = _context2.sent;
              list = result.artists;
              dispatch(changeSingerList(list));
              dispatch(changeEnterLoading(false));
              dispatch(changeListOffset(list.length));
              dispatch(changePullDownLoading(false));
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              console.log("请求热榜明星错误");

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};
/* 
上拉加载更多
*/

var refreshMoreHotSingerList = function refreshMoreHotSingerList() {
  return /*#__PURE__*/function () {
    var _ref3 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(dispatch, getState) {
      var offset, singerList, result, list;
      return _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              offset = getState().getIn(["singers", "listOffset"]);
              singerList = getState().getIn(["singers", "singersList"]);
              _context3.next = 5;
              return Object(api_request__WEBPACK_IMPORTED_MODULE_4__["getHotSingerListRequest"])(offset);

            case 5:
              result = _context3.sent;
              list = [].concat(Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(singerList), Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(result.artists));
              dispatch(changeSingerList(list));
              dispatch(changePullUpLoading(false));
              dispatch(changeListOffset(list.length));
              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);
              console.log("加载更多失败");

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 12]]);
    }));

    return function (_x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }();
};
/* 
  加载更多歌手信息带有查询条件的
*/

var refreshMoreSingerList = function refreshMoreSingerList() {
  return /*#__PURE__*/function () {
    var _ref4 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(dispatch, getState) {
      var category, alpha, offset, singerList, result, list;
      return _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              category = getState().getIn(["singers", "category"]);
              alpha = getState().getIn(["singers", "alpha"]);
              offset = getState().getIn(["singers", "listOffset"]);
              singerList = getState().getIn(["singers", "singersList"]);
              _context4.next = 7;
              return Object(api_request__WEBPACK_IMPORTED_MODULE_4__["getSingerListRequest"])(category, alpha, offset);

            case 7:
              result = _context4.sent;
              list = [].concat(Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(singerList), Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(result.artists));
              dispatch(changeSingerList(list));
              dispatch(changePullUpLoading(false));
              dispatch(changeListOffset(list.length));
              _context4.next = 17;
              break;

            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](0);
              console.log(加载歌手数据失败);

            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 14]]);
    }));

    return function (_x6, _x7) {
      return _ref4.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/application/Singers/store/actionTypes.js":
/*!******************************************************!*\
  !*** ./src/application/Singers/store/actionTypes.js ***!
  \******************************************************/
/*! exports provided: CHANGE_CATEGORY, CHANGE_SINGER_LIST, CHANGE_ALPHA, CHANGE_LIST_OFFSET, CHANGE_ENTER_LOADING, CHANGE_PULLUP_LOADING, CHANGE_PULLDOWN_LOADING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_CATEGORY", function() { return CHANGE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_SINGER_LIST", function() { return CHANGE_SINGER_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_ALPHA", function() { return CHANGE_ALPHA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LIST_OFFSET", function() { return CHANGE_LIST_OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_ENTER_LOADING", function() { return CHANGE_ENTER_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PULLUP_LOADING", function() { return CHANGE_PULLUP_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PULLDOWN_LOADING", function() { return CHANGE_PULLDOWN_LOADING; });
var CHANGE_CATEGORY = "singers/CHANGE_CATEGORY";
var CHANGE_SINGER_LIST = "singers/CHANGE_SINGER_LIST";
var CHANGE_ALPHA = "singers/CHANGE_ALPHA";
var CHANGE_LIST_OFFSET = "singers/CHANGE_LIST_OFFSET";
var CHANGE_ENTER_LOADING = "singers/CHANGE_ENTER_LOADING";
var CHANGE_PULLUP_LOADING = "singers/CHANGE_PULLUP_LOADING";
var CHANGE_PULLDOWN_LOADING = "singers/CHANGE_PULLDOWN_LOADING";

/***/ }),

/***/ "./src/application/Singers/store/index.js":
/*!************************************************!*\
  !*** ./src/application/Singers/store/index.js ***!
  \************************************************/
/*! exports provided: reducer, actionCreator, actionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/application/Singers/store/actionTypes.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return _actionTypes__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _actionCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionCreator */ "./src/application/Singers/store/actionCreator.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionCreator", function() { return _actionCreator__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/application/Singers/store/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/application/Singers/store/reducer.js":
/*!**************************************************!*\
  !*** ./src/application/Singers/store/reducer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/application/Singers/store/actionTypes.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");


var defaultStates = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])({
  category: "",
  singersList: [],
  alpha: "",
  listOffset: 0,
  enterLoading: true,
  pullUpLoading: false,
  pullDownLoading: false
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultStates;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_CATEGORY"]:
      return state.merge({
        "category": action.data,
        listOffset: 0,
        enterLoading: true
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_SINGER_LIST"]:
      return state.set("singersList", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_ALPHA"]:
      return state.merge({
        "alpha": action.data,
        listOffset: 0,
        enterLoading: true
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_SINGER_LIST"]:
      return state.set("singersList", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_ENTER_LOADING"]:
      return state.set("enterLoading", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_PULLUP_LOADING"]:
      return state.set("pullUpLoading", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_PULLDOWN_LOADING"]:
      return state.set("pullDownLoading", action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_LIST_OFFSET"]:
      return state.set("listOffset", action.data);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/assets/common/border.css":
/*!**************************************!*\
  !*** ./src/assets/common/border.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/assets/common/reset.css":
/*!*************************************!*\
  !*** ./src/assets/common/reset.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/assets/global-style.js":
/*!************************************!*\
  !*** ./src/assets/global-style.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var extendClick = function extendClick() {
  return "\n    position: relative;\n    &:before{\n      content: '';\n      position: absolute;\n      top: -.1rem; bottom: -.1rem; left: -.1rem; right: -.1rem;\n    };\n  ";
};

var noWrap = function noWrap() {
  return "\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  ";
};

var bgFull = function bgFull() {
  return "\n    background-position: 50%;\n    background-size: contain;\n    background-repeat: no-repeat;\n  ";
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "theme-color": "#d44439",
  "theme-color-shadow": "rgba(212, 68, 57, .5)",
  "font-color-light": "#f1f1f1",
  "font-color-light-shadow": "rgba(241, 241, 241, 0.6)",
  //略淡
  "font-color-desc": "#2E3030",
  "font-color-desc-v2": "#bba8a8",
  //略淡
  "font-size-ss": ".1rem",
  "font-size-s": ".12rem",
  "font-size-m": ".14rem",
  "font-size-l": ".16rem",
  "font-size-ll": ".18rem",
  "border-color": "#e4e4e4",
  "border-color-v2": "rgba(228, 228, 228, 0.1)",
  "background-color": "#f2f3f4",
  "background-color-shadow": "rgba(0, 0, 0, 0.3)",
  "highlight-background-color": "#fff",
  "official-red": "#E82001",
  extendClick: extendClick,
  noWrap: noWrap,
  bgFull: bgFull
});

/***/ }),

/***/ "./src/assets/iconfont/iconfont.js":
/*!*****************************************!*\
  !*** ./src/assets/iconfont/iconfont.js ***!
  \*****************************************/
/*! exports provided: IconStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconStyle", function() { return IconStyle; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n@font-face {font-family: \"iconfont\";\n  src: url('iconfont.eot?t=1565320061289'); /* IE9 */\n  src: url('iconfont.eot?t=1565320061289#iefix') format('embedded-opentype'), /* IE6-IE8 */\n  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAABP0AAsAAAAAI6wAABOlAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCISgqwfKcnATYCJAOBFAtMAAQgBYRtB4M/G8IdZYYYbByA4+HdDLL//5Igjxj77HiVNtETN7VwumQy6voQOalPuixpK7yPoljk+LHPp4bcHu/+ijCCQNllNlb5t3LF0VN1KCU8/7+W3g8DuEAzy2F0KQCpqJIl1KtLRudEqJwKVSEBX1k4CgAC4HL3Y9E/4qoonLq2UJtCLOMYwMHkfnja5r93B3p3RBqN1ThcGI0ZYGJksnauXPnFDPyV6lyFuGr3XVSS5ufogzk1KbDd2YEDQ9I+B0Sv7XdsaDnhQ87H/spfQQmd1DnEZAyydDAuP2+hEjpMQvtfjkiHETlAULTptA6kTn+7h4XijLk92b/twghbOSP3tP+bK21S4juWWP5l4/p8q+xMFifJHvBsjijHs6VsAdmoCpUcZreUlPAAHalakISyQvkKKatuqGkREBj0ROcbM5BN64WZQC0Fz4iiQWzz/wdDgVDXLNUbDEd8lisqbHbab+f8WBabE6H4qS7jljH1weGHL60AntJ3r/4sBx2aE3Ef6sz1/soe4dvASP9LN80EL81R4OZWYMAssNBvZrm6YnwyS6WQxdpgBvZ448WBKK5QrmvMjDkr1m3YY58DTjrjvIs2XbYlH+ST/ClrpKWeft35duPBf6WgvF4yrUOHZGUP+9b1AY79ZzwY1leRaioZUpZp6FB6YgmrqMZRFxjV1qW5QiM8kYIWn1GVQ6XcTWOA+pL6UQgHwDBEAfoQF1CBhIAUkgGakBxQgrQAQ5A2oAzpiKjIXQAakDGRPHkGAAWZA/QgK4AYsg5IIBsAC9kDKEL2AWqQAwAHchJQh5wBBJDzji6QL0Kk3vImROoqXwZAQ7YALuQDIIR8AoxA/gA8fM0AEb6OAAr4ugRo4etTgI+vOwCDbzcyqFJ5gG3IAYydbnIMeALeBWHNzVaVw6ApnscaPs0eBEiKQSyI6xADKWALoaI4m2GaOW1t6BIWl+Ki9byJ5Q+H4V1XNPVGAFu9vFhMjbVDpaFCcyqOPW843lFrO6d5w41iWdSbyjj9udNgmiZJ7Adh2HEbph4Vi4swcp00NSZza27R1bazTHt+KW2j+8u7sweWVdwAv8L4k+t7GvJpgAdJXLIMYXxx3KAIe3q9hj0SmE3mf/NC/JmI+mLAfOqoAYNJnyoKwiDhkVE1oZTSkzdzm6Jb6iYuPc9QMJcikyJyVc55c4QamZIJqyUIeU+BfqRkUKcAiOOolm2oqfknhdk/n0Wng+4gnIkqjKlqQACgvjPV2ZoJo4F0/kAOUZ+ZeUI8/FFGGCWlczZWTHCB0RXRlLkuMYnluDF7y+MbttXK/fY4ImEyQ7VbKLqGDZMLT0en/tuaQZrlNCQj7NXn59vfkV//v/g++s/7P+j7PSuM/G6w4XXc1DC2KiMz/6C/CkOl33ipPTR3JTHY4drravta1Ij7r5hYmysOOyHaao3OLmx37Pa/g6PD039vq7Zy1eRTfN6fXhEV2iQX9gbSszVhaKeQmNarHFhlvlFK2tZ2HJxdL1iydHrbJ6QUw/5geqa3fW3rx3gKWLd0+DNmWq0tPYXXjE+pSdk3g4ZvaIKGSTNl7btCavr7bYH5GWNmAjZHPsaegow0UwP9E+K1EK/oiTB74k4NOrWu79rT/nePlQ2EHcPSMAFTHU5blRJWUDTgm6MVGA7MdtXsKLNGvj6cJS1OfTYs+ApfFXAZ0uKQtjfjKRvb1LAcwPYeo3Mx3N7Zur7tDQpy8J5p7wh3r23lbQVMF1+cHYTCphQkUpaGDUlgVP+Y/0D8i/Kfxd9BELrgaAD/WVITykR9zhZGhpNSljlwI+EsvTNNZ00W6DbxKhMoQs0HWUOZcGJ2ojJBDf7qqgEXjFXOLlG6hvVl3nLb8n6R7fe0lhDGxiuhKwTw9LrZl+FBbCIOiPrhZQkQ2gr0ZTWjFJfBMImw6zs+6veD/wGQ/od68ByLhmuT/ATIZv59arY0M6khKAwsTeqXoYGBx2+gKvnfM3Yoh8L6lmzYJxoAUg7/8Yb2bwq6FMzIbUnroZHCpWc+ZzzzRtC4k7wotaRfNAU+fClVfZjNMKbKV38+urwP3l7c4W9HEoqkDlyC1i+4felW1X4CnYgbiYsxUq2sQ80PwOSthpaKdNSyaxoPzdxI49CqzCVmmX44Hr8i4KZFLcrmGxo5x+dZ0tL0bB8jCtM++yggIOVFTEsfMUKw9j6mlNkWxsWW6VYp1UqgyljLcSzLtlz7bOA6rmvblj3Be7kLHnGPeGb5ifEj8A/aGX+zfCZhCzunt+0JW1jTwvsxSxSDGsCzgXSnuY3pjz/79Ktwa0lBHZDwNlS1bP8Msz2b2DHHoIoCY1mubW/lykWNVRV5yfHo+ALY6230XwHI1gR2EEqjnpg7KhcEXuq5IPR721FHW5H1fRnSyisaQ6OSzwICQEvFbOOpARm5rV52mg23/k3gI68kvqgh3IN81DShMdyTOpIsVxJbB16xyyKk1TZwWyTo+kYj3+4uRK1LrrPFLqHjPTaPLsQhnB/Vv3K5g8P1Mce92GmaV691S5aKzpwVX3D/eCHgKjo2VKFCx2PFhaUiILOZXPX8IJHd+PKVTIIJKILJDF7+wWW0u9ET7u26TXRTOt5RlYpaZwJhUdHUerMr1bK70rNz3DzV7kjMwtLrTuTvMd+DwgBInQauA4Tg0PHAWPggtyxfQIc6UPvvYmw2yfnAmjTBT7ra7LTC4Q1rw+Gi9eaF4lN3t411QXR19/hmtbQ9MmlnA9FB7J4AMjXIv1HbmNmlS+qbVZArZTfYMzmuURDL7RiZkKm5OSXSi6I9oYyOUrQFpLZxYQzgqaVs1oDhvDpTGmiHfMv6vEyOzsvM46ycnUaQ8pLMzYXmSXkkoiYvJfFLamJiypfE1NTFpXRp6hdwbHDH/DkRfZoRM3f08OEYxjQ95uxZXzpw/1V0CZ9lz+CX8Bn27PcV70c6EZsEp9PwuED92JO2J9dbMSZX7FBBzMA3FScDrjmdedL3Uk7n6+jrnHx1EihrCQXhjSu4CtybUOyOTCIoR4Gd9C8UtNlxZVwuR4batTEMYofKOB4qglRFqkDFI0OLyG5qYQr8PpHhNLi9J9FWvoLXiXpYFInlqVTcfjIHtx3HPYFYDDylwEss8oSfBCgWAS99T7HYE+R+1QwKlhZJmafp75f0uNzvdAtguYA3cmuRto92cylh7XgsJ1ao8dLN+HAsqltRc87YEOK67vpuMZ55pkZvn17NmZEzOdSNbUaLwhtChXDBsAZkGWUbiY1EN6uNFm4P7FYfrHzthcM4ZhXZnFw1RhYB72hFeFyYCCXWli9xdK71X+/XYb9MWxdKXJyw14zAlmgnRIHgrEzXSvdsZyAQHafNDyvVWpkxaDSs1IqAADiiYH9EQADZk8y0CL8dfI4QDOwfEBCe9GkZwo+3oBQ+qmBleu67YnKFP0i/tQHQON4d6zp0jdedNIC440lZpISlVx1/3R6VELOEShP812jib6JigIeZJHQcoOyhLDr9aZHA5KmojJH/xsgZVglVJKgGlvOUrO7A6evsk68w21/hc/itdtYVfvK67/iOYuL3l62ECaEqMUeoIqzTBSIM2KCoU7atk1OK7ap8uG0zkouN/n+92GevzVcmoJ5oX+ixjI0iuds2A/cDBwGcTReYYaQpLvNfdM6t/8vkTpEws3QBnAW2ODrF9UhfFraGtyZsmHhwp1AcIE5FyM4dSBFQR0wrDDWFp+NgZRWMVaQk7trtWNH/HcKorXCbPx2CrVEg6qN7cNNrKBbyI/eABHwfTjT/pNC+pGGrd6J70ErRGEjHMXM9cwwDGaIx5+XaD0cKPew0TouF0AIeKr1K4vFI9F6tGJ5QQxs+foiEoiREHEJRD1jJT44KR+U8hgR4rGnfqLGxbVMX1Pav8DGP509wLDyNfbx7Yh39zTcjnDwKItqovnFurlXjJ/4qyjP155Sqd1N9cTB9kPJc/RmlbLCofvPXtC/MCV9GNxh78mKXoZ+Jrzl/u24QL6DVM4QbohkmpYRrXEG2YH3uOQfPFAlkDeblLVurtKP9Xj8yOHwBllT+kWWbZX3eKCqoxk+88USZtbt3tUNSEr8aeGFT7Km2tzusa71VfUPMxbwg2I9x7SXYHoUaOR6Fy3XpVm0jRyPtKLH1afRPYVFUFxfQ0uRr3uIPQWXeEYlX/CCPhMlVqSPxZm7CE4F9SAnwMKoyNmZMlg4ofy1eAOaCOMvDv0R5Js+AEggkwpFFX6ac6Vvr0SGGmaKfQl1+z7P+21Bg4NoCjYTG6No+Jr3bHcIBkgSGfa6LxOJjNux2f8iAtTb5Pgw5yzCLBwAmZ8oxAASYI8RY2M+nCqmBh0KTg57+HONU64CyAjx7OO+QhEsMog19vOKoQZQg7xhmDNFEV5f4eBkaROMSh6R5bTUAIAJ7zsWmGURFmGYRJavyDXTVZ3gz4jXY+kSJaVZURJpBbAQ1xMO14PvrQWKErm6qvkAIknyExxG+4fuuohC+Tny+0ElbR7hqvpgjBgrhWt46bDBihk+pqg1FjRo2Q2ySe8Lc8WnWNO6OzXzfBDeVXvYoKkfOXdhU8WOBbnmTx+XSNK2fWzUvry5Kt6zNKG8CAoc/L+kmLiSeuqTT223x/94iR113t2tbhO5weXkPx+cHIIycinK94bZ/N8FbW10bnBr1MFHBfE6btrCxZk2pL5RW1NdxffM2lqz1sd2eomiOswLN8Q2SBB3b3Q47X/587qviJX2BDlY5lLFZZmp4dsBrtepaLxPjFbgn6+yDu9lo7PncmkI1Bb5DVitV64tZNSwSu5pVvLuzHKOOUciQ5KDyuRKUY9mvsrHyL5V94hruC27Oq9WvcrjPudVuXnLtruorNic67kF0bA77SWrScxhgX7o2G2/H2I5sTOQQr7nPP6A1z7o6TFr9AjTmHOJE2oYCQ+323iVS1oGi70ZNLwUJplmJpsYvjRqVjb+OOOP/MeRYOz7JmFGdwErElEq7Nbkq8JQkx7RuXLsuLm5xEQh+JUHU/k2rGqYR1pLFX4b/jDrJg0+E1cnij4SfkNUfiU82V1l7dQr5dtpkXH+y07BHOB0o2Rr5d+D0VsnfkbGmn07eHXxV/2OC9Y/AyevnaZ7Bgum0yY3i4gWTheLiGybTpgs8g2m+jLwJOPHMDpC2bUN1T5I73hmSJJRIu2i+c+hbgc+26HH1fkufZWbRSNePoc7JGn0f4DyZPM/b9mZbtrwnzFmikaA+rclv901JW6hte64ZWD4UOoDPExrEvHSgfYZuO4M/H8AVuCaewEidBUr/ADELHXBjaJixTH8ZY3hEGusbO18IfdZYZgAl0RF4+8lNyhh1XhnJIVZyLS9PFivRi471ZK8MRp1JmdzbT7B41j7Cjh9IideJfuHt694XgkSHH1jd3MhhymS60RXPAvTfSsBWYkY+6bjScR78To4JsFtitEL3DtJ96jFVyX8N2muSo9jPYnic9LeKzRHc/X/MMpx8Bvl5i+PU3gJkHfmNsUkE73ArJgGc7x1QHoHwucWixXMIL1rAQ33mSN+/R+9cxdgtbCYYRxcXUXjHFcPjmJkdZI11aCb+SQ2n/pmo2VG7ZnREYwTw0/+E6ylLHAZ4CEKXi4dAMtp//nw/ygEsIR5lJ/hPEFmTnTjbiXfCzxzasls9UNrYIgXdS+jW/xT/4K8/+Lcsay7BzTRzZQzVga82S/r0qVlQkrVfuB6vAvlC+IlDd2DcaKK+0I3OsOnOLRCUNCuVH3EZZRG6D3lKE/ulogU9cQAtRb0BAABtQh4BoLyIHkB5yvf/+46jUgCUc6zycPzyAtSLJH41e1FSXXsALSURHagnqSH86sTPpgwNT/zDAhqq3EDikahEt1EVcqGLiC0Sd3mO+gTtR9tQIQBAMQv5hVJ7ZITYG2SAJisfKqWZoxMAKO+gh1A91H0xMhQViShDdqg/eITmofW35giqDgAAJIi8dSJikctkr4pQRsNG82j+PxfaAkuvnq5PYbi+wyj/g6i6WkFqori8SUWOX+gEtwAC8I+DDBLM4a56nt1OtinpcT8O1w+V7/MOLi5Y+VDEUcNk0ygPCFQNQu80+MdBcdnbdvhqws5/u/hqoaJ5v+kLmG/4Rnk7eXa+I7JK3GffbswPzTh8+0jFbQwVF2DaYDdfKdqer6VeEcOa/JpYTH4z31H32+tidpDmhy4pjsXIeHAcresjQsZJjA9ByvEcuXl92fwbdbEQifuqo3+MiRwL2Q2vjWdkjCZCpKs+5DyLObpFnHYmaK0TProLqtwZNPhj3893ITvllpd1fUTIp8UnMT7WJOV4vnpep97+N+piIebs9WnNf4yJblzIbhDgzxIL7bUuwemqD5nQWRx2jG4RJ0LRenVOeHZrF1S5MwqqP/bkaLOo1JXvW+aRNPr26b551GO0JCuqphumZTuu5yspq6iqqWvI5Jpa2jq6evqGDBsxasx4CFf5y/pCwNmVjQe6E+sRWNfJACtT9k/jWDPYZMgT1wcDbQs3ybiiROQvFh3dHCGPNxC2Av5I2fmtMk42C0UOcg0fBFzVaArwClRWD+M6pqy9Lan1wBaxtoQjgas0CjRun4Uu5jM2D5ntUAFNwLWeTPk5+bLa6kRl82wIIZOkqUqmpXbsYBCmhLlpY7as9WTI6kRNoVpWFL6XDF+ll2QxLOrS7z98pvJvtVswJdDYKusSVsJkd1cXyr1wPTJfAAA=') format('woff2'),\n  url('iconfont.woff?t=1565320061289') format('woff'),\n  url('iconfont.ttf?t=1565320061289') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */\n  url('iconfont.svg?t=1565320061289#iconfont') format('svg'); /* iOS 4.1- */\n}\n\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var IconStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());

/***/ }),

/***/ "./src/baseUI/confirm/index.jsx":
/*!**************************************!*\
  !*** ./src/baseUI/confirm/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/global-style */ "./src/assets/global-style.js");



function _templateObject3() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 1000;\n    background-color: ", ";\n    &.confirm-fade-enter-active{\n    animation: ", " 0.3s;\n    .confirm_content{\n      animation: ", " 0.3s\n    }\n  }\n    >div{\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate3d(-50%, -50%, 0);\n        z-index: 100;\n        .confirm_content{\n            width: 270px;\n            border-radius: 13px;\n            background-color: ", ";\n            .text{\n                padding: 19px 15px;\n                line-height: 22px;\n                text-align: center;\n                font-size: ", ";\n                color: ", ";\n            }\n            .operate{\n                display: flex;\n                align-items: center;\n                text-align: center;\n                font-size: 16px;\n                font-weight: 500;\n                .operate_btn{\n                    flex: 1;\n                    line-height: 22px;\n                    padding: 10px 0;\n                    border-top: 1px solid ", ";\n                    color: #2E3030;\n                    &.left{\n                        border-right: 1px solid ", ";\n                    }\n                }\n            }\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    0%{\n        transform: scale(0);\n    }\n    50%{\n        transform: scale(1.1);\n    }\n    100%{\n        transform: scale(1);\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    0%{\n        opacity: 0;\n    }\n    100%{\n        opacity: 1;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var confirmFadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(_templateObject());
var confirmZoom = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(_templateObject2());
var ConfirmWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3(), assets_global_style__WEBPACK_IMPORTED_MODULE_5__["default"]["background-color-shadow"], confirmFadeIn, confirmZoom, assets_global_style__WEBPACK_IMPORTED_MODULE_5__["default"]["highlight-background-color"], assets_global_style__WEBPACK_IMPORTED_MODULE_5__["default"]["font-size-l"], assets_global_style__WEBPACK_IMPORTED_MODULE_5__["default"]["font-color-desc-v2"], assets_global_style__WEBPACK_IMPORTED_MODULE_5__["default"]["border-color"], assets_global_style__WEBPACK_IMPORTED_MODULE_5__["default"]["border-color"]);
var Confirm = Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function (props, ref) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var text = props.text,
      cancelBtnText = props.cancelBtnText,
      confirmBtnText = props.confirmBtnText;
  var handleConfirm = props.handleConfirm;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, function () {
    return {
      show: function show() {
        setShow(true);
      }
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["CSSTransition"], {
    timeout: 300,
    appear: true,
    "in": show,
    classNames: "confirm-fade"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ConfirmWrapper, {
    style: {
      display: show ? "block" : "none"
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "confirm_content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "text"
  }, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "operate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "operate_btn left",
    onClick: function onClick() {
      return setShow(false);
    }
  }, cancelBtnText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "operate_btn right",
    onClick: function onClick() {
      setShow(false);
      handleConfirm();
    }
  }, confirmBtnText))))));
});
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Confirm));

/***/ }),

/***/ "./src/baseUI/loading-v2/index.js":
/*!****************************************!*\
  !*** ./src/baseUI/loading-v2/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/global-style */ "./src/assets/global-style.js");


function _templateObject2() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: .1rem;\n  width: 100%;\n  margin : auto;\n  text-align: center;\n  font-size : .1rem;\n  >div{\n    display : inline-block;\n    background-color : ", ";\n    height: 100%;\n    width: .01rem;\n    margin-right : .02rem;\n    animation : ", " 1s infinite\n  }\n  >div:nth-child(2){\n    animation-delay : -.4s;\n  }\n  >div:nth-child(3){\n    animation-delay : -.6s;\n  }\n  >div:nth-child(4){\n    animation-delay : -.4s;\n  }\n  >div:nth-child(5){\n    animation-delay : -.2s;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n 0%, 40%, 100% {\n   transform : scaleY(0.4);\n   transform-origin : center bottom;\n }\n 20%{\n   transform : scaleY(1.0)\n }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // 动画加载效果

var dance = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject()); // 动画的盒子

var Loading = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), assets_global_style__WEBPACK_IMPORTED_MODULE_3__["default"]["theme-color"], dance);

function LoadingV2() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Loading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u62FC\u547D\u52A0\u8F7D\u4E2D..."));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(LoadingV2));

/***/ }),

/***/ "./src/baseUI/loading/index.jsx":
/*!**************************************!*\
  !*** ./src/baseUI/loading/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/global-style */ "./src/assets/global-style.js");


function _templateObject2() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  >div {\n    position : absolute;\n    top: 0; bottom : 0; left : 0; right : 0;\n    margin 0 auto;\n    width: .6rem;\n    height: .6rem;\n    opacity : 0.6;\n    border-radius : 50%;\n    background-color: ", ";\n    animation : ", " 1.4s infinite ease-in;\n    z-index: 10\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n 0%, 100% {\n   transform : scale(0);\n }\n 50%{\n   transform : scale(1.0)\n }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // 动画加载效果

var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject()); // 动画的盒子

var LoadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), assets_global_style__WEBPACK_IMPORTED_MODULE_3__["default"]["theme-color"], loading);

function Loading() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoadingWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Loading));

/***/ }),

/***/ "./src/baseUI/progress-bar/index.jsx":
/*!*******************************************!*\
  !*** ./src/baseUI/progress-bar/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/global-style */ "./src/assets/global-style.js");




function _templateObject() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    height: 30px;\n    .bar-inner{\n        position: relative;\n        top: 13px;\n        height: 4px;\n        background-color: rgba(0, 0, 0, 0.3);\n        .progress{\n           position: absolute;\n           height: 100%;\n            background: ", ";\n        }\n        .progress-btn-wrapper{\n            position: absolute;\n            left: -8px;\n            top: -13px;\n            width: 30px;\n            height: 30px;\n            .progress-btn{\n                position: relative;\n                top: 7px;\n                left: 7px;\n                box-sizing: border-box;\n                width: 16px;\n                height: 16px;\n                border: 3px solid ", ";\n                border-radius: 50%;\n                background: ", ";\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var ProgressBarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject(), assets_global_style__WEBPACK_IMPORTED_MODULE_5__["default"]["theme-color"], assets_global_style__WEBPACK_IMPORTED_MODULE_5__["default"]["border-color"], assets_global_style__WEBPACK_IMPORTED_MODULE_5__["default"]["theme-color"]);

function ProgressBar(props) {
  var percent = props.percent,
      onProgressChange = props.onProgressChange;
  var progressBar = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var progress = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var progressBtn = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var progressBtnWidth = 16;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState2 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      touch = _useState2[0],
      setTouch = _useState2[1]; // 监听percent的变化


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // 进度条大于等于0 或者小于等于1同时触摸的未开启的时候
    if (percent >= 0 && percent <= 1 && !touch.initiated) {
      // 真个bar的宽度
      var barWidth = progressBar.current.clientWidth; // 偏移的宽度

      var offsetWidth = percent * barWidth;
      progress.current.style.width = "".concat(offsetWidth, "px"); // 设置bar的按钮的位置

      progressBtn.current.style.transform = "translate3d(".concat(offsetWidth, "px, 0, 0)");
    }
  }, [percent]);

  var _offset = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (offsetWidth) {
    progress.current.style.width = "".concat(offsetWidth, "px");
    progressBtn.current.style.transform = "translate3d(".concat(offsetWidth, "px, 0, 0)");
  });

  var _changePercent = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    var barWidth = progressBar.current.clientWidth;
    var curPercent = progress.current.clientWidth / barWidth;
    onProgressChange(curPercent);
  }); // 进度条点击的事件


  var progressClick = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e) {
    var rect = progressBar.current.getBoundingClientRect(); // 计算出便宜的宽度

    var offsetWidth = e.pageX - rect.left; // 设置进度条

    _offset(offsetWidth); // 改变进度


    _changePercent();
  }); // 进度条触摸开始

  var progressTouchStart = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e) {
    var startTouch = {};
    startTouch.initiated = true;
    startTouch.startX = e.touches[0].pageX;
    startTouch.left = progress.current.clientWidth;
    setTouch(startTouch);
  }); // 进度条触摸移动开始

  var progressTouchMove = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e) {
    // 如果触摸没有开始直接结束移动
    if (!touch.initiated) {
      return;
    } // 计算移动的x的位置


    var detailX = e.touches[0].pageX - touch.startX; // 计算当前进度条真实的宽度

    var barWidth = progressBar.current.clientWidth - progressBtnWidth; // 计算进度条的偏移量
    // 取最小值，进行边界计算

    var offsetWidth = Math.min(Math.max(0, detailX + touch.left), barWidth);

    _offset(offsetWidth);
  }); // 进度条触摸结束

  var progressTouchEnd = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e) {
    // 设置标识阀为false
    touch.initiated = false;
    setTouch(Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, touch));

    _changePercent();
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ProgressBarWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "bar-inner",
    ref: progressBar,
    onClick: progressClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "progress",
    ref: progress
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "progress-btn-wrapper",
    onTouchStart: progressTouchStart,
    onTouchMove: progressTouchMove,
    onTouchEnd: progressTouchEnd,
    ref: progressBtn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "progress-btn"
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(ProgressBar));

/***/ }),

/***/ "./src/baseUI/progress-circle/index.js":
/*!*********************************************!*\
  !*** ./src/baseUI/progress-circle/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/global-style */ "./src/assets/global-style.js");


function _templateObject() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position : relative;\n  circle {\n    stroke-width: 8px;\n    transform-origin: center;\n    &.progress-background{\n      transform: scale(0.9);\n      stroke: ", ";\n    }\n    &.progress-bar{\n      transform: scale(0.9) rotate(-90deg);\n      stroke: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var CircleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), assets_global_style__WEBPACK_IMPORTED_MODULE_3__["default"]["theme-color-shadow"], assets_global_style__WEBPACK_IMPORTED_MODULE_3__["default"]["theme-color"]);

function ProgressCircle(props) {
  var radius = props.radius,
      percent = props.percent; // 背景圆的包裹首先我们需要知道圆的周长 单位为人所以乘1

  var dashArray = Math.PI * 100; // 通过传入的百分比去计算高亮部分和未高亮部分

  var dashOffset = (1 - percent) * dashArray;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CircleWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: radius,
    height: radius,
    viewBox: "0 0 100 100",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    className: "progress-background",
    r: "50",
    cx: "50",
    cy: "50",
    fill: "transparent"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    className: "progress-bar",
    r: "50",
    cx: "50",
    cy: "50",
    fill: "transparent",
    strokeDasharray: dashArray,
    strokeDashoffset: dashOffset
  })), props.children));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ProgressCircle));

/***/ }),

/***/ "./src/baseUI/scroll/index.js":
/*!************************************!*\
  !*** ./src/baseUI/scroll/index.js ***!
  \************************************/
/*! exports provided: PullDownLoading, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PullDownLoading", function() { return PullDownLoading; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var better_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! better-scroll */ "./node_modules/better-scroll/dist/bscroll.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var utils___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/ */ "./src/utils/index.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loading */ "./src/baseUI/loading/index.jsx");
/* harmony import */ var _loading_v2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loading-v2 */ "./src/baseUI/loading-v2/index.js");



function _templateObject3() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  position: absolute;\n  left:0; right:0;\n  top: 0px;\n  height: .3rem;\n  margin: auto;\n  z-index: 100;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  position: absolute;\n  left:0; right:0;\n  bottom: .05rem;\n  width: .6rem;\n  height: .6rem;\n  margin: auto;\n  z-index: 100;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    width: 100%;\n    height: 100%;\n    overflow : auto\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var ScrollContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var PullUpLoading = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());
var PullDownLoading = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3());
var Scroll = Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function (props, ref) {
  /* 可以通过dispatch派发BScroll的对象 然后通过useState拿到这个BScroll对象 */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState2 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      bScroll = _useState2[0],
      setBScroll = _useState2[1];

  var direction = props.direction,
      click = props.click,
      refresh = props.refresh,
      pullUpLoading = props.pullUpLoading,
      pullDownLoading = props.pullDownLoading,
      bounceTop = props.bounceTop,
      bounceBottom = props.bounceBottom;
  var pullUp = props.pullUp,
      pullDown = props.pullDown,
      onScroll = props.onScroll;
  var pullUpDebounce = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(utils___WEBPACK_IMPORTED_MODULE_5__["debounce"])(pullUp, 500);
  }, [pullUp]);
  var pullDownDebounce = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(utils___WEBPACK_IMPORTED_MODULE_5__["debounce"])(pullDown, 500);
  }, [pullDown]);
  var scrollContaninerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var scroll = new better_scroll__WEBPACK_IMPORTED_MODULE_3__["default"](scrollContaninerRef.current, {
      scrollX: direction === "horizental",
      scrollY: direction === "vertical",
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    });
    setBScroll(scroll);
    return function () {
      setBScroll(null);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!bScroll || !onScroll) return;
    bScroll.on('scroll', onScroll);
    return function () {
      bScroll.off('scroll', onScroll);
    };
  }, [onScroll, bScroll]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!bScroll || !pullUp) return;

    var handlePullUp = function handlePullUp() {
      //判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUpDebounce();
      }
    };

    bScroll.on('scrollEnd', handlePullUp);
    return function () {
      bScroll.off('scrollEnd', handlePullUp);
    };
  }, [pullUp, pullUpDebounce, bScroll]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!bScroll || !pullDown) return;

    var handlePullDown = function handlePullDown(pos) {
      //判断用户的下拉动作
      if (pos.y > 50) {
        pullDownDebounce();
      }
    };

    bScroll.on('touchEnd', handlePullDown);
    return function () {
      bScroll.off('touchEnd', handlePullDown);
    };
  }, [pullDown, pullDownDebounce, bScroll]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, function () {
    return {
      refresh: function refresh() {
        if (bScroll) {
          bScroll.refresh();
          bScroll.scrollTo(0, 0);
        }
      },
      getBScroll: function getBScroll() {
        if (bScroll) {
          return bScroll;
        }
      }
    };
  });
  var PullUpDisplayStyle = pullUpLoading ? {
    display: ""
  } : {
    display: "none"
  };
  var PullDownDisplayStyle = pullDownLoading ? {
    display: ""
  } : {
    display: "none"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ScrollContainer, {
    ref: scrollContaninerRef
  }, props.children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PullUpLoading, {
    style: PullUpDisplayStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_loading__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PullDownLoading, {
    style: PullDownDisplayStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_loading_v2__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
});
Scroll.defaultProps = {
  direction: "vertical",
  click: true,
  refresh: true,
  onScroll: null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: null,
  pullDown: null,
  bounceTop: true,
  bounceBottom: true
};
/* harmony default export */ __webpack_exports__["default"] = (Scroll);

/***/ }),

/***/ "./src/baseUI/toast/index.jsx":
/*!************************************!*\
  !*** ./src/baseUI/toast/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/global-style */ "./src/assets/global-style.js");



function _templateObject() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    height: 50px;\n    z-index: 1000;\n    &.drop.enter{\n        opacity: 0;\n        transform: translate3d(0, 100%, 0);\n    }\n    &.drop-enter-active{\n        opacity: 1;\n        transition: all 0.3s;\n        transform: translate3d(0, 0, 0);\n    }\n    &.drop-exit-active{\n        opacity: 0;\n        transition: all 0.3s;\n        transform: translate3d(0, 100%, 0);\n    }\n    .text{\n        text-align: center;\n        line-height: 50px;\n        color: #fff;\n        font-size: ", "\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ToastWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject(), assets_global_style__WEBPACK_IMPORTED_MODULE_5__["default"]["font-size-l"]);
/**
 * Toast弹窗
 * @param {*} props 
 */

var Toast = Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function (props, ref) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState4 = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      timer = _useState4[0],
      setTimer = _useState4[1];

  var text = props.text;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, function () {
    return {
      show: function show() {
        if (timer) {
          clearTimeout(timer);
        }

        setShow(true);
        setTimer(setTimeout(function () {
          setShow(false);
        }, 3000));
      }
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["CSSTransition"], {
    "in": show,
    timeout: 300,
    classNames: "drop",
    unmountOnExit: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ToastWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "text"
  }, text)));
});
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Toast));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.jsx");
/* harmony import */ var fastclick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fastclick */ "./node_modules/fastclick/lib/fastclick.js");
/* harmony import */ var fastclick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fastclick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_common_reset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/common/reset */ "./src/assets/common/reset.css");
/* harmony import */ var assets_common_reset__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_common_reset__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_common_border__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/common/border */ "./src/assets/common/border.css");
/* harmony import */ var assets_common_border__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_common_border__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_autoflex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/autoflex */ "./src/utils/autoflex.js");
/* harmony import */ var utils_autoflex__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(utils_autoflex__WEBPACK_IMPORTED_MODULE_6__);







fastclick__WEBPACK_IMPORTED_MODULE_3___default.a.attach(document.body);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById("root"));

/***/ }),

/***/ "./src/layouts/BlankLayout.jsx":
/*!*************************************!*\
  !*** ./src/layouts/BlankLayout.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/esm/react-router-config.js");



var Layout = function Layout(_ref) {
  var route = _ref.route;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__["renderRoutes"])(route.routes));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/layouts/HomeLayout.jsx":
/*!************************************!*\
  !*** ./src/layouts/HomeLayout.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/esm/react-router-config.js");
/* harmony import */ var _HomeLayout_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeLayout.style */ "./src/layouts/HomeLayout.style.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var application_Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! application/Player */ "./src/application/Player/index.jsx");





function HomeLayout(props) {
  var route = props.route;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomeLayout_style__WEBPACK_IMPORTED_MODULE_2__["Top"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "iconfont menu",
    onClick: function onClick() {
      return alert("该功能正在研发之中，敬请等待");
    }
  }, "\uE65C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "title"
  }, "\u4E91\u97F3\u4E50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "iconfont search",
    onClick: function onClick() {
      return props.history.push("/search");
    }
  }, "\uE62B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomeLayout_style__WEBPACK_IMPORTED_MODULE_2__["Tab"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    to: "/recommend",
    activeClassName: "selected"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomeLayout_style__WEBPACK_IMPORTED_MODULE_2__["TabItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u63A8\u8350"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    to: "/singers",
    activeClassName: "selected"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomeLayout_style__WEBPACK_IMPORTED_MODULE_2__["TabItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u6B4C\u624B"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    to: "/rank",
    activeClassName: "selected"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomeLayout_style__WEBPACK_IMPORTED_MODULE_2__["TabItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u6392\u884C\u699C"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    to: "/mv",
    activeClassName: "selected"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomeLayout_style__WEBPACK_IMPORTED_MODULE_2__["TabItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "MV")))), Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__["renderRoutes"])(route.routes), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(application_Player__WEBPACK_IMPORTED_MODULE_4__["default"], null));
}

/***/ }),

/***/ "./src/layouts/HomeLayout.style.js":
/*!*****************************************!*\
  !*** ./src/layouts/HomeLayout.style.js ***!
  \*****************************************/
/*! exports provided: Top, Tab, TabItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Top", function() { return Top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabItem", function() { return TabItem; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_global_style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/global-style.js */ "./src/assets/global-style.js");


function _templateObject3() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: .45rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  background: ", ";\n  z-index: 10;\n  box-shadow: 0 -1px #d44439, 0 1px #d44439;\n  a {\n    flex: 1;\n    font-size: .14rem;\n    color: #e4e4e4;\n    &.selected {\n      span {\n        padding: .03rem 0;\n        font-weight: 700;\n        color: #f1f1f1;\n        border-bottom: .02rem solid #f1f1f1;\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display : flex;\n  justify-content: space-between;\n  align-items : center;\n  flex-direction: row;\n  padding: .05rem .1rem;\n  z-index : 2;\n  background: ", ";\n  & > span{\n    line-height : .4rem;\n    color : #f1f1f1;\n    font-size : .2rem;\n    &.iconfont {\n      font-size : .25rem\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Top = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), assets_global_style_js__WEBPACK_IMPORTED_MODULE_2__["default"]["theme-color"]);
var Tab = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2(), assets_global_style_js__WEBPACK_IMPORTED_MODULE_2__["default"]["theme-color"]);
var TabItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var layouts_HomeLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! layouts/HomeLayout */ "./src/layouts/HomeLayout.jsx");
/* harmony import */ var layouts_BlankLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! layouts/BlankLayout */ "./src/layouts/BlankLayout.jsx");





var SuspenseComponent = function SuspenseComponent(Component) {
  return function (props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
      fallback: null
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props));
  };
};

var RecommendComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! application/Recommend */ "./src/application/Recommend/index.jsx"));
});
var SingersComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! application/Singers */ "./src/application/Singers/index.jsx"));
});
var RankComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! application/Rank */ "./src/application/Rank/index.jsx"));
});
var AlbumComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! application/Album */ "./src/application/Album/index.jsx"));
});
var SingerComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! application/Singer */ "./src/application/Singer/index.jsx"));
});
var SearchComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! application/Search */ "./src/application/Search/index.jsx"));
});
var MVComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! application/MV */ "./src/application/MV/index.jsx"));
});
var MvDetailComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! application/MvDetail */ "./src/application/MvDetail/index.jsx"));
}); // 导入路由

/* harmony default export */ __webpack_exports__["default"] = ([{
  component: layouts_BlankLayout__WEBPACK_IMPORTED_MODULE_3__["default"],
  routes: [{
    path: "/",
    component: layouts_HomeLayout__WEBPACK_IMPORTED_MODULE_2__["default"],
    routes: [{
      path: "/",
      exact: true,
      render: function render() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
          to: "/recommend"
        });
      }
    }, {
      path: '/recommend',
      component: SuspenseComponent(RecommendComponent),
      routes: [{
        path: "/recommend/:id",
        exact: true,
        component: SuspenseComponent(AlbumComponent)
      }]
    }, {
      path: "/singers",
      component: SuspenseComponent(SingersComponent),
      routes: [{
        path: "/singers/:id",
        exact: true,
        component: SuspenseComponent(SingerComponent)
      }]
    }, {
      path: "/rank",
      component: SuspenseComponent(RankComponent),
      routes: [{
        path: "/rank/:id",
        exact: true,
        component: SuspenseComponent(AlbumComponent)
      }]
    }, {
      path: "/mv",
      component: SuspenseComponent(MVComponent),
      routes: [{
        path: "/mv/:id",
        exact: true,
        component: SuspenseComponent(MvDetailComponent)
      }]
    }, {
      path: "/search",
      exact: true,
      component: SuspenseComponent(SearchComponent)
    }]
  }]
}]);

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/store/reducer.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");


 // 加入redux的调试工具的代码

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_1__["default"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"])));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/store/reducer.js":
/*!******************************!*\
  !*** ./src/store/reducer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "./node_modules/redux-immutable/dist/index.js");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var application_Recommend_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! application/Recommend/store */ "./src/application/Recommend/store/index.js");
/* harmony import */ var application_Singers_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! application/Singers/store */ "./src/application/Singers/store/index.js");
/* harmony import */ var application_Rank_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! application/Rank/store */ "./src/application/Rank/store/index.js");
/* harmony import */ var application_Album_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! application/Album/store */ "./src/application/Album/store/index.js");
/* harmony import */ var application_Singer_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! application/Singer/store */ "./src/application/Singer/store/index.js");
/* harmony import */ var application_Player_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! application/Player/store */ "./src/application/Player/store/index.js");
/* harmony import */ var application_Search_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! application/Search/store */ "./src/application/Search/store/index.js");
/* harmony import */ var application_MV_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! application/MV/store */ "./src/application/MV/store/index.js");
/* harmony import */ var application_MvDetail_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! application/MvDetail/store */ "./src/application/MvDetail/store/index.js");










/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  recommend: application_Recommend_store__WEBPACK_IMPORTED_MODULE_1__["reducer"],
  singers: application_Singers_store__WEBPACK_IMPORTED_MODULE_2__["reducer"],
  rank: application_Rank_store__WEBPACK_IMPORTED_MODULE_3__["reducer"],
  album: application_Album_store__WEBPACK_IMPORTED_MODULE_4__["reducer"],
  singerInfo: application_Singer_store__WEBPACK_IMPORTED_MODULE_5__["reducer"],
  player: application_Player_store__WEBPACK_IMPORTED_MODULE_6__["reducer"],
  search: application_Search_store__WEBPACK_IMPORTED_MODULE_7__["reducer"],
  mv: application_MV_store__WEBPACK_IMPORTED_MODULE_8__["reducer"],
  mvDetail: application_MvDetail_store__WEBPACK_IMPORTED_MODULE_9__["reducer"]
}));

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony import */ var _home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");


function _templateObject() {
  var data = Object(_home_xxy_project_cloud_music_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nhtml, body, div, span, applet, object, iframe,\n\th1, h2, h3, h4, h5, h6, p, blockquote, pre,\n\ta, abbr, acronym, address, big, cite, code,\n\tdel, dfn, em, img, ins, kbd, q, s, samp,\n\tsmall, strike, strong, sub, sup, tt, var,\n\tb, u, i, center,\n\tdl, dt, dd, ol, ul, li,\n\tfieldset, form, label, legend,\n\ttable, caption, tbody, tfoot, thead, tr, th, td,\n\tarticle, aside, canvas, details, embed, \n\tfigure, figcaption, footer, header, hgroup, \n\tmenu, nav, output, ruby, section, summary,\n\ttime, mark, audio, video {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tborder: 0;\n\t\tvertical-align: baseline;\n\t}\n\t/* HTML5 display-role reset for older browsers */\n\tarticle, aside, details, figcaption, figure, \n\tfooter, header, hgroup, menu, nav, section {\n\t\tdisplay: block;\n\t}\n\tbody {\n\t\tline-height: 1;\n\t}\n\thtml, body{\n\t\tbackground: #f2f3f4;;\n\t}\n\tol, ul {\n\t\tlist-style: none;\n\t}\n\tblockquote, q {\n\t\tquotes: none;\n\t}\n\tblockquote:before, blockquote:after,\n\tq:before, q:after {\n\t\tcontent: '';\n\t\tcontent: none;\n\t}\n\ttable {\n\t\tborder-collapse: collapse;\n\t\tborder-spacing: 0;\n\t}\n\ta{\n\t\ttext-decoration: none;\n\t\tcolor: #fff;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _require = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"),
    createGlobalStyle = _require.createGlobalStyle;

var GlobalStyle = createGlobalStyle(_templateObject());

/***/ }),

/***/ "./src/utils/autoflex.js":
/*!*******************************!*\
  !*** ./src/utils/autoflex.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function flexible(window, document) {
  var docEl = document.documentElement;
  var dpr = window.devicePixelRatio || 1; // adjust body font size

  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + 'px';
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize);
    }
  }

  setBodyFontSize(); // set 1rem = viewWidth / 10

  function setRemUnit() {
    var rem = docEl.clientWidth / 3.75;
    docEl.style.fontSize = rem + 'px';
  }

  setRemUnit(); // reset rem unit on page resize

  window.addEventListener('resize', setRemUnit);
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  }); // detect 0.5px supports

  if (dpr >= 2) {
    var fakeBody = document.createElement('body');
    var testElement = document.createElement('div');
    testElement.style.border = '.5px solid transparent';
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);

    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines');
    }

    docEl.removeChild(fakeBody);
  }
})(window, document);

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: debounce, getName, filterIndex, filterIdx, prefixStyle, isEmptyObject, formatPlayTime, getTransitionEndName, shuffle, findIndex, getSongUrl, trimPhone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getName", function() { return getName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterIndex", function() { return filterIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterIdx", function() { return filterIdx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixStyle", function() { return prefixStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyObject", function() { return isEmptyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPlayTime", function() { return formatPlayTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransitionEndName", function() { return getTransitionEndName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSongUrl", function() { return getSongUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimPhone", function() { return trimPhone; });
/* harmony import */ var api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/config */ "./src/api/config.js");
 //防抖函数

var debounce = function debounce(func, delay) {
  var timer;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      func.apply(_this, args);
      clearTimeout(timer);
    }, delay);
  };
};

 //处理歌手列表拼接歌手名字

var getName = function getName(list) {
  var str = "";
  list.map(function (item, index) {
    str += index === 0 ? item.name : "/" + item.name;
    return item;
  });
  return str;
}; //处理数据，找出第一个没有歌名的排行榜的索引

var filterIndex = function filterIndex(rankList) {
  // 首先遍历数据
  for (var i = 0; i < rankList.length - 1; i++) {
    // 然后判断当前的tracks数据里面是否存在歌名和判断这个帮航数据下面一个数据的tracks是否存在数据 如果下一下不存在track是我们直接返回下一个的下标
    if (rankList[i].tracks.length && !rankList[i + 1].tracks.length) {
      return i + 1;
    }
  }
}; //找出排行榜的编号

var filterIdx = function filterIdx(name) {
  for (var key in api_config__WEBPACK_IMPORTED_MODULE_0__["RankTypes"]) {
    if (api_config__WEBPACK_IMPORTED_MODULE_0__["RankTypes"][key] === name) return key;
  }

  return null;
}; // 给css3相关属性增加浏览器前缀，处理浏览器兼容性问题

var elementStyle = document.createElement("div").style;

var vendor = function () {
  //首先通过transition属性判断是何种浏览器
  var transformNames = {
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransfrom",
    ms: "msTransform",
    standard: "Transform"
  };

  for (var key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }

  return false;
}();

function prefixStyle(style) {
  if (vendor === false) {
    return false;
  }

  if (vendor === "standard") {
    return style;
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
} //判断一个对象是否为空对象

var isEmptyObject = function isEmptyObject(obj) {
  return !obj || Object.keys(obj).length === 0;
}; //转换歌曲播放时间

var formatPlayTime = function formatPlayTime(interval) {
  interval = interval | 0;
  var minute = interval / 60 | 0;
  var second = (interval % 60).toString().padStart(2, "0");
  return "".concat(minute, ":").concat(second);
};
var getTransitionEndName = function getTransitionEndName(dom) {
  var cssTransition = ["transition", "webkitTransition"];
  var transitionEnd = {
    transition: "transitionend",
    webkitTransition: "webkitTransitionEnd"
  };

  for (var i = 0; i < cssTransition.length; i++) {
    if (dom.style[cssTransition[i]] !== undefined) {
      return transitionEnd[cssTransition[i]];
    }
  }

  return undefined;
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
} // 随机算法


function shuffle(arr) {
  var new_arr = [];
  arr.forEach(function (item) {
    new_arr.push(item);
  });

  for (var i = 0; i < new_arr.length; i++) {
    var j = getRandomInt(0, i);
    var t = new_arr[i];
    new_arr[i] = new_arr[j];
    new_arr[j] = t;
  }

  return new_arr;
} // 找到当前的歌曲索引

var findIndex = function findIndex(song, list) {
  return list.findIndex(function (item) {
    return song.id === item.id;
  });
}; //拼接出歌曲的url链接

var getSongUrl = function getSongUrl(id) {
  return "https://music.163.com/song/media/outer/url?id=".concat(id, ".mp3");
}; //除去手机号码的空格符号

var trimPhone = function trimPhone(val) {
  return val.replace(/(^\s+)|(\s+$)|\s+/g, "");
};

/***/ })

/******/ });
//# sourceMappingURL=index-cf0f11e821a7dffe25d6.js.map