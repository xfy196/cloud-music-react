(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{261:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.forceVisible=e.forceCheck=e.lazyload=void 0;var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=n(0),r=d(o),s=d(n(2)),a=n(262),l=d(n(263)),u=d(n(264)),c=d(n(265));function d(t){return t&&t.__esModule?t:{default:t}}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var v=0,g=0,y=0,m=0,S="data-lazyload-listened",b=[],w=[],T=!1;try{var k=Object.defineProperty({},"passive",{get:function(){T=!0}});window.addEventListener("test",null,k)}catch(t){}var E=!!T&&{capture:!1,passive:!0},C=function(t){var e=t.ref;if(e instanceof HTMLElement){var n=(0,l.default)(e);(t.props.overflow&&n!==e.ownerDocument&&n!==document&&n!==document.documentElement?function(t,e){var n=t.ref,i=void 0,o=void 0,r=void 0,s=void 0;try{var a=e.getBoundingClientRect();i=a.top,o=a.left,r=a.height,s=a.width}catch(t){i=v,o=g,r=m,s=y}var l=window.innerHeight||document.documentElement.clientHeight,u=window.innerWidth||document.documentElement.clientWidth,c=Math.max(i,0),d=Math.max(o,0),p=Math.min(l,i+r)-c,h=Math.min(u,o+s)-d,f=void 0,S=void 0,b=void 0,w=void 0;try{var T=n.getBoundingClientRect();f=T.top,S=T.left,b=T.height,w=T.width}catch(t){f=v,S=g,b=m,w=y}var k=f-c,E=S-d,C=Array.isArray(t.props.offset)?t.props.offset:[t.props.offset,t.props.offset];return k-C[0]<=p&&k+b+C[1]>=0&&E-C[0]<=h&&E+w+C[1]>=0}(t,n):function(t){var e=t.ref;if(!(e.offsetWidth||e.offsetHeight||e.getClientRects().length))return!1;var n=void 0,i=void 0;try{var o=e.getBoundingClientRect();n=o.top,i=o.height}catch(t){n=v,i=m}var r=window.innerHeight||document.documentElement.clientHeight,s=Array.isArray(t.props.offset)?t.props.offset:[t.props.offset,t.props.offset];return n-s[0]<=r&&n+i+s[1]>=0}(t))?t.visible||(t.props.once&&w.push(t),t.visible=!0,t.forceUpdate()):t.props.once&&t.visible||(t.visible=!1,t.props.unmountIfInvisible&&t.forceUpdate())}},O=function(){w.forEach((function(t){var e=b.indexOf(t);-1!==e&&b.splice(e,1)})),w=[]},x=function(){for(var t=0;t<b.length;++t){var e=b[t];C(e)}O()},M=void 0,D=null,_=function(t){function e(t){p(this,e);var n=h(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return f(e,t),i(e,[{key:"componentDidMount",value:function(){var t=window,e=this.props.scrollContainer;e&&"string"==typeof e&&(t=t.document.querySelector(e));var n=void 0!==this.props.debounce&&"throttle"===M||"debounce"===M&&void 0===this.props.debounce;if(n&&((0,a.off)(t,"scroll",D,E),(0,a.off)(window,"resize",D,E),D=null),D||(void 0!==this.props.debounce?(D=(0,u.default)(x,"number"==typeof this.props.debounce?this.props.debounce:300),M="debounce"):void 0!==this.props.throttle?(D=(0,c.default)(x,"number"==typeof this.props.throttle?this.props.throttle:300),M="throttle"):D=x),this.props.overflow){var i=(0,l.default)(this.ref);if(i&&"function"==typeof i.getAttribute){var o=+i.getAttribute(S)+1;1===o&&i.addEventListener("scroll",D,E),i.setAttribute(S,o)}}else if(0===b.length||n){var r=this.props,s=r.scroll,d=r.resize;s&&(0,a.on)(t,"scroll",D,E),d&&(0,a.on)(window,"resize",D,E)}b.push(this),C(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var t=(0,l.default)(this.ref);if(t&&"function"==typeof t.getAttribute){var e=+t.getAttribute(S)-1;0===e?(t.removeEventListener("scroll",D,E),t.removeAttribute(S)):t.setAttribute(S,e)}}var n=b.indexOf(this);-1!==n&&b.splice(n,1),0===b.length&&"undefined"!=typeof window&&((0,a.off)(window,"resize",D,E),(0,a.off)(window,"scroll",D,E))}},{key:"setRef",value:function(t){t&&(this.ref=t)}},{key:"render",value:function(){var t=this.props,e=t.height,n=t.children,i=t.placeholder,o=t.classNamePrefix;return r.default.createElement("div",{className:o+"-wrapper",ref:this.setRef},this.visible?n:i||r.default.createElement("div",{style:{height:e},className:o+"-placeholder"}))}}]),e}(o.Component);_.propTypes={classNamePrefix:s.default.string,once:s.default.bool,height:s.default.oneOfType([s.default.number,s.default.string]),offset:s.default.oneOfType([s.default.number,s.default.arrayOf(s.default.number)]),overflow:s.default.bool,resize:s.default.bool,scroll:s.default.bool,children:s.default.node,throttle:s.default.oneOfType([s.default.number,s.default.bool]),debounce:s.default.oneOfType([s.default.number,s.default.bool]),placeholder:s.default.node,scrollContainer:s.default.oneOfType([s.default.string,s.default.object]),unmountIfInvisible:s.default.bool},_.defaultProps={classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var j=function(t){return t.displayName||t.name||"Component"};e.lazyload=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(e){return function(n){function o(){p(this,o);var t=h(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return t.displayName="LazyLoad"+j(e),t}return f(o,n),i(o,[{key:"render",value:function(){return r.default.createElement(_,t,r.default.createElement(e,this.props))}}]),o}(o.Component)}},e.default=_,e.forceCheck=x,e.forceVisible=function(){for(var t=0;t<b.length;++t){var e=b[t];e.visible=!0,e.forceUpdate()}O()}},262:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.on=function(t,e,n,i){i=i||!1,t.addEventListener?t.addEventListener(e,n,i):t.attachEvent&&t.attachEvent("on"+e,(function(e){n.call(t,e||window.event)}))},e.off=function(t,e,n,i){i=i||!1,t.removeEventListener?t.removeEventListener(e,n,i):t.detachEvent&&t.detachEvent("on"+e,n)}},263:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(!(t instanceof HTMLElement))return document.documentElement;for(var e="absolute"===t.style.position,n=/(scroll|auto)/,i=t;i;){if(!i.parentNode)return t.ownerDocument||document.documentElement;var o=window.getComputedStyle(i),r=o.position,s=o.overflow,a=o["overflow-x"],l=o["overflow-y"];if("static"===r&&e)i=i.parentNode;else{if(n.test(s)&&n.test(a)&&n.test(l))return i;i=i.parentNode}}return t.ownerDocument||t.documentElement||document.documentElement}},264:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){var i=void 0,o=void 0,r=void 0,s=void 0,a=void 0,l=function l(){var u=+new Date-s;u<e&&u>=0?i=setTimeout(l,e-u):(i=null,n||(a=t.apply(r,o),i||(r=null,o=null)))};return function(){r=this,o=arguments,s=+new Date;var u=n&&!i;return i||(i=setTimeout(l,e)),u&&(a=t.apply(r,o),r=null,o=null),a}}},265:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){var i,o;return e||(e=250),function(){var r=n||this,s=+new Date,a=arguments;i&&s<i+e?(clearTimeout(o),o=setTimeout((function(){i=s,t.apply(r,a)}),e)):(i=s,t.apply(r,a))}}},271:function(t,e,n){"use strict";n(95),n(272)},272:function(t,e,n){},273:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=p(n(21)),o=p(n(30)),r=p(n(25)),s=p(n(26)),a=p(n(20)),l=p(n(27)),u=p(n(35)),c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),d=p(n(286));function p(t){return t&&t.__esModule?t:{default:t}}var h=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&(n[i[o]]=t[i[o]])}return n},f=function(t){function e(t){(0,r.default)(this,e);var n=(0,a.default)(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.onChange=function(t){n.setState({selectedIndex:t},(function(){n.props.afterChange&&n.props.afterChange(t)}))},n.state={selectedIndex:n.props.selectedIndex},n}return(0,l.default)(e,t),(0,s.default)(e,[{key:"render",value:function(){var t=this.props,e=t.infinite,n=t.selectedIndex,r=t.beforeChange,s=(t.afterChange,t.dots),a=h(t,["infinite","selectedIndex","beforeChange","afterChange","dots"]),l=a.prefixCls,p=a.dotActiveStyle,f=a.dotStyle,v=a.className,g=a.vertical,y=(0,o.default)({},a,{wrapAround:e,slideIndex:n,beforeSlide:r}),m=[];s&&(m=[{component:function(t){for(var e=t.slideCount,n=t.slidesToScroll,o=t.currentSlide,r=[],s=0;s<e;s+=n)r.push(s);var a=r.map((function(t){var e=(0,u.default)(l+"-wrap-dot",(0,i.default)({},l+"-wrap-dot-active",t===o)),n=t===o?p:f;return c.createElement("div",{className:e,key:t},c.createElement("span",{style:n}))}));return c.createElement("div",{className:l+"-wrap"},a)},position:"BottomCenter"}]);var S=(0,u.default)(l,v,(0,i.default)({},l+"-vertical",g));return c.createElement(d.default,(0,o.default)({},y,{className:S,decorators:m,afterSlide:this.onChange}))}}]),e}(c.Component);e.default=f,f.defaultProps={prefixCls:"am-carousel",dots:!0,arrows:!1,autoplay:!1,infinite:!1,cellAlign:"center",selectedIndex:0,dotStyle:{},dotActiveStyle:{}},t.exports=e.default},274:function(t,e,n){var i;
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),r={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(i=function(){return r}.call(e,n,e,t))||(t.exports=i)}()},275:function(t,e,n){(function(e){for(var i=n(276),o="undefined"==typeof window?e:window,r=["moz","webkit"],s="AnimationFrame",a=o["request"+s],l=o["cancel"+s]||o["cancelRequest"+s],u=0;!a&&u<r.length;u++)a=o[r[u]+"Request"+s],l=o[r[u]+"Cancel"+s]||o[r[u]+"CancelRequest"+s];if(!a||!l){var c=0,d=0,p=[];a=function(t){if(0===p.length){var e=i(),n=Math.max(0,1e3/60-(e-c));c=n+e,setTimeout((function(){var t=p.slice(0);p.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(c)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(n))}return p.push({handle:++d,callback:t,cancelled:!1}),d},l=function(t){for(var e=0;e<p.length;e++)p[e].handle===t&&(p[e].cancelled=!0)}}t.exports=function(t){return a.call(o,t)},t.exports.cancel=function(){l.apply(o,arguments)},t.exports.polyfill=function(t){t||(t=o),t.requestAnimationFrame=a,t.cancelAnimationFrame=l}}).call(this,n(70))},276:function(t,e,n){(function(e){(function(){var n,i,o,r,s,a;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:null!=e&&e.hrtime?(t.exports=function(){return(n()-s)/1e6},i=e.hrtime,r=(n=function(){var t;return 1e9*(t=i())[0]+t[1]})(),a=1e9*e.uptime(),s=r-a):Date.now?(t.exports=function(){return Date.now()-o},o=Date.now()):(t.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,n(96))},286:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return E}));var i=n(30),o=n.n(i),r=n(25),s=n.n(r),a=n(26),l=n.n(a),u=n(20),c=n.n(u),d=n(27),p=n.n(d),h=n(0),f=n.n(h),v=[{component:function(t){function e(){s()(this,e);var t=c()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.handleClick=function(e){e.preventDefault(),t.props.previousSlide()},t}return p()(e,t),l()(e,[{key:"render",value:function(){return f.a.createElement("button",{style:this.getButtonStyles(0===this.props.currentSlide&&!this.props.wrapAround),onClick:this.handleClick},"PREV")}},{key:"getButtonStyles",value:function(t){return{border:0,background:"rgba(0,0,0,0.4)",color:"white",padding:10,outline:0,opacity:t?.3:1,cursor:"pointer"}}}]),e}(f.a.Component),position:"CenterLeft"},{component:function(t){function e(){s()(this,e);var t=c()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.handleClick=function(e){e.preventDefault(),t.props.nextSlide&&t.props.nextSlide()},t}return p()(e,t),l()(e,[{key:"render",value:function(){return f.a.createElement("button",{style:this.getButtonStyles(this.props.currentSlide+this.props.slidesToScroll>=this.props.slideCount&&!this.props.wrapAround),onClick:this.handleClick},"NEXT")}},{key:"getButtonStyles",value:function(t){return{border:0,background:"rgba(0,0,0,0.4)",color:"white",padding:10,outline:0,opacity:t?.3:1,cursor:"pointer"}}}]),e}(f.a.Component),position:"CenterRight"},{component:function(t){function e(){return s()(this,e),c()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return p()(e,t),l()(e,[{key:"render",value:function(){var t=this,e=this.getIndexes(this.props.slideCount,this.props.slidesToScroll);return f.a.createElement("ul",{style:this.getListStyles()},e.map((function(e){return f.a.createElement("li",{style:t.getListItemStyles(),key:e},f.a.createElement("button",{style:t.getButtonStyles(t.props.currentSlide===e),onClick:t.props.goToSlide&&t.props.goToSlide.bind(null,e)},"•"))})))}},{key:"getIndexes",value:function(t,e){for(var n=[],i=0;i<t;i+=e)n.push(i);return n}},{key:"getListStyles",value:function(){return{position:"relative",margin:0,top:-10,padding:0}}},{key:"getListItemStyles",value:function(){return{listStyleType:"none",display:"inline-block"}}},{key:"getButtonStyles",value:function(t){return{border:0,background:"transparent",color:"black",cursor:"pointer",padding:10,outline:0,fontSize:24,opacity:t?1:.5}}}]),e}(f.a.Component),position:"BottomCenter"}],g=n(274),y=n.n(g),m=n(275),S=n.n(m);var b={ADDITIVE:"ADDITIVE",DESTRUCTIVE:"DESTRUCTIVE"},w=function(t,e,n){null!=t&&(t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n)},T=function(t,e,n){null!=t&&(t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null)},k=function(t){function e(t){s()(this,e);var n=c()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n._rafCb=function(){var t=n.state;if(0!==t.tweenQueue.length){for(var e=Date.now(),i=[],o=0;o<t.tweenQueue.length;o++){var r=t.tweenQueue[o],s=r.initTime,a=r.config;e-s<a.duration?i.push(r):a.onEnd&&a.onEnd()}-1!==n._rafID&&(n.setState({tweenQueue:i}),n._rafID=S()(n._rafCb))}},n.handleClick=function(t){!0===n.clickSafe&&(t.preventDefault(),t.stopPropagation(),t.nativeEvent&&t.nativeEvent.stopPropagation())},n.autoplayIterator=function(){if(n.props.wrapAround)return n.nextSlide();n.state.currentSlide!==n.state.slideCount-n.state.slidesToShow?n.nextSlide():n.stopAutoplay()},n.goToSlide=function(t){var e=n.props,i=e.beforeSlide,o=e.afterSlide;if(t>=f.a.Children.count(n.props.children)||t<0){if(!n.props.wrapAround)return;if(t>=f.a.Children.count(n.props.children))return i(n.state.currentSlide,0),n.setState({currentSlide:0},(function(){n.animateSlide(null,null,n.getTargetLeft(null,t),(function(){n.animateSlide(null,.01),o(0),n.resetAutoplay(),n.setExternalData()}))}));var r=f.a.Children.count(n.props.children)-n.state.slidesToScroll;return i(n.state.currentSlide,r),n.setState({currentSlide:r},(function(){n.animateSlide(null,null,n.getTargetLeft(null,t),(function(){n.animateSlide(null,.01),o(r),n.resetAutoplay(),n.setExternalData()}))}))}i(n.state.currentSlide,t),n.setState({currentSlide:t},(function(){n.animateSlide(),n.props.afterSlide(t),n.resetAutoplay(),n.setExternalData()}))},n.nextSlide=function(){var t=f.a.Children.count(n.props.children),e=n.props.slidesToShow;if("auto"===n.props.slidesToScroll&&(e=n.state.slidesToScroll),!(n.state.currentSlide>=t-e)||n.props.wrapAround)if(n.props.wrapAround)n.goToSlide(n.state.currentSlide+n.state.slidesToScroll);else{if(1!==n.props.slideWidth)return n.goToSlide(n.state.currentSlide+n.state.slidesToScroll);n.goToSlide(Math.min(n.state.currentSlide+n.state.slidesToScroll,t-e))}},n.previousSlide=function(){n.state.currentSlide<=0&&!n.props.wrapAround||(n.props.wrapAround?n.goToSlide(n.state.currentSlide-n.state.slidesToScroll):n.goToSlide(Math.max(0,n.state.currentSlide-n.state.slidesToScroll)))},n.onResize=function(){n.setDimensions()},n.onReadyStateChange=function(){n.setDimensions()},n.state={currentSlide:n.props.slideIndex,dragging:!1,frameWidth:0,left:0,slideCount:0,slidesToScroll:n.props.slidesToScroll,slideWidth:0,top:0,tweenQueue:[]},n.touchObject={},n.clickSafe=!0,n}return p()(e,t),l()(e,[{key:"componentWillMount",value:function(){this.setInitialDimensions()}},{key:"componentDidMount",value:function(){this.setDimensions(),this.bindEvents(),this.setExternalData(),this.props.autoplay&&this.startAutoplay()}},{key:"componentWillReceiveProps",value:function(t){this.setState({slideCount:t.children.length}),this.setDimensions(t),this.props.slideIndex!==t.slideIndex&&t.slideIndex!==this.state.currentSlide&&this.goToSlide(t.slideIndex),this.props.autoplay!==t.autoplay&&(t.autoplay?this.startAutoplay():this.stopAutoplay())}},{key:"componentWillUnmount",value:function(){this.unbindEvents(),this.stopAutoplay(),S.a.cancel(this._rafID),this._rafID=-1}},{key:"tweenState",value:function(t,e){var n=this,i=e.easing,o=e.duration,r=e.delay,s=e.beginValue,a=e.endValue,l=e.onEnd,u=e.stackBehavior;this.setState((function(e){var c=e,d=void 0,p=void 0;if("string"==typeof t)d=t,p=t;else{for(var h=0;h<t.length-1;h++)c=c[t[h]];d=t[t.length-1],p=t.join("|")}var f={easing:i,duration:null==o?300:o,delay:null==r?0:r,beginValue:null==s?c[d]:s,endValue:a,onEnd:l,stackBehavior:u||"ADDITIVE"},v=e.tweenQueue;return f.stackBehavior===b.DESTRUCTIVE&&(v=e.tweenQueue.filter((function(t){return t.pathHash!==p}))),v.push({pathHash:p,config:f,initTime:Date.now()+f.delay}),c[d]=f.endValue,1===v.length&&(n._rafID=S()(n._rafCb)),{tweenQueue:v}}))}},{key:"getTweeningValue",value:function(t){var e=this.state,n=void 0,i=void 0;if("string"==typeof t)n=e[t],i=t;else{n=e;for(var o=0;o<t.length;o++)n=n[t[o]];i=t.join("|")}for(var r=Date.now(),s=0;s<e.tweenQueue.length;s++){var a=e.tweenQueue[s],l=a.pathHash,u=a.initTime,c=a.config;if(l===i){var d=r-u>c.duration?c.duration:Math.max(0,r-u);n+=(0===c.duration?c.endValue:c.easing(d,c.beginValue,c.endValue,c.duration))-c.endValue}}return n}},{key:"render",value:function(){var t=this,e=f.a.Children.count(this.props.children)>1?this.formatChildren(this.props.children):this.props.children;return f.a.createElement("div",{className:["slider",this.props.className||""].join(" "),ref:"slider",style:o()({},this.getSliderStyles(),this.props.style)},f.a.createElement("div",o()({className:"slider-frame",ref:"frame",style:this.getFrameStyles()},this.getTouchEvents(),this.getMouseEvents(),{onClick:this.handleClick}),f.a.createElement("ul",{className:"slider-list",ref:"list",style:this.getListStyles()},e)),this.props.decorators?this.props.decorators.map((function(e,n){return f.a.createElement("div",{style:o()({},t.getDecoratorStyles(e.position),e.style||{}),className:"slider-decorator-"+n,key:n},f.a.createElement(e.component,{currentSlide:t.state.currentSlide,slideCount:t.state.slideCount,frameWidth:t.state.frameWidth,slideWidth:t.state.slideWidth,slidesToScroll:t.state.slidesToScroll,cellSpacing:t.props.cellSpacing,slidesToShow:t.props.slidesToShow,wrapAround:t.props.wrapAround,nextSlide:t.nextSlide,previousSlide:t.previousSlide,goToSlide:t.goToSlide}))})):null,f.a.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:this.getStyleTagStyles()}}))}},{key:"getTouchEvents",value:function(){var t=this;return!1===this.props.swiping?null:{onTouchStart:function(e){t.touchObject={startX:e.touches[0].pageX,startY:e.touches[0].pageY},t.handleMouseOver()},onTouchMove:function(e){var n=t.swipeDirection(t.touchObject.startX,e.touches[0].pageX,t.touchObject.startY,e.touches[0].pageY);0!==n&&e.preventDefault();var i=t.props.vertical?Math.round(Math.sqrt(Math.pow(e.touches[0].pageY-t.touchObject.startY,2))):Math.round(Math.sqrt(Math.pow(e.touches[0].pageX-t.touchObject.startX,2)));t.touchObject={startX:t.touchObject.startX,startY:t.touchObject.startY,endX:e.touches[0].pageX,endY:e.touches[0].pageY,length:i,direction:n},t.setState({left:t.props.vertical?0:t.getTargetLeft(t.touchObject.length*t.touchObject.direction),top:t.props.vertical?t.getTargetLeft(t.touchObject.length*t.touchObject.direction):0})},onTouchEnd:function(e){t.handleSwipe(e),t.handleMouseOut()},onTouchCancel:function(e){t.handleSwipe(e)}}}},{key:"getMouseEvents",value:function(){var t=this;return!1===this.props.dragging?null:{onMouseOver:function(){t.handleMouseOver()},onMouseOut:function(){t.handleMouseOut()},onMouseDown:function(e){t.touchObject={startX:e.clientX,startY:e.clientY},t.setState({dragging:!0})},onMouseMove:function(e){if(t.state.dragging){var n=t.swipeDirection(t.touchObject.startX,e.clientX,t.touchObject.startY,e.clientY);0!==n&&e.preventDefault();var i=t.props.vertical?Math.round(Math.sqrt(Math.pow(e.clientY-t.touchObject.startY,2))):Math.round(Math.sqrt(Math.pow(e.clientX-t.touchObject.startX,2)));t.touchObject={startX:t.touchObject.startX,startY:t.touchObject.startY,endX:e.clientX,endY:e.clientY,length:i,direction:n},t.setState({left:t.props.vertical?0:t.getTargetLeft(t.touchObject.length*t.touchObject.direction),top:t.props.vertical?t.getTargetLeft(t.touchObject.length*t.touchObject.direction):0})}},onMouseUp:function(e){t.state.dragging&&t.handleSwipe(e)},onMouseLeave:function(e){t.state.dragging&&t.handleSwipe(e)}}}},{key:"handleMouseOver",value:function(){this.props.autoplay&&(this.autoplayPaused=!0,this.stopAutoplay())}},{key:"handleMouseOut",value:function(){this.props.autoplay&&this.autoplayPaused&&(this.startAutoplay(),this.autoplayPaused=null)}},{key:"handleSwipe",value:function(t){void 0!==this.touchObject.length&&this.touchObject.length>44?this.clickSafe=!0:this.clickSafe=!1;var e=this.props,n=e.slidesToShow,i=e.slidesToScroll,o=e.swipeSpeed;"auto"===i&&(n=this.state.slidesToScroll),f.a.Children.count(this.props.children)>1&&this.touchObject.length>this.state.slideWidth/n/o?1===this.touchObject.direction?this.state.currentSlide>=f.a.Children.count(this.props.children)-n&&!this.props.wrapAround?this.animateSlide(this.props.edgeEasing):this.nextSlide():-1===this.touchObject.direction&&(this.state.currentSlide<=0&&!this.props.wrapAround?this.animateSlide(this.props.edgeEasing):this.previousSlide()):this.goToSlide(this.state.currentSlide),this.touchObject={},this.setState({dragging:!1})}},{key:"swipeDirection",value:function(t,e,n,i){var o=t-e,r=n-i,s=Math.atan2(r,o),a=Math.round(180*s/Math.PI);return a<0&&(a=360-Math.abs(a)),a<=45&&a>=0||a<=360&&a>=315?1:a>=135&&a<=225?-1:!0===this.props.vertical?a>=35&&a<=135?1:-1:0}},{key:"startAutoplay",value:function(){f.a.Children.count(this.props.children)<=1||(this.autoplayID=setInterval(this.autoplayIterator,this.props.autoplayInterval))}},{key:"resetAutoplay",value:function(){this.props.resetAutoplay&&this.props.autoplay&&!this.autoplayPaused&&(this.stopAutoplay(),this.startAutoplay())}},{key:"stopAutoplay",value:function(){this.autoplayID&&clearInterval(this.autoplayID)}},{key:"animateSlide",value:function(t,e,n,i){this.tweenState(this.props.vertical?"top":"left",{easing:t||this.props.easing,duration:e||this.props.speed,endValue:n||this.getTargetLeft(),delay:null,beginValue:null,onEnd:i||null,stackBehavior:b})}},{key:"getTargetLeft",value:function(t,e){var n=void 0,i=e||this.state.currentSlide,o=this.props.cellSpacing;switch(this.props.cellAlign){case"left":n=0,n-=o*i;break;case"center":n=(this.state.frameWidth-this.state.slideWidth)/2,n-=o*i;break;case"right":n=this.state.frameWidth-this.state.slideWidth,n-=o*i}var r=this.state.slideWidth*i;return this.state.currentSlide>0&&i+this.state.slidesToScroll>=this.state.slideCount&&1!==this.props.slideWidth&&!this.props.wrapAround&&"auto"===this.props.slidesToScroll&&(r=this.state.slideWidth*this.state.slideCount-this.state.frameWidth,n=0,n-=o*(this.state.slideCount-1)),-1*(r-(n-=t||0))}},{key:"bindEvents",value:function(){y.a.canUseDOM&&(w(window,"resize",this.onResize),w(document,"readystatechange",this.onReadyStateChange))}},{key:"unbindEvents",value:function(){y.a.canUseDOM&&(T(window,"resize",this.onResize),T(document,"readystatechange",this.onReadyStateChange))}},{key:"formatChildren",value:function(t){var e=this,n=this.props.vertical?this.getTweeningValue("top"):this.getTweeningValue("left");return f.a.Children.map(t,(function(t,i){return f.a.createElement("li",{className:"slider-slide",style:e.getSlideStyles(i,n),key:i},t)}))}},{key:"setInitialDimensions",value:function(){var t=this,e=this.props,n=e.vertical,i=e.initialSlideHeight,o=e.initialSlideWidth,r=e.slidesToShow,s=e.cellSpacing,a=e.children,l=n?i||0:o||0,u=i?i*r:0,c=u+s*(r-1);this.setState({slideHeight:u,frameWidth:n?c:"100%",slideCount:f.a.Children.count(a),slideWidth:l},(function(){t.setLeft(),t.setExternalData()}))}},{key:"setDimensions",value:function(t){var e,n,i=this,o=void 0,r=void 0,s=(t=t||this.props).slidesToScroll,a=this.refs.frame,l=a.childNodes[0].childNodes[0];l?(l.style.height="auto",o=this.props.vertical?l.offsetHeight*t.slidesToShow:l.offsetHeight):o=100,r="number"!=typeof t.slideWidth?parseInt(t.slideWidth,10):t.vertical?o/t.slidesToShow*t.slideWidth:a.offsetWidth/t.slidesToShow*t.slideWidth,t.vertical||(r-=t.cellSpacing*((100-100/t.slidesToShow)/100)),n=o+t.cellSpacing*(t.slidesToShow-1),e=t.vertical?n:a.offsetWidth,"auto"===t.slidesToScroll&&(s=Math.floor(e/(r+t.cellSpacing))),this.setState({slideHeight:o,frameWidth:e,slideWidth:r,slidesToScroll:s,left:t.vertical?0:this.getTargetLeft(),top:t.vertical?this.getTargetLeft():0},(function(){i.setLeft()}))}},{key:"setLeft",value:function(){this.setState({left:this.props.vertical?0:this.getTargetLeft(),top:this.props.vertical?this.getTargetLeft():0})}},{key:"setExternalData",value:function(){this.props.data&&this.props.data()}},{key:"getListStyles",value:function(){var t=this.state.slideWidth*f.a.Children.count(this.props.children),e=this.props.cellSpacing,n=e*f.a.Children.count(this.props.children),i="translate3d("+this.getTweeningValue("left")+"px, "+this.getTweeningValue("top")+"px, 0)";return{transform:i,WebkitTransform:i,msTransform:"translate("+this.getTweeningValue("left")+"px, "+this.getTweeningValue("top")+"px)",position:"relative",display:"block",margin:this.props.vertical?e/2*-1+"px 0px":"0px "+e/2*-1+"px",padding:0,height:this.props.vertical?t+n:this.state.slideHeight,width:this.props.vertical?"auto":t+n,cursor:!0===this.state.dragging?"pointer":"inherit",boxSizing:"border-box",MozBoxSizing:"border-box"}}},{key:"getFrameStyles",value:function(){return{position:"relative",display:"block",overflow:this.props.frameOverflow,height:this.props.vertical?this.state.frameWidth||"initial":"auto",margin:this.props.framePadding,padding:0,transform:"translate3d(0, 0, 0)",WebkitTransform:"translate3d(0, 0, 0)",msTransform:"translate(0, 0)",boxSizing:"border-box",MozBoxSizing:"border-box"}}},{key:"getSlideStyles",value:function(t,e){var n=this.getSlideTargetPosition(t,e),i=this.props.cellSpacing;return{position:"absolute",left:this.props.vertical?0:n,top:this.props.vertical?n:0,display:this.props.vertical?"block":"inline-block",listStyleType:"none",verticalAlign:"top",width:this.props.vertical?"100%":this.state.slideWidth,height:"auto",boxSizing:"border-box",MozBoxSizing:"border-box",marginLeft:this.props.vertical?"auto":i/2,marginRight:this.props.vertical?"auto":i/2,marginTop:this.props.vertical?i/2:"auto",marginBottom:this.props.vertical?i/2:"auto"}}},{key:"getSlideTargetPosition",value:function(t,e){var n=this.state.frameWidth/this.state.slideWidth,i=(this.state.slideWidth+this.props.cellSpacing)*t,o=(this.state.slideWidth+this.props.cellSpacing)*n*-1;if(this.props.wrapAround){var r=Math.ceil(e/this.state.slideWidth);if(this.state.slideCount-r<=t)return(this.state.slideWidth+this.props.cellSpacing)*(this.state.slideCount-t)*-1;var s=Math.ceil((Math.abs(e)-Math.abs(o))/this.state.slideWidth);if(1!==this.state.slideWidth&&(s=Math.ceil((Math.abs(e)-this.state.slideWidth)/this.state.slideWidth)),t<=s-1)return(this.state.slideWidth+this.props.cellSpacing)*(this.state.slideCount+t)}return i}},{key:"getSliderStyles",value:function(){return{position:"relative",display:"block",width:this.props.width,height:"auto",boxSizing:"border-box",MozBoxSizing:"border-box",visibility:this.state.slideWidth?"visible":"hidden"}}},{key:"getStyleTagStyles",value:function(){return".slider-slide > img {width: 100%; display: block;}"}},{key:"getDecoratorStyles",value:function(t){switch(t){case"TopLeft":return{position:"absolute",top:0,left:0};case"TopCenter":return{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",WebkitTransform:"translateX(-50%)",msTransform:"translateX(-50%)"};case"TopRight":return{position:"absolute",top:0,right:0};case"CenterLeft":return{position:"absolute",top:"50%",left:0,transform:"translateY(-50%)",WebkitTransform:"translateY(-50%)",msTransform:"translateY(-50%)"};case"CenterCenter":return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",WebkitTransform:"translate(-50%, -50%)",msTransform:"translate(-50%, -50%)"};case"CenterRight":return{position:"absolute",top:"50%",right:0,transform:"translateY(-50%)",WebkitTransform:"translateY(-50%)",msTransform:"translateY(-50%)"};case"BottomLeft":return{position:"absolute",bottom:0,left:0};case"BottomCenter":return{position:"absolute",bottom:0,width:"100%",textAlign:"center"};case"BottomRight":return{position:"absolute",bottom:0,right:0};default:return{position:"absolute",top:0,left:0}}}}]),e}(f.a.Component);k.defaultProps={afterSlide:function(){},autoplay:!1,resetAutoplay:!0,swipeSpeed:12,autoplayInterval:3e3,beforeSlide:function(){},cellAlign:"left",cellSpacing:0,data:function(){},decorators:v,dragging:!0,easing:function(t,e,n,i){return(n-e)*Math.sqrt(1-(t=t/i-1)*t)+e},edgeEasing:function(t,e,n,i){return(n-e)*t/i+e},framePadding:"0px",frameOverflow:"hidden",slideIndex:0,slidesToScroll:1,slidesToShow:1,slideWidth:1,speed:500,swiping:!0,vertical:!1,width:"100%",wrapAround:!1,style:{}};var E=k}}]);