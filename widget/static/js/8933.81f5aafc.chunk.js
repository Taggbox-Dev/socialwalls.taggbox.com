(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8933,7234,7668,757],{97234:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var l=a(72791),s=a(2703),o=a(14496),i=a(80184);class n extends l.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:a,network:l}=this.props;return(0,i.jsx)("div",{className:a,children:this.state.isAuthorImagevalid?(0,i.jsx)("img",{className:"".concat(a,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,s.P)(e.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,i.jsx)(o.Z,{authorClass:a,username:e.name,network:l,color:null===l.id?"#000":l.color})},Math.random())}}},14496:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});a(72791);var l=a(80184);const s=t=>{let{username:e,network:a}=t;return(0,l.jsx)("img",{className:"tb_nc_author_profile__",src:"https://ui-avatars.com/api/?name=".concat(function(t){if(t){var e=t.match(/[A-Za-z]/);return e?e[0]:""}return""}(e),"&background=").concat(String(null===a.id?"#000":a.color).replace("#",""),"&color=fff&length=1"),alt:e,width:44,height:44})}},49671:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var l=a(72791),s=a(97234),o=a(27668),i=a(70757),n=a(80184);class r extends l.PureComponent{render(){var t,e,a;const{ThemeRule:l,postData:r}=this.props,d=null!==(t=null===r||void 0===r?void 0:r.createdAt)&&void 0!==t?t:"",c=null!==(e=null===r||void 0===r?void 0:r.author)&&void 0!==e?e:"",h=null!==(a=null===r||void 0===r?void 0:r.network)&&void 0!==a?a:"",u={color:l.authorColor,fontFamily:l.authorFont,fontStyle:l.authorFontVariant},m={backgroundColor:l.authorColor},_=!(!r||!l.postAuthor||c.isInstaUser),g=!(!l.postAuthor||!l.postTime);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"tb_mwf_author_wrapper",children:[_||l.postTime?(0,n.jsxs)("div",{className:"tb_mwf_author",children:[_?(0,n.jsx)(s.default,{network:h,author:c,authorClass:"tb_mwf_author_profile"},c.username):"",(0,n.jsxs)("div",{className:"tb_mwf_author_info",children:[_?(0,n.jsx)("div",{className:"tb_mwf_authorname tb-cTBfont-".concat(l.authorFontVariant?l.authorFontVariant:null),style:u,children:(0,n.jsx)("strong",{children:c.name})}):"",(0,n.jsxs)("div",{className:"tb_mwf_post_info",children:[_&&![74,76,77].includes(l.themeId)?(0,n.jsx)("div",{className:"tb_mwf_username tb-cTBfont-".concat(l.authorFontVariant),style:u,children:c.username}):"",g&&_?(0,n.jsx)("div",{className:"tb_mwf_seprator",style:m,children:" "}):"",l.postTime?(0,n.jsx)(o.default,{postTime:d,timeClass:"tb_mwf_time",authorNameStyle:u}):""]})]})]}):null,h.id&&l.socialAction?(0,n.jsx)("div",{className:"tb_mwf_social_",children:(0,n.jsx)(i.default,{networkClass:"tb_mwf_social_ico",network:h,ThemeRule:l})}):null]})," "]})}}},54122:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>u});var l=a(72791),s=a(77581),o=a(49671),i=a(98759),n=a(42308),r=a(19036),d=a(70757),c=a(80184);class h extends l.PureComponent{render(){const{itemData:t,clickToShowPopUp:e,itemIndex:a,wall:l,autoplay:s,cardRef:h}=this.props,{Personalization:u,ThemeRule:m}=l,_=[2,3,4,5].includes(t.type),g=!(!m.postAuthor||t.author.isInstaUser),p=t.network;return(0,c.jsx)("div",{className:"tb_mwf_post_wrapper","data-id":t.id,"tb-network":p.icon,ref:h,children:(0,c.jsxs)("div",{className:"tb_mwf_post_in",onClick:e(a,t),children:[(0,c.jsxs)("div",{className:"tb_mwf_post_media_wrapp",children:[_||65==m.themeId?null:(0,c.jsxs)("div",{className:"tb_mwf_social_top_",children:[(0,c.jsx)(d.default,{networkClass:"tb_mwf_social_center_ico",network:p,ThemeRule:m})," "]}),_?(0,c.jsx)(i.Z,{itemData:t,wall:l,autoplayVideo:s}):null,t.rating?(0,c.jsx)("div",{className:"tb_mwf_rating__ ".concat(29===p.id?"tb_mwf_onsite_rating__":""),children:(0,c.jsx)(r.Z,{rating:t.rating,network:p})}):null]}),m.captionStatus?null:(0,c.jsxs)("div",{className:m.postAuthor||m.socialAction||m.postTime?"tb_mwf_contant_wrapper":"",children:[g||m.postTime||p.id&&m.socialAction?(0,c.jsx)(o.Z,{postData:t,ThemeRule:m}):null,m.hideContent||[65,63].includes(m.themeId)?null:(0,c.jsx)(n.Z,{item:t,ThemeRule:m,personalization:u,contentTitle:t.contentTitle},t.id)]})]})})}}const u=(0,s.$j)((t=>({modalPop:t.modalPop})))(h)},98759:(t,e,a)=>{"use strict";a.d(e,{Z:()=>u});var l=a(72791),s=a(79200),o=a(31725),i=a.n(o),n=function(){return n=Object.assign||function(t){for(var e,a=1,l=arguments.length;a<l;a++)for(var s in e=arguments[a])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},n.apply(this,arguments)};const r=function(t){for(var e=t.url,a=t.allowFullScreen,s=t.position,o=t.display,r=t.height,d=t.width,c=t.overflow,h=t.styles,u=t.onLoad,m=t.onMouseOver,_=t.onMouseOut,g=t.scrolling,p=t.id,b=t.frameBorder,w=t.ariaHidden,f=t.sandbox,x=t.allow,v=t.className,y=t.title,j=t.ariaLabel,k=t.ariaLabelledby,N=t.name,C=t.target,T=t.loading,P=t.importance,F=t.referrerpolicy,S=t.allowpaymentrequest,Z=t.src,R=i()({src:Z||e,target:C||null,style:{position:s||null,display:o||"block",overflow:c||null},scrolling:g||null,allowpaymentrequest:S||null,importance:P||null,sandbox:f||null,loading:T||null,styles:h||null,name:N||null,className:v||null,referrerpolicy:F||null,title:y||null,allow:x||null,id:p||null,"aria-labelledby":k||null,"aria-hidden":w||null,"aria-label":j||null,width:d||null,height:r||null,onLoad:u||null,onMouseOver:m||null,onMouseOut:_||null}),I=Object.create(null),L=0,A=Object.keys(R);L<A.length;L++){var z=A[L];null!=R[z]&&(I[z]=R[z])}for(var O=0,U=Object.keys(I.style);O<U.length;O++){var M=U[O];null==I.style[M]&&delete I.style[M]}if(a)if("allow"in I){var W=I.allow.replace("fullscreen","");I.allow=("fullscreen "+W.trim()).trim()}else I.allow="fullscreen";return b>=0&&(I.style.hasOwnProperty("border")||(I.style.border=b)),l.createElement("iframe",n({},I))};var d=a(96710),c=a(80184);class h extends l.PureComponent{constructor(t){super(t),this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={imgUrl:t.itemData.postFileNew,videoLoaded:!1},this.myRef=l.createRef()}render(){const{itemData:t,wall:e,autoplayVideo:a=!0}=this.props,{id:l}=e.Wall,{imgUrl:o,videoLoaded:i}=this.state,{type:n,network:h,imageList:u,link:m,filterId:_,mediaUrl:g,stories:p,postFileNew:b,networkId:w,mediaClip:f}=t,x=t.id,v=3===n||5===n,y=2===n||4===n,j=7===h.id,k=!!(u&&u.length>0),N=e.isDisplay,C=k&&v?"tb_fc_multi_images_ico_bottom":"tb_fc_multi_images_ico";t.mediaUrl=N&&t.mediaClip&&"undefined"!=t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl;const T=!!N&&a;return(0,c.jsxs)("div",{className:"tb_fc_media_wrap mediaHolder".concat(x),role:"img","aria-label":"Post Image",style:{height:"100%",background:"#000000"},children:[k&&!N?(0,c.jsx)("div",{className:"".concat(C," tb__icon tb-multiple"),children:" "}):null,v&&!N?j?(0,c.jsx)("div",{className:"tb_fc_youtube_ico tb__icon tb-youtube",children:" "}):(0,c.jsx)("div",{className:"tb_fc_video_ico tb__icon tb-reels",children:" "}):null,y?(0,c.jsx)("img",{loading:"lazy",src:o,"data-link":m,"data-load":"0","data-network":h.id,"data-wall-id":l,"data-item-id":x,"data-filter-id":_,onLoad:this.onLoad,draggable:!1,onError:t=>(0,s.ht)(t),style:{height:"100%"},width:"300px",height:"300px"}):m&&w&&30==w&&m.indexOf("vk")>=0?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(r,{className:"tb-detail-image-iframe",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",src:"".concat(g,"&autoplay=1&mute=1"),allowFullScreen:"true",style:{width:"100%!important"},"data-filter-id":_,"data-stories":p,"data-type":"video","data-network":w,"data-link":m,"data-item-id":x,"data-load":0,draggable:!1,height:"1000",width:"1000"})}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{loading:"lazy",src:b,"data-load":"0","data-network":h.id,"data-wall-id":l,"data-item-id":x,"data-filter-id":_,onLoad:this.onLoad,draggable:!1,onError:t=>{(0,s.ht)(t)},style:{width:"100%",height:"100%"},width:"300px",height:"300px"}),(0,c.jsx)("div",{className:"card_video__01",style:{display:i?"none":"block",opacity:i?0:1,width:"100%",height:"100%"},children:3!=w?(0,c.jsx)("video",{poster:b,src:a?"".concat(t.mediaUrl):null,autoPlay:T,muted:!0,loop:1,onError:t=>{this.setState({videoLoaded:!0})},"data-type":"video","data-network":w,"data-filter-id":_,"data-link":m,"data-load":0,"data-tb":e.UserDetail.db_table,"data-wall-id":e.Wall.id,"data-item-id":x,"data-owner-id":e.Wall.owner,height:"400",width:"400"},"".concat(this.props.keyRender,"-media-player")):(0,c.jsx)(d.Z,{poster:b,style:{display:"contents",width:"".concat(4.8,"vw"),height:"".concat(.3*9,"vw")},className:"tb_post_vid_005",url:"".concat(f&&"undefined"!=f&&String(f).length>0?f:g),playing:!!N,loop:!0,muted:!0,onReady:t=>N?this.setState({videoLoaded:!1}):null},"".concat(this.props.keyRender,"-media-player"))})]})]})}}const u=(0,l.memo)(h)},70757:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});var l=a(72791),s=a(80184);const o=l.lazy((()=>a.e(1088).then(a.bind(a,41088))));class i extends l.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a}=this.props;return 1===a.iconType&&(7!==t.id&&4!==t.id)?(0,s.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:a.iconColor},children:(0,s.jsx)("div",{})}):(0,s.jsxs)(l.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:[" ",(0,s.jsx)(o,{network:t,ThemeRule:a,networkClass:e})]})}}},46476:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var l=a(72791),s=a(35737),o=a(34867),i=a(80184);const n=a(80844),r=t=>(0,i.jsx)(s.default,{children:(0,o.ZP)(t)}),d=t=>{let{data:e,content:a,Personalization:l}=t;const s={color:l.hashtag_color,fontWeight:"bold",backgroundColor:1==l.hashtag_background_status?l.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,i.jsx)(i.Fragment,{children:1===l.hashtag_highlight&&0===l.hashtag_feed&&0===l.hashtag_all?(0,o.ZP)(a):1===l.hashtag_highlight&&0===l.hashtag_feed&&1===l.hashtag_all?r(window.slackdown.parse(n(a,/#(\w+)/g,((t,e)=>(0,i.jsxs)("strong",{className:"tb_text_hashtag",style:s,children:["#",t]}))),e.slackMember)):1===l.hashtag_highlight&&1===l.hashtag_feed&&0===l.hashtag_all?r(window.slackdown.parse(n(a,e.hash.hashString,((t,e)=>(0,i.jsx)("strong",{className:"tb_text_hashtag",style:s,children:t}))),e.slackMember)):1===l.hashtag_highlight&&1===l.hashtag_feed&&1===l.hashtag_all?r(window.slackdown.parse(n(a,/#(\w+)/g,((t,e)=>(0,i.jsxs)("strong",{className:"tb_text_hashtag",style:s,children:["#",t]},e))),e.slackMember)):r(window.slackdown.parse(a,e.slackMember))}):(0,i.jsx)(i.Fragment,{children:1===l.hashtag_highlight&&0===l.hashtag_feed&&0===l.hashtag_all?(0,o.ZP)(a):1===l.hashtag_highlight&&0===l.hashtag_feed&&1===l.hashtag_all?n((0,o.ZP)(a),/#(\w+)/g,((t,e)=>(0,i.jsxs)("strong",{className:"tb_text_hashtag",style:s,children:["#",t]}))):1===l.hashtag_highlight&&1===l.hashtag_feed&&0===l.hashtag_all?n((0,o.ZP)(a),e.hash.hashString,((t,e)=>(0,i.jsx)("strong",{className:"tb_text_hashtag",style:s,children:t}))):1===l.hashtag_highlight&&1===l.hashtag_feed&&1===l.hashtag_all?n((0,o.ZP)(a),/#(\w+)/g,((t,e)=>(0,i.jsxs)("strong",{className:"tb_text_hashtag",style:s,children:["#",t]},e))):(0,o.ZP)(a)})},c=(0,l.memo)(d)},42308:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var l=a(72791),s=a(34867),o=a(2703),i=a(46476),n=a(80184);class r extends l.PureComponent{constructor(t){super(t),this.updateText=()=>{const{ThemeRule:t}=this.props;[74,76,77,68].includes(t.themeId)&&((0,o.OX)(t.trimcontent),setTimeout((()=>this.setState({loadContent:!0})),100))},this.state={loadContent:![74,76,77].includes(t.ThemeRule.themeId)}}render(){const{ThemeRule:t,personalization:e,item:a,contentTitle:l,largeBlock:r}=this.props,{loadContent:d}=this.state,c=t.font_varient?t.font_varient.split("-"):{},h=c.length>1?c[1]:"",u=3==t.captionFontWeight?"bold":2==t.captionFontWeight?"600":1==t.captionFontWeight?"100":c.length>0?c[0].includes("regular")?"normal":c[0]:"",m=t.css_font?t.css_font:"",_="".concat(t.fontSize&&![74,76,77,68].includes(t.themeId)?"".concat(t.fontSize,"px"):"inherit"),g={color:t.fontColor,fontWeight:u,fontFamily:m,fontStyle:h},p={font:68!=t.themeId?"".concat(h):"",WebkitLineClamp:t.trimcontent?r?10:3:"",display:t.trimcontent?"-webkit-box":"block",fontSize:_},b=20==a.network.id?a.content:(0,o.Fx)(a.content);return(0,n.jsx)("div",{id:"tb-ss-post--card".concat(a.id),className:"post-card-outer tb-cTBfont- ".concat(t.font_varient),"aria-label":"Post Content",style:g,children:(0,n.jsx)("div",{className:"resize",style:p,onLoad:this.updateText(),children:d?(0,n.jsxs)(n.Fragment,{children:[l?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,s.ZP)(l)}):null,(0,n.jsx)(i.Z,{data:a,content:b,Personalization:e},a.id),"   "]}):null})})}}},19036:(t,e,a)=>{"use strict";a.d(e,{Z:()=>i});var l=a(72791),s=a(80184);const o=t=>{let{network:e}=t;const{className:a,color:l}={3:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#1b74e4"},4:{className:"tb_rating_ico__ tb__icon tb-rating tb-google-rating",color:"#F8B90C"},19:{className:"tb_rating_ico__ tb__icon tb-rating tb-yelp-rating",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-rating tb-airbnb-rating",color:"#ff385c"},29:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#613983"}}[e.id]||{className:"tb_rating_ico__ tb__icon tb-rating",color:"#F8B90C"};return(0,s.jsx)("div",{className:a,style:{color:l},"tb-network":e.id})};class i extends l.PureComponent{render(){const{rating:t,network:e}=this.props;return(0,s.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>(0,s.jsx)(o,{network:e},a))):null})}}},27668:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var l=a(72791),s=a(2703),o=a(80184);const i=t=>{const{postTime:e,timeClass:a,authorNameStyle:i}=t,n=(0,l.useMemo)((()=>(0,s.Sy)(e)),[]);return(0,o.jsx)("div",{className:a,style:i,children:n})},n=(0,l.memo)(i)},50247:()=>{}}]);
//# sourceMappingURL=8933.81f5aafc.chunk.js.map