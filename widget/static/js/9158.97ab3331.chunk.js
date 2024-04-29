"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9158],{79158:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var s=r(72791),o=r(70188),a=r(2703),n=r(80184);const l=s.lazy((()=>r.e(4900).then(r.bind(r,4900)))),i=s.lazy((()=>Promise.all([r.e(4867),r.e(1013)]).then(r.bind(r,85622)))),c=s.lazy((()=>Promise.all([r.e(4867),r.e(2782)]).then(r.bind(r,34274)))),d=s.memo((e=>{let{error:t,wall:r}=e,l=t.errorWithMessage,d=!!window.editor||(!!window.location.pathname.includes("/editor")||window.location.href.includes("?editor"));const h=(0,a.oF)()||window.location.href.includes("social-wall"),p=h?o.$e:o._r;if(l)return l&&Object.keys(l).length>0?"VISITOR_LIMIT_EXCEEDED"==l.type?(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(c,{title:"Page Views Limit Exceeded",description:"Oops! Seems Page Views Limit for the plan exceeded. If you are the owner of this Taggbox account, please click below link to access your account.",utm:"widgetinactive",button:'<a href="'.concat(p).concat(o.yL,'viewlimit" target="_blank" class="tb_error_btn_primary">Update Now</a>')})}):"SildeShow"==l.type?(0,n.jsxs)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[(0,n.jsx)(c,{title:null!==l&&void 0!==l&&l.message?l.message:"Wall Not exist",utm:"widgetinactive"})," "]}):(0,n.jsxs)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[(0,n.jsx)(c,{title:null!==l&&void 0!==l&&l.message?l.message:"Wall Not exist",description:"Oops! Seems like something went wrong. If you are the owner of this Taggbox account, please click below link to access your account.",utm:"widgetinactive",button:'<a href="'.concat(p).concat(o.yL,'widgetinactive" target="_blank" class="tb_error_btn_primary">Access Now</a>')})," "]}):null;if(t.planLimit)return(0,n.jsxs)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[(0,n.jsx)(c,{title:"You're Running Extra Widgets/Feeds!",description:"To enjoy uninterrupted services,kindly revoke the additional widget/feed or upgrade your plan.",utm:"widgetinactive",button:'<a href="'.concat(p).concat(o.yL,'feedlimit" target="_blank" class="tb_error_btn_primary">Update Now</a>')})," "]});if(!t.themeError||!Object.keys(t.themeError).length)return l&&Object.keys(l).length>0?(0,n.jsx)(i,{error:t}):null;switch(t.themeError.error_code){case 201:return(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(i,{...t.themeError,wall:r,editor:d,title:"No Posts!",description:"If the Moderation is ON, approve the posts from the moderation section to make them appear on your widget. Else, there won\u2019t be any posts on your added feeds.",utm:"noposts"})});case 202:return(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(i,{...t.themeError,wall:r,editor:d,title:"No Feeds!",description:"Seems like you have not added any feed. Kindly add feed from your preferred social network",utm:"nofeeds"})});case 203:return(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(i,{...t.themeError,wall:r,editor:d,title:"Your Feed Status is Off!!",description:'Please <a target="'.concat(r.isEditor?"_self":"_blank",'" href="').concat(r.isEditor?"#":"".concat(p,"wall/index/").concat(r.Wall.id).concat(h?"?manage-feed=true":""),'" id="wallmanageFeed">Click here</a> to turn the status on! Or add another feed'),utm:"feedinactive"})});case 204:return(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(i,{...t.themeError,wall:r,editor:d,title:"Feed Not Authorized!",description:'It appears that you have not authorized any Feed. Please <a target="_blank" href="'.concat(p,"moderation/index/").concat(r.Wall.id,'" rel="noopener noreferrer">Click here</a> to authorize now!'),utm:"feednotauthorized"})});case 205:return(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(i,{...t.themeError,wall:r,editor:d,title:"No Tweets/Posts!",description:'Currently, No Tweets/Posts are available on the entered <div class="tb_error_highlight">'.concat(a.QE[t.themeError.older_post]," ").concat(t.themeError.older_days,"</div>. The new Tweets/Posts will start appearing here."),utm:"notweets-posts"})});case 206:return(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(i,{...t.themeError,wall:r,editor:d,title:"No Tweets!",description:'No Tweets are available on the entered <div class="tb_error_highlight">'.concat(a.QE[t.themeError.older_post]," ").concat(t.themeError.older_days,"</div> All the upcoming tweets will appear here. <br>The Tweets are older than your chosen ").concat(2===t.themeError.older_post?7:1===t.themeError.older_post?30:null," days."),utm:"notweets-posts"})});case 207:return(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(i,{...t.themeError,wall:r,editor:d,title:"No Posts!",description:'It appears that all your posts are private. Please go to <a href="'.concat(p,"moderation/index/").concat(r.Wall.id,'" target="_blank" rel="noopener noreferrer">Moderation</a> and make them public.'),utm:"noposts"})});case 208:return(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(i,{...t.themeError,wall:r,editor:d,title:"No Posts!",description:"It appears that the available posts are older than your chosen ".concat(8!==t.themeError.older_days?t.themeError.older_days+" Days":(0,a.w5)(t.themeError.older_post),". All the new posts will start to appear here."),utm:"posts-days"})});case 209:return(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(i,{...t.themeError,wall:r,editor:d,title:"No Posts!",description:"It appears that there are no posts available with images or videos. The theme doesn\u2019t support text content.",utm:"nomedia-content"})});case 211:return(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(i,{...t.themeError,wall:r,editor:d,title:"No Posts!",description:"No posts are available on the entered ".concat(a.QE[t.themeError.older_post]," ").concat(t.themeError.older_days,". All Upcoming posts will appear here."),utm:"noposts"})});case 212:return(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(i,{...t.themeError,wall:r,editor:d,title:"No Posts!",description:"Only new posts from Instagram ".concat(a.QE[t.themeError.older_post]," ").concat(t.themeError.older_days," will appear here. Existing posts from Instagram ").concat(a.QE[t.themeError.older_post]," ").concat(t.themeError.older_days," can not be retrieved."),utm:"noinstagram-posts"})});default:return""}}));class h extends s.PureComponent{render(){const e={backgroundImage:"url(".concat(o.ho,"app/theme/display/images/nopost.png)")},{error:t,wall:r}=this.props,i=new URLSearchParams(window.location.search).get("preview"),c=(0,a.oF)();return(0,n.jsxs)(n.Fragment,{children:[i?document.body.classList.add("tb_previw-error"):null,(0,n.jsxs)("div",{className:"tb_error_page tb_error_theme_".concat(null!=r&&r?r.ThemeRule.themeId:"wall_error"),children:[(0,n.jsx)("div",{className:"tb_error_page_bg",style:e,children:" "}),r&&Object.keys(r).length>0&&r.UserRule.on_site_upload&&r.UgcSettings.onsite_button_status&&r.UgcSettings.onsite_status&&!c?(0,n.jsx)("div",{className:"tb_error_onsite_btn",children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(l,{UgcSettings:r.UgcSettings,id:r.Wall.id})})}):null,(0,n.jsx)(d,{error:t,wall:r})]})]})}}}}]);
//# sourceMappingURL=9158.97ab3331.chunk.js.map