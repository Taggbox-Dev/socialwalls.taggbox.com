(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4337,8342,9239,5790,5810,4261],{89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(47313),i=s(17739),o=s(98935),r=s(46417);class n extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:s,network:a}=this.props;return(0,r.jsx)("div",{className:s,children:this.state.isAuthorImagevalid?(0,r.jsx)("img",{className:"".concat(s,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,i.P)(e.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,r.jsx)(o.Z,{authorClass:s,username:e.name,network:a,color:null===a.id?"#000":a.color})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});s(47313);var a=s(46417);const i=t=>{let{username:e,network:s}=t;return(0,a.jsx)("img",{className:"tb_nc_author_profile__",src:"https://ui-avatars.com/api/?name=".concat(function(t){if(t){var e=t.match(/[A-Za-z]/);return e?e[0]:""}return""}(e),"&background=000&color=fff&length=1"),alt:e,width:44,height:44})}},7138:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var a=s(47313),i=s(46417);class o extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:a,item:o}=this.props,r=!(!s||1!==s.status),n={color:r?s.color:t.color,backgroundColor:r?s.background:t.background};return(0,i.jsxs)("div",{className:e,style:n,onClick:e=>{e.stopPropagation(),a(o),window.open("".concat(r?s.url:t.url),"_blank")},children:[" ",r?s.text:t.text]})}}const r=o},84261:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});var a=s(47313),i=s(64516),o=s(2406),r=s(17739),n=s(98501),l=s(46417);class d extends a.PureComponent{constructor(t){super(t),this.updateDimensions=()=>{let t=this.ImgWrap.current.getBoundingClientRect();t&&this.setState({newSize:{height:t.height.toFixed(),width:t.width.toFixed()}})},this.onMediaLoad=async t=>{const{data:e}=this.props,{imgUrl:s}=this.state;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({mediaSize:{height:e.mediaHeight,width:e.mediaWidth}});else try{const{width:t,height:e}=await(0,o.Ad)(s);this.setState({mediaSize:{height:e,width:t}})}catch(a){this.setState({loadError:!0,mediaSize:{height:100,width:100}})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,imgUrl:this.props.data.postFileNew,percentHeight:"100",newSize:{height:100,width:100},mediaSize:{height:100,width:100}},this.ImgWrap=a.createRef()}componentDidMount(){this.updateDimensions(),this.props.size||this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:s,themeID:a,ownerId:o,size:d}=this.props,{imgUrl:c,newSize:h,mediaSize:_}=this.state,p={paddingBottom:d?"".concat(d,"%"):100*_.height/_.width+"%"};return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:p,ref:this.ImgWrap,children:(0,l.jsx)("img",{className:t,role:"img",src:c,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":o,"data-item-id":e.id,"data-filter-id":e.filterId,"theme-id":a,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(n.do,"/media/images/no-image.svg"),(0,i.ht)(t)},alt:(0,r.P)(c)})})}}},64442:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});var a=s(47313),i=s(2406),o=(s(98501),s(20510)),r=s.n(o),n=s(46417);class l extends a.PureComponent{constructor(t){super(t),this.updateDimensions=()=>{const{size:t}=this.props;let e=this.VideoWrap.current.getBoundingClientRect().width;e?this.setState({newSize:{height:(e*t.height/t.width).toFixed(),width:e.toFixed()}}):this.setState({newSize:{height:300,width:300}})},this.onMediaLoad=async t=>{const{data:e}=this.props,{imgUrl:s}=this.state;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({mediaSize:{height:e.mediaHeight,width:e.mediaWidth}});else try{const{width:t,height:e}=await(0,i.Ad)(s);this.setState({mediaSize:{height:e,width:t}})}catch(a){this.setState({loadError:!0,mediaSize:{height:100,width:100}})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,imgUrl:this.props.imgUrl,newSize:{height:300,width:300},mediaSize:{height:100,width:100},videoLoaded:!1},this.VideoWrap=a.createRef()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),setTimeout((()=>{this.updateDimensions()}),100),this.props.size||this.onMediaLoad()}render(){const{VideoClass:t,data:e,wallID:s,isCover:a,size:i}=this.props,{imgUrl:o,newSize:l,mediaSize:d,videoLoaded:c}=this.state,h={paddingBottom:i?"".concat(i,"%"):100*d.height/d.width+"%"};return(0,n.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:h,ref:this.VideoWrap,children:(0,n.jsx)(r(),{className:t,url:e.mediaUrl,"data-type":"video","data-network":e.networkId,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},loop:!0,onError:t=>{this.setVideoLoaded(!1)},autoPlay:!0,muted:!0,volume:0,playsinline:!0,onReady:t=>{this.setVideoLoaded(!0)},playing:!0,height:"100%",width:"100%",controls:!1,style:{backgroundImage:c?"":"url(".concat(e.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})})}}},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(47313),i=s(46417);const o=a.lazy((()=>s.e(5867).then(s.bind(s,95867))));class r extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s}=this.props;return 1===s.iconType&&(7!==t.id&&4!==t.id)?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:[69,65].includes(s.themeId)&&"#ffffff "==s.iconColor?"#000":s.iconColor},children:(0,i.jsx)("div",{})}):(0,i.jsxs)(a.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(o,{network:t,ThemeRule:s,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var a=s(47313),i=s(16390),o=s(17739),r=s(30584),n=s(46417);class l extends a.PureComponent{render(){const{contentClass:t,content:e,ThemeRule:s,font:l,personalization:d,item:c,contentTitle:h}=this.props;let _=20==c.network.id?e:(0,o.Fx)(e);return 12==c.network.id&&(_=(0,i.ZP)(_)),(0,n.jsxs)("div",{className:"".concat(t," tb-cTBfont- ").concat(s.font_varient),style:{fontFamily:s.css_font,fontSize:l.fontsize,color:l.fontColor},children:[h?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(h)}):null,(0,n.jsxs)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(r.Z,{data:c,content:_,Personalization:d},_)]})]})}}},30584:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var a=s(47313),i=s(91523),o=s(16390),r=s(46417);const n=s(77560),l=(t,e)=>(0,r.jsx)(i.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,o.ZP)(t)}),d=t=>{let{data:e,content:s,Personalization:a,ThemeRule:i}=t;const d={color:a.hashtag_color,fontWeight:"bold",backgroundColor:1==a.hashtag_background_status?a.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,r.jsx)(r.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,o.ZP)(s):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?l(window.slackdown.parse(n(s,/#(\w+)/g,((t,e)=>(0,r.jsxs)("strong",{className:"tb_text_hashtag",style:d,children:["#",t]}))),e.slackMember),i):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?l(window.slackdown.parse(n(s,e.hash.hashString,((t,e)=>(0,r.jsx)("strong",{className:"tb_text_hashtag",style:d,children:t}))),e.slackMember),i):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?l(window.slackdown.parse(n(s,/#(\w+)/g,((t,e)=>(0,r.jsxs)("strong",{className:"tb_text_hashtag",style:d,children:["#",t]},e))),e.slackMember),i):l(window.slackdown.parse(s,e.slackMember),i)}):(0,r.jsx)(r.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,o.ZP)(s):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?n((0,o.ZP)(s),/#(\w+)/g,((t,e)=>(0,r.jsxs)("strong",{className:"tb_text_hashtag",style:d,children:["#",t]}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?n((0,o.ZP)(s),e.hash.hashString,((t,e)=>(0,r.jsx)("strong",{className:"tb_text_hashtag",style:d,children:t}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?n((0,o.ZP)(s),/#(\w+)/g,((t,e)=>(0,r.jsxs)("strong",{className:"tb_text_hashtag",style:d,children:["#",t]},e))):l(s,i)})},c=(0,a.memo)(d)},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(47313),i=s(17739),o=s(46417);const r=t=>{const{postTime:e,timeClass:s,authorNameStyle:r}=t,n=(0,a.useMemo)((()=>(0,i.Sy)(e)),[]);return(0,o.jsx)("div",{className:s,style:r,children:n})},n=(0,a.memo)(r)},99641:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>f});var a=s(47313),i=s(11774),o=s(89239),r=s(55790),n=s(25810),l=s(46417);const d=t=>{let{author:e,personalization:s,postTime:a,network:i,ThemeRule:d,font:c,ownerId:h}=t;const _=e.username&&e.username.length>0?"@".concat(e.username):"",p={color:d.authorColor},m={backgroundColor:d.authorColor},u=!(!s.postAuthor||e.isInstaUser),g=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,l.jsxs)("div",{className:"tb_spt_author_wrapper",children:[(0,l.jsxs)("div",{className:"tb_spt_author",children:[u||100231===h?(0,l.jsx)(o.default,{author:e,network:i,authorClass:"tb_spt_author_profile"}):"",(0,l.jsxs)("div",{className:"tb_spt_author_info",children:[u||100231===h?(0,l.jsx)("div",{className:"tb_spt_authorname",style:p,children:e.name}):"",(0,l.jsxs)("div",{className:"tb_spt_post_info",children:[u||100231===h?(0,l.jsx)("div",{className:"tb_spt_username",style:p,children:_}):"",g?(0,l.jsx)("div",{className:"tb_spt_seprator",style:m,children:" "}):"",s.postTime?(0,l.jsx)(r.default,{postTime:a,timeClass:"tb_spt_time",authorColor:d.authorColor}):""]})]})]}),(0,l.jsx)("div",{className:"tb_spt_social_",children:(0,l.jsx)(n.default,{networkClass:"tb_spt_social_ico",network:i,ThemeRule:d,font:c})})]})},c=t=>{let{share:e,shareColor:s}=t;const a={color:s};return(0,l.jsxs)("div",{className:"tb_spt_share_wrapper",children:[(0,l.jsxs)("div",{className:"tb_spt_share_button_",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico tb__icon tb-share-outline",style:a,children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_btn_txt",style:a,children:"Share"})]}),(0,l.jsx)("div",{className:"tb_spt_share_wrapper_dropdown",children:(0,l.jsxs)("div",{className:"tb_spt_share_icon_list",children:[e.facebook?(0,l.jsxs)("a",{href:e.facebook,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico__ tb__icon tb-facebook",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_ico_txt",children:"Facebook"})]}):"",e.twitter?(0,l.jsxs)("a",{href:e.twitter,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico__  tb__icon tb-twitter",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_ico_txt",children:"Twitter"})]}):"",e.linkedin?(0,l.jsxs)("a",{href:e.linkedin,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico__ tb__icon tb-linkedin",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_ico_txt",children:"LinkedIn"})]}):""]})})]})};var h=s(84261),_=s(64442);const p=t=>{let{itemData:e,wallID:s,ownerId:a,wall:i}=t;const o=(3===e.type||5===e.type)&&28!==e.network.id&&1==i.ThemeRule.autoPlay;return(0,l.jsx)("div",{className:"tb_spt_media_wrap",children:o?(0,l.jsx)(_.Z,{VideoClass:"tb_spt_video",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:a,size:130}):(0,l.jsx)(h.default,{ImageClass:"tb_spt_image",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:a,size:130})})};var m=s(62245),u=s(7138);const g=(t,e,s)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat(atob(e)):s,w=(t,e,s)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat(atob(e)):s,b=t=>{let{itemData:e,ThemeRule:s}=t;const a={color:s.fontColor},i=e.network.id,o=3===i||10===i?"like-alt":"heart-alt";return(0,l.jsx)(l.Fragment,{children:12!==i&&15!==i&&20!==i&&21!==i?(0,l.jsxs)("div",{className:"tb_spt_social_action__",children:[(0,l.jsx)("div",{className:"tb_spt_social_action__list",children:(0,l.jsxs)("a",{href:g(i,e.postId,e.link),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-".concat(o),style:a,children:" "}),e.like_count>0?(0,l.jsx)("div",{className:"tb_spt_social_action_counts__",style:a,children:e.like_count}):""]})}),(0,l.jsx)("div",{className:"tb_spt_social_action__list",children:(0,l.jsxs)("a",{href:w(i,e.postId,e.link),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-comment",style:a,children:" "}),e.like_count>0?(0,l.jsx)("div",{className:"tb_spt_social_action_counts__",style:a,children:e.like_count}):""]})}),1===i?(0,l.jsx)("div",{className:"tb_spt_social_action__list",children:(0,l.jsx)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat(atob(e.postId)),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:(0,l.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-retweet",style:a,children:" "})})}):""]}):""})},x=t=>{let{itemData:e,personalization:s,ThemeRule:a,itemIndex:i,clickToShowPopUp:o,wallID:r,ownerId:n,onClickToCTA:h,wall:_}=t;const g={backgroundColor:a.cardColor},w=2===e.type||3===e.type||4===e.type||5===e.type,x=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),f={justifyContent:e.share.status?"":"flex-end",borderTop:"1px solid ".concat(a.fontColor)};return(0,l.jsx)("div",{id:"tb-spt-post-".concat(e.id),className:"tb_spt_post_wrapper","tb-network":e.network.id,children:(0,l.jsx)("div",{className:"tb_spt_post_in",onClick:o(i,e),children:(0,l.jsxs)("div",{className:"tb_spt_post_media_wrapp",children:[w?(0,l.jsx)(p,{itemData:e,wallID:r,wall:_,ownerId:n}):"",(0,l.jsx)("div",{className:"tb_spt_post_details",children:(0,l.jsxs)("div",{className:"tb_spt_contant_wrapper",children:[(0,l.jsx)(d,{ownerId:n,postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:s,ThemeRule:a}),(0,l.jsxs)("div",{className:"tb_spt_content_wrap",children:[(0,l.jsxs)("div",{className:"tb_spt_content_wrap_in",children:[e.hideContent?"":(0,l.jsx)(m.default,{contentClass:"tb_spt_content",item:e,content:e.content,font:e.font,ThemeRule:a,personalization:s}),x?(0,l.jsxs)("div",{className:"tb_spt_post_cta",children:[(0,l.jsx)(u.Z,{ctaClass:"tb_spt_post_cta_btn",cta:e.cta,contentTitle:e.contentTitle,item:e,onClickToCTA:h})," "]}):""]}),(0,l.jsxs)("div",{className:"tb_spt_social_actions_container",style:f,children:[e.share.status?(0,l.jsx)(c,{share:e.share,shareColor:a.fontColor}):"",a.socialAction?(0,l.jsx)(b,{itemData:e,ThemeRule:a}):""]})]})]})}),(0,l.jsx)("div",{className:"tb_spt_post_overlay",style:g,children:(0,l.jsx)("div",{})})]})})})};s(37210);class f extends a.PureComponent{componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100)}render(){const{postData:t,completeDataObject:e,wall:s,clickToShowPopUp:a,onClickToCTA:o}=this.props,r={type:"loop",rewind:!0,speed:500,gap:0,autoplay:!!s.ThemeRule.slidePost,padding:0,pagination:!1,arrows:!0};return(0,l.jsx)("div",{className:"tb_spt_post_container",children:(0,l.jsxs)(i.tv,{hasTrack:!1,className:"tb_spt_post_slider",options:r,ref:this.myRef,children:[(0,l.jsx)(i.Gj,{children:t&&t.length>0&&t.map(((t,r)=>{const n=e[t];return(0,l.jsx)(i.jw,{style:{margin:0,padding:0},children:(0,l.jsx)(x,{ownerId:s.Wall.owner,itemData:n,itemIndex:r,personalization:s.Personalization,ThemeRule:s.ThemeRule,wallID:s.Wall.id,clickToShowPopUp:a,onClickToCTA:o,wall:s},r)})}))}),(0,l.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_spt_arrow_wrapper_",children:[(0,l.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_spt_arrow tb_spt_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"splide__arrow splide__arrow--next tb_spt_arrow tb_spt_arrow_right__ tb__icon tb-arrow-right-alt",children:(0,l.jsx)("div",{})})]})]})})}}},2406:(t,e,s)=>{"use strict";e.Ad=void 0;var a=s(84228);var i=s(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return i.getImageSize}});var o=s(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const a=s(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,i)=>{if("undefined"===typeof window)return i(a.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return i(a.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const r=new Image;r.addEventListener("load",(()=>{o&&window.clearTimeout(o),s({width:r.naturalWidth,height:r.naturalHeight})})),r.addEventListener("error",(t=>{o&&window.clearTimeout(o),i("".concat(t.type,": ").concat(t.message))})),r.src=t,e.timeout&&(o=window.setTimeout((()=>i(a.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,s){"use strict";var a=this&&this.__awaiter||function(t,e,s,a){return new(s||(s=Promise))((function(i,o){function r(t){try{l(a.next(t))}catch(e){o(e)}}function n(t){try{l(a.throw(t))}catch(e){o(e)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(r,n)}l((a=a.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const i=s(47313),o=s(65786);e.useImageSize=(t,e)=>{const[s,r]=(0,i.useState)(null),[n,l]=(0,i.useState)(!1),[d,c]=(0,i.useState)(null);return(0,i.useEffect)((()=>{a(void 0,void 0,void 0,(function*(){l(!0),r(null);try{const{width:s,height:a}=yield(0,o.getImageSize)(t,e);r({width:s,height:a})}catch(d){c(d.toString())}finally{l(!1)}}))}),[t,e]),[s,{loading:n,error:d}]}},37210:()=>{},50247:()=>{}}]);