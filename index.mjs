// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function i(o,d,m){var l,u,f;if(!t(o))throw new TypeError(s("0P346,G5",o));if(!r(d))throw new TypeError(s("0P32H,G6",d));return f=-1,e(l={},"next",(function(){var e;if(f+=1,u)return{done:!0};if((e=o.next()).done)return u=!0,e;return e=e.value,d.call(m,e,f),{value:e,done:!1}})),e(l,"return",(function(e){if(u=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),n&&r(o[n])&&e(l,n,(function(){return i(o[n](),d,m)})),l}export{i as default};
//# sourceMappingURL=index.mjs.map
