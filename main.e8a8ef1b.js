parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){return r(t)||n(t)||a(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function r(t){if(Array.isArray(t))return c(t)}function o(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=a(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,c=!0,i=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){i=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw o}}}}function a(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var i=document.querySelector(".start"),l=document.querySelector("tbody"),s=document.querySelector(".game-score"),u={1:[],2:[],3:[],4:[]},f=0;function d(t){var e=s.textContent;C();var n={1:[],2:[],3:[],4:[]};y(n,t);var r={1:[],2:[],3:[],4:[]};h(n,r,t);for(var o=function(t){r[t+1].forEach(function(e,n){if(void 0!==e){var r=l.children[t].children[n];r.textContent="".concat(e),r.classList.add("field-cell--".concat(r.textContent))}})},a=0;a<4;a++)o(a);m(),v(e),g(),p()}function m(){2048==+s.textContent&&document.getElementsByClassName("message-win")[0].classList.remove("hidden")}function h(t,e,n){switch(n){case"ArrowLeft":for(var r=0;r<4;r++)e[r+1]=[t[r+1][0],t[r+1][1],t[r+1][2],t[r+1][3]];break;case"ArrowRight":for(var o=0;o<4;o++)e[o+1]=[t[o+1][t[o+1].length-4],t[o+1][t[o+1].length-3],t[o+1][t[o+1].length-2],t[o+1][t[o+1].length-1]];break;case"ArrowUp":for(var a=0;a<4;a++)e[a+1]=[t[1][a],t[2][a],t[3][a],t[4][a]];break;case"ArrowDown":for(var c=0;c<4;c++)e[4-c]=[t[1][t[1].length-1-c],t[2][t[2].length-1-c],t[3][t[3].length-1-c],t[4][t[4].length-1-c]]}}function y(t,e){if("ArrowUp"===e||"ArrowDown"===e)for(var n=function(e){t[e+1]=[u[1][e],u[2][e],u[3][e],u[4][e]].filter(function(t){return 0!==t}),t[e+1].forEach(function(n,r){Number(n)===Number(t[e+1][r+1])&&(t[e+1][r]="".concat(2*+n),s.textContent="".concat(+s.textContent+2*+n),t[e+1].splice(r+1,1))})},r=0;r<4;r++)n(r);if("ArrowLeft"===e||"ArrowRight"===e)for(var o=function(e){t[e+1]=u[e+1].filter(function(t){return 0!==t}),t[e+1].forEach(function(n,r){Number(n)===Number(t[e+1][r+1])&&(t[e+1][r+1]="".concat(2*+n),s.textContent="".concat(+s.textContent+2*+n),t[e+1].splice(r,1))})},a=0;a<4;a++)o(a)}function v(t){+s.textContent-t==0&&"0"===l.dataset.countEmplyCells.trim()&&document.querySelector(".message-lose").classList.remove("hidden")}function b(){l.hasAttribute("clickedStart")&&document.getElementsByClassName("message-win")[0].classList.add("hidden"),f=0,l.dataset.countEmplyCells="16",document.querySelector(".message-lose").classList.add("hidden"),i.classList.remove("start"),i.classList.add("restart"),i.textContent="Restart",document.querySelector(".message-start").classList.add("hidden"),l.setAttribute("clickedStart",!0),s.textContent="0",C(),g(),g(),p()}function C(){var t,e=o(l.children);try{for(e.s();!(t=e.n()).done;){var n,r=o(t.value.children);try{for(r.s();!(n=r.n()).done;){var a=n.value;a.classList.remove("field-cell--".concat(a.textContent)),a.textContent=""}}catch(c){r.e(c)}finally{r.f()}}}catch(c){e.e(c)}finally{e.f()}l.hasAttribute("clickedStart")||(s.textContent="0")}function g(){if("0"!==l.dataset.countEmplyCells.trim()){var t=l.children[w(0,4)].children[w(0,4)];if(t.textContent.length>0)return g();var e="2";if(1===w(1,10)||0===f)return f+=1,e="4",t.textContent="".concat(e),void t.classList.add("field-cell--".concat(e));t.textContent="".concat(e),t.classList.add("field-cell--".concat(e))}}function w(t,e){return Math.floor(Math.random()*(e-t)+t)}function p(){l.dataset.countEmplyCells="16";for(var e=1;e<=4;e++)u[e]=t(l.children[e-1].children).map(function(t){return t.textContent.length>0?(l.dataset.countEmplyCells="\n            ".concat(Number(l.dataset.countEmplyCells)-1,"\n          "),t.textContent):0})}l.dataset.countEmplyCells="16",i.addEventListener("click",function(t){b()}),document.body.addEventListener("keydown",function(t){if(l.hasAttribute("clickedStart"))switch(t.preventDefault(),t.code){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":d(t.code)}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e8a8ef1b.js.map