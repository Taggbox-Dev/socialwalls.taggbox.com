"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5849],{71313:(e,t,a)=>{a.d(t,{d:()=>n});var i=a(72791),s=a(80184);function n(e){return class extends i.Component{constructor(e){super(e),this.cardRef=i.createRef(null),this.startLoadingVideo=e=>{const{itemData:t,wall:a}=this.props;if(a&&a.ThemeRule&&Object.keys(a.ThemeRule).length>0&&3==t.type||5==t.type){const t=a.ThemeRule.themeId;try{if(window.innerWidth>920&&t&&[62,63,64,65,66,69,70,73].includes(parseInt(t))){let t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.setState({autoplay:!0}):this.setState({autoplay:!1})}))}),{rootMargin:"50px",threshold:1});e.current&&t.observe(e.current)}else this.setState({autoplay:!0})}catch(i){this.setState({autoplay:!0})}}},this.state={autoplay:!1}}componentDidMount(){this.startLoadingVideo(this.cardRef)}render(){return(0,s.jsx)(e,{...this.state,...this.props,cardRef:this.cardRef})}}}},85849:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var i=a(72791),s=a(85034),n=a(206),o=a.n(n),l=a(58290),c=a(71313),d=a(80184);const r=i.lazy((()=>Promise.all([a.e(4867),a.e(6332),a.e(6710),a.e(8933)]).then(a.bind(a,54122))));class h extends i.PureComponent{render(){const{item:e,wall:t,itemKey:a,clickToShowPopUp:i,loading:s}=this.props;let{ThemeRule:n}=t;const o={backgroundColor:n.cardColor,padding:"".concat(n.spacing,"px"),borderRadius:"".concat(n.borderRadius,"px"),overflow:"hidden"},h=t.displayEmbed?r:(0,c.d)(r);return(0,d.jsx)("div",{id:'"postId'.concat(e.id),className:"feedId58195 postItem flatCard ".concat(e.network.name,"}Taggbox completeFadeIn"),"data-post-id":e.id,"data-highlight":e.highlight,"data-pin":e.pin,"data-pi":e.pin,style:{padding:n.padding/2,margin:0,minWidth:0,left:0,top:0},"data-created":e.createdAt,children:(0,d.jsx)("div",{className:"post ".concat("#111111"===n.cardColor?"post".concat(a%4+1):null),style:o,children:(0,d.jsx)("div",{className:"postContent",children:s?(0,d.jsx)(l.Z,{height:300}):(0,d.jsx)(h,{clickToShowPopUp:i,itemData:e,wall:t,itemIndex:a,ThemeRule:n},a)})})},e.id)}}const p=h;var m=a(21626);const u=i.lazy((()=>a.e(7445).then(a.bind(a,47445)))),g={default:5,1920:5,1600:4,1100:3,900:2,500:1};class x extends i.PureComponent{constructor(){super(...arguments),this.state={checkThemeheight:!this.props.wall.isDisplay,itemCount:0,loading:!1},this.themeheight=()=>{this.setState({checkThemeheight:!0},this.props.heightUpdate)}}componentDidMount(){this.props.wall.isDisplay&&this.themeheight()}render(){const{loading:e,itemCount:t,checkThemeheight:a}=this.state;let{postData:n,completeDataObject:l,wall:c,adjustWidth:r,onClickToCTA:h,clickToShowPopUp:m,themeHeight:x}=this.props;const y=c.ThemeRule.themeId;return a?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,i.createElement)(u,{...this.props,key:x},(0,d.jsx)("div",{id:"focus_".concat(y),className:"Waterfall-theme  ".concat(c.isDisplay?"display":""),style:{height:"calc(100vh - ".concat(x,"px)")},children:(0,d.jsx)("div",{className:"tb_mwf_post_container",children:(0,d.jsx)("div",{id:"marqueecontainer",children:(0,d.jsx)(s.Z,{id:"wPosts",style:{display:"flex",overflow:"auto",height:"100vh",flexWrap:"wrap"},breakpointCols:g,className:"my-masonry-grid theme".concat(y),columnClassName:"my-masonry-grid_column",children:n.map(((a,i)=>{t<i+1&&this.setState({itemCount:0});const s=l[a];return(0,d.jsx)("div",{id:a,children:(0,d.jsx)(o(),{className:"fadein".concat(i+1),animateIn:"fadeIn",delay:10*(i+1),animationInDuration:3e3,animateOnce:!0,animatePreScroll:!0,style:{opacity:1},children:t>0&&t>=i+1?(0,d.jsx)(f,{item:a,itemKey:i,wall:c,loading:e},i):(0,d.jsx)(p,{item:s,itemKey:i,popupid:a,wall:c,newItems:s,loading:e,adjustWidth:r,onClickToCTA:h,clickToShowPopUp:m},a)})},i)}))})})})}))})," "]}):null}}const y=x,f=e=>(0,d.jsx)(m.f,{animationIn:"bounceIn",animationInDuration:1e3,isVisible:!0,children:(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(p,{...e})})},e.item.id)}}]);
//# sourceMappingURL=5849.0440036a.chunk.js.map