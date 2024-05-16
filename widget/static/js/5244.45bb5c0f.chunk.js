/*! For license information please see 5244.45bb5c0f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5244],{95244:(t,e,n)=>{n.r(e),n.d(e,{default:()=>O});var o,r=n(72791),i=n(54270),s=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,h=(t,e,n)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))a.call(e,n)&&h(t,n,e[n]);if(l)for(var n of l(e))c.call(e,n)&&h(t,n,e[n]);return t},d=(t,e)=>{var n={};for(var o in t)a.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&l)for(var o of l(t))e.indexOf(o)<0&&c.call(t,o)&&(n[o]=t[o]);return n};(t=>{const e=class{constructor(t,n,o,r){if(this.version=t,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],t<e.MIN_VERSION||t>e.MAX_VERSION)throw new RangeError("Version value out of range");if(r<-1||r>7)throw new RangeError("Mask value out of range");this.size=4*t+17;let s=[];for(let e=0;e<this.size;e++)s.push(!1);for(let e=0;e<this.size;e++)this.modules.push(s.slice()),this.isFunction.push(s.slice());this.drawFunctionPatterns();const l=this.addEccAndInterleave(o);if(this.drawCodewords(l),-1==r){let t=1e9;for(let e=0;e<8;e++){this.applyMask(e),this.drawFormatBits(e);const n=this.getPenaltyScore();n<t&&(r=e,t=n),this.applyMask(e)}}i(0<=r&&r<=7),this.mask=r,this.applyMask(r),this.drawFormatBits(r),this.isFunction=[]}static encodeText(n,o){const r=t.QrSegment.makeSegments(n);return e.encodeSegments(r,o)}static encodeBinary(n,o){const r=t.QrSegment.makeBytes(n);return e.encodeSegments([r],o)}static encodeSegments(t,n){let r,s,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,u=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];if(!(e.MIN_VERSION<=a&&a<=c&&c<=e.MAX_VERSION)||h<-1||h>7)throw new RangeError("Invalid value");for(r=a;;r++){const o=8*e.getNumDataCodewords(r,n),i=l.getTotalBits(t,r);if(i<=o){s=i;break}if(r>=c)throw new RangeError("Data too long")}for(const o of[e.Ecc.MEDIUM,e.Ecc.QUARTILE,e.Ecc.HIGH])u&&s<=8*e.getNumDataCodewords(r,o)&&(n=o);let d=[];for(const e of t){o(e.mode.modeBits,4,d),o(e.numChars,e.mode.numCharCountBits(r),d);for(const t of e.getData())d.push(t)}i(d.length==s);const f=8*e.getNumDataCodewords(r,n);i(d.length<=f),o(0,Math.min(4,f-d.length),d),o(0,(8-d.length%8)%8,d),i(d.length%8==0);for(let e=236;d.length<f;e^=253)o(e,8,d);let g=[];for(;8*g.length<d.length;)g.push(0);return d.forEach(((t,e)=>g[e>>>3]|=t<<7-(7&e))),new e(r,n,g,h)}getModule(t,e){return 0<=t&&t<this.size&&0<=e&&e<this.size&&this.modules[e][t]}getModules(){return this.modules}drawFunctionPatterns(){for(let n=0;n<this.size;n++)this.setFunctionModule(6,n,n%2==0),this.setFunctionModule(n,6,n%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const t=this.getAlignmentPatternPositions(),e=t.length;for(let n=0;n<e;n++)for(let o=0;o<e;o++)0==n&&0==o||0==n&&o==e-1||n==e-1&&0==o||this.drawAlignmentPattern(t[n],t[o]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(t){const e=this.errorCorrectionLevel.formatBits<<3|t;let n=e;for(let r=0;r<10;r++)n=n<<1^1335*(n>>>9);const o=21522^(e<<10|n);i(o>>>15==0);for(let i=0;i<=5;i++)this.setFunctionModule(8,i,r(o,i));this.setFunctionModule(8,7,r(o,6)),this.setFunctionModule(8,8,r(o,7)),this.setFunctionModule(7,8,r(o,8));for(let i=9;i<15;i++)this.setFunctionModule(14-i,8,r(o,i));for(let i=0;i<8;i++)this.setFunctionModule(this.size-1-i,8,r(o,i));for(let i=8;i<15;i++)this.setFunctionModule(8,this.size-15+i,r(o,i));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let t=this.version;for(let n=0;n<12;n++)t=t<<1^7973*(t>>>11);const e=this.version<<12|t;i(e>>>18==0);for(let n=0;n<18;n++){const t=r(e,n),o=this.size-11+n%3,i=Math.floor(n/3);this.setFunctionModule(o,i,t),this.setFunctionModule(i,o,t)}}drawFinderPattern(t,e){for(let n=-4;n<=4;n++)for(let o=-4;o<=4;o++){const r=Math.max(Math.abs(o),Math.abs(n)),i=t+o,s=e+n;0<=i&&i<this.size&&0<=s&&s<this.size&&this.setFunctionModule(i,s,2!=r&&4!=r)}}drawAlignmentPattern(t,e){for(let n=-2;n<=2;n++)for(let o=-2;o<=2;o++)this.setFunctionModule(t+o,e+n,1!=Math.max(Math.abs(o),Math.abs(n)))}setFunctionModule(t,e,n){this.modules[e][t]=n,this.isFunction[e][t]=!0}addEccAndInterleave(t){const n=this.version,o=this.errorCorrectionLevel;if(t.length!=e.getNumDataCodewords(n,o))throw new RangeError("Invalid argument");const r=e.NUM_ERROR_CORRECTION_BLOCKS[o.ordinal][n],s=e.ECC_CODEWORDS_PER_BLOCK[o.ordinal][n],l=Math.floor(e.getNumRawDataModules(n)/8),a=r-l%r,c=Math.floor(l/r);let h=[];const u=e.reedSolomonComputeDivisor(s);for(let i=0,f=0;i<r;i++){let n=t.slice(f,f+c-s+(i<a?0:1));f+=n.length;const o=e.reedSolomonComputeRemainder(n,u);i<a&&n.push(0),h.push(n.concat(o))}let d=[];for(let e=0;e<h[0].length;e++)h.forEach(((t,n)=>{(e!=c-s||n>=a)&&d.push(t[e])}));return i(d.length==l),d}drawCodewords(t){if(t.length!=Math.floor(e.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let n=0;for(let e=this.size-1;e>=1;e-=2){6==e&&(e=5);for(let o=0;o<this.size;o++)for(let i=0;i<2;i++){const s=e-i,l=0==(e+1&2)?this.size-1-o:o;!this.isFunction[l][s]&&n<8*t.length&&(this.modules[l][s]=r(t[n>>>3],7-(7&n)),n++)}}i(n==8*t.length)}applyMask(t){if(t<0||t>7)throw new RangeError("Mask value out of range");for(let e=0;e<this.size;e++)for(let n=0;n<this.size;n++){let o;switch(t){case 0:o=(n+e)%2==0;break;case 1:o=e%2==0;break;case 2:o=n%3==0;break;case 3:o=(n+e)%3==0;break;case 4:o=(Math.floor(n/3)+Math.floor(e/2))%2==0;break;case 5:o=n*e%2+n*e%3==0;break;case 6:o=(n*e%2+n*e%3)%2==0;break;case 7:o=((n+e)%2+n*e%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[e][n]&&o&&(this.modules[e][n]=!this.modules[e][n])}}getPenaltyScore(){let t=0;for(let i=0;i<this.size;i++){let n=!1,o=0,r=[0,0,0,0,0,0,0];for(let s=0;s<this.size;s++)this.modules[i][s]==n?(o++,5==o?t+=e.PENALTY_N1:o>5&&t++):(this.finderPenaltyAddHistory(o,r),n||(t+=this.finderPenaltyCountPatterns(r)*e.PENALTY_N3),n=this.modules[i][s],o=1);t+=this.finderPenaltyTerminateAndCount(n,o,r)*e.PENALTY_N3}for(let i=0;i<this.size;i++){let n=!1,o=0,r=[0,0,0,0,0,0,0];for(let s=0;s<this.size;s++)this.modules[s][i]==n?(o++,5==o?t+=e.PENALTY_N1:o>5&&t++):(this.finderPenaltyAddHistory(o,r),n||(t+=this.finderPenaltyCountPatterns(r)*e.PENALTY_N3),n=this.modules[s][i],o=1);t+=this.finderPenaltyTerminateAndCount(n,o,r)*e.PENALTY_N3}for(let i=0;i<this.size-1;i++)for(let n=0;n<this.size-1;n++){const o=this.modules[i][n];o==this.modules[i][n+1]&&o==this.modules[i+1][n]&&o==this.modules[i+1][n+1]&&(t+=e.PENALTY_N2)}let n=0;for(const e of this.modules)n=e.reduce(((t,e)=>t+(e?1:0)),n);const o=this.size*this.size,r=Math.ceil(Math.abs(20*n-10*o)/o)-1;return i(0<=r&&r<=9),t+=r*e.PENALTY_N4,i(0<=t&&t<=2568888),t}getAlignmentPatternPositions(){if(1==this.version)return[];{const t=Math.floor(this.version/7)+2,e=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*t-2));let n=[6];for(let o=this.size-7;n.length<t;o-=e)n.splice(1,0,o);return n}}static getNumRawDataModules(t){if(t<e.MIN_VERSION||t>e.MAX_VERSION)throw new RangeError("Version number out of range");let n=(16*t+128)*t+64;if(t>=2){const e=Math.floor(t/7)+2;n-=(25*e-10)*e-55,t>=7&&(n-=36)}return i(208<=n&&n<=29648),n}static getNumDataCodewords(t,n){return Math.floor(e.getNumRawDataModules(t)/8)-e.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t]*e.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t]}static reedSolomonComputeDivisor(t){if(t<1||t>255)throw new RangeError("Degree out of range");let n=[];for(let e=0;e<t-1;e++)n.push(0);n.push(1);let o=1;for(let r=0;r<t;r++){for(let t=0;t<n.length;t++)n[t]=e.reedSolomonMultiply(n[t],o),t+1<n.length&&(n[t]^=n[t+1]);o=e.reedSolomonMultiply(o,2)}return n}static reedSolomonComputeRemainder(t,n){let o=n.map((t=>0));for(const r of t){const t=r^o.shift();o.push(0),n.forEach(((n,r)=>o[r]^=e.reedSolomonMultiply(n,t)))}return o}static reedSolomonMultiply(t,e){if(t>>>8!=0||e>>>8!=0)throw new RangeError("Byte out of range");let n=0;for(let o=7;o>=0;o--)n=n<<1^285*(n>>>7),n^=(e>>>o&1)*t;return i(n>>>8==0),n}finderPenaltyCountPatterns(t){const e=t[1];i(e<=3*this.size);const n=e>0&&t[2]==e&&t[3]==3*e&&t[4]==e&&t[5]==e;return(n&&t[0]>=4*e&&t[6]>=e?1:0)+(n&&t[6]>=4*e&&t[0]>=e?1:0)}finderPenaltyTerminateAndCount(t,e,n){return t&&(this.finderPenaltyAddHistory(e,n),e=0),e+=this.size,this.finderPenaltyAddHistory(e,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(t,e){0==e[0]&&(t+=this.size),e.pop(),e.unshift(t)}};let n=e;function o(t,e,n){if(e<0||e>31||t>>>e!=0)throw new RangeError("Value out of range");for(let o=e-1;o>=0;o--)n.push(t>>>o&1)}function r(t,e){return 0!=(t>>>e&1)}function i(t){if(!t)throw new Error("Assertion error")}n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=n;const s=class{constructor(t,e,n){if(this.mode=t,this.numChars=e,this.bitData=n,e<0)throw new RangeError("Invalid argument");this.bitData=n.slice()}static makeBytes(t){let e=[];for(const n of t)o(n,8,e);return new s(s.Mode.BYTE,t.length,e)}static makeNumeric(t){if(!s.isNumeric(t))throw new RangeError("String contains non-numeric characters");let e=[];for(let n=0;n<t.length;){const r=Math.min(t.length-n,3);o(parseInt(t.substr(n,r),10),3*r+1,e),n+=r}return new s(s.Mode.NUMERIC,t.length,e)}static makeAlphanumeric(t){if(!s.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");let e,n=[];for(e=0;e+2<=t.length;e+=2){let r=45*s.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e));r+=s.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e+1)),o(r,11,n)}return e<t.length&&o(s.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e)),6,n),new s(s.Mode.ALPHANUMERIC,t.length,n)}static makeSegments(t){return""==t?[]:s.isNumeric(t)?[s.makeNumeric(t)]:s.isAlphanumeric(t)?[s.makeAlphanumeric(t)]:[s.makeBytes(s.toUtf8ByteArray(t))]}static makeEci(t){let e=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<128)o(t,8,e);else if(t<16384)o(2,2,e),o(t,14,e);else{if(!(t<1e6))throw new RangeError("ECI assignment value out of range");o(6,3,e),o(t,21,e)}return new s(s.Mode.ECI,0,e)}static isNumeric(t){return s.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return s.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(t,e){let n=0;for(const o of t){const t=o.mode.numCharCountBits(e);if(o.numChars>=1<<t)return 1/0;n+=4+t+o.bitData.length}return n}static toUtf8ByteArray(t){t=encodeURI(t);let e=[];for(let n=0;n<t.length;n++)"%"!=t.charAt(n)?e.push(t.charCodeAt(n)):(e.push(parseInt(t.substr(n+1,2),16)),n+=2);return e}};let l=s;l.NUMERIC_REGEX=/^[0-9]*$/,l.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,l.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",t.QrSegment=l})(o||(o={})),(t=>{let e;(t=>{const e=class{constructor(t,e){this.ordinal=t,this.formatBits=e}};let n=e;n.LOW=new e(0,1),n.MEDIUM=new e(1,0),n.QUARTILE=new e(2,3),n.HIGH=new e(3,2),t.Ecc=n})(e=t.QrCode||(t.QrCode={}))})(o||(o={})),(t=>{let e;(t=>{const e=class{constructor(t,e){this.modeBits=t,this.numBitsCharCount=e}numCharCountBits(t){return this.numBitsCharCount[Math.floor((t+7)/17)]}};let n=e;n.NUMERIC=new e(1,[10,12,14]),n.ALPHANUMERIC=new e(2,[9,11,13]),n.BYTE=new e(4,[8,16,16]),n.KANJI=new e(8,[8,10,12]),n.ECI=new e(7,[0,0,0]),t.Mode=n})(e=t.QrSegment||(t.QrSegment={}))})(o||(o={}));var f=o,g={L:f.QrCode.Ecc.LOW,M:f.QrCode.Ecc.MEDIUM,Q:f.QrCode.Ecc.QUARTILE,H:f.QrCode.Ecc.HIGH},m=128,_="L",E="#FFFFFF",w="#000000",M=!1;function C(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=[];return t.forEach((function(t,o){let r=null;t.forEach((function(i,s){if(!i&&null!==r)return n.push("M".concat(r+e," ").concat(o+e,"h").concat(s-r,"v1H").concat(r+e,"z")),void(r=null);if(s!==t.length-1)i&&null===r&&(r=s);else{if(!i)return;null===r?n.push("M".concat(s+e,",").concat(o+e," h1v1H").concat(s+e,"z")):n.push("M".concat(r+e,",").concat(o+e," h").concat(s+1-r,"v1H").concat(r+e,"z"))}}))})),n.join("")}function p(t,e){return t.slice().map(((t,n)=>n<e.y||n>=e.y+e.h?t:t.map(((t,n)=>(n<e.x||n>=e.x+e.w)&&t))))}function R(t,e,n,o){if(null==o)return null;const r=n?4:0,i=t.length+2*r,s=Math.floor(.1*e),l=i/e,a=(o.width||s)*l,c=(o.height||s)*l,h=null==o.x?t.length/2-a/2:o.x*l,u=null==o.y?t.length/2-c/2:o.y*l;let d=null;if(o.excavate){let t=Math.floor(h),e=Math.floor(u);d={x:t,y:e,w:Math.ceil(a+h-t),h:Math.ceil(c+u-e)}}return{x:h,y:u,h:c,w:a,excavation:d}}var v=function(){try{(new Path2D).addPath(new Path2D)}catch(t){return!1}return!0}();function y(t){const e=t,{value:n,size:o=m,level:i=_,bgColor:s=E,fgColor:l=w,includeMargin:a=M,style:c,imageSettings:h}=e,y=d(e,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),A=null==h?void 0:h.src,N=(0,r.useRef)(null),P=(0,r.useRef)(null),[x,b]=(0,r.useState)(!1);(0,r.useEffect)((()=>{if(null!=N.current){const t=N.current,e=t.getContext("2d");if(!e)return;let r=f.QrCode.encodeText(n,g[i]).getModules();const c=a?4:0,u=r.length+2*c,d=R(r,o,a,h),m=P.current,_=null!=d&&null!==m&&m.complete&&0!==m.naturalHeight&&0!==m.naturalWidth;_&&null!=d.excavation&&(r=p(r,d.excavation));const E=window.devicePixelRatio||1;t.height=t.width=o*E;const w=o/u*E;e.scale(w,w),e.fillStyle=s,e.fillRect(0,0,u,u),e.fillStyle=l,v?e.fill(new Path2D(C(r,c))):r.forEach((function(t,n){t.forEach((function(t,o){t&&e.fillRect(o+c,n+c,1,1)}))})),_&&e.drawImage(m,d.x+c,d.y+c,d.w,d.h)}})),(0,r.useEffect)((()=>{b(!1)}),[A]);const S=u({height:o,width:o},c);let I=null;return null!=A&&(I=r.createElement("img",{src:A,key:A,style:{display:"none"},onLoad:()=>{b(!0)},ref:P})),r.createElement(r.Fragment,null,r.createElement("canvas",u({style:S,height:o,width:o,ref:N},y)),I)}function A(t){const e=t,{value:n,size:o=m,level:i=_,bgColor:s=E,fgColor:l=w,includeMargin:a=M,imageSettings:c}=e,h=d(e,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let v=f.QrCode.encodeText(n,g[i]).getModules();const y=a?4:0,A=v.length+2*y,N=R(v,o,a,c);let P=null;null!=c&&null!=N&&(null!=N.excavation&&(v=p(v,N.excavation)),P=r.createElement("image",{xlinkHref:c.src,height:N.h,width:N.w,x:N.x+y,y:N.y+y,preserveAspectRatio:"none"}));const x=C(v,y);return r.createElement("svg",u({height:o,width:o,viewBox:"0 0 ".concat(A," ").concat(A)},h),r.createElement("path",{fill:s,d:"M0,0 h".concat(A,"v").concat(A,"H0z"),shapeRendering:"crispEdges"}),r.createElement("path",{fill:l,d:x,shapeRendering:"crispEdges"}),P)}var N=t=>{const e=t,{renderAs:n}=e,o=d(e,["renderAs"]);return"svg"===n?r.createElement(A,u({},o)):r.createElement(y,u({},o))},P=n(46535),x=n(2703),b=n(80184);const S=t=>{let{onsite_txt_font_variation:e,onsite_txt_css_font:n,onsite_txt_font_size:o}=t;return(0,b.jsxs)(i.q,{children:[(0,b.jsx)("link",{href:"https://fonts.googleapis.com/css?family=".concat(n,":").concat(e),rel:"stylesheet"}),(0,b.jsx)("link",{href:"https://fonts.googleapis.com/css?family=".concat(o,":").concat(e),rel:"stylesheet"})]})};class I extends r.Component{render(){const{wall:t}=this.props,{UgcSettings:e,UserRule:n}=t;(0,x.oF)();return(0,b.jsxs)(b.Fragment,{children:[e&&Object.keys(e).length>0?(0,b.jsx)(S,{...e}):null,(0,b.jsxs)("div",{className:"display-onsiteupload ".concat(e.onsite_qr_code_btn_text.length&&String(e.onsite_qr_code_btn_text).length>30?"display-onsiteupload-text":""," ").concat("1"==e.onsite_overlay_poisition&&n.branding?"qr-with-logo":""," onsiteupload_").concat("1"==e.onsite_overlay_poisition?"bottom_right":"2"==e.onsite_overlay_poisition?"bottom_left":"3"==e.onsite_overlay_poisition?"top_right":"4"==e.onsite_overlay_poisition?"top_left":"bottom_right","_position"),style:{backgroundColor:e.onsite_btn_color?e.onsite_btn_color:e.onsite_bg_color,color:e.onsite_txt_color,height:"".concat(e.onsite_overlay_height?e.onsite_overlay_height:120,"px")},children:[(0,b.jsx)("div",{className:"onsite_barcode_",style:e.onsite_qr_code_btn_text.length&&String(e.onsite_qr_code_btn_text).length>30&&("1"==e.onsite_overlay_poisition||"3"==e.onsite_overlay_poisition)?{order:2}:{},children:(0,b.jsx)(N,{style:{height:"100%",width:"100%"},value:"".concat(P.Gs).concat(t.Wall.id,"?social-wall=true&onsite-upload=true"),renderAs:"canvas"})}),(0,b.jsx)("div",{className:"onsite_text_ sGFfonte-".concat(e.onsite_txt_font_variation),style:{fontSize:e.onsite_txt_font_size,fontFamily:e.onsite_txt_font,paddingRight:"5px",paddingLeft:"5px"},children:e.onsite_qr_code_btn_text.length&&String(e.onsite_qr_code_btn_text).length>0?e.onsite_qr_code_btn_text:"SCAN TO SHARE"})]})]})}}const O=(0,r.memo)(I)}}]);
//# sourceMappingURL=5244.45bb5c0f.chunk.js.map