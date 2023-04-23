(function(){"use strict";var e={5819:function(e,t,n){var r=n(9242),o=n(3396);function a(e,t,n,r,a,i){const u=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(u)}n(7658);var i=n(2483);const u=e=>((0,o.dD)("data-v-43c36b1c"),e=e(),(0,o.Cn)(),e),c={class:"home"},s=u((()=>(0,o._)("i",{class:"fa fa-home"},null,-1))),f=u((()=>(0,o._)("span",null,"Smart Home",-1))),d=[s,f],l=(0,o.uE)('<div class="feature feature-2 disabled" data-v-43c36b1c><i class="fa fa-question" data-v-43c36b1c></i><span data-v-43c36b1c>Feature 2</span></div><div class="feature feature-3 disabled" data-v-43c36b1c><i class="fa fa-question" data-v-43c36b1c></i><span data-v-43c36b1c>Feature 3</span></div><div class="feature feature-4 disabled" data-v-43c36b1c><i class="fa fa-question" data-v-43c36b1c></i><span data-v-43c36b1c>Feature 4</span></div>',3);function v(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("div",{class:"feature feature-1 smart-home",onClick:t[0]||(t[0]=(...e)=>i.navigateToSmartHome&&i.navigateToSmartHome(...e))},d),l])}var m={methods:{navigateToSmartHome(){this.$router.push("/smartHome")}}},p=n(89);const h=(0,p.Z)(m,[["render",v],["__scopeId","data-v-43c36b1c"]]);var b=h;function g(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("h1",null,"This is my TechWaveApp")}var y={name:"TechWave"};const w=(0,p.Z)(y,[["render",g]]);var k=w;const S=[{path:"/HomeView",name:"HomeView",component:b},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7381))},{path:"/",name:"techWave",component:k},{path:"/smartHome",name:"smartHome",component:()=>n.e(443).then(n.bind(n,3953))},{path:"/lightsControl",name:"lightsControl",component:()=>n.e(443).then(n.bind(n,8093))}],O=(0,i.p7)({history:(0,i.PO)("/"),routes:S});var C=O,T=n(5617),_={components:{},data(){return{ws:null,buffer:null}},mounted(){(0,T.n7)((e=>{this.buffer=e,console.log("Received message: ",e)})),this.homePage()},methods:{sendMessageToWebSocket(e){(0,T.NX)(e)},closeWebSocket(){(0,T.oi)()},homePage(){this.$router.push("/HomeView")}},router:C};const j=(0,p.Z)(_,[["render",a]]);var E=j,N=n(65),H=(0,N.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(E).use(H).use(C).mount("#app")},5617:function(e,t,n){n.d(t,{NX:function(){return o},n7:function(){return a},oi:function(){return i}});const r=new WebSocket("wss://bf7f-2a01-e0a-c0-8960-7407-d319-947a-1277.eu.ngrok.io");function o(e){r.readyState===WebSocket.OPEN&&r.send(JSON.stringify(e))}function a(e){r.onmessage=function(t){e(t.data)}}function i(){r.close()}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],a=e[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.b10e6074.js"}}(),function(){n.miniCssF=function(e){return"css/about.aba3ce75.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="tech-wave-app:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var d=s[f];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var l=function(t,n){u.onerror=u.onload=null,clearTimeout(v);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},v=setTimeout(l.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=l.bind(null,u.onerror),u.onload=l.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,a.parentNode&&a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,null,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={443:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var f=c(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(f)},r=self["webpackChunktech_wave_app"]=self["webpackChunktech_wave_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5819)}));r=n.O(r)})();
//# sourceMappingURL=app.11ad95fb.js.map