(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9827,757],{47071:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});var a=s(72791),o=s(70757),i=s(2703),r=s(14496),n=s(80184);class l extends a.PureComponent{constructor(t){super(t),this.state={picture:t.item.author.picture,isAuthorImagevalid:!0}}componentWillReceiveProps(t){const{item:e}=t;this.setState({picture:e.author.picture})}render(){const{item:t,ThemeRule:e,ownerId:s}=this.props,a=t.author.picture&&String(t.author.picture).includes("author")?" ":t.author.picture.replace(/[ ]+/g,""),l="".concat(t.author.username&&t.author.username.length>0?"@":"").concat(t.author.username),d=0!=t.postAuthor&&!t.author.isInstaUser,c=0!=t.postAuthor&&0!=t.timePost&&!t.author.isInstaUser,h=0!=t.timePost,_={color:e.authorColor},p={backgroundColor:e.authorColor};return(0,n.jsxs)("div",{className:"tb_post_modal_post_author",children:[(0,n.jsxs)("div",{className:"tb_post_modal_author_details",children:[d?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"tb_post_modal_author_media",style:{backgroundImage:"url(".concat(a,")")},onClick:e=>t.link&&!(0,i.oF)()?window.open(t.link,"_blank"):null,children:!this.state.isAuthorImagevalid&&(0,n.jsx)(r.Z,{network:t.network,username:t.author.name,authorClass:"tb_post_modal_author_media"})}),(0,n.jsx)("img",{loading:"lazy",src:a,alt:(0,i.P)(a),height:"68",width:"68",style:{display:"none"},onError:t=>{this.setState({isAuthorImagevalid:!1})}})]}):null,(0,n.jsxs)("div",{className:"tb_post_modal_author_deatils",children:[d?(0,n.jsx)("div",{className:"tb_post_modal_author_wrap",children:(0,n.jsxs)("div",{className:"tb_post_modal_author_usrname",style:_,onClick:e=>t.link&&!(0,i.oF)()?window.open(t.link):null,children:[t.author.name," "]})}):null,(0,n.jsxs)("div",{className:"tb_post_modal_author_info",children:[d?(0,n.jsx)("div",{className:"tb_post_modal_author_handlename",style:_,children:l}):null,c?(0,n.jsx)("div",{className:"tb_post_modal_seprator_dot",style:p,children:" "}):null,h?(0,n.jsx)("span",{className:"tb_post_modal_post_time",style:_,children:(0,i.Sy)(t.createdAt)}):null]})]})]}),(0,n.jsx)("div",{className:"tb_post_modal_social_wrapper",onClick:e=>t.link&&!(0,i.oF)()?window.open(t.link,"_blank"):null,children:(0,n.jsx)(o.default,{network:t.network,networkClass:"tb_post_modal_social_ico tb__icon",font:(0,i.$d)()&&505==e.iconType?e.iconColor:t.font,ThemeRule:e,isPopUp:!0})})]})}}},32505:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});var a=s(72791),o=s(70188),i=s(2703),r=s(80184);function n(t){t.style.setProperty("visibility","visible","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("display","flex","important")}class l extends a.PureComponent{render(){const{brandingNetworks:t,languageSetting:e,wallId:s}=this.props,a="".concat((0,i.$t)(t,s)[0]).concat(o.Si);return(0,r.jsxs)("a",{href:a,target:"_blank",ref:t=>{t&&(t.style.setProperty("position","absolute","important"),t.style.setProperty("left","auto","important"),t.style.setProperty("right","0","important"),t.style.setProperty("bottom","-35px","important"),t.style.setProperty("align-items","center","important"),t.style.setProperty("padding","4px 0","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","auto","important"),t.style.setProperty("text-decoration","none","important"),t.style.setProperty("direction","ltr","important"),n(t))},children:[(0,r.jsxs)("div",{ref:t=>{t&&(t.style.setProperty("font-size","14px","important"),t.style.setProperty("color","#fff","important"),t.style.setProperty("margin-right","6px","important"),t.style.setProperty("width","100%","important"),t.style.setProperty("height","auto","important"),t.style.setProperty("font-family","Inter","important"),n(t))},children:[Object.keys(e).length>0&&e.poweredBy?e.poweredBy:"Powered by"," "]}),(0,r.jsx)("div",{ref:t=>{t&&(t.style.setProperty("background-image","url(".concat(o.do,"/media/images/taggbox_logo-light.svg)"),"important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("background-position","left center","important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("height","26px","important"),t.style.setProperty("min-height","26px","important"),t.style.setProperty("width","96px","important"),t.style.setProperty("min-width","96px","important"),n(t))}})]})}}},9279:(t,e,s)=>{"use strict";s.d(e,{Z:()=>h});var a=s(72791),o=s(34867),i=s(80184);const r=t=>{let{network:e}=t;switch(e.id){case 3:return(0,i.jsx)("div",{className:"tb_modal_rating_ico__ tb__icon tb-rating",style:{color:"#1b74e4"},"tb-network":e.id,children:" "});case 4:return(0,i.jsx)("div",{className:"tb_modal_rating_ico__ tb__icon  tb-rating tb-google-rating",style:{color:"#F8B90C"},"tb-network":e.id,children:" "});case 19:return(0,i.jsx)("div",{className:"tb_modal_rating_ico__ tb__icon  tb-rating tb-yelp-rating",style:{color:"#e00707"},"tb-network":e.id,children:(0,i.jsx)("div",{className:"tb__icon tb-yelp-star",children:" "})});case 23:return(0,i.jsx)("div",{className:"tb_modal_rating_ico__ tb__icon  tb-rating tb-airbnb-rating",style:{color:"#ff385c"},"tb-network":e.id,children:" "});case 29:return(0,i.jsx)("div",{className:"tb_modal_rating_ico__ tb__icon tb-rating",style:{color:"#613983",fontSize:30},"tb-network":e.id,children:" "});default:return(0,i.jsx)("div",{className:"tb_modal_rating_ico__ tb__icon tb-rating",style:{color:"#F8B90C",fontSize:30},"tb-network":e.id,children:" "})}};class n extends a.PureComponent{render(){const{rating:t,network:e}=this.props;return(0,i.jsx)("div",{className:"tb__modal_rating__",children:t?[...Array(t)].map(((t,s)=>(0,i.jsx)(r,{network:e},s))):null})}}var l=s(60173),d=s(2703),c=s(46476);class h extends a.PureComponent{render(){const{contentTitle:t,item:e,Personalization:s,ThemeRule:a,mediaSize:r}=this.props,h=l.tq?e.font.fontsize:l.Em?e.font.fontsize+2:e.font.fontsize+5,_={fontFamily:a.css_font,fontSize:h,color:e.font.fontColor};let p=20==e.network.id?this.props.contentData:(0,d.Fx)(this.props.contentData);12==e.network.id&&(p=(0,o.ZP)(p));const m=s.textDecorate?" tb_post_modal_text_decorate":"";return 47===a.themeId&&(document.querySelector("html").style.overflow="auto"),(0,i.jsx)("div",{className:"tb_post_modal_post_wrapper",style:{height:1!=e.type?r.height-90:"auto"},children:(0,i.jsx)("div",{className:"tb_post_modal_post_wrap_in",children:(0,i.jsxs)("div",{className:"tb_post_modal_post_content tb-cTBfont-".concat(a.font_varient),style:_,children:[e.rating?(0,i.jsx)(n,{rating:e.rating,network:e.network}):null,(0,i.jsxs)("div",{className:"tb_post_modal_content ".concat(m),children:[t?(0,i.jsx)("div",{className:"tb_post_bold_txt",children:(0,o.ZP)(t)}):null,(0,i.jsx)(c.Z,{data:e,content:p,Personalization:s})]})]})})},"content_".concat(e.id))}}},53108:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});var a=s(72791),o=s(79200),i=s(2703),r=s(80184);const n=JSON.parse(window.localStorage.getItem("mediaDimension"));class l extends a.PureComponent{constructor(t){super(t),this.updateImageDimensions=()=>{if(this.mediaRef.current){1===this.mediaRef.current.getAttribute("data-load")&&this.setState({imgUrl:this.mediaRef.current.src});const t=[this.mediaRef.current.offsetHeight,this.mediaRef.current.offsetWidth];window.localStorage.setItem("mediaDimension",JSON.stringify(t)),this.setState({mediaLoaded:!0,mediaSize:{height:this.mediaRef.current.offsetHeight,width:this.mediaRef.current.offsetWidth}},(()=>this.props.mediaSizeCallback({height:this.state.mediaSize.height,width:this.state.mediaSize.width})))}},this.state={mediaSize:{height:null!=n?n[0]:"85vh",width:null!=n?n[1]:"85vh"},mediaLoaded:!1,imgUrl:t.ImageUrl},this.mediaRef=a.createRef()}componentWillReceiveProps(t){const{ImageUrl:e}=t;this.state.imgUrl!==e&&this.setState({imgUrl:e,mediaLoaded:!1})}componentDidMount(){window.addEventListener&&window.addEventListener("resize",this.updateImageDimensions)}componentWillUnmount(){window.removeEventListener("resize",this.updateImageDimensions)}render(){const{data:t,wall:e,opacity:s}=this.props,{imgUrl:a,mediaSize:n,mediaLoaded:l}=this.state;return(0,r.jsx)("div",{className:"tb_post_modal_img_holder".concat(l?"":" tb_media_modal_spinner"),style:{minHeight:l?null:n.height,minWidth:l?null:n.width},children:(0,r.jsx)("img",{className:"tb_post_modal_img_",decoding:"async",ref:this.mediaRef,src:a,alt:(0,i.P)(a),"data-link":t.link,"data-network":t.network.id,"data-wall-id":e.Wall.id,"data-owner-id":e.Wall.owner,"data-item-id":t.id,"data-filter-id":t.filterId,"data-load":"0",onLoad:this.updateImageDimensions,onError:t.stories?null:t=>{(0,o.ht)(t)},loading:"lazy",draggable:"false",style:{opacity:l?s:0}},a)})}}},13728:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var a=s(72791),o=s(53108),i=s(78764),r=s(27137),n=(s(67226),s(80184));class l extends a.PureComponent{constructor(t){super(t)}render(){const{data:t}=this.props;return(0,n.jsxs)("div",{className:"tb_post_modal_media_holder",children:[(0,n.jsx)("div",{className:"tb_post_modal_audio_thumb_blur",style:{backgroundImage:"url(".concat(t.postFileNew,")")},children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_post_modal_audio_thumb",style:{backgroundImage:"url(".concat(t.postFileNew,")")},children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_post_modal_audio_wrapper",children:(0,n.jsx)(r.Z,{className:"tb_post_modal_audio",autoPlay:!0,showJumpControls:!1,showDownloadProgress:!1,showFilledProgress:!1,hasDefaultKeyBindings:!1,layout:"horizontal-reverse",customVolumeControls:[],customAdditionalControls:[],src:t.mediaUrl})})]})}}const d=a.lazy((()=>Promise.all([s.e(8282),s.e(9208)]).then(s.bind(s,89208))));class c extends a.PureComponent{constructor(){super(...arguments),this.mediaSize=t=>{this.props.mediaSizeCallback(t)}}render(){const{data:t}=this.props;return(0,n.jsx)("div",{className:"tb_post_modal_media_holder",children:t.imageList&&t.imageList.length>0?(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{imageList:t.imageList,...this.props})}):2===t.type||4===t.type?(0,n.jsx)(o.Z,{ImageUrl:t.postFileNew,...this.props,mediaSizeCallback:this.mediaSize,opacity:1}):3===t.type||5===t.type?t&&t.isAudio?(0,n.jsx)(l,{...this.props}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{ImageUrl:t.postFileNew,...this.props,mediaSizeCallback:this.mediaSize,opacity:1}),(0,n.jsx)(i.Z,{...this.props})]}):null})}}},45434:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});var a=s(72791),o=s(77581),i=s(79200),r=s(80184);class n extends a.PureComponent{constructor(){super(...arguments),this.onShareFacebooklink=t=>e=>{window.open(t,"_target");const{item:s,wall:a}=this.props;(0,i.S5)({type:2,action:2,wall:a.Wall.id,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:a.Wall.owner}),(0,i.Fv)("Tagbox","popup_share_click","popup_share",a.Wall.id)},this.onTwitterClick=t=>{const{item:e,wall:s}=this.props;t&&((0,i.S5)({type:2,action:2,wall:s.Wall.id,feed:e.feedId,post:e.referenceId?e.referenceId:e.id,owner:s.Wall.owner}),(0,i.Fv)("Tagbox","popup_share_click","popup_share",s.Wall.id)),window.open(e.share.twitter,"_target")},this.linkedinShareCount=t=>e=>{const{item:s,wall:a}=this.props;(0,i.S5)({type:2,action:2,wall:a.Wall.id,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:a.Wall.owner}),(0,i.Fv)("Tagbox","popup_share_click","popup_share",a.Wall.id),window.open(t,"_target")}}componentDidMount(){window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)})),window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)}))}componentWillReceiveProps(t){window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)})),window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)}))}render(){const{sharePostPopUP:t,item:e,color:s}=this.props,a={color:s};return(0,r.jsx)("div",{className:"tb_post_modal_post_footer_social_",children:(0,r.jsxs)("div",{className:"tb_post_modal_share_ico",children:[(0,r.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,r.jsx)("div",{onClick:this.onShareFacebooklink(e.share.facebook),children:(0,r.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-facebook",style:a,children:" "})})}),(0,r.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,r.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-twitter",onClick:this.onTwitterClick,style:a})}),(0,r.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,r.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-linkedin",onClick:this.linkedinShareCount(e.share.linkedin),style:a})}),e.link?(0,r.jsx)("div",{className:"tb_post_modal_social_ico_list___",onClick:s=>t(e),children:(0,r.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-Mail",style:a,children:" "})}):null,e.link?(0,r.jsx)("div",{className:"tb_post_modal_social_ico_list___ tb_post_link__",onClick:t=>window.open(e.link,"_blank"),children:(0,r.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-link",style:a,children:" "})}):null]})})}}const l=(0,o.$j)(null,(t=>({sharePostPopUP:e=>t((0,i.K8)(e))})))(n)},78764:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var a=s(72791),o=s(96710),i=s(80184);class r extends a.PureComponent{constructor(t){super(t),this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={videoLoaded:!1},this.VideoWrap=a.createRef()}render(){const{data:t,wall:e}=this.props,{videoLoaded:s}=this.state;return(0,i.jsx)("div",{className:"tb_post_modal_video_holder".concat(s?" tb_post_video_loaded":""),ref:this.VideoWrap,children:(0,i.jsx)(o.Z,{className:"tb_post_modal_video",url:t.mediaUrl,"data-type":"video","data-network":t.networkId,"data-link":t.link,"data-wall-id":e.Wall.id,"data-item-id":t.id,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},loop:!0,onError:t=>{this.setVideoLoaded(!1)},autoPlay:!0,muted:!0,volume:0,playsinline:!0,onReady:t=>{this.setVideoLoaded(!0)},playing:!0,height:"100%",width:"100%"})},t.mediaUrl)}}},14496:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});s(72791);var a=s(80184);const o=t=>{let{username:e,network:s}=t;return(0,a.jsx)("img",{className:"tb_nc_author_profile__",src:"https://ui-avatars.com/api/?name=".concat(function(t){if(t){var e=t.match(/[A-Za-z]/);return e?e[0]:""}return""}(e),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1"),alt:e,width:44,height:44})}},70757:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(72791),o=s(80184);const i=a.lazy((()=>s.e(1088).then(s.bind(s,41088))));class r extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,font:r}=this.props;return 1===s.iconType&&(7!==t.id&&4!==t.id)?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:s.iconColor},children:(0,o.jsx)("div",{})}):(0,o.jsxs)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(i,{network:t,ThemeRule:s,networkClass:e})]})}}},46476:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var a=s(72791),o=s(35737),i=s(34867),r=s(80184);const n=s(80844),l=t=>(0,r.jsx)(o.default,{children:(0,i.ZP)(t)}),d=t=>{let{data:e,content:s,Personalization:a}=t;const o={color:a.hashtag_color,fontWeight:"bold",backgroundColor:1==a.hashtag_background_status?a.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,r.jsx)(r.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,i.ZP)(s):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?l(window.slackdown.parse(n(s,/#(\w+)/g,((t,e)=>(0,r.jsxs)("strong",{className:"tb_text_hashtag",style:o,children:["#",t]}))),e.slackMember)):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?l(window.slackdown.parse(n(s,e.hash.hashString,((t,e)=>(0,r.jsx)("strong",{className:"tb_text_hashtag",style:o,children:t}))),e.slackMember)):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?l(window.slackdown.parse(n(s,/#(\w+)/g,((t,e)=>(0,r.jsxs)("strong",{className:"tb_text_hashtag",style:o,children:["#",t]},e))),e.slackMember)):l(window.slackdown.parse(s,e.slackMember))}):(0,r.jsx)(r.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,i.ZP)(s):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?n((0,i.ZP)(s),/#(\w+)/g,((t,e)=>(0,r.jsxs)("strong",{className:"tb_text_hashtag",style:o,children:["#",t]}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?n((0,i.ZP)(s),e.hash.hashString,((t,e)=>(0,r.jsx)("strong",{className:"tb_text_hashtag",style:o,children:t}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?n((0,i.ZP)(s),/#(\w+)/g,((t,e)=>(0,r.jsxs)("strong",{className:"tb_text_hashtag",style:o,children:["#",t]},e))):(0,i.ZP)(s)})},c=(0,a.memo)(d)},50247:()=>{}}]);
//# sourceMappingURL=9827.fcf48855.chunk.js.map