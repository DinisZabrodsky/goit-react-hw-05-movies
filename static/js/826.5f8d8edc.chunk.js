"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[826],{826:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(433),a=n(683),u=n(861),c=n(439),s=n(757),i=n.n(s),o=n(791),f=n(766),l=n(929),g=n(567),h=n(394),p="SearchForm_form__o80os",d=n(184);function v(e){var t=e.searchValue,n=e.searchSubmit,r=(0,o.useState)(""),a=(0,c.Z)(r,2),u=a[0],s=a[1],i=(0,o.useState)(!0),f=(0,c.Z)(i,2),l=f[0],g=f[1];(0,o.useEffect)((function(){if(l)return s(t),void g(!1)}),[l,t]);return(0,d.jsxs)("form",{className:p,action:"query",onSubmit:function(e){if(e.preventDefault(),!u)return alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u043f\u0438\u0442");n(u),g(!1)},children:[(0,d.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;s(t)},value:u}),(0,d.jsx)("button",{type:"submit",children:"\u041f\u043e\u0448\u0443\u043a"})]})}var Z=n(87);function m(){var e,t=(0,o.useState)([]),n=(0,c.Z)(t,2),s=n[0],p=n[1],m=(0,o.useState)(!0),x=(0,c.Z)(m,2),_=x[0],S=x[1],j=(0,o.useState)({search:"",page:1,get:!1,loading:!1}),b=(0,c.Z)(j,2),w=b[0],y=b[1],k=(0,Z.lr)(),q=(0,c.Z)(k,2),C=q[0],E=q[1],F=null!==(e=C.get("query"))&&void 0!==e?e:"";(0,o.useEffect)((function(){if(""!==F&&_)return S(!1),void y({page:1,search:F,get:!0,loading:!0})}),[F,_]),(0,o.useEffect)((function(){if(w.get&&""!==w.search){var e=function(){var e=(0,u.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.gW)(w.search,w.page);case 2:(t=e.sent).results.length?1===w.page?(p(t.results),y((function(e){return(0,a.Z)((0,a.Z)({},e),{},{get:!1,loading:!1})}))):(p((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(t.results))})),y((function(e){return(0,a.Z)((0,a.Z)({},e),{},{get:!1,loading:!1})}))):alert("\u0417\u0430 \u0432\u0438\u0448\u0438\u043c \u0437\u0430\u043f\u0438\u0442\u043e\u043c ".concat(w.search,"  \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u0456"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[w]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(v,{searchValue:F,searchSubmit:function(e){if(e===w.search)return alert('\u0412\u0438 \u0432\u0432\u0435\u043b\u0438 \u0437\u0430\u043f\u0438\u0442 "'.concat(e,'" \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e'));y({page:1,search:e,get:!0,loading:!0}),E({query:e})}}),0!==s.length&&(0,d.jsx)(l.Z,{filmData:s,sectionTitle:'\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u043f\u043e\u0448\u0443\u043a\u0443 \u0437\u0430 \u0437\u0430\u043f\u0438\u0442\u043e\u043c "'.concat(w.search,'"')}),w.loading?(0,d.jsx)(g.g,{}):0!==s.length&&(0,d.jsx)(h.$,{addMoreFn:function(){return y((function(e){return(0,a.Z)((0,a.Z)({},e),{},{page:e.page+1,get:!0,loading:!0})}))}})]})}}}]);
//# sourceMappingURL=826.5f8d8edc.chunk.js.map