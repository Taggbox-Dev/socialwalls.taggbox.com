(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8933,7234,7668,757],{97234:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(72791),o=a(2703),l=a(14496),i=a(80184);class n extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:a,network:s}=this.props;return(0,i.jsx)("div",{className:a,children:this.state.isAuthorImagevalid?(0,i.jsx)("img",{className:"".concat(a,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,o.P)(e.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,i.jsx)(l.Z,{authorClass:a,username:e.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},14496:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});a(72791);var s=a(80184);const o=t=>{let{username:e,network:a}=t;return(0,s.jsx)("img",{className:"tb_nc_author_profile__",src:"https://ui-avatars.com/api/?name=".concat(function(t){if(t){var e=t.match(/[A-Za-z]/);return e?e[0]:""}return""}(e),"&background=").concat(String(null===a.id?"#000":a.color).replace("#",""),"&color=fff&length=1"),alt:e,width:44,height:44})}},49671:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(72791),o=a(97234),l=a(27668),i=a(70757),n=a(80184);class r extends s.PureComponent{render(){var t,e,a;const{ThemeRule:s,postData:r}=this.props,d=null!==(t=null===r||void 0===r?void 0:r.createdAt)&&void 0!==t?t:"",c=null!==(e=null===r||void 0===r?void 0:r.author)&&void 0!==e?e:"",h=null!==(a=null===r||void 0===r?void 0:r.network)&&void 0!==a?a:"",u={color:s.authorColor,fontFamily:s.authorFont,fontStyle:s.authorFontVariant},m={backgroundColor:s.authorColor},_=!(!r||!s.postAuthor||c.isInstaUser),g=!(!s.postAuthor||!s.postTime);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"tb_mwf_author_wrapper",children:[_||s.postTime?(0,n.jsxs)("div",{className:"tb_mwf_author",children:[_?(0,n.jsx)(o.default,{network:h,author:c,authorClass:"tb_mwf_author_profile"},c.username):"",(0,n.jsxs)("div",{className:"tb_mwf_author_info",children:[_?(0,n.jsx)("div",{className:"tb_mwf_authorname tb-cTBfont-".concat(s.authorFontVariant?s.authorFontVariant:null),style:u,children:(0,n.jsx)("strong",{children:c.name})}):"",(0,n.jsxs)("div",{className:"tb_mwf_post_info",children:[_&&![74,76,77].includes(s.themeId)?(0,n.jsx)("div",{className:"tb_mwf_username tb-cTBfont-".concat(s.authorFontVariant),style:u,children:c.username}):"",g&&_?(0,n.jsx)("div",{className:"tb_mwf_seprator",style:m,children:" "}):"",s.postTime?(0,n.jsx)(l.default,{postTime:d,timeClass:"tb_mwf_time",authorNameStyle:u}):""]})]})]}):null,h.id&&s.socialAction?(0,n.jsx)("div",{className:"tb_mwf_social_",children:(0,n.jsx)(i.default,{networkClass:"tb_mwf_social_ico",network:h,ThemeRule:s})}):null]})," "]})}}},54122:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>u});var s=a(72791),o=a(77581),l=a(49671),i=a(98759),n=a(42308),r=a(19036),d=a(70757),c=a(80184);class h extends s.PureComponent{constructor(){super(...arguments),this.cardRef=s.createRef(null),this.state={autoplay:!1},this.startLoadingVideo=t=>{const{itemData:e}=this.props;if(3==e.type||5==e.type){let e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.setState({autoplay:!0}):this.setState({autoplay:!1})}))}),{rootMargin:"50px",threshold:1});t.current&&e.observe(t.current)}}}componentDidMount(){this.startLoadingVideo(this.cardRef)}render(){const{itemData:t,personalization:e,ThemeRule:a,clickToShowPopUp:s,itemIndex:o,wall:h}=this.props,u=[2,3,4,5].includes(t.type),m=t.rating>0,_=t.rating>0?"tb_mwf_rating_content":"tb_mwf_content",g=1===t.type&&e.textDecorate?"tb_mwf_text_decoration tb_mwf_text_post":"",p=!(!a.postAuthor||t.author.isInstaUser),w=t.network;return(0,c.jsx)("div",{className:"tb_mwf_post_wrapper","data-id":t.id,"tb-network":w.icon,ref:this.cardRef,children:(0,c.jsxs)("div",{className:"tb_mwf_post_in",onClick:s(o,t),children:[(0,c.jsxs)("div",{className:"tb_mwf_post_media_wrapp",children:[u||65==a.themeId?null:(0,c.jsxs)("div",{className:"tb_mwf_social_top_",children:[" ",(0,c.jsx)(d.default,{networkClass:"tb_mwf_social_center_ico",network:w,ThemeRule:a})," "]}),u?(0,c.jsx)(i.Z,{itemData:t,wall:h,autoplayVideo:this.state.autoplay}):null,m?(0,c.jsx)("div",{className:"tb_mwf_rating__ ".concat(29===w.id?"tb_mwf_onsite_rating__":""),children:(0,c.jsx)(r.Z,{rating:t.rating,network:w})}):null]}),a.captionStatus?null:(0,c.jsxs)("div",{className:a.postAuthor||a.socialAction||a.postTime?"tb_mwf_contant_wrapper":"",children:[p||a.postTime||w.id&&a.socialAction?(0,c.jsx)(l.Z,{postData:t,ThemeRule:a}):null,a.hideContent||[65,63].includes(a.themeId)?null:(0,c.jsx)(n.Z,{item:t,contentClass:"".concat(_," ").concat(g),font:a.font,ThemeRule:a,personalization:e,contentTitle:t.contentTitle},t.id)]})]})})}}const u=(0,o.$j)((t=>({modalPop:t.modalPop})))(h)},98759:(t,e,a)=>{"use strict";a.d(e,{Z:()=>m});var s=a(72791),o=a(79200),l=a(2703),i=a(31725),n=a.n(i),r=function(){return r=Object.assign||function(t){for(var e,a=1,s=arguments.length;a<s;a++)for(var o in e=arguments[a])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)};const d=function(t){for(var e=t.url,a=t.allowFullScreen,o=t.position,l=t.display,i=t.height,d=t.width,c=t.overflow,h=t.styles,u=t.onLoad,m=t.onMouseOver,_=t.onMouseOut,g=t.scrolling,p=t.id,w=t.frameBorder,b=t.ariaHidden,f=t.sandbox,v=t.allow,x=t.className,y=t.title,k=t.ariaLabel,j=t.ariaLabelledby,N=t.name,C=t.target,T=t.loading,I=t.importance,S=t.referrerpolicy,F=t.allowpaymentrequest,P=t.src,R=n()({src:P||e,target:C||null,style:{position:o||null,display:l||"block",overflow:c||null},scrolling:g||null,allowpaymentrequest:F||null,importance:I||null,sandbox:f||null,loading:T||null,styles:h||null,name:N||null,className:x||null,referrerpolicy:S||null,title:y||null,allow:v||null,id:p||null,"aria-labelledby":j||null,"aria-hidden":b||null,"aria-label":k||null,width:d||null,height:i||null,onLoad:u||null,onMouseOver:m||null,onMouseOut:_||null}),Z=Object.create(null),z=0,L=Object.keys(R);z<L.length;z++){var D=L[z];null!=R[D]&&(Z[D]=R[D])}for(var M=0,A=Object.keys(Z.style);M<A.length;M++){var O=A[M];null==Z.style[O]&&delete Z.style[O]}if(a)if("allow"in Z){var U=Z.allow.replace("fullscreen","");Z.allow=("fullscreen "+U.trim()).trim()}else Z.allow="fullscreen";return w>=0&&(Z.style.hasOwnProperty("border")||(Z.style.border=w)),s.createElement("iframe",r({},Z))};var c=a(96710),h=a(80184);class u extends s.PureComponent{constructor(t){super(t),this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={imgUrl:t.itemData.postFileNew,videoLoaded:!1},this.myRef=s.createRef()}render(){const{itemData:t,wallID:e,wall:a,autoplayVideo:s=!0}=this.props,{imgUrl:i,videoLoaded:n}=this.state,r=3===t.type||5===t.type,u=2===t.type||4===t.type,m=7===t.network.id,_=!!(t.imageList&&t.imageList.length>0),g=_&&r?"tb_fc_multi_images_ico_bottom":"tb_fc_multi_images_ico",p=(0,l.oF)();t.mediaUrl=p&&t.mediaClip&&"undefined"!=t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl;const w=!!p&&s;return(0,h.jsxs)("div",{className:"tb_fc_media_wrap mediaHolder".concat(t.id),role:"img","aria-label":"Post Image",style:{height:"100%",background:"#000000"},children:[_&&!p?(0,h.jsx)("div",{className:"".concat(g," tb__icon tb-multiple")}):null,r&&!p?m?(0,h.jsx)("div",{className:"tb_fc_youtube_ico tb__icon tb-youtube",children:" "}):(0,h.jsx)("div",{className:"tb_fc_video_ico tb__icon tb-reels",children:" "}):null,u?(0,h.jsx)("img",{loading:"lazy",src:i,"data-link":t.link,"data-load":"0","data-network":t.network.id,"data-wall-id":e,"data-item-id":t.id,"data-filter-id":t.filterId,onLoad:this.onLoad,onError:t=>(0,o.ht)(t),style:{height:"100%"},width:"300px",height:"300px"}):t.link&&t.networkId&&30==t.networkId&&t.link.indexOf("vk")>=0?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(d,{className:"tb-detail-image-iframe",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",src:"".concat(t.mediaUrl,"&autoplay=1&mute=1"),allowFullScreen:"true",style:{width:"100%!important"},"data-filter-id":t.filterId,"data-stories":t.stories,"data-type":"video","data-network":t.networkId,"data-link":t.link,"data-item-id":t.id,"data-load":0,height:"1000",width:"1000"})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{loading:"lazy",src:t.postFileNew,"data-load":"0","data-network":t.network.id,"data-wall-id":e,"data-item-id":t.id,"data-filter-id":t.filterId,onLoad:this.onLoad,onError:t=>(0,o.ht)(t),style:{width:"100%",height:"100%"},width:"300px",height:"300px"}),(0,h.jsx)("div",{className:"card_video__01",style:{display:n?"none":"block",opacity:n?0:1,width:"100%",height:"100%"},children:3!=t.networkId?(0,h.jsx)("video",{poster:t.postFileNew,src:s?"".concat(t.mediaUrl):null,autoPlay:w,muted:!0,loop:1,onError:t=>{this.setState({videoLoaded:!0})},"data-type":"video","data-network":t.networkId,"data-filter-id":t.filterId,"data-link":t.link,"data-load":0,"data-tb":a.UserDetail.db_table,"data-wall-id":a.Wall.id,"data-item-id":t.id,"data-owner-id":a.Wall.owner,height:"400",width:"400"}):(0,h.jsx)(c.Z,{poster:t.postFileNew,style:{display:"contents",width:"".concat(4.8,"vw"),height:"".concat(.3*9,"vw")},className:"tb_post_vid_005",url:t.mediaUrl,playing:w,loop:!0,muted:!0,onReady:t=>p?this.setState({videoLoaded:!1}):null})})]})]})}}const m=(0,s.memo)(u)},70757:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});var s=a(72791),o=a(80184);const l=s.lazy((()=>a.e(1088).then(a.bind(a,41088))));class i extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,font:i}=this.props;return 1===a.iconType&&(7!==t.id&&4!==t.id)?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:a.iconColor},children:(0,o.jsx)("div",{})}):(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(l,{network:t,ThemeRule:a,networkClass:e})]})}}},46476:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var s=a(72791),o=a(35737),l=a(34867),i=a(80184);const n=a(80844),r=t=>(0,i.jsx)(o.default,{children:(0,l.ZP)(t)}),d=t=>{let{data:e,content:a,Personalization:s}=t;const o={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,i.jsx)(i.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,l.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(n(a,/#(\w+)/g,((t,e)=>(0,i.jsxs)("strong",{className:"tb_text_hashtag",style:o,children:["#",t]}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?r(window.slackdown.parse(n(a,e.hash.hashString,((t,e)=>(0,i.jsx)("strong",{className:"tb_text_hashtag",style:o,children:t}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(n(a,/#(\w+)/g,((t,e)=>(0,i.jsxs)("strong",{className:"tb_text_hashtag",style:o,children:["#",t]},e))),e.slackMember)):r(window.slackdown.parse(a,e.slackMember))}):(0,i.jsx)(i.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,l.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?n((0,l.ZP)(a),/#(\w+)/g,((t,e)=>(0,i.jsxs)("strong",{className:"tb_text_hashtag",style:o,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?n((0,l.ZP)(a),e.hash.hashString,((t,e)=>(0,i.jsx)("strong",{className:"tb_text_hashtag",style:o,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?n((0,l.ZP)(a),/#(\w+)/g,((t,e)=>(0,i.jsxs)("strong",{className:"tb_text_hashtag",style:o,children:["#",t]},e))):(0,l.ZP)(a)})},c=(0,s.memo)(d)},42308:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var s,o=a(72791),l=a(34867),i=a(2703),n=a(46476),r=a(80184);class d extends o.PureComponent{constructor(t){super(t),this.handleResize=()=>{const{item:t}=this.props;s=setTimeout((()=>{var e,a;const s=null===(e=document.getElementById("tb-ss-post--card".concat(t.id)))||void 0===e?void 0:e.offsetWidth,o=null===(a=document.getElementById("tb-ss-post--card".concat(t.id)))||void 0===a?void 0:a.offsetHeight,l=Math.min(s/20);this.setState({fontSize:l,cardHeight:o,loadData:Math.random()})}),1e3)},this.updateText=()=>{const{ThemeRule:t}=this.props;[74,76,77].includes(t.themeId)&&((0,i.OX)(t.trimcontent),setTimeout((()=>{this.setState({loadContent:!0})}),100))},this.state={fontSize:0,loadData:0,cardHeight:0,loadContent:![74,76,77].includes(t.ThemeRule.themeId)}}componentDidMount(){this.handleResize(),window.addEventListener("resize",this.handleResize)}componentWillUnmount(){window.removeEventListener("resize",this.handleResize),s&&clearTimeout(s)}render(){const{ThemeRule:t,personalization:e,item:a,contentTitle:s,largeBlock:o}=this.props,{loadData:d,loadContent:c}=this.state,h=t.font_varient?t.font_varient.split("-"):{},u=h.length>1?h[1]:"",m=3==t.captionFontWeight?"bold":2==t.captionFontWeight?"600":1==t.captionFontWeight?"100":h.length>0?h[0].includes("regular")?"normal":h[0]:"",_=t.css_font?t.css_font:"",g="".concat(t.fontSize&&![74,76,77,68].includes(t.themeId)?"".concat(t.fontSize,"px"):"inherit"),p={color:t.fontColor,fontWeight:m,fontFamily:_,fontStyle:u},w={font:68!=t.themeId?"".concat(u):"",WebkitLineClamp:t.trimcontent?o?10:3:"",display:t.trimcontent?"-webkit-box":"block",fontSize:g},b=20==a.network.id?a.content:(0,i.Fx)(a.content);return(0,r.jsx)("div",{id:"tb-ss-post--card".concat(a.id),className:"post-card-outer tb-cTBfont- ".concat(t.font_varient),"aria-label":"Post Content",style:p,children:(0,r.jsx)("div",{className:"resize",style:w,onLoad:this.updateText(),children:c?(0,r.jsxs)(r.Fragment,{children:[s?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,l.ZP)(s)}):null,(0,r.jsx)(n.Z,{data:a,content:b,Personalization:e},d),"   "]}):null})})}}},19036:(t,e,a)=>{"use strict";a.d(e,{Z:()=>i});var s=a(72791),o=a(80184);const l=t=>{let{network:e}=t;const{className:a,color:s}={3:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#1b74e4"},4:{className:"tb_rating_ico__ tb__icon tb-rating tb-google-rating",color:"#F8B90C"},19:{className:"tb_rating_ico__ tb__icon tb-rating tb-yelp-rating",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-rating tb-airbnb-rating",color:"#ff385c"},29:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#613983"}}[e.id]||{className:"tb_rating_ico__ tb__icon tb-rating",color:"#F8B90C"};return(0,o.jsx)("div",{className:a,style:{color:s},"tb-network":e.id})};class i extends s.PureComponent{render(){const{rating:t,network:e}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>(0,o.jsx)(l,{network:e}))):null})}}},27668:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(72791),o=a(2703),l=a(80184);const i=t=>{const{postTime:e,timeClass:a,authorNameStyle:i}=t,n=(0,s.useMemo)((()=>(0,o.Sy)(e)),[]);return(0,l.jsx)("div",{className:a,style:i,children:n})},n=(0,s.memo)(i)},50247:()=>{}}]);
//# sourceMappingURL=8933.2e5cd026.chunk.js.map