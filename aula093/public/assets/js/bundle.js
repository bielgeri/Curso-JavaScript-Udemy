(()=>{"use strict";var r={122:(r,n,t)=>{t.d(n,{Z:()=>c});var e=t(537),o=t.n(e),i=t(645),a=t.n(i)()(o());a.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap);"]),a.push([r.id,":root {\r\n    --primary-color: rgba(35, 68, 99, 0.836);\r\n    --primary-color-dark: rgb(17, 45, 71, 0.836);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: none;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: var(--primary-color);\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background-color: #fff;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0  20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    height: 50px;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background-color: var(--primary-color-dark);\r\n}\r\n\r\n.container h1 {\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.cpf-gerado {\r\n    font-size: 2em;\r\n    color: var(--primary-color);\r\n    text-align: center;\r\n    font-weight: bold;\r\n    margin-bottom: 40px;\r\n    letter-spacing: 2px;\r\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;IACI,wCAAwC;IACxC,4CAA4C;AAChD;;AAEA;IACI,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sCAAsC;IACtC,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,YAAY;IACZ,sCAAsC;IACtC,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,2BAA2B;IAC3B,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;AACvB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');\r\n\r\n:root {\r\n    --primary-color: rgba(35, 68, 99, 0.836);\r\n    --primary-color-dark: rgb(17, 45, 71, 0.836);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: none;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: var(--primary-color);\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background-color: #fff;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0  20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    height: 50px;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background-color: var(--primary-color-dark);\r\n}\r\n\r\n.container h1 {\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.cpf-gerado {\r\n    font-size: 2em;\r\n    color: var(--primary-color);\r\n    text-align: center;\r\n    font-weight: bold;\r\n    margin-bottom: 40px;\r\n    letter-spacing: 2px;\r\n}"],sourceRoot:""}]);const c=a},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var t="",e=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),e&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=r(n),e&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(r,t,e,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(e)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<r.length;s++){var l=[].concat(r[s]);e&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},537:r=>{r.exports=function(r){var n=r[1],t=r[3];if(!t)return n;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),i="/*# ".concat(o," */");return[n].concat([i]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function t(r){for(var t=-1,e=0;e<n.length;e++)if(n[e].identifier===r){t=e;break}return t}function e(r,e){for(var i={},a=[],c=0;c<r.length;c++){var u=r[c],s=e.base?u[0]+e.base:u[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var f=t(p),A={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)n[f].references++,n[f].updater(A);else{var m=o(A,e);e.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(r,n){var t=n.domAPI(n);return t.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;t.update(r=n)}else t.remove()}}r.exports=function(r,o){var i=e(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var u=e(r,o),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=u}}},569:r=>{var n={};r.exports=function(r,t){var e=function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(r){t=null}n[r]=t}return n[r]}(r);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,t)=>{r.exports=function(r){var n=t.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(t){!function(r,n,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,o&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(e,r,n.options)}(n,r,t)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,exports:{}};return r[e](i,i.exports,t),i.exports}t.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return t.d(n,{a:n}),n},t.d=(r,n)=>{for(var e in n)t.o(n,e)&&!t.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},t.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),t.nc=void 0,(()=>{function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},r(n)}function n(r,n){(null==n||n>r.length)&&(n=r.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=r[t];return e}function e(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,(void 0,i=function(n,t){if("object"!==r(n)||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var o=e.call(n,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var o=function(){function r(n){!function(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),Object.defineProperty(this,"cpfLimpo",{writable:!1,enumerable:!0,configurable:!1,value:n.replace(/\D+/g,"")})}var t,o,i;return t=r,i=[{key:"geraDigito",value:function(r){var t,e=0,o=r.length+1,i=function(r,t){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!e){if(Array.isArray(r)||(e=function(r,t){if(r){if("string"==typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}}(r))||t&&r&&"number"==typeof r.length){e&&(r=e);var o=0,i=function(){};return{s:i,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(r){throw r},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){e=e.call(r)},n:function(){var r=e.next();return c=r.done,r},e:function(r){u=!0,a=r},f:function(){try{c||null==e.return||e.return()}finally{if(u)throw a}}}}(r);try{for(i.s();!(t=i.n()).done;){var a=t.value;e+=o*Number(a),o--}}catch(r){i.e(r)}finally{i.f()}var c=11-e%11;return c<=9?String(c):"0"}}],(o=[{key:"éSequencia",value:function(){return this.cpfLimpo.charAt(0).repeat(11)===this.cpfLimpo}},{key:"geraNovoCpf",value:function(){var n=this.cpfLimpo.slice(0,-2),t=r.geraDigito(n),e=r.geraDigito(n+t);this.novoCPF=n+t+e}},{key:"valida",value:function(){return!!this.cpfLimpo&&"string"==typeof this.cpfLimpo&&11===this.cpfLimpo.length&&!this.éSequencia()&&(this.geraNovoCpf(),this.novoCPF===this.cpfLimpo)}}])&&e(t.prototype,o),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),r}();function i(r){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},i(r)}function a(r,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,(void 0,o=function(r,n){if("object"!==i(r)||null===r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var e=t.call(r,"string");if("object"!==i(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),"symbol"===i(o)?o:String(o)),e)}var o}console.log("cheguei aqui!"),new o("070.987.720-03");var c,u=function(){function r(){!function(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r)}var n,t;return n=r,t=[{key:"rand",value:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.floor(Math.random()*(n-r)+r))}},{key:"formatado",value:function(r){return r.slice(0,3)+"."+r.slice(3,6)+"."+r.slice(6,9)+"-"+r.slice(9,11)}},{key:"geraNovoCPF",value:function(){var r=this.rand(),n=o.geraDigito(r),t=r+n+o.geraDigito(r+n);return this.formatado(t)}}],t&&a(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),r}(),s=t(379),l=t.n(s),p=t(795),f=t.n(p),A=t(569),m=t.n(A),d=t(565),v=t.n(d),g=t(216),y=t.n(g),b=t(589),h=t.n(b),C=t(122),I={};I.styleTagTransform=h(),I.setAttributes=v(),I.insert=m().bind(null,"head"),I.domAPI=f(),I.insertStyleElement=y(),l()(C.Z,I),C.Z&&C.Z.locals&&C.Z.locals,c=new u,document.querySelector(".cpf-gerado").innerHTML=c.geraNovoCPF()})()})();
//# sourceMappingURL=bundle.js.map