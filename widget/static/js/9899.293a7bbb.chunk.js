"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9899,757,115],{40115:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var a=i(72791),s=i(79200),o=i(80413),r=i(2703),n=i(70188),d=i(80184);class l extends a.PureComponent{constructor(e){super(e),this.updateDimensions=()=>{let e=this.ImgWrap.current.getBoundingClientRect();e&&this.setState({newSize:{height:e.height.toFixed(),width:e.width.toFixed()}})},this.onMediaLoad=async e=>{const{data:t}=this.props,{imgUrl:i}=this.state;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({mediaSize:{height:t.mediaHeight,width:t.mediaWidth}});else try{const{width:e,height:t}=await(0,o.Ad)(i);this.setState({mediaSize:{height:t,width:e}})}catch(a){this.setState({loadError:!0,mediaSize:{height:100,width:100}})}},this.onLoad=e=>{1==e.target.getAttribute("data-load")&&this.setState({imgUrl:e.target.src})},this.state={loadError:!1,imgUrl:this.props.data.postFileNew,percentHeight:"100",newSize:{height:100,width:100},mediaSize:{height:100,width:100}},this.ImgWrap=a.createRef()}componentDidMount(){this.updateDimensions(),this.props.size||this.onMediaLoad()}render(){const{ImageClass:e,data:t,wallID:i,themeID:a,ownerId:o,size:l}=this.props,{imgUrl:c,newSize:h,mediaSize:_}=this.state,p={paddingBottom:l?"".concat(l,"%"):100*_.height/_.width+"%"};return(0,d.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:p,ref:this.ImgWrap,children:(0,d.jsx)("img",{className:e,role:"img",src:c,height:300,width:300,"data-link":t.link,"data-load":"0","data-network":t.network.id,"data-wall-id":i,"data-owner-id":o,"data-item-id":t.id,"data-filter-id":t.filterId,"theme-id":a,onLoad:this.onLoad,onError:0==t.stories?e=>{e.target.src="".concat(n.do,"/media/images/no-image.svg"),(0,s.ht)(e)}:null,alt:(0,r.P)(c)})})}}},70757:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});var a=i(72791),s=i(80184);const o=a.lazy((()=>i.e(1088).then(i.bind(i,41088))));class r extends a.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:i,font:r}=this.props;return 1===i.iconType&&(7!==e.id&&4!==e.id)?(0,s.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(e.icon),style:{color:i.iconColor},children:(0,s.jsx)("div",{})}):(0,s.jsxs)(a.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:[" ",(0,s.jsx)(o,{network:e,ThemeRule:i,networkClass:t})]})}}},49899:(e,t,i)=>{i.r(t),i.d(t,{default:()=>c});var a=i(72791),s=i(48282),o=i(40115),r=i(80184);const n=e=>{let{itemData:t,wallID:i,themeID:a,ownerId:s}=e;const n=3===t.type||5===t.type,d=7===t.network.id,l=!!(t.imageList&&t.imageList.length>0),c=(t.imageList&&t.imageList.length)>0&&(3===t.type||5===t.type)?"tb_ht_multi_images_ico_bottom":"tb_ht_multi_images_ico",h=1===t.isAudio;return(0,r.jsxs)("div",{className:"tb_ht_media_wrap",children:[l?(0,r.jsx)("div",{className:"".concat(c," tb__icon tb-multiple"),children:" "}):"",n?d?(0,r.jsxs)("div",{className:"tb_ht_youtube_ico tb__icon tb-youtube-default",children:[(0,r.jsx)("div",{className:"tb_color_icon__ tb_d_youtube_path_1",children:(0,r.jsx)("div",{})}),(0,r.jsx)("div",{className:"tb_color_icon__ tb_d_youtube_path_2",children:(0,r.jsx)("div",{})})]}):h?(0,r.jsx)("div",{className:"tb_ht_audio_ico tb__icon tb-audio",children:(0,r.jsx)("div",{})}):(0,r.jsx)("div",{className:"tb_ht_video_ico tb__icon tb-play-circle",children:(0,r.jsx)("div",{})}):"",(0,r.jsx)(o.default,{ImageClass:"tb_ht_image",data:t,wallID:i,themeID:a,ownerId:s,size:100})]})};var d=i(70757);const l=e=>{let{itemData:t,personalization:i,ThemeRule:a,wallID:s,ownerId:o}=e;const l={backgroundColor:a.cardColor},c={padding:i.padding/2},h=2===t.type||3===t.type||4===t.type||5===t.type;return(0,r.jsx)("div",{id:"tb-ht-post-".concat(t.id),className:"tb_ht_post_wrapper",style:c,"tb-network":t.network.id,children:(0,r.jsx)("div",{className:"tb_ht_post_in",children:(0,r.jsxs)("div",{className:"tb_ht_post_media_wrapp",children:[h?(0,r.jsx)(n,{itemData:t,wallID:s,themeID:i.widgetTheme,ownerId:o}):"",(0,r.jsx)("div",{className:"tb_ht_post_details",children:(0,r.jsx)("div",{className:"tb_ht_social_",children:(0,r.jsx)(d.default,{networkClass:"tb_ht_social_ico_",network:t.network,ThemeRule:a,font:t.font})})}),(0,r.jsx)("div",{className:"tb_ht_post_overlay",style:l,children:(0,r.jsx)("div",{})})]})})})};i(59169);class c extends a.PureComponent{constructor(e){super(e),this.onUpdateData=e=>{},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100)}componentDidUpdate(){const e=Object.values(this.inputRefs)[0],{postData:t,completeDataObject:i,onClickPopUpSlider:a,parentID:s}=this.props;if(e&&Object.values(e)[5].length>0){Object.values(e)[5].map(((e,o)=>{if(e.classList){const o=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var r=o[0];String(o[0]).includes("tb_")&&(r=String(o[0]).replace("tb_",""));const n=t.findIndex((e=>e==r));let d=document.querySelectorAll("#".concat(e.id));for(let e=0;e<d.length;e++){let t=d[e],o=t.getAttribute("p_id");String(s)===String(o)&&t.addEventListener("click",(e=>{e.preventDefault();const t=i[r];a(n,t)}))}}}))}}render(){const{postData:e,completeDataObject:t,wall:i,clickToShowPopUp:a,onClickToCTA:o,parentID:n}=this.props,d=n,c=i.ThemeRule.numberOfCoumn,h=i.ThemeRule.mobileColumn,_=i.ThemeRule.slidePost,p=i.ThemeRule.slideDuration,u={type:1!==i.Personalization.autoScrollStatus&&"loop",rewind:!1,speed:1e3,interval:1===_?1e3*parseInt(p):5e3,perPage:c>0?c:6,perMove:1,gap:0,autoplay:1===_,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:h>0?h:1},767:{perPage:h>0?h:2},991:{perPage:h>0?h:3},1200:{perPage:c>0?c:4},1400:{perPage:c>0?c:5},1600:{perPage:c>0?c:6}}};return""!=n?(0,r.jsx)("div",{className:"tb_ht_post_container",children:(0,r.jsxs)(s.tv,{hasTrack:!1,className:"tb_ht_post_slider",options:u,ref:e=>this.inputRefs[d]=e,children:[(0,r.jsx)(s.Gj,{children:e&&e.length>0&&e.map(((e,d)=>{const c=t[e];return(0,r.jsx)(s.jw,{style:{margin:0,padding:0},className:"tb_".concat(c.id),p_id:n,children:(0,r.jsx)(l,{itemData:c,itemIndex:d,personalization:i.Personalization,ThemeRule:i.ThemeRule,clickToShowPopUp:a,wallID:i.Wall.id,onClickToCTA:o})},d)}))}),(0,r.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_ht_arrow_wrapper_",children:[(0,r.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--prev tb_ht_arrow tb_ht_arrow_left__ tb__icon tb-arrow-left-alt",onClick:this.onUpdateData,children:" "}),(0,r.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--next  tb_ht_arrow_right__ tb__icon tb-arrow-right-alt"})]})]})}):null}}},80413:(e,t,i)=>{t.Ad=void 0;var a=i(7782);var s=i(94590);Object.defineProperty(t,"Ad",{enumerable:!0,get:function(){return s.getImageSize}});var o=i(52047)},7782:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,t.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},94590:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=void 0;const a=i(7782);t.getImageSize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,s)=>{if("undefined"===typeof window)return s(a.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return s(a.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const r=new Image;r.addEventListener("load",(()=>{o&&window.clearTimeout(o),i({width:r.naturalWidth,height:r.naturalHeight})})),r.addEventListener("error",(e=>{o&&window.clearTimeout(o),s("".concat(e.type,": ").concat(e.message))})),r.src=e,t.timeout&&(o=window.setTimeout((()=>s(a.ErrorMessage.TIMEOUT)),t.timeout))}))}},52047:function(e,t,i){var a=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(s,o){function r(e){try{d(a.next(e))}catch(t){o(t)}}function n(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,n)}d((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useImageSize=void 0;const s=i(72791),o=i(94590);t.useImageSize=(e,t)=>{const[i,r]=(0,s.useState)(null),[n,d]=(0,s.useState)(!1),[l,c]=(0,s.useState)(null);return(0,s.useEffect)((()=>{a(void 0,void 0,void 0,(function*(){d(!0),r(null);try{const{width:i,height:a}=yield(0,o.getImageSize)(e,t);r({width:i,height:a})}catch(l){c(l.toString())}finally{d(!1)}}))}),[e,t]),[i,{loading:n,error:l}]}},59169:()=>{}}]);
//# sourceMappingURL=9899.293a7bbb.chunk.js.map