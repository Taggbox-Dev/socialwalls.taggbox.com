(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5022,8342,9239,5790,5810,4261],{89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),i=a(17739),n=a(98935),o=a(46417);class r extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:a,network:s}=this.props;return(0,o.jsx)("div",{className:a,children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(a,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,i.P)(e.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,o.jsx)(n.Z,{authorClass:a,username:e.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>i});a(47313);var s=a(46417);const i=t=>{let{username:e,network:a}=t;return(0,s.jsx)("img",{className:"tb_nc_author_profile__",src:"https://ui-avatars.com/api/?name=".concat(function(t){if(t){var e=t.match(/[A-Za-z]/);return e?e[0]:""}return""}(e),"&background=000&color=fff&length=1"),alt:e,width:44,height:44})}},7138:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});var s=a(47313),i=a(46417);class n extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:a,onClickToCTA:s,item:n}=this.props,o=!(!a||1!==a.status),r={color:o?a.color:t.color,backgroundColor:o?a.background:t.background};return(0,i.jsxs)("div",{className:e,style:r,onClick:e=>{e.stopPropagation(),s(n),window.open("".concat(o?a.url:t.url),"_blank")},children:[" ",o?a.text:t.text]})}}const o=n},84261:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var s=a(47313),i=a(64516),n=a(2406),o=a(17739),r=a(98501),c=a(46417);class l extends s.PureComponent{constructor(t){super(t),this.updateDimensions=()=>{let t=this.ImgWrap.current.getBoundingClientRect();t&&this.setState({newSize:{height:t.height.toFixed(),width:t.width.toFixed()}})},this.onMediaLoad=async t=>{const{data:e}=this.props,{imgUrl:a}=this.state;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({mediaSize:{height:e.mediaHeight,width:e.mediaWidth}});else try{const{width:t,height:e}=await(0,n.Ad)(a);this.setState({mediaSize:{height:e,width:t}})}catch(s){this.setState({loadError:!0,mediaSize:{height:100,width:100}})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,imgUrl:this.props.data.postFileNew,percentHeight:"100",newSize:{height:100,width:100},mediaSize:{height:100,width:100}},this.ImgWrap=s.createRef()}componentDidMount(){this.updateDimensions(),this.props.size||this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:a,themeID:s,ownerId:n,size:l}=this.props,{imgUrl:d,newSize:h,mediaSize:_}=this.state,u={paddingBottom:l?"".concat(l,"%"):100*_.height/_.width+"%"};return(0,c.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:u,ref:this.ImgWrap,children:(0,c.jsx)("img",{className:t,role:"img",src:d,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":a,"data-owner-id":n,"data-item-id":e.id,"data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,i.ht)(t)},alt:(0,o.P)(d)})})}}},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var s=a(47313),i=a(46417);const n=s.lazy((()=>a.e(5867).then(a.bind(a,95867))));class o extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a}=this.props;return 1===a.iconType&&(7!==t.id&&4!==t.id)?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:a.iconColor},children:(0,i.jsx)("div",{})}):(0,i.jsxs)(s.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(n,{network:t,ThemeRule:a,networkClass:e})]})}}},62245:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var s=a(47313),i=a(16390),n=a(17739),o=a(30584),r=a(46417);class c extends s.PureComponent{render(){const{contentClass:t,content:e,ThemeRule:a,font:c,personalization:l,item:d,contentTitle:h}=this.props;let _=20==d.network.id?e:(0,n.Fx)(e);return 12==d.network.id&&(_=(0,i.ZP)(_)),(0,r.jsxs)("div",{className:"".concat(t," tb-cTBfont- ").concat(a.font_varient),style:{fontFamily:a.css_font,fontSize:c.fontsize,color:c.fontColor},children:[h?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(h)}):null,(0,r.jsxs)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(o.Z,{data:d,content:_,Personalization:l},_)]})]})}}},30584:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var s=a(47313),i=a(91523),n=a(16390),o=a(46417);const r=a(77560),c=(t,e)=>(0,o.jsx)(i.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,n.ZP)(t)}),l=t=>{let{data:e,content:a,Personalization:s,ThemeRule:i}=t;const l={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,o.jsx)(o.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,n.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?c(window.slackdown.parse(r(a,/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:l,children:["#",t]}))),e.slackMember),i):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?c(window.slackdown.parse(r(a,e.hash.hashString,((t,e)=>(0,o.jsx)("strong",{className:"tb_text_hashtag",style:l,children:t}))),e.slackMember),i):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?c(window.slackdown.parse(r(a,/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:l,children:["#",t]},e))),e.slackMember),i):c(window.slackdown.parse(a,e.slackMember),i)}):(0,o.jsx)(o.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,n.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?r((0,n.ZP)(a),/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:l,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?r((0,n.ZP)(a),e.hash.hashString,((t,e)=>(0,o.jsx)("strong",{className:"tb_text_hashtag",style:l,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?r((0,n.ZP)(a),/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:l,children:["#",t]},e))):c(a,i)})},d=(0,s.memo)(l)},90905:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});var s=a(47313),i=a(46417);const n=t=>{let{network:e}=t;const{className:a,color:s}={3:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#1b74e4"},4:{className:"tb_rating_ico__ tb__icon tb-rating tb-google-rating",color:"#F8B90C"},19:{className:"tb_rating_ico__ tb__icon tb-rating tb-yelp-rating",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-rating tb-airbnb-rating",color:"#ff385c"},29:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#613983"}}[e.id]||{className:"tb_rating_ico__ tb__icon tb-rating",color:"#F8B90C"};return(0,i.jsx)("div",{className:a,style:{color:s},"tb-network":e.id})};class o extends s.PureComponent{render(){const{rating:t,network:e}=this.props;return(0,i.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>(0,i.jsx)(n,{network:e},a))):null})}}},5744:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});var s=a(47313),i=a(64516),n=a(46417);class o extends s.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:a,wallID:s,ownerId:n}=this.props;e.stopPropagation(),(0,i.S5)({type:2,action:2,wall:s,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:n}),(0,i.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon tb-share-hover",children:" "}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook"})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter"})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin"})}):""]})]})}}},32675:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var s=a(47313),i=a(46417);const n=(t,e,a)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat(atob(e)):a,o=(t,e,a)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat(atob(e)):a,r=t=>{let{arialbl:e,hrefClick:a,Icon:s,iconColorStyle:n,count:o}=t;return(0,i.jsx)("div",{className:"tb_social_action__list",children:(0,i.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(a,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,i.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(s),style:n,children:" "}),o>0?(0,i.jsx)("div",{className:"tb_social_action_counts__",style:n,children:o}):""]})})};class c extends s.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:a,ThemeID:s}=this.props,c={color:3===s?1===e.iconType?e.iconColor:t.network.color:e.fontColor},l=t.network.id,d=3===l||10===l||7===l?"like-alt":"heart-alt",h=!![1,2,3,7,8,9,10,18].includes(l),_=![29,19].includes(l),u=t.network.name?t.network.name:"";return(0,i.jsx)(i.Fragment,{children:29!==l&&26!==l&&23!==l&&6!==l&&5!==l&&11!==l&&12!==l&&15!==l&&20!==l&&21!==l?(0,i.jsx)("div",{className:a,children:(0,i.jsxs)("div",{className:"tb_social_action__",children:[h?(0,i.jsx)(r,{arialbl:u,hrefClick:n(l,t.postId,t.link),Icon:d,iconColorStyle:c,count:t.like_count}):null,_?(0,i.jsx)(r,{arialbl:u,hrefClick:o(l,t.postId,t.link),Icon:"comment",iconColorStyle:c,count:t.comment_count}):null,1===l?(0,i.jsx)(r,{arialbl:u,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat(atob(t.postId)),Icon:"retweet",iconColorStyle:c,count:t.comment_count}):null,(0,i.jsx)(r,{arialbl:u,hrefClick:t.link,Icon:"eye-alt",iconColorStyle:c,count:0})]})}):""})}}},55790:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),i=a(17739),n=a(46417);const o=t=>{const{postTime:e,timeClass:a,authorNameStyle:o}=t,r=(0,s.useMemo)((()=>(0,i.Sy)(e)),[]);return(0,n.jsx)("div",{className:a,style:o,children:r})},r=(0,s.memo)(o)},38577:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>k});var s=a(47313),i=a(61395),n=a.n(i),o=a(89239),r=a(55790),c=a(25810),l=a(46417);const d=t=>{let{author:e,personalization:a,postTime:s,network:i,ThemeRule:n,font:d,ownerId:h,itemData:_}=t;const u=e.username&&e.username.length>0?"@".concat(e.username):"",m={color:n.authorColor},g={backgroundColor:n.authorColor},p=!(!a.postAuthor||e.isInstaUser),b=!(!a.postAuthor||!a.postTime||e.isInstaUser);return(0,l.jsxs)("div",{className:"tb_nc_author_wrapper",children:[(0,l.jsxs)("div",{className:"tb_nc_author",children:[p||100231===h?(0,l.jsx)(o.default,{itemData:_,network:i,author:e,authorClass:"tb_nc_author_profile"}):"",(0,l.jsxs)("div",{className:"tb_nc_author_info",children:[p||100231===h?(0,l.jsx)("div",{className:"tb_nc_authorname",style:m,children:e.name}):"",(0,l.jsxs)("div",{className:"tb_nc_post_info",children:[p||100231===h?(0,l.jsx)("div",{className:"tb_nc_username",style:m,children:u}):"",b?(0,l.jsx)("div",{className:"tb_nc_seprator",style:g,children:" "}):"",a.postTime?(0,l.jsx)(r.default,{postTime:s,timeClass:"tb_nc_time",authorColor:n.authorColor}):""]})]})]}),(0,l.jsx)("div",{className:"tb_nc_social_",children:(0,l.jsx)(c.default,{networkClass:"tb_nc_social_ico",network:i,ThemeRule:n,font:d})})]})};var h=a(84261);const _=t=>{let{itemData:e,wallID:a,ownerId:s}=t;const i=3===e.type||5===e.type,n=7===e.network.id,o=!!(e.imageList&&e.imageList.length>0),r=(e.imageList&&e.imageList.length)>0&&(3===e.type||5===e.type)?"tb_nc_multi_images_ico_bottom":"tb_nc_multi_images_ico",c=1===e.isAudio;return(0,l.jsxs)("div",{className:"tb_nc_media_wrap",children:[o?(0,l.jsx)("div",{className:"".concat(r," tb__icon tb-multiple"),children:" "}):"",i?n?(0,l.jsxs)("div",{className:"tb_nc_youtube_ico tb__icon tb-youtube-default",children:[(0,l.jsx)("div",{className:"tb_color_icon__ tb_d_youtube_path_1",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_color_icon__ tb_d_youtube_path_2",children:(0,l.jsx)("div",{})})]}):c?(0,l.jsx)("div",{className:"tb_nc_audio_ico tb__icon tb-audio",children:(0,l.jsx)("div",{})}):(0,l.jsx)("div",{className:"tb_nc_video_ico tb__icon tb-video",children:(0,l.jsx)("div",{})}):"",(0,l.jsx)(h.default,{ImageClass:"tb_nc_image",data:e,wallID:a,ownerId:s,size:!1})]})};var u=a(62245),m=a(5744),g=a(7138),p=a(90905),b=a(32675),w=a(17739);const x=t=>{let{itemData:e,personalization:a,adjustWidth:s,ThemeRule:i,clickToShowPopUp:n,itemIndex:o,wallID:r,ownerId:c,onClickToCTA:h}=t;const x={width:"".concat(s,"%"),padding:a.padding/2},f={backgroundColor:e.font.cardColor},v=2===e.type||3===e.type||4===e.type||5===e.type,j=e.rating>0,k=e.rating>0?"tb_nc_rating_content":"tb_nc_content",y=1===e.type&&a.textDecorate?"tb_nc_text_decoration tb_nc_text_post":"",C=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),N=a.trimcontent?(0,w.Sv)(e.content,200):e.content;return(0,l.jsx)("div",{id:"tb-nc-post-".concat(e.id),className:"tb_nc_post_wrapper",style:x,"tb-network":e.network.icon,children:(0,l.jsx)("div",{className:"tb_nc_post_wrap_in",children:(0,l.jsxs)("div",{className:"tb_nc_post_in",style:f,onClick:n(o,e),children:[(0,l.jsxs)("div",{className:"tb_nc_post_media_wrapp",children:[e.share.status?(0,l.jsx)(m.Z,{share:e.share,shareClass:"tb_nc_share_container",item:e,wallID:r,ownerId:c}):"",v?(0,l.jsx)(_,{itemData:e,wallID:r,ownerId:c}):"",j?(0,l.jsx)("div",{className:"tb_nc_rating__",children:(0,l.jsx)(p.Z,{rating:e.rating,network:e.network})}):""]}),(0,l.jsxs)("div",{className:"tb_nc_contant_wrapper",children:[(0,l.jsx)(d,{ownerId:c,itemData:e.id,postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:a,ThemeRule:i}),C?(0,l.jsx)("div",{className:"tb_nc_post_cta",children:(0,l.jsx)(g.Z,{ctaClass:"tb_nc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:h})}):"",e.hideContent?"":(0,l.jsx)(u.default,{contentClass:"".concat(k," ").concat(y),item:e,content:N,font:e.font,ThemeRule:i,personalization:a,contentTitle:e.contentTitle})]}),i.socialAction?(0,l.jsx)(b.Z,{itemData:e,ThemeRule:i,ThemeID:a.widgetTheme,actionClass:"tb_nc_social_action__"}):""]})})})};var f=a(43411),v=a(64516);class j extends s.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{this.editorHeight()},this.editorHeight=()=>{var t=document.querySelector(".tb_nc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentDidMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:a,wall:s,postSize:i,clickToShowPopUp:o,onClickToCTA:r}=this.props,{loadData:c}=this.state;return(0,l.jsx)(n(),{className:"tb_nc_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_nc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:c?t&&t.length>0&&t.map(((t,n)=>{const c=e[t];return(0,l.jsx)(x,{ownerId:s.Wall.owner,itemData:c,itemIndex:n,adjustWidth:1==c.highlight?2*a:a,postSize:i,personalization:s.Personalization,ThemeRule:s.ThemeRule,wallID:s.Wall.id,clickToShowPopUp:o,onClickToCTA:r},"nc_card".concat(c.id))})):null})}}const k=(0,f.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,v.B0)(e))})))(j)},61729:(t,e,a)=>{"use strict";var s=a(79165);function i(){}function n(){}n.resetWarningCache=i,t.exports=function(){function t(t,e,a,i,n,o){if(o!==s){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function e(){return t}t.isRequired=t;var a={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:n,resetWarningCache:i};return a.PropTypes=a,a}},75192:(t,e,a)=>{t.exports=a(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2406:(t,e,a)=>{"use strict";e.Ad=void 0;var s=a(84228);var i=a(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return i.getImageSize}});var n=a(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,a)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=a(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((a,i)=>{if("undefined"===typeof window)return i(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return i(s.ErrorMessage.URL_IS_NOT_DEFINED);let n=null;const o=new Image;o.addEventListener("load",(()=>{n&&window.clearTimeout(n),a({width:o.naturalWidth,height:o.naturalHeight})})),o.addEventListener("error",(t=>{n&&window.clearTimeout(n),i("".concat(t.type,": ").concat(t.message))})),o.src=t,e.timeout&&(n=window.setTimeout((()=>i(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,a){"use strict";var s=this&&this.__awaiter||function(t,e,a,s){return new(a||(a=Promise))((function(i,n){function o(t){try{c(s.next(t))}catch(e){n(e)}}function r(t){try{c(s.throw(t))}catch(e){n(e)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(o,r)}c((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const i=a(47313),n=a(65786);e.useImageSize=(t,e)=>{const[a,o]=(0,i.useState)(null),[r,c]=(0,i.useState)(!1),[l,d]=(0,i.useState)(null);return(0,i.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){c(!0),o(null);try{const{width:a,height:s}=yield(0,n.getImageSize)(t,e);o({width:a,height:s})}catch(l){d(l.toString())}finally{c(!1)}}))}),[t,e]),[a,{loading:r,error:l}]}},50247:()=>{}}]);