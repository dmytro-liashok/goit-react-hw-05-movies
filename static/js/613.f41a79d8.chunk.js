/*! For license information please see 613.f41a79d8.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[613],{1221:function(t,r,e){e.d(r,{Bu:function(){return g},Sf:function(){return E},Vd:function(){return L},Zp:function(){return Z},iK:function(){return j},iL:function(){return y},lf:function(){return m},oP:function(){return b},yL:function(){return w},zV:function(){return x}});var n,o,i,a,u,c,f,l,h,s,p=e(168),d=e(5867),v=e(6355),y=d.ZP.ul(n||(n=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 40px;\n"]))),g=d.ZP.li(o||(o=(0,p.Z)(["\n  padding: 25px;\n  box-shadow: 11px 8px 16px 3px rgba(0, 0, 0, 0.84);\n"]))),m=(0,d.ZP)(v.Xws)(i||(i=(0,p.Z)(["\n  width: 150px;\n  height: auto;\n"]))),w=d.ZP.ul(a||(a=(0,p.Z)([""]))),x=d.ZP.li(u||(u=(0,p.Z)(["\n  margin-bottom: 10px;\n"]))),b=d.ZP.img(c||(c=(0,p.Z)(["\n  width: 150px;\n  height: auto;\n"]))),L=d.ZP.h3(f||(f=(0,p.Z)([""]))),E=d.ZP.p(l||(l=(0,p.Z)([""]))),Z=d.ZP.div(h||(h=(0,p.Z)(["\n  display: flex;\n  gap: 25px;\n"]))),j=d.ZP.div(s||(s=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"])))},3613:function(t,r,e){e.r(r),e.d(r,{default:function(){return s}});var n=e(5861),o=e(9439),i=e(2791),a=e(7689),u=e(1324),c=e(1221),f=e(184);function l(){l=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(k){c=function(t,r,e){return t[r]=e}}function f(t,r,e,o){var i=r&&r.prototype instanceof p?r:p,a=Object.create(i.prototype),u=new _(o||[]);return n(a,"_invoke",{value:L(t,e,u)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(k){return{type:"throw",arg:k}}}t.wrap=f;var s={};function p(){}function d(){}function v(){}var y={};c(y,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(P([])));m&&m!==r&&e.call(m,i)&&(y=m);var w=v.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(r){c(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function o(n,i,a,u){var c=h(t[n],t,i);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"==typeof l&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):r.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return o("throw",t,a,u)}))}u(c.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function L(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=E(a,e);if(u){if(u===s)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=h(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}function E(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,E(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),s;var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,s;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,s):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,s)}function Z(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function P(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return d.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=c(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),c(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new b(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),c(w,u,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),s},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),s}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:P(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),s}},t}var h=(0,i.lazy)((function(){return e.e(169).then(e.bind(e,2169))}));function s(){var t=(0,i.useState)([]),r=(0,o.Z)(t,2),e=r[0],s=r[1],p=(0,a.UO)().movieId;return(0,i.useEffect)((function(){function t(){return(t=(0,n.Z)(l().mark((function t(){var r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.tx)(p);case 2:r=t.sent,s(r.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[p]),(0,f.jsxs)(f.Fragment,{children:[e&&(0,f.jsx)(c.iL,{children:e.map((function(t){return(0,f.jsx)(h,{review:t},t.id)}))}),0===(null===e||void 0===e?void 0:e.length)&&(0,f.jsx)("p",{children:(0,f.jsx)("b",{children:"Not found"})})]})}}}]);
//# sourceMappingURL=613.f41a79d8.chunk.js.map