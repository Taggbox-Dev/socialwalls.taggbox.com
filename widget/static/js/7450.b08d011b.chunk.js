(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7450,7234,7668,757],{95410:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});var s=a(72791),l=a(98759),o=a(49671),n=a(42308),r=a(80184);class i extends s.Component{constructor(){super(...arguments),this.state={isAuthorImagevalid:!0}}render(){const{item:t,wall:e,activeIndex:a,columnsId:s,autoplay:i,cardRef:d}=this.props,{ThemeRule:c,Personalization:h}=e,u=t.rating>0?"tb_mwf_rating_content":"tb_mwf_content",m=1===t.type&&h.textDecorate?"tb_mwf_text_decoration tb_mwf_text_post":"",p=!(!c.postAuthor||t.author.isInstaUser),_={padding:c.padding/2},g={backgroundColor:c.cardColor,borderRadius:"".concat(c.borderRadius,"px")};return(0,r.jsx)("div",{id:"tb_wall_card_wrap__".concat(s,"_").concat(parseInt(a)+1),className:"tb_wall_card_wrap__","data-id":a,"data-active":0==a?1:0,style:_,ref:d,children:(0,r.jsxs)("div",{id:"post_id-".concat(t.id),className:"tb_wall_card_in__",style:g,children:[(0,r.jsx)(l.Z,{itemData:t,wall:e,autoplayVideo:i}),!c.captionStatus&&(!c.hideContent||p||c.postTime||t.network.id&&c.socialAction)?(0,r.jsx)("div",{className:t.network.id&&c.socialAction||c.postAuthor?"tb_wall_card_content___":"",style:{padding:c.spacing?"".concat(c.spacing,"px"):"10px"},children:(0,r.jsx)("div",{className:"tb_wall_card_conent__001",children:(0,r.jsxs)("div",{className:c.postAuthor||c.socialAction||c.postTime?"tb_mwf_contant_wrapper":"",children:[p||c.postTime||t.network.id&&c.socialAction?(0,r.jsx)(o.Z,{postData:t,ThemeRule:c}):null,c.hideContent?null:(0,r.jsx)(n.Z,{item:t,contentClass:"".concat(u," ").concat(m),ThemeRule:c,personalization:h},t.id)]})})}):null]})})}}},97234:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(72791),l=a(2703),o=a(14496),n=a(80184);class r extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:a,network:s}=this.props;return(0,n.jsx)("div",{className:a,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(a,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,l.P)(e.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(o.Z,{authorClass:a,username:e.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},14496:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});a(72791);var s=a(80184);const l=t=>{let{username:e,network:a}=t;return(0,s.jsx)("img",{className:"tb_nc_author_profile__",src:"https://ui-avatars.com/api/?name=".concat(function(t){if(t){var e=t.match(/[A-Za-z]/);return e?e[0]:""}return""}(e),"&background=").concat(String(null===a.id?"#000":a.color).replace("#",""),"&color=fff&length=1"),alt:e,width:44,height:44})}},49671:(t,e,a)=>{"use strict";a.d(e,{Z:()=>i});var s=a(72791),l=a(97234),o=a(27668),n=a(70757),r=a(80184);class i extends s.PureComponent{render(){var t,e,a;const{ThemeRule:s,postData:i}=this.props,d=null!==(t=null===i||void 0===i?void 0:i.createdAt)&&void 0!==t?t:"",c=null!==(e=null===i||void 0===i?void 0:i.author)&&void 0!==e?e:"",h=null!==(a=null===i||void 0===i?void 0:i.network)&&void 0!==a?a:"",u={color:s.authorColor,fontFamily:s.authorFont,fontStyle:s.authorFontVariant},m={backgroundColor:s.authorColor},p=!(!i||!s.postAuthor||c.isInstaUser),_=!(!s.postAuthor||!s.postTime);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"tb_mwf_author_wrapper",children:[p||s.postTime?(0,r.jsxs)("div",{className:"tb_mwf_author",children:[p?(0,r.jsx)(l.default,{network:h,author:c,authorClass:"tb_mwf_author_profile"},c.username):"",(0,r.jsxs)("div",{className:"tb_mwf_author_info",children:[p?(0,r.jsx)("div",{className:"tb_mwf_authorname tb-cTBfont-".concat(s.authorFontVariant?s.authorFontVariant:null),style:u,children:(0,r.jsx)("strong",{children:c.name})}):"",(0,r.jsxs)("div",{className:"tb_mwf_post_info",children:[p&&![74,76,77].includes(s.themeId)?(0,r.jsx)("div",{className:"tb_mwf_username tb-cTBfont-".concat(s.authorFontVariant),style:u,children:c.username}):"",_&&p?(0,r.jsx)("div",{className:"tb_mwf_seprator",style:m,children:" "}):"",s.postTime?(0,r.jsx)(o.default,{postTime:d,timeClass:"tb_mwf_time",authorNameStyle:u}):""]})]})]}):null,h.id&&s.socialAction?(0,r.jsx)("div",{className:"tb_mwf_social_",children:(0,r.jsx)(n.default,{networkClass:"tb_mwf_social_ico",network:h,ThemeRule:s})}):null]})," "]})}}},98759:(t,e,a)=>{"use strict";a.d(e,{Z:()=>u});var s=a(72791),l=a(79200),o=a(31725),n=a.n(o),r=function(){return r=Object.assign||function(t){for(var e,a=1,s=arguments.length;a<s;a++)for(var l in e=arguments[a])Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t},r.apply(this,arguments)};const i=function(t){for(var e=t.url,a=t.allowFullScreen,l=t.position,o=t.display,i=t.height,d=t.width,c=t.overflow,h=t.styles,u=t.onLoad,m=t.onMouseOver,p=t.onMouseOut,_=t.scrolling,g=t.id,w=t.frameBorder,b=t.ariaHidden,f=t.sandbox,y=t.allow,x=t.className,v=t.title,j=t.ariaLabel,k=t.ariaLabelledby,C=t.name,N=t.target,T=t.loading,P=t.importance,S=t.referrerpolicy,R=t.allowpaymentrequest,F=t.src,O=n()({src:F||e,target:N||null,style:{position:l||null,display:o||"block",overflow:c||null},scrolling:_||null,allowpaymentrequest:R||null,importance:P||null,sandbox:f||null,loading:T||null,styles:h||null,name:C||null,className:x||null,referrerpolicy:S||null,title:v||null,allow:y||null,id:g||null,"aria-labelledby":k||null,"aria-hidden":b||null,"aria-label":j||null,width:d||null,height:i||null,onLoad:u||null,onMouseOver:m||null,onMouseOut:p||null}),I=Object.create(null),Z=0,A=Object.keys(O);Z<A.length;Z++){var L=A[Z];null!=O[L]&&(I[L]=O[L])}for(var U=0,z=Object.keys(I.style);U<z.length;U++){var W=z[U];null==I.style[W]&&delete I.style[W]}if(a)if("allow"in I){var D=I.allow.replace("fullscreen","");I.allow=("fullscreen "+D.trim()).trim()}else I.allow="fullscreen";return w>=0&&(I.style.hasOwnProperty("border")||(I.style.border=w)),s.createElement("iframe",r({},I))};var d=a(96710),c=a(80184);class h extends s.PureComponent{constructor(t){super(t),this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={imgUrl:t.itemData.postFileNew,videoLoaded:!1},this.myRef=s.createRef()}render(){const{itemData:t,wall:e,autoplayVideo:a=!0}=this.props,{id:s}=e.Wall,{imgUrl:o,videoLoaded:n}=this.state,{type:r,network:h,imageList:u,link:m,filterId:p,mediaUrl:_,stories:g,postFileNew:w,networkId:b,mediaClip:f}=t,y=t.id,x=e.isDisplay,v=3===r||5===r,j=2===r||4===r,k=!!(t.mediaClip&&"undefined"!=t.mediaClip&&String(t.mediaClip).length>0),C=!(x||!v||!e.ThemeRule.autoPlay||!k),N=7===h.id,T=!!(u&&u.length>0),P=T&&v?"tb_fc_multi_images_ico_bottom":"tb_fc_multi_images_ico";t.mediaUrl=(x||C)&&k?t.mediaClip:t.mediaUrl;const S=x?a:C,R=!x&&(!!(e.User&&Object.keys(e.User).length>0)&&143031==e.User.id);return(0,c.jsxs)("div",{className:"tb_fc_media_wrap mediaHolder".concat(y),role:"img","aria-label":"Post Image",style:{height:"100%",background:"#000000"},children:[T&&!x?(0,c.jsx)("div",{className:"".concat(P," tb__icon tb-multiple"),children:" "}):null,v&&!x?N?(0,c.jsx)("div",{className:"tb_fc_youtube_ico tb__icon tb-youtube",children:" "}):(0,c.jsx)("div",{className:"tb_fc_video_ico tb__icon tb-reels",children:" "}):null,j?(0,c.jsx)("img",{loading:"lazy",src:o,"data-link":m,"data-load":"0","data-network":h.id,"data-wall-id":s,"data-item-id":y,"data-filter-id":p,onLoad:this.onLoad,draggable:!1,onError:t=>(0,l.ht)(t),style:{height:"100%"},width:"300px",height:"300px"}):m&&b&&30==b&&m.indexOf("vk")>=0?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i,{className:"tb-detail-image-iframe",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",src:"".concat(_,"&autoplay=1&mute=1"),allowFullScreen:"true",style:{width:"100%!important"},"data-filter-id":p,"data-stories":g,"data-type":"video","data-network":b,"data-link":m,"data-item-id":y,"data-load":0,draggable:!1,height:"1000",width:"1000"})}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{loading:"lazy",src:w,"data-load":"0","data-network":h.id,"data-wall-id":s,"data-item-id":y,"data-filter-id":p,onLoad:this.onLoad,draggable:!1,onError:t=>{(0,l.ht)(t)},style:{width:"100%",height:"100%"},width:"300px",height:"300px"}),(0,c.jsx)("div",{className:"card_video__01",style:{display:n?"none":"block",opacity:n?0:1,width:"100%",height:"100%"},children:3!=b?(0,c.jsx)("video",{poster:w,src:a?"".concat(t.mediaUrl):null,autoPlay:S,muted:!0,loop:1,onError:t=>{this.setState({videoLoaded:!0})},"data-type":"video","data-network":b,"data-filter-id":p,"data-link":m,"data-load":0,"data-tb":e.UserDetail.db_table,"data-wall-id":e.Wall.id,"data-item-id":y,"data-owner-id":e.Wall.owner,height:"400",width:"400",controls:R},"".concat(this.props.keyRender,"-media-player")):(0,c.jsx)(d.Z,{poster:w,style:{display:"contents",width:"".concat(4.8,"vw"),height:"".concat(.3*9,"vw")},className:"tb_post_vid_005",url:"".concat(f&&"undefined"!=f&&String(f).length>0?f:_),playing:!!x,loop:!0,muted:!0,controls:R,onReady:t=>x?this.setState({videoLoaded:!1}):null},"".concat(this.props.keyRender,"-media-player"))})]})]})}}const u=(0,s.memo)(h)},70757:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(72791),l=a(80184);const o=s.lazy((()=>a.e(1088).then(a.bind(a,41088))));class n extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a}=this.props;return 1===a.iconType&&(7!==t.id&&4!==t.id)?(0,l.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:a.iconColor},children:(0,l.jsx)("div",{})}):(0,l.jsxs)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[" ",(0,l.jsx)(o,{network:t,ThemeRule:a,networkClass:e})]})}}},46476:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var s=a(72791),l=a(35737),o=a(34867),n=a(80184);const r=a(80844),i=t=>(0,n.jsx)(l.default,{children:(0,o.ZP)(t)}),d=t=>{let{data:e,content:a,Personalization:s}=t;const l={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?i(window.slackdown.parse(r(a,/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:l,children:["#",t]}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?i(window.slackdown.parse(r(a,e.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:l,children:t}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?i(window.slackdown.parse(r(a,/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:l,children:["#",t]},e))),e.slackMember)):i(window.slackdown.parse(a,e.slackMember))}):(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?r((0,o.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:l,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?r((0,o.ZP)(a),e.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:l,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?r((0,o.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:l,children:["#",t]},e))):(0,o.ZP)(a)})},c=(0,s.memo)(d)},42308:(t,e,a)=>{"use strict";a.d(e,{Z:()=>i});var s=a(72791),l=a(34867),o=a(2703),n=a(46476),r=a(80184);class i extends s.PureComponent{constructor(t){super(t),this.updateText=()=>{const{ThemeRule:t}=this.props;[74,76,77,68].includes(t.themeId)&&((0,o.OX)(t.trimcontent),setTimeout((()=>this.setState({loadContent:!0})),100))},this.state={loadContent:![74,76,77].includes(t.ThemeRule.themeId)}}render(){const{ThemeRule:t,personalization:e,item:a,contentTitle:s,largeBlock:i}=this.props,{loadContent:d}=this.state,c=t.font_varient?t.font_varient.split("-"):{},h=c.length>1?c[1]:"",u=3==t.captionFontWeight?"bold":2==t.captionFontWeight?"600":1==t.captionFontWeight?"100":c.length>0?c[0].includes("regular")?"normal":c[0]:"",m=t.css_font?t.css_font:"",p="".concat(t.fontSize&&![74,76,77,68].includes(t.themeId)?"".concat(t.fontSize,"px"):"inherit"),_={color:t.fontColor,fontWeight:u,fontFamily:m,fontStyle:h},g={font:68!=t.themeId?"".concat(h):"",WebkitLineClamp:t.trimcontent?i?10:3:"",display:t.trimcontent?"-webkit-box":"block",fontSize:p},w=20==a.network.id?a.content:(0,o.Fx)(a.content);return(0,r.jsx)("div",{id:"tb-ss-post--card".concat(a.id),className:"post-card-outer tb-cTBfont- ".concat(t.font_varient),"aria-label":"Post Content",style:_,children:(0,r.jsx)("div",{className:"resize",style:g,onLoad:this.updateText(),children:d?(0,r.jsxs)(r.Fragment,{children:[s?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,l.ZP)(s)}):null,(0,r.jsx)(n.Z,{data:a,content:w,Personalization:e},a.id),"   "]}):null})})}}},27668:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(72791),l=a(2703),o=a(80184);const n=t=>{const{postTime:e,timeClass:a,authorNameStyle:n}=t,r=(0,s.useMemo)((()=>(0,l.Sy)(e)),[]);return(0,o.jsx)("div",{className:a,style:n,children:r})},r=(0,s.memo)(n)},81726:(t,e,a)=>{"use strict";var s=a(79047);function l(){}function o(){}o.resetWarningCache=l,t.exports=function(){function t(t,e,a,l,o,n){if(n!==s){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function e(){return t}t.isRequired=t;var a={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:l};return a.PropTypes=a,a}},52007:(t,e,a)=>{t.exports=a(81726)()},79047:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},50247:()=>{}}]);
//# sourceMappingURL=7450.b08d011b.chunk.js.map