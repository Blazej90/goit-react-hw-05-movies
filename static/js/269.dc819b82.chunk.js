"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[269],{269:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var a=r(861),s=r(439),n=r(757),c=r.n(n),o=r(791),i=r(87),l=r(340),u={searchLabel:"Movies_searchLabel__Wbrq7",btnSearch:"Movies_btnSearch__LxZaL",containerPosters:"Movies_containerPosters__zcZzP",posterItem:"Movies_posterItem__IjeAh",posterImage:"Movies_posterImage__MCEbM",posterLink:"Movies_posterLink__-6GKJ",labelSearch:"Movies_labelSearch__VxEG2"},h=r(184),p=function(){var e=(0,o.useState)([]),t=(0,s.Z)(e,2),r=t[0],n=t[1],p=(0,o.useState)(""),m=(0,s.Z)(p,2),_=m[0],v=m[1],f=(0,i.lr)(),d=(0,s.Z)(f,2),b=d[0],x=d[1];(0,o.useEffect)((function(){var e=b.get("query");v(e||""),e?k(e):n([])}),[b]);var k=function(){var e=(0,a.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=a067f81bd7a94c3876fea33a53d4c87a"));case 3:r=e.sent,n(r.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error searching movies:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_&&(x({query:_}),k(_));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:u.containerSearch,children:[(0,h.jsx)("h2",{className:u.searchTitle,children:"Search Movies"}),(0,h.jsxs)("div",{className:u.searchLabel,children:[(0,h.jsx)("input",{type:"text",value:_,onChange:function(e){return v(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&g()},className:u.labelSearch}),(0,h.jsx)("button",{onClick:g,className:u.btnSearch,children:"Search"})]}),(0,h.jsx)("ul",{className:u.containerPosters,children:r.map((function(e){return(0,h.jsx)("li",{className:u.posterItem,children:(0,h.jsxs)(i.rU,{to:"/movies/".concat(e.id),className:u.posterLink,children:[e.poster_path?(0,h.jsx)("img",{className:u.posterImage,src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title}):(0,h.jsx)("span",{className:u.noPoster,children:"No poster"}),(0,h.jsx)("span",{className:u.posterTitle,children:e.title})]})},e.id)}))})]})}}}]);
//# sourceMappingURL=269.dc819b82.chunk.js.map