(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/x4Q":function(t){t.exports=JSON.parse('{"data":{"allMdx":{"tags":[{"tag":"example","totalCount":1}]}}}')},"0sEd":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"gatsby-starter-code-notes","description":"A starter for gatsby-theme-code-notes","gitRepoContentPath":"","showThemeInfo":true,"showDescriptionInSidebar":true,"logo":""}}}}')},"8+s/":function(t,e,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,o=n("q1tI"),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=t(s.map((function(t){return t.props}))),f.canUseDOM?e(u):n&&(u=n(u))}var f=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,s=[],t};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),l()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},"8QA6":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("q1tI"),o=n.n(r),a=n("izhR"),i=n("MqoU"),c=n.n(i),u=n("2XJv"),s=function(t){var e,n=t.tag,r=t.size,i=void 0===r?"10px":r;if(n){var s=c()(n);e=Object(u.a)(s)}else e="#aaa";return o.a.createElement(a.b,{sx:{bg:e,width:i,height:i,borderRadius:"50%",mr:"0.5em"}})}},"Gr+A":function(t,e,n){"use strict";n.d(e,"a",(function(){return T}));var r=n("q1tI"),o=n("qKvR"),a=n("2A+t"),i=n("PcS7"),c=n("ZdEh"),u=n("izhR"),s=n("qhky"),l=(n("Vd3H"),n("Wbzz")),f=n("Bbii"),p=n("8QA6"),d=function(t){var e=t.tags,n=t.activeTag,o=t.rootPath,i=t.basePath,c=t.hasUntagged,s=Object(r.useContext)(f.SearchContext).setQuery;return Object(a.c)(u.b,{as:"nav",sx:{listStyleType:"none"}},Object(a.c)(u.l,{sx:{fontWeight:o?"bold":void 0,bg:o?"navHover":void 0,textTransform:"uppercase"},to:i,as:l.a,onClick:function(){return s("")}},"All Notes"),e.length>0&&Object(a.c)(r.Fragment,null,Object(a.c)(u.b,{sx:{px:3,pt:2,pb:1,fontFamily:"mono",textTransform:"uppercase",fontSize:1}},"Tags"),e.sort((function(t,e){return t.tag.localeCompare(e.tag)})).map((function(t,e){return Object(a.c)(u.l,{sx:{fontWeight:n===t.tag?"bold":void 0,bg:n===t.tag?"navHover":void 0},to:"/tag/"+encodeURI(t.slug),as:l.a,key:e,onClick:function(){return s("")}},Object(a.c)(p.a,{tag:t.tag}),t.tag)}))),c&&Object(a.c)(u.l,{sx:{fontWeight:"untagged"===n?"bold":void 0,bg:"untagged"===n?"navHover":void 0},to:"/tag/untagged",as:l.a,onClick:function(){return s("")}},Object(a.c)(p.a,null),"Untagged Notes"))},b=(n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("/x4Q")),h=n("MqoU"),y=n.n(h);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=n("voR5"),T=function(t){var e=t.activeTag,n=t.path,l=t.basePath,p=t.hasUntagged,h=t.title,m=t.children,v=Object(a.e)().theme,T=b.data.allMdx.tags.sort().map((function(t){return g(g({},t),{},{slug:y()(t.tag)})})),w=Object(O.a)(),j=w.showThemeInfo,S=w.showDescriptionInSidebar,A=w.description,x=w.logo,C=Object(r.useState)(!1),E=C[0],k=C[1],P=Object(i.b)(),I=P[0],M=P[1],L=Object(r.useContext)(f.SearchContext).query;return Object(a.c)(r.Fragment,null,Object(a.c)(s.a,{key:"app-metadata",titleTemplate:"%s · "+A,defaultTitle:A},Object(a.c)("html",{lang:"en"}),Object(a.c)("meta",{charSet:"utf-8"}),Object(a.c)("title",null,h),Object(a.c)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),Object(a.c)(o.a,{key:"global-styles",styles:Object(c.a)({"*":{boxSizing:"border-box"},body:{margin:0},":root":{fontSize:"16px"},"@media (min-width: 480px)":{":root":{fontSize:"calc(1rem + ((1vw - 4.8px) * 0.2778))"}},"@media (min-width: 1920px)":{":root":{fontSize:"20px"}}})}),Object(a.c)(u.b,{as:"main",sx:{position:["relative","fixed"],top:[0,3],right:[0,3],bottom:[0,3],left:[0,v.sizes.sidebar],overflowX:"hidden",overflowY:"auto",zIndex:"low",p:6,bg:"contentBg",transform:[E&&"translateX("+v.sizes.sidebarSkinny+")","translateX(0)"],transition:"all 200ms ease-in-out ",boxShadow:["md","md"],borderRadius:[0,"default"],minHeight:["100vh","unset"]}},Object(a.c)(u.k,{"aria-label":"Toggle Menu",onClick:function(){return k(!E)},sx:{mb:2,display:["block","none"]}}),Object(a.c)(u.d,{sx:{display:"flex",flexDirection:"column",minHeight:"100%"}},Object(a.c)(u.b,{sx:{mb:5}},Object(a.c)(f.SearchInput,null)),L?Object(a.c)(f.SearchResults,null):m,j&&Object(a.c)(u.b,{sx:{mt:4,fontSize:0}},"Want to make your own site like this? Try"," ",Object(a.c)(u.j,{href:"https://github.com/mrmartineau/gatsby-theme-code-notes"},"gatsby-theme-code-notes")," ","by ",Object(a.c)(u.j,{href:"https://zander.wtf"},"Zander Martineau"),"."))),Object(a.c)(u.b,{as:"header",sx:{width:[v.sizes.sidebarSkinny,v.sizes.sidebar],position:"fixed",top:0,right:[0,"auto"],left:0,bottom:0,overflowX:"hidden",overflowY:"auto",pt:4,pb:9}},Object(a.c)(u.b,{px:3,mb:3},!!x&&Object(a.c)(u.b,{mb:3},Object(a.c)(u.h,{src:x,variant:"logo"})),S&&A&&Object(a.c)(u.b,{mb:3},Object(a.c)(u.m,{sx:{color:"text",lineHeight:"snug",fontWeight:"bold"}},A))),Object(a.c)(d,{tags:T,activeTag:e,rootPath:n===l,basePath:l,hasUntagged:p}),Object(a.c)(u.b,{sx:{position:"fixed",left:0,width:[v.sizes.sidebarSkinny,v.sizes.sidebar],bottom:0,bg:"backgroundTransparent",py:3}},Object(a.c)(u.g,{onClick:function(t){M("default"===I?"dark":"default")},"aria-label":"Toggle dark mode",sx:{color:"text",zIndex:11,p:0,display:"block",mx:"auto",transition:"all 200ms ease-in-out ",cursor:"pointer","&:hover":{color:"primary"}}},Object(a.c)("svg",{width:"1.5rem",height:"1.5rem",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",fill:"currentColor"},Object(a.c)("path",{d:"M912.1 512c0 20-1.4 39.9-4 59.7.5-3.5 1-7.1 1.4-10.6-5.2 38.4-15.5 75.9-30.5 111.6 1.3-3.2 2.7-6.4 4-9.6-14.8 34.8-34 67.6-57.1 97.6l6.3-8.1c-23 29.7-49.8 56.4-79.5 79.5l8.1-6.3c-30 23.1-62.8 42.3-97.6 57.1 3.2-1.3 6.4-2.7 9.6-4-35.7 15-73.2 25.3-111.6 30.6 3.5-.5 7.1-1 10.6-1.4a450.3 450.3 0 0 1-119.4 0c3.5.5 7.1 1 10.6 1.4-38.5-5.2-76-15.5-111.7-30.5 3.2 1.3 6.4 2.7 9.6 4-34.8-14.8-67.6-34-97.6-57.1l8.1 6.3c-29.7-23-56.4-49.8-79.5-79.5l6.3 8.1c-23.1-30-42.3-62.8-57.1-97.6 1.3 3.2 2.7 6.4 4 9.6-15-35.7-25.3-73.2-30.6-111.6.5 3.5 1 7.1 1.4 10.6a450.3 450.3 0 0 1 0-119.4c-.5 3.5-1 7.1-1.4 10.6 5.3-38.4 15.5-75.9 30.6-111.6-1.3 3.2-2.7 6.4-4 9.6 14.8-34.8 34-67.6 57.1-97.6l-6.3 8.1c23-29.7 49.8-56.4 79.5-79.5l-8.1 6.3c30-23.1 62.8-42.3 97.6-57.1-3.2 1.3-6.4 2.7-9.6 4 35.7-15 73.2-25.3 111.6-30.6-3.5.5-7.1 1-10.6 1.4 39.6-5.3 79.8-5.3 119.4 0-3.5-.5-7.1-1-10.6-1.4 38.4 5.3 75.9 15.5 111.6 30.6-3.2-1.3-6.4-2.7-9.6-4 34.8 14.8 67.6 34 97.6 57.1l-8.1-6.3c29.7 23 56.4 49.8 79.5 79.5l-6.3-8.1c23.1 30 42.3 62.8 57.1 97.6-1.3-3.2-2.7-6.4-4-9.6 15 35.7 25.3 73.2 30.6 111.6-.5-3.5-1-7.1-1.4-10.6 2.7 19.7 4 39.6 4 59.6 0 20.9 18.4 41 40 40s40-17.6 40-40c-.1-49.6-7.6-99.8-22.9-146.9-14.8-45.6-36.2-89.4-64-128.5-14.6-20.5-30.6-40.3-48.1-58.5-17.6-18.2-36.8-34.5-56.9-49.9-38-29.1-80.5-51.4-125.3-67.9-46.3-17.1-95.9-26.1-145.2-28.1-49.8-2-100.5 4.1-148.5 17.7-46.1 13.1-90.9 33.3-131 59.7-39.7 26.1-76 57.8-106.2 94.4-16.1 19.5-31.1 40-44.1 61.7-13.2 21.9-24 45-33.7 68.6-18.8 45.7-29.2 94.3-33 143.4-3.8 49.7.7 100.4 12.5 148.9C57 673.3 75.9 718.9 100.8 760c24.6 40.5 55.3 78 90.8 109.5 35.7 31.7 75.7 58.7 119.2 78.4 23.5 10.6 47.5 19.9 72.3 26.8 25.4 7.1 51.3 11.5 77.4 14.5 50 5.8 100.9 2.8 150.2-7.3 47.3-9.6 93.5-27.2 135.6-50.7 41.2-23 79.4-52.6 112.1-86.7 32.8-34.3 61.2-73.7 82.3-116.3 21.7-43.6 37.5-90.2 44.9-138.4 4-25.8 6.5-51.7 6.5-77.8 0-20.9-18.4-41-40-40-21.7 1-39.9 17.6-40 40z"}),Object(a.c)("path",{d:"M512 187.7v648.6c-179.1 0-324-145.2-324-324.3s144.9-324.3 324-324.3z"}),Object(a.c)("path",{d:"M482 187.7v569c0 26.2-.6 52.4 0 78.6v1.1l30-30c-14.4 0-28.8-1-43.1-2.8 2.7.4 5.3.7 8 1.1-28.6-3.9-56.5-11.5-83.1-22.6l7.2 3c-15-6.4-29.5-13.9-43.4-22.4-6.7-4.1-13.3-8.5-19.7-13.1-1.6-1.2-3.2-2.3-4.8-3.5-.8-.6-2.1-1.2-2.6-2-.1-.1 6.4 5.1 3 2.3-3.2-2.6-6.5-5.2-9.6-7.9-12.1-10.3-23.5-21.5-34.1-33.5-2.6-3-5.1-6-7.6-9-1.1-1.4-2.2-2.7-3.3-4.1-.5-.7-1.1-1.4-1.6-2.1 6.1 7.7 2.9 3.7 1.5 1.9-4.9-6.5-9.5-13.1-13.8-20-9.9-15.4-18.4-31.7-25.5-48.5l3 7.2c-11.2-26.6-18.8-54.5-22.6-83.1.4 2.7.7 5.3 1.1 8-3.7-28.6-3.7-57.6 0-86.2-.4 2.7-.7 5.3-1.1 8 3.9-28.6 11.4-56.5 22.6-83.1l-3 7.2c6.4-15 13.8-29.6 22.4-43.5 4.1-6.7 8.5-13.3 13.1-19.7 1.1-1.6 2.3-3.2 3.5-4.8.5-.7 1.2-2.2 2-2.6.1-.1-5 6.4-2.3 3 2.6-3.3 5.2-6.5 7.9-9.7 10.3-12.2 21.5-23.6 33.4-34.1 3-2.6 5.9-5.1 9-7.6 1.4-1.1 2.7-2.2 4.1-3.3.7-.5 1.4-1.1 2.1-1.6-7.6 6.1-3.7 2.9-1.9 1.5 6.5-4.9 13.1-9.5 19.9-13.9 15.4-9.9 31.6-18.4 48.4-25.6l-7.2 3c26.6-11.2 54.5-18.8 83.1-22.6-2.7.4-5.3.7-8 1.1 14.3-1.9 28.7-2.8 43.1-2.8 15.7 0 30.7-13.8 30-30-.7-16.2-13.2-30-30-30-72.2.2-144.6 22.3-203.4 64.4-59.5 42.6-104.5 101.2-129.7 170-25.2 68.6-27.5 146.1-7.6 216.3C190.5 676.5 230.6 739.1 285 784c57.5 47.4 126.9 75.7 201.2 81.6 8.6.7 17.3 1 25.9 1 16.2 0 30-13.8 30-30v-64.5-155-187.5-162c0-26.2.5-52.4 0-78.6v-1.1c0-15.7-13.8-30.7-30-30-16.4.5-30.1 13-30.1 29.8z"}))))))}},bmMU:function(t,e,n){n("SRfc"),n("RW0V"),n("a1Th"),n("h7Nl"),n("OEbY"),n("Oyvg"),n("LK8F"),n("T39b"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn");var r="undefined"!=typeof Element,o="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=n.length)return!1;for(u=c;0!=u--;)if(!t(e[u],n[u]))return!1;return!0}if(o&&e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!n.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!t(u.value[1],n.get(u.value[0])))return!1;return!0}if(a&&e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!n.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(n)){if((c=e.length)!=n.length)return!1;for(u=c;0!=u--;)if(e[u]!==n[u])return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(n,s[u]))return!1;if(r&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!t(e[s[u]],n[s[u]]))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},qhky:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return ht}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,o,a,i,c=n("17x9"),u=n.n(c),s=n("8+s/"),l=n.n(s),f=n("bmMU"),p=n.n(f),d=n("q1tI"),b=n.n(d),h=n("MgzW"),y=n.n(h),m="bodyAttributes",g="htmlAttributes",v="titleAttributes",O={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(O).map((function(t){return O[t]})),"charset"),w="cssText",j="href",S="http-equiv",A="innerHTML",x="itemprop",C="name",E="property",k="rel",P="src",I="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",R="defer",z="encodeSpecialCharacters",N="onChangeClientState",q="titleTemplate",H=Object.keys(M).reduce((function(t,e){return t[M[e]]=e,t}),{}),D=[O.NOSCRIPT,O.SCRIPT,O.STYLE],B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},U=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},W=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},Y=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},K=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(t){var e=Z(t,O.TITLE),n=Z(t,q);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=Z(t,L);return e||r||void 0},J=function(t){return Z(t,N)||function(){}},X=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return _({},t,e)}),{})},G=function(t,e){return e.filter((function(t){return void 0!==t[O.BASE]})).map((function(t){return t[O.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==t.indexOf(a)&&n[a])return e.concat(n)}return e}),[])},Q=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+B(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,a=Object.keys(t),i=0;i<a.length;i++){var c=a[i],u=c.toLowerCase();-1===e.indexOf(u)||n===k&&"canonical"===t[n].toLowerCase()||u===k&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(c)||c!==A&&c!==w&&c!==x||(n=c)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],u=y()({},r[c],o[c]);r[c]=u}return t}),[]).reverse()},Z=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},$=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){$(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:t.requestAnimationFrame||$,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:t.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,at=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,s=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;ut(O.BODY,r),ut(O.HTML,o),ct(f,p);var d={baseTag:st(O.BASE,n),linkTags:st(O.LINK,a),metaTags:st(O.META,i),noscriptTags:st(O.NOSCRIPT,c),scriptTags:st(O.SCRIPT,s),styleTags:st(O.STYLE,l)},b={},h={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(b[t]=n),r.length&&(h[t]=d[t].oldTags)})),e&&e(),u(t,b,h)},it=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=it(t)),ut(O.TITLE,e)},ut=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(e),c=0;c<i.length;c++){var u=i[c],s=e[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=a.indexOf(u);-1!==l&&a.splice(l,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},st=function(t,e){var n=document.head||document.querySelector(O.HEAD),r=n.querySelectorAll(t+"[data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===A)n.innerHTML=e.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(t,e){return i=e,n.isEqualNode(t)}))?o.splice(i,1):a.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),a.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:a}},lt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[M[n]||n]=t[n],e}),e)},pt=function(t,e,n){switch(t){case O.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})["data-react-helmet"]=!0,o=ft(n,r),[b.a.createElement(O.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=lt(n),a=it(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+K(a,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+K(a,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case m:case g:return{toComponent:function(){return ft(e)},toString:function(){return lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(e).forEach((function(t){var n=M[t]||t;if(n===A||n===w){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),b.a.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===A||t===w)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+K(r[e],n)+'"';return t?t+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===D.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+t+">")}),"")}(t,e,n)}}}},dt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,c=t.noscriptTags,u=t.scriptTags,s=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:pt(O.BASE,e,r),bodyAttributes:pt(m,n,r),htmlAttributes:pt(g,o,r),link:pt(O.LINK,a,r),meta:pt(O.META,i,r),noscript:pt(O.NOSCRIPT,c,r),script:pt(O.SCRIPT,u,r),style:pt(O.STYLE,s,r),title:pt(O.TITLE,{title:f,titleAttributes:p},r)}},bt=l()((function(t){return{baseTag:G([j,I],t),bodyAttributes:X(m,t),defer:Z(t,R),encode:Z(t,z),htmlAttributes:X(g,t),linkTags:Q(O.LINK,[k,j],t),metaTags:Q(O.META,[C,T,S,E,x],t),noscriptTags:Q(O.NOSCRIPT,[A],t),onChangeClientState:J(t),scriptTags:Q(O.SCRIPT,[P,A],t),styleTags:Q(O.STYLE,[w],t),title:V(t),titleAttributes:X(v,t)}}),(function(t){ot&&nt(ot),t.defer?ot=et((function(){at(t,(function(){ot=null}))})):(at(t),ot=null)}),dt)((function(){return null})),ht=(o=bt,i=a=function(t){function e(){return F(this,e),Y(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case O.SCRIPT:case O.NOSCRIPT:return{innerHTML:e};case O.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,a=t.nestedChildren;return _({},r,((e={})[n.type]=[].concat(r[n.type]||[],[_({},o,this.mapNestedChildrenToProps(n,a))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,a=t.newChildProps,i=t.nestedChildren;switch(r.type){case O.TITLE:return _({},o,((e={})[r.type]=i,e.titleAttributes=_({},a),e));case O.BODY:return _({},o,{bodyAttributes:_({},a)});case O.HTML:return _({},o,{htmlAttributes:_({},a)})}return _({},o,((n={})[r.type]=_({},a),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=_({},e);return Object.keys(t).forEach((function(e){var r;n=_({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return b.a.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,a=o.children,i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[H[n]||n]=t[n],e}),e)}(W(o,["children"]));switch(n.warnOnInvalidChildren(t,a),t.type){case O.LINK:case O.META:case O.NOSCRIPT:case O.SCRIPT:case O.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:i,nestedChildren:a})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=W(t,["children"]),r=_({},n);return e&&(r=this.mapChildrenToProps(e,r)),b.a.createElement(o,r)},U(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(b.a.Component),a.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var t=o.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},i);ht.renderStatic=ht.rewind}).call(this,n("yLpj"))},voR5:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("0sEd"),o=function(){return r.data.site.siteMetadata}}}]);
//# sourceMappingURL=commons-9d29cfbb739b845a5f97.js.map