(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],l=0,b=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5de36b8d"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var s=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/the-notion/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5dfc":function(e,t,n){"use strict";n("ea6d")},"6c23":function(e,t,n){"use strict";n("a182")},a182:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={class:"top-row"},a={class:"bottom-row"};function c(e,t,n,c,i,u){var s=Object(r["u"])("router-view");return Object(r["n"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",o,[Object(r["e"])("div",null,[Object(r["e"])("img",{class:"left-drizzy tl",src:e.sadDrake,alt:"sad drake"},null,8,["src"])]),Object(r["e"])("div",null,[Object(r["e"])("img",{class:"tr",src:e.sadDrake,alt:"sad drake"},null,8,["src"])])]),Object(r["e"])(s),Object(r["e"])("div",a,[Object(r["e"])("div",null,[Object(r["e"])("img",{class:"left-drizzy bl",src:e.sadDrake,alt:"sad drake"},null,8,["src"])]),Object(r["e"])("div",null,[Object(r["e"])("img",{class:"br",src:e.sadDrake,alt:"sad drake"},null,8,["src"])])])],64)}var i=n("d4ec"),u=n("262e"),s=n("2caf"),l=n("9ab4"),d=n("d681"),b=n.n(d),f=n("ce1f"),p=function(e){Object(u["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.sadDrake=b.a,e}return n}(f["b"]);p=Object(l["a"])([Object(f["a"])({})],p);var v=p;n("6c23");v.render=c;var j=v;n("9483");n("d3b7"),n("3ca3"),n("ddb0");var h=n("6c02"),O=Object(r["z"])("data-v-3c44c630");Object(r["r"])("data-v-3c44c630");var m={class:"home"},y={class:"rainbow rainbow-text-animated"};Object(r["o"])();var g=O((function(e,t,n,o,a,c){return Object(r["n"])(),Object(r["d"])("div",m,[Object(r["e"])("h1",y,[Object(r["e"])("a",{class:"notion-link",href:e.notionLink,title:e.theNotion},"I guess that's just "+Object(r["w"])(e.theNotion),9,["href","title"])])])})),k=n("bee2"),w=(n("25f0"),function(e){Object(u["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return Object(k["a"])(n,[{key:"theNotion",get:function(){var e;return(null===(e=this.$route.query.q)||void 0===e?void 0:e.toString())||"the notion"}},{key:"notionLink",get:function(){return this.$route.query.q?"https://lmgtfy.app/?q=".concat(this.$route.query.q):"https://joeee.notion.site/The-notion-e3a037db2d20451085f48cd18027b461"}}]),n}(f["b"]));w=Object(l["a"])([Object(f["a"])({})],w);var P=w;n("5dfc");P.render=g,P.__scopeId="data-v-3c44c630";var q=P,x=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],_=Object(h["a"])({history:Object(h["b"])("/the-notion/"),routes:x}),S=_,z=n("5502"),D=Object(z["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(j).use(D).use(S).mount("#app")},d681:function(e,t,n){e.exports=n.p+"img/sad-drake.ebe52642.gif"},ea6d:function(e,t,n){}});
//# sourceMappingURL=app.22466cfa.js.map