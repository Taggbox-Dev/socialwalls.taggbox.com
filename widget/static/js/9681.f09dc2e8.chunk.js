"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9681],{59681:(t,n,e)=>{e.r(n),e.d(n,{default:()=>u});var a=e(72791),o=e(54270),l=e(70188),s=e(2703),i=e(79200),c=e(46535),g=e(80184);const r=(0,s.CL)()+1e3*((0,s.QM)()+60*((0,s.dn)()+60*(0,s.eZ)()));class u extends a.PureComponent{constructor(t){super(t),this.state={hashtag_campaign_image:t.wall.Wall.id&&window.location.href.includes("hashtag_campaign")?"".concat("https://cloud.taggbox.com/wall-branding/wallId_widget_").concat(t.wall.Wall.id,".jpg?v=").concat(r):""}}componentDidMount(){const t=!!window.location.href.includes("hashtag_campaign"),{wall:n}=this.props,e=n.Wall.id,a=n.Wall.owner;t&&(0,i.wl)({wallId:e,domainName:c.QC?c.nX?"https://test.taggbox.com/embed-widget/lite/".concat(e,"?ugcSuite=1&hashtag_campaign=true"):"https://test.taggbox.com/embed-widget/lite/".concat(n.Wall.url,"?hashtag_campaign=true"):c.nX?"https://widget.taggbox.com/".concat(e,"?ugcSuite=1&hashtag_campaign=true"):"https://widget.taggbox.com/".concat(e),ownerId:a,screenshotSize:["1200x624"]}).then((t=>{let{data:e}=t;const{responseCode:a,responseData:o}=e;if(200==a&&o.length>0&&o[0]&&o[0].s3Url){const t=(0,s.CL)()+1e3*((0,s.QM)()+60*((0,s.dn)()+60*(0,s.eZ)()));this.setState({hashtag_campaign_image:"".concat(o[0].s3Url,"?v=").concat(t)})}else{const t=(0,s.Bq)(n.ThemeRule.themeId);this.setState({hashtag_campaign_image:t})}})).catch((t=>{const e=(0,s.Bq)(n.ThemeRule.themeId);this.setState({hashtag_campaign_image:e})}))}render(){const{hashtag_campaign_image:t}=this.state,{wall:n}=this.props,e=!!(n.ThemeRule&&Object.keys(n.ThemeRule).length>0&&n.ThemeRule.link_font&&""!==n.ThemeRule.link_font),a=!(!e||"inherit"!==n.ThemeRule.link_font),s="inherit"===n.UgcSettings.onsite_link_font_btn,i="inherit"===n.UgcSettings.onsite_link_font_msg,r="inherit"===n.ThemeRule.linkfontAuthor,u=!!(n.Banner&&Object.keys(n.Banner).length>0&&"inherit"===n.Banner.title_link_font),f=!!(n.Banner&&Object.keys(n.Banner).length>0&&"inherit"===n.Banner.subtitle_link_font),d=new URLSearchParams(window.location.search).get("preview"),_=n.ThemeRule.themeId,h=!!window.location.href.includes("hashtag_campaign"),m=c.nX?"Tagbox UGC Suite":"Taggbox";return h?(0,g.jsxs)(o.q,{children:[c.nX?(0,g.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):null,(0,g.jsx)("meta",{property:"og:type",content:"website"}),(0,g.jsx)("meta",{property:"og:url",content:"https://widget-lite.taggbox.com/".concat(n.Wall.id)}),(0,g.jsx)("meta",{property:"og:title",content:"".concat(n.Wall.name," - ").concat(m," Widget")}),(0,g.jsx)("meta",{property:"og:description",content:"".concat(n.Wall.name," hashtag campaign created using ").concat(m," Widget.")}),(0,g.jsx)("meta",{property:"og:image",content:t}),(0,g.jsx)("meta",{property:"type",content:"website"}),(0,g.jsx)("meta",{property:"url",content:"https://widget-lite.taggbox.com/".concat(n.Wall.id)}),(0,g.jsx)("meta",{property:"title",content:"".concat(n.Wall.name," - ").concat(m," Widget")}),(0,g.jsx)("meta",{property:"description",content:"".concat(n.Wall.name," hashtag campaign created using ").concat(m," Widget.")}),(0,g.jsx)("meta",{property:"image",content:t}),d?document.body.classList.add("tb_previw_th-".concat(_)):null,(0,g.jsx)("style",{children:"@font-face {\n                        font-family: 'TaggboxSocialFonts';\n                        src:url('".concat(l.do,"/media/web-fonts/TaggboxSocialFonts4.ttf?var=2') format('truetype'),\n                            url('").concat(l.do,"/media/web-fonts/TaggboxSocialFonts4.woff?var=2') format('woff'),\n                            url('").concat(l.do,"/media/web-fonts/TaggboxSocialFonts4.svg?var=2') format('svg');\n                        font-weight: normal;\n                        font-style: normal;\n                        font-display: swap;\n                    }")}),1==n.Personalization.cssStatus?(0,g.jsx)("style",{type:"text/css",children:n.Personalization.css}):null,n.UgcSettings.onsite_status&&n.UgcSettings.onsite_link_font_btn&&"Default"!=n.UgcSettings.onsite_link_font_btn?s?null:(0,g.jsx)("link",{href:"".concat(l.do,"/media/taggbox-fonts/").concat(n.UgcSettings.onsite_link_font_btn,".css"),rel:"stylesheet"}):null,n.UgcSettings.onsite_status&&n.UgcSettings.onsite_link_font_msg&&"Default"!=n.UgcSettings.onsite_link_font_msg?i?null:(0,g.jsx)("link",{href:"".concat(l.do,"/media/taggbox-fonts/").concat(n.UgcSettings.onsite_link_font_msg,".css"),rel:"stylesheet"}):null,"Default"!=n.ThemeRule.linkfontAuthor?r?null:(0,g.jsx)("link",{href:"".concat(l.do,"/media/taggbox-fonts/").concat(n.ThemeRule.linkfontAuthor,".css?v=1"),rel:"stylesheet"}):null,e&&n.ThemeRule.link_font&&"Default"!=n.ThemeRule.link_font?a?null:(0,g.jsx)("link",{href:"".concat(l.do,"/media/taggbox-fonts/").concat(n.ThemeRule.link_font,".css"),rel:"stylesheet"}):null,n.Banner&&Object.keys(n.Banner).length>0&&n.Banner.subtitle_link_font&&"Default"!=n.Banner.subtitle_link_font?f?null:(0,g.jsx)("link",{href:"".concat(l.do,"/media/taggbox-fonts/").concat(n.Banner.subtitle_link_font,".css"),rel:"stylesheet"}):null,n.Banner&&Object.keys(n.Banner).length>0&&n.Banner.title_link_font&&"Default"!=n.Banner.title_link_font?u?null:(0,g.jsx)("link",{href:"".concat(l.do,"/media/taggbox-fonts/").concat(n.Banner.title_link_font,".css"),rel:"stylesheet"}):null,n.Wall&&n.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,n.Wall&&n.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(n.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]}):window.location.href.includes("widget.taggbox.com")?(0,g.jsxs)(o.q,{children:[c.nX?(0,g.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):null,(0,g.jsx)("meta",{property:"og:type",content:"website"}),(0,g.jsx)("meta",{property:"og:url",content:"https://widget-lite.taggbox.com/".concat(n.Wall.id)}),(0,g.jsx)("meta",{property:"og:title",content:"".concat(n.Wall.name," - ").concat(m," Widget")}),(0,g.jsx)("meta",{property:"og:description",content:"".concat(n.Wall.name," featuring Social Feed using ").concat(m," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,g.jsx)("meta",{property:"og:image",content:t}),(0,g.jsx)("meta",{property:"type",content:"website"}),(0,g.jsx)("meta",{property:"url",content:"https://widget-lite.taggbox.com/".concat(n.Wall.id)}),(0,g.jsx)("meta",{property:"title",content:"".concat(n.Wall.name," - ").concat(m," Widget")}),(0,g.jsx)("meta",{property:"description",content:"".concat(n.Wall.name," featuring Social Feed using ").concat(m," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,g.jsx)("meta",{property:"image",content:t}),d?document.body.classList.add("tb_previw_th-".concat(_)):null,(0,g.jsx)("style",{children:"@font-face {\n                        font-family: 'TaggboxSocialFonts';\n                        src:url('".concat(l.do,"/media/web-fonts/TaggboxSocialFonts4.ttf?var=2') format('truetype'),\n                            url('").concat(l.do,"/media/web-fonts/TaggboxSocialFonts4.woff?var=2') format('woff'),\n                            url('").concat(l.do,"/media/web-fonts/TaggboxSocialFonts4.svg?var=2') format('svg');\n                        font-weight: normal;\n                        font-style: normal;\n                        font-display: swap;\n                    }")}),"Default"!=n.ThemeRule.linkfontAuthor?r?null:(0,g.jsx)("link",{href:"".concat(l.do,"/media/taggbox-fonts/").concat(n.ThemeRule.linkfontAuthor,".css?v=1"),rel:"stylesheet"}):null,1==n.Personalization.cssStatus?(0,g.jsx)("style",{type:"text/css",children:n.Personalization.css}):null,n.UgcSettings.onsite_status&&n.UgcSettings.onsite_link_font_btn&&"Default"!=n.UgcSettings.onsite_link_font_btn?s?null:(0,g.jsx)("link",{href:"".concat(l.do,"/media/taggbox-fonts/").concat(n.UgcSettings.onsite_link_font_btn,".css"),rel:"stylesheet"}):null,n.UgcSettings.onsite_status&&n.UgcSettings.onsite_link_font_msg&&"Default"!=n.UgcSettings.onsite_link_font_msg?i?null:(0,g.jsx)("link",{href:"".concat(l.do,"/media/taggbox-fonts/").concat(n.UgcSettings.onsite_link_font_msg,".css"),rel:"stylesheet"}):null,e&&n.ThemeRule.link_font&&"Default"!=n.ThemeRule.link_font?a?null:(0,g.jsx)("link",{href:"".concat(l.do,"/media/taggbox-fonts/").concat(n.ThemeRule.link_font,".css"),rel:"stylesheet"}):null,"Default"!=n.ThemeRule.linkfontAuthor?r?null:(0,g.jsx)("link",{href:"".concat(l.do,"/media/taggbox-fonts/").concat(n.ThemeRule.linkfontAuthor,".css?v=1"),rel:"stylesheet"}):null,n.Banner&&Object.keys(n.Banner).length>0&&n.Banner.subtitle_link_font&&"Default"!=n.Banner.subtitle_link_font?f?null:(0,g.jsx)("link",{href:"".concat(l.do,"/media/taggbox-fonts/").concat(n.Banner.subtitle_link_font,".css"),rel:"stylesheet"}):null,n.Banner&&Object.keys(n.Banner).length>0&&n.Banner.title_link_font&&"Default"!=n.Banner.title_link_font?u?null:(0,g.jsx)("link",{href:"".concat(l.do,"/media/taggbox-fonts/").concat(n.Banner.title_link_font,".css"),rel:"stylesheet"}):null,n.Wall&&n.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,n.Wall&&n.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(n.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]}):(0,g.jsxs)(o.q,{children:[d?document.body.classList.add("tb_previw_th-".concat(_)):null,(0,g.jsx)("style",{children:"@font-face {\n                        font-family: 'TaggboxSocialFonts';\n                        src:url('".concat(l.do,"/media/web-fonts/TaggboxSocialFonts4.ttf?var=2') format('truetype'),\n                            url('").concat(l.do,"/media/web-fonts/TaggboxSocialFonts4.woff?var=2') format('woff'),\n                            url('").concat(l.do,"/media/web-fonts/TaggboxSocialFonts4.svg?var=2') format('svg');\n                        font-weight: normal;\n                        font-style: normal;\n                        font-display: swap;\n                    }")}),n.UgcSettings.onsite_status&&n.UgcSettings.onsite_button_status&&n.UgcSettings.onsite_css_font_btn?(0,g.jsx)("link",{href:"https://fonts.googleapis.com/css?family=".concat(n.UgcSettings.onsite_css_font_btn),rel:"stylesheet"}):null,1==n.Personalization.cssStatus?(0,g.jsx)("style",{type:"text/css",children:n.Personalization.css}):null,n.UgcSettings.onsite_status&&n.UgcSettings.onsite_link_font_btn&&"Default"!=n.UgcSettings.onsite_link_font_btn?s?null:(0,g.jsx)("link",{href:"".concat(l.do,"/media/taggbox-fonts/").concat(n.UgcSettings.onsite_link_font_btn,".css"),rel:"stylesheet"}):null,n.UgcSettings.onsite_status&&n.UgcSettings.onsite_link_font_msg&&"Default"!=n.UgcSettings.onsite_link_font_msg?i?null:(0,g.jsx)("link",{href:"".concat(l.do,"/media/taggbox-fonts/").concat(n.UgcSettings.onsite_link_font_msg,".css"),rel:"stylesheet"}):null,e&&n.ThemeRule.link_font&&"Default"!=n.ThemeRule.link_font?a?null:(0,g.jsx)("link",{href:"".concat(l.do,"/media/taggbox-fonts/").concat(n.ThemeRule.link_font,".css"),rel:"stylesheet"}):null,n.Banner&&Object.keys(n.Banner).length>0&&n.Banner.subtitle_link_font&&"Default"!=n.Banner.subtitle_link_font?f?null:(0,g.jsx)("link",{href:"".concat(l.do,"/media/taggbox-fonts/").concat(n.Banner.subtitle_link_font,".css"),rel:"stylesheet"}):null,n.Banner&&Object.keys(n.Banner).length>0&&n.Banner.title_link_font&&"Default"!=n.Banner.title_link_font?u?null:(0,g.jsx)("link",{href:"".concat(l.do,"/media/taggbox-fonts/").concat(n.Banner.title_link_font,".css"),rel:"stylesheet"}):null,"Default"!=n.ThemeRule.linkfontAuthor?r?null:(0,g.jsx)("link",{href:"".concat(l.do,"/media/taggbox-fonts/").concat(n.ThemeRule.linkfontAuthor,".css?v=1"),rel:"stylesheet"}):null,n.Wall&&n.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,n.Wall&&n.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(n.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]})}}}}]);
//# sourceMappingURL=9681.f09dc2e8.chunk.js.map