"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[509],{509:function(e,t,i){i.r(t),i.d(t,{default:function(){return _}});var n=i(861),a=i(439),s=i(757),o=i.n(s),r=i(791),c=i(689),l=i(87),v=i(340),d={posterImage:"MovieDetails_posterImage__VZLT9",containerPoster:"MovieDetails_containerPoster__GTDW9",containerMovieDetails:"MovieDetails_containerMovieDetails__2fnl3",description:"MovieDetails_description__n2kBz",containerInformation:"MovieDetails_containerInformation__3mvmd",linkCast:"MovieDetails_linkCast__7naTo",btnGoBack:"MovieDetails_btnGoBack__T8N46",containerBtnsDetails:"MovieDetails_containerBtnsDetails__PSHo0"},m=i(184),_=function(){var e=(0,c.UO)().movieId,t=(0,r.useState)(null),i=(0,a.Z)(t,2),s=i[0],_=i[1];if((0,r.useEffect)((function(){var t=function(){var t=(0,n.Z)(o().mark((function t(){var i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=a067f81bd7a94c3876fea33a53d4c87a"));case 3:i=t.sent,_(i.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching movie details:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),!s)return(0,m.jsx)("div",{children:"Loading..."});return(0,m.jsxs)("div",{className:d.containerMovieDetails,children:[(0,m.jsx)("button",{onClick:function(){window.history.back()},className:d.btnGoBack,children:"Go back"}),(0,m.jsx)("h1",{children:s.title}),(0,m.jsxs)("div",{className:d.containerPoster,children:[s.poster_path&&(0,m.jsx)("img",{className:d.posterImage,src:"https://image.tmdb.org/t/p/w500".concat(s.poster_path),alt:s.title}),(0,m.jsx)("p",{className:d.description,children:s.overview})]}),(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:d.containerInformation,children:[(0,m.jsx)("p",{children:"Additional information"}),(0,m.jsx)(l.rU,{to:"/movies/".concat(e,"/cast"),className:d.linkCast,children:"Cast"}),(0,m.jsx)(l.rU,{to:"/movies/".concat(e,"/reviews"),className:d.linkReviews,children:"Reviews"})]})}),(0,m.jsx)(c.j3,{})]})}}}]);
//# sourceMappingURL=509.9246d72f.chunk.js.map