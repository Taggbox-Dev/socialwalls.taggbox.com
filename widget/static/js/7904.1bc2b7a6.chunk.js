(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7904,9239,5790,5810],{23094:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>d});var l=a(47313),s=a(32929),i=a(98255),o=a(33305),n=a(80381),r=a(46417);class d extends l.Component{constructor(){super(...arguments),this.state={isAuthorImagevalid:!0}}render(){const{item:t,wall:e,activeIndex:a,columnsId:d,autoplay:c,cardRef:h}=this.props,{ThemeRule:u,Personalization:m}=e,p=t.rating>0?"tb_mwf_rating_content":"tb_mwf_content",_=1===t.type&&m.textDecorate?"tb_mwf_text_decoration tb_mwf_text_post":"",g=!(!u.postAuthor||t.author.isInstaUser),w=e.Personalization.interactive,b={padding:u.padding/2},f={backgroundColor:u.cardColor,borderRadius:"".concat(u.borderRadius,"px")};return(0,r.jsx)("div",{id:"tb_wall_card_wrap__".concat(d,"_").concat(parseInt(a)+1),className:"tb_wall_card_wrap__ ".concat(w?"intractive_on":""),"data-id":a,"data-active":0==a?1:0,style:b,ref:h,children:(0,r.jsxs)("div",{id:"post_id-".concat(t.id),className:"tb_wall_card_in__",style:f,children:[(0,r.jsx)(s.Z,{itemData:t,wall:e,autoplayVideo:c}),!u.captionStatus&&(!u.hideContent||g||u.postTime||t.network.id&&u.socialAction)?(0,r.jsx)("div",{className:t.network.id&&u.socialAction||u.postAuthor?"tb_wall_card_content___":"",style:{padding:u.spacing?"".concat(u.spacing,"px"):"10px"},children:(0,r.jsx)("div",{className:"tb_wall_card_conent__001",children:(0,r.jsxs)("div",{className:u.postAuthor||u.socialAction||u.postTime?"tb_mwf_contant_wrapper":"",children:[g||u.postTime||t.network.id&&u.socialAction?(0,r.jsx)(i.Z,{postData:t,ThemeRule:u}):null,u.hideContent?null:(0,r.jsx)(o.Z,{wall:e,item:t,contentClass:"".concat(p," ").concat(_),ThemeRule:u,personalization:m},t.id)]})})}):null,!e.isDisplay&&w?(0,l.createElement)(n.Z,{isCard:!0,postId:t.id,intractiveData:[],userDetail:e.UserDetail,wallId:e.Wall,interactiveCount:t.interactiveCount,isDisplay:e.isDisplay,interactive:w,interactiveStatus:e.Personalization.interactiveStatus,key:Math.random()*t.id}):null]})})}}},89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var l=a(47313),s=a(17739),i=a(98935),o=a(46417);class n extends l.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:a,network:l}=this.props;return(0,o.jsx)("div",{className:a,children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(a,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,s.P)(e.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,o.jsx)(i.Z,{authorClass:a,username:e.name,network:l,color:null===l.id?"#000":l.color})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});a(47313);var l=a(46417);const s=t=>{let{username:e,network:a}=t;return(0,l.jsx)("img",{className:"tb_nc_author_profile__",src:"https://ui-avatars.com/api/?name=".concat(function(t){if(t){var e=t.match(/[A-Za-z]/);return e?e[0]:""}return""}(e),"&background=000&color=fff&length=1"),alt:e,width:44,height:44})}},98255:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var l=a(47313),s=a(89239),i=a(55790),o=a(25810),n=a(46417);class r extends l.PureComponent{render(){var t,e,a;const{ThemeRule:l,postData:r}=this.props,d=null!==(t=null===r||void 0===r?void 0:r.createdAt)&&void 0!==t?t:"",c=null!==(e=null===r||void 0===r?void 0:r.author)&&void 0!==e?e:"",h=null!==(a=null===r||void 0===r?void 0:r.network)&&void 0!==a?a:"",u={color:l.authorColor,fontFamily:l.authorFont,fontStyle:l.authorFontVariant},m={backgroundColor:l.authorColor},p=!(!r||!l.postAuthor||c.isInstaUser),_=!(!l.postAuthor||!l.postTime);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"tb_mwf_author_wrapper",children:[p||l.postTime?(0,n.jsxs)("div",{className:"tb_mwf_author",children:[p?(0,n.jsx)(s.default,{network:h,author:c,authorClass:"tb_mwf_author_profile"},c.username):"",(0,n.jsxs)("div",{className:"tb_mwf_author_info",children:[p?(0,n.jsx)("div",{className:"tb_mwf_authorname tb-cTBfont-".concat(l.authorFontVariant?l.authorFontVariant:null),style:u,children:(0,n.jsx)("strong",{children:c.name})}):"",(0,n.jsxs)("div",{className:"tb_mwf_post_info",children:[p&&![74,76,77].includes(l.themeId)?(0,n.jsx)("div",{className:"tb_mwf_username tb-cTBfont-".concat(l.authorFontVariant),style:u,children:c.username}):"",_&&p?(0,n.jsx)("div",{className:"tb_mwf_seprator",style:m,children:" "}):"",l.postTime?(0,n.jsx)(i.default,{postTime:d,timeClass:"tb_mwf_time",authorNameStyle:u}):""]})]})]}):null,h.id&&l.socialAction?(0,n.jsx)("div",{className:"tb_mwf_social_",style:{borderBottom:78==l.themeId?"60px solid ".concat(1==l.iconType?l.iconColor:h.color):"inherit"},children:(0,n.jsx)(o.default,{networkClass:"tb_mwf_social_ico",network:h,ThemeRule:l})}):null]})," "]})}}},32929:(t,e,a)=>{"use strict";a.d(e,{Z:()=>u});var l=a(47313),s=a(64516),i=a(71843),o=a.n(i),n=function(){return n=Object.assign||function(t){for(var e,a=1,l=arguments.length;a<l;a++)for(var s in e=arguments[a])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},n.apply(this,arguments)};const r=function(t){for(var e=t.url,a=t.allowFullScreen,s=t.position,i=t.display,r=t.height,d=t.width,c=t.overflow,h=t.styles,u=t.onLoad,m=t.onMouseOver,p=t.onMouseOut,_=t.scrolling,g=t.id,w=t.frameBorder,b=t.ariaHidden,f=t.sandbox,y=t.allow,v=t.className,x=t.title,j=t.ariaLabel,k=t.ariaLabelledby,C=t.name,N=t.target,T=t.loading,P=t.importance,D=t.referrerpolicy,F=t.allowpaymentrequest,I=t.src,S=o()({src:I||e,target:N||null,style:{position:s||null,display:i||"block",overflow:c||null},scrolling:_||null,allowpaymentrequest:F||null,importance:P||null,sandbox:f||null,loading:T||null,styles:h||null,name:C||null,className:v||null,referrerpolicy:D||null,title:x||null,allow:y||null,id:g||null,"aria-labelledby":k||null,"aria-hidden":b||null,"aria-label":j||null,width:d||null,height:r||null,onLoad:u||null,onMouseOver:m||null,onMouseOut:p||null}),R=Object.create(null),z=0,Z=Object.keys(S);z<Z.length;z++){var A=Z[z];null!=S[A]&&(R[A]=S[A])}for(var L=0,O=Object.keys(R.style);L<O.length;L++){var U=O[L];null==R.style[U]&&delete R.style[U]}if(a)if("allow"in R){var M=R.allow.replace("fullscreen","");R.allow=("fullscreen "+M.trim()).trim()}else R.allow="fullscreen";return w>=0&&(R.style.hasOwnProperty("border")||(R.style.border=w)),l.createElement("iframe",n({},R))};var d=a(20510),c=a(46417);class h extends l.PureComponent{constructor(t){super(t),this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.handleDuration=t=>{const{getVideoDuration:e,wall:a}=this.props;([74,76,77].includes(a.ThemeRule.themeId)&&1===a.Personalization.playFullVideo||t<a.Personalization.slideDelay)&&e(t)},this.state={imgUrl:t.itemData.postFileNew,videoLoaded:!1},this.myRef=l.createRef()}componentDidMount(){const{itemData:t,getVideoDuration:e,wall:a}=this.props,l=document.getElementById("".concat(t.id,"-media-player"));l&&[74,76,77].includes(a.ThemeRule.themeId)&&l.addEventListener("loadedmetadata",(()=>{e(l.duration<a.Personalization.slideDelay||1===a.Personalization.playFullVideo?l.duration:a.Personalization.slideDelay)}))}render(){const{itemData:t,wall:e,autoplayVideo:a=!0}=this.props,{id:l}=e.Wall,{imgUrl:i,videoLoaded:o}=this.state,{type:n,network:h,imageList:u,link:m,filterId:p,mediaUrl:_,stories:g,postFileNew:w,networkId:b,mediaClip:f}=t,y=t.id,v=e.isDisplay,x=3===n||5===n,j=2===n||4===n,k=!!(t.mediaClip&&"undefined"!=t.mediaClip&&String(t.mediaClip).length>0),C=!(v||!x||!e.ThemeRule.autoPlay||!k),N=7===h.id,T=!!(u&&u.length>0),P=T&&x?"tb_fc_multi_images_ico_bottom":"tb_fc_multi_images_ico";t.mediaUrl=(v||C)&&k?t.mediaClip:t.mediaUrl;const D=v?a:C,F=!v&&(!!(e.User&&Object.keys(e.User).length>0)&&143031==e.User.id);return(0,c.jsxs)("div",{className:"tb_fc_media_wrap mediaHolder".concat(y),role:"img","aria-label":"Post Image",style:{height:"100%",background:"#000000"},children:[T&&!v?(0,c.jsx)("div",{className:"".concat(P," tb__icon tb-multiple"),children:" "}):null,x&&!v?N?(0,c.jsx)("div",{className:"tb_fc_youtube_ico tb__icon tb-youtube",children:" "}):(0,c.jsx)("div",{className:"tb_fc_video_ico tb__icon tb-reels",children:" "}):null,j?(0,c.jsx)("img",{loading:"lazy",src:i,"data-link":m,"data-load":"0","data-network":h.id,"data-wall-id":l,"data-item-id":y,"data-filter-id":p,onLoad:this.onLoad,draggable:!1,onError:t=>(0,s.ht)(t),style:{height:"100%"},width:"300px",height:"300px"}):m&&b&&30==b&&m.indexOf("vk")>=0?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(r,{className:"tb-detail-image-iframe",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",src:"".concat(_,"&autoplay=1&mute=1"),allowFullScreen:"true",style:{width:"100%!important"},"data-filter-id":p,"data-stories":g,"data-type":"video","data-network":b,"data-link":m,"data-item-id":y,"data-load":0,draggable:!1,height:"1000",width:"1000"})}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{loading:"lazy",src:w,"data-load":"0","data-network":h.id,"data-wall-id":l,"data-item-id":y,"data-filter-id":p,onLoad:this.onLoad,draggable:!1,onError:t=>{(0,s.ht)(t)},style:{width:"100%",height:"100%"},width:"300px",height:"300px"}),(0,c.jsx)("div",{className:"card_video__01",style:{display:o?"none":"block",opacity:o?0:1,width:"100%",height:"100%"},children:3!=b?(0,c.jsx)("video",{poster:w,id:"".concat(t.id,"-media-player"),ref:this.myRef,src:a?"".concat(t.mediaUrl):null,autoPlay:D,"webkit-playsinline":D,playsinline:D,muted:!0,loop:1,onError:t=>{this.setState({videoLoaded:!0})},"data-type":"video","data-network":b,"data-filter-id":p,"data-link":m,"data-load":0,"data-tb":e.UserDetail.db_table,"data-wall-id":e.Wall.id,"data-item-id":y,"data-owner-id":e.Wall.owner,height:"400",width:"400",controls:F},"".concat(this.props.keyRender,"-media-player")):(0,c.jsx)(d.Z,{poster:w,onDuration:this.handleDuration,style:{display:"contents",width:"".concat(4.8,"vw"),height:"".concat(.3*9,"vw")},className:"tb_post_vid_005",url:"".concat(f&&"undefined"!=f&&String(f).length>0?f:_),playing:!!v,loop:!0,muted:!0,controls:F,onReady:t=>v?this.setState({videoLoaded:!1}):null},"".concat(this.props.keyRender,"-media-player"))})]})]})}}const u=(0,l.memo)(h)},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var l=a(47313),s=a(46417);const i=l.lazy((()=>a.e(5867).then(a.bind(a,95867))));class o extends l.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a}=this.props;return 1===a.iconType&&(7!==t.id&&4!==t.id)?(0,s.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:a.iconColor},children:(0,s.jsx)("div",{})}):(0,s.jsxs)(l.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:[" ",(0,s.jsx)(i,{network:t,ThemeRule:a,networkClass:e})]})}}},30584:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var l=a(47313),s=a(91523),i=a(16390),o=a(46417);const n=a(77560),r=t=>(0,o.jsx)(s.default,{children:(0,i.ZP)(t)}),d=t=>{let{data:e,content:a,Personalization:l}=t;const s={color:l.hashtag_color,fontWeight:"bold",backgroundColor:1==l.hashtag_background_status?l.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,o.jsx)(o.Fragment,{children:1===l.hashtag_highlight&&0===l.hashtag_feed&&0===l.hashtag_all?(0,i.ZP)(a):1===l.hashtag_highlight&&0===l.hashtag_feed&&1===l.hashtag_all?r(window.slackdown.parse(n(a,/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:s,children:["#",t]}))),e.slackMember)):1===l.hashtag_highlight&&1===l.hashtag_feed&&0===l.hashtag_all?r(window.slackdown.parse(n(a,e.hash.hashString,((t,e)=>(0,o.jsx)("strong",{className:"tb_text_hashtag",style:s,children:t}))),e.slackMember)):1===l.hashtag_highlight&&1===l.hashtag_feed&&1===l.hashtag_all?r(window.slackdown.parse(n(a,/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:s,children:["#",t]},e))),e.slackMember)):r(window.slackdown.parse(a,e.slackMember))}):(0,o.jsx)(o.Fragment,{children:1===l.hashtag_highlight&&0===l.hashtag_feed&&0===l.hashtag_all?(0,i.ZP)(a):1===l.hashtag_highlight&&0===l.hashtag_feed&&1===l.hashtag_all?n((0,i.ZP)(a),/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:s,children:["#",t]}))):1===l.hashtag_highlight&&1===l.hashtag_feed&&0===l.hashtag_all?n((0,i.ZP)(a),e.hash.hashString,((t,e)=>(0,o.jsx)("strong",{className:"tb_text_hashtag",style:s,children:t}))):1===l.hashtag_highlight&&1===l.hashtag_feed&&1===l.hashtag_all?n((0,i.ZP)(a),/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:s,children:["#",t]},e))):r(a)})},c=(0,l.memo)(d)},33305:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var l=a(47313),s=a(16390),i=a(17739),o=a(30584),n=a(46417);class r extends l.PureComponent{constructor(t){super(t),this.updateText=()=>{const{ThemeRule:t}=this.props;[74,76,77].includes(t.themeId)&&((0,i.OX)(t.trimcontent),setTimeout((()=>this.setState({loadContent:!0})),100))},this.state={loadContent:![74,76,77].includes(t.ThemeRule.themeId)}}render(){const{ThemeRule:t,personalization:e,item:a,contentTitle:l,largeBlock:r,wall:d}=this.props,{loadContent:c}=this.state,h=t.font_varient?t.font_varient.split("-"):{},u=h.length>1?h[1]:"",m=3==t.captionFontWeight?"bold":2==t.captionFontWeight?"600":1==t.captionFontWeight?"100":h.length>0?h[0].includes("regular")?"normal":h[0]:"",p=t.css_font?t.css_font:"",_="".concat(t.fontSize&&![74,76,77,68].includes(t.themeId)?"".concat(t.fontSize,"px"):"inherit"),g={color:t.fontColor,fontWeight:m,fontFamily:p,fontStyle:u},w={font:68!=t.themeId?"".concat(u):"",WebkitLineClamp:t.trimcontent?r?10:78==t.themeId?6:3:"",display:t.trimcontent?"-webkit-box":"block",fontSize:_},b=d.isDisplay||20==a.network.id?a.content:(0,i.Fx)(a.content);return(0,n.jsx)("div",{id:"tb-ss-post--card".concat(a.id),className:"post-card-outer tb-cTBfont- ".concat(t.font_varient),"aria-label":"Post Content",style:g,children:(0,n.jsx)("div",{className:"resize",style:w,onLoad:this.updateText(),children:c?(0,n.jsxs)(n.Fragment,{children:[l?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,s.ZP)(l)}):null,(0,n.jsx)(o.Z,{data:a,content:b,Personalization:e},a.id),"   "]}):null})})}}},55790:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var l=a(47313),s=a(17739),i=a(46417);const o=t=>{const{postTime:e,timeClass:a,authorNameStyle:o}=t,n=(0,l.useMemo)((()=>(0,s.Sy)(e)),[]);return(0,i.jsx)("div",{className:a,style:o,children:n})},n=(0,l.memo)(o)},50247:()=>{}}]);