import{S as t,i as e,s,a as l,q as a,r as n,g as r,h as o,u as c,k as i,v as f,o as h,p as m,x as d,e as u,t as $,b as g,d as p,f as x,j as v,l as j,D as I,E as k,F as y,C as E}from"./client.8bde6024.js";import{P as w}from"./pageLayout.b3f6350d.js";import{C as b}from"./card.2349386a.js";function A(t,e,s){const l=t.slice();return l[1]=e[s],l}function D(t){let e,s;return{c(){e=u("h1"),s=$("Articles"),this.h()},l(t){e=g(t,"H1",{slot:!0});var l=p(e);s=x(l,"Articles"),l.forEach(r),this.h()},h(){v(e,"slot","title")},m(t,l){i(t,e,l),j(e,s)},d(t){t&&r(e)}}}function q(t){let e;const s=new b({props:{date:t[1].date,desc:t[1].desc,link:`./articles/${t[1].slug}`,smallImage:t[1].smallImage,title:t[1].title}});return{c(){a(s.$$.fragment)},l(t){c(s.$$.fragment,t)},m(t,l){f(s,t,l),e=!0},p(t,e){const l={};1&e&&(l.date=t[1].date),1&e&&(l.desc=t[1].desc),1&e&&(l.link=`./articles/${t[1].slug}`),1&e&&(l.smallImage=t[1].smallImage),1&e&&(l.title=t[1].title),s.$set(l)},i(t){e||(h(s.$$.fragment,t),e=!0)},o(t){m(s.$$.fragment,t),e=!1},d(t){d(s,t)}}}function B(t){let e,s,l,a=t[0],n=[];for(let e=0;e<a.length;e+=1)n[e]=q(A(t,a,e));const o=t=>m(n[t],1,1,()=>{n[t]=null});return{c(){e=u("div"),s=u("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=g(t,"DIV",{slot:!0});var l=p(e);s=g(l,"DIV",{class:!0});var a=p(s);for(let t=0;t<n.length;t+=1)n[t].l(a);a.forEach(r),l.forEach(r),this.h()},h(){v(s,"class","flex flex-wrap -mx-2 overflow-hidden sm:-mx-4"),v(e,"slot","content")},m(t,a){i(t,e,a),j(e,s);for(let t=0;t<n.length;t+=1)n[t].m(s,null);l=!0},p(t,e){if(1&e){let l;for(a=t[0],l=0;l<a.length;l+=1){const r=A(t,a,l);n[l]?(n[l].p(r,e),h(n[l],1)):(n[l]=q(r),n[l].c(),h(n[l],1),n[l].m(s,null))}for(I(),l=a.length;l<n.length;l+=1)o(l);k()}},i(t){if(!l){for(let t=0;t<a.length;t+=1)h(n[t]);l=!0}},o(t){n=n.filter(Boolean);for(let t=0;t<n.length;t+=1)m(n[t]);l=!1},d(t){t&&r(e),y(n,t)}}}function C(t){let e;return{c(){e=l()},l(t){e=o(t)},m(t,s){i(t,e,s)},p:E,i:E,o:E,d(t){t&&r(e)}}}function V(t){let e,s;const u=new w({props:{$$slots:{default:[C],content:[B],title:[D]},$$scope:{ctx:t}}});return{c(){e=l(),a(u.$$.fragment),this.h()},l(t){n('[data-svelte="svelte-c2dkk3"]',document.head).forEach(r),e=o(t),c(u.$$.fragment,t),this.h()},h(){document.title="Articles // Matt Brealey"},m(t,l){i(t,e,l),f(u,t,l),s=!0},p(t,[e]){const s={};17&e&&(s.$$scope={dirty:e,ctx:t}),u.$set(s)},i(t){s||(h(u.$$.fragment,t),s=!0)},o(t){m(u.$$.fragment,t),s=!1},d(t){t&&r(e),d(u,t)}}}async function F({params:t,query:e}){return this.fetch("articles.json").then(t=>t.json()).then(t=>({articles:t}))}function H(t,e,s){let{articles:l}=e;return t.$set=t=>{"articles"in t&&s(0,l=t.articles)},[l]}export default class extends t{constructor(t){super(),e(this,t,H,V,s,{articles:0})}}export{F as preload};
