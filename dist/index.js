"use strict";var g=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var m=g(function(w,f){
var v=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/assert-is-function/dist'),x=require('@stdlib/assert-is-iterator-like/dist'),a=require('@stdlib/symbol-iterator/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function c(t,r,u){var n,i,o;if(!x(t))throw new TypeError(s('0P346',t));if(!l(r))throw new TypeError(s('0P32H',r));return o=-1,n={},v(n,"next",d),v(n,"return",p),a&&l(t[a])&&v(n,a,q),n;function d(){var e;return o+=1,i?{done:!0}:(e=t.next(),e.done?(i=!0,e):(e=e.value,r.call(u,e,o),{value:e,done:!1}))}function p(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function q(){return c(t[a](),r,u)}}f.exports=c
});var y=m();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
