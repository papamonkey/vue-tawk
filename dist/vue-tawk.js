!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-tawk",[],e):"object"==typeof exports?exports["vue-tawk"]=e():t["vue-tawk"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=0)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={},i=function(){return!!window.Tawk_API};n.install=function(t,e){t.prototype.$Tawk={},t.prototype.$Tawk.$startChat=function(){var t={},o=(new Date,document.createElement("script")),n=document.getElementsByTagName("script")[0];o.async=!0,o.src=e.tawkSrc,o.charset="UTF-8",o.setAttribute("crossorigin","*"),n.parentNode.insertBefore(o,n),window.Tawk_API=t},t.prototype.$Tawk.$updateChatUser=function(t){i()&&t&&window.Tawk_API.setAttributes({name:t.name,email:t.email,hash:t.hash},function(t){t&&console.log(t)})},t.prototype.$Tawk.$endChat=function(){window.Tawk_API.endChat()},t.prototype.$Tawk.$isInit=function(){return i()},t.prototype.$Tawk.$toggle=function(){i()&&window.Tawk_API.toggle()},t.prototype.$Tawk.$maximize=function(){i()&&window.Tawk_API.maximize()},t.prototype.$Tawk.$minimize=function(){i()&&window.Tawk_API.minimize()},t.prototype.$Tawk.$toggleVisibility=function(){i()&&window.Tawk_API.toggleVisibility()},t.prototype.$Tawk.$popup=function(){i()&&window.Tawk_API.popup()},t.prototype.$Tawk.$hideWidget=function(){i()&&window.Tawk_API.hideWidget()},t.prototype.$Tawk.$showWidget=function(){i()&&window.Tawk_API.showWidget()},t.prototype.$Tawk.$onChatStarted=function(t){i()&&(window.Tawk_API.onChatStarted=t)},t.prototype.$Tawk.$onChatEnded=function(t){i()&&(window.Tawk_API.onChatEnded=t)},t.prototype.$Tawk.$onChatHidden=function(t){i()&&(window.Tawk_API.onChatHidden=t)},t.prototype.$Tawk.$onChatMinimized=function(t){i()&&(window.Tawk_API.onChatMinimized=t)}},e.default=n}])});
//# sourceMappingURL=vue-tawk.js.map