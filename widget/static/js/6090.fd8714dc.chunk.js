"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[6090,4261],{84261:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var a=i(47313),s=i(64516),o=i(2406),n=i(17739),d=i(98501),r=i(46417);class l extends a.PureComponent{constructor(e){super(e),this.updateDimensions=()=>{let e=this.ImgWrap.current.getBoundingClientRect();e&&this.setState({newSize:{height:e.height.toFixed(),width:e.width.toFixed()}})},this.onMediaLoad=async e=>{const{data:t}=this.props,{imgUrl:i}=this.state;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({mediaSize:{height:t.mediaHeight,width:t.mediaWidth}});else try{const{width:e,height:t}=await(0,o.Ad)(i);this.setState({mediaSize:{height:t,width:e}})}catch(a){this.setState({loadError:!0,mediaSize:{height:100,width:100}})}},this.onLoad=e=>{1==e.target.getAttribute("data-load")&&this.setState({imgUrl:e.target.src})},this.state={loadError:!1,imgUrl:this.props.data.postFileNew,percentHeight:"100",newSize:{height:100,width:100},mediaSize:{height:100,width:100}},this.ImgWrap=a.createRef()}componentDidMount(){this.updateDimensions(),this.props.size||this.onMediaLoad()}render(){const{ImageClass:e,data:t,wallID:i,themeID:a,ownerId:o,size:l}=this.props,{imgUrl:h,newSize:c,mediaSize:m}=this.state,u={paddingBottom:l?"".concat(l,"%"):100*m.height/m.width+"%"};return(0,r.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:u,ref:this.ImgWrap,children:(0,r.jsx)("img",{className:e,role:"img",src:h,height:300,width:300,"data-link":t.link,"data-load":"0","data-network":t.network.id,"data-wall-id":i,"data-owner-id":o,"data-item-id":t.id,"data-filter-id":t.filterId,"theme-id":a,onLoad:this.onLoad,onError:t.stories?null:e=>{e.target.src="".concat(d.do,"/media/images/no-image.svg"),(0,s.ht)(e)},alt:(0,n.P)(h)})})}}},64442:(e,t,i)=>{i.d(t,{Z:()=>r});var a=i(47313),s=i(2406),o=(i(98501),i(20510)),n=i.n(o),d=i(46417);class r extends a.PureComponent{constructor(e){super(e),this.updateDimensions=()=>{const{size:e}=this.props;let t=this.VideoWrap.current.getBoundingClientRect().width;t?this.setState({newSize:{height:(t*e.height/e.width).toFixed(),width:t.toFixed()}}):this.setState({newSize:{height:300,width:300}})},this.onMediaLoad=async e=>{const{data:t}=this.props,{imgUrl:i}=this.state;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({mediaSize:{height:t.mediaHeight,width:t.mediaWidth}});else try{const{width:e,height:t}=await(0,s.Ad)(i);this.setState({mediaSize:{height:t,width:e}})}catch(a){this.setState({loadError:!0,mediaSize:{height:100,width:100}})}},this.onLoad=e=>{1==e.target.getAttribute("data-load")&&this.setState({imgUrl:e.target.src})},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,imgUrl:this.props.imgUrl,newSize:{height:300,width:300},mediaSize:{height:100,width:100},videoLoaded:!1},this.VideoWrap=a.createRef()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),setTimeout((()=>{this.updateDimensions()}),100),this.props.size||this.onMediaLoad()}render(){const{VideoClass:e,data:t,wallID:i,isCover:a,size:s}=this.props,{imgUrl:o,newSize:r,mediaSize:l,videoLoaded:h}=this.state,c={paddingBottom:s?"".concat(s,"%"):100*l.height/l.width+"%"};return(0,d.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:c,ref:this.VideoWrap,children:(0,d.jsx)(n(),{className:e,url:t.mediaUrl,"data-type":"video","data-network":t.networkId,"data-link":t.link,"data-wall-id":i,"data-item-id":t.id,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},loop:!0,onError:e=>{this.setVideoLoaded(!1)},autoPlay:!0,muted:!0,volume:0,playsinline:!0,onReady:e=>{this.setVideoLoaded(!0)},playing:!0,height:"100%",width:"100%",controls:!1,style:{backgroundImage:h?"":"url(".concat(t.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})})}}},56090:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var a=i(47313),s=i(34862),o=i(43411),n=i(83912),d=i(60807),r=i(84261),l=i(64442),h=i(46417);const c=e=>{let{itemData:t,wallID:i,wall:a,ownerId:s,preload:o,isVisible:n}=e;const d=3===t.type||5===t.type;return(0,h.jsx)("div",{className:"tb_rt_media_wrap",children:d?(0,h.jsx)(l.Z,{VideoClass:"tb_rt_video",data:t,wallID:i,themeID:a.Personalization.widgetTheme,ownerId:s,size:200,isCover:!0}):(0,h.jsx)(r.default,{ImageClass:"tb_rt_image",data:t,wallID:i,themeID:a.Personalization.widgetTheme,ownerId:s,size:200})})};var m=i(17739),u=i(35179);class p extends a.PureComponent{constructor(e){super(e),this.mediaHeight=a.createRef()}componentDidMount(){u.nX&&(0,m.YN)(this.mediaHeight)}render(){const{itemData:e,itemIndex:t,wallID:i,ownerId:a,wall:s,isVisible:o,clickToShowPopUp:n}=this.props,d=2===e.type||3===e.type||4===e.type||5===e.type,r={backgroundColor:e.font.cardColor};return(0,h.jsx)("div",{"item-id":e.id,id:"tb-hc-post-".concat(e.id),className:"tb_rt_post_wrapper",ref:this.mediaHeight,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,children:(0,h.jsx)("div",{className:"tb_rt_post_in",style:r,onClick:n(t,e),children:d?(0,h.jsxs)("div",{className:"tb_rt_post_media_wrapp",children:[(0,h.jsx)(c,{itemData:e,wallID:i,wall:s,ownerId:a,preload:0==t,isVisible:o}),(0,h.jsx)("div",{className:"tb_rt_play_ico"})]}):null})})}}var g=i(64516);class w extends a.Component{constructor(e){super(e),this.state={windowWidth:document.getElementById("taggbox_main")&&document.getElementById("taggbox_main").clientWidth?document.getElementById("taggbox_main").clientWidth:window.innerWidth},this.requestData=e=>{const{appendData:t,wall:i,preRender:a,hasMoreData:s,getDataNextSteps:o,loaderData:n}=this.props;e.progress>.8&&s&&!n.isShowMoreLoading&&o(i.Wall.id,Math.floor(Date.now()/1e3),i.ThemeRule.numberOfPosts,t.networkID,t.after,a,t.heightEvent)},this.reScrolled=()=>{setTimeout((()=>{let e=document.querySelector(".splide__list"),t=document.querySelector(".splide__slide").offsetWidth;const i=document.querySelectorAll(".splide__slide.is-visible").length,a=document.querySelector(".splide__slide.is-active.is-visible").getAttribute("aria-label").substring(0,2),s=Number(a)+(i-1)+i;s>0?(e.style.transition="0s ease",e.style.transform="translateX(-".concat(s*t,"px)")):e.style.transform="translateX(0px)"}),200)},this.inputRefs={}}componentWillMount(){const{renderId:e}=this.props.renderId;this.setState({windowWidth:e?document.getElementById(e).clientWidth:document.getElementById("taggbox_main")&&document.getElementById("taggbox_main").clientWidth?document.getElementById("taggbox_main").clientWidth:window.innerWidth})}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100);const{postData:e}=this.props;if(e&&1==e.length){let e=document.querySelector(".tb_rt_arrow_left__"),t=document.querySelector(".tb_rt_arrow_right__");e&&t&&(document.querySelector(".tb_rt_arrow_left__").style="display:none",document.querySelector(".tb_rt_arrow_right__").style="display:none")}}componentDidUpdate(){const e=Object.values(this.inputRefs)[0],{postData:t,completeDataObject:i,onClickPopUpSlider:a,parentID:s}=this.props;if(e&&Object.values(e)[5].length>0){Object.values(e)[5].map(((e,o)=>{if(e.classList){const o=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var n=o[0];String(o[0]).includes("tb_")&&(n=String(o[0]).replace("tb_",""));const d=t.findIndex((e=>e==n));let r=document.querySelectorAll(".tb_rt_post_container #".concat(e.id));for(let e=0;e<r.length;e++){let t=r[e],o=t.getAttribute("p_id");String(s)===String(o)&&t.addEventListener("click",(e=>{e.preventDefault();const t=i[n];a(d,t)}))}}}))}}render(){const{postData:e,completeDataObject:t,wall:i,clickToShowPopUp:a,hasMoreData:o,parentID:r}=this.props,l=r,c=i.ThemeRule.numberOfCoumn,m=i.ThemeRule.mobileColumn,u=i.ThemeRule.slidePost,g=i.ThemeRule.slideDuration,w=1===i.Personalization.trimcontent;return(0,h.jsx)(h.Fragment,{children:""!=r?(0,h.jsx)("div",{className:"tb_rt_post_container",ref:this.sliderHeight,children:(0,h.jsx)(n.tq,{ref:e=>this.inputRefs[l]=e,style:{width:"100%"},onScroll:e=>this.requestData(e),onSlideChange:e=>this.requestData(e),onAutoplay:e=>this.requestData(e),autoHeight:!0,speed:700,edgeSwipeDetection:!0,slidesPerView:0==c?6.2:c+.2,touchRatio:2,cssMode:s.tq,passiveListeners:!0,height:"250px",freeMode:{enabled:!0,sticky:!1,momentumBounceRatio:2,momentumVelocityRatio:3},autoplay:{delay:1===u?1e3*g:99e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!o,breakpoints:{320:{slidesPerView:0==m?1.6:m+.6},480:{slidesPerView:0==m?1.6:m+.6},575:{slidesPerView:0==m?1.6:m+.6},767:{slidesPerView:0==c?3.2:c+.2},1024:{slidesPerView:0==c?4.2:c+.2},1400:{slidesPerView:0==c?5.2:c+.2}},mousewheel:{forceToAxis:!0,sensitivity:2},watchSlidesProgress:!0,modules:[d.pt,d.Gk,d.Rv],className:"tb_rt_post_slider ".concat(w?"tb_rt_fixed_height":""),children:(0,h.jsx)(h.Fragment,{children:e&&e.length>0&&e.map(((e,s)=>{const o=t[e];return 3===o.type||5===o.type?(0,h.jsx)(n.o5,{style:{margin:0,padding:0},p_id:r,className:"tb_".concat(o.id),children:e=>{let{isVisible:t}=e;return(0,h.jsx)(p,{isVisible:t,ownerId:i.Wall.owner,itemData:o,itemIndex:s,personalization:i.Personalization,ThemeRule:i.ThemeRule,wallID:i.Wall.id,clickToShowPopUp:a,wall:i})}},s):null}))})})}):null})}}const _=(0,a.memo)((0,o.$j)((e=>({loaderData:e.loaderData})),(e=>({getDataNextSteps:(t,i,a,s,o,n,d,r)=>e((0,g.Sx)(t,i,a,s,o,n,d,r))})))(w))},2406:(e,t,i)=>{t.Ad=void 0;var a=i(84228);var s=i(65786);Object.defineProperty(t,"Ad",{enumerable:!0,get:function(){return s.getImageSize}});var o=i(22537)},84228:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,t.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=void 0;const a=i(84228);t.getImageSize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,s)=>{if("undefined"===typeof window)return s(a.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return s(a.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const n=new Image;n.addEventListener("load",(()=>{o&&window.clearTimeout(o),i({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(e=>{o&&window.clearTimeout(o),s("".concat(e.type,": ").concat(e.message))})),n.src=e,t.timeout&&(o=window.setTimeout((()=>s(a.ErrorMessage.TIMEOUT)),t.timeout))}))}},22537:function(e,t,i){var a=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(s,o){function n(e){try{r(a.next(e))}catch(t){o(t)}}function d(e){try{r(a.throw(e))}catch(t){o(t)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,d)}r((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useImageSize=void 0;const s=i(47313),o=i(65786);t.useImageSize=(e,t)=>{const[i,n]=(0,s.useState)(null),[d,r]=(0,s.useState)(!1),[l,h]=(0,s.useState)(null);return(0,s.useEffect)((()=>{a(void 0,void 0,void 0,(function*(){r(!0),n(null);try{const{width:i,height:a}=yield(0,o.getImageSize)(e,t);n({width:i,height:a})}catch(l){h(l.toString())}finally{r(!1)}}))}),[e,t]),[i,{loading:d,error:l}]}}}]);