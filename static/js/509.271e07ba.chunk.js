"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[509],{509:(e,s,t)=>{t.r(s),t.d(s,{default:()=>D});var i=t(791),a=t(689),o=t(87),c=t(294);const n="MovieDetails_containerMovieDetails__2fnl3",l="MovieDetails_btnGoBack__T8N46",r="MovieDetails_posterImage__VZLT9",_="MovieDetails_containerPoster__GTDW9",v="MovieDetails_description__n2kBz",d="MovieDetails_containerInformation__3mvmd",m="MovieDetails_castAndReviews__bwA2Z",h="MovieDetails_linkCast__7naTo",p="MovieDetails_linkReviews__7Zvz8",w="MovieDetails_activeLink__yHly6";var k=t(184);const D=()=>{const{movieId:e}=(0,a.UO)(),[s,t]=(0,i.useState)(null),[D,j]=(0,i.useState)(null);if((0,i.useEffect)((()=>{(async()=>{try{const s=await c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat({NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_TMDB_API_KEY,"&append_to_response=keywords"));t(s.data)}catch(s){console.error("Error fetching movie details:",s)}})()}),[e]),!s)return(0,k.jsx)("div",{children:"Loading..."});const u=e=>{j((s=>s===e?null:e))};return(0,k.jsxs)("div",{className:n,children:[(0,k.jsx)("button",{onClick:()=>{window.history.back()},className:l,children:"Go back"}),(0,k.jsx)("h1",{children:s.title}),(0,k.jsxs)("div",{className:_,children:[s.poster_path&&(0,k.jsx)("img",{className:r,src:"https://image.tmdb.org/t/p/w500".concat(s.poster_path),alt:s.title}),(0,k.jsx)("p",{className:v,children:s.overview})]}),(0,k.jsxs)("div",{className:d,children:[(0,k.jsx)("h3",{children:"Additional information"}),(0,k.jsxs)("div",{className:m,children:[(0,k.jsx)(o.rU,{to:"/movies/".concat(e,"/cast"),className:"".concat(h," ").concat("cast"===D?w:""),onClick:()=>u("cast"),children:"Cast"}),(0,k.jsx)(o.rU,{to:"/movies/".concat(e,"/reviews"),className:"".concat(p," ").concat("reviews"===D?w:""),onClick:()=>u("reviews"),children:"Reviews"})]})]}),"cast"===D&&(0,k.jsx)(a.j3,{}),"reviews"===D&&(0,k.jsx)(a.j3,{})]})}}}]);
//# sourceMappingURL=509.271e07ba.chunk.js.map