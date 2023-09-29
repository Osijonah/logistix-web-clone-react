"use strict";(self.webpackChunklogistix_africa_clone=self.webpackChunklogistix_africa_clone||[]).push([[466],{466:function(t,e,r){r.r(e),r.d(e,{createSwipeBackGesture:function(){return g}});var i,n=r(811),s=function(t){return t&&""!==t.dir?"rtl"===t.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase())},a=r(762),u=r(671),o=r(144),c=function(){function t(){(0,u.Z)(this,t),this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return(0,o.Z)(t,[{key:"createGesture",value:function(t){var e;return new l(this,this.newID(),t.name,null!==(e=t.priority)&&void 0!==e?e:0,!!t.disableScroll)}},{key:"createBlocker",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new d(this,this.newID(),t.disable,!!t.disableScroll)}},{key:"start",value:function(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)}},{key:"capture",value:function(t,e,r){if(!this.start(t,e,r))return!1;var i=this.requestedStart,n=-1e4;if(i.forEach((function(t){n=Math.max(n,t)})),n===r){this.capturedId=e,i.clear();var s=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(s),!0}return i.delete(e),!1}},{key:"release",value:function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}},{key:"disableGesture",value:function(t,e){var r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)}},{key:"enableGesture",value:function(t,e){var r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)}},{key:"disableScroll",value:function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(h)}},{key:"enableScroll",value:function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(h)}},{key:"canStart",value:function(t){return void 0===this.capturedId&&!this.isDisabled(t)}},{key:"isCaptured",value:function(){return void 0!==this.capturedId}},{key:"isScrollDisabled",value:function(){return this.disabledScroll.size>0}},{key:"isDisabled",value:function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)}},{key:"newID",value:function(){return this.gestureId++,this.gestureId}}]),t}(),l=function(){function t(e,r,i,n,s){(0,u.Z)(this,t),this.id=r,this.name=i,this.disableScroll=s,this.priority=1e6*n+r,this.ctrl=e}return(0,o.Z)(t,[{key:"canStart",value:function(){return!!this.ctrl&&this.ctrl.canStart(this.name)}},{key:"start",value:function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}},{key:"capture",value:function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}},{key:"release",value:function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}},{key:"destroy",value:function(){this.release(),this.ctrl=void 0}}]),t}(),d=function(){function t(e,r,i,n){(0,u.Z)(this,t),this.id=r,this.disable=i,this.disableScroll=n,this.ctrl=e}return(0,o.Z)(t,[{key:"block",value:function(){if(this.ctrl){if(this.disable){var t,e=(0,a.Z)(this.disable);try{for(e.s();!(t=e.n()).done;){var r=t.value;this.ctrl.disableGesture(r,this.id)}}catch(i){e.e(i)}finally{e.f()}}this.disableScroll&&this.ctrl.disableScroll(this.id)}}},{key:"unblock",value:function(){if(this.ctrl){if(this.disable){var t,e=(0,a.Z)(this.disable);try{for(e.s();!(t=e.n()).done;){var r=t.value;this.ctrl.enableGesture(r,this.id)}}catch(i){e.e(i)}finally{e.f()}}this.disableScroll&&this.ctrl.enableScroll(this.id)}}},{key:"destroy",value:function(){this.unblock(),this.ctrl=void 0}}]),t}(),h="backdrop-no-scroll",v=new c,f=function(t,e,r,i){var n,s,a=b(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t.__zone_symbol__addEventListener?(n="__zone_symbol__addEventListener",s="__zone_symbol__removeEventListener"):(n="addEventListener",s="removeEventListener"),t[n](e,r,a),function(){t[s](e,r,a)}},b=function(t){if(void 0===i)try{var e=Object.defineProperty({},"passive",{get:function(){i=!0}});t.addEventListener("optsTest",(function(){}),e)}catch(r){i=!1}return!!i},y=function(t){return t instanceof Document?t:t.ownerDocument},m=function(t){var e=!1,r=!1,i=!0,n=!1,s=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),a=s.canStart,u=s.onWillStart,o=s.onStart,c=s.onEnd,l=s.notCaptured,d=s.onMove,h=s.threshold,b=s.passive,m=s.blurOnStart,g={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},X=function(t,e,r){var i=r*(Math.PI/180),n="x"===t,s=Math.cos(i),a=e*e,u=0,o=0,c=!1,l=0;return{start:function(t,e){u=t,o=e,l=0,c=!0},detect:function(t,e){if(!c)return!1;var r=t-u,i=e-o,d=r*r+i*i;if(d<a)return!1;var h=Math.sqrt(d),v=(n?r:i)/h;return l=v>s?1:v<-s?-1:0,c=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}(s.direction,s.threshold,s.maxAngle),w=v.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),Y=function(){e&&(n=!1,d&&d(g))},_=function(){return!!w.capture()&&(e=!0,i=!1,g.startX=g.currentX,g.startY=g.currentY,g.startTime=g.currentTime,u?u(g).then(G):G(),!0)},G=function(){m&&function(){if("undefined"!==typeof document){var t=document.activeElement;(null===t||void 0===t?void 0:t.blur)&&t.blur()}}(),o&&o(g),i=!0},D=function(){e=!1,r=!1,n=!1,i=!0,w.release()},E=function(t){var r=e,n=i;D(),n&&(p(g,t),r?c&&c(g):l&&l(g))},I=function(t,e,r,i,n){var s,a,u,o,c,l,d,h=0,v=function(i){h=Date.now()+2e3,e(i)&&(!a&&r&&(a=f(t,"touchmove",r,n)),u||(u=f(i.target,"touchend",m,n)),o||(o=f(i.target,"touchcancel",m,n)))},b=function(i){h>Date.now()||e(i)&&(!l&&r&&(l=f(y(t),"mousemove",r,n)),d||(d=f(y(t),"mouseup",p,n)))},m=function(t){S(),i&&i(t)},p=function(t){k(),i&&i(t)},S=function(){a&&a(),u&&u(),o&&o(),a=u=o=void 0},k=function(){l&&l(),d&&d(),l=d=void 0},g=function(){S(),k()},X=function(){arguments.length>0&&void 0!==arguments[0]&&!arguments[0]?(s&&s(),c&&c(),s=c=void 0,g()):(s||(s=f(t,"touchstart",v,n)),c||(c=f(t,"mousedown",b,n)))};return{enable:X,stop:g,destroy:function(){X(!1),i=r=e=void 0}}}(s.el,(function(t){var e=k(t);return!(r||!i)&&(S(t,g),g.startX=g.currentX,g.startY=g.currentY,g.startTime=g.currentTime=e,g.velocityX=g.velocityY=g.deltaX=g.deltaY=0,g.event=t,(!a||!1!==a(g))&&(w.release(),!!w.start()&&(r=!0,0===h?_():(X.start(g.startX,g.startY),!0))))}),(function(t){e?!n&&i&&(n=!0,p(g,t),requestAnimationFrame(Y)):(p(g,t),X.detect(g.currentX,g.currentY)&&(X.isGesture()&&_()||L()))}),E,{capture:!1,passive:b}),L=function(){D(),I.stop(),l&&l(g)};return{enable:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t||(e&&E(void 0),D()),I.enable(t)},destroy:function(){w.destroy(),I.destroy()}}},p=function(t,e){if(e){var r=t.currentX,i=t.currentY,n=t.currentTime;S(e,t);var s=t.currentX,a=t.currentY,u=(t.currentTime=k(e))-n;if(u>0&&u<100){var o=(s-r)/u,c=(a-i)/u;t.velocityX=.7*o+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=s-t.startX,t.deltaY=a-t.startY,t.event=e}},S=function(t,e){var r=0,i=0;if(t){var n=t.changedTouches;if(n&&n.length>0){var s=n[0];r=s.clientX,i=s.clientY}else void 0!==t.pageX&&(r=t.pageX,i=t.pageY)}e.currentX=r,e.currentY=i},k=function(t){return t.timeStamp||Date.now()},g=function(t,e,r,i,a){var u=t.ownerDocument.defaultView,o=s(t),c=function(t){return o?-t.deltaX:t.deltaX};return m({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(r){return o=s(t),function(t){var e=t.startX;return o?e>=u.innerWidth-50:e<=50}(r)&&e()},onStart:r,onMove:function(t){var e=c(t)/u.innerWidth;i(e)},onEnd:function(t){var e=c(t),r=u.innerWidth,i=e/r,s=function(t){return o?-t.velocityX:t.velocityX}(t),l=s>=0&&(s>.2||e>r/2),d=(l?1-i:i)*r,h=0;if(d>5){var v=d/Math.abs(s);h=Math.min(v,540)}a(l,i<=0?.01:(0,n.m)(0,i,.9999),h)}})}}}]);
//# sourceMappingURL=466.4aa00834.chunk.js.map