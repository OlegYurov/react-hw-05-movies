"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[13],{9098:function(n,t,e){e.d(t,{Ei:function(){return l},aV:function(){return p},ck:function(){return f},im:function(){return s}});var r,a,c,u,i=e(168),o=e(6444),s=o.ZP.div(r||(r=(0,i.Z)(["\nmax-width: 1400px;\n  margin: 0 auto;\n  padding-top: 50px;\n  padding-bottom: 50px;\n"]))),p=o.ZP.ul(a||(a=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -30px;\n  margin-left: -30px;\n  flex-wrap: wrap;\n  "]))),f=o.ZP.li(c||(c=(0,i.Z)(["\n  text-align: center;\n flex-basis: calc(100% / 4 - 30px);\n  margin-top: 30px;\n  margin-left: 30px;\n  border-radius: 5px;\n  overflow: hidden;\n  align-items: center;\n  justify-content: center;\n  background-color:#ADD8E6;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  transform: scale(1);\n  transition: all 250ms linear;\n    :hover,\n:focus {\n  transform: scale(1.1);\n  transition: all 250ms linear;\n  "]))),l=o.ZP.img(u||(u=(0,i.Z)(["\n    width: 100%;\n  height: 450px;\n  overflow: hidden;\n\n}\n"])))},4390:function(n,t,e){e.d(t,{Df:function(){return f},IQ:function(){return d},Jh:function(){return x},q:function(){return m},yK:function(){return l}});var r=e(8214),a=e(5861),c=e(4569),u=e.n(c),i="0d2fc6d2597c3f501e7437cf40d08b03",o="https://api.themoviedb.org/3",s="/trending/all/day",p="/movie",f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t,e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u()("".concat(o).concat(s,"?api_key=").concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u()("".concat(o).concat(p,"/").concat(t,"?api_key=").concat(i));case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u()("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u()("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u()("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(t));case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},2013:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r=e(8214),a=e(5861),c=e(885),u=e(2791),i=e(3504),o=e(7596),s=(e(5462),e(4390)),p=e(184);function f(n){var t=n.getData,e=(0,u.useState)(""),r=(0,c.Z)(e,2),a=r[0],i=r[1],o=function(){i("")};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t(a),o()},children:[(0,p.jsx)("input",{type:"text",onChange:function(n){i(n.target.value)},value:a,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430"}),(0,p.jsx)("button",{type:"submit",children:"Search"})]})})}var l=e(9098);function d(n){var t=(0,u.useState)(null),e=(0,c.Z)(t,2),d=e[0],x=e[1],m=(0,u.useState)(null),h=(0,c.Z)(m,2),v=h[0],Z=h[1],g=(0,u.useState)(null),w=(0,c.Z)(g,2),b=(w[0],w[1]),k=function(n){o.Am.error(n)};return""===d&&k("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441"),(0,u.useEffect)((function(){(0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!d){n.next=13;break}return n.prev=1,n.t0=Z,n.next=5,(0,s.q)(d);case 5:n.t1=n.sent,(0,n.t0)(n.t1),n.next=13;break;case 9:n.prev=9,n.t2=n.catch(1),b(n.t2),k(n.t2.message);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))()}),[d]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(f,{getData:function(n){x(n)}}),(0,p.jsx)(l.im,{children:v&&(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(l.aV,{children:v.results.map((function(n){return(0,p.jsx)(l.ck,{children:(0,p.jsxs)(i.rU,{to:"".concat(n.id),state:{from:"/movies"},children:[(0,p.jsx)(l.Ei,{src:n.poster_path&&"https://image.tmdb.org/t/p/w300".concat(n.poster_path),alt:n.name?n.name:n.title}),(0,p.jsx)("p",{children:n.name?n.name:n.title})]})},n.id)}))})})}),(0,p.jsx)(o.Ix,{})]})}}}]);
//# sourceMappingURL=13.e2643493.chunk.js.map