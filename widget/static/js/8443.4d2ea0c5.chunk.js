(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8443,7234,7668,757],{97234:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(72791),i=a(2703),l=a(14496),o=a(80184);class n extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:a,network:s}=this.props;return(0,o.jsx)("div",{className:a,children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(a,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,i.P)(e.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,o.jsx)(l.Z,{authorClass:a,username:e.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},14496:(t,e,a)=>{"use strict";a.d(e,{Z:()=>i});a(72791);var s=a(80184);const i=t=>{let{username:e,network:a}=t;return(0,s.jsx)("img",{className:"tb_nc_author_profile__",src:"https://ui-avatars.com/api/?name=".concat(function(t){if(t){var e=t.match(/[A-Za-z]/);return e?e[0]:""}return""}(e),"&background=000&color=fff&length=1"),alt:e,width:44,height:44})}},49671:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(72791),i=a(97234),l=a(27668),o=a(70757),n=a(80184);class r extends s.PureComponent{render(){var t,e,a;const{ThemeRule:s,postData:r}=this.props,c=null!==(t=null===r||void 0===r?void 0:r.createdAt)&&void 0!==t?t:"",d=null!==(e=null===r||void 0===r?void 0:r.author)&&void 0!==e?e:"",h=null!==(a=null===r||void 0===r?void 0:r.network)&&void 0!==a?a:"",m={color:s.authorColor,fontFamily:s.authorFont,fontStyle:s.authorFontVariant},u={backgroundColor:s.authorColor},p=!(!r||!s.postAuthor||d.isInstaUser),g=!(!s.postAuthor||!s.postTime);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"tb_mwf_author_wrapper",children:[p||s.postTime?(0,n.jsxs)("div",{className:"tb_mwf_author",children:[p?(0,n.jsx)(i.default,{network:h,author:d,authorClass:"tb_mwf_author_profile"},d.username):"",(0,n.jsxs)("div",{className:"tb_mwf_author_info",children:[p?(0,n.jsx)("div",{className:"tb_mwf_authorname tb-cTBfont-".concat(s.authorFontVariant?s.authorFontVariant:null),style:m,children:(0,n.jsx)("strong",{children:d.name})}):"",(0,n.jsxs)("div",{className:"tb_mwf_post_info",children:[p&&![74,76,77].includes(s.themeId)?(0,n.jsx)("div",{className:"tb_mwf_username tb-cTBfont-".concat(s.authorFontVariant),style:m,children:d.username}):"",g&&p?(0,n.jsx)("div",{className:"tb_mwf_seprator",style:u,children:" "}):"",s.postTime?(0,n.jsx)(l.default,{postTime:c,timeClass:"tb_mwf_time",authorNameStyle:m}):""]})]})]}):null,h.id&&s.socialAction?(0,n.jsx)("div",{className:"tb_mwf_social_",style:{borderBottom:78==s.themeId?"60px solid ".concat(1==s.iconType?s.iconColor:h.color):"inherit"},children:(0,n.jsx)(o.default,{networkClass:"tb_mwf_social_ico",network:h,ThemeRule:s})}):null]})," "]})}}},98759:(t,e,a)=>{"use strict";a.d(e,{Z:()=>m});var s=a(72791),i=a(79200),l=a(31725),o=a.n(l),n=function(){return n=Object.assign||function(t){for(var e,a=1,s=arguments.length;a<s;a++)for(var i in e=arguments[a])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},n.apply(this,arguments)};const r=function(t){for(var e=t.url,a=t.allowFullScreen,i=t.position,l=t.display,r=t.height,c=t.width,d=t.overflow,h=t.styles,m=t.onLoad,u=t.onMouseOver,p=t.onMouseOut,g=t.scrolling,_=t.id,w=t.frameBorder,b=t.ariaHidden,f=t.sandbox,v=t.allow,y=t.className,x=t.title,j=t.ariaLabel,T=t.ariaLabelledby,k=t.name,N=t.target,C=t.loading,D=t.importance,I=t.referrerpolicy,P=t.allowpaymentrequest,R=t.src,S=o()({src:R||e,target:N||null,style:{position:i||null,display:l||"block",overflow:d||null},scrolling:g||null,allowpaymentrequest:P||null,importance:D||null,sandbox:f||null,loading:C||null,styles:h||null,name:k||null,className:y||null,referrerpolicy:I||null,title:x||null,allow:v||null,id:_||null,"aria-labelledby":T||null,"aria-hidden":b||null,"aria-label":j||null,width:c||null,height:r||null,onLoad:m||null,onMouseOver:u||null,onMouseOut:p||null}),F=Object.create(null),U=0,W=Object.keys(S);U<W.length;U++){var z=W[U];null!=S[z]&&(F[z]=S[z])}for(var L=0,Z=Object.keys(F.style);L<Z.length;L++){var M=Z[L];null==F.style[M]&&delete F.style[M]}if(a)if("allow"in F){var O=F.allow.replace("fullscreen","");F.allow=("fullscreen "+O.trim()).trim()}else F.allow="fullscreen";return w>=0&&(F.style.hasOwnProperty("border")||(F.style.border=w)),s.createElement("iframe",n({},F))};var c=a(96710),d=a(80184);class h extends s.PureComponent{constructor(t){super(t),this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={imgUrl:t.itemData.postFileNew,videoLoaded:!1},this.myRef=s.createRef()}render(){const{itemData:t,wall:e,autoplayVideo:a=!0}=this.props,{id:s}=e.Wall,{imgUrl:l,videoLoaded:o}=this.state,{type:n,network:h,imageList:m,link:u,filterId:p,mediaUrl:g,stories:_,postFileNew:w,networkId:b,mediaClip:f}=t,v=t.id,y=e.isDisplay,x=3===n||5===n,j=2===n||4===n,T=!!(t.mediaClip&&"undefined"!=t.mediaClip&&String(t.mediaClip).length>0),k=!(y||!x||!e.ThemeRule.autoPlay||!T),N=7===h.id,C=!!(m&&m.length>0),D=C&&x?"tb_fc_multi_images_ico_bottom":"tb_fc_multi_images_ico";t.mediaUrl=(y||k)&&T?t.mediaClip:t.mediaUrl;const I=y?a:k,P=!y&&(!!(e.User&&Object.keys(e.User).length>0)&&143031==e.User.id);return(0,d.jsxs)("div",{className:"tb_fc_media_wrap mediaHolder".concat(v),role:"img","aria-label":"Post Image",style:{height:"100%",background:"#000000"},children:[C&&!y?(0,d.jsx)("div",{className:"".concat(D," tb__icon tb-multiple"),children:" "}):null,x&&!y?N?(0,d.jsx)("div",{className:"tb_fc_youtube_ico tb__icon tb-youtube",children:" "}):(0,d.jsx)("div",{className:"tb_fc_video_ico tb__icon tb-reels",children:" "}):null,j?(0,d.jsx)("img",{loading:"lazy",src:l,"data-link":u,"data-load":"0","data-network":h.id,"data-wall-id":s,"data-item-id":v,"data-filter-id":p,onLoad:this.onLoad,draggable:!1,onError:t=>(0,i.ht)(t),style:{height:"100%"},width:"300px",height:"300px"}):u&&b&&30==b&&u.indexOf("vk")>=0?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(r,{className:"tb-detail-image-iframe",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",src:"".concat(g,"&autoplay=1&mute=1"),allowFullScreen:"true",style:{width:"100%!important"},"data-filter-id":p,"data-stories":_,"data-type":"video","data-network":b,"data-link":u,"data-item-id":v,"data-load":0,draggable:!1,height:"1000",width:"1000"})}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("img",{loading:"lazy",src:w,"data-load":"0","data-network":h.id,"data-wall-id":s,"data-item-id":v,"data-filter-id":p,onLoad:this.onLoad,draggable:!1,onError:t=>{(0,i.ht)(t)},style:{width:"100%",height:"100%"},width:"300px",height:"300px"}),(0,d.jsx)("div",{className:"card_video__01",style:{display:o?"none":"block",opacity:o?0:1,width:"100%",height:"100%"},children:3!=b?(0,d.jsx)("video",{poster:w,src:a?"".concat(t.mediaUrl):null,autoPlay:I,"webkit-playsinline":I,playsinline:I,muted:!0,loop:1,onError:t=>{this.setState({videoLoaded:!0})},"data-type":"video","data-network":b,"data-filter-id":p,"data-link":u,"data-load":0,"data-tb":e.UserDetail.db_table,"data-wall-id":e.Wall.id,"data-item-id":v,"data-owner-id":e.Wall.owner,height:"400",width:"400",controls:P},"".concat(this.props.keyRender,"-media-player")):(0,d.jsx)(c.Z,{poster:w,style:{display:"contents",width:"".concat(4.8,"vw"),height:"".concat(.3*9,"vw")},className:"tb_post_vid_005",url:"".concat(f&&"undefined"!=f&&String(f).length>0?f:g),playing:!!y,loop:!0,muted:!0,controls:P,onReady:t=>y?this.setState({videoLoaded:!1}):null},"".concat(this.props.keyRender,"-media-player"))})]})]})}}const m=(0,s.memo)(h)},70757:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var s=a(72791),i=a(80184);const l=s.lazy((()=>a.e(1088).then(a.bind(a,41088))));class o extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a}=this.props;return 1===a.iconType&&(7!==t.id&&4!==t.id)?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:a.iconColor},children:(0,i.jsx)("div",{})}):(0,i.jsxs)(s.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(l,{network:t,ThemeRule:a,networkClass:e})]})}}},71313:(t,e,a)=>{"use strict";a.d(e,{d:()=>o});var s=a(72791),i=a(2703),l=a(80184);function o(t){return class extends s.Component{constructor(t){super(t),this.cardRef=s.createRef(null),this.startLoadingVideo=t=>{const{itemData:e,wall:a}=this.props;if(a&&a.ThemeRule&&Object.keys(a.ThemeRule).length>0&&3==e.type||5==e.type){const e=a.ThemeRule.themeId,l=!(0,i.eN)();try{if(l&&window.innerWidth>920&&e&&[62,63,64,65,66,69,70,73].includes(parseInt(e))){let e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.setState({autoplay:!0}):this.setState({autoplay:!1})}))}),{rootMargin:"50px",threshold:1});t.current&&e.observe(t.current)}else this.setState({autoplay:!0})}catch(s){this.setState({autoplay:!0})}}},this.state={autoplay:!1}}componentDidMount(){this.startLoadingVideo(this.cardRef)}render(){return(0,l.jsx)(t,{...this.state,...this.props,cardRef:this.cardRef})}}}},46476:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var s=a(72791),i=a(35737),l=a(34867),o=a(80184);const n=a(80844),r=t=>(0,o.jsx)(i.default,{children:(0,l.ZP)(t)}),c=t=>{let{data:e,content:a,Personalization:s}=t;const i={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,o.jsx)(o.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,l.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(n(a,/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:i,children:["#",t]}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?r(window.slackdown.parse(n(a,e.hash.hashString,((t,e)=>(0,o.jsx)("strong",{className:"tb_text_hashtag",style:i,children:t}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(n(a,/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:i,children:["#",t]},e))),e.slackMember)):r(window.slackdown.parse(a,e.slackMember))}):(0,o.jsx)(o.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,l.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?n((0,l.ZP)(a),/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:i,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?n((0,l.ZP)(a),e.hash.hashString,((t,e)=>(0,o.jsx)("strong",{className:"tb_text_hashtag",style:i,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?n((0,l.ZP)(a),/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:i,children:["#",t]},e))):r(a)})},d=(0,s.memo)(c)},42308:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(72791),i=a(34867),l=a(2703),o=a(46476),n=a(80184);class r extends s.PureComponent{constructor(t){super(t),this.updateText=()=>{const{ThemeRule:t}=this.props;[74,76,77].includes(t.themeId)&&((0,l.OX)(t.trimcontent),setTimeout((()=>this.setState({loadContent:!0})),100))},this.state={loadContent:![74,76,77].includes(t.ThemeRule.themeId)}}render(){const{ThemeRule:t,personalization:e,item:a,contentTitle:s,largeBlock:r,wall:c}=this.props,{loadContent:d}=this.state,h=t.font_varient?t.font_varient.split("-"):{},m=h.length>1?h[1]:"",u=3==t.captionFontWeight?"bold":2==t.captionFontWeight?"600":1==t.captionFontWeight?"100":h.length>0?h[0].includes("regular")?"normal":h[0]:"",p=t.css_font?t.css_font:"",g="".concat(t.fontSize&&![74,76,77,68].includes(t.themeId)?"".concat(t.fontSize,"px"):"inherit"),_={color:t.fontColor,fontWeight:u,fontFamily:p,fontStyle:m},w={font:68!=t.themeId?"".concat(m):"",WebkitLineClamp:t.trimcontent?r?10:78==t.themeId?6:3:"",display:t.trimcontent?"-webkit-box":"block",fontSize:g},b=c.isDisplay||20==a.network.id?a.content:(0,l.Fx)(a.content);return(0,n.jsx)("div",{id:"tb-ss-post--card".concat(a.id),className:"post-card-outer tb-cTBfont- ".concat(t.font_varient),"aria-label":"Post Content",style:_,children:(0,n.jsx)("div",{className:"resize",style:w,onLoad:this.updateText(),children:d?(0,n.jsxs)(n.Fragment,{children:[s?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(s)}):null,(0,n.jsx)(o.Z,{data:a,content:b,Personalization:e},a.id),"   "]}):null})})}}},19036:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});var s=a(72791),i=a(80184);const l=t=>{let{network:e}=t;const{className:a,color:s}={3:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#1b74e4"},4:{className:"tb_rating_ico__ tb__icon tb-rating tb-google-rating",color:"#F8B90C"},19:{className:"tb_rating_ico__ tb__icon tb-rating tb-yelp-rating",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-rating tb-airbnb-rating",color:"#ff385c"},29:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#613983"}}[e.id]||{className:"tb_rating_ico__ tb__icon tb-rating",color:"#F8B90C"};return(0,i.jsx)("div",{className:a,style:{color:s},"tb-network":e.id})};class o extends s.PureComponent{render(){const{rating:t,network:e}=this.props;return(0,i.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>(0,i.jsx)(l,{network:e},a))):null})}}},27668:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(72791),i=a(2703),l=a(80184);const o=t=>{const{postTime:e,timeClass:a,authorNameStyle:o}=t,n=(0,s.useMemo)((()=>(0,i.Sy)(e)),[]);return(0,l.jsx)("div",{className:a,style:o,children:n})},n=(0,s.memo)(o)},60449:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>C});var s=a(72791),i=a(39852),l=a.n(i),o=a(77581),n=a(49671),r=a(98759),c=a(42308),d=a(19036),h=a(70757),m=a(80184);class u extends s.PureComponent{render(){const{itemData:t,clickToShowPopUp:e,itemIndex:a,wall:s,autoplay:i,cardRef:l}=this.props,{Personalization:o,ThemeRule:u}=s,p=[2,3,4,5].includes(t.type),g=!(!u.postAuthor||t.author.isInstaUser),_=t.network;return(0,m.jsx)("div",{className:"tb_mwf_post_wrapper","data-id":t.id,"tb-network":_.icon,ref:l,children:(0,m.jsxs)("div",{className:"tb_mwf_post_in",onClick:e(a,t),children:[(0,m.jsxs)("div",{className:"tb_mwf_post_media_wrapp",children:[p||65==u.themeId?null:(0,m.jsxs)("div",{className:"tb_mwf_social_top_",children:[(0,m.jsx)(h.default,{networkClass:"tb_mwf_social_center_ico",network:_,ThemeRule:u})," "]}),p?(0,m.jsx)(r.Z,{itemData:t,wall:s,autoplayVideo:i}):null,t.rating?(0,m.jsx)("div",{className:"tb_mwf_rating__ ".concat(29===_.id?"tb_mwf_onsite_rating__":""),children:(0,m.jsx)(d.Z,{rating:t.rating,network:_})}):null]}),u.captionStatus?null:(0,m.jsxs)("div",{className:u.postAuthor||u.socialAction||u.postTime?"tb_mwf_contant_wrapper":"",children:[g||u.postTime||_.id&&u.socialAction?(0,m.jsx)(n.Z,{postData:t,ThemeRule:u}):null,u.hideContent||[65,63].includes(u.themeId)?null:(0,m.jsx)(c.Z,{item:t,ThemeRule:u,personalization:o,contentTitle:t.contentTitle,wall:s},t.id)]})]})})}}const p=(0,o.$j)((t=>({modalPop:t.modalPop})))(u);var g,_,w=!1,b=0,f=0,v=0;const y=t=>({80:60,70:40,50:30,30:20,20:10}[t]||20);class x extends s.PureComponent{constructor(t){super(t),this.scrollDiv_init=t=>{if(!this.state.slideWall){const e="marqueecontainer";_=document.getElementById(e),63==t&&(w=!1),(_||{}).scrollTop=0,b=0,this.onScrollData(),this.onScrollWPosts(t)}},this.onScrollData=()=>{const{wall:t}=this.props;if(t.Personalization.scrollDelay){const e=66==t.ThemeRule.themeId?60:y(t.Personalization.scrollDelay);v=setInterval(this.scrollDiv,e)}},this.onScrollWPosts=t=>{const{themeHeight:e,wall:a}=this.props;_=document.getElementById("marqueecontainer");var s=document.getElementById("wPosts");if(s)if(window.innerHeight>s.clientHeight){var i=window.innerHeight,l=s.clientHeight;s.setAttribute("style","position: relative; margin-bottom: ".concat(i,"px; min-height:").concat(l,"px"))}else _.setAttribute("style","overflow: auto; height : calc(100vh - ".concat(e&&a.isDisplay?e+(a.isEditor?6:0):0,"px)"))},this.scrollDiv=()=>{const{themeId:t}=this.props.wall.ThemeRule;v&&clearInterval(v),w?63==t?(w=!w||0!=(_||{}).scrollTop,(_||{}).scrollTop=b,b--):((_||{}).scrollTop=b=0,w=!1):((_||{}).scrollTop=b,b++,w=(_||{}).scrollTop>=(_||{}).scrollHeight-(_||{}).offsetHeight-300),this.onScrollData()},this.pauseDiv=t=>{v&&clearInterval(v),g&&clearTimeout(g),g=setTimeout((()=>this.resumeDiv()),5e3)},this.resumeDiv=()=>{const{wall:t}=this.props;_=document.getElementById("wPosts"),b=(_||{}).scrollTop,v=setInterval(this.scrollDiv,y(t.Personalization.scrollDelay))},this.clearData=()=>{this.clearTime()},this.clearTime=()=>{this.props.wall.isDisplay&&this.setState({slideWall:1}),v&&clearInterval(v),v&&(v=0),g&&clearTimeout(g),f&&clearTimeout(f),w&&(w=!1),b&&(b=0)},this.state={slideWall:0}}componentDidMount(){const{wall:t}=this.props;if(t.isDisplay){window.clearData=this.clearData;const{themeId:e}=t.ThemeRule,a=document.querySelector(".tb_app_container");a&&a.addEventListener("wheel",(t=>t.preventDefault()),{passive:!1}),f=setTimeout((()=>{this.scrollDiv_init(e)}),2e3)}}componentDidUpdate(t,e){const{postData:a,wall:s}=t;s.ThemeRule.themeId!=this.props.wall.ThemeRule.themeId&&(w=!1,b&&(b=0)),a!=this.props.postData&&(this.clearTime(),this.scrollDiv_init(s.ThemeRule.themeId))}componentWillUnmount(){this.clearTime()}render(){return(0,m.jsx)(m.Fragment,{children:{...this.props.children}})}}const j=(0,s.memo)(x);var T=a(71313),k=a(2703);class N extends s.PureComponent{constructor(t){var e;super(t),e=this,this.responsiveUpdate=null,this.heightMange=null,this.themeheight=function(){const{heightUpdate:t,wall:a}=e.props;a.isDisplay&&(t(),e.heightMange=setTimeout((()=>e.setState({checkThemeheight:!0})),100))},this.onResponsiveTheme=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{wall:a}=e.props,s=document.querySelector(".tb_app_container");if(s){const i=s.clientWidth-(a.isDisplay||t?1:18);if(i>0){let t=null,s=null,l=null,o=null;const n=a.Personalization.minimumPostWidth;t=i/n;let r=Math.trunc(t);l=i%n,s=l/r,o=t>=1?n+s:n-s,e.setState({postWidth:o})}}},this.state={postWidth:0,checkThemeheight:!t.wall.isDisplay}}componentDidMount(){this.responsiveUpdate=setTimeout((()=>this.onResponsiveTheme()),1e3),window.addEventListener("resize",(()=>{this.themeheight(),this.onResponsiveTheme(1)})),this.props.wall.isDisplay&&this.themeheight(1)}componentDidUpdate(t,e){const{wall:a}=this.props,{isDisplay:s,isEditor:i,Personalization:l,Banner:o,BannerImage:n}=a,r=(0,k.Qe)(),c=o.bannerUpdate!=t.wall.Banner.bannerUpdate||o.banner_position!=t.wall.Banner.banner_position||n.status!=t.wall.BannerImage.status;s&&i&&(r||l.minimumPostWidth!=t.wall.Personalization.minimumPostWidth||this.props.themeUpdate||c)&&(c?this.themeheight():this.responsiveUpdate=setTimeout((()=>this.onResponsiveTheme()),2e3))}componentWillUnmount(){this.responsiveUpdate&&clearTimeout(this.responsiveUpdate),this.heightMange&&clearTimeout(this.heightMange),window.removeEventListener("resize",this.themeheight)}render(){let{checkThemeheight:t,postWidth:e}=this.state,{postData:a,completeDataObject:s,wall:i,clickToShowPopUp:o,themeHeight:n}=this.props,{ThemeRule:r}=i;const{themeId:c}=r,d={backgroundColor:r.cardColor,padding:"".concat(r.spacing,"px"),borderRadius:"".concat(r.borderRadius,"px")};return(0,m.jsx)(m.Fragment,{children:t?(0,m.jsx)(j,{...this.props,children:(0,m.jsx)("div",{id:i.isDisplay?null:"".concat(62==c?"casecade":63==c?"focus":64==c?"exhibit":"pixel","_").concat(c),className:"".concat(66==c?"themeSquare":""," themeModrnWatrFall ").concat(i.isDisplay?"display":"widget"," ").concat(78==c?"roundeageTheme":""),children:(0,m.jsx)("div",{id:"marqueecontainer",style:{overflow:"auto",height:"calc(100vh - ".concat(n,"px)")},children:(0,m.jsx)(l(),{id:"wPosts",className:"theme".concat(c),tabIndex:"0","aria-label":"There are ".concat(a&&a.length>0?a.length:0," posts in the feed"),elementType:"div",options:{percentPosition:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!0,enableResizableChildren:!0,children:a&&a.map(((t,a)=>{const l=s[t],n=i.displayEmbed?p:(0,T.d)(p);let h=!1;return e&&l&&Object.keys(l).length>0&&(66==c&&l.postFileNew?h=!0:66==c||!l.postFileNew&&i.ThemeRule.hideContent&&!l.rating||(h=!0)),h?(0,m.jsx)("div",{id:'"postId'.concat(l.id),className:"feedId".concat(l.feedId," postItem item flatCard   ").concat(65==c?"pixel65":"","  ").concat(l.network.name,"Taggbox ").concat(l.theme48&&"onlyTextCard"===l.theme48.class1?"onlyTextCard":""," completeFadeIn"),"data-post-id":l.id,"data-highlight":l.highlight,"data-pin":l.pin,style:{padding:r.padding/2,width:(l.highlight,e),margin:0,minWidth:0,left:0,top:0},"data-created":l.createdAt,children:(0,m.jsx)("div",{className:"post",style:d,children:(0,m.jsx)("div",{className:"postContent",children:(0,m.jsx)(n,{wall:i,itemData:l,itemIndex:a,clickToShowPopUp:o},a)})})},a):null}))})})})}):null})}}const C=N},50247:()=>{}}]);
//# sourceMappingURL=8443.4d2ea0c5.chunk.js.map