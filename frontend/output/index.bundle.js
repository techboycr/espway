!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}([function(e,t,n){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=l[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(c(r.parts[o],t))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(c(r.parts[o],t));l[r.id]={id:r.id,refs:1,parts:a}}}}function r(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],a=i[1],s=i[2],c=i[3],f={css:a,media:s,sourceMap:c};n[o]?n[o].parts.push(f):t.push(n[o]={id:o,parts:[f]})}return t}function i(e,t){var n=v(),r=m[m.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function c(e,t){var n,r,i;if(t.singleton){var c=b++;n=g||(g=a(t)),r=f.bind(null,n,c,!1),i=f.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=d.bind(null,n),i=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=u.bind(null,n),i=function(){o(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function f(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function u(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var l={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=p(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,b=0,m=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var i=r(e);return n(i,t),function(e){for(var o=[],a=0;a<i.length;a++){var s=i[a],c=l[s.id];c.refs--,o.push(c)}if(e){var f=r(e);n(f,t)}for(var a=0;a<o.length;a++){var c=o[a];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete l[c.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},,,function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]);n(1)(r,{});r.locals&&(e.exports=r.locals)},,function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"body,html{margin:0;padding:0;text-align:center}body,button{background-color:#fff;color:#334;font-family:monospace}#joystick{margin:0 auto;width:310px;height:310px;display:block;border:2px solid #334;border-radius:10px;background:-webkit-radial-gradient(circle closest-side,#fff,#ccd);background:radial-gradient(circle closest-side,#fff,#ccd)}h1{text-align:center;font-size:2rem}#tiltBtn{margin-top:1em;font-size:1.5rem;padding:1em 0;width:310px;border-radius:.5em;border-style:none;display:none;color:#fff;font-weight:700}#heading{width:310px;margin:1em auto;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:baseline;align-items:baseline}.largetxt{font-size:2em}",""])},,,,function(e,t,n){"use strict";n(4),window.addEventListener("load",function(){function e(){s.innerText=U?"☑ Tilt control":"☐ Tilt control",s.style.backgroundColor=U?"#0bf":"#ddd"}function t(){U?(y=E/20,w=-k/20):v||h?(y=b-f.offsetLeft-d/2,w=l/2-(m-f.offsetTop),y/=d/2,w/=l/2):(y=0,w=0),y=Math.min(Math.max(y,-1),1),w=Math.min(Math.max(w,-1),1)}function n(e,t){if(1===a.readyState){var n=new DataView(new ArrayBuffer(3));n.setUint8(0,0),n.setInt8(1,127*e),n.setInt8(2,127*t),a.send(n.buffer)}}function r(){t(),p.lineWidth=10,p.clearRect(0,0,d,l),p.beginPath(),p.moveTo(d/2,l/2),p.lineTo(e,n),p.stroke();var e=(x+1)/2*d,n=(-L+1)/2*l;j&&(p.fillStyle="#aaa",p.beginPath(),p.arc(e,n,15,0,2*Math.PI),p.fill()),e=(y+1)/2*d,n=(-w+1)/2*l,p.fillStyle="red",p.lineWidth=2,p.beginPath(),p.arc(e,n,15,0,2*Math.PI),p.fill(),p.stroke(),window.requestAnimationFrame(r)}function i(){a.send(new Uint8Array([1]).buffer)}var o=function(e){return document.getElementById(e)},a=new WebSocket("ws://"+window.location.host+"/ws");a.binaryType="arraybuffer",a.addEventListener("open",i);var s=o("tiltBtn"),c=o("battery"),f=o("joystick"),u=window.devicePixelRatio,d=f.clientWidth,l=f.clientHeight;f.width=d*u,f.height=l*u;var p=f.getContext("2d");p.lineWidth=10,p.strokeStyle="black",p.fillStyle="red",p.scale(u,u);var h=!1,v=!1,g=null,b=0,m=0,y=0,w=0,x=0,L=0,k=0,E=0,T=!1,U=!1,j=!1,R=function(e,t){for(var n=0;n<e.length;++n)if(e[n].identifier===t)return e[n];return null};a.addEventListener("message",function(e){var t=new DataView(e.data),n=t.getUint8(0);if(3===n&&3===e.data.byteLength){var r=t.getInt16(1,!0)/100;c.innerText=r.toFixed(2)}else 2===n&&7===e.data.byteLength&&(j=!0,x=-t.getInt16(3,!0)/32768,L=-t.getInt16(5,!0)/32768,i())});var C=!0;try{var M=Object.defineProperty({},"passive",{get:function(){C={capture:!0,passive:!1}}});window.addEventListener("test",null,M)}catch(e){}f.addEventListener("mousedown",function(e){h=!0,b=e.pageX,m=e.pageY},C),window.addEventListener("mousemove",function(e){h&&(b=e.pageX,m=e.pageY)},C),window.addEventListener("mouseup",function(e){h=!1},C),f.addEventListener("touchstart",function(e){g=e.changedTouches[0].identifier,b=e.changedTouches[0].pageX,m=e.changedTouches[0].pageY,v=!0},C),window.addEventListener("touchend",function(e){v&&null!==R(e.changedTouches,g)&&(v=!1)},C),window.addEventListener("touchmove",function(e){var t=R(e.changedTouches,g);v&&null!==t&&(b=t.pageX,m=t.pageY),e.preventDefault()},C),window.addEventListener("deviceorientation",function(t){null!==t.beta&&null!==t.gamma&&(T||(T=!0,s.style.display="inline",e()),k=t.beta,E=t.gamma)}),s.addEventListener("click",function(){U=!U,e()}),window.setInterval(function(){n(y,w)},100),window.requestAnimationFrame(r)})}]);