"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[838],{16908:(t,e,a)=>{a.r(e),a.d(e,{default:()=>v});var o=a(72791),s=a(77581),n=a(13728),l=a(47071),i=a(45434),d=a(9279),r=a(79200),_=a(32505),c=a(2703),p=a(67945),h=a.n(p),m=(a(24655),a(80184));class b extends o.PureComponent{constructor(){super(...arguments),this.state={isEnable:0,eventData:{},shareText:"SHARE",viewOnText:"View on",currentIndex:null,completeData:{},personalization:{},url:null,platform:null,imgData:[],type:"",parentID:"",isRepeatingPost:!1,mediaSize:{height:500,width:500}},this.keyboardEvent=t=>{let e=this.state.currentIndex;39==t.keyCode||40==t.keyCode?(e+=1,this.featuredPopSliderChangeIndex(e)(t)):37==t.keyCode||38==t.keyCode?(e-=1,this.featuredPopSliderChangeIndex(e)(t)):27==t.keyCode&&this.closeWidgetPopUP()},this.onCloseModal=()=>{var t=document.querySelector("#tb_post_modal_modal-".concat(this.state.parentID));t&&t.classList.contains("tb_post_modal_show")&&(t.classList.remove("tb_post_modal_show"),this.setState({isEnable:0,currentIndex:null,type:""},this.props.closePopUP()));var e=document.getElementsByTagName("html");e&&e[0]&&(e[0].style.overflow="")},this.closeWidgetPopUP=t=>this.onCloseModal(),this.getWidgetPopUPEvent=t=>{void 0!==t&&""!=t&&t.card&&("post"==t.type?this.setState({url:"",isEnable:1,eventData:t,currentIndex:t.index,completeData:t.idArray,viewOnText:t.viewOnText,shareText:t.shareText,imgData:t.imgData,personalization:t.personalization,type:t.type}):"submit-pic"==t.type&&this.setState({isEnable:1,type:t.type,windowParent:t}))},this.featuredPopSliderChangeIndex=t=>e=>{const{eventData:a,isRepeatingPost:o}=this.state;a.idArray.length-1!=t&&t!==a.idArray.length||o?t===a.idArray.length-1||t===a.idArray.length?this.setState({currentIndex:0,isRepeatingPost:!1}):-1===t?this.setState({currentIndex:a.idArray.length-1,isRepeatingPost:!1}):this.setState({currentIndex:t,isRepeatingPost:!1}):this.loadMore()},this.loadMore=()=>{const{wall:t,postData:e,postHeight:a}=this.props,{eventData:o,currentIndex:s}=this.state,n=!(e.hasMoreData&&Object.keys(e.hasMoreData).length>0)||(!e.hasMoreData[0]||0!=e.hasMoreData[0].hasMoreData)&&(!e.hasMoreData[e.appendData.networkID]||e.hasMoreData[e.appendData.networkID].hasMoreData);if(o.idArray.length-1==s&&this.setState({isRepeatingPost:!0}),n){const o=t.ThemeRule.numberOfPosts,s=Math.floor(Date.now()/1e3);this.props.managePostHeight(a),this.props.getDataNextSteps(t.Wall.id,s,o,e.appendData.networkID,e.appendData.after,e.appendData.heightEvent)}else this.setState({currentIndex:0})},this.popUpCloseClckOnWindow=()=>{document.addEventListener("click",(t=>{t.target.matches("#tb_post_modal_modal-".concat(this.state.parentID))&&this.onCloseModal()}))},this.mediaSize=t=>{this.setState({mediaSize:{height:t.height,width:t.width}})}}componentDidMount(){const{data:t}=this.props;let e=document.querySelector(".tb_app_container"),a=c.b8?c.b8:e.parentNode.id;this.setState({parentID:a}),this.getWidgetPopUPEvent(t),setTimeout((()=>{var e=document.querySelector("#tb_post_modal_modal-".concat(this.state.parentID));e&&e.classList.add("tb_post_modal_show"),void 0!=t.ThemeRule.themeId&&47==t.ThemeRule.themeId&&e&&(e.style.overflow="hidden")}));var o=document.getElementsByTagName("html");o&&o[0]&&(o[0].style.overflow="hidden"),this.popUpCloseClckOnWindow(),window.addEventListener&&window.addEventListener("keydown",this.keyboardEvent),h().init()}componentWillUnmount(){window.removeEventListener("keydown",this.keyboardEvent)}componentDidUpdate(){const t=this;let e=0;if(window.editor){let a=document.getElementById("tb_post_modal_modal-taggbox_main"),o=document.querySelector(".tb_post_modal_conetent"),s=document.querySelector(".tb_post_modal_nxt_btn"),n=document.querySelector(".tb_post_modal_prev_btn");a&&(o&&(o.onclick=()=>e=1),s&&(s.onclick=()=>e=1),n&&(n.onclick=()=>e=1),a.onclick=()=>{0==e&&t.onCloseModal(),e=0})}}componentWillReceiveProps(t){const{postData:e}=t;let{completeData:a,eventData:o}=this.state;if(a.length!=e.postData.length){let t=e.postData.map((t=>e.completeDataObject[t])).filter((t=>!String(t.id).includes("free_add_")));o.idArray=t,this.setState({completeData:t,eventData:o},(()=>{const{currentIndex:t}=this.state;this.setState({currentIndex:t+1})}))}else{!(e.hasMoreData&&Object.keys(e.hasMoreData).length>0)||(!e.hasMoreData[0]||0!=e.hasMoreData[0].hasMoreData)&&(!e.hasMoreData[e.appendData.networkID]||e.hasMoreData[e.appendData.networkID].hasMoreData)}}render(){const{wall:t,reportMediaPopUp:e,languageSetting:a,brandingNetworks:o}=this.props,{currentIndex:s,completeData:r,eventData:c,parentID:p,mediaSize:h}=this.state;let b=null;b=-1===s?r[c.idArray.length-1]:r[s];const v=1==t.Personalization.popupSlideShow;return b&&p&&Object.keys(b).length>0?(0,m.jsx)("div",{className:"tb_post_modal_modal",id:"tb_post_modal_modal-".concat(p),children:(0,m.jsx)("div",{className:"tb_post_modal_modal_dialog",children:(0,m.jsxs)("div",{className:"tb_post_modal_conetent","data-aos":"zoom-in-up",children:[(0,m.jsxs)("div",{className:"tb_post_modal_modal_head",children:[(0,m.jsxs)("div",{className:"tb_post_modal_modal_header",children:[(0,m.jsx)("div",{className:"tb_post_modal_post_link_small",children:(0,m.jsx)("div",{className:"tb_post_modal_post_address",children:b.link?(0,m.jsxs)("div",{className:"tb_post_modal_view_link",onClick:t=>window.open(b.link,"_blank"),children:[(0,m.jsxs)("div",{className:"tb_post_modal_view",children:[a.viewOnText," ",b.network.name]}),(0,m.jsx)("div",{className:"tb_post_view_ico tb__icon tb-arrow-right-alt",children:" "})]}):null})}),(0,m.jsx)("div",{className:"tb_post_modal_close_wrap",children:(0,m.jsx)("div",{className:"tb_post_modal_close_btn",onClick:this.closeWidgetPopUP,children:(0,m.jsx)("div",{className:"tb_post_close_ico tb__icon tb-close-alt",children:" "})})})]}),v?(0,m.jsxs)("div",{className:"tb_post_modal_navigation tb_post_modal_nav_content ".concat(1===b.type?"tb_post_modal_text_nav__":null),children:[(0,m.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_prev_btn",onClick:this.featuredPopSliderChangeIndex(s-1),children:(0,m.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-left-alt",children:" "})}),(0,m.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_nxt_btn",onClick:this.featuredPopSliderChangeIndex(s+1),children:(0,m.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-right-alt",children:" "})})]}):null]}),(0,m.jsxs)("div",{className:"tb_post_modal_modal_body",style:{backgroundColor:t.ThemeRule.cardColor},children:[1!=b.type?(0,m.jsxs)("div",{className:"tb_post_modal_details_left",children:[v?(0,m.jsxs)("div",{className:"tb_post_modal_navigation tb_post_modal_nav_img",children:[(0,m.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_prev_btn",onClick:this.featuredPopSliderChangeIndex(s-1),children:(0,m.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-left-alt",children:" "})}),(0,m.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_nxt_btn",onClick:this.featuredPopSliderChangeIndex(s+1),children:(0,m.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-right-alt",children:" "})})]}):null,(0,m.jsx)(n.Z,{data:b,wall:t,mediaSizeCallback:this.mediaSize})]}):null,(0,m.jsx)("div",{className:"tb_post_modal_details_right ".concat(1===b.type?"tb_post_modal_text__":""),style:{backgroundColor:b.font.cardColor},children:(0,m.jsxs)("div",{className:"tb_post_modal_content_wrap",children:[(0,m.jsxs)("div",{className:"tb_post_modal_post_detail_wrap",children:[(0,m.jsx)(l.Z,{item:b,ThemeRule:t.ThemeRule,Personalization:t.Personalization,ownerId:t.Wall.owner},"author_".concat(b.id)),(0,m.jsx)(d.Z,{ThemeRule:t.ThemeRule,Personalization:t.Personalization,item:b,contentData:b.content,contentTitle:b.contentTitle,mediaSize:h},b.id)]}),(0,m.jsxs)("div",{className:"tb_post_modal_post_footer",children:[(0,m.jsx)("div",{className:"tb_post_modal_post_footer_report",onClick:t=>e(b),children:(0,m.jsx)("div",{className:"tb_post_modal_post_report_media_btn_wrap__",children:(0,m.jsx)("div",{className:"tb_post_modal_post_report_media_btn__",style:{color:b.font.fontColor},children:"Report"})})}),(0,m.jsx)(i.Z,{item:b,wall:t,color:t.ThemeRule.fontColor})]})]})}),t.UserRule.branding_lite&&1==t.UserRule.branding_lite?(0,m.jsx)(_.Z,{brandingNetworks:o,languageSetting:a,wallId:t.Wall.id}):null]})]})})}):null}}const v=(0,s.$j)((t=>({loaderData:t.loaderData,postHeight:t.postHeight.data})),(t=>({closePopUP:e=>t((0,r.zj)(e)),reportMediaPopUp:e=>t((0,r.SD)(e)),managePostHeight:e=>t((0,r.B0)(e)),getDataNextSteps:(e,a,o,s,n,l,i)=>t((0,r.Sx)(e,a,o,s,n,l,i))})))(b)},24655:()=>{}}]);
//# sourceMappingURL=838.a492a973.chunk.js.map