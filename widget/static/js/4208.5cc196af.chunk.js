"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4208],{91862:()=>{},47576:()=>{},72141:()=>{},36497:()=>{},8771:(e,t,a)=>{a.d(t,{pt:()=>o,Rv:()=>r,Gk:()=>i});var n=a(17485),s=a(57609);function i(e){let{swiper:t,extendParams:a,on:i,emit:o}=e;const r=(0,n.a)();let l;a({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),t.mousewheel={enabled:!1};let d,u=(0,s.d)();const m=[];function p(){t.enabled&&(t.mouseEntered=!0)}function c(){t.enabled&&(t.mouseEntered=!1)}function y(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta)&&(!(t.params.mousewheel.thresholdTime&&(0,s.d)()-u<t.params.mousewheel.thresholdTime)&&(e.delta>=6&&(0,s.d)()-u<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),o("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),o("scroll",e.raw)),u=(new r.Date).getTime(),!1)))}function h(e){let a=e,n=!0;if(!t.enabled)return;if(e.target.closest(".".concat(t.params.mousewheel.noMousewheelClass)))return;const i=t.params.mousewheel;t.params.cssMode&&a.preventDefault();let r=t.el;"container"!==t.params.mousewheel.eventsTarget&&(r=document.querySelector(t.params.mousewheel.eventsTarget));const u=r&&r.contains(a.target);if(!t.mouseEntered&&!u&&!i.releaseOnEdges)return!0;a.originalEvent&&(a=a.originalEvent);let p=0;const c=t.rtlTranslate?-1:1,h=function(e){let t=0,a=0,n=0,s=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),n=10*t,s=10*a,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(n=e.deltaX),e.shiftKey&&!n&&(n=s,s=0),(n||s)&&e.deltaMode&&(1===e.deltaMode?(n*=40,s*=40):(n*=800,s*=800)),n&&!t&&(t=n<1?-1:1),s&&!a&&(a=s<1?-1:1),{spinX:t,spinY:a,pixelX:n,pixelY:s}}(a);if(i.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(h.pixelX)>Math.abs(h.pixelY)))return!0;p=-h.pixelX*c}else{if(!(Math.abs(h.pixelY)>Math.abs(h.pixelX)))return!0;p=-h.pixelY}else p=Math.abs(h.pixelX)>Math.abs(h.pixelY)?-h.pixelX*c:-h.pixelY;if(0===p)return!0;i.invert&&(p=-p);let f=t.getTranslate()+p*i.sensitivity;if(f>=t.minTranslate()&&(f=t.minTranslate()),f<=t.maxTranslate()&&(f=t.maxTranslate()),n=!!t.params.loop||!(f===t.minTranslate()||f===t.maxTranslate()),n&&t.params.nested&&a.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:(0,s.d)(),delta:Math.abs(p),direction:Math.sign(p)},n=d&&e.time<d.time+500&&e.delta<=d.delta&&e.direction===d.direction;if(!n){d=void 0;let r=t.getTranslate()+p*i.sensitivity;const u=t.isBeginning,c=t.isEnd;if(r>=t.minTranslate()&&(r=t.minTranslate()),r<=t.maxTranslate()&&(r=t.maxTranslate()),t.setTransition(0),t.setTranslate(r),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!u&&t.isBeginning||!c&&t.isEnd)&&t.updateSlidesClasses(),t.params.loop&&t.loopFix({direction:e.direction<0?"next":"prev",byMousewheel:!0}),t.params.freeMode.sticky){clearTimeout(l),l=void 0,m.length>=15&&m.shift();const a=m.length?m[m.length-1]:void 0,n=m[0];if(m.push(e),a&&(e.delta>a.delta||e.direction!==a.direction))m.splice(0);else if(m.length>=15&&e.time-n.time<500&&n.delta-e.delta>=1&&e.delta<=6){const a=p>0?.8:.2;d=e,m.splice(0),l=(0,s.n)((()=>{t.slideToClosest(t.params.speed,!0,void 0,a)}),0)}l||(l=(0,s.n)((()=>{d=e,m.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)}),500))}if(n||o("scroll",a),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),i.releaseOnEdges&&(r===t.minTranslate()||r===t.maxTranslate()))return!0}}else{const a={time:(0,s.d)(),delta:Math.abs(p),direction:Math.sign(p),raw:e};m.length>=2&&m.shift();const n=m.length?m[m.length-1]:void 0;if(m.push(a),n?(a.direction!==n.direction||a.delta>n.delta||a.time>n.time+150)&&y(a):y(a),function(e){const a=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&a.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&a.releaseOnEdges)return!0;return!1}(a))return!0}return a.preventDefault?a.preventDefault():a.returnValue=!1,!1}function f(e){let a=t.el;"container"!==t.params.mousewheel.eventsTarget&&(a=document.querySelector(t.params.mousewheel.eventsTarget)),a[e]("mouseenter",p),a[e]("mouseleave",c),a[e]("wheel",h)}function v(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",h),!0):!t.mousewheel.enabled&&(f("addEventListener"),t.mousewheel.enabled=!0,!0)}function g(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,h),!0):!!t.mousewheel.enabled&&(f("removeEventListener"),t.mousewheel.enabled=!1,!0)}i("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&g(),t.params.mousewheel.enabled&&v()})),i("destroy",(()=>{t.params.cssMode&&v(),t.mousewheel.enabled&&g()})),Object.assign(t.mousewheel,{enable:v,disable:g})}function o(e){let t,a,{swiper:s,extendParams:i,on:o,emit:r,params:l}=e;s.autoplay={running:!1,paused:!1,timeLeft:0},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let d,u,m,p,c,y,h,f,v=l&&l.autoplay?l.autoplay.delay:3e3,g=l&&l.autoplay?l.autoplay.delay:3e3,T=(new Date).getTime();function w(e){s&&!s.destroyed&&s.wrapperEl&&e.target===s.wrapperEl&&(s.wrapperEl.removeEventListener("transitionend",w),f||S())}const M=()=>{if(s.destroyed||!s.autoplay.running)return;s.autoplay.paused?u=!0:u&&(g=d,u=!1);const e=s.autoplay.paused?d:T+g-(new Date).getTime();s.autoplay.timeLeft=e,r("autoplayTimeLeft",e,e/v),a=requestAnimationFrame((()=>{M()}))},b=e=>{if(s.destroyed||!s.autoplay.running)return;cancelAnimationFrame(a),M();let n="undefined"===typeof e?s.params.autoplay.delay:e;v=s.params.autoplay.delay,g=s.params.autoplay.delay;const i=(()=>{let e;if(e=s.virtual&&s.params.virtual.enabled?s.slides.filter((e=>e.classList.contains("swiper-slide-active")))[0]:s.slides[s.activeIndex],!e)return;return parseInt(e.getAttribute("data-swiper-autoplay"),10)})();!Number.isNaN(i)&&i>0&&"undefined"===typeof e&&(n=i,v=i,g=i),d=n;const o=s.params.speed,l=()=>{s&&!s.destroyed&&(s.params.autoplay.reverseDirection?!s.isBeginning||s.params.loop||s.params.rewind?(s.slidePrev(o,!0,!0),r("autoplay")):s.params.autoplay.stopOnLastSlide||(s.slideTo(s.slides.length-1,o,!0,!0),r("autoplay")):!s.isEnd||s.params.loop||s.params.rewind?(s.slideNext(o,!0,!0),r("autoplay")):s.params.autoplay.stopOnLastSlide||(s.slideTo(0,o,!0,!0),r("autoplay")),s.params.cssMode&&(T=(new Date).getTime(),requestAnimationFrame((()=>{b()}))))};return n>0?(clearTimeout(t),t=setTimeout((()=>{l()}),n)):requestAnimationFrame((()=>{l()})),n},E=()=>{T=(new Date).getTime(),s.autoplay.running=!0,b(),r("autoplayStart")},x=()=>{s.autoplay.running=!1,clearTimeout(t),cancelAnimationFrame(a),r("autoplayStop")},D=(e,a)=>{if(s.destroyed||!s.autoplay.running)return;clearTimeout(t),e||(h=!0);const n=()=>{r("autoplayPause"),s.params.autoplay.waitForTransition?s.wrapperEl.addEventListener("transitionend",w):S()};if(s.autoplay.paused=!0,a)return y&&(d=s.params.autoplay.delay),y=!1,void n();const i=d||s.params.autoplay.delay;d=i-((new Date).getTime()-T),s.isEnd&&d<0&&!s.params.loop||(d<0&&(d=0),n())},S=()=>{s.isEnd&&d<0&&!s.params.loop||s.destroyed||!s.autoplay.running||(T=(new Date).getTime(),h?(h=!1,b(d)):b(),s.autoplay.paused=!1,r("autoplayResume"))},O=()=>{if(s.destroyed||!s.autoplay.running)return;const e=(0,n.g)();"hidden"===e.visibilityState&&(h=!0,D(!0)),"visible"===e.visibilityState&&S()},L=e=>{"mouse"===e.pointerType&&(h=!0,f=!0,s.animating||s.autoplay.paused||D(!0))},B=e=>{"mouse"===e.pointerType&&(f=!1,s.autoplay.paused&&S())};o("init",(()=>{s.params.autoplay.enabled&&(s.params.autoplay.pauseOnMouseEnter&&(s.el.addEventListener("pointerenter",L),s.el.addEventListener("pointerleave",B)),(0,n.g)().addEventListener("visibilitychange",O),E())})),o("destroy",(()=>{s.el.removeEventListener("pointerenter",L),s.el.removeEventListener("pointerleave",B),(0,n.g)().removeEventListener("visibilitychange",O),s.autoplay.running&&x()})),o("_freeModeStaticRelease",(()=>{(p||h)&&S()})),o("_freeModeNoMomentumRelease",(()=>{s.params.autoplay.disableOnInteraction?x():D(!0,!0)})),o("beforeTransitionStart",((e,t,a)=>{!s.destroyed&&s.autoplay.running&&(a||!s.params.autoplay.disableOnInteraction?D(!0,!0):x())})),o("sliderFirstMove",(()=>{!s.destroyed&&s.autoplay.running&&(s.params.autoplay.disableOnInteraction?x():(m=!0,p=!1,h=!1,c=setTimeout((()=>{h=!0,p=!0,D(!0)}),200)))})),o("touchEnd",(()=>{if(!s.destroyed&&s.autoplay.running&&m){if(clearTimeout(c),clearTimeout(t),s.params.autoplay.disableOnInteraction)return p=!1,void(m=!1);p&&s.params.cssMode&&S(),p=!1,m=!1}})),o("slideChange",(()=>{!s.destroyed&&s.autoplay.running&&(y=!0)})),Object.assign(s.autoplay,{start:E,stop:x,pause:D,resume:S})}function r(e){let{swiper:t,extendParams:a,emit:n,once:i}=e;a({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:function(){if(t.params.cssMode)return;const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})},onTouchMove:function(){if(t.params.cssMode)return;const{touchEventsData:e,touches:a}=t;0===e.velocities.length&&e.velocities.push({position:a[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:a[t.isHorizontal()?"currentX":"currentY"],time:(0,s.d)()})},onTouchEnd:function(e){let{currentPos:a}=e;if(t.params.cssMode)return;const{params:o,wrapperEl:r,rtlTranslate:l,snapGrid:d,touchEventsData:u}=t,m=(0,s.d)()-u.touchStartTime;if(a<-t.minTranslate())t.slideTo(t.activeIndex);else if(a>-t.maxTranslate())t.slides.length<d.length?t.slideTo(d.length-1):t.slideTo(t.slides.length-1);else{if(o.freeMode.momentum){if(u.velocities.length>1){const e=u.velocities.pop(),a=u.velocities.pop(),n=e.position-a.position,i=e.time-a.time;t.velocity=n/i,t.velocity/=2,Math.abs(t.velocity)<o.freeMode.minimumVelocity&&(t.velocity=0),(i>150||(0,s.d)()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=o.freeMode.momentumVelocityRatio,u.velocities.length=0;let e=1e3*o.freeMode.momentumRatio;const a=t.velocity*e;let m=t.translate+a;l&&(m=-m);let p,c=!1;const y=20*Math.abs(t.velocity)*o.freeMode.momentumBounceRatio;let h;if(m<t.maxTranslate())o.freeMode.momentumBounce?(m+t.maxTranslate()<-y&&(m=t.maxTranslate()-y),p=t.maxTranslate(),c=!0,u.allowMomentumBounce=!0):m=t.maxTranslate(),o.loop&&o.centeredSlides&&(h=!0);else if(m>t.minTranslate())o.freeMode.momentumBounce?(m-t.minTranslate()>y&&(m=t.minTranslate()+y),p=t.minTranslate(),c=!0,u.allowMomentumBounce=!0):m=t.minTranslate(),o.loop&&o.centeredSlides&&(h=!0);else if(o.freeMode.sticky){let e;for(let t=0;t<d.length;t+=1)if(d[t]>-m){e=t;break}m=Math.abs(d[e]-m)<Math.abs(d[e-1]-m)||"next"===t.swipeDirection?d[e]:d[e-1],m=-m}if(h&&i("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=l?Math.abs((-m-t.translate)/t.velocity):Math.abs((m-t.translate)/t.velocity),o.freeMode.sticky){const a=Math.abs((l?-m:m)-t.translate),n=t.slidesSizesGrid[t.activeIndex];e=a<n?o.speed:a<2*n?1.5*o.speed:2.5*o.speed}}else if(o.freeMode.sticky)return void t.slideToClosest();o.freeMode.momentumBounce&&c?(t.updateProgress(p),t.setTransition(e),t.setTranslate(m),t.transitionStart(!0,t.swipeDirection),t.animating=!0,(0,s.j)(r,(()=>{t&&!t.destroyed&&u.allowMomentumBounce&&(n("momentumBounce"),t.setTransition(o.speed),setTimeout((()=>{t.setTranslate(p),(0,s.j)(r,(()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(n("_freeModeNoMomentumRelease"),t.updateProgress(m),t.setTransition(e),t.setTranslate(m),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,(0,s.j)(r,(()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(m),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(o.freeMode.sticky)return void t.slideToClosest();o.freeMode&&n("_freeModeNoMomentumRelease")}(!o.freeMode.momentum||m>=o.longSwipesMs)&&(n("_freeModeStaticRelease"),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}}})}}}]);
//# sourceMappingURL=4208.5cc196af.chunk.js.map