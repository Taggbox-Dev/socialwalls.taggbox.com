(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3594],{47071:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(72791),o=a(70757),i=a(2703),n=a(14496),l=a(80184);class r extends s.PureComponent{constructor(t){super(t),this.state={picture:t.item.author.picture,isAuthorImagevalid:!0}}componentWillReceiveProps(t){const{item:e}=t;this.setState({picture:e.author.picture})}render(){const{item:t,ThemeRule:e,ownerId:a}=this.props,s=t.author.picture&&String(t.author.picture).includes("author")?" ":t.author.picture.replace(/[ ]+/g,""),r="".concat(t.author.username&&t.author.username.length>0?"@":"").concat(t.author.username),d=0!=t.postAuthor&&!t.author.isInstaUser,c=0!=t.postAuthor&&0!=t.timePost&&!t.author.isInstaUser,_=0!=t.timePost,h={color:e.authorColor},p={backgroundColor:e.authorColor};return(0,l.jsxs)("div",{className:"tb_post_modal_post_author",children:[(0,l.jsxs)("div",{className:"tb_post_modal_author_details",children:[d?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"tb_post_modal_author_media",style:{backgroundImage:"url(".concat(s,")")},onClick:e=>t.link?window.open(t.link,"_blank"):null,children:!this.state.isAuthorImagevalid&&(0,l.jsx)(n.Z,{network:t.network,username:t.author.name,authorClass:"tb_post_modal_author_media"})}),(0,l.jsx)("img",{loading:"lazy",src:s,alt:(0,i.P)(s),height:"68",width:"68",style:{display:"none"},onError:t=>{this.setState({isAuthorImagevalid:!1})}})]}):null,(0,l.jsxs)("div",{className:"tb_post_modal_author_deatils",children:[d?(0,l.jsx)("div",{className:"tb_post_modal_author_wrap",children:(0,l.jsxs)("div",{className:"tb_post_modal_author_usrname",style:h,onClick:e=>t.link?window.open(t.link):null,children:[t.author.name," "]})}):null,(0,l.jsxs)("div",{className:"tb_post_modal_author_info",children:[d?(0,l.jsx)("div",{className:"tb_post_modal_author_handlename",style:h,children:r}):null,c?(0,l.jsx)("div",{className:"tb_post_modal_seprator_dot",style:p,children:" "}):null,_?(0,l.jsx)("span",{className:"tb_post_modal_post_time",style:h,children:(0,i.Sy)(t.createdAt)}):null]})]})]}),(0,l.jsx)("div",{className:"tb_post_modal_social_wrapper",onClick:e=>t.link?window.open(t.link,"_blank"):null,children:(0,l.jsx)(o.default,{network:t.network,networkClass:"tb_post_modal_social_ico tb__icon",font:(0,i.$d)()&&505==e.iconType?e.iconColor:t.font,ThemeRule:e,isPopUp:!0})})]})}}},32505:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(72791),o=a(70188),i=a(2703),n=a(80184);function l(t){t.style.setProperty("visibility","visible","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("display","flex","important")}class r extends s.PureComponent{render(){const{brandingNetworks:t,languageSetting:e,wallId:a}=this.props,s="".concat((0,i.$t)(t,a)[0]).concat(o.Si);return(0,n.jsxs)("a",{href:s,target:"_blank",ref:t=>{t&&(t.style.setProperty("position","absolute","important"),t.style.setProperty("left","auto","important"),t.style.setProperty("right","0","important"),t.style.setProperty("bottom","-35px","important"),t.style.setProperty("align-items","center","important"),t.style.setProperty("padding","4px 0","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","auto","important"),t.style.setProperty("text-decoration","none","important"),t.style.setProperty("direction","ltr","important"),l(t))},children:[(0,n.jsxs)("div",{ref:t=>{t&&(t.style.setProperty("font-size","14px","important"),t.style.setProperty("color","#fff","important"),t.style.setProperty("margin-right","6px","important"),t.style.setProperty("width","100%","important"),t.style.setProperty("height","auto","important"),t.style.setProperty("font-family","Inter","important"),l(t))},children:[Object.keys(e).length>0&&e.poweredBy?e.poweredBy:"Powered by"," "]}),(0,n.jsx)("div",{ref:t=>{t&&(t.style.setProperty("background-image","url(".concat(o.do,"/media/images/taggbox_logo-light.svg)"),"important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("background-position","left center","important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("height","26px","important"),t.style.setProperty("min-height","26px","important"),t.style.setProperty("width","96px","important"),t.style.setProperty("min-width","96px","important"),l(t))}})]})}}},9279:(t,e,a)=>{"use strict";a.d(e,{Z:()=>_});var s=a(72791),o=a(34867),i=a(80184);const n=t=>{let{network:e}=t;switch(e.id){case 3:return(0,i.jsx)("div",{className:"tb_modal_rating_ico__ tb__icon tb-rating",style:{color:"#1b74e4"},"tb-network":e.id,children:" "});case 4:return(0,i.jsx)("div",{className:"tb_modal_rating_ico__ tb__icon  tb-rating tb-google-rating",style:{color:"#F8B90C"},"tb-network":e.id,children:" "});case 19:return(0,i.jsx)("div",{className:"tb_modal_rating_ico__ tb__icon  tb-rating tb-yelp-rating",style:{color:"#e00707"},"tb-network":e.id,children:(0,i.jsx)("div",{className:"tb__icon tb-yelp-star",children:" "})});case 23:return(0,i.jsx)("div",{className:"tb_modal_rating_ico__ tb__icon  tb-rating tb-airbnb-rating",style:{color:"#ff385c"},"tb-network":e.id,children:" "});case 29:return(0,i.jsx)("div",{className:"tb_modal_rating_ico__ tb__icon tb-rating",style:{color:"#613983",fontSize:30},"tb-network":e.id,children:" "});default:return(0,i.jsx)("div",{className:"tb_modal_rating_ico__ tb__icon tb-rating",style:{color:"#F8B90C",fontSize:30},"tb-network":e.id,children:" "})}};class l extends s.PureComponent{render(){const{rating:t,network:e}=this.props;return(0,i.jsx)("div",{className:"tb__modal_rating__",children:t?[...Array(t)].map(((t,a)=>(0,i.jsx)(n,{network:e},a))):null})}}var r=a(60173),d=a(2703),c=a(46476);class _ extends s.PureComponent{render(){const{contentTitle:t,item:e,Personalization:a,ThemeRule:s,mediaSize:n}=this.props,_=r.tq?e.font.fontsize:r.Em?e.font.fontsize+2:e.font.fontsize+5,h={fontFamily:s.css_font,fontSize:_,color:e.font.fontColor};let p=20==e.network.id?this.props.contentData:(0,d.Fx)(this.props.contentData);12==e.network.id&&(p=(0,o.ZP)(p));const m=a.textDecorate?" tb_post_modal_text_decorate":"";return 47===s.themeId&&(document.querySelector("html").style.overflow="auto"),(0,i.jsx)("div",{className:"tb_post_modal_post_wrapper",style:{height:1!=e.type?n.height-90:"auto"},children:(0,i.jsx)("div",{className:"tb_post_modal_post_wrap_in",children:(0,i.jsxs)("div",{className:"tb_post_modal_post_content tb-cTBfont-".concat(s.font_varient),style:h,children:[e.rating?(0,i.jsx)(l,{rating:e.rating,network:e.network}):null,(0,i.jsxs)("div",{className:"tb_post_modal_content ".concat(m),children:[t?(0,i.jsx)("div",{className:"tb_post_bold_txt",children:(0,o.ZP)(t)}):null,(0,i.jsx)(c.Z,{data:e,content:p,Personalization:a})]})]})})},"content_".concat(e.id))}}},53108:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(72791),o=a(79200),i=a(2703),n=a(80184);const l=JSON.parse(window.localStorage.getItem("mediaDimension"));class r extends s.PureComponent{constructor(t){super(t),this.updateImageDimensions=()=>{if(this.mediaRef.current){1===this.mediaRef.current.getAttribute("data-load")&&this.setState({imgUrl:this.mediaRef.current.src});const t=[this.mediaRef.current.offsetHeight,this.mediaRef.current.offsetWidth];window.localStorage.setItem("mediaDimension",JSON.stringify(t)),this.setState({mediaLoaded:!0,mediaSize:{height:this.mediaRef.current.offsetHeight,width:this.mediaRef.current.offsetWidth}},(()=>this.props.mediaSizeCallback({height:this.state.mediaSize.height,width:this.state.mediaSize.width})))}},this.state={mediaSize:{height:null!=l?l[0]:"85vh",width:null!=l?l[1]:"85vh"},mediaLoaded:!1,imgUrl:t.ImageUrl},this.mediaRef=s.createRef()}componentWillReceiveProps(t){const{ImageUrl:e}=t;this.state.imgUrl!==e&&this.setState({imgUrl:e,mediaLoaded:!1})}componentDidMount(){window.addEventListener&&window.addEventListener("resize",this.updateImageDimensions)}componentWillUnmount(){window.removeEventListener("resize",this.updateImageDimensions)}render(){const{data:t,wall:e,opacity:a}=this.props,{imgUrl:s,mediaSize:l,mediaLoaded:r}=this.state;return(0,n.jsx)("div",{className:"tb_post_modal_img_holder".concat(r?"":" tb_media_modal_spinner"),style:{minHeight:r?null:l.height,minWidth:r?null:l.width},children:(0,n.jsx)("img",{className:"tb_post_modal_img_",decoding:"async",ref:this.mediaRef,src:s,alt:(0,i.P)(s),"data-link":t.link,"data-network":t.network.id,"data-wall-id":e.Wall.id,"data-owner-id":e.Wall.owner,"data-item-id":t.id,"data-filter-id":t.filterId,"data-load":"0",onLoad:this.updateImageDimensions,onError:t.stories?null:t=>{(0,o.ht)(t)},loading:"lazy",draggable:"false",style:{opacity:r?a:0}},s)})}}},13728:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var s=a(72791),o=a(53108),i=a(78764),n=a(27137),l=(a(67226),a(80184));class r extends s.PureComponent{constructor(t){super(t)}render(){const{data:t}=this.props;return(0,l.jsxs)("div",{className:"tb_post_modal_media_holder",children:[(0,l.jsx)("div",{className:"tb_post_modal_audio_thumb_blur",style:{backgroundImage:"url(".concat(t.postFileNew,")")},children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_post_modal_audio_thumb",style:{backgroundImage:"url(".concat(t.postFileNew,")")},children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_post_modal_audio_wrapper",children:(0,l.jsx)(n.Z,{className:"tb_post_modal_audio",autoPlay:!0,showJumpControls:!1,showDownloadProgress:!1,showFilledProgress:!1,hasDefaultKeyBindings:!1,layout:"horizontal-reverse",customVolumeControls:[],customAdditionalControls:[],src:t.mediaUrl})})]})}}const d=s.lazy((()=>Promise.all([a.e(8282),a.e(9208)]).then(a.bind(a,89208))));class c extends s.PureComponent{constructor(){super(...arguments),this.mediaSize=t=>{this.props.mediaSizeCallback(t)}}render(){const{data:t}=this.props;return(0,l.jsx)("div",{className:"tb_post_modal_media_holder",children:t.imageList&&t.imageList.length>0?(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(d,{imageList:t.imageList,...this.props})}):2===t.type||4===t.type?(0,l.jsx)(o.Z,{ImageUrl:t.filename,...this.props,mediaSizeCallback:this.mediaSize,opacity:1}):3===t.type||5===t.type?t&&t.isAudio?(0,l.jsx)(r,{...this.props}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{ImageUrl:t.filename,...this.props,mediaSizeCallback:this.mediaSize,opacity:1}),(0,l.jsx)(i.Z,{...this.props})]}):null})}}},45434:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(72791),o=a(77581),i=a(79200),n=a(80184);class l extends s.PureComponent{constructor(){super(...arguments),this.onShareFacebooklink=t=>e=>{window.open(t,"_target");const{item:a,wall:s}=this.props;(0,i.S5)({type:2,action:2,wall:s.Wall.id,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:s.Wall.owner}),(0,i.Fv)("Tagbox","popup_share_click","popup_share",s.Wall.id)},this.onTwitterClick=t=>{const{item:e,wall:a}=this.props;t&&((0,i.S5)({type:2,action:2,wall:a.Wall.id,feed:e.feedId,post:e.referenceId?e.referenceId:e.id,owner:a.Wall.owner}),(0,i.Fv)("Tagbox","popup_share_click","popup_share",a.Wall.id)),window.open(e.share.twitter,"_target")},this.linkedinShareCount=t=>e=>{const{item:a,wall:s}=this.props;(0,i.S5)({type:2,action:2,wall:s.Wall.id,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:s.Wall.owner}),(0,i.Fv)("Tagbox","popup_share_click","popup_share",s.Wall.id),window.open(t,"_target")}}componentDidMount(){window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)})),window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)}))}componentWillReceiveProps(t){window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)})),window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)}))}render(){const{sharePostPopUP:t,item:e,color:a}=this.props,s={color:a};return(0,n.jsx)("div",{className:"tb_post_modal_post_footer_social_",children:(0,n.jsxs)("div",{className:"tb_post_modal_share_ico",children:[(0,n.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,n.jsx)("div",{onClick:this.onShareFacebooklink(e.share.facebook),children:(0,n.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-facebook",style:s,children:" "})})}),(0,n.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,n.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-twitter",onClick:this.onTwitterClick,style:s})}),(0,n.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,n.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-linkedin",onClick:this.linkedinShareCount(e.share.linkedin),style:s})}),e.link?(0,n.jsx)("div",{className:"tb_post_modal_social_ico_list___",onClick:a=>t(e),children:(0,n.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-Mail",style:s,children:" "})}):null,e.link?(0,n.jsx)("div",{className:"tb_post_modal_social_ico_list___ tb_post_link__",onClick:t=>window.open(e.link,"_blank"),children:(0,n.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-link",style:s,children:" "})}):null]})})}}const r=(0,o.$j)(null,(t=>({sharePostPopUP:e=>t((0,i.K8)(e))})))(l)},78764:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(72791),o=a(96710),i=a(80184);class n extends s.PureComponent{constructor(t){super(t),this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={videoLoaded:!1},this.VideoWrap=s.createRef()}render(){const{data:t,wall:e}=this.props,{videoLoaded:a}=this.state;return(0,i.jsx)("div",{className:"tb_post_modal_video_holder".concat(a?" tb_post_video_loaded":""),ref:this.VideoWrap,children:(0,i.jsx)(o.Z,{className:"tb_post_modal_video",url:t.mediaUrl,"data-type":"video","data-network":t.networkId,"data-link":t.link,"data-wall-id":e.Wall.id,"data-item-id":t.id,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},loop:!0,onError:t=>{this.setVideoLoaded(!1)},autoPlay:!0,muted:!0,volume:0,playsinline:!0,onReady:t=>{this.setVideoLoaded(!0)},playing:!0,height:"100%",width:"100%"})},t.mediaUrl)}}},16908:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>g});var s=a(72791),o=a(77581),i=a(13728),n=a(47071),l=a(45434),r=a(9279),d=a(79200),c=a(32505),_=a(2703),h=a(67945),p=a.n(h),m=(a(24655),a(80184));class u extends s.PureComponent{constructor(){super(...arguments),this.state={isEnable:0,eventData:{},shareText:"SHARE",viewOnText:"View on",currentIndex:null,completeData:{},personalization:{},url:null,platform:null,imgData:[],type:"",parentID:"",isRepeatingPost:!1,mediaSize:{height:500,width:500}},this.keyboardEvent=t=>{let e=this.state.currentIndex;39==t.keyCode||40==t.keyCode?(e+=1,this.featuredPopSliderChangeIndex(e)(t)):37==t.keyCode||38==t.keyCode?(e-=1,this.featuredPopSliderChangeIndex(e)(t)):27==t.keyCode&&this.closeWidgetPopUP()},this.onCloseModal=()=>{var t=document.querySelector("#tb_post_modal_modal-".concat(this.state.parentID));t&&t.classList.contains("tb_post_modal_show")&&(t.classList.remove("tb_post_modal_show"),this.setState({isEnable:0,currentIndex:null,type:""},this.props.closePopUP()));var e=document.getElementsByTagName("html");e&&e[0]&&(e[0].style.overflow="")},this.closeWidgetPopUP=t=>this.onCloseModal(),this.getWidgetPopUPEvent=t=>{void 0!==t&&""!=t&&t.card&&("post"==t.type?this.setState({url:"",isEnable:1,eventData:t,currentIndex:t.index,completeData:t.idArray,viewOnText:t.viewOnText,shareText:t.shareText,imgData:t.imgData,personalization:t.personalization,type:t.type}):"submit-pic"==t.type&&this.setState({isEnable:1,type:t.type,windowParent:t}))},this.featuredPopSliderChangeIndex=t=>e=>{const{eventData:a,isRepeatingPost:s}=this.state;a.idArray.length-1!=t&&t!==a.idArray.length||s?t===a.idArray.length-1||t===a.idArray.length?this.setState({currentIndex:0,isRepeatingPost:!1}):-1===t?this.setState({currentIndex:a.idArray.length-1,isRepeatingPost:!1}):this.setState({currentIndex:t,isRepeatingPost:!1}):this.loadMore()},this.loadMore=()=>{const{wall:t,postData:e,postHeight:a}=this.props,{eventData:s,currentIndex:o}=this.state,i=!(e.hasMoreData&&Object.keys(e.hasMoreData).length>0)||(!e.hasMoreData[0]||0!=e.hasMoreData[0].hasMoreData)&&(!e.hasMoreData[e.appendData.networkID]||e.hasMoreData[e.appendData.networkID].hasMoreData);if(s.idArray.length-1==o&&this.setState({isRepeatingPost:!0}),i){const s=t.ThemeRule.numberOfPosts,o=Math.floor(Date.now()/1e3);this.props.managePostHeight(a),this.props.getDataNextSteps(t.Wall.id,o,s,e.appendData.networkID,e.appendData.after,e.appendData.heightEvent)}else this.setState({currentIndex:0})},this.popUpCloseClckOnWindow=()=>{document.addEventListener("click",(t=>{t.target.matches("#tb_post_modal_modal-".concat(this.state.parentID))&&this.onCloseModal()}))},this.mediaSize=t=>{this.setState({mediaSize:{height:t.height,width:t.width}})}}componentDidMount(){const{data:t}=this.props;let e=document.querySelector(".tb_app_container"),a=_.b8?_.b8:e.parentNode.id;this.setState({parentID:a}),this.getWidgetPopUPEvent(t),setTimeout((()=>{var e=document.querySelector("#tb_post_modal_modal-".concat(this.state.parentID));e&&e.classList.add("tb_post_modal_show"),void 0!=t.ThemeRule.themeId&&47==t.ThemeRule.themeId&&e&&(e.style.overflow="hidden")}));var s=document.getElementsByTagName("html");s&&s[0]&&(s[0].style.overflow="hidden"),this.popUpCloseClckOnWindow(),window.addEventListener&&window.addEventListener("keydown",this.keyboardEvent),p().init()}componentWillUnmount(){window.removeEventListener("keydown",this.keyboardEvent)}componentDidUpdate(){const t=this;let e=0;if(window.editor){let a=document.getElementById("tb_post_modal_modal-taggbox_main"),s=document.querySelector(".tb_post_modal_conetent"),o=document.querySelector(".tb_post_modal_nxt_btn"),i=document.querySelector(".tb_post_modal_prev_btn");a&&(s&&(s.onclick=()=>e=1),o&&(o.onclick=()=>e=1),i&&(i.onclick=()=>e=1),a.onclick=()=>{0==e&&t.onCloseModal(),e=0})}}componentWillReceiveProps(t){const{postData:e}=t;let{completeData:a,eventData:s}=this.state;if(a.length!=e.postData.length){let t=e.postData.map((t=>e.completeDataObject[t])).filter((t=>!String(t.id).includes("free_add_")));s.idArray=t,this.setState({completeData:t,eventData:s},(()=>{const{currentIndex:t}=this.state;this.setState({currentIndex:t+1})}))}else{!(e.hasMoreData&&Object.keys(e.hasMoreData).length>0)||(!e.hasMoreData[0]||0!=e.hasMoreData[0].hasMoreData)&&(!e.hasMoreData[e.appendData.networkID]||e.hasMoreData[e.appendData.networkID].hasMoreData)}}render(){const{wall:t,reportMediaPopUp:e,languageSetting:a,brandingNetworks:s}=this.props,{currentIndex:o,completeData:d,eventData:_,parentID:h,mediaSize:p}=this.state;let u=null;u=-1===o?d[_.idArray.length-1]:d[o];const g=1==t.Personalization.popupSlideShow;return u&&h&&Object.keys(u).length>0?(0,m.jsx)("div",{className:"tb_post_modal_modal",id:"tb_post_modal_modal-".concat(h),children:(0,m.jsx)("div",{className:"tb_post_modal_modal_dialog",children:(0,m.jsxs)("div",{className:"tb_post_modal_conetent","data-aos":"zoom-in-up",children:[(0,m.jsxs)("div",{className:"tb_post_modal_modal_head",children:[(0,m.jsxs)("div",{className:"tb_post_modal_modal_header",children:[(0,m.jsx)("div",{className:"tb_post_modal_post_link_small",children:(0,m.jsx)("div",{className:"tb_post_modal_post_address",children:u.link?(0,m.jsxs)("div",{className:"tb_post_modal_view_link",onClick:t=>window.open(u.link,"_blank"),children:[(0,m.jsxs)("div",{className:"tb_post_modal_view",children:[a.viewOnText," ",u.network.name]}),(0,m.jsx)("div",{className:"tb_post_view_ico tb__icon tb-arrow-right-alt",children:" "})]}):null})}),(0,m.jsx)("div",{className:"tb_post_modal_close_wrap",children:(0,m.jsx)("div",{className:"tb_post_modal_close_btn",onClick:this.closeWidgetPopUP,children:(0,m.jsx)("div",{className:"tb_post_close_ico tb__icon tb-close-alt",children:" "})})})]}),g?(0,m.jsxs)("div",{className:"tb_post_modal_navigation tb_post_modal_nav_content ".concat(1===u.type?"tb_post_modal_text_nav__":null),children:[(0,m.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_prev_btn",onClick:this.featuredPopSliderChangeIndex(o-1),children:(0,m.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-left-alt",children:" "})}),(0,m.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_nxt_btn",onClick:this.featuredPopSliderChangeIndex(o+1),children:(0,m.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-right-alt",children:" "})})]}):null]}),(0,m.jsxs)("div",{className:"tb_post_modal_modal_body",style:{backgroundColor:t.ThemeRule.cardColor},children:[1!=u.type?(0,m.jsxs)("div",{className:"tb_post_modal_details_left",children:[g?(0,m.jsxs)("div",{className:"tb_post_modal_navigation tb_post_modal_nav_img",children:[(0,m.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_prev_btn",onClick:this.featuredPopSliderChangeIndex(o-1),children:(0,m.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-left-alt",children:" "})}),(0,m.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_nxt_btn",onClick:this.featuredPopSliderChangeIndex(o+1),children:(0,m.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-right-alt",children:" "})})]}):null,(0,m.jsx)(i.Z,{data:u,wall:t,mediaSizeCallback:this.mediaSize})]}):null,(0,m.jsx)("div",{className:"tb_post_modal_details_right ".concat(1===u.type?"tb_post_modal_text__":""),style:{backgroundColor:u.font.cardColor},children:(0,m.jsxs)("div",{className:"tb_post_modal_content_wrap",children:[(0,m.jsxs)("div",{className:"tb_post_modal_post_detail_wrap",children:[(0,m.jsx)(n.Z,{item:u,ThemeRule:t.ThemeRule,Personalization:t.Personalization,ownerId:t.Wall.owner},"author_".concat(u.id)),(0,m.jsx)(r.Z,{ThemeRule:t.ThemeRule,Personalization:t.Personalization,item:u,contentData:u.content,contentTitle:u.contentTitle,mediaSize:p},u.id)]}),(0,m.jsxs)("div",{className:"tb_post_modal_post_footer",children:[(0,m.jsx)("div",{className:"tb_post_modal_post_footer_report",onClick:t=>e(u),children:(0,m.jsx)("div",{className:"tb_post_modal_post_report_media_btn_wrap__",children:(0,m.jsx)("div",{className:"tb_post_modal_post_report_media_btn__",style:{color:u.font.fontColor},children:"Report"})})}),(0,m.jsx)(l.Z,{item:u,wall:t,color:t.ThemeRule.fontColor})]})]})}),t.UserRule.branding_lite&&1==t.UserRule.branding_lite?(0,m.jsx)(c.Z,{brandingNetworks:s,languageSetting:a,wallId:t.Wall.id}):null]})]})})}):null}}const g=(0,o.$j)((t=>({loaderData:t.loaderData,postHeight:t.postHeight.data})),(t=>({closePopUP:e=>t((0,d.zj)(e)),reportMediaPopUp:e=>t((0,d.SD)(e)),managePostHeight:e=>t((0,d.B0)(e)),getDataNextSteps:(e,a,s,o,i,n,l)=>t((0,d.Sx)(e,a,s,o,i,n,l))})))(u)},14496:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});a(72791);var s=a(80184);const o=t=>{let{username:e,network:a}=t;return(0,s.jsx)("img",{className:"tb_nc_author_profile__",src:"https://ui-avatars.com/api/?name=".concat(function(t){if(t){var e=t.match(/[A-Za-z]/);return e?e[0]:""}return""}(e),"&background=").concat(String(null===a.id?"#000":a.color).replace("#",""),"&color=fff&length=1"),alt:e,width:44,height:44})}},70757:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(72791),o=a(80184);const i=s.lazy((()=>a.e(1088).then(a.bind(a,41088))));class n extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,font:n}=this.props;return 1===a.iconType&&(7!==t.id&&4!==t.id)?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:a.iconColor},children:(0,o.jsx)("div",{})}):(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(i,{network:t,ThemeRule:a,networkClass:e})]})}}},46476:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var s=a(72791),o=a(35737),i=a(34867),n=a(80184);const l=a(80844),r=t=>(0,n.jsx)(o.default,{children:(0,i.ZP)(t)}),d=t=>{let{data:e,content:a,Personalization:s}=t;const o={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,i.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(l(a,/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:o,children:["#",t]}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?r(window.slackdown.parse(l(a,e.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:o,children:t}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(l(a,/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:o,children:["#",t]},e))),e.slackMember)):r(window.slackdown.parse(a,e.slackMember))}):(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,i.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?l((0,i.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:o,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?l((0,i.ZP)(a),e.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:o,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?l((0,i.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:o,children:["#",t]},e))):(0,i.ZP)(a)})},c=(0,s.memo)(d)},24655:()=>{},50247:()=>{}}]);
//# sourceMappingURL=3594.d6b7c2af.chunk.js.map