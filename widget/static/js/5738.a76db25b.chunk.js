"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5738],{54122:(t,e,n)=>{n.d(e,{Z:()=>p});var o=n(72791),i=n(77581),s=n(49671),a=n(68329),l=n(42308),r=n(19036),c=n(70757),d=n(80184);class h extends o.PureComponent{render(){const{itemData:t,personalization:e,ThemeRule:n,clickToShowPopUp:o,itemIndex:i,wall:h,ownerId:p}=this.props,m=2===t.type||3===t.type||4===t.type||5===t.type,u=t.rating>0,g=t.rating>0?"tb_mwf_rating_content":"tb_mwf_content",w=1===t.type&&e.textDecorate?"tb_mwf_text_decoration tb_mwf_text_post":"";return(0,d.jsx)("div",{className:"tb_mwf_post_wrapper","data-id":t.id,"tb-network":t.network.icon,children:(0,d.jsxs)("div",{className:"tb_mwf_post_in",onClick:o(i,t),children:[(0,d.jsxs)("div",{className:"tb_mwf_post_media_wrapp",children:[m||65==n.themeId?null:(0,d.jsxs)("div",{className:"tb_mwf_social_top_",children:[" ",(0,d.jsx)(c.default,{networkClass:"tb_mwf_social_center_ico",network:t.network,ThemeRule:n,font:n.font})," "]}),m?(0,d.jsx)(a.Z,{itemData:t,wallID:h.id},t.id):null,u?(0,d.jsxs)("div",{className:"tb_mwf_rating__ ".concat(29===t.network.id?"tb_mwf_onsite_rating__":""),children:[(0,d.jsx)(r.Z,{rating:t.rating,network:t.network})," "]}):null]}),n.captionStatus?null:(0,d.jsxs)("div",{className:e.postAuthor||n.socialAction||e.postTime?"tb_mwf_contant_wrapper":"",children:[(0,d.jsx)(s.Z,{ownerId:p,mediaType:m,postTime:t.createdAt,author:t.author,network:t.network,font:n.iconColor,personalization:e,ThemeRule:n}),n.hideContent||[65,63].includes(n.themeId)?null:(0,d.jsx)(l.Z,{item:t,contentClass:"".concat(g," ").concat(w),font:n.font,ThemeRule:n,personalization:e,contentTitle:t.contentTitle},t.id)]})]})})}}const p=(0,i.$j)((t=>({modalPop:t.modalPop})))(h)},35738:(t,e,n)=>{n.r(e),n.d(e,{default:()=>v});var o=n(72791),i=n(88890),s=n.n(i),a=n(58290),l=n(39852),r=n.n(l),c=n(54122),d=n(2703),h=n(80184);const p={transitionDuration:0,horizontalOrder:!0};var m,u,g=!1,w=0;const f=(0,d.oF)(),_=(0,d.hz)();class b extends o.PureComponent{constructor(){super(...arguments),this.state={rootWidth:document.querySelector(".tb_app_container").clientWidth-1,wHeight:window.innerHeight,height:0,switcher:0,aiy:0,newPersons:[],count:0,loading:!1,scrollheight:0,postWidth:0,cardNumber:0},this.scrollDiv_init=()=>{u=document.getElementById("marqueecontainer"),g=!1,u.scrollTop=0,w=0,this.onScrollData(),this.onScrollWPosts()},this.onScrollData=()=>{const{wall:t}=this.props;m=setInterval((()=>{this.scrollDiv()}),(t=>{switch(t){case 80:return 60;case 70:return 40;case 50:return 30;case 30:default:return 20;case 20:return 10}})(t.Personalization.scrollDelay))},this.onScrollWPosts=()=>{const{themeHeight:t}=this.props;u=document.getElementById("marqueecontainer");var e=document.getElementById("wPosts");if(e)if(window.innerHeight>e.clientHeight){var n=window.innerHeight,o=e.clientHeight;e.setAttribute("style","position: relative; margin-bottom: ".concat(n,"px; min-height:").concat(o,"px"))}else u.setAttribute("style","overflow: auto; height : calc(100vh - ".concat(t&&f?t:0,"px)"))},this.scrollDiv=()=>{const{postData:t}=this.props,e=t&&t.length?s()(".postItem").eq(t.length-1).height()/2:300;m&&clearInterval(m),g?(u.scrollTop=w=0,g=!1,this.onScrollData()):(u.scrollTop=w,w++,g=122464==this.props.wall.Personalization.wallId?u.scrollTop>=s()("#wPosts").height()-u.offsetHeight:u.scrollTop>=u.scrollHeight-u.offsetHeight-e,this.onScrollData())},this.onLoadTheme=()=>{const{postData:t}=this.props;t&&t.length>0&&setTimeout((()=>this.setState({loading:!1},(()=>this.scrollDiv_init()))),1e3)},this.onResponsiveTheme=()=>{const{wall:t}=this.props,e=document.querySelector(".tb_app_container").clientWidth-1;if(e>0){let n=null,o=null,i=null,s=null;const a=t.Personalization.minimumPostWidth;n=e/a;let l=Math.trunc(n);i=e%a,o=i/l,s=n>=1?a+o:a-o,this.setState({postWidth:s||a,cardNumber:n,wHeight:window.innerHeight})}}}componentDidMount(){if(setTimeout((()=>{this.setState({rootWidth:document.querySelector(".tb_app_container").clientWidth})}),2e3),this.onResponsiveTheme(),window.addEventListener("resize",(()=>{this.setState({rootWidth:document.querySelector(".tb_app_container").clientWidth,wHeight:window.innerHeight},(()=>this.onResponsiveTheme())),this.props.heightUpdate()})),f){document.querySelector(".tb_app_container").addEventListener("wheel",(t=>t.preventDefault()),{passive:!1}),this.onLoadTheme(),this.props.heightUpdate()}}componentWillUnmount(){m&&_&&(clearInterval(m),this.setState({loading:!1}))}componentDidUpdate(t,e){const{postData:n,wall:o}=t;setTimeout((()=>this.onResponsiveTheme()),_?1e3:0),this.props.heightUpdate(),n!=this.props.postData&&f&&setTimeout((()=>this.setState({loading:!1},(()=>{m&&clearInterval(m),this.scrollDiv_init()}))),1e3)}render(){const{themeHeight:t}=this.props,{loading:e,postWidth:n}=this.state;let{postData:i,completeDataObject:s,wall:l,adjustWidth:d,onClickToCTA:m,clickToShowPopUp:u}=this.props;const g={padding:"".concat(l.ThemeRule.spacing,"px"),borderRadius:"".concat(l.ThemeRule.borderRadius,"px")};return(0,h.jsx)("div",{className:"themeModrnWatrFall ".concat(f?"display":""),children:(0,h.jsx)("div",{id:"marqueecontainer",style:{overflow:"auto",height:"calc(100vh - ".concat(t,"px)")},children:(0,h.jsx)(r(),{id:"wPosts",className:"theme".concat(l.ThemeRule.themeId),elementType:"div",options:p,disableImagesLoaded:!1,updateOnEachImageLoad:!0,children:i.map(((t,r)=>{const p=s[t];return i&&i.length-1==r&&setTimeout((()=>{let t=document.querySelectorAll("img[data-is-optmized='0']");t&&t.length>0&&t.forEach((t=>{t.setAttribute("src",t.getAttribute("data-src")),t.setAttribute("data-is-optmized","1")}))}),1500),n?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{id:'"postId'.concat(p.id),className:"feedId".concat(p.feedId," postItem item flatCard pixel65 ").concat(p.network.name,"Taggbox ").concat("onlyTextCard"===p.theme48.class1?"onlyTextCard":""," completeFadeIn"),"data-post-id":p.id,"data-highlight":p.highlight,"data-pin":p.pin,style:{padding:l.ThemeRule.padding/2,margin:0,width:n,minWidth:0,left:0,top:0},"data-created":p.createdAt,children:(0,h.jsx)("div",{className:"post",style:g,children:(0,h.jsx)("div",{className:"postContent",children:e?(0,h.jsx)(a.Z,{height:300}):(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(a.Z,{height:300}),children:(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(c.Z,{ownerId:l.Wall.owner,wall:l,itemData:p,itemIndex:r,adjustWidth:d,personalization:l.Personalization,ThemeRule:l.ThemeRule,clickToShowPopUp:u,wallID:l.Wall.id,onClickToCTA:m},r)})})})})},r)," "]}):null}))})})})}}const v=(0,o.memo)(b)},58290:(t,e,n)=>{n.d(e,{Z:()=>l});var o=n(72791);const i=o.createContext({}),s=!0;function a(t){let{baseColor:e,highlightColor:n,width:o,height:i,borderRadius:a,circle:l,direction:r,duration:c,enableAnimation:d=s}=t;const h={};return"rtl"===r&&(h["--animation-direction"]="reverse"),"number"===typeof c&&(h["--animation-duration"]="".concat(c,"s")),d||(h["--pseudo-element-display"]="none"),"string"!==typeof o&&"number"!==typeof o||(h.width=o),"string"!==typeof i&&"number"!==typeof i||(h.height=i),"string"!==typeof a&&"number"!==typeof a||(h.borderRadius=a),l&&(h.borderRadius="50%"),"undefined"!==typeof e&&(h["--base-color"]=e),"undefined"!==typeof n&&(h["--highlight-color"]=n),h}function l(t){let{count:e=1,wrapper:n,className:l,containerClassName:r,containerTestId:c,circle:d=!1,style:h,...p}=t;var m,u,g;const w=o.useContext(i),f={...p};for(const[o,i]of Object.entries(p))"undefined"===typeof i&&delete f[o];const _={...w,...f,circle:d},b={...h,...a(_)};let v="react-loading-skeleton";l&&(v+=" ".concat(l));const y=null!==(m=_.inline)&&void 0!==m&&m,T=[],x=Math.ceil(e);for(let i=0;i<x;i++){let t=b;if(x>e&&i===x-1){const n=null!==(u=t.width)&&void 0!==u?u:"100%",o=e%1,i="number"===typeof n?n*o:"calc(".concat(n," * ").concat(o,")");t={...t,width:i}}const n=o.createElement("span",{className:v,style:t,key:i},"\u200c");y?T.push(n):T.push(o.createElement(o.Fragment,{key:i},n,o.createElement("br",null)))}return o.createElement("span",{className:r,"data-testid":c,"aria-live":"polite","aria-busy":null!==(g=_.enableAnimation)&&void 0!==g?g:s},n?T.map(((t,e)=>o.createElement(n,{key:e},t))):T)}}}]);
//# sourceMappingURL=5738.a76db25b.chunk.js.map