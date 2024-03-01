"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5417],{45417:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Q});var o=n(72791),r=n(79200),a=n(77581),s=n(2703),i=n(70188),c=n(46535),p=n(26666),l=function(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");var n={},o=(t||{}).decode||g,r=0;for(;r<e.length;){var a=e.indexOf("=",r);if(-1===a)break;var s=e.indexOf(";",r);if(-1===s)s=e.length;else if(s<a){r=e.lastIndexOf(";",a-1)+1;continue}var i=e.slice(r,a).trim();if(void 0===n[i]){var c=e.slice(a+1,s).trim();34===c.charCodeAt(0)&&(c=c.slice(1,-1)),n[i]=f(c,o)}r=s+1}return n},d=function(e,t,n){var o=n||{},r=o.encode||m;if("function"!==typeof r)throw new TypeError("option encode is invalid");if(!h.test(e))throw new TypeError("argument name is invalid");var a=r(t);if(a&&!h.test(a))throw new TypeError("argument val is invalid");var s=e+"="+a;if(null!=o.maxAge){var i=o.maxAge-0;if(isNaN(i)||!isFinite(i))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(i)}if(o.domain){if(!h.test(o.domain))throw new TypeError("option domain is invalid");s+="; Domain="+o.domain}if(o.path){if(!h.test(o.path))throw new TypeError("option path is invalid");s+="; Path="+o.path}if(o.expires){var c=o.expires;if(!function(e){return"[object Date]"===u.call(e)||e instanceof Date}(c)||isNaN(c.valueOf()))throw new TypeError("option expires is invalid");s+="; Expires="+c.toUTCString()}o.httpOnly&&(s+="; HttpOnly");o.secure&&(s+="; Secure");o.partitioned&&(s+="; Partitioned");if(o.priority){switch("string"===typeof o.priority?o.priority.toLowerCase():o.priority){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(o.sameSite){switch("string"===typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return s},u=Object.prototype.toString,h=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function g(e){return-1!==e.indexOf("%")?decodeURIComponent(e):e}function m(e){return encodeURIComponent(e)}function f(e,t){try{return t(e)}catch(n){return e}}function y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=b(e);if(!t.doNotParse)try{return JSON.parse(n)}catch(o){}return e}function b(e){return e&&"j"===e[0]&&":"===e[1]?e.substr(2):e}class _{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.update=()=>{if(!this.HAS_DOCUMENT_COOKIE)return;const e=this.cookies;this.cookies=l(document.cookie),this._checkChanges(e)};const n="undefined"===typeof document?"":document.cookie;this.cookies=function(e){return"string"===typeof e?l(e):"object"===typeof e&&null!==e?e:{}}(e||n),this.defaultSetOptions=t,this.HAS_DOCUMENT_COOKIE=function(){const e="undefined"===typeof global?void 0:global.TEST_HAS_DOCUMENT_COOKIE;return"boolean"===typeof e?e:"object"===typeof document&&"string"===typeof document.cookie}()}_emitChange(e){for(let t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)}_checkChanges(e){new Set(Object.keys(e).concat(Object.keys(this.cookies))).forEach((t=>{e[t]!==this.cookies[t]&&this._emitChange({name:t,value:y(this.cookies[t])})}))}_startPolling(){this.pollingInterval=setInterval(this.update,300)}_stopPolling(){this.pollingInterval&&clearInterval(this.pollingInterval)}get(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.doNotUpdate||this.update(),y(this.cookies[e],t)}getAll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.doNotUpdate||this.update();const t={};for(let n in this.cookies)t[n]=y(this.cookies[n],e);return t}set(e,t,n){n=n?Object.assign(Object.assign({},this.defaultSetOptions),n):this.defaultSetOptions;const o="string"===typeof t?t:JSON.stringify(t);this.cookies=Object.assign(Object.assign({},this.cookies),{[e]:o}),this.HAS_DOCUMENT_COOKIE&&(document.cookie=d(e,o,n)),this._emitChange({name:e,value:t,options:n})}remove(e,t){const n=t=Object.assign(Object.assign(Object.assign({},this.defaultSetOptions),t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=Object.assign({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=d(e,"",n)),this._emitChange({name:e,value:void 0,options:t})}addChangeListener(e){this.changeListeners.push(e),this.HAS_DOCUMENT_COOKIE&&1===this.changeListeners.length&&("object"===typeof window&&"cookieStore"in window?window.cookieStore.addEventListener("change",this.update):this._startPolling())}removeChangeListener(e){const t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1),this.HAS_DOCUMENT_COOKIE&&0===this.changeListeners.length&&("object"===typeof window&&"cookieStore"in window?window.cookieStore.removeEventListener("change",this.update):this._stopPolling())}}const S=o.createContext(new _),{Provider:w,Consumer:k}=S;o.Component;function v(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}"function"===typeof SuppressedError&&SuppressedError;var x,O={exports:{}},j={};O.exports=function(){if(x)return j;x=1;var e="function"===typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,r=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,i=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,p=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,u=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,f=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function _(e){if("object"===typeof e&&null!==e){var u=e.$$typeof;switch(u){case t:switch(e=e.type){case c:case p:case o:case a:case r:case d:return e;default:switch(e=e&&e.$$typeof){case i:case l:case g:case h:case s:return e;default:return u}}case n:return u}}}function S(e){return _(e)===p}return j.AsyncMode=c,j.ConcurrentMode=p,j.ContextConsumer=i,j.ContextProvider=s,j.Element=t,j.ForwardRef=l,j.Fragment=o,j.Lazy=g,j.Memo=h,j.Portal=n,j.Profiler=a,j.StrictMode=r,j.Suspense=d,j.isAsyncMode=function(e){return S(e)||_(e)===c},j.isConcurrentMode=S,j.isContextConsumer=function(e){return _(e)===i},j.isContextProvider=function(e){return _(e)===s},j.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===t},j.isForwardRef=function(e){return _(e)===l},j.isFragment=function(e){return _(e)===o},j.isLazy=function(e){return _(e)===g},j.isMemo=function(e){return _(e)===h},j.isPortal=function(e){return _(e)===n},j.isProfiler=function(e){return _(e)===a},j.isStrictMode=function(e){return _(e)===r},j.isSuspense=function(e){return _(e)===d},j.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===p||e===a||e===r||e===d||e===u||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===s||e.$$typeof===i||e.$$typeof===l||e.$$typeof===f||e.$$typeof===y||e.$$typeof===b||e.$$typeof===m)},j.typeOf=_,j}();var C=O.exports,T={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},I={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},N={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},D={};function E(e){return C.isMemo(e)?N:D[e.$$typeof]||T}D[C.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},D[C.Memo]=N;var P=Object.defineProperty,U=Object.getOwnPropertyNames,B=Object.getOwnPropertySymbols,$=Object.getOwnPropertyDescriptor,L=Object.getPrototypeOf,M=Object.prototype;var A=function e(t,n,o){if("string"!==typeof n){if(M){var r=L(n);r&&r!==M&&e(t,r,o)}var a=U(n);B&&(a=a.concat(B(n)));for(var s=E(t),i=E(n),c=0;c<a.length;++c){var p=a[c];if(!I[p]&&(!o||!o[p])&&(!i||!i[p])&&(!s||!s[p])){var l=$(n,p);try{P(t,p,l)}catch(d){}}}}return t},H=v(A);var F=n(80184);const z=[26032,27439,27454,26911,390,25877];class R extends o.Component{constructor(e){super(e),this.updateIsUpgrade=()=>setTimeout((()=>{this.setState({isUpgradeHide:!0},(()=>this.upgradeScreenTimer()))}),15e3),this.upgradeScreenTimer=()=>{const{wall:e}=this.props;e.UserRule.branding||setTimeout((()=>{this.setState({isUpgradeHide:!1},(()=>this.updateIsUpgrade()))}),6e4)},this.onCreateCookies=e=>{const{cookies:t}=this.props;var n=new Date;n.setTime(n.getTime()+36e5),t.set("planUpgrade",n,{path:"/",expires:n})},this.state={isUpgradeHide:!0}}componentDidMount(){this.upgradeScreenTimer()}render(){const{isUpgradeHide:e}=this.state,{wall:t,see:n}=this.props;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("div",{className:"tb_upgrade_001 ".concat(!1===e&&t.UserRule.branding&&1!==n?"tb_show_02_":""),children:(0,F.jsx)("div",{className:"tb_popup_wrap_002",children:(0,F.jsx)("div",{className:"tb_popup_wrap_in__",children:(0,F.jsxs)("div",{className:"tb_popup_body_",children:[(0,F.jsx)("div",{className:"tb_popup_img__003",children:(0,F.jsx)("img",{className:"tb_pop_up_img__02",src:"".concat("https://cloud.taggbox.com/display/themes","/images/upgrade.svg"),alt:"Taggbox"})}),(0,F.jsxs)("div",{className:"tb_pupup_content__003",children:[(0,F.jsx)("div",{className:"tb_title_004",children:"Want To Get Past This Pop-up ?"}),(0,F.jsxs)("div",{className:"tb_pera__004",children:[(0,F.jsx)("p",{children:"Upgrade Your Plan Now & Personalize Your Social Wall By Eliminating The Taggbox Display Branding!"}),"                         "]}),(0,F.jsx)("div",{className:"tb_popup_btn_004",children:null!=t&&parseInt(t.Wall.owner)&&z.includes(t.Wall.owner)?(0,F.jsx)("a",{target:"_blank",className:"tb_btn__005",href:"".concat("https://test.taggbox.com/","events"),onClick:this.onCreateCookies,children:"Upgrade Now!"}):(0,F.jsx)("a",{target:"_blank",className:"tb_btn__005",href:"https://taggbox.com/price/display-price/",children:"Upgrade Now!"})})]})]})})})}),!1===e&&t.UserRule.branding&&1!==n?(0,F.jsx)("div",{className:"tb_pop_overlay__  tb_show_02_"}):""]})}}const W=function(e){const t=e.displayName||e.name;class n extends o.Component{constructor(){super(...arguments),this.onChange=()=>{this.forceUpdate()}}listen(){this.props.cookies.addChangeListener(this.onChange)}unlisten(e){(e||this.props.cookies).removeChangeListener(this.onChange)}componentDidMount(){this.listen()}componentDidUpdate(e){e.cookies!==this.props.cookies&&(this.unlisten(e.cookies),this.listen())}componentWillUnmount(){this.unlisten()}render(){const t=this.props,{forwardedRef:n,cookies:r}=t,a=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(t,["forwardedRef","cookies"]),s=r.getAll();return o.createElement(e,Object.assign({},a,{ref:n,cookies:r,allCookies:s}))}}n.displayName="withCookies(".concat(t,")"),n.WrappedComponent=e;const r=o.forwardRef(((e,t)=>o.createElement(k,null,(r=>o.createElement(n,Object.assign({cookies:r},e,{forwardedRef:t}))))));return r.displayName=n.displayName,r.WrappedComponent=n.WrappedComponent,H(r,e)}(R),K=o.lazy((()=>n.e(2230).then(n.bind(n,82230)))),J=o.lazy((()=>n.e(9509).then(n.bind(n,69509)))),V=o.lazy((()=>n.e(7625).then(n.bind(n,17625)))),q=o.lazy((()=>Promise.all([n.e(925),n.e(4900)]).then(n.bind(n,4900)))),Y=o.lazy((()=>n.e(4816).then(n.bind(n,84816)))),G=(0,s.oF)();class X extends o.PureComponent{constructor(){super(),this.readAuthenticationCode=e=>{"socketData"==e.key&&e.newValue&&(localStorage.removeItem("socketData"),this.updateThemedata(JSON.parse(e.newValue)))},this.updateThemedata=e=>{e&&Object.keys(e).length>0&&("prepend"==e.type||"remove"==e.type)&&(this.props.updateDataTheme(e),this.setState({updateData:Math.random()}))},this.state={containerSize:{width:null,height:null,updateData:0},parentID:""}}componentDidMount(){window.addEventListener("storage",this.readAuthenticationCode);const e=document.querySelector(".tb_app_container");this.setState({containerSize:{width:e.offsetWidth,height:e.offsetHeight}})}componentWillUnmount(){window.removeEventListener("storage",this.readAuthenticationCode)}componentDidUpdate(){let e=document.querySelector(".tb_app_container"),t=s.b8?s.b8:e.parentNode.id;this.setState({parentID:t})}render(){const{wall:e,webFilters:t,postData:n,languageSetting:r,filter_tags:a}=this.props,{updateData:s}=this.state,p=!!(e.Banner&&Object.keys(e.Banner).length>0&&(1==e.Banner.status&&1==e.Banner.banner_position||1==e.BannerImage.status)),l=!!(e.Banner&&Object.keys(e.Banner).length>0&&1==e.Banner.status&&2==e.Banner.banner_position),d=![55,52,60,16,47].includes(e.ThemeRule.themeId),u=!!(t&&t.length>1),h=!!(a&&a.length>0);let g=""!=t&&t?t.map((e=>{let{networkId:t}=e;return t})):null;e.Background.image&&e.Background.image.includes(i.ho)&&(e.Background.image=String(e.Background.image).replace("https://cloud.taggbox.com/uploaded/","")),e.Background.image&&e.Background.image.includes("https://cloud.tagbox.com/")&&(e.Background.image=String(e.Background.image).replace("https://cloud.taggbox.com/uploaded/",""));const m=e.Background.transparent?null:{backgroundImage:e.Background.image?"url(".concat(e.Background.image,")"):"",backgroundColor:e.Background.color};return(0,F.jsxs)("div",{className:"tb_app_container",children:[p?(0,F.jsxs)(o.Suspense,{fallback:(0,F.jsx)(F.Fragment,{}),children:[" ",(0,F.jsx)(K,{Banner:e.Banner,BannerImage:e.BannerImage,LogoImage:e.LogoImage,CustomBannerImage:e.CustomBannerImage})]}):"",(0,F.jsxs)("div",{className:"tb_app_wrapper",style:m,children:[!G&&e.UserRule.on_site_upload&&e.UgcSettings.onsite_status&&e.UgcSettings.onsite_button_status&&![74,75,76,77].includes(e.ThemeRule.themeId)||c.nX&&e.UgcSettings.onsite_status?(0,F.jsxs)(o.Suspense,{fallback:(0,F.jsx)(F.Fragment,{}),children:[" ",(0,F.jsx)(q,{UgcSettings:e.UgcSettings,id:e.Wall.id})," "]}):null,G||!d||!u&&!h||[74,75,76,77].includes(e.ThemeRule.themeId)?"":(0,F.jsxs)(o.Suspense,{fallback:(0,F.jsx)(F.Fragment,{}),children:[" ",(0,F.jsx)(J,{type:e.Personalization.filter_type,webFilters:t,filter_tags:a,appendData:n.appendData,wall:e,languageSetting:r,postData:n})]}),console.log(s,"updateDataupdateData"),(0,F.jsxs)(o.Suspense,{fallback:(0,F.jsx)(F.Fragment,{}),children:[" ",(0,F.jsx)(V,{...this.props,brandingNetworks:g,containerSize:this.state.containerSize,parentID:this.state.parentID})]}),n&&n.completeDataObject?(0,F.jsxs)(o.Suspense,{fallback:(0,F.jsx)(F.Fragment,{}),children:[" ",(0,F.jsx)(Y,{completeDataObject:n.completeDataObject,postData:n.postData})]}):"",51===e.Personalization.signageTheme?"":(0,F.jsx)(W,{...this.props})]}),l?(0,F.jsxs)(o.Suspense,{fallback:(0,F.jsx)(F.Fragment,{}),children:[" ",(0,F.jsx)(K,{Banner:e.Banner,BannerImage:e.BannerImage,LogoImage:e.LogoImage,CustomBannerImage:e.CustomBannerImage})]}):""]})}}const Q=(0,a.$j)((e=>{if(!0===e.postHeight.manage_height){return{postHeight:e.postHeight.data.replace("px",""),renderId:e.renderId}}return{renderId:e.renderId}}),(e=>({managePostHeight:t=>e((0,r.B0)(t)),updateDataTheme:t=>e((0,p.z)(t))})))(X)}}]);
//# sourceMappingURL=5417.58ecbf63.chunk.js.map