(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7066,7234,7668,757],{97234:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var s=a(72791),i=a(2703),o=a(14496),n=a(80184);class l extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:a,network:s}=this.props;return(0,n.jsx)("div",{className:a,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(a,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,i.P)(e.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(o.Z,{authorClass:a,username:e.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},14496:(t,e,a)=>{"use strict";a.d(e,{Z:()=>i});a(72791);var s=a(80184);const i=t=>{let{username:e,network:a}=t;return(0,s.jsx)("img",{className:"tb_nc_author_profile__",src:"https://ui-avatars.com/api/?name=".concat(function(t){if(t){var e=t.match(/[A-Za-z]/);return e?e[0]:""}return""}(e),"&background=").concat(String(null===a.id?"#000":a.color).replace("#",""),"&color=fff&length=1"),alt:e,width:44,height:44})}},49671:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(72791),i=a(97234),o=a(27668),n=a(70757),l=a(80184);class r extends s.PureComponent{render(){var t,e,a;const{ThemeRule:s,postData:r}=this.props,c=null!==(t=null===r||void 0===r?void 0:r.createdAt)&&void 0!==t?t:"",d=null!==(e=null===r||void 0===r?void 0:r.author)&&void 0!==e?e:"",h=null!==(a=null===r||void 0===r?void 0:r.network)&&void 0!==a?a:"",p={color:s.authorColor,fontFamily:s.authorFont,fontStyle:s.authorFontVariant},u={backgroundColor:s.authorColor},m=!(!r||!s.postAuthor||d.isInstaUser),g=!(!s.postAuthor||!s.postTime);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"tb_mwf_author_wrapper",children:[m||s.postTime?(0,l.jsxs)("div",{className:"tb_mwf_author",children:[m?(0,l.jsx)(i.default,{network:h,author:d,authorClass:"tb_mwf_author_profile"},d.username):"",(0,l.jsxs)("div",{className:"tb_mwf_author_info",children:[m?(0,l.jsx)("div",{className:"tb_mwf_authorname tb-cTBfont-".concat(s.authorFontVariant?s.authorFontVariant:null),style:p,children:(0,l.jsx)("strong",{children:d.name})}):"",(0,l.jsxs)("div",{className:"tb_mwf_post_info",children:[m&&![74,76,77].includes(s.themeId)?(0,l.jsx)("div",{className:"tb_mwf_username tb-cTBfont-".concat(s.authorFontVariant),style:p,children:d.username}):"",g&&m?(0,l.jsx)("div",{className:"tb_mwf_seprator",style:u,children:" "}):"",s.postTime?(0,l.jsx)(o.default,{postTime:c,timeClass:"tb_mwf_time",authorNameStyle:p}):""]})]})]}):null,h.id&&s.socialAction?(0,l.jsx)("div",{className:"tb_mwf_social_",style:{borderBottom:78==s.themeId?"60px solid ".concat(1==s.iconType?s.iconColor:h.color):"inherit"},children:(0,l.jsx)(n.default,{networkClass:"tb_mwf_social_ico",network:h,ThemeRule:s})}):null]})," "]})}}},16243:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(72791),i=a(80184);class o extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:a,onClickToCTA:s,item:o}=this.props,n=!(!a||1!==a.status),l={color:n?a.color:t.color,backgroundColor:n?a.background:t.background};return(0,i.jsxs)("div",{className:e,style:l,onClick:e=>{e.stopPropagation(),s(o),window.open("".concat(n?a.url:t.url),"_blank")},children:[" ",n?a.text:t.text]})}}const n=o},98759:(t,e,a)=>{"use strict";a.d(e,{Z:()=>p});var s=a(72791),i=a(79200),o=a(31725),n=a.n(o),l=function(){return l=Object.assign||function(t){for(var e,a=1,s=arguments.length;a<s;a++)for(var i in e=arguments[a])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},l.apply(this,arguments)};const r=function(t){for(var e=t.url,a=t.allowFullScreen,i=t.position,o=t.display,r=t.height,c=t.width,d=t.overflow,h=t.styles,p=t.onLoad,u=t.onMouseOver,m=t.onMouseOut,g=t.scrolling,_=t.id,w=t.frameBorder,b=t.ariaHidden,f=t.sandbox,x=t.allow,v=t.className,y=t.title,j=t.ariaLabel,k=t.ariaLabelledby,C=t.name,N=t.target,D=t.loading,S=t.importance,T=t.referrerpolicy,I=t.allowpaymentrequest,P=t.src,R=n()({src:P||e,target:N||null,style:{position:i||null,display:o||"block",overflow:d||null},scrolling:g||null,allowpaymentrequest:I||null,importance:S||null,sandbox:f||null,loading:D||null,styles:h||null,name:C||null,className:v||null,referrerpolicy:T||null,title:y||null,allow:x||null,id:_||null,"aria-labelledby":k||null,"aria-hidden":b||null,"aria-label":j||null,width:c||null,height:r||null,onLoad:p||null,onMouseOver:u||null,onMouseOut:m||null}),F=Object.create(null),M=0,H=Object.keys(R);M<H.length;M++){var O=H[M];null!=R[O]&&(F[O]=R[O])}for(var U=0,W=Object.keys(F.style);U<W.length;U++){var Z=W[U];null==F.style[Z]&&delete F.style[Z]}if(a)if("allow"in F){var A=F.allow.replace("fullscreen","");F.allow=("fullscreen "+A.trim()).trim()}else F.allow="fullscreen";return w>=0&&(F.style.hasOwnProperty("border")||(F.style.border=w)),s.createElement("iframe",l({},F))};var c=a(96710),d=a(80184);class h extends s.PureComponent{constructor(t){super(t),this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={imgUrl:t.itemData.postFileNew,videoLoaded:!1},this.myRef=s.createRef()}render(){const{itemData:t,wall:e,autoplayVideo:a=!0}=this.props,{id:s}=e.Wall,{imgUrl:o,videoLoaded:n}=this.state,{type:l,network:h,imageList:p,link:u,filterId:m,mediaUrl:g,stories:_,postFileNew:w,networkId:b,mediaClip:f}=t,x=t.id,v=e.isDisplay,y=3===l||5===l,j=2===l||4===l,k=!!(t.mediaClip&&"undefined"!=t.mediaClip&&String(t.mediaClip).length>0),C=!(v||!y||!e.ThemeRule.autoPlay||!k),N=7===h.id,D=!!(p&&p.length>0),S=D&&y?"tb_fc_multi_images_ico_bottom":"tb_fc_multi_images_ico";t.mediaUrl=(v||C)&&k?t.mediaClip:t.mediaUrl;const T=v?a:C,I=!v&&(!!(e.User&&Object.keys(e.User).length>0)&&143031==e.User.id);return(0,d.jsxs)("div",{className:"tb_fc_media_wrap mediaHolder".concat(x),role:"img","aria-label":"Post Image",style:{height:"100%",background:"#000000"},children:[D&&!v?(0,d.jsx)("div",{className:"".concat(S," tb__icon tb-multiple"),children:" "}):null,y&&!v?N?(0,d.jsx)("div",{className:"tb_fc_youtube_ico tb__icon tb-youtube",children:" "}):(0,d.jsx)("div",{className:"tb_fc_video_ico tb__icon tb-reels",children:" "}):null,j?(0,d.jsx)("img",{loading:"lazy",src:o,"data-link":u,"data-load":"0","data-network":h.id,"data-wall-id":s,"data-item-id":x,"data-filter-id":m,onLoad:this.onLoad,draggable:!1,onError:t=>(0,i.ht)(t),style:{height:"100%"},width:"300px",height:"300px"}):u&&b&&30==b&&u.indexOf("vk")>=0?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(r,{className:"tb-detail-image-iframe",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",src:"".concat(g,"&autoplay=1&mute=1"),allowFullScreen:"true",style:{width:"100%!important"},"data-filter-id":m,"data-stories":_,"data-type":"video","data-network":b,"data-link":u,"data-item-id":x,"data-load":0,draggable:!1,height:"1000",width:"1000"})}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("img",{loading:"lazy",src:w,"data-load":"0","data-network":h.id,"data-wall-id":s,"data-item-id":x,"data-filter-id":m,onLoad:this.onLoad,draggable:!1,onError:t=>{(0,i.ht)(t)},style:{width:"100%",height:"100%"},width:"300px",height:"300px"}),(0,d.jsx)("div",{className:"card_video__01",style:{display:n?"none":"block",opacity:n?0:1,width:"100%",height:"100%"},children:3!=b?(0,d.jsx)("video",{poster:w,src:a?"".concat(t.mediaUrl):null,autoPlay:T,muted:!0,loop:1,onError:t=>{this.setState({videoLoaded:!0})},"data-type":"video","data-network":b,"data-filter-id":m,"data-link":u,"data-load":0,"data-tb":e.UserDetail.db_table,"data-wall-id":e.Wall.id,"data-item-id":x,"data-owner-id":e.Wall.owner,height:"400",width:"400",controls:I},"".concat(this.props.keyRender,"-media-player")):(0,d.jsx)(c.Z,{poster:w,style:{display:"contents",width:"".concat(4.8,"vw"),height:"".concat(.3*9,"vw")},className:"tb_post_vid_005",url:"".concat(f&&"undefined"!=f&&String(f).length>0?f:g),playing:!!v,loop:!0,muted:!0,controls:I,onReady:t=>v?this.setState({videoLoaded:!1}):null},"".concat(this.props.keyRender,"-media-player"))})]})]})}}const p=(0,s.memo)(h)},70757:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(72791),i=a(80184);const o=s.lazy((()=>a.e(1088).then(a.bind(a,41088))));class n extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a}=this.props;return 1===a.iconType&&(7!==t.id&&4!==t.id)?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:a.iconColor},children:(0,i.jsx)("div",{})}):(0,i.jsxs)(s.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(o,{network:t,ThemeRule:a,networkClass:e})]})}}},71313:(t,e,a)=>{"use strict";a.d(e,{d:()=>n});var s=a(72791),i=a(2703),o=a(80184);function n(t){return class extends s.Component{constructor(t){super(t),this.cardRef=s.createRef(null),this.startLoadingVideo=t=>{const{itemData:e,wall:a}=this.props;if(a&&a.ThemeRule&&Object.keys(a.ThemeRule).length>0&&3==e.type||5==e.type){const e=a.ThemeRule.themeId,o=!(0,i.eN)();try{if(o&&window.innerWidth>920&&e&&[62,63,64,65,66,69,70,73].includes(parseInt(e))){let e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.setState({autoplay:!0}):this.setState({autoplay:!1})}))}),{rootMargin:"50px",threshold:1});t.current&&e.observe(t.current)}else this.setState({autoplay:!0})}catch(s){this.setState({autoplay:!0})}}},this.state={autoplay:!1}}componentDidMount(){this.startLoadingVideo(this.cardRef)}render(){return(0,o.jsx)(t,{...this.state,...this.props,cardRef:this.cardRef})}}}},46476:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var s=a(72791),i=a(35737),o=a(34867),n=a(80184);const l=a(80844),r=t=>(0,n.jsx)(i.default,{children:(0,o.ZP)(t)}),c=t=>{let{data:e,content:a,Personalization:s}=t;const i={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(l(a,/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:i,children:["#",t]}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?r(window.slackdown.parse(l(a,e.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:i,children:t}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(l(a,/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:i,children:["#",t]},e))),e.slackMember)):r(window.slackdown.parse(a,e.slackMember))}):(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?l((0,o.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:i,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?l((0,o.ZP)(a),e.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:i,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?l((0,o.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:i,children:["#",t]},e))):r(a)})},d=(0,s.memo)(c)},42308:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(72791),i=a(34867),o=a(2703),n=a(46476),l=a(80184);class r extends s.PureComponent{constructor(t){super(t),this.updateText=()=>{const{ThemeRule:t}=this.props;[74,76,77].includes(t.themeId)&&((0,o.OX)(t.trimcontent),setTimeout((()=>this.setState({loadContent:!0})),100))},this.state={loadContent:![74,76,77].includes(t.ThemeRule.themeId)}}render(){const{ThemeRule:t,personalization:e,item:a,contentTitle:s,largeBlock:r,wall:c}=this.props,{loadContent:d}=this.state,h=t.font_varient?t.font_varient.split("-"):{},p=h.length>1?h[1]:"",u=3==t.captionFontWeight?"bold":2==t.captionFontWeight?"600":1==t.captionFontWeight?"100":h.length>0?h[0].includes("regular")?"normal":h[0]:"",m=t.css_font?t.css_font:"",g="".concat(t.fontSize&&![74,76,77,68].includes(t.themeId)?"".concat(t.fontSize,"px"):"inherit"),_={color:t.fontColor,fontWeight:u,fontFamily:m,fontStyle:p},w={font:68!=t.themeId?"".concat(p):"",WebkitLineClamp:t.trimcontent?r?10:78==t.themeId?6:3:"",display:t.trimcontent?"-webkit-box":"block",fontSize:g},b=c.isDisplay||20==a.network.id?a.content:(0,o.Fx)(a.content);return(0,l.jsx)("div",{id:"tb-ss-post--card".concat(a.id),className:"post-card-outer tb-cTBfont- ".concat(t.font_varient),"aria-label":"Post Content",style:_,children:(0,l.jsx)("div",{className:"resize",style:w,onLoad:this.updateText(),children:d?(0,l.jsxs)(l.Fragment,{children:[s?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(s)}):null,(0,l.jsx)(n.Z,{data:a,content:b,Personalization:e},a.id),"   "]}):null})})}}},19036:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(72791),i=a(80184);const o=t=>{let{network:e}=t;const{className:a,color:s}={3:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#1b74e4"},4:{className:"tb_rating_ico__ tb__icon tb-rating tb-google-rating",color:"#F8B90C"},19:{className:"tb_rating_ico__ tb__icon tb-rating tb-yelp-rating",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-rating tb-airbnb-rating",color:"#ff385c"},29:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#613983"}}[e.id]||{className:"tb_rating_ico__ tb__icon tb-rating",color:"#F8B90C"};return(0,i.jsx)("div",{className:a,style:{color:s},"tb-network":e.id})};class n extends s.PureComponent{render(){const{rating:t,network:e}=this.props;return(0,i.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>(0,i.jsx)(o,{network:e},a))):null})}}},27668:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var s=a(72791),i=a(2703),o=a(80184);const n=t=>{const{postTime:e,timeClass:a,authorNameStyle:n}=t,l=(0,s.useMemo)((()=>(0,i.Sy)(e)),[]);return(0,o.jsx)("div",{className:a,style:n,children:l})},l=(0,s.memo)(n)},62826:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>x});var s=a(72791),i=a(60173),o=a(77581),n=a(49671),l=a(16243),r=a(19036),c=a(2703),d=a(42308),h=a(98759),p=a(80184);class u extends s.PureComponent{constructor(t){super(t),this.getSwiper=()=>{const t=document.getElementById("swiper-row");setTimeout((()=>{if(t){const e=t.clientHeight,a=20*e/100;this.setState({swiper:e-a})}}),10)},this.state={swiper:0},this.mediaHeight=s.createRef()}componentDidMount(){this.getSwiper(),window.addEventListener("resize",(()=>{this.getSwiper()}))}render(){var t;const{itemData:e,autoplay:a,cardRef:s,clickToShowPopUp:i,itemIndex:o,wall:u,ownerId:m,onClickToCTA:g,themeHeight:_,row:w}=this.props,{ThemeRule:b,Personalization:f}=u,{themeId:x}=b,{swiper:v}=this.state,y=2===e.type||3===e.type||4===e.type||5===e.type,j=!!(e.rating&&e.rating>0),k={padding:b.padding/2,height:[71].includes(x)&&2==w?"50vh":""},C={backgroundColor:b.cardColor,padding:[67,68].includes(b.themeId)?b.spacing:[73].includes(b.themeId)?0:b.spacing,borderRadius:b.borderRadius},N=70!=b.themeId||e.file||j?null:"calc(100vh - ".concat(_+100,"px)"),D=e.rating>0?"tb_fc_rating_content":"tb_fc_content",S=1===e.type?"tb_fc_text_post":"",T=1===e.type&&f.textDecorate?"tb_fc_text_decoration":"",I=!!(null!==f&&void 0!==f&&f.cta.ctaStatus||null!==e&&void 0!==e&&null!==(t=e.cta)&&void 0!==t&&t.status),P=b.trimcontent?(0,c.Sv)(e.content,140):e.content,R=!(!b.postAuthor||e.author.isInstaUser),F=e.network;return(0,p.jsxs)(p.Fragment,{children:[!b.hideContent||e.postFileNew||j?(0,p.jsx)("div",{"item-id":e.id,id:"tb-hc-post-".concat(e.id),className:"tb_fc_post_wrapper ".concat(e.filename?"":"textPostCard","  ").concat(e.file||j||70!=b.themeId?"":"snapHeight"),onClick:i(o,e),"aria-label":"Wrapper",style:k,ref:s,children:(0,p.jsxs)("div",{className:"tb_fc_post_in",style:C,"aria-label":"Card Post",children:[y?(0,p.jsx)("div",{className:"tb_fc_post_media_wrapp",role:"img","aria-label":"Media Wrapper",children:(0,p.jsx)(h.Z,{ThemeRule:b,themeHeight:_,itemData:e,wall:u,autoplayVideo:a})}):null,j?(0,p.jsx)("div",{className:"tb_fc_rating__",style:{height:N,aspectRatio:e.file||70!=b.themeId?"auto":"1/1"},children:(0,p.jsx)(r.Z,{rating:e.rating,network:e.network})}):null,b.captionStatus?null:(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"tb_fc_contant_wrapper ".concat(S),"aria-label":"Post Content Wrapper",children:[R||b.postTime||F.id&&b.socialAction?(0,p.jsx)(n.Z,{ownerId:m,postTime:e.createdAt,author:e.author,ThemeRule:b,rating:e.rating,postData:e}):null,I?(0,p.jsxs)("div",{className:"tb_fc_post_cta","aria-label":"CTA Wrapper",children:[(0,p.jsx)(l.Z,{ctaClass:"tb_fc_post_cta_btn",cta:f.cta,postCta:e.cta,item:e,onClickToCTA:g})," "]}):"",b.hideContent?null:(0,p.jsx)("div",{className:"tb_fc_content_wrapper__","aria-label":"Content Wrapper",style:{height:70!=b.themeId?N:!v||e.file||j||70!=b.themeId?"auto":v},children:(0,p.jsx)(d.Z,{contentClass:"".concat(D," ").concat(T),item:e,content:P,font:b.font,wall:u,ThemeRule:b,personalization:f,contentTitle:e.contentTitle})})]})})]})}):null," "]})}}var m=a(79200),g=a(49705),_=a(98625),w=a(71313);const b=t=>{const{inputRefs:e,inputName:a,themeId:s,row:i,numberOfCoumn:o,manageItemCount:n,slideDuration:l,mobileColumn:r,secondSildeData:c,trimContent:d,firstSildeData:h,completeDataObject:m,themeHeight:b,wall:f,postSizeInPx:x,clickToShowPopUp:v,onClickToCTA:y,requestData:j,type:k,isDisplay:C,postData:N}=t,D=2===k&&71==s&&C&&2==i?[1,2]:[1];return(0,p.jsx)(p.Fragment,{children:D.map(((t,k)=>{const D=0==k?h:c;return(0,p.jsx)(g.tq,{id:0==k&&"swiper-row",ref:t=>e[a]=t,style:{width:"100%"},onScroll:t=>j(t),onSlideChange:t=>j(t),onAutoplay:t=>j(t),navigation:{nextEl:".arrow-right",prevEl:".arrow-left"},speed:C&&71==s?8e3:1e3,loop:!0,grid:{rows:!C&&71==s&&2==i&&N.length>15?2:1},edgeSwipeDetection:!0,slidesPerView:o>0?o:n,allowTouchMove:!C,passiveListeners:!0,autoplay:{delay:71==s?1:l?1e3*l:5e3,disableOnInteraction:!1,reverseDirection:0!=k},breakpoints:{320:{slidesPerView:r>0?r:1,perMove:r>0?r:1},560:{slidesPerView:r>0?r:1,perMove:r>0?r:1},767:{slidesPerView:o>0?o-3:n,perMove:o>0?o-3:n},991:{slidesPerView:o>0?o:n,perMove:o>0?o:n}},modules:C?[_.pt,_.Gk,_.Rv]:[_.Gk,_.Rv,_.W_,_.rj],className:"tb_fc_post_slider splide2 ".concat(d?"tb_fc_fixed_height":""),children:D&&D.length>0&&D.map(((t,e)=>{const a=m[t],o=f.displayEmbed?u:(0,w.d)(u);return(a.file||70==s)&&(0,p.jsx)(g.o5,{style:{margin:0,padding:0,height:2==i?"calc(".concat(100/i,"vh - ").concat(b/2,"px)"):"100%"},children:(0,p.jsx)(o,{wall:f,itemData:a,themeHeight:b,row:i,itemIndex:e,clickToShowPopUp:v,onClickToCTA:y,postSizeInPx:x},"hr_".concat(e))},"splide".concat(e))}))},k)}))})};class f extends s.PureComponent{constructor(t){super(t),this.requestData=()=>{const{appendData:t,wall:e,preRender:a,hasMoreData:s}=this.props;s&&this.props.getDataNextSteps(e.Wall.id,Math.floor(Date.now()/1e3),e.ThemeRule.numberOfPosts,t.networkID,t.after,a,t.heightEvent)},this.state={parent_id:"",checkextraHeight:this.props.isDisplay?0:1,wHeight:0},this.inputRefs={}}componentDidMount(){const{isDisplay:t}=this.props;t&&(window.addEventListener("resize",(()=>this.updatethemHeight()),(()=>this.props.heightUpdate())),this.updatethemHeight())}updatethemHeight(){this.props.heightUpdate(),this.setState({wHeight:window.innerHeight}),setTimeout((()=>this.setState({checkextraHeight:!0})),200)}componentWillMount(){const{renderId:t}=this.props.renderId;this.setState({windowWidth:t?document.getElementById(t).clientWidth:window.innerWidth})}componentDidUpdate(t,e){const{wall:a}=this.props;(a.isEditor&&a.Banner.bannerUpdate!=t.wall.Banner.bannerUpdate||a.Banner.banner_position!=t.wall.Banner.banner_position||a.BannerImage.status!=t.wall.BannerImage.status)&&this.updatethemHeight()}render(){const{postData:t,completeDataObject:e,wall:a,clickToShowPopUp:s,hasMoreData:o,onClickToCTA:n,parentID:l,postSizeInPx:r,themeHeight:c}=this.props,{isDisplay:d,ThemeRule:h,Personalization:u}=a,{checkextraHeight:m,wHeight:g}=this.state,{themeId:_,numberOfCoumn:w,mobileColumn:f}=h,x=10==u.slideDelay?5:u.slideDelay,v=!!h.trimcontent,y=!!(window.innerWidth<768||i.tq),j=t&&t.length?y?1:t.length>3?3:t.length:3,k=l,C=71==h.themeId?h.multiRow?h.multiRow:2:1,N=Math.floor(t.postData.length>0?t.postData.length/2:[]);let D=71==_&&2==C&&d&&t.postData.length>15?t.postData&&t.postData.length>0&&t.postData.slice(0,N):t.postData,S=t.postData&&t.postData.length>15&&t.postData.slice(N);if(w>=D.length){const t=w-D.length+1;for(let e=0;e<=t;e++)D=[...D,D[e]]}if(w>=S.length&&71==_&&2==C){const t=w-S.length+1;for(let e=0;e<t;e++)S=[...S,S[e]]}if(w)var T=0;const I=document.querySelector(".onsiteupload_top_position");return I&&(T=I.clientHeight+10),m?(0,p.jsxs)("div",{id:"".concat(70==_?"horizontal":71==_?"motion":72==_?"vertical":"reels","_").concat(_),className:"tb_fc_post_container ".concat(d?"display":"widget"),ref:this.sliderHeight,style:{paddingTop:"".concat(T,"px"),height:1==C&&71==_||t.postData.length<15?"":"calc(100vh - ".concat(c,"px)")},children:[(0,p.jsx)(b,{inputRefs:this.inputRefs,inputName:k,themeId:_,row:C,numberOfCoumn:w,manageItemCount:j,slideDuration:x,mobileColumn:f,postData:t,trimContent:v,firstSildeData:D,secondSildeData:S,completeDataObject:e,themeHeight:c,parentID:l,wall:a,postSizeInPx:r,clickToShowPopUp:s,onClickToCTA:n,type:71==_&&d&&2==C?2:1,isDisplay:d,postData:t.postData,requestData:this.requestData},g),d?null:(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_fc_arrow_wrapper_",role:"navigation","aria-label":"Slider Navigation Wrapper",children:[(0,p.jsx)("div",{role:"navigation",className:"tb_fc_arrow splide__arrow arrow-left arrow tb_fc_arrow_left__ tb__icon tb-arrow-left-alt","aria-labelledby":"Navigation Previous Slide",children:" "}),(0,p.jsx)("div",{role:"navigation",className:"tb_fc_arrow splide__arrow arrow-right arrow tb_fc_arrow_right__ tb__icon tb-arrow-right-alt",onClick:o?this.requestData:null,"aria-labelledby":"Navigation Next Slide",children:" "})]})})]},c):null}}const x=(0,o.$j)(null,(t=>({getDataNextSteps:(e,a,s,i,o,n,l,r)=>t((0,m.Sx)(e,a,s,i,o,n,l,r))})))(f)},50247:()=>{}}]);
//# sourceMappingURL=7066.d82cd5c7.chunk.js.map