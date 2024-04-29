(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3809],{74150:(t,e,n)=>{"use strict";var o=n(31725),r={};function i(t,e,n,o,r,i,a,s){if(!t){var p;if(void 0===e)p=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,r,i,a,s],u=0;(p=new Error(e.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw p.framesToPop=1,p}}var a="mixins";t.exports=function(t,e,n){var s=[],p={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},c={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},u={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)f(t,e[n])},childContextTypes:function(t,e){t.childContextTypes=o({},t.childContextTypes,e)},contextTypes:function(t,e){t.contextTypes=o({},t.contextTypes,e)},getDefaultProps:function(t,e){t.getDefaultProps?t.getDefaultProps=E(t.getDefaultProps,e):t.getDefaultProps=e},propTypes:function(t,e){t.propTypes=o({},t.propTypes,e)},statics:function(t,e){!function(t,e){if(!e)return;for(var n in e){var o=e[n];if(e.hasOwnProperty(n)){if(i(!(n in u),'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n),n in t)return i("DEFINE_MANY_MERGED"===(c.hasOwnProperty(n)?c[n]:null),"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(t[n]=E(t[n],o));t[n]=o}}}(t,e)},autobind:function(){}};function l(t,e){var n=p.hasOwnProperty(e)?p[e]:null;_.hasOwnProperty(e)&&i("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",e),t&&i("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",e)}function f(t,n){if(n){i("function"!==typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),i(!e(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=t.prototype,r=o.__reactAutoBindPairs;for(var s in n.hasOwnProperty(a)&&u.mixins(t,n.mixins),n)if(n.hasOwnProperty(s)&&s!==a){var c=n[s],f=o.hasOwnProperty(s);if(l(f,s),u.hasOwnProperty(s))u[s](t,c);else{var y=p.hasOwnProperty(s);if("function"===typeof c&&!y&&!f&&!1!==n.autobind)r.push(s,c),o[s]=c;else if(f){var d=p[s];i(y&&("DEFINE_MANY_MERGED"===d||"DEFINE_MANY"===d),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",d,s),"DEFINE_MANY_MERGED"===d?o[s]=E(o[s],c):"DEFINE_MANY"===d&&(o[s]=h(o[s],c))}else o[s]=c}}}else;}function y(t,e){for(var n in i(t&&e&&"object"===typeof t&&"object"===typeof e,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."),e)e.hasOwnProperty(n)&&(i(void 0===t[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),t[n]=e[n]);return t}function E(t,e){return function(){var n=t.apply(this,arguments),o=e.apply(this,arguments);if(null==n)return o;if(null==o)return n;var r={};return y(r,n),y(r,o),r}}function h(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function d(t,e){return e.bind(t)}var m={componentDidMount:function(){this.__isMounted=!0}},v={componentWillUnmount:function(){this.__isMounted=!1}},_={replaceState:function(t,e){this.updater.enqueueReplaceState(this,t,e)},isMounted:function(){return!!this.__isMounted}},N=function(){};return o(N.prototype,t.prototype,_),function(t){var e=function(t,o,a){this.__reactAutoBindPairs.length&&function(t){for(var e=t.__reactAutoBindPairs,n=0;n<e.length;n+=2){var o=e[n],r=e[n+1];t[o]=d(t,r)}}(this),this.props=t,this.context=o,this.refs=r,this.updater=a||n,this.state=null;var s=this.getInitialState?this.getInitialState():null;i("object"===typeof s&&!Array.isArray(s),"%s.getInitialState(): must return an object or null",e.displayName||"ReactCompositeComponent"),this.state=s};for(var o in e.prototype=new N,e.prototype.constructor=e,e.prototype.__reactAutoBindPairs=[],s.forEach(f.bind(null,e)),f(e,m),f(e,t),f(e,v),e.getDefaultProps&&(e.defaultProps=e.getDefaultProps()),i(e.prototype.render,"createClass(...): Class specification must implement a `render` method."),p)e.prototype[o]||(e.prototype[o]=null);return e}}},87197:(t,e,n)=>{var o=n(97009).Symbol;t.exports=o},68950:t=>{t.exports=function(t,e){for(var n=-1,o=null==t?0:t.length,r=Array(o);++n<o;)r[n]=e(t[n],n,t);return r}},39066:(t,e,n)=>{var o=n(87197),r=n(81587),i=n(43581),a=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?r(t):i(t)}},2646:t=>{t.exports=function(t,e,n){var o=-1,r=t.length;e<0&&(e=-e>r?0:r+e),(n=n>r?r:n)<0&&(n+=r),r=e>n?0:n-e>>>0,e>>>=0;for(var i=Array(r);++o<r;)i[o]=t[o+e];return i}},2446:(t,e,n)=>{var o=n(87197),r=n(68950),i=n(93629),a=n(70152),s=o?o.prototype:void 0,p=s?s.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return r(e,t)+"";if(a(e))return p?p.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n}},31032:(t,e,n)=>{var o="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=o},31137:(t,e,n)=>{var o=n(12709)(Object.getPrototypeOf,Object);t.exports=o},81587:(t,e,n)=>{var o=n(87197),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,s=o?o.toStringTag:void 0;t.exports=function(t){var e=i.call(t,s),n=t[s];try{t[s]=void 0;var o=!0}catch(p){}var r=a.call(t);return o&&(e?t[s]=n:delete t[s]),r}},43581:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},12709:t=>{t.exports=function(t,e){return function(n){return t(e(n))}}},97009:(t,e,n)=>{var o=n(31032),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();t.exports=i},93629:t=>{var e=Array.isArray;t.exports=e},43141:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},93977:(t,e,n)=>{var o=n(39066),r=n(31137),i=n(43141),a=Function.prototype,s=Object.prototype,p=a.toString,c=s.hasOwnProperty,u=p.call(Object);t.exports=function(t){if(!i(t)||"[object Object]"!=o(t))return!1;var e=r(t);if(null===e)return!0;var n=c.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&p.call(n)==u}},70152:(t,e,n)=>{var o=n(39066),r=n(43141);t.exports=function(t){return"symbol"==typeof t||r(t)&&"[object Symbol]"==o(t)}},63518:(t,e,n)=>{var o=n(2446);t.exports=function(t){return null==t?"":o(t)}},81726:(t,e,n)=>{"use strict";var o=n(79047);function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function t(t,e,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},52007:(t,e,n)=>{t.exports=n(81726)()},79047:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=3809.e4e6ac2d.chunk.js.map