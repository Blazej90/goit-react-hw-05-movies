"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[73],{1491:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var s=r(5861),n=r(9439),o=r(7757),i=r.n(o),a=r(2791),c=r(1087),l="Home_titleTrending__a8WUz",d="Home_containerPosters__4JZbd",m="Home_posterItem__kE5d7",p="Home_posterImage__yJQbl",_="Home_posterLink__lynJ1",u="Home_movieTitle__nYlSr",h=r(8683),v=r(5717),f=(r(3037),r(8688),"SliderComponent_sliderContainer__SCwJY"),x="SliderComponent_sliderItem__TxfmX",w="SliderComponent_sliderImage__-G7tO",k="SliderComponent_movieLink__P33o8",S="SliderComponent_prevArrow__YdzBO",j="SliderComponent_nextArrow__SL5iH",g=r(184),b=function(e){var t=e.movies,r={dots:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,arrows:!0,autoplay:!0,autoplaySpeed:3e3,nextArrow:(0,g.jsx)("div",{className:j,children:"\u276f"}),prevArrow:(0,g.jsx)("div",{className:S,children:"\u276e"}),responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}}]};return(0,g.jsx)("div",{className:f,children:(0,g.jsx)(v.Z,(0,h.Z)((0,h.Z)({},r),{},{children:t.map((function(e){return(0,g.jsx)("div",{className:x,children:(0,g.jsx)(c.rU,{to:"/movies/".concat(e.id),className:k,children:(0,g.jsx)("img",{className:w,src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.title})})},e.id)}))}))})},N=function(){var e=(0,a.useState)([]),t=(0,n.Z)(e,2),r=t[0],o=t[1];return(0,a.useEffect)((function(){var e=function(){var e=(0,s.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=a067f81bd7a94c3876fea33a53d4c87a");case 3:if(!(t=e.sent).ok){e.next=11;break}return e.next=7,t.json();case 7:r=e.sent,o(r.results),e.next=12;break;case 11:throw new Error("Failed to fetch trending movies");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,g.jsxs)("div",{children:[(0,g.jsx)(b,{movies:r}),(0,g.jsx)("h2",{className:l,children:"Trending Movies"}),(0,g.jsx)("ul",{className:d,children:r.map((function(e){return(0,g.jsx)("li",{className:m,children:(0,g.jsxs)(c.rU,{to:"/movies/".concat(e.id),className:_,children:[(0,g.jsx)("img",{className:p,src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title}),(0,g.jsx)("span",{className:u,children:e.title})]})},e.id)}))})]})}}}]);
//# sourceMappingURL=73.12f97499.chunk.js.map