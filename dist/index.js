"use strict";var g=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var m=g(function(w,f){
var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/assert-is-function/dist'),x=require('@stdlib/assert-is-iterator-like/dist'),u=require('@stdlib/symbol-iterator/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function c(t,r,v){var n,a,i;if(!x(t))throw new TypeError(s('0P346',t));if(!l(r))throw new TypeError(s('0P32H',r));return i=-1,n={},o(n,"next",d),o(n,"return",p),u&&l(t[u])&&o(n,u,q),n;function d(){var e;return i+=1,a?{done:!0}:(e=t.next(),e.done?(a=!0,e):(e=e.value,r.call(v,e,i),{value:e,done:!1}))}function p(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}}function q(){return c(t[u](),r,v)}}f.exports=c
});var y=m();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
