"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8345],{68345:(t,e,a)=>{a.r(e),a.d(e,{default:()=>f});var o=a(72791),s=a(77581),n=a(79200),i=a(67945),l=a.n(i),h=a(2703),r=a(49671),p=a(42308),d=a(68329),m=a(80184);const c=(0,h.oF)(),u=(0,h.hz)();class g extends o.PureComponent{constructor(){var t;super(...arguments),t=this,this.state={themeHeightMange:this.props.themeHeight,randomkey:0,themeHeightCheck:!1},this.onFullscreenChange=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{themeHeight:a,heightUpdate:o}=t.props;e&&t.setState({themeHeightCheck:!0}),setTimeout((()=>{o(),t.setState({themeHeightMange:a,randomkey:Math.random()})}),100)}}componentDidMount(){if(c){const{themeHeight:t}=this.props;window.addEventListener("resize",(()=>this.onFullscreenChange)),document.addEventListener("fullscreenchange",this.onFullscreenChange,!1),this.setState({themeHeightMange:t}),this.onFullscreenChange(1)}}componentDidUpdate(){if(c)if(u)this.onFullscreenChange();else{const{themeHeight:t}=this.props;this.setState({themeHeightMange:t})}}render(){const{itemData:t,ThemeRule:e,personalization:a,clickToShowPopUp:o,itemIndex:s,wallID:n,ownerId:i}=this.props,{themeHeightMange:l,themeHeightCheck:u}=this.state,g=2===t.type||3===t.type||4===t.type||5===t.type,C={backgroundColor:e.cardColor},w=e.trimcontent?(0,h.Sv)(t.content,200):t.content,f=32==e.numberOfCoumn?4:8==e.numberOfCoumn?2:3,D={padding:"".concat(e.padding/2,"px"),height:c?"".concat((window.innerHeight-l)/f,"px"):""},T={borderRadius:"".concat(e.borderRadius,"px")};return(0,m.jsxs)(m.Fragment,{children:[" ",u?(0,m.jsx)("div",{id:"tb-sp-post-".concat(t.id),className:"tb_ap_post_wrapper ","tb-network":t.network.id,style:D,children:(0,m.jsx)("div",{className:"tb_ap_post_in","data-aos":null!==t&&void 0!==t&&t.stopAnimation?null:"zoom-in-up","data-aos-delay":"0","data-aos-duration":"2000","data-aos-offset":"0",onClick:o(s,t),children:(0,m.jsxs)("div",{className:"tb_ap_post_media_wrapp",style:T,children:[g?(0,m.jsx)(d.Z,{itemData:t,wallID:n}):"",(0,m.jsx)("div",{className:"overlay-main","data-aos":"zoom-in","data-aos-easing":"ease-out-cubic","data-aos-delay":"2000","data-aos-duration":"2000","data-aos-offset":"0",children:(0,m.jsxs)("div",{className:"tb_ap_post_overlay",style:C,children:[e.captionStatus||65==e.themeId?null:(0,m.jsxs)("div",{className:"tb_mwf_contant_wrapper",children:[66==e.themeId?(0,m.jsx)(r.Z,{ownerId:i,mediaType:g,postTime:t.createdAt,author:t.author,network:t.network,font:t.font,personalization:a,ThemeRule:e}):null,e.hideContent||63==e.themeId?null:(0,m.jsx)(p.Z,{item:t,content:w,font:e.font,ThemeRule:e,personalization:a,contentTitle:t.contentTitle},t.id)]}),66!=e.themeId?(0,m.jsx)(r.Z,{ownerId:i,mediaType:g,postTime:t.createdAt,author:t.author,network:t.network,font:t.font,personalization:a,ThemeRule:e}):null,(0,m.jsx)("div",{})]})})]})})}):null," "]})}}const C=(0,h.oF)();class w extends o.PureComponent{constructor(){super(...arguments),this.state={postData:[],postDataUpdate:[],postDataContent:[],tempArray:[],rowCount:0},this.dataFilter=()=>{const{postData:t,wall:e}=this.props,a=t&&t.length>0&&t.map(((t,e)=>this.props.completeDataObject[t]));let o=(0,h.tf)();const s=1==o?4:2==o?6:e.ThemeRule.numberOfCoumn&&e.ThemeRule.numberOfCoumn>5?e.ThemeRule.numberOfCoumn:6,n=a&&a.map(((t,e)=>e<s&&t.postFileNew?{...t,stopAnimation:!0}:t)),i=n&&n.filter((t=>t.file&&""!=t.file&&t));C?this.setState({postDataContent:i.filter(((t,e)=>e<s)),tempArray:a.slice(0,s),postDataUpdate:i,rowCount:s},(()=>this.addClass())):this.setState({postDataContent:i,tempArray:a.slice(0,s),postDataUpdate:i,rowCount:s})},this.addClass=()=>{const{postDataUpdate:t,rowCount:e}=this.state,{postData:a,wall:o}=this.props;if(e<t.length)for(let s=1;s<=t.length;s++)setTimeout((()=>{const{postDataContent:t,postDataUpdate:o,tempArray:n}=this.state;let i=[...o];const l=(s-1)%e,h=o.length-s;let r=o[h];if(h<t.length&&(r=n.pop()),i[l]=r,o[l]=r,this.setState((t=>({...t,postDataContent:i.slice(0,e),postDataUpdate:o}))),s==o.length){const t=a&&a.length>0&&a.map(((t,e)=>this.props.completeDataObject[t])),o=t.map(((t,a)=>a<e?{...t,stopAnimation:!0}:t));this.setState({postDataContent:o.filter(((t,a)=>a<e)),tempArray:t.slice(0,e),postDataUpdate:o,rowCount:e},(()=>this.addClass()))}}),o.ThemeRule.slideDelay?1e3*o.ThemeRule.slideDelay*s:1e4*s)},this.onLoadMasonry=()=>{var t=document.querySelector(".tb_ap_post_container");t&&this.props.managePostHeight(t.style.height)}}componentDidMount(){const{postData:t}=this.props;this.setState({postData:t},(()=>this.onLoadMasonry())),l().init(),this.dataFilter()}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e},(()=>{this.onLoadMasonry(),C||this.dataFilter()}))}render(){const{wall:t,clickToShowPopUp:e,onClickToCTA:a,heightUpdate:o,themeHeight:s}=this.props,{postDataContent:n}=this.state,i=t.ThemeRule.numberOfCoumn&&t.ThemeRule.numberOfCoumn>5?t.ThemeRule.numberOfCoumn:8;return n&&n.length>0?(0,m.jsx)("div",{id:"".concat(66==t.ThemeRule.themeId?"squre":67==t.ThemeRule.themeId?"pixel":"reels","_").concat(t.ThemeRule.themeId),className:"tb_ap_post_container clearfix ".concat(C?"display":"embed"),children:(0,m.jsx)("div",{className:"tb_ap_post_row",children:(0,m.jsx)("div",{className:"tb_ap_post_small ".concat(6==i?"size3x2":18==i?"size6x3":32==i?"size8x6":"size4x2"),children:n.map(((n,i)=>(0,m.jsx)(g,{heightUpdate:o,themeHeight:s,ownerId:t.Wall.owner,itemData:n,itemIndex:i,personalization:t.Personalization,ThemeRule:t.ThemeRule,wallID:t.Wall.id,clickToShowPopUp:e,onClickToCTA:a},n.id)))})})},n):null}}const f=(0,s.$j)(null,(t=>({managePostHeight:e=>t((0,n.B0)(e))})))(w)}}]);
//# sourceMappingURL=8345.b06c7a19.chunk.js.map