"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3010],{53010:(t,e,a)=>{a.r(e),a.d(e,{default:()=>w});var s=a(72791),n=a(88890),i=a.n(n),l=a(49705),o=a(38077),c=a(80184);class h extends s.Component{constructor(t){super(t),this.onUpdate=()=>{setTimeout((()=>{const{pIndex:t}=this.props;this.props.onUpdateRef(t,null),window.dispatchEvent(new Event("resize")),setTimeout((()=>{i()("#tb_wall_list_wrap___".concat(t+1)).addClass("tb_fc_animation")}),250)}),100)},this.myRef=s.createRef()}componentWillReceiveProps(t){const{activeID:e,pIndex:a}=t;e==a&&this.myRef.current&&this.myRef.current.swiper.slideNext()}render(){const{pItem:t,pIndex:e,wall:a,postData:s}=this.props;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(l.tq,{ref:this.myRef,slidesPerView:"auto",direction:"vertical",spaceBetween:0,mousewheel:!0,loop:!0,speed:2e3,autoplay:{enabled:!1,disableOnInteraction:!0},allowTouchMove:!1,id:"tb_wall_list_wrap___".concat(e+1),className:"swiper-container tb_wall_list_wrap___",style:{width:"".concat(100/s.length,"%")},onAfterInit:this.onUpdate,children:t&&t.map(((t,s)=>{const n=p(t.networkId,a.webFilters);if(t.file&&""!=t.file)return(0,c.jsx)(l.o5,{children:(0,c.jsx)(o.Z,{columnsId:e,activeIndex:s,item:t,wall:a,networkData:n},s)},"item_".concat(s,"_").concat(e))}))},"tb_wall_list_wrap___".concat(e+1))})}}const r=h,p=(t,e)=>{try{if(e&&e.length>0){let a=e.filter((e=>e.Network.id==t));if(a&&a[0]&&a[0].Network)return a[0].Network}return{}}catch(a){return{}}};var d,m=a(2703);const u=(0,m.oF)();class _ extends s.PureComponent{constructor(){super(...arguments),this.state={intialize:!1,columns:[],activeID:null,data:[],cardData:[],checkThemeheight:!1},this.onLoadData=()=>{const{cardData:t}=this.state;let e=[];t&&t.length>0&&(t.map(((t,a)=>{e.push({id:a,referenceData:null})})),this.setState({columns:e,data:t}))},this.componentDidMount=()=>{d=setInterval((()=>this.onUpdateTimeInterVal()),5e3),u&&this.themeheight()},this.themeheight=()=>{setTimeout((()=>{this.props.heightUpdate(),this.setState({checkThemeheight:!0})}),100)},this.postDataFilter=()=>{let{postData:t,completeDataObject:e,wall:a}=this.props;const s=t.map((t=>e[t]));let n=[],i=(0,m.tf)();const l=1==i||3==i?2:a.ThemeRule.numberOfCoumn?a.ThemeRule.numberOfCoumn:5;for(let o=0;o<s.length;o+=l)for(let t=0;t<l;t++){let e=o+t;const a=e%l;n[a]||(n[a]=[]),s[e]&&n[a].push(s[e])}this.setState({cardData:n},(()=>this.onLoadData()))},this.onUpdateTimeInterVal=()=>{const{activeID:t,columns:e}=this.state;if(t||0==t){let a=parseInt(t)+1;a>=e.length&&(a=0),e[a]&&this.setState({activeID:a})}else{let t=0;e[t]&&this.setState({activeID:t})}},this.onUpdateRef=(t,e)=>{let{columns:a}=this.state;a&&a.length>0&&a[t]&&(a[t].referenceData=e),this.setState({columns:a})},this.CONVERT_OBJ_TO_ARRAY=(t,e)=>Object.keys(t).length>0?Object.keys(t).map((e=>({...t[e]}))):[]}componentWillMount(){this.postDataFilter()}componentDidUpdate(t,e){this.state.data!==e.data&&this.onLoadData(),this.props.heightUpdate(),setTimeout((()=>window.dispatchEvent(new Event("resize"))),1e3)}componentWillUnmount(){d&&clearInterval(d)}render(){let{wall:t,themeHeight:e}=this.props;const{activeID:a,cardData:s,checkThemeheight:n}=this.state;return(0,c.jsx)(c.Fragment,{children:n?(0,c.jsx)("div",{id:"falling-container",className:"tb_wall_wrap__ atmosphereReels69 embed",style:{height:"calc(100vh - ".concat(e+4,"px)")},children:s&&s.length>0?s.map(((e,n)=>(0,c.jsx)(r,{pItem:this.CONVERT_OBJ_TO_ARRAY(e),pIndex:n,postData:s,wall:t,onUpdateRef:this.onUpdateRef,activeID:a},"update_".concat(n)))):null}):null})}}const w=(0,s.memo)(_)}}]);
//# sourceMappingURL=3010.bdf67c26.chunk.js.map