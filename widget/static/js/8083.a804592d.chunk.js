"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8083,7234,7668,757,115],{88083:(t,e,a)=>{a.r(e),a.d(e,{default:()=>v});var i=a(72791),o=a(97234),s=a(27668),n=a(70757),r=a(80184);const c=t=>{let{author:e,personalization:a,postTime:i,network:c,ThemeRule:l,font:d,ownerId:_}=t;const h=e.username&&e.username.length>0?"@".concat(e.username):"",m={color:l.authorColor},u={backgroundColor:l.authorColor},p=!(!a.postAuthor||e.isInstaUser),b=!(!a.postAuthor||!a.postTime||e.isInstaUser);return(0,r.jsxs)("div",{className:"tb_cp_author_wrapper",children:[(0,r.jsxs)("div",{className:"tb_cp_author",children:[p||100231===_?(0,r.jsx)(o.default,{author:e,network:c,authorClass:"tb_cp_author_profile"}):"",(0,r.jsxs)("div",{className:"tb_cp_author_info",children:[p||100231===_?(0,r.jsx)("div",{className:"tb_cp_authorname",style:m,children:e.name}):"",(0,r.jsxs)("div",{className:"tb_cp_post_info",children:[p||100231===_?(0,r.jsx)("div",{className:"tb_cp_username",style:m,children:h}):"",b?(0,r.jsx)("div",{className:"tb_cp_seprator",style:u,children:" "}):"",a.postTime?(0,r.jsx)(s.default,{postTime:i,timeClass:"tb_cp_time",authorColor:l.authorColor}):""]})]})]}),(0,r.jsx)("div",{className:"tb_cp_social_",children:(0,r.jsx)(n.default,{networkClass:"tb_cp_social_ico",network:c,ThemeRule:l,font:d})})]})};var l=a(40115);class d extends i.PureComponent{constructor(t){super(t),this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={imgUrl:t.itemData.postFileNew}}componentDidMount(){const{itemData:t}=this.props;this.setState({imgUrl:t.postFileNew})}componentWillReceiveProps(t){const{itemData:e}=t;this.setState({imgUrl:e.postFileNew})}render(){const{itemData:t,wallID:e,ownerId:a,ThemeID:i}=this.props,o=3===t.type||5===t.type,s=7===t.network.id,n=!!(t.imageList&&t.imageList.length>0),c=(t.imageList&&t.imageList.length)>0&&(3===t.type||5===t.type)?"tb_cp_multi_images_ico_bottom":"tb_cp_multi_images_ico",d=1===t.isAudio;return(0,r.jsxs)("div",{className:"tb_cp_media_wrap",children:[n?(0,r.jsx)("div",{className:"".concat(c," tb__icon tb-multiple"),children:(0,r.jsx)("div",{})}):"",o?s?(0,r.jsxs)("div",{className:"tb_cp_youtube_ico tb__icon tb-youtube-default",children:[(0,r.jsx)("div",{className:"tb_color_icon__ tb_d_youtube_path_1",children:(0,r.jsx)("div",{})}),(0,r.jsx)("div",{className:"tb_color_icon__ tb_d_youtube_path_2",children:(0,r.jsx)("div",{})})]}):d?(0,r.jsx)("div",{className:"tb_cp_audio_ico tb__icon tb-audio",children:(0,r.jsx)("div",{})}):(0,r.jsx)("div",{className:"tb_cp_video_ico tb__icon tb-video",children:(0,r.jsx)("div",{})}):"",(0,r.jsx)(l.default,{ImageClass:"tb_cp_image",data:t,wallID:e,ownerId:a,size:100})]})}}var _=a(20169),h=a(16243),m=a(19036),u=a(31152);const p=t=>{let{itemData:e,personalization:a,adjustWidth:i,ThemeRule:o,clickToShowPopUp:s,itemIndex:n,wallID:l,ownerId:p,onClickToCTA:b}=t;const g={width:"".concat(i,"%"),padding:a.padding/2},w={backgroundColor:e.font.cardColor},v=2===e.type||3===e.type||4===e.type||5===e.type,x=e.rating>0,j=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status);return(0,r.jsx)("div",{id:"tb-cp-post-".concat(e.id),className:"tb_cp_post_wrapper",style:g,"tb-network":e.network.id,children:(0,r.jsxs)("div",{className:"tb_cp_post_in",style:w,onClick:s(n,e),children:[(0,r.jsxs)("div",{className:"tb_cp_post_media_wrapper",children:[e.share.status?(0,r.jsx)(_.Z,{share:e.share,shareClass:"tb_cp_share_container",item:e,wallID:l,ownerId:p}):"",v?(0,r.jsx)(d,{itemData:e,wallID:l,ownerId:p,ThemeID:a.widgetTheme},"img".concat(n,"_").concat(e.id)):"",x?(0,r.jsxs)("div",{className:"tb_cp_rating__",children:[(0,r.jsx)(m.Z,{rating:e.rating,network:e.network})," "]}):"",j?(0,r.jsxs)("div",{className:"tb_cp_post_cta",children:[(0,r.jsx)(h.Z,{ctaClass:"tb_cp_post_cta_btn",cta:e.cta,item:e,onClickToCTA:b})," "]}):""]}),(0,r.jsx)("div",{className:"tb_cp_contant_wrapper",children:(0,r.jsx)(c,{ownerId:p,postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:a,ThemeRule:o})}),o.socialAction?(0,r.jsx)(u.Z,{itemData:e,ThemeRule:o,ThemeID:a.widgetTheme,actionClass:"tb_mc_social_action__"}):""]})})};var b=a(77581),g=a(79200);class w extends i.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{}}componentDidMount(){const{postData:t}=this.props;this.setState({postData:t,loadData:1})}componentWillReceiveProps(t){}render(){const{postData:t,completeDataObject:e,adjustWidth:a,wall:i,clickToShowPopUp:o,onClickToCTA:s}=this.props,{loadData:n}=this.state;var c=4;return(0,r.jsx)("div",{className:"tb_cp_post_container",children:n?t&&t.length>0&&t.map(((t,n)=>{const l=e[t];return parseInt(c),(0,r.jsx)(p,{ownerId:i.Wall.owner,itemData:l,itemIndex:n,adjustWidth:1==l.highlight?2*a:a,personalization:i.Personalization,ThemeRule:i.ThemeRule,wallID:i.Wall.id,clickToShowPopUp:o,onClickToCTA:s},"Classic_Card_".concat(n,"_").concat(t.id))})):null})}}const v=(0,b.$j)(null,(t=>({managePostHeight:e=>t((0,g.B0)(e))})))(w)},97234:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var i=a(72791),o=a(2703),s=a(14496),n=a(80184);class r extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:a,network:i}=this.props;return(0,n.jsx)("div",{className:a,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(a,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,o.P)(e.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(s.Z,{authorClass:a,username:e.name,network:i,color:null===i.id?"#000":i.color})},Math.random())}}},14496:(t,e,a)=>{a.d(e,{Z:()=>o});a(72791);var i=a(80184);const o=t=>{let{username:e,network:a}=t;return(0,i.jsx)("img",{className:"tb_nc_author_profile__",src:"https://ui-avatars.com/api/?name=".concat(function(t){if(t){var e=t.match(/[A-Za-z]/);return e?e[0]:""}return""}(e),"&background=").concat(String(null===a.id?"#000":a.color).replace("#",""),"&color=fff&length=1"),alt:e,width:44,height:44})}},16243:(t,e,a)=>{a.d(e,{Z:()=>n});var i=a(72791),o=a(80184);class s extends i.PureComponent{render(){const{cta:t,ctaClass:e,postCta:a,onClickToCTA:i,item:s}=this.props,n=!(!a||1!==a.status),r={color:n?a.color:t.color,backgroundColor:n?a.background:t.background};return(0,o.jsxs)("div",{className:e,style:r,onClick:e=>{e.stopPropagation(),i(s),window.open("".concat(n?a.url:t.url),"_blank")},children:[" ",n?a.text:t.text]})}}const n=s},40115:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});var i=a(72791),o=a(79200),s=a(80413),n=a(2703),r=a(70188),c=a(80184);class l extends i.PureComponent{constructor(t){super(t),this.updateDimensions=()=>{let t=this.ImgWrap.current.getBoundingClientRect();t&&this.setState({newSize:{height:t.height.toFixed(),width:t.width.toFixed()}})},this.onMediaLoad=async t=>{const{data:e}=this.props,{imgUrl:a}=this.state;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({mediaSize:{height:e.mediaHeight,width:e.mediaWidth}});else try{const{width:t,height:e}=await(0,s.Ad)(a);this.setState({mediaSize:{height:e,width:t}})}catch(i){this.setState({loadError:!0,mediaSize:{height:100,width:100}})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,imgUrl:this.props.data.postFileNew,percentHeight:"100",newSize:{height:100,width:100},mediaSize:{height:100,width:100}},this.ImgWrap=i.createRef()}componentDidMount(){this.updateDimensions(),this.props.size||this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:a,themeID:i,ownerId:s,size:l}=this.props,{imgUrl:d,newSize:_,mediaSize:h}=this.state,m={paddingBottom:l?"".concat(l,"%"):100*h.height/h.width+"%"};return(0,c.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:m,ref:this.ImgWrap,children:(0,c.jsx)("img",{className:t,role:"img",src:d,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":a,"data-owner-id":s,"data-item-id":e.id,"data-filter-id":e.filterId,"theme-id":i,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,o.ht)(t)},alt:(0,n.P)(d)})})}}},70757:(t,e,a)=>{a.r(e),a.d(e,{default:()=>n});var i=a(72791),o=a(80184);const s=i.lazy((()=>a.e(1088).then(a.bind(a,41088))));class n extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,font:n}=this.props;return 1===a.iconType&&(7!==t.id&&4!==t.id)?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:a.iconColor},children:(0,o.jsx)("div",{})}):(0,o.jsxs)(i.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(s,{network:t,ThemeRule:a,networkClass:e})]})}}},19036:(t,e,a)=>{a.d(e,{Z:()=>n});var i=a(72791),o=a(80184);const s=t=>{let{network:e}=t;const{className:a,color:i}={3:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#1b74e4"},4:{className:"tb_rating_ico__ tb__icon tb-rating tb-google-rating",color:"#F8B90C"},19:{className:"tb_rating_ico__ tb__icon tb-rating tb-yelp-rating",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-rating tb-airbnb-rating",color:"#ff385c"},29:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#613983"}}[e.id]||{className:"tb_rating_ico__ tb__icon tb-rating",color:"#F8B90C"};return(0,o.jsx)("div",{className:a,style:{color:i},"tb-network":e.id})};class n extends i.PureComponent{render(){const{rating:t,network:e}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>(0,o.jsx)(s,{network:e}))):null})}}},20169:(t,e,a)=>{a.d(e,{Z:()=>n});var i=a(72791),o=a(79200),s=a(80184);class n extends i.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:a,wallID:i,ownerId:s}=this.props;e.stopPropagation(),(0,o.S5)({type:2,action:2,wall:i,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:s}),(0,o.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,s.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,s.jsx)("div",{className:"tb_share_button_ tb__icon tb-share-hover",children:" "}),(0,s.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,s.jsx)("div",{className:"tb_share_icon_list",children:(0,s.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook"})}):"",t.twitter?(0,s.jsx)("div",{className:"tb_share_icon_list",children:(0,s.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter"})}):"",t.linkedin?(0,s.jsx)("div",{className:"tb_share_icon_list",children:(0,s.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin"})}):""]})]})}}},31152:(t,e,a)=>{a.d(e,{Z:()=>c});var i=a(72791),o=a(80184);const s=(t,e,a)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat(atob(e)):a,n=(t,e,a)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat(atob(e)):a,r=t=>{let{arialbl:e,hrefClick:a,Icon:i,iconColorStyle:s,count:n}=t;return(0,o.jsx)("div",{className:"tb_social_action__list",children:(0,o.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(a,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,o.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(i),style:s,children:" "}),n>0?(0,o.jsx)("div",{className:"tb_social_action_counts__",style:s,children:n}):""]})})};class c extends i.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:a,ThemeID:i}=this.props,c={color:3===i?1===e.iconType?e.iconColor:t.network.color:e.fontColor},l=t.network.id,d=3===l||10===l||7===l?"like-alt":"heart-alt",_=!![1,2,3,7,8,9,10,18].includes(l),h=![29,19].includes(l),m=t.network.name?t.network.name:"";return(0,o.jsx)(o.Fragment,{children:29!==l&&26!==l&&23!==l&&6!==l&&5!==l&&11!==l&&12!==l&&15!==l&&20!==l&&21!==l?(0,o.jsx)("div",{className:a,children:(0,o.jsxs)("div",{className:"tb_social_action__",children:[_?(0,o.jsx)(r,{arialbl:m,hrefClick:s(l,t.postId,t.link),Icon:d,iconColorStyle:c,count:t.like_count}):null,h?(0,o.jsx)(r,{arialbl:m,hrefClick:n(l,t.postId,t.link),Icon:"comment",iconColorStyle:c,count:t.comment_count}):null,1===l?(0,o.jsx)(r,{arialbl:m,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat(atob(t.postId)),Icon:"retweet",iconColorStyle:c,count:t.comment_count}):null,(0,o.jsx)(r,{arialbl:m,hrefClick:t.link,Icon:"eye-alt",iconColorStyle:c,count:0})]})}):""})}}},27668:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var i=a(72791),o=a(2703),s=a(80184);const n=t=>{const{postTime:e,timeClass:a,authorNameStyle:n}=t,r=(0,i.useMemo)((()=>(0,o.Sy)(e)),[]);return(0,s.jsx)("div",{className:a,style:n,children:r})},r=(0,i.memo)(n)},80413:(t,e,a)=>{e.Ad=void 0;var i=a(7782);var o=a(94590);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return o.getImageSize}});var s=a(52047)},7782:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},94590:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const i=a(7782);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((a,o)=>{if("undefined"===typeof window)return o(i.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return o(i.ErrorMessage.URL_IS_NOT_DEFINED);let s=null;const n=new Image;n.addEventListener("load",(()=>{s&&window.clearTimeout(s),a({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{s&&window.clearTimeout(s),o("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(s=window.setTimeout((()=>o(i.ErrorMessage.TIMEOUT)),e.timeout))}))}},52047:function(t,e,a){var i=this&&this.__awaiter||function(t,e,a,i){return new(a||(a=Promise))((function(o,s){function n(t){try{c(i.next(t))}catch(e){s(e)}}function r(t){try{c(i.throw(t))}catch(e){s(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(n,r)}c((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const o=a(72791),s=a(94590);e.useImageSize=(t,e)=>{const[a,n]=(0,o.useState)(null),[r,c]=(0,o.useState)(!1),[l,d]=(0,o.useState)(null);return(0,o.useEffect)((()=>{i(void 0,void 0,void 0,(function*(){c(!0),n(null);try{const{width:a,height:i}=yield(0,s.getImageSize)(t,e);n({width:a,height:i})}catch(l){d(l.toString())}finally{c(!1)}}))}),[t,e]),[a,{loading:r,error:l}]}}}]);
//# sourceMappingURL=8083.a804592d.chunk.js.map