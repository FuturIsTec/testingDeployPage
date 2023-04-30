(function(){"use strict";var e={4454:function(e,t,n){var r=n(6369),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view",{attrs:{"id-to-page":e.idToPage,"update-id-to-page":e.updateIdToPage}})],1)},a=[],i=(n(7658),n(2631)),u=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("div",{staticClass:"feature feature-1 smart-home",on:{click:e.navigateToSmartHome}},[t("i",{staticClass:"fa fa-home"}),t("span",[e._v("Smart Home")])]),e._m(0),e._m(1),e._m(2)])},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"feature feature-2 disabled"},[t("i",{staticClass:"fa fa-question"}),t("span",[e._v("Feature 2")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"feature feature-3 disabled"},[t("i",{staticClass:"fa fa-question"}),t("span",[e._v("Feature 3")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"feature feature-4 disabled"},[t("i",{staticClass:"fa fa-question"}),t("span",[e._v("Feature 4")])])}],f={methods:{navigateToSmartHome(){this.$router.push("/smartHome")}}},c=f,l=n(1001),d=(0,l.Z)(c,u,s,!1,null,"43c36b1c",null),p=d.exports;r["default"].use(i.ZP);const m=[{path:"/HomeView",name:"HomeView",component:p},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,5399))},{path:"/smartHome",name:"smartHome",component:()=>n.e(443).then(n.bind(n,3620))},{path:"/lightsControl",name:"lightsControl",component:()=>n.e(443).then(n.bind(n,5086))},{path:"/temperatureRooms",name:"temperatureRooms",component:()=>n.e(443).then(n.bind(n,9665))}],h=new i.ZP({mode:"history",base:"/testingDeployPage/",routes:m});var v=h,g={data(){return{idToPage:"/HomeView"}},methods:{updateIdToPage(e){console.log("id page value:"+e),this.idToPage=e,this.$router.push(this.idToPage)}},mounted(){console.log("id page value:"+this.idToPage)},router:v},b=g,y=(0,l.Z)(b,o,a,!1,null,null,null),w=y.exports,C=n(707),_=n.n(C);n(8556);r["default"].use(_()),r["default"].config.productionTip=!1,new r["default"]({router:v,vuetify:new(_()),render:e=>e(w)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(c--,1);var f=o();void 0!==f&&(t=f)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.13f01a37.js"}}(),function(){n.miniCssF=function(e){return"css/about.09eb3c5a.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="techwaveapp:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,s;if(void 0!==a)for(var f=document.getElementsByTagName("script"),c=0;c<f.length;c++){var l=f[c];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+a){u=l;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/testingDeployPage/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,a.parentNode&&a.parentNode.removeChild(a),o(s)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,null,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={443:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],s=r[2],f=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var c=s(n)}for(t&&t(r);f<i.length;f++)a=i[f],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunktechwaveapp"]=self["webpackChunktechwaveapp"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4454)}));r=n.O(r)})();
//# sourceMappingURL=app.0e71590f.js.map