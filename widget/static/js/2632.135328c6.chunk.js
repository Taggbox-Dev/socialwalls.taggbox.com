(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2632,7234,7668,757],{97234:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var o=a(72791),i=a(2703),s=a(14496),n=a(80184);class r extends o.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:a,network:o}=this.props;return(0,n.jsx)("div",{className:a,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(a,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,i.P)(e.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(s.Z,{authorClass:a,username:e.name,network:o,color:null===o.id?"#000":o.color})},Math.random())}}},14496:(t,e,a)=>{"use strict";a.d(e,{Z:()=>i});a(72791);var o=a(80184);const i=t=>{let{username:e,network:a}=t;return(0,o.jsx)("img",{className:"tb_nc_author_profile__",src:"https://ui-avatars.com/api/?name=".concat(function(t){if(t){var e=t.match(/[A-Za-z]/);return e?e[0]:""}return""}(e),"&background=").concat(String(null===a.id?"#000":a.color).replace("#",""),"&color=fff&length=1"),alt:e,width:44,height:44})}},49671:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});var o=a(72791),i=a(97234),s=a(27668),n=a(70757),r=a(80184);class l extends o.PureComponent{render(){var t,e,a;const{ThemeRule:o,postData:l}=this.props,c=null!==(t=null===l||void 0===l?void 0:l.createdAt)&&void 0!==t?t:"",d=null!==(e=null===l||void 0===l?void 0:l.author)&&void 0!==e?e:"",h=null!==(a=null===l||void 0===l?void 0:l.network)&&void 0!==a?a:"",p={color:o.authorColor,fontFamily:o.authorFont,fontStyle:o.authorFontVariant},u={backgroundColor:o.authorColor},m=!(!l||!o.postAuthor||d.isInstaUser),g=!(!o.postAuthor||!o.postTime);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"tb_mwf_author_wrapper",children:[m||o.postTime?(0,r.jsxs)("div",{className:"tb_mwf_author",children:[m?(0,r.jsx)(i.default,{network:h,author:d,authorClass:"tb_mwf_author_profile"},d.username):"",(0,r.jsxs)("div",{className:"tb_mwf_author_info",children:[m?(0,r.jsx)("div",{className:"tb_mwf_authorname tb-cTBfont-".concat(o.authorFontVariant?o.authorFontVariant:null),style:p,children:(0,r.jsx)("strong",{children:d.name})}):"",(0,r.jsxs)("div",{className:"tb_mwf_post_info",children:[m&&![74,76,77].includes(o.themeId)?(0,r.jsx)("div",{className:"tb_mwf_username tb-cTBfont-".concat(o.authorFontVariant),style:p,children:d.username}):"",g&&m?(0,r.jsx)("div",{className:"tb_mwf_seprator",style:u,children:" "}):"",o.postTime?(0,r.jsx)(s.default,{postTime:c,timeClass:"tb_mwf_time",authorNameStyle:p}):""]})]})]}):null,h.id&&o.socialAction?(0,r.jsx)("div",{className:"tb_mwf_social_",children:(0,r.jsx)(n.default,{networkClass:"tb_mwf_social_ico",network:h,ThemeRule:o})}):null]})," "]})}}},16243:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var o=a(72791),i=a(80184);class s extends o.PureComponent{render(){const{cta:t,ctaClass:e,postCta:a,onClickToCTA:o,item:s}=this.props,n=!(!a||1!==a.status),r={color:n?a.color:t.color,backgroundColor:n?a.background:t.background};return(0,i.jsxs)("div",{className:e,style:r,onClick:e=>{e.stopPropagation(),o(s),window.open("".concat(n?a.url:t.url),"_blank")},children:[" ",n?a.text:t.text]})}}const n=s},98759:(t,e,a)=>{"use strict";a.d(e,{Z:()=>u});var o=a(72791),i=a(79200),s=a(2703),n=a(31725),r=a.n(n),l=function(){return l=Object.assign||function(t){for(var e,a=1,o=arguments.length;a<o;a++)for(var i in e=arguments[a])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},l.apply(this,arguments)};const c=function(t){for(var e=t.url,a=t.allowFullScreen,i=t.position,s=t.display,n=t.height,c=t.width,d=t.overflow,h=t.styles,p=t.onLoad,u=t.onMouseOver,m=t.onMouseOut,g=t.scrolling,_=t.id,w=t.frameBorder,b=t.ariaHidden,f=t.sandbox,v=t.allow,y=t.className,x=t.title,k=t.ariaLabel,j=t.ariaLabelledby,C=t.name,P=t.target,N=t.loading,T=t.importance,I=t.referrerpolicy,D=t.allowpaymentrequest,S=t.src,R=r()({src:S||e,target:P||null,style:{position:i||null,display:s||"block",overflow:d||null},scrolling:g||null,allowpaymentrequest:D||null,importance:T||null,sandbox:f||null,loading:N||null,styles:h||null,name:C||null,className:y||null,referrerpolicy:I||null,title:x||null,allow:v||null,id:_||null,"aria-labelledby":j||null,"aria-hidden":b||null,"aria-label":k||null,width:c||null,height:n||null,onLoad:p||null,onMouseOver:u||null,onMouseOut:m||null}),z=Object.create(null),F=0,M=Object.keys(R);F<M.length;F++){var W=M[F];null!=R[W]&&(z[W]=R[W])}for(var H=0,Z=Object.keys(z.style);H<Z.length;H++){var A=Z[H];null==z.style[A]&&delete z.style[A]}if(a)if("allow"in z){var L=z.allow.replace("fullscreen","");z.allow=("fullscreen "+L.trim()).trim()}else z.allow="fullscreen";return w>=0&&(z.style.hasOwnProperty("border")||(z.style.border=w)),o.createElement("iframe",l({},z))};var d=a(96710),h=a(80184);class p extends o.PureComponent{constructor(t){super(t),this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={imgUrl:t.itemData.postFileNew,videoLoaded:!1},this.myRef=o.createRef()}render(){const{itemData:t,wallID:e,wall:a}=this.props,{imgUrl:o,videoLoaded:n}=this.state,r=3===t.type||5===t.type,l=2===t.type||4===t.type,p=7===t.network.id,u=!!(t.imageList&&t.imageList.length>0),m=(0,s.oF)(),g=u&&r?"tb_fc_multi_images_ico_bottom":"tb_fc_multi_images_ico";return(0,h.jsxs)("div",{className:"tb_fc_media_wrap mediaHolder".concat(t.id),role:"img","aria-label":"Post Image",style:{height:"100%",background:"#000000"},children:[u&&!m?(0,h.jsx)("div",{className:"".concat(g," tb__icon tb-multiple"),children:" "}):null,r&&!m?p?(0,h.jsx)("div",{className:"tb_fc_youtube_ico tb__icon tb-youtube",children:" "}):(0,h.jsx)("div",{className:"tb_fc_video_ico tb__icon tb-reels",children:" "}):null,l?(0,h.jsx)("img",{loading:"lazy",src:o,"data-link":t.link,"data-load":"0","data-network":t.network.id,"data-wall-id":e,"data-item-id":t.id,"data-filter-id":t.filterId,onLoad:this.onLoad,onError:t=>(0,i.ht)(t),style:{height:"100%"},width:"300px",height:"300px"}):t.link&&t.networkId&&30==t.networkId&&t.link.indexOf("vk")>=0?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(c,{className:"tb-detail-image-iframe",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",src:"".concat(t.mediaUrl,"&autoplay=1&mute=1"),allowFullScreen:"true",style:{width:"100%!important"},"data-filter-id":t.filterId,"data-stories":t.stories,"data-type":"video","data-network":t.networkId,"data-link":t.link,"data-item-id":t.id,"data-load":0,height:"1000",width:"1000"})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{loading:"lazy",src:t.postFileNew,"data-load":"0","data-network":t.network.id,"data-wall-id":e,"data-item-id":t.id,"data-filter-id":t.filterId,onLoad:this.onLoad,onError:t=>{(0,i.ht)(t)},style:{width:"100%",height:"100%"},width:"300px",height:"300px"}),(0,h.jsx)("div",{className:"card_video__01",style:{display:n?"none":"block",opacity:n?0:1,width:"100%",height:"100%"},children:3!=t.networkId?(0,h.jsx)("video",{poster:t.postFileNew,src:"".concat(t.mediaUrl),autoPlay:!0,muted:!0,loop:1,onError:t=>{this.setState({videoLoaded:!0})},"data-type":"video","data-network":t.networkId,"data-filter-id":t.filterId,"data-link":t.link,"data-load":0,"data-tb":a.UserDetail.db_table,"data-wall-id":a.Wall.id,"data-item-id":t.id,"data-owner-id":a.Wall.owner,height:"400",width:"400"}):(0,h.jsx)(d.Z,{poster:t.postFileNew,style:{display:"contents",width:"".concat(4.8,"vw"),height:"".concat(.3*9,"vw")},className:"tb_post_vid_005",url:t.mediaUrl,playing:!!m,loop:!0,muted:!0,onReady:t=>m?this.setState({videoLoaded:!1}):null})})]})]})}}const u=(0,o.memo)(p)},70757:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var o=a(72791),i=a(80184);const s=o.lazy((()=>a.e(1088).then(a.bind(a,41088))));class n extends o.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,font:n}=this.props;return 1===a.iconType&&(7!==t.id&&4!==t.id)?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:a.iconColor},children:(0,i.jsx)("div",{})}):(0,i.jsxs)(o.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(s,{network:t,ThemeRule:a,networkClass:e})]})}}},46476:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var o=a(72791),i=a(35737),s=a(34867),n=a(80184);const r=a(80844),l=t=>(0,n.jsx)(i.default,{children:(0,s.ZP)(t)}),c=t=>{let{data:e,content:a,Personalization:o}=t;const i={color:o.hashtag_color,fontWeight:"bold",backgroundColor:1==o.hashtag_background_status?o.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,n.jsx)(n.Fragment,{children:1===o.hashtag_highlight&&0===o.hashtag_feed&&0===o.hashtag_all?(0,s.ZP)(a):1===o.hashtag_highlight&&0===o.hashtag_feed&&1===o.hashtag_all?l(window.slackdown.parse(r(a,/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:i,children:["#",t]}))),e.slackMember)):1===o.hashtag_highlight&&1===o.hashtag_feed&&0===o.hashtag_all?l(window.slackdown.parse(r(a,e.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:i,children:t}))),e.slackMember)):1===o.hashtag_highlight&&1===o.hashtag_feed&&1===o.hashtag_all?l(window.slackdown.parse(r(a,/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:i,children:["#",t]},e))),e.slackMember)):l(window.slackdown.parse(a,e.slackMember))}):(0,n.jsx)(n.Fragment,{children:1===o.hashtag_highlight&&0===o.hashtag_feed&&0===o.hashtag_all?(0,s.ZP)(a):1===o.hashtag_highlight&&0===o.hashtag_feed&&1===o.hashtag_all?r((0,s.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:i,children:["#",t]}))):1===o.hashtag_highlight&&1===o.hashtag_feed&&0===o.hashtag_all?r((0,s.ZP)(a),e.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:i,children:t}))):1===o.hashtag_highlight&&1===o.hashtag_feed&&1===o.hashtag_all?r((0,s.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:i,children:["#",t]},e))):(0,s.ZP)(a)})},d=(0,o.memo)(c)},42308:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var o,i=a(72791),s=a(34867),n=a(2703),r=a(46476),l=a(80184);class c extends i.PureComponent{constructor(t){super(t),this.handleResize=()=>{const{item:t}=this.props;o=setTimeout((()=>{var e,a;const o=null===(e=document.getElementById("tb-ss-post--card".concat(t.id)))||void 0===e?void 0:e.offsetWidth,i=null===(a=document.getElementById("tb-ss-post--card".concat(t.id)))||void 0===a?void 0:a.offsetHeight,s=Math.min(o/20);this.setState({fontSize:s,cardHeight:i,loadData:Math.random()})}),1e3)},this.updateText=()=>{const{ThemeRule:t}=this.props;[74,76,77].includes(t.themeId)&&((0,n.OX)(t.trimcontent),setTimeout((()=>{this.setState({loadContent:!0})}),100))},this.state={fontSize:0,loadData:0,cardHeight:0,loadContent:![74,76,77].includes(t.ThemeRule.themeId)}}componentDidMount(){this.handleResize(),window.addEventListener("resize",this.handleResize)}componentWillUnmount(){window.removeEventListener("resize",this.handleResize),o&&clearTimeout(o)}render(){const{ThemeRule:t,personalization:e,item:a,contentTitle:o,largeBlock:i}=this.props,{loadData:c,loadContent:d}=this.state,h=t.font_varient?t.font_varient.split("-"):{},p=h.length>1?h[1]:"",u=3==t.captionFontWeight?"bold":2==t.captionFontWeight?"600":1==t.captionFontWeight?"100":h.length>0?h[0].includes("regular")?"normal":h[0]:"",m=t.css_font?t.css_font:"",g="".concat(t.fontSize&&![74,76,77,68].includes(t.themeId)?"".concat(t.fontSize,"px"):"inherit"),_={color:t.fontColor,fontWeight:u,fontFamily:m,fontStyle:p},w={font:68!=t.themeId?"".concat(p):"",WebkitLineClamp:t.trimcontent?i?10:3:"",display:t.trimcontent?"-webkit-box":"block",fontSize:g},b=20==a.network.id?a.content:(0,n.Fx)(a.content);return(0,l.jsx)("div",{id:"tb-ss-post--card".concat(a.id),className:"post-card-outer tb-cTBfont- ".concat(t.font_varient),"aria-label":"Post Content",style:_,children:(0,l.jsx)("div",{className:"resize",style:w,onLoad:this.updateText(),children:d?(0,l.jsxs)(l.Fragment,{children:[o?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,s.ZP)(o)}):null,(0,l.jsx)(r.Z,{data:a,content:b,Personalization:e},c),"   "]}):null})})}}},19036:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var o=a(72791),i=a(80184);const s=t=>{let{network:e}=t;const{className:a,color:o}={3:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#1b74e4"},4:{className:"tb_rating_ico__ tb__icon tb-rating tb-google-rating",color:"#F8B90C"},19:{className:"tb_rating_ico__ tb__icon tb-rating tb-yelp-rating",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-rating tb-airbnb-rating",color:"#ff385c"},29:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#613983"}}[e.id]||{className:"tb_rating_ico__ tb__icon tb-rating",color:"#F8B90C"};return(0,i.jsx)("div",{className:a,style:{color:o},"tb-network":e.id})};class n extends o.PureComponent{render(){const{rating:t,network:e}=this.props;return(0,i.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>(0,i.jsx)(s,{network:e}))):null})}}},27668:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var o=a(72791),i=a(2703),s=a(80184);const n=t=>{const{postTime:e,timeClass:a,authorNameStyle:n}=t,r=(0,o.useMemo)((()=>(0,i.Sy)(e)),[]);return(0,s.jsx)("div",{className:a,style:n,children:r})},r=(0,o.memo)(n)},54194:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>y});var o=a(72791),i=a(60173),s=a(77581),n=a(49671),r=a(16243),l=a(19036),c=a(2703),d=a(42308),h=a(98759),p=a(80184);class u extends o.PureComponent{constructor(t){super(t),this.getSwiper=()=>{const t=document.getElementById("swiper-row");setTimeout((()=>{if(t){const e=t.clientHeight,a=20*e/100;this.setState({swiper:e-a})}}),10)},this.state={swiper:0},this.mediaHeight=o.createRef()}componentDidMount(){this.getSwiper(),window.addEventListener("resize",(()=>{this.getSwiper()}))}render(){var t;const{itemData:e,personalization:a,ThemeRule:o,clickToShowPopUp:i,itemIndex:s,ownerId:u,onClickToCTA:m,themeHeight:g,row:_,wall:w}=this.props,{themeId:b}=o,{swiper:f}=this.state,v=2===e.type||3===e.type||4===e.type||5===e.type,y=!!(e.rating&&e.rating>0),x={padding:o.padding/2,height:[71].includes(b)&&2==_?"50vh":""},k={backgroundColor:o.cardColor,padding:[67,68].includes(o.themeId)?o.spacing:[73].includes(o.themeId)?0:o.spacing,borderRadius:o.borderRadius},j=70!=o.themeId||e.file||y?null:"calc(100vh - ".concat(g+100,"px)"),C=e.rating>0?"tb_fc_rating_content":"tb_fc_content",P=1===e.type?"tb_fc_text_post":"",N=1===e.type&&a.textDecorate?"tb_fc_text_decoration":"",T=!!(null!==a&&void 0!==a&&a.cta.ctaStatus||null!==e&&void 0!==e&&null!==(t=e.cta)&&void 0!==t&&t.status),I=o.trimcontent?(0,c.Sv)(e.content,140):e.content,D=!(!o.postAuthor||e.author.isInstaUser),S=e.network;return(0,p.jsx)("div",{"item-id":e.id,id:"tb-hc-post-".concat(e.id),className:"tb_fc_post_wrapper ".concat(e.postFileNew?"":"textPostCard","  ").concat(e.file||y||70!=o.themeId?"":"snapHeight"),onClick:i(s,e),"aria-label":"Wrapper",style:x,children:(0,p.jsxs)("div",{className:"tb_fc_post_in",style:k,"aria-label":"Card Post",children:[v?(0,p.jsx)("div",{className:"tb_fc_post_media_wrapp",role:"img","aria-label":"Media Wrapper",children:(0,p.jsx)(h.Z,{ThemeRule:o,themeHeight:g,itemData:e,wall:w})}):null,y?(0,p.jsx)("div",{className:"tb_fc_rating__",style:{height:j,aspectRatio:e.file||70!=o.themeId?"auto":"1/1"},children:(0,p.jsx)(l.Z,{rating:e.rating,network:e.network})}):null,o.captionStatus?null:(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"tb_fc_contant_wrapper ".concat(P),"aria-label":"Post Content Wrapper",children:[D||o.postTime||S.id&&o.socialAction?(0,p.jsx)(n.Z,{ownerId:u,postTime:e.createdAt,author:e.author,network:e.network,font:o.iconColor,personalization:a,ThemeRule:o,rating:e.rating,postData:e}):null,T?(0,p.jsxs)("div",{className:"tb_fc_post_cta","aria-label":"CTA Wrapper",children:[(0,p.jsx)(r.Z,{ctaClass:"tb_fc_post_cta_btn",cta:a.cta,postCta:e.cta,item:e,onClickToCTA:m})," "]}):"",o.hideContent?null:(0,p.jsx)("div",{className:"tb_fc_content_wrapper__","aria-label":"Content Wrapper",style:{height:70!=o.themeId?j:!f||e.file||y||70!=o.themeId?"auto":f},children:(0,p.jsx)(d.Z,{contentClass:"".concat(C," ").concat(N),item:e,content:I,font:o.font,ThemeRule:o,personalization:a,contentTitle:e.contentTitle})})]})})]})})}}var m=a(70188);class g extends o.PureComponent{render(){const{brandingClass:t,personalization:e,sliderHeight:a}=this.props,o="".concat(m.do,"/media/branding-cards/br_card5.svg?v=1");return(0,p.jsx)("div",{className:t,ref:t=>{t&&(t.style.setProperty("display","block","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("width","100%","important"),t.style.setProperty("height","100%","important"))},children:(0,p.jsx)("a",{className:"tb_fc_post_in",href:m.Cx,target:"_blank",style:{backgroundColor:"#fff"},ref:t=>{t&&(t.style.setProperty("background-image","url(".concat(o,")"),"important"),t.style.setProperty("padding-bottom","110%","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("background-position","center","important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("display","block","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("width","100%","important"),t.style.setProperty("height","100%","important"))}})})}}var _=a(79200),w=a(49705),b=a(98625);const f=(0,c.oF)();class v extends o.PureComponent{constructor(t){super(t),this.requestData=()=>{const{appendData:t,wall:e,preRender:a,hasMoreData:o}=this.props;o&&this.props.getDataNextSteps(e.Wall.id,Math.floor(Date.now()/1e3),e.ThemeRule.numberOfPosts,t.networkID,t.after,a,t.heightEvent)},this.state={parent_id:"",checkextraHeight:f?0:1},this.inputRefs={}}componentDidMount(){f&&(window.addEventListener("resize",(()=>{this.props.heightUpdate()})),this.updatethemHeight())}updatethemHeight(){this.props.heightUpdate(),setTimeout((()=>{this.setState({checkextraHeight:!0})}),200)}componentWillMount(){const{renderId:t}=this.props.renderId;this.setState({windowWidth:t?document.getElementById(t).clientWidth:window.innerWidth})}componentDidUpdate(t,e){f&&this.updatethemHeight()}render(){const{postData:t,completeDataObject:e,wall:a,clickToShowPopUp:o,hasMoreData:s,onClickToCTA:n,parentID:r,postSizeInPx:l,themeHeight:c}=this.props,{checkextraHeight:d}=this.state,{themeId:h,numberOfCoumn:m,mobileColumn:_}=a.ThemeRule,v=10==a.Personalization.slideDelay?5:a.Personalization.slideDelay,y=!!a.ThemeRule.trimcontent,x=!!(window.innerWidth<768||i.tq),k=t&&t.length?x?1:t.length>3?3:t.length:3,j=(t&&t.length&&(x||(t.length>4||t.length)),r),C=71==a.ThemeRule.themeId?a.ThemeRule.multiRow?a.ThemeRule.multiRow:2:1,P=Math.floor(t.postData.length>0?t.postData.length/2:[]);let N=71==h&&2==C?t.postData&&t.postData.length>0&&t.postData.slice(0,P):t.postData,T=t.postData&&t.postData.length>0&&t.postData.slice(P);if(m>=N.length){const t=m-N.length+1;for(let e=0;e<=t;e++)N=[...N,N[e]]}if(m>=T.length&&71==h&&2==C){const t=m-T.length+1;for(let e=0;e<t;e++)T=[...T,T[e]]}if(m)var I=0;const D=document.querySelector(".onsiteupload_top_position");return D&&(I=D.clientHeight+10),d?(0,p.jsxs)("div",{id:"".concat(70==h?"horizontal":71==h?"motion":72==h?"vertical":"reels","_").concat(h),className:"tb_fc_post_container ".concat(f?"display":"widget"),ref:this.sliderHeight,style:{paddingTop:"".concat(I,"px"),height:1==C&&71==h?"":"calc(100vh - ".concat(c,"px)")},children:[(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(w.tq,{id:"swiper-row",ref:t=>this.inputRefs[j]=t,style:{width:"100%"},onScroll:t=>this.requestData(t),onSlideChange:t=>this.requestData(t),onAutoplay:t=>this.requestData(t),navigation:{nextEl:".arrow-right",prevEl:".arrow-left"},speed:f&&71==h?8e3:1e3,loop:!0,grid:{rows:f||71!=h||2!=C?1:2},edgeSwipeDetection:!0,slidesPerView:m>0?m:k,allowTouchMove:!f,passiveListeners:!0,autoplay:{delay:71==h?1:v?1e3*v:5e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:_>0?_:1,perMove:_>0?_:1},560:{slidesPerView:_>0?_:1,perMove:_>0?_:1},767:{slidesPerView:m>0?m-3:k,perMove:m>0?m-3:k},991:{slidesPerView:m>0?m:k,perMove:m>0?m:k}},modules:f?[b.pt,b.Gk,b.Rv]:[b.Gk,b.Rv,b.W_,b.rj],className:"tb_fc_post_slider splide2 ".concat(y?"tb_fc_fixed_height":""),children:N&&N.length>0&&N.map(((t,i)=>{const s=e[t];return(s.file||70==h)&&(0,p.jsx)(w.o5,{style:{margin:0,padding:0,height:2==C?"calc(".concat(100/C,"vh - ").concat(c/2,"px)"):"100%"},children:s.isPost?(0,p.jsx)(g,{brandingClass:"".concat(s.file?"snapHeight":""," tb_fc_post_wrapper"),idd:r,itemIndex:i,personalization:a.Personalization},"br_".concat(i)):(0,p.jsx)(u,{wall:a,ownerId:a.Wall.owner,itemData:s,themeHeight:c,row:C,itemIndex:i,personalization:a.Personalization,ThemeRule:a.ThemeRule,clickToShowPopUp:o,wallID:a.Wall.id,onClickToCTA:n,postSizeInPx:l},"hr_".concat(i))},"splide".concat(i))}))},t.postData),f?null:(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_fc_arrow_wrapper_",role:"navigation","aria-label":"Slider Navigation Wrapper",children:[(0,p.jsx)("div",{role:"navigation",className:"tb_fc_arrow splide__arrow arrow-left arrow tb_fc_arrow_left__ tb__icon tb-arrow-left-alt","aria-labelledby":"Navigation Previous Slide",children:" "}),(0,p.jsx)("div",{role:"navigation",className:"tb_fc_arrow splide__arrow arrow-right arrow tb_fc_arrow_right__ tb__icon tb-arrow-right-alt",onClick:s?this.requestData:null,"aria-labelledby":"Navigation Next Slide",children:" "})]})})]}),71==h&&f&&2==C?(0,p.jsx)(w.tq,{ref:t=>this.inputRefs[j]=t,style:{width:"100%"},onScroll:t=>{s&&t.progress>.8&&this.requestData(t)},onSlideChange:t=>{s&&t.progress>.8&&this.requestData(t)},onAutoplay:t=>{s&&t.progress>.8&&this.requestData(t)},navigation:{nextEl:".arrow-right",prevEl:".arrow-left"},speed:8e3,edgeSwipeDetection:!0,slidesPerView:m>0?m:k,allowTouchMove:!f,autoplay:{delay:1,disableOnInteraction:!1,reverseDirection:!0},loop:!0,breakpoints:{320:{slidesPerView:_>0?_:1,perMove:_>0?_:1},560:{slidesPerView:_>0?_:1,perMove:_>0?_:1},767:{slidesPerView:m>0?m-3:k,perMove:m>0?m-3:k},991:{slidesPerView:m>0?m:k,perMove:m>0?m:k}},modules:f?[b.pt,b.Gk,b.Rv]:[b.Gk,b.Rv,b.W_,b.rj],hasTrack:!0,className:"tb_fc_post_slider splide2 ".concat(y?"tb_fc_fixed_height":""),children:T&&T.length>0&&T.map(((t,i)=>{const s=e[t];return(s.file||70==h)&&(0,p.jsx)(w.o5,{style:{margin:0,padding:0,height:2==C?"calc(".concat(100/C,"vh - ").concat(c/2,"px)"):"100%"},children:s.isPost?(0,p.jsx)(g,{brandingClass:"".concat(s.file?"snapHeight":""," tb_fc_post_wrapper"),idd:r,itemIndex:i,personalization:a.Personalization},"br_".concat(i)):(0,p.jsx)(u,{wall:a,ownerId:a.Wall.owner,itemData:s,themeHeight:c,row:C,itemIndex:i,personalization:a.Personalization,ThemeRule:a.ThemeRule,clickToShowPopUp:o,wallID:a.Wall.id,onClickToCTA:n,postSizeInPx:l},"hr_".concat(i))},"splide".concat(i))}))},t.postData):(0,p.jsx)(p.Fragment,{})]},c):null}}const y=(0,s.$j)(null,(t=>({getDataNextSteps:(e,a,o,i,s,n,r,l)=>t((0,_.Sx)(e,a,o,i,s,n,r,l))})))(v)},50247:()=>{}}]);
//# sourceMappingURL=2632.135328c6.chunk.js.map