(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7033],{23450:(a,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var h=s(72791),e=s(34867),l=s(2703),n=s(46476),g=s(80184);class o extends h.PureComponent{render(){const{contentClass:a,content:t,ThemeRule:s,font:o,personalization:r,item:i,contentTitle:c}=this.props;let d=20==i.network.id?t:(0,l.Fx)(t);return 12==i.network.id&&(d=(0,e.ZP)(d)),(0,g.jsxs)("div",{className:"".concat(a," tb-cTBfont- ").concat(s.font_varient),style:{fontFamily:s.css_font,fontSize:o.fontsize,color:o.fontColor},children:[c?(0,g.jsx)("div",{className:"tb_bold_txt__",children:(0,e.ZP)(c)}):null,(0,g.jsxs)(h.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:[" ",(0,g.jsx)(n.Z,{data:i,content:d,Personalization:r},d)]})]})}}},46476:(a,t,s)=>{"use strict";s.d(t,{Z:()=>i});var h=s(72791),e=s(35737),l=s(34867),n=s(80184);const g=s(80844),o=a=>(0,n.jsx)(e.default,{children:(0,l.ZP)(a)}),r=a=>{let{data:t,content:s,Personalization:h}=a;const e={color:h.hashtag_color,fontWeight:"bold",backgroundColor:1==h.hashtag_background_status?h.hashtag_background_color:"transparent"};return 20==t.network.id&&window.slackdown?(0,n.jsx)(n.Fragment,{children:1===h.hashtag_highlight&&0===h.hashtag_feed&&0===h.hashtag_all?(0,l.ZP)(s):1===h.hashtag_highlight&&0===h.hashtag_feed&&1===h.hashtag_all?o(window.slackdown.parse(g(s,/#(\w+)/g,((a,t)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:e,children:["#",a]}))),t.slackMember)):1===h.hashtag_highlight&&1===h.hashtag_feed&&0===h.hashtag_all?o(window.slackdown.parse(g(s,t.hash.hashString,((a,t)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:e,children:a}))),t.slackMember)):1===h.hashtag_highlight&&1===h.hashtag_feed&&1===h.hashtag_all?o(window.slackdown.parse(g(s,/#(\w+)/g,((a,t)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:e,children:["#",a]},t))),t.slackMember)):o(window.slackdown.parse(s,t.slackMember))}):(0,n.jsx)(n.Fragment,{children:1===h.hashtag_highlight&&0===h.hashtag_feed&&0===h.hashtag_all?(0,l.ZP)(s):1===h.hashtag_highlight&&0===h.hashtag_feed&&1===h.hashtag_all?g((0,l.ZP)(s),/#(\w+)/g,((a,t)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:e,children:["#",a]}))):1===h.hashtag_highlight&&1===h.hashtag_feed&&0===h.hashtag_all?g((0,l.ZP)(s),t.hash.hashString,((a,t)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:e,children:a}))):1===h.hashtag_highlight&&1===h.hashtag_feed&&1===h.hashtag_all?g((0,l.ZP)(s),/#(\w+)/g,((a,t)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:e,children:["#",a]},t))):(0,l.ZP)(s)})},i=(0,h.memo)(r)},50247:()=>{}}]);
//# sourceMappingURL=7033.cee2a6a0.chunk.js.map