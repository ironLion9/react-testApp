(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{150:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(50),a=n.n(r),i=(n(59),n(11)),s=n(51),u=n.n(s),o=n(53),j=n(152),d=n(153),l=n(154),b=n(1),p=function(e){var t=e.setCategories,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],s=r[1];return Object(b.jsxs)(j.a,{onSubmit:function(e){e.preventDefault(),a.trim().length>2&&(t((function(e){return[a].concat(Object(o.a)(e))})),s(""))},children:[Object(b.jsx)("h2",{className:"title",children:"Add Category"}),Object(b.jsx)(d.a,{children:" Add "}),"\xa0",Object(b.jsx)(l.a,{type:"text",onChange:function(e){s(e.target.value)},value:a,placeholder:"Ingrese..."})]})},f=n(54),h=n(32),O=n.n(h),g=n(52),x=function(){var e=Object(g.a)(O.a.mark((function e(t){var n,c,r,a,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=Qzd1dJMciGgQGzACSrsLvTrF3LSvFqpy"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,a=r.data,i=a.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.title,n=e.url;return console.log(t,n),Object(b.jsxs)("div",{className:"card animate__animated animate__bounce animate__faster",children:[Object(b.jsx)("img",{src:n,alt:t}),Object(b.jsxs)("p",{children:[" ",t]})]})},v=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){x(e).then((function(e){setTimeout((function(){a({data:e,loading:!1})}),3e3)}))}),[e]),r}(t),r=n.data,a=n.loading;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{children:t}),a&&Object(b.jsx)("h4",{children:"Loading"}),Object(b.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(b.jsx)(m,Object(f.a)({},e),e.id)}))})]})},y=function(e){e.value;var t=Object(c.useState)(["Samsung"]),n=Object(i.a)(t,2),r=n[0],a=n[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"GifExpertApp"}),Object(b.jsx)(p,{setCategories:a}),Object(b.jsx)("hr",{}),Object(b.jsx)("ol",{children:u()(r,(function(e){return Object(b.jsx)(v,{category:e},e)}))})]})};a.a.render(Object(b.jsx)(y,{}),document.getElementById("root"))},59:function(e,t,n){}},[[150,1,2]]]);
//# sourceMappingURL=main.de8cd389.chunk.js.map