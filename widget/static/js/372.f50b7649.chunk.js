(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[372,7234,7668,757],{68345:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>g});var s=a(72791),l=a(77581),o=a(79200),n=a(67945),i=a.n(n),r=a(49671),d=a(42308),h=a(98759),c=a(80184);class m extends s.PureComponent{constructor(){var t;super(...arguments),t=this,this.state={themeHeightMange:this.props.themeHeight,randomkey:0,themeHeightCheck:!this.props.wall.isDisplay},this.onFullscreenChange=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{themeHeight:a,heightUpdate:s}=t.props;e&&t.setState({themeHeightCheck:!0}),setTimeout((()=>{s(),t.setState({themeHeightMange:a,randomkey:Math.random()})}),100)}}componentDidMount(){const{wall:t,themeHeight:e}=this.props;t.isDisplay&&(window.addEventListener("resize",(()=>this.onFullscreenChange)),document.addEventListener("fullscreenchange",this.onFullscreenChange,!1),this.setState({themeHeightMange:e},(()=>this.onFullscreenChange(1))))}componentDidUpdate(t,e){const{wall:a,themeHeight:s}=this.props;a.isDisplay&&(a.isEditor?a.Banner.bannerUpdate==t.wall.Banner.bannerUpdate&&a.Banner.banner_position==t.wall.Banner.banner_position&&a.BannerImage.status==t.wall.BannerImage.status||this.onFullscreenChange():this.setState({themeHeightMange:s}))}render(){const{itemData:t,ThemeRule:e,personalization:a,clickToShowPopUp:s,itemIndex:l,wall:o,keyRender:n,id:i}=this.props,{themeHeightMange:m,themeHeightCheck:u}=this.state;let p=!![2,3,4,5].includes(t.type);const g={backgroundColor:e.cardColor},_=32==e.numberOfCoumn?4:8==e.numberOfCoumn?2:3,w={padding:"".concat(e.padding/2,"px"),height:o.isDisplay?"".concat((window.innerHeight-m)/_,"px"):""},b={borderRadius:"".concat(e.borderRadius,"px")};return(0,c.jsxs)(c.Fragment,{children:[" ",u?(0,c.jsx)("div",{id:i,className:"tb_ap_post_wrapper ","tb-network":t.network.id,style:w,children:(0,c.jsx)("div",{className:"tb_ap_post_in","data-aos":null!==t&&void 0!==t&&t.stopAnimation?null:"zoom-in-up","data-aos-delay":"0","data-aos-duration":"2000","data-aos-offset":"0",onClick:s(l,t),children:(0,c.jsxs)("div",{className:"tb_ap_post_media_wrapp",style:b,children:[p?(0,c.jsx)(h.Z,{keyRender:n,itemData:t,wall:o},"".concat(n,"-media")):"",(0,c.jsx)("div",{className:"overlay-main","data-aos":"zoom-in","data-aos-easing":"ease-out-cubic","data-aos-delay":"2000","data-aos-duration":"2000","data-aos-offset":"0",children:(0,c.jsxs)("div",{className:"tb_ap_post_overlay",style:g,children:[e.captionStatus||65==e.themeId?null:(0,c.jsxs)("div",{className:"tb_mwf_contant_wrapper",children:[66==e.themeId?(0,c.jsx)(r.Z,{ThemeRule:e,postData:t}):null,e.hideContent||63==e.themeId?null:(0,c.jsx)(d.Z,{item:t,wall:o,ThemeRule:e,personalization:a,contentTitle:t.contentTitle},t.id)]}),66!=e.themeId?(0,c.jsx)(r.Z,{ThemeRule:e,postData:t}):null,(0,c.jsx)("div",{})]})})]},"".concat(l,"-media"))})}):null," "]})}}var u=a(2703);class p extends s.PureComponent{constructor(){super(...arguments),this.state={postData:[],postDataUpdate:[],postDataContent:[],tempArray:[],rowCount:0,slideData:0},this.dataFilter=()=>{const{postData:t,wall:e}=this.props,a=t&&t.length>0&&t.map(((t,e)=>this.props.completeDataObject[t]));let s=(0,u.tf)();const l=1==s?4:2==s?6:e.ThemeRule.numberOfCoumn&&e.ThemeRule.numberOfCoumn>5?e.ThemeRule.numberOfCoumn:6,o=a&&a.map(((t,e)=>e<l&&t.postFileNew?{...t,stopAnimation:!0}:t)),n=o&&o.filter((t=>t.file&&""!=t.file&&t));e.isDisplay?this.setState({postDataContent:n.filter(((t,e)=>e<l)),tempArray:a.slice(0,l),postDataUpdate:n,rowCount:l},(()=>this.addClass())):this.setState({postDataContent:n,tempArray:a.slice(0,l),postDataUpdate:n,rowCount:l})},this.clearData=()=>this.setState({slideData:1}),this.addClass=()=>{const{postDataUpdate:t,rowCount:e,slideData:a}=this.state,{postData:s,wall:l}=this.props;if(e<t.length&&!a)for(let o=1;o<=t.length;o++)setTimeout((()=>{const{postDataContent:t,postDataUpdate:a,tempArray:l}=this.state;let n=[...a];const i=(o-1)%e,r=a.length-o;let d=a[r];if(r<t.length&&(d=l.pop()),n[i]=d,a[i]=d,this.setState((t=>({...t,postDataContent:n.slice(0,e),postDataUpdate:a}))),o==a.length){const t=s&&s.length>0&&s.map(((t,e)=>this.props.completeDataObject[t])),a=t.map(((t,a)=>a<e?{...t,stopAnimation:!0}:t));this.setState({postDataContent:a.filter(((t,a)=>a<e)),tempArray:t.slice(0,e),postDataUpdate:a,rowCount:e},(()=>this.addClass()))}}),l.ThemeRule.slideDelay?1e3*l.ThemeRule.slideDelay*o:1e4*o)},this.onLoadMasonry=()=>{var t=document.querySelector(".tb_ap_post_container");t&&this.props.managePostHeight(t.style.height)}}componentDidMount(){const{postData:t}=this.props;window.clearData=this.clearData,this.setState({postData:t},(()=>this.onLoadMasonry())),i().init(),this.dataFilter()}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e},(()=>{this.onLoadMasonry(),this.props.wall.isDisplay||this.dataFilter()}))}render(){const{wall:t,clickToShowPopUp:e,onClickToCTA:a,heightUpdate:s,themeHeight:l}=this.props,{postDataContent:o}=this.state,n=t.ThemeRule.numberOfCoumn&&t.ThemeRule.numberOfCoumn>5?t.ThemeRule.numberOfCoumn:8;return o&&o.length>0?(0,c.jsx)("div",{id:"".concat(66==t.ThemeRule.themeId?"squre":67==t.ThemeRule.themeId?"pixel":"reels","_").concat(t.ThemeRule.themeId),className:"tb_ap_post_container clearfix ".concat(t.isDisplay?"display":"embed"),children:(0,c.jsx)("div",{className:"tb_ap_post_row",children:(0,c.jsx)("div",{className:"tb_ap_post_small ".concat(6==n?"size3x2":18==n?"size6x3":32==n?"size8x6":"size4x2"),children:o.map(((o,n)=>(0,c.jsx)(m,{heightUpdate:s,themeHeight:l,ownerId:t.Wall.owner,itemData:o,itemIndex:n,personalization:t.Personalization,ThemeRule:t.ThemeRule,wall:t,clickToShowPopUp:e,onClickToCTA:a},o.id)))})})},o):null}}const g=(0,l.$j)(null,(t=>({managePostHeight:e=>t((0,o.B0)(e))})))(p)},97234:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});var s=a(72791),l=a(2703),o=a(14496),n=a(80184);class i extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:a,network:s}=this.props;return(0,n.jsx)("div",{className:a,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(a,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,l.P)(e.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(o.Z,{authorClass:a,username:e.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},14496:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});a(72791);var s=a(80184);const l=t=>{let{username:e,network:a}=t;return(0,s.jsx)("img",{className:"tb_nc_author_profile__",src:"https://ui-avatars.com/api/?name=".concat(function(t){if(t){var e=t.match(/[A-Za-z]/);return e?e[0]:""}return""}(e),"&background=000&color=fff&length=1"),alt:e,width:44,height:44})}},49671:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(72791),l=a(97234),o=a(27668),n=a(70757),i=a(80184);class r extends s.PureComponent{render(){var t,e,a;const{ThemeRule:s,postData:r}=this.props,d=null!==(t=null===r||void 0===r?void 0:r.createdAt)&&void 0!==t?t:"",h=null!==(e=null===r||void 0===r?void 0:r.author)&&void 0!==e?e:"",c=null!==(a=null===r||void 0===r?void 0:r.network)&&void 0!==a?a:"",m={color:s.authorColor,fontFamily:s.authorFont,fontStyle:s.authorFontVariant},u={backgroundColor:s.authorColor},p=!(!r||!s.postAuthor||h.isInstaUser),g=!(!s.postAuthor||!s.postTime);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"tb_mwf_author_wrapper",children:[p||s.postTime?(0,i.jsxs)("div",{className:"tb_mwf_author",children:[p?(0,i.jsx)(l.default,{network:c,author:h,authorClass:"tb_mwf_author_profile"},h.username):"",(0,i.jsxs)("div",{className:"tb_mwf_author_info",children:[p?(0,i.jsx)("div",{className:"tb_mwf_authorname tb-cTBfont-".concat(s.authorFontVariant?s.authorFontVariant:null),style:m,children:(0,i.jsx)("strong",{children:h.name})}):"",(0,i.jsxs)("div",{className:"tb_mwf_post_info",children:[p&&![74,76,77].includes(s.themeId)?(0,i.jsx)("div",{className:"tb_mwf_username tb-cTBfont-".concat(s.authorFontVariant),style:m,children:h.username}):"",g&&p?(0,i.jsx)("div",{className:"tb_mwf_seprator",style:u,children:" "}):"",s.postTime?(0,i.jsx)(o.default,{postTime:d,timeClass:"tb_mwf_time",authorNameStyle:m}):""]})]})]}):null,c.id&&s.socialAction?(0,i.jsx)("div",{className:"tb_mwf_social_",style:{borderBottom:78==s.themeId?"60px solid ".concat(1==s.iconType?s.iconColor:c.color):"inherit"},children:(0,i.jsx)(n.default,{networkClass:"tb_mwf_social_ico",network:c,ThemeRule:s})}):null]})," "]})}}},98759:(t,e,a)=>{"use strict";a.d(e,{Z:()=>m});var s=a(72791),l=a(79200),o=a(31725),n=a.n(o),i=function(){return i=Object.assign||function(t){for(var e,a=1,s=arguments.length;a<s;a++)for(var l in e=arguments[a])Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t},i.apply(this,arguments)};const r=function(t){for(var e=t.url,a=t.allowFullScreen,l=t.position,o=t.display,r=t.height,d=t.width,h=t.overflow,c=t.styles,m=t.onLoad,u=t.onMouseOver,p=t.onMouseOut,g=t.scrolling,_=t.id,w=t.frameBorder,b=t.ariaHidden,f=t.sandbox,y=t.allow,x=t.className,v=t.title,j=t.ariaLabel,C=t.ariaLabelledby,k=t.name,D=t.target,T=t.loading,N=t.importance,S=t.referrerpolicy,R=t.allowpaymentrequest,F=t.src,P=n()({src:F||e,target:D||null,style:{position:l||null,display:o||"block",overflow:h||null},scrolling:g||null,allowpaymentrequest:R||null,importance:N||null,sandbox:f||null,loading:T||null,styles:c||null,name:k||null,className:x||null,referrerpolicy:S||null,title:v||null,allow:y||null,id:_||null,"aria-labelledby":C||null,"aria-hidden":b||null,"aria-label":j||null,width:d||null,height:r||null,onLoad:m||null,onMouseOver:u||null,onMouseOut:p||null}),U=Object.create(null),I=0,O=Object.keys(P);I<O.length;I++){var z=O[I];null!=P[z]&&(U[z]=P[z])}for(var L=0,M=Object.keys(U.style);L<M.length;L++){var Z=M[L];null==U.style[Z]&&delete U.style[Z]}if(a)if("allow"in U){var A=U.allow.replace("fullscreen","");U.allow=("fullscreen "+A.trim()).trim()}else U.allow="fullscreen";return w>=0&&(U.style.hasOwnProperty("border")||(U.style.border=w)),s.createElement("iframe",i({},U))};var d=a(96710),h=a(80184);class c extends s.PureComponent{constructor(t){super(t),this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={imgUrl:t.itemData.postFileNew,videoLoaded:!1},this.myRef=s.createRef()}render(){const{itemData:t,wall:e,autoplayVideo:a=!0}=this.props,{id:s}=e.Wall,{imgUrl:o,videoLoaded:n}=this.state,{type:i,network:c,imageList:m,link:u,filterId:p,mediaUrl:g,stories:_,postFileNew:w,networkId:b,mediaClip:f}=t,y=t.id,x=e.isDisplay,v=3===i||5===i,j=2===i||4===i,C=!!(t.mediaClip&&"undefined"!=t.mediaClip&&String(t.mediaClip).length>0),k=!(x||!v||!e.ThemeRule.autoPlay||!C),D=7===c.id,T=!!(m&&m.length>0),N=T&&v?"tb_fc_multi_images_ico_bottom":"tb_fc_multi_images_ico";t.mediaUrl=(x||k)&&C?t.mediaClip:t.mediaUrl;const S=x?a:k,R=!x&&(!!(e.User&&Object.keys(e.User).length>0)&&143031==e.User.id);return(0,h.jsxs)("div",{className:"tb_fc_media_wrap mediaHolder".concat(y),role:"img","aria-label":"Post Image",style:{height:"100%",background:"#000000"},children:[T&&!x?(0,h.jsx)("div",{className:"".concat(N," tb__icon tb-multiple"),children:" "}):null,v&&!x?D?(0,h.jsx)("div",{className:"tb_fc_youtube_ico tb__icon tb-youtube",children:" "}):(0,h.jsx)("div",{className:"tb_fc_video_ico tb__icon tb-reels",children:" "}):null,j?(0,h.jsx)("img",{loading:"lazy",src:o,"data-link":u,"data-load":"0","data-network":c.id,"data-wall-id":s,"data-item-id":y,"data-filter-id":p,onLoad:this.onLoad,draggable:!1,onError:t=>(0,l.ht)(t),style:{height:"100%"},width:"300px",height:"300px"}):u&&b&&30==b&&u.indexOf("vk")>=0?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(r,{className:"tb-detail-image-iframe",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",src:"".concat(g,"&autoplay=1&mute=1"),allowFullScreen:"true",style:{width:"100%!important"},"data-filter-id":p,"data-stories":_,"data-type":"video","data-network":b,"data-link":u,"data-item-id":y,"data-load":0,draggable:!1,height:"1000",width:"1000"})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{loading:"lazy",src:w,"data-load":"0","data-network":c.id,"data-wall-id":s,"data-item-id":y,"data-filter-id":p,onLoad:this.onLoad,draggable:!1,onError:t=>{(0,l.ht)(t)},style:{width:"100%",height:"100%"},width:"300px",height:"300px"}),(0,h.jsx)("div",{className:"card_video__01",style:{display:n?"none":"block",opacity:n?0:1,width:"100%",height:"100%"},children:3!=b?(0,h.jsx)("video",{poster:w,src:a?"".concat(t.mediaUrl):null,autoPlay:S,"webkit-playsinline":S,playsinline:S,muted:!0,loop:1,onError:t=>{this.setState({videoLoaded:!0})},"data-type":"video","data-network":b,"data-filter-id":p,"data-link":u,"data-load":0,"data-tb":e.UserDetail.db_table,"data-wall-id":e.Wall.id,"data-item-id":y,"data-owner-id":e.Wall.owner,height:"400",width:"400",controls:R},"".concat(this.props.keyRender,"-media-player")):(0,h.jsx)(d.Z,{poster:w,style:{display:"contents",width:"".concat(4.8,"vw"),height:"".concat(.3*9,"vw")},className:"tb_post_vid_005",url:"".concat(f&&"undefined"!=f&&String(f).length>0?f:g),playing:!!x,loop:!0,muted:!0,controls:R,onReady:t=>x?this.setState({videoLoaded:!1}):null},"".concat(this.props.keyRender,"-media-player"))})]})]})}}const m=(0,s.memo)(c)},70757:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(72791),l=a(80184);const o=s.lazy((()=>a.e(1088).then(a.bind(a,41088))));class n extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a}=this.props;return 1===a.iconType&&(7!==t.id&&4!==t.id)?(0,l.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:a.iconColor},children:(0,l.jsx)("div",{})}):(0,l.jsxs)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[" ",(0,l.jsx)(o,{network:t,ThemeRule:a,networkClass:e})]})}}},46476:(t,e,a)=>{"use strict";a.d(e,{Z:()=>h});var s=a(72791),l=a(35737),o=a(34867),n=a(80184);const i=a(80844),r=t=>(0,n.jsx)(l.default,{children:(0,o.ZP)(t)}),d=t=>{let{data:e,content:a,Personalization:s}=t;const l={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(i(a,/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:l,children:["#",t]}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?r(window.slackdown.parse(i(a,e.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:l,children:t}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(i(a,/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:l,children:["#",t]},e))),e.slackMember)):r(window.slackdown.parse(a,e.slackMember))}):(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?i((0,o.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:l,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?i((0,o.ZP)(a),e.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:l,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?i((0,o.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:l,children:["#",t]},e))):r(a)})},h=(0,s.memo)(d)},42308:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(72791),l=a(34867),o=a(2703),n=a(46476),i=a(80184);class r extends s.PureComponent{constructor(t){super(t),this.updateText=()=>{const{ThemeRule:t}=this.props;[74,76,77].includes(t.themeId)&&((0,o.OX)(t.trimcontent),setTimeout((()=>this.setState({loadContent:!0})),100))},this.state={loadContent:![74,76,77].includes(t.ThemeRule.themeId)}}render(){const{ThemeRule:t,personalization:e,item:a,contentTitle:s,largeBlock:r,wall:d}=this.props,{loadContent:h}=this.state,c=t.font_varient?t.font_varient.split("-"):{},m=c.length>1?c[1]:"",u=3==t.captionFontWeight?"bold":2==t.captionFontWeight?"600":1==t.captionFontWeight?"100":c.length>0?c[0].includes("regular")?"normal":c[0]:"",p=t.css_font?t.css_font:"",g="".concat(t.fontSize&&![74,76,77,68].includes(t.themeId)?"".concat(t.fontSize,"px"):"inherit"),_={color:t.fontColor,fontWeight:u,fontFamily:p,fontStyle:m},w={font:68!=t.themeId?"".concat(m):"",WebkitLineClamp:t.trimcontent?r?10:78==t.themeId?6:3:"",display:t.trimcontent?"-webkit-box":"block",fontSize:g},b=d.isDisplay||20==a.network.id?a.content:(0,o.Fx)(a.content);return(0,i.jsx)("div",{id:"tb-ss-post--card".concat(a.id),className:"post-card-outer tb-cTBfont- ".concat(t.font_varient),"aria-label":"Post Content",style:_,children:(0,i.jsx)("div",{className:"resize",style:w,onLoad:this.updateText(),children:h?(0,i.jsxs)(i.Fragment,{children:[s?(0,i.jsx)("div",{className:"tb_bold_txt__",children:(0,l.ZP)(s)}):null,(0,i.jsx)(n.Z,{data:a,content:b,Personalization:e},a.id),"   "]}):null})})}}},27668:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});var s=a(72791),l=a(2703),o=a(80184);const n=t=>{const{postTime:e,timeClass:a,authorNameStyle:n}=t,i=(0,s.useMemo)((()=>(0,l.Sy)(e)),[]);return(0,o.jsx)("div",{className:a,style:n,children:i})},i=(0,s.memo)(n)},50247:()=>{}}]);
//# sourceMappingURL=372.f50b7649.chunk.js.map