(()=>{"use strict";var e,t,r,n,o,a={933:(e,t,r)=>{r(452),r(985),r(234);var n=r(238);function o(){var e=document.getElementById("paket"),t=e.options[e.selectedIndex],r=parseInt(t.getAttribute("data-price"),10),n=document.getElementById("jumlah"),o=parseInt(n.value,10);if(isNaN(r)||isNaN(o)||o<=0)localStorage.setItem("totalHarga",0),document.getElementById("totalPrice").innerText="Rp. 0";else{var a=r*o;localStorage.setItem("totalHarga",a),document.getElementById("totalPrice").innerText="Rp. ".concat(a.toLocaleString())}}window.addEventListener("load",(function(){(0,n.A)()})),document.getElementById("bookingForm").addEventListener("submit",(function(e){e.preventDefault();var t={tanggal:document.getElementById("tanggal").value,paket:document.getElementById("paket").value,time:document.getElementById("time").value,jumlah:document.getElementById("jumlah").value};localStorage.setItem("bookingData",JSON.stringify(t)),window.location.href="pemesanan4.html"})),document.getElementById("paket").addEventListener("change",(function(){var e=document.getElementById("paket"),t=document.getElementById("time");"FullDay Tour"===e.value?t.innerHTML='<option value="2Days 1Night Tour">2Days 1Night Tour</option>':t.innerHTML='<option value="1Day Tour">1Day Tour</option>',o()})),document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("paket"),t=document.getElementById("jumlah");e.addEventListener("change",o),t.addEventListener("input",o),o()}))}},i={};function l(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,exports:{}};return a[e](r,r.exports,l),r.exports}l.m=a,e=[],l.O=(t,r,n,o)=>{if(!r){var a=1/0;for(c=0;c<e.length;c++){for(var[r,n,o]=e[c],i=!0,u=0;u<r.length;u++)(!1&o||a>=o)&&Object.keys(l.O).every((e=>l.O[e](r[u])))?r.splice(u--,1):(i=!1,o<a&&(a=o));if(i){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,n,o]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);l.r(o);var a={};t=t||[null,r({}),r([]),r(r)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,l.d(o,a),o},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,r)=>(l.f[r](e,t),t)),[])),l.u=e=>e+".bundle.js",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},o="purelipuran:",l.l=(e,t,r,a)=>{if(n[e])n[e].push(t);else{var i,u;if(void 0!==r)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var p=d[c];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==o+r){i=p;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",o+r),i.src=e),n[e]=[t];var s=(t,r)=>{i.onerror=i.onload=null,clearTimeout(m);var o=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},m=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),u&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={666:0};l.f.j=(t,r)=>{var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=l.p+l.u(t),i=new Error;l.l(a,(r=>{if(l.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[a,i,u]=r,d=0;if(a.some((t=>0!==e[t]))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);if(u)var c=u(l)}for(t&&t(r);d<a.length;d++)o=a[d],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(c)},r=self.webpackChunkpurelipuran=self.webpackChunkpurelipuran||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),l.nc=void 0;var u=l.O(void 0,[730,181,961,932,248,452,362,354,234],(()=>l(933)));u=l.O(u)})();
//# sourceMappingURL=pemesanan3.bundle.js.map