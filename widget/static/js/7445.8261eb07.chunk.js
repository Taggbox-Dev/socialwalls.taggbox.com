"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7445],{47445:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var l,o,i,r=s(72791),n=s(2703),c=!1,a=0;const h=e=>({80:60,70:40,50:30,30:20,20:10}[e]||20);class p extends r.PureComponent{constructor(e){super(e),this.scrollDiv_init=e=>{const t=63==e?"wPosts":"marqueecontainer";i=document.getElementById(t),63==e&&(c=!1),(i||{}).scrollTop=0,a=0,this.onScrollData(),this.onScrollWPosts(e)},this.onScrollData=()=>{const{wall:e}=this.props;if(e.Personalization.scrollDelay){const t=66==e.ThemeRule.themeId?60:h(e.Personalization.scrollDelay);l=setInterval(this.scrollDiv,t)}},this.onScrollWPosts=e=>{const{themeHeight:t,wall:s}=this.props,l=63==e?"wPosts":"marqueecontainer";i=document.getElementById(l);var o=document.getElementById("wPosts");if(o)if(window.innerHeight>o.clientHeight)if(63==e)i.setAttribute("style","overflow: unset;display:flex;height: 100vh;");else{var r=window.innerHeight,c=o.clientHeight;o.setAttribute("style","position: relative; margin-bottom: ".concat(r,"px; min-height:").concat(c,"px"))}else 63==e?i.setAttribute("style","overflow: auto;display:flex;height: 100vh;"):i.setAttribute("style","overflow: auto; height : calc(100vh - ".concat(t&&s.isDisplay?t+((0,n.hz)()?6:0):0,"px)"))},this.scrollDiv=()=>{const{themeId:e}=this.props.wall.ThemeRule;l&&63!=e&&clearInterval(l),c?63==e?(c=0!=(i||{}).scrollTop,(i||{}).scrollTop=a,a--):((i||{}).scrollTop=a=0,c=!1):((i||{}).scrollTop=a,a++,c=(i||{}).scrollTop>=(i||{}).scrollHeight-(i||{}).offsetHeight-10),63!=e&&this.onScrollData()},this.pauseDiv=e=>{l&&clearInterval(l),o&&clearTimeout(o),o=setTimeout((()=>this.resumeDiv()),5e3)},this.resumeDiv=()=>{const{wall:e}=this.props;i=document.getElementById("wPosts"),a=(i||{}).scrollTop,l=setInterval(this.scrollDiv,h(e.Personalization.scrollDelay))},this.setTimescroll=0}componentDidMount(){const{wall:e}=this.props;if(e.isDisplay){const{themeId:t}=e.ThemeRule,s=document.querySelector(".tb_app_container");s&&s.addEventListener("wheel",(e=>e.preventDefault()),{passive:!1}),this.setTimescroll=setTimeout((()=>this.scrollDiv_init(t)),2e3)}}componentDidUpdate(e,t){const{postData:s,wall:i}=e;s!=this.props.postData&&(l&&clearInterval(l),o&&clearTimeout(o),this.scrollDiv_init(i.ThemeRule.themeId))}componentWillUnmount(){l&&clearInterval(l),o&&clearTimeout(o),this.setTimescroll&&clearTimeout(this.setTimescroll)}render(){return{...this.props.children}}}const m=(0,r.memo)(p)}}]);
//# sourceMappingURL=7445.8261eb07.chunk.js.map