(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{260:function(e,n,t){"use strict";var r=t(3),o=t(4),i=t(0),a=t.n(i);function l(){var e=Object(r.a)(["\n    position: fixed;\n    left: 0; right: 0; top: 0; bottom: 0;\n    width: 1rem;\n    height: 1rem;\n    margin: auto;\n"]);return l=function(){return e},e}var c=o.default.div(l());n.a=a.a.memo(c)},261:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.forceVisible=n.forceCheck=n.lazyload=void 0;var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=t(0),i=f(o),a=f(t(2)),l=t(262),c=f(t(263)),s=f(t(264)),u=f(t(265));function f(e){return e&&e.__esModule?e:{default:e}}function d(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function m(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function p(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var h=0,v=0,b=0,g=0,y="data-lazyload-listened",w=[],E=[],O=!1;try{var x=Object.defineProperty({},"passive",{get:function(){O=!0}});window.addEventListener("test",null,x)}catch(e){}var j=!!O&&{capture:!1,passive:!0},k=function(e){var n=e.ref;if(n instanceof HTMLElement){var t=(0,c.default)(n);(e.props.overflow&&t!==n.ownerDocument&&t!==document&&t!==document.documentElement?function(e,n){var t=e.ref,r=void 0,o=void 0,i=void 0,a=void 0;try{var l=n.getBoundingClientRect();r=l.top,o=l.left,i=l.height,a=l.width}catch(e){r=h,o=v,i=g,a=b}var c=window.innerHeight||document.documentElement.clientHeight,s=window.innerWidth||document.documentElement.clientWidth,u=Math.max(r,0),f=Math.max(o,0),d=Math.min(c,r+i)-u,m=Math.min(s,o+a)-f,p=void 0,y=void 0,w=void 0,E=void 0;try{var O=t.getBoundingClientRect();p=O.top,y=O.left,w=O.height,E=O.width}catch(e){p=h,y=v,w=g,E=b}var x=p-u,j=y-f,k=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return x-k[0]<=d&&x+w+k[1]>=0&&j-k[0]<=m&&j+E+k[1]>=0}(e,t):function(e){var n=e.ref;if(!(n.offsetWidth||n.offsetHeight||n.getClientRects().length))return!1;var t=void 0,r=void 0;try{var o=n.getBoundingClientRect();t=o.top,r=o.height}catch(e){t=h,r=g}var i=window.innerHeight||document.documentElement.clientHeight,a=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return t-a[0]<=i&&t+r+a[1]>=0}(e))?e.visible||(e.props.once&&E.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},z=function(){E.forEach((function(e){var n=w.indexOf(e);-1!==n&&w.splice(n,1)})),E=[]},_=function(){for(var e=0;e<w.length;++e){var n=w[e];k(n)}z()},C=void 0,L=null,N=function(e){function n(e){d(this,n);var t=m(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.visible=!1,t.setRef=t.setRef.bind(t),t}return p(n,e),r(n,[{key:"componentDidMount",value:function(){var e=window,n=this.props.scrollContainer;n&&"string"==typeof n&&(e=e.document.querySelector(n));var t=void 0!==this.props.debounce&&"throttle"===C||"debounce"===C&&void 0===this.props.debounce;if(t&&((0,l.off)(e,"scroll",L,j),(0,l.off)(window,"resize",L,j),L=null),L||(void 0!==this.props.debounce?(L=(0,s.default)(_,"number"==typeof this.props.debounce?this.props.debounce:300),C="debounce"):void 0!==this.props.throttle?(L=(0,u.default)(_,"number"==typeof this.props.throttle?this.props.throttle:300),C="throttle"):L=_),this.props.overflow){var r=(0,c.default)(this.ref);if(r&&"function"==typeof r.getAttribute){var o=+r.getAttribute(y)+1;1===o&&r.addEventListener("scroll",L,j),r.setAttribute(y,o)}}else if(0===w.length||t){var i=this.props,a=i.scroll,f=i.resize;a&&(0,l.on)(e,"scroll",L,j),f&&(0,l.on)(window,"resize",L,j)}w.push(this),k(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,c.default)(this.ref);if(e&&"function"==typeof e.getAttribute){var n=+e.getAttribute(y)-1;0===n?(e.removeEventListener("scroll",L,j),e.removeAttribute(y)):e.setAttribute(y,n)}}var t=w.indexOf(this);-1!==t&&w.splice(t,1),0===w.length&&"undefined"!=typeof window&&((0,l.off)(window,"resize",L,j),(0,l.off)(window,"scroll",L,j))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,n=e.height,t=e.children,r=e.placeholder,o=e.classNamePrefix;return i.default.createElement("div",{className:o+"-wrapper",ref:this.setRef},this.visible?t:r||i.default.createElement("div",{style:{height:n},className:o+"-placeholder"}))}}]),n}(o.Component);N.propTypes={classNamePrefix:a.default.string,once:a.default.bool,height:a.default.oneOfType([a.default.number,a.default.string]),offset:a.default.oneOfType([a.default.number,a.default.arrayOf(a.default.number)]),overflow:a.default.bool,resize:a.default.bool,scroll:a.default.bool,children:a.default.node,throttle:a.default.oneOfType([a.default.number,a.default.bool]),debounce:a.default.oneOfType([a.default.number,a.default.bool]),placeholder:a.default.node,scrollContainer:a.default.oneOfType([a.default.string,a.default.object]),unmountIfInvisible:a.default.bool},N.defaultProps={classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var D=function(e){return e.displayName||e.name||"Component"};n.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(n){return function(t){function o(){d(this,o);var e=m(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return e.displayName="LazyLoad"+D(n),e}return p(o,t),r(o,[{key:"render",value:function(){return i.default.createElement(N,e,i.default.createElement(n,this.props))}}]),o}(o.Component)}},n.default=N,n.forceCheck=_,n.forceVisible=function(){for(var e=0;e<w.length;++e){var n=w[e];n.visible=!0,n.forceUpdate()}z()}},262:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.on=function(e,n,t,r){r=r||!1,e.addEventListener?e.addEventListener(n,t,r):e.attachEvent&&e.attachEvent("on"+n,(function(n){t.call(e,n||window.event)}))},n.off=function(e,n,t,r){r=r||!1,e.removeEventListener?e.removeEventListener(n,t,r):e.detachEvent&&e.detachEvent("on"+n,t)}},263:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var n="absolute"===e.style.position,t=/(scroll|auto)/,r=e;r;){if(!r.parentNode)return e.ownerDocument||document.documentElement;var o=window.getComputedStyle(r),i=o.position,a=o.overflow,l=o["overflow-x"],c=o["overflow-y"];if("static"===i&&n)r=r.parentNode;else{if(t.test(a)&&t.test(l)&&t.test(c))return r;r=r.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},264:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n,t){var r=void 0,o=void 0,i=void 0,a=void 0,l=void 0,c=function c(){var s=+new Date-a;s<n&&s>=0?r=setTimeout(c,n-s):(r=null,t||(l=e.apply(i,o),r||(i=null,o=null)))};return function(){i=this,o=arguments,a=+new Date;var s=t&&!r;return r||(r=setTimeout(c,n)),s&&(l=e.apply(i,o),i=null,o=null),l}}},265:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n,t){var r,o;return n||(n=250),function(){var i=t||this,a=+new Date,l=arguments;r&&a<r+n?(clearTimeout(o),o=setTimeout((function(){r=a,e.apply(i,l)}),n)):(r=a,e.apply(i,l))}}},267:function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"a",(function(){return s}));var r=t(3),o=t(4),i=t(1);function a(){var e=Object(r.a)(["\n  >li {\n    display : flex;\n    align-items : center;\n    height : .6rem;\n    .index {\n      font-size : .16rem;\n      flex-basis: .6rem;\n      width: .60rem;\n      height: .60rem;\n      line-height: .60rem;\n      text-align: center;\n    }\n    .info {\n      box-sizing : border-box;\n      flex: 1;\n      height : 100%;\n      display :flex;\n      flex-direction : column;\n      padding : .05rem 0;\n      justify-content : space-around;\n      border-bottom-style : solid;\n      border-bottom-color : ",";\n      text-overflow: ellipsis;\n      overflow : hidden;\n      white-space : nowrap; \n      >span{\n        text-overflow : ellipsis;\n        overflow: hidden;\n        white-space : nowrap;\n        display: flex;\n        align-items: center;\n        line-height: 1;\n        flex: 1;\n        &:first-child {\n          font-size : .16rem;\n          color : ",";\n        }\n        &:last-child {\n          font-size : .12rem;\n          color : ",";\n        }\n      }\n    }\n  }\n"]);return a=function(){return e},e}function l(){var e=Object(r.a)(["\n  background : #fff;\n  opacity: 0.98;\n  border-top-left-radius : .1rem;\n  border-top-right-radius : .1rem;\n  .first_line {\n    display : flex;\n    box-sizing: border-box;\n    padding: .1rem 0;\n    margin-left: .1rem;\n    position: relative;\n    justify-content: space-between;\n    border-bottom-style: solid;\n    border-bottom-color: ",";\n    .play_all {\n      display: inline-block;\n      line-height: .24rem;\n      color: ",";\n      i{\n        font-size : .24rem;\n        margin-right: .1rem;\n        vertical-align: top;\n      }\n      >span{\n        vertical-align : top;\n        font-size : .16rem;\n      }\n      .sum {\n        font-size: .12rem;\n        color: ",";\n      }\n    }\n    .add_list {\n      display : flex;\n      align-items: center;\n      position: absolute;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      width: 1.3rem;\n      line-height: .34rem;\n      background: ",";\n      color: ",";\n      font-size: 0;\n      border-radius: .03rem;\n      vertical-align: top;\n      i{\n        vertical-align: top;\n        font-size: .1rem;\n        margin: 0 .05rem 0 .1rem;\n      }\n      span {\n        font-size: .14rem;\n        line-height: .34rem;\n      }\n    }\n  }\n"]);return l=function(){return e},e}var c=o.default.div(l(),i.a["border-color"],i.a["font-color-desc"],i.a["font-color-desc-v2"],i.a["theme-color"],i.a["font-color-light"]),s=o.default.ul(a(),i.a["border-color"],i.a["font-color-desc"],i.a["font-color-desc-v2"])},268:function(e,n,t){"use strict";var r=t(3),o=t(0),i=t.n(o),a=t(4),l=t(1);function c(){var e=Object(r.a)(["\n  .icon_wrapper{\n    position: fixed;\n    z-index: 1000;\n    margin-top: -.1rem;\n    margin-left: -.1rem;\n    color: ",";\n    font-size: .14rem;\n    display: none;\n    transition: transform 1s cubic-bezier(.62,-0.1,.86,.57);\n    transform: translate3d(0, 0, 0);\n    >div{\n      transition: transform 1s;\n    }\n  }\n"]);return c=function(){return e},e}var s=a.default.div(c(),l.a["theme-color"]),u=Object(o.forwardRef)((function(e,n){var t=Object(o.useRef)();Object(o.useEffect)((function(){for(var e=0;e<10;e++){var n=(r=void 0,o=void 0,r="<div class='icon_wrapper'>".concat('<div class="iconfont">&#xe642;</div>',"</div>"),(o=document.createElement("div")).innerHTML=r,o.firstChild);t.current.appendChild(n)}var r,o;[].slice.call(t.current.children).forEach((function(e){e.running=!1,e.addEventListener("transitionend",(function(){this.style.display="none",this.style.transform="translate3d(0, 0, 0)",this.running=!1,this.querySelector("div").style.transform="translate3d(0, 0, 0)"}),!1)}))}),[]);var r=function(e){for(var n=e.x,r=e.y,o=function(e){var o=[].slice.call(t.current.children)[e];if(!1===o.running)return o.style.left=n/100+"rem",o.style.top=r/100+"rem",o.style.display="inline-block",setTimeout((function(){o.running=!0,o.style.transform="translate3d(-.4rem, 7.5rem, 0)",o.querySelector("div").style.transform="translate3d(-.4rem, 0, 0)"}),20),"break"},i=0;i<10;i++){if("break"===o(i))break}};return Object(o.useImperativeHandle)(n,(function(){return{startAnimation:r}})),i.a.createElement(s,{ref:t})}));n.a=i.a.memo(u)},290:function(e,n,t){"use strict";t.r(n);var r=t(12),o=t(0),i=t.n(o),a=t(259),l=t(46),c=t(3),s=t(4),u=t(1);function f(){var e=Object(c.a)(["\n  display : flex;\n  box-sizing : border-box;\n  flex-direction : row;\n  margin : 0 .05rem;\n  padding : .05rem 0;\n  align-items : center;\n  border-bottom: 1px solid ",";\n  .img_container {\n    margin-right : .2rem;\n    img {\n      width : .5rem;\n      height : .5rem;\n      border-radius : .03rem;\n    }\n  }\n  .name {\n    font-weight: 500;\n    font-size : ",";\n    color : ","\n  }\n"]);return f=function(){return e},e}function d(){var e=Object(c.a)(["\n  display : flex;\n  margin : auto;\n  flex-direction: column;\n  overflow: hidden;\n  .title {\n    margin:.1rem 0 .1rem .1rem;\n    color: #666;\n    font-size: ",";\n  }\n"]);return d=function(){return e},e}function m(){var e=Object(c.a)(["\n  margin : 0 .2rem .2rem .2rem;\n  border-color : #ccc;\n  border-style : solid;\n  .title {\n    padding-top: .35rem;\n    margin-bottom: .1rem;\n    font-size: ",";\n    color: #666;\n    font-weight : normal;\n  }\n  .item {\n    display : inline-block;\n    padding: .1rem .15rem;\n    margin: 0 .1rem .06rem 0;\n    background: ",";\n    font-size: ",";\n    color: ",";\n    border-color : #d3d4da;\n    &:before {\n      border-radius: .8rem;\n    }\n  }\n"]);return m=function(){return e},e}function p(){var e=Object(c.a)(["\n  position : absolute;\n  top : .4rem;\n  bottom: 0;\n  width: 100%;\n  display : ",";\n"]);return p=function(){return e},e}function h(){var e=Object(c.a)(["\n  position : fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  z-index: 100;\n  overflow : hidden;\n  background: #fcfcfd;\n  transform-origin: right bottom;\n  bottom : ",";\n  &.fly-enter, &.fly-appear{\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n  &.fly-enter-active, &.fly-appear-active{\n    opacity: 1;\n    transition: all .3s;\n    transform: translate3d(0, 0, 0);\n  }\n  &.fly-exit{\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n  &.fly-exit-active{\n    opacity: 0;\n    transition: all .3s;\n    transform: translate3d(100%, 0, 0);\n  }\n"]);return h=function(){return e},e}var v=s.default.div(h(),(function(e){return e.play>0?"60px":0})),b=s.default.div(p(),(function(e){return e.shows?"":"none"})),g=s.default.div(m(),u.a["font-size-m"],u.a["highlight-background-color"],u.a["font-size-m"],u.a["font-color-desc"]),y=s.default.div(d(),u.a["font-size-s"]),w=s.default.div(f(),u.a["border-color"],u.a["font-size-m"],u.a["font-color-desc"]),E=t(267),O=t(13);function x(){var e=Object(c.a)(["\n  display : flex;\n  align-items : center;\n  box-sizing : border-box;\n  width : 100%;\n  padding : 0 .06rem;\n  padding-right : .1rem;\n  height : .4rem;\n  background : ",";\n  .icon-back{\n    font-size: .20rem;\n    color: ",";\n    padding-right : .06rem;\n  }\n  .inputCover {\n    display : flex;\n    align-items : center;\n    height : .3rem;\n    border-radius : .2rem;\n    background : #ebecec;\n    flex : 1;\n    .search {\n      width : .16rem;\n      height : .16rem;\n      color : #ccc;\n      margin: 0 .08rem;\n    }\n    input {\n      height: 100%;\n      font-size : .14rem;\n      color : #333;\n      border : 0;\n      outline : none;\n      width: 100%;\n      background rgba(0,0,0,0)\n    }\n    .icon-delete{\n      color : #bbb;\n      margin-right : .1rem;\n    }\n  }\n"]);return x=function(){return e},e}var j=s.default.div(x(),u.a["theme-color"],u.a["font-color-light"]);var k=i.a.memo((function(e){var n=e.handleClick,t=e.handleQuery,a=e.newQuery,l=Object(o.useState)(""),c=Object(r.a)(l,2),s=c[0],u=c[1],f=s?{display:"block"}:{display:"none"},d=Object(o.useRef)();Object(o.useEffect)((function(){a!==s&&(d.current.value=a),u(a)}),[a]);var m=Object(o.useMemo)((function(){return Object(O.a)(t,500)}),[t]);return Object(o.useEffect)((function(){m(s)}),[s]),i.a.createElement(j,null,i.a.createElement("i",{className:"iconfont icon-back",onClick:n},""),i.a.createElement("div",{className:"inputCover"},i.a.createElement("i",{className:"iconfont search"},""),i.a.createElement("input",{autoFocus:!0,type:"text",ref:d,placeholder:"搜索歌曲、歌手、专辑",onChange:function(e){var n=e.target.value;u(n)}}),i.a.createElement("i",{className:"iconfont icon-delete",onClick:function(){u(""),d.current.value="",d.current.focus()},style:f},"")))})),z=t(58),_=t(103),C=t(261),L=t.n(C),N=t.p+"images/singer-2681a7.png",D=t(260),S=t(94),T=t(268),M=t(15);n.default=Object(l.b)((function(e){return{hotList:e.getIn(["search","hotList"]),suggestList:e.getIn(["search","suggestList"]),songsList:e.getIn(["search","songsList"]),enterLoading:e.getIn(["search","enterLoading"]),songsCount:e.getIn(["player","playList"]).size}}),(function(e){return{getHotKeyWordsDispatch:function(){e(Object(_.a)())},getSuggestListDispatch:function(n){e(Object(_.b)(n))},getSongsDetailDispatch:function(n){e(Object(M.k)(n))}}}))(i.a.memo((function(e){var n=Object(o.useState)(!1),t=Object(r.a)(n,2),l=t[0],c=t[1],s=Object(o.useState)(""),u=Object(r.a)(s,2),f=u[0],d=u[1],m=e.hotList,p=e.suggestList,h=e.songsList,x=e.enterLoading,j=e.songsCount,_=e.getHotKeyWordsDispatch,M=e.getSuggestListDispatch,P=e.getSongsDetailDispatch,A=Object(o.useRef)(),R=p.toJS(),I=h.toJS();Object(o.useEffect)((function(){c(!0),m.size||_()}),[]);var H,U=Object(o.useCallback)((function(){c(!1)}),[]);return i.a.createElement(a.a,{in:l,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,onExit:function(){return e.history.goBack()}},i.a.createElement(v,{play:j},i.a.createElement("div",{className:"search_box_wrapper"},i.a.createElement(k,{handleClick:U,newQuery:f,handleQuery:function(e){d(e),e&&M(e)}})),x?i.a.createElement(D.a,null,i.a.createElement(S.a,null)):i.a.createElement(i.a.Fragment,null,i.a.createElement(b,{shows:!f},i.a.createElement(z.a,null,i.a.createElement("div",null,i.a.createElement(g,{className:"border-top"},i.a.createElement("h3",{className:"title"},"热门搜索"),(H=m?m.toJS():[],i.a.createElement("ul",null,H.map((function(e){return i.a.createElement("li",{className:"item border",key:e.first,onClick:function(){return d(e.first)}},i.a.createElement("span",null,e.first))})))))))),i.a.createElement(b,{shows:f},i.a.createElement(z.a,{onScroll:C.forceCheck},i.a.createElement("div",null,function(){var e=R.artists;if(e&&e.length)return i.a.createElement(y,null,i.a.createElement("h3",{className:"title"},"相关歌手"),e.map((function(e,n){return i.a.createElement(w,{key:e.id,className:"border-bottom",onClick:function(){return enterDetail(e.id)}},i.a.createElement("div",{className:"img_container"},i.a.createElement(L.a,{overflow:!0,placeholder:i.a.createElement("img",{src:N,alt:"歌手",width:"100%",height:"100%"})},i.a.createElement("img",{src:"".concat(e.picUrl,"?param=300x300"),width:"100%",height:"100%",alt:"歌手"}))),i.a.createElement("span",{className:"name"},"歌手 : ",e.name))})))}(),function(){if(!Object(O.g)(I)&&I.songs.length){var e=I.songs;return i.a.createElement(E.a,{style:{paddingLeft:".2rem"}},e.map((function(e,n){return i.a.createElement("li",{key:e.id,onClick:function(n){return function(e,n){P(n),A.current.startAnimation({x:e.nativeEvent.clientX,y:e.nativeEvent.clientY})}(n,e.id)}},i.a.createElement("div",{className:"info"},i.a.createElement("span",null,e.name),i.a.createElement("span",null,e.ar?Object(O.e)(e.ar):Object(O.e)(e.artists)," - ",e.al?e.al.name:e.album.name)))})))}}())))),i.a.createElement(T.a,{ref:A})))})))}}]);