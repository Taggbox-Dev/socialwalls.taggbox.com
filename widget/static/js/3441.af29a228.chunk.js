(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3441,7033,7234,7668,757,115],{97234:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(72791),i=a(2703),o=a(14496),n=a(80184);class r extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:a,network:s}=this.props;return(0,n.jsx)("div",{className:a,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(a,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,i.P)(e.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(o.Z,{authorClass:a,username:e.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},14496:(t,e,a)=>{"use strict";a.d(e,{Z:()=>i});a(72791);var s=a(80184);const i=t=>{let{username:e,network:a}=t;return(0,s.jsx)("img",{className:"tb_nc_author_profile__",src:"https://ui-avatars.com/api/?name=".concat(function(t){if(t){var e=t.match(/[A-Za-z]/);return e?e[0]:""}return""}(e),"&background=").concat(String(null===a.id?"#000":a.color).replace("#",""),"&color=fff&length=1"),alt:e,width:44,height:44})}},16243:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(72791),i=a(80184);class o extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:a,onClickToCTA:s,item:o}=this.props,n=!(!a||1!==a.status),r={color:n?a.color:t.color,backgroundColor:n?a.background:t.background};return(0,i.jsxs)("div",{className:e,style:r,onClick:e=>{e.stopPropagation(),s(o),window.open("".concat(n?a.url:t.url),"_blank")},children:[" ",n?a.text:t.text]})}}const n=o},40115:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var s=a(72791),i=a(79200),o=a(80413),n=a(2703),r=a(70188),l=a(80184);class c extends s.PureComponent{constructor(t){super(t),this.updateDimensions=()=>{let t=this.ImgWrap.current.getBoundingClientRect();t&&this.setState({newSize:{height:t.height.toFixed(),width:t.width.toFixed()}})},this.onMediaLoad=async t=>{const{data:e}=this.props,{imgUrl:a}=this.state;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({mediaSize:{height:e.mediaHeight,width:e.mediaWidth}});else try{const{width:t,height:e}=await(0,o.Ad)(a);this.setState({mediaSize:{height:e,width:t}})}catch(s){this.setState({loadError:!0,mediaSize:{height:100,width:100}})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,imgUrl:this.props.data.postFileNew,percentHeight:"100",newSize:{height:100,width:100},mediaSize:{height:100,width:100}},this.ImgWrap=s.createRef()}componentDidMount(){this.updateDimensions(),this.props.size||this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:a,themeID:s,ownerId:o,size:c}=this.props,{imgUrl:_,newSize:d,mediaSize:h}=this.state,m={paddingBottom:c?"".concat(c,"%"):100*h.height/h.width+"%"};return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:m,ref:this.ImgWrap,children:(0,l.jsx)("img",{className:t,role:"img",src:_,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":a,"data-owner-id":o,"data-item-id":e.id,"data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,i.ht)(t)},alt:(0,n.P)(_)})})}}},70757:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(72791),i=a(80184);const o=s.lazy((()=>a.e(1088).then(a.bind(a,41088))));class n extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a}=this.props;return 1===a.iconType&&(7!==t.id&&4!==t.id)?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:a.iconColor},children:(0,i.jsx)("div",{})}):(0,i.jsxs)(s.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(o,{network:t,ThemeRule:a,networkClass:e})]})}}},23450:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var s=a(72791),i=a(34867),o=a(2703),n=a(46476),r=a(80184);class l extends s.PureComponent{render(){const{contentClass:t,content:e,ThemeRule:a,font:l,personalization:c,item:_,contentTitle:d}=this.props;let h=20==_.network.id?e:(0,o.Fx)(e);return 12==_.network.id&&(h=(0,i.ZP)(h)),(0,r.jsxs)("div",{className:"".concat(t," tb-cTBfont- ").concat(a.font_varient),style:{fontFamily:a.css_font,fontSize:l.fontsize,color:l.fontColor},children:[d?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(d)}):null,(0,r.jsxs)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(n.Z,{data:_,content:h,Personalization:c},h)]})]})}}},46476:(t,e,a)=>{"use strict";a.d(e,{Z:()=>_});var s=a(72791),i=a(35737),o=a(34867),n=a(80184);const r=a(80844),l=t=>(0,n.jsx)(i.default,{children:(0,o.ZP)(t)}),c=t=>{let{data:e,content:a,Personalization:s}=t;const i={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?l(window.slackdown.parse(r(a,/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:i,children:["#",t]}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?l(window.slackdown.parse(r(a,e.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:i,children:t}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?l(window.slackdown.parse(r(a,/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:i,children:["#",t]},e))),e.slackMember)):l(window.slackdown.parse(a,e.slackMember))}):(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?r((0,o.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:i,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?r((0,o.ZP)(a),e.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:i,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?r((0,o.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:i,children:["#",t]},e))):(0,o.ZP)(a)})},_=(0,s.memo)(c)},19036:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(72791),i=a(80184);const o=t=>{let{network:e}=t;const{className:a,color:s}={3:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#1b74e4"},4:{className:"tb_rating_ico__ tb__icon tb-rating tb-google-rating",color:"#F8B90C"},19:{className:"tb_rating_ico__ tb__icon tb-rating tb-yelp-rating",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-rating tb-airbnb-rating",color:"#ff385c"},29:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#613983"}}[e.id]||{className:"tb_rating_ico__ tb__icon tb-rating",color:"#F8B90C"};return(0,i.jsx)("div",{className:a,style:{color:s},"tb-network":e.id})};class n extends s.PureComponent{render(){const{rating:t,network:e}=this.props;return(0,i.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>(0,i.jsx)(o,{network:e},a))):null})}}},27668:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(72791),i=a(2703),o=a(80184);const n=t=>{const{postTime:e,timeClass:a,authorNameStyle:n}=t,r=(0,s.useMemo)((()=>(0,i.Sy)(e)),[]);return(0,o.jsx)("div",{className:a,style:n,children:r})},r=(0,s.memo)(n)},29959:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>x});a(72791);var s=a(97234),i=a(27668),o=a(70757),n=a(80184);const r=t=>{let{author:e,personalization:a,postTime:r,network:l,ThemeRule:c,font:_,ownerId:d}=t;const h=e.username&&e.username.length>0?"@".concat(e.username):"",m={color:c.authorColor},u={backgroundColor:c.authorColor},w=!(!a.postAuthor||e.isInstaUser),g=!(!a.postAuthor||!a.postTime||e.isInstaUser);return(0,n.jsxs)("div",{className:"tb_wt_author_wrapper",children:[(0,n.jsxs)("div",{className:"tb_wt_author",children:[w||100231===d?(0,n.jsx)(s.default,{author:e,network:l,authorClass:"tb_wt_author_profile"}):"",(0,n.jsxs)("div",{className:"tb_wt_author_info",children:[w||100231===d?(0,n.jsx)("div",{className:"tb_wt_authorname",style:m,children:e.name}):"",(0,n.jsxs)("div",{className:"tb_wt_post_info",children:[w||100231===d?(0,n.jsx)("div",{className:"tb_wt_username",style:m,children:h}):"",g?(0,n.jsx)("div",{className:"tb_wt_seprator",style:u,children:" "}):"",a.postTime?(0,n.jsx)(i.default,{postTime:r,timeClass:"tb_wt_time",authorColor:c.authorColor}):""]})]})]}),(0,n.jsx)("div",{className:"tb_wt_social_",children:(0,n.jsx)(o.default,{networkClass:"tb_wt_social_ico",network:l,ThemeRule:c,font:_})})]})};var l=a(40115);const c=t=>{let{itemData:e,wallID:a,ownerId:s}=t;const i=3===e.type||5===e.type,o=7===e.network.id,r=!!(e.imageList&&e.imageList.length>0),c=(e.imageList&&e.imageList.length)>0&&(3===e.type||5===e.type)?"tb_wt_multi_images_ico_bottom":"tb_wt_multi_images_ico",_=1===e.isAudio;return(0,n.jsxs)("div",{className:"tb_wt_media_wrap",children:[r?(0,n.jsx)("div",{className:"".concat(c," tb__icon tb-multiple"),children:" "}):"",i?o?(0,n.jsxs)("div",{className:"tb_wt_youtube_ico tb__icon tb-youtube-default",children:[(0,n.jsx)("div",{className:"tb_color_icon__ tb_d_youtube_path_1",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_color_icon__ tb_d_youtube_path_2",children:(0,n.jsx)("div",{})})]}):_?(0,n.jsx)("div",{className:"tb_wt_audio_ico tb__icon tb-audio",children:(0,n.jsx)("div",{})}):(0,n.jsx)("div",{className:"tb_wt_video_ico tb__icon tb-video",children:(0,n.jsx)("div",{})}):"",(0,n.jsx)(l.default,{ImageClass:"tb_wt_image",data:e,wallID:a,ownerId:s,size:!1})]})};var _=a(23450),d=a(16243),h=a(19036);const m=t=>{let{share:e,shareClass:a}=t;const s=(t,e)=>{t.stopPropagation(),e()};return(0,n.jsx)("div",{className:a,children:(0,n.jsxs)("div",{className:"tb_wt_share_wrapper",children:[e.facebook&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>s(t,(()=>window.open(e.facebook,"_blank"))),className:"tb_wt_share_icon tb__icon tb-facebook tb_wt_cursor_pointer",title:"facebook",rel:"noopener noreferrer nofollow"})}),e.twitter&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>s(t,(()=>window.open(e.twitter,"_blank"))),className:"tb_wt_share_icon tb__icon tb-twitterX tb_wt_cursor_pointer",title:"twitter",rel:"noopener noreferrer nofollow"})}),e.linkedin&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>s(t,(()=>window.open(e.linkedin,"_blank"))),className:"tb_wt_share_icon tb__icon tb-linkedin tb_wt_cursor_pointer",title:"linkedin",rel:"noopener noreferrer nofollow"})})]})})},u=(t,e,a)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat(atob(e)):a,w=(t,e,a)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat(atob(e)):a,g=t=>{let{itemData:e,ThemeRule:a}=t;const s={color:a.fontColor},i=e.network.id,o=3===i||10===i?"like-alt":"heart-alt";return(0,n.jsx)(n.Fragment,{children:12!==i&&15!==i&&20!==i&&21!==i&&29!==i?(0,n.jsxs)("div",{className:"tb_wt_social_action__",children:[(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsxs)("a",{href:u(i,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-".concat(o),style:s,children:" "}),e.like_count>0?(0,n.jsx)("div",{className:"tb_wt_social_action_counts__",style:s,children:e.like_count}):""]})}),(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsxs)("a",{href:w(i,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-comment",style:s,children:" "}),e.like_count>0?(0,n.jsx)("div",{className:"tb_wt_social_action_counts__",style:s,children:e.like_count}):""]})}),1===i?(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsx)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat(atob(e.postId)),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-retweet",style:s,children:" "})})}):""]}):""})};var b=a(2703);const p=t=>{let{itemData:e,personalization:a,ThemeRule:s,wallID:i,clickToShowPopUp:o,itemIndex:l,ownerId:u,onClickToCTA:w}=t;const p={backgroundColor:e.font.cardColor},x=2===e.type||3===e.type||4===e.type||5===e.type,f=e.rating>0,v=e.rating>0?"tb_wt_rating_content":"tb_wt_content",j=1===e.type&&a.textDecorate?"tb_wt_text_decoration tb_wt_text_post":"",k=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),N=a.trimcontent?(0,b.Sv)(e.content,200):e.content;return(0,n.jsx)("div",{id:"tb-wt-post-".concat(e.id),className:"tb_wt_post_wrapper","tb-network":e.network.id,children:(0,n.jsxs)("div",{className:"tb_wt_post_in",style:p,onClick:o(l,e),children:[(0,n.jsx)(r,{ownerId:u,postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:a,ThemeRule:s}),(0,n.jsxs)("div",{className:"tb_wt_post_media_wrapp",children:[x?(0,n.jsx)(c,{itemData:e,wallID:i,ownerId:u},"img".concat(l,"_").concat(e.id)):"",f?(0,n.jsxs)("div",{className:"tb_wt_rating__",children:[(0,n.jsx)(h.Z,{rating:e.rating,network:e.network})," "]}):""]}),(0,n.jsxs)("div",{className:"tb_wt_contant_wrapper",children:[k?(0,n.jsxs)("div",{className:"tb_wt_post_cta",children:[(0,n.jsx)(d.Z,{ctaClass:"tb_wt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:w})," "]}):"",e.hideContent?"":(0,n.jsx)(_.default,{contentClass:"".concat(v," ").concat(j),item:e,content:N,font:e.font,ThemeRule:s,personalization:a,contentTitle:e.contentTitle}),(0,n.jsxs)("div",{className:"tb_wt_post_share_container",style:e&&29==e.network.id||!s.socialAction?{justifyContent:"flex-end"}:{},children:[s.socialAction?(0,n.jsx)(g,{itemData:e,ThemeRule:s}):"",e.share.status?(0,n.jsx)(m,{share:e.share,shareClass:"tb_mc_share_container"}):""]})]})]})})},x=t=>{let{postData:e,completeDataObject:a,adjustWidth:s,wall:i,clickToShowPopUp:o,onClickToCTA:r}=t;return(0,n.jsx)("div",{className:"tb_wt_post_container",children:e&&e.length>0&&e.map(((t,e)=>{const l=a[t];return(0,n.jsx)(p,{ownerId:i.Wall.owner,itemData:l,itemIndex:e,adjustWidth:s,personalization:i.Personalization,ThemeRule:i.ThemeRule,wallID:i.Wall.id,clickToShowPopUp:o,onClickToCTA:r},"wdt_crd_".concat(e,"_").concat(t.id))}))})}},80413:(t,e,a)=>{"use strict";e.Ad=void 0;var s=a(7782);var i=a(94590);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return i.getImageSize}});var o=a(52047)},7782:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},94590:(t,e,a)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=a(7782);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((a,i)=>{if("undefined"===typeof window)return i(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return i(s.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const n=new Image;n.addEventListener("load",(()=>{o&&window.clearTimeout(o),a({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{o&&window.clearTimeout(o),i("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(o=window.setTimeout((()=>i(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},52047:function(t,e,a){"use strict";var s=this&&this.__awaiter||function(t,e,a,s){return new(a||(a=Promise))((function(i,o){function n(t){try{l(s.next(t))}catch(e){o(e)}}function r(t){try{l(s.throw(t))}catch(e){o(e)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(n,r)}l((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const i=a(72791),o=a(94590);e.useImageSize=(t,e)=>{const[a,n]=(0,i.useState)(null),[r,l]=(0,i.useState)(!1),[c,_]=(0,i.useState)(null);return(0,i.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){l(!0),n(null);try{const{width:a,height:s}=yield(0,o.getImageSize)(t,e);n({width:a,height:s})}catch(c){_(c.toString())}finally{l(!1)}}))}),[t,e]),[a,{loading:r,error:c}]}},50247:()=>{}}]);
//# sourceMappingURL=3441.af29a228.chunk.js.map