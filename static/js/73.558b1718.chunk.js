"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[73],{1491:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var s=r(5861),n=r(9439),o=r(7757),i=r.n(o),a=r(2791),c=r(7689),l=r(1087),_="Home_titleTrending__a8WUz",d="Home_containerPosters__4JZbd",m="Home_posterItem__kE5d7",p="Home_posterImage__yJQbl",h="Home_posterLink__lynJ1",u="Home_movieTitle__nYlSr",v="Home_containerSearch__iBNoE",S="Home_searchLabel__+95Xj",x="Home_labelSearch__Zib-9",f="Home_btnSearch__LX2-M",j=r(8683),w=r(5717),k=(r(3037),r(8688),"SliderComponent_sliderContainer__SCwJY"),N="SliderComponent_sliderItem__TxfmX",T="SliderComponent_sliderImage__-G7tO",g="SliderComponent_movieLink__P33o8",b="SliderComponent_prevArrow__YdzBO",C="SliderComponent_nextArrow__SL5iH",E=r(184),H=function(e){var t=e.movies,r={dots:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,arrows:!0,autoplay:!0,autoplaySpeed:3e3,nextArrow:(0,E.jsx)("div",{className:C,children:"\u276f"}),prevArrow:(0,E.jsx)("div",{className:b,children:"\u276e"}),responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}}]};return(0,E.jsx)("div",{className:k,children:(0,E.jsx)(w.Z,(0,j.Z)((0,j.Z)({},r),{},{children:t.map((function(e){return(0,E.jsx)("div",{className:N,children:(0,E.jsx)(l.rU,{to:"/movies/".concat(e.id),className:g,children:(0,E.jsx)("img",{className:T,src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.title})})},e.id)}))}))})},y=function(){var e=(0,a.useState)([]),t=(0,n.Z)(e,2),r=t[0],o=t[1],j=(0,a.useState)(""),w=(0,n.Z)(j,2),k=w[0],N=w[1],T=(0,c.s0)();(0,a.useEffect)((function(){var e=function(){var e=(0,s.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat({NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_TMDB_API_KEY));case 3:if(!(t=e.sent).ok){e.next=11;break}return e.next=7,t.json();case 7:r=e.sent,o(r.results),e.next=12;break;case 11:throw new Error("Failed to fetch trending movies");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var g=function(){k&&T("/movies?query=".concat(k))};return(0,E.jsxs)("div",{children:[(0,E.jsx)("div",{className:v,children:(0,E.jsxs)("div",{className:S,children:[(0,E.jsx)("input",{type:"text",value:k,onChange:function(e){return N(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&g()},placeholder:"Find the movie...",className:x}),(0,E.jsx)("button",{onClick:g,className:f,children:"Search"})]})}),(0,E.jsx)(H,{movies:r}),(0,E.jsx)("h2",{className:_,children:"Trending Movies"}),(0,E.jsx)("ul",{className:d,children:r.map((function(e){return(0,E.jsx)("li",{className:m,children:(0,E.jsxs)(l.rU,{to:"/movies/".concat(e.id),className:h,children:[(0,E.jsx)("img",{className:p,src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title}),(0,E.jsx)("span",{className:u,children:e.title})]})},e.id)}))})]})}}}]);
//# sourceMappingURL=73.558b1718.chunk.js.map