"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9959,3450],{23450:(t,e,o)=>{o.r(e),o.d(e,{default:()=>c});var s=o(72791),a=o(34867),n=o(2703),i=o(46476),l=o(80184);class c extends s.PureComponent{render(){const{contentClass:t,content:e,ThemeRule:o,font:c,personalization:_,item:r,contentTitle:d}=this.props;let w=20==r.network.id?e:(0,n.Fx)(e);return 12==r.network.id&&(w=(0,a.ZP)(w)),(0,l.jsxs)("div",{className:"".concat(t," tb-cTBfont- ").concat(o.font_varient),style:{fontFamily:o.css_font,fontSize:c.fontsize,color:c.fontColor},children:[d?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(d)}):null,(0,l.jsxs)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[" ",(0,l.jsx)(i.Z,{data:r,content:w,Personalization:_},w)]})]})}}},29959:(t,e,o)=>{o.r(e),o.d(e,{default:()=>j});o(72791);var s=o(97234),a=o(27668),n=o(70757),i=o(80184);const l=t=>{let{author:e,personalization:o,postTime:l,network:c,ThemeRule:_,font:r,ownerId:d}=t;const w=e.username&&e.username.length>0?"@".concat(e.username):"",b={color:_.authorColor},h={backgroundColor:_.authorColor},m=!(!o.postAuthor||e.isInstaUser),p=!(!o.postAuthor||!o.postTime||e.isInstaUser);return(0,i.jsxs)("div",{className:"tb_wt_author_wrapper",children:[(0,i.jsxs)("div",{className:"tb_wt_author",children:[m||100231===d?(0,i.jsx)(s.default,{author:e,network:c,authorClass:"tb_wt_author_profile"}):"",(0,i.jsxs)("div",{className:"tb_wt_author_info",children:[m||100231===d?(0,i.jsx)("div",{className:"tb_wt_authorname",style:b,children:e.name}):"",(0,i.jsxs)("div",{className:"tb_wt_post_info",children:[m||100231===d?(0,i.jsx)("div",{className:"tb_wt_username",style:b,children:w}):"",p?(0,i.jsx)("div",{className:"tb_wt_seprator",style:h,children:" "}):"",o.postTime?(0,i.jsx)(a.default,{postTime:l,timeClass:"tb_wt_time",authorColor:_.authorColor}):""]})]})]}),(0,i.jsx)("div",{className:"tb_wt_social_",children:(0,i.jsx)(n.default,{networkClass:"tb_wt_social_ico",network:c,ThemeRule:_,font:r})})]})};var c=o(40115);const _=t=>{let{itemData:e,wallID:o,ownerId:s}=t;const a=3===e.type||5===e.type,n=7===e.network.id,l=!!(e.imageList&&e.imageList.length>0),_=(e.imageList&&e.imageList.length)>0&&(3===e.type||5===e.type)?"tb_wt_multi_images_ico_bottom":"tb_wt_multi_images_ico",r=1===e.isAudio;return(0,i.jsxs)("div",{className:"tb_wt_media_wrap",children:[l?(0,i.jsx)("div",{className:"".concat(_," tb__icon tb-multiple"),children:" "}):"",a?n?(0,i.jsxs)("div",{className:"tb_wt_youtube_ico tb__icon tb-youtube-default",children:[(0,i.jsx)("div",{className:"tb_color_icon__ tb_d_youtube_path_1",children:(0,i.jsx)("div",{})}),(0,i.jsx)("div",{className:"tb_color_icon__ tb_d_youtube_path_2",children:(0,i.jsx)("div",{})})]}):r?(0,i.jsx)("div",{className:"tb_wt_audio_ico tb__icon tb-audio",children:(0,i.jsx)("div",{})}):(0,i.jsx)("div",{className:"tb_wt_video_ico tb__icon tb-video",children:(0,i.jsx)("div",{})}):"",(0,i.jsx)(c.default,{ImageClass:"tb_wt_image",data:e,wallID:o,ownerId:s,size:!1})]})};var r=o(23450),d=o(16243),w=o(19036);const b=t=>{let{share:e,shareClass:o}=t;const s=(t,e)=>{t.stopPropagation(),e()};return(0,i.jsx)("div",{className:o,children:(0,i.jsxs)("div",{className:"tb_wt_share_wrapper",children:[e.facebook&&(0,i.jsx)("div",{className:"tb_wt_share_list",children:(0,i.jsx)("div",{onClick:t=>s(t,(()=>window.open(e.facebook,"_blank"))),className:"tb_wt_share_icon tb__icon tb-facebook tb_wt_cursor_pointer",title:"facebook",rel:"noopener noreferrer nofollow"})}),e.twitter&&(0,i.jsx)("div",{className:"tb_wt_share_list",children:(0,i.jsx)("div",{onClick:t=>s(t,(()=>window.open(e.twitter,"_blank"))),className:"tb_wt_share_icon tb__icon tb-twitterX tb_wt_cursor_pointer",title:"twitter",rel:"noopener noreferrer nofollow"})}),e.linkedin&&(0,i.jsx)("div",{className:"tb_wt_share_list",children:(0,i.jsx)("div",{onClick:t=>s(t,(()=>window.open(e.linkedin,"_blank"))),className:"tb_wt_share_icon tb__icon tb-linkedin tb_wt_cursor_pointer",title:"linkedin",rel:"noopener noreferrer nofollow"})})]})})},h=(t,e,o)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat(atob(e)):o,m=(t,e,o)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat(atob(e)):o,p=t=>{let{itemData:e,ThemeRule:o}=t;const s={color:o.fontColor},a=e.network.id,n=3===a||10===a?"like-alt":"heart-alt";return(0,i.jsx)(i.Fragment,{children:12!==a&&15!==a&&20!==a&&21!==a&&29!==a?(0,i.jsxs)("div",{className:"tb_wt_social_action__",children:[(0,i.jsx)("div",{className:"tb_wt_social_action__list",children:(0,i.jsxs)("a",{href:h(a,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,i.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-".concat(n),style:s,children:" "}),e.like_count>0?(0,i.jsx)("div",{className:"tb_wt_social_action_counts__",style:s,children:e.like_count}):""]})}),(0,i.jsx)("div",{className:"tb_wt_social_action__list",children:(0,i.jsxs)("a",{href:m(a,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,i.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-comment",style:s,children:" "}),e.like_count>0?(0,i.jsx)("div",{className:"tb_wt_social_action_counts__",style:s,children:e.like_count}):""]})}),1===a?(0,i.jsx)("div",{className:"tb_wt_social_action__list",children:(0,i.jsx)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat(atob(e.postId)),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:(0,i.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-retweet",style:s,children:" "})})}):""]}):""})};var u=o(2703);const x=t=>{let{itemData:e,personalization:o,ThemeRule:s,wallID:a,clickToShowPopUp:n,itemIndex:c,ownerId:h,onClickToCTA:m}=t;const x={backgroundColor:e.font.cardColor},j=2===e.type||3===e.type||4===e.type||5===e.type,v=e.rating>0,k=e.rating>0?"tb_wt_rating_content":"tb_wt_content",f=1===e.type&&o.textDecorate?"tb_wt_text_decoration tb_wt_text_post":"",N=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),C=o.trimcontent?(0,u.Sv)(e.content,200):e.content;return(0,i.jsx)("div",{id:"tb-wt-post-".concat(e.id),className:"tb_wt_post_wrapper","tb-network":e.network.id,children:(0,i.jsxs)("div",{className:"tb_wt_post_in",style:x,onClick:n(c,e),children:[(0,i.jsx)(l,{ownerId:h,postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:o,ThemeRule:s}),(0,i.jsxs)("div",{className:"tb_wt_post_media_wrapp",children:[j?(0,i.jsx)(_,{itemData:e,wallID:a,ownerId:h},"img".concat(c,"_").concat(e.id)):"",v?(0,i.jsxs)("div",{className:"tb_wt_rating__",children:[(0,i.jsx)(w.Z,{rating:e.rating,network:e.network})," "]}):""]}),(0,i.jsxs)("div",{className:"tb_wt_contant_wrapper",children:[N?(0,i.jsxs)("div",{className:"tb_wt_post_cta",children:[(0,i.jsx)(d.Z,{ctaClass:"tb_wt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:m})," "]}):"",e.hideContent?"":(0,i.jsx)(r.default,{contentClass:"".concat(k," ").concat(f),item:e,content:C,font:e.font,ThemeRule:s,personalization:o,contentTitle:e.contentTitle}),(0,i.jsxs)("div",{className:"tb_wt_post_share_container",style:e&&29==e.network.id||!s.socialAction?{justifyContent:"flex-end"}:{},children:[s.socialAction?(0,i.jsx)(p,{itemData:e,ThemeRule:s}):"",e.share.status?(0,i.jsx)(b,{share:e.share,shareClass:"tb_mc_share_container"}):""]})]})]})})},j=t=>{let{postData:e,completeDataObject:o,adjustWidth:s,wall:a,clickToShowPopUp:n,onClickToCTA:l}=t;return(0,i.jsx)("div",{className:"tb_wt_post_container",children:e&&e.length>0&&e.map(((t,e)=>{const c=o[t];return(0,i.jsx)(x,{ownerId:a.Wall.owner,itemData:c,itemIndex:e,adjustWidth:s,personalization:a.Personalization,ThemeRule:a.ThemeRule,wallID:a.Wall.id,clickToShowPopUp:n,onClickToCTA:l},"wdt_crd_".concat(e,"_").concat(t.id))}))})}}}]);
//# sourceMappingURL=9959.011d2436.chunk.js.map