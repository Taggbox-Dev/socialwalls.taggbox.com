"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7136],{67136:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var s=i(72791),a=i(2703),n=i(70188),o=i(58290),l=i(80184);const h=e=>{let{height:t}=e;return(0,l.jsxs)("div",{className:"post",children:[(0,l.jsx)("div",{className:"tb_slide_w_half",children:(0,l.jsx)("div",{className:"makeBgImg",children:(0,l.jsx)(o.Z,{style:{height:"calc(85vh - 80px)",marginTop:"5vh"}})})}),(0,l.jsx)("div",{className:"tb_slide_w_half",children:(0,l.jsx)("div",{className:"skeletonContent",children:(0,l.jsxs)("div",{className:"skeltoncss",children:[(0,l.jsxs)("div",{className:"section-one-skel",children:[(0,l.jsx)(o.Z,{circle:!0,height:100,width:100}),(0,l.jsx)("h4",{children:(0,l.jsxs)("div",{className:"skel-span-m",children:[(0,l.jsx)("p",{children:(0,l.jsx)(o.Z,{height:15})}),(0,l.jsx)("p",{children:(0,l.jsx)(o.Z,{height:15})}),(0,l.jsx)("p",{className:"s-sket-m",children:(0,l.jsx)(o.Z,{height:15})})]})})]}),(0,l.jsxs)("div",{className:"section-two-skel",children:[(0,l.jsx)(o.Z,{circle:!0,height:80,width:80}),(0,l.jsxs)("div",{className:"skel-span-m2",children:[(0,l.jsx)("p",{children:(0,l.jsx)(o.Z,{height:15})}),(0,l.jsx)("p",{className:"sket-two-m",children:(0,l.jsx)(o.Z,{height:15})})]})]})]})})})]})},c=s.lazy((()=>Promise.all([i.e(4867),i.e(6332),i.e(6710),i.e(4892)]).then(i.bind(i,40920))));class r extends s.PureComponent{constructor(){super(...arguments),this.themTimeout=null,this.Active=null,this.Animation=null,this.loading=null,this.themTimeoutMount=null,this.fullSize=null,this.state={isLoading:!0,isAnimation:!0,isActiveIndex:-1,activeData:null,activeVideoLength:0,active:"",newImage:"",getHeight:0,wHeight:window.innerHeight,BannerImageHeight:0,checkThemeheight:!1,slideTheme:!1},this.resizeUpdate=()=>{this.fullSize=setTimeout((()=>{this.setState({wHeight:window.innerHeight},(()=>this.onFullscreenChange())),(0,a.OX)()}),300)},this.onFullscreenChange=()=>{const{heightUpdate:e}=this.props;e(),this.setState({wHeight:window.innerHeight}),this.themTimeout=setTimeout((()=>this.setState({checkThemeheight:!0})),100)},this.onChangeNextData=()=>{const{postData:e,completeDataObject:t,wall:i}=this.props,{isActiveIndex:s,activeVideoLength:n}=this.state,{Personalization:o,ThemeRule:l}=i,h=e.postData;let c=[];if(h&&h.length>0&&e.postData.map((e=>{(o.postAuthor||o.postTime||!l.hideContent||t[e].postFileNew)&&c.push(t[e])})),0===n){const e=s>=c.length-1?0:s+1,t=c[e],i=0!==e,n=(0,a.V2)(t.networkId,t.carausel,t.file,t.postFileNew);this.setState({isActiveIndex:e,activeData:t,active:"",newImage:n,isAnimation:i},(()=>{this.onRepeatLoad(),(0,a.OX)()}))}},this.onRepeatLoad=()=>{const{wall:e}=this.props,t=e.Personalization.slideDelay,i=t?1e3*(t||10):5e3,{activeVideoLength:s}=this.state;0===s&&(this.Active=setTimeout((()=>this.setState({active:"active"})),200),this.Animation=setTimeout((()=>this.setState({isAnimation:!1})),700),this.loading=setTimeout((()=>this.setState({isLoading:!1},(()=>this.onChangeNextData()))),i))},this.getVideoProgressDuration=e=>{const{activeVideoLength:t}=this.state;t-1===Math.floor(e.playedSeconds)&&this.setState({activeVideoLength:0},(()=>this.onChangeNextData()))},this.getVideoDuration=e=>{const{wall:t}=this.props,{activeData:i}=this.state;1===t.Personalization.playFullVideo&&[3,5].includes(i.type)&&this.setState({activeVideoLength:Math.floor(e)})},this.updateNewImage=e=>this.setState({newImage:e.target.src})}componentDidMount(){window.addEventListener("resize",(()=>this.setState({wHeight:window.innerHeight},(()=>this.resizeUpdate())))),this.resizeUpdate(),this.onChangeNextData(),this.themTimeoutMount=setTimeout((()=>this.setState({slideTheme:!0})),300)}componentWillReceiveProps(){this.onFullscreenChange()}componentWillUnmount(){window.removeEventListener("resize",this.resizeUpdate),this.themTimeoutMount&&clearTimeout(this.themTimeoutMount),this.themTimeout&&clearTimeout(this.themTimeout),this.Active&&clearTimeout(this.Active),this.Animation&&clearTimeout(this.Animation),this.loading&&clearTimeout(this.loading),this.fullSize&&clearTimeout(this.fullSize)}render(){const{wall:e,themeHeight:t}=this.props,{Personalization:i,ThemeRule:a}=e,{activeData:o,isActiveIndex:r,active:d,newImage:m,wHeight:u,checkThemeheight:g}=this.state;var p="",w={},v="".concat(!a.hideContent||i.postTime||i.postAuthor?"tb_slide_w_half":"tb_slide_w_full"),x="tb_slide_w_half";if(o&&o.id){1===o.type?(v="hidden",x="tb_slide_w_full",p="onlyTextPost"):4!==o.type&&5!==o.type||(p="postTypeImg");var b="makeBgImg";3!==o.type&&5!==o.type||(b="blackBgVideo"),w=o.file?{backgroundImage:"url(".concat(m,"),url(").concat(n.V4,")")}:{backgroundImage:"url(".concat(n.do,"/images/blank.jpg)")};var f="";0===a.blurBackground&&(w={backgroundColor:a.blurColor,filter:"blur(0px)",WebkitFilter:"blur(0px)",MozFilter:"blur(0px)",opacity:1},f="blurRemoved")}return g?e&&(0,l.jsx)("div",{id:"wPosts",className:"theme".concat(i.signageTheme," themeSlidShows zoomSlidShow"),style:{height:u-t,backgroundColor:e.Background.transparent?"#000":e.Background.color},children:(0,l.jsxs)("div",{className:"".concat([74,76].includes(a.themeId)?"tb_slide_show_wrapper":"tb_slide_show_wrapper_no_padding"),children:[(0,l.jsx)("div",{className:"grid-sizer flatCard"}),o&&o.id&&(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)(h,{}),children:d?(0,l.jsxs)(s.Suspense,{children:[(0,l.jsx)(c,{updateNewImage:this.updateNewImage,activeData:o,typeClass:p,blurStyle:w,blurClass:f,mediaClass:b,columnLeftClass:v,columnRightClass:x,wall:e,getVideoProgressDuration:this.getVideoProgressDuration,getVideoDuration:this.getVideoDuration,activeIndex:r,active:d})," "]}):null})]})}):null}}const d=r},58290:(e,t,i)=>{i.d(t,{Z:()=>l});var s=i(72791);const a=s.createContext({}),n=!0;function o(e){let{baseColor:t,highlightColor:i,width:s,height:a,borderRadius:o,circle:l,direction:h,duration:c,enableAnimation:r=n}=e;const d={};return"rtl"===h&&(d["--animation-direction"]="reverse"),"number"===typeof c&&(d["--animation-duration"]="".concat(c,"s")),r||(d["--pseudo-element-display"]="none"),"string"!==typeof s&&"number"!==typeof s||(d.width=s),"string"!==typeof a&&"number"!==typeof a||(d.height=a),"string"!==typeof o&&"number"!==typeof o||(d.borderRadius=o),l&&(d.borderRadius="50%"),"undefined"!==typeof t&&(d["--base-color"]=t),"undefined"!==typeof i&&(d["--highlight-color"]=i),d}function l(e){let{count:t=1,wrapper:i,className:l,containerClassName:h,containerTestId:c,circle:r=!1,style:d,...m}=e;var u,g,p;const w=s.useContext(a),v={...m};for(const[s,a]of Object.entries(m))"undefined"===typeof a&&delete v[s];const x={...w,...v,circle:r},b={...d,...o(x)};let f="react-loading-skeleton";l&&(f+=" ".concat(l));const y=null!==(u=x.inline)&&void 0!==u&&u,j=[],T=Math.ceil(t);for(let a=0;a<T;a++){let e=b;if(T>t&&a===T-1){const i=null!==(g=e.width)&&void 0!==g?g:"100%",s=t%1,a="number"===typeof i?i*s:"calc(".concat(i," * ").concat(s,")");e={...e,width:a}}const i=s.createElement("span",{className:f,style:e,key:a},"\u200c");y?j.push(i):j.push(s.createElement(s.Fragment,{key:a},i,s.createElement("br",null)))}return s.createElement("span",{className:h,"data-testid":c,"aria-live":"polite","aria-busy":null!==(p=x.enableAnimation)&&void 0!==p?p:n},i?j.map(((e,t)=>s.createElement(i,{key:t},e))):j)}}}]);
//# sourceMappingURL=7136.dfbbf037.chunk.js.map