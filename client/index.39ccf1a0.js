import{S as t,i as e,s,P as l,a,c as n,q as r,d as c,b as o,e as i,f,m as h,t as m,g as d,h as u,k as $,n as g,p,r as x,u as v,v as I,x as k,A as j,B as w,C as y,z as A}from"./client.f347c12b.js";import{C as E}from"./card.4d489613.js";function B(t,e,s){const l=t.slice();return l[1]=e[s],l}function b(t){let e,s;return{c(){e=$("h1"),s=g("Articles"),this.h()},l(t){e=p(t,"H1",{slot:!0});var l=x(e);s=v(l,"Articles"),l.forEach(c),this.h()},h(){I(e,"slot","title")},m(t,l){f(t,e,l),k(e,s)},d(t){t&&c(e)}}}function q(t){let e;const s=new E({props:{date:t[1].date,desc:t[1].desc,link:`./articles/${t[1].slug}`,smallImage:t[1].smallImage,title:t[1].title}});return{c(){n(s.$$.fragment)},l(t){i(s.$$.fragment,t)},m(t,l){h(s,t,l),e=!0},p(t,e){const l={};1&e&&(l.date=t[1].date),1&e&&(l.desc=t[1].desc),1&e&&(l.link=`./articles/${t[1].slug}`),1&e&&(l.smallImage=t[1].smallImage),1&e&&(l.title=t[1].title),s.$set(l)},i(t){e||(m(s.$$.fragment,t),e=!0)},o(t){d(s.$$.fragment,t),e=!1},d(t){u(s,t)}}}function C(t){let e,s,l,a=t[0],n=[];for(let e=0;e<a.length;e+=1)n[e]=q(B(t,a,e));const r=t=>d(n[t],1,1,()=>{n[t]=null});return{c(){e=$("div"),s=$("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=p(t,"DIV",{slot:!0});var l=x(e);s=p(l,"DIV",{class:!0});var a=x(s);for(let t=0;t<n.length;t+=1)n[t].l(a);a.forEach(c),l.forEach(c),this.h()},h(){I(s,"class","flex flex-wrap -mx-2 overflow-hidden sm:-mx-4"),I(e,"slot","content")},m(t,a){f(t,e,a),k(e,s);for(let t=0;t<n.length;t+=1)n[t].m(s,null);l=!0},p(t,e){if(1&e){let l;for(a=t[0],l=0;l<a.length;l+=1){const r=B(t,a,l);n[l]?(n[l].p(r,e),m(n[l],1)):(n[l]=q(r),n[l].c(),m(n[l],1),n[l].m(s,null))}for(j(),l=a.length;l<n.length;l+=1)r(l);w()}},i(t){if(!l){for(let t=0;t<a.length;t+=1)m(n[t]);l=!0}},o(t){n=n.filter(Boolean);for(let t=0;t<n.length;t+=1)d(n[t]);l=!1},d(t){t&&c(e),y(n,t)}}}function D(t){let e;return{c(){e=a()},l(t){e=o(t)},m(t,s){f(t,e,s)},p:A,i:A,o:A,d(t){t&&c(e)}}}function V(t){let e,s;const $=new l({props:{$$slots:{default:[D],content:[C],title:[b]},$$scope:{ctx:t}}});return{c(){e=a(),n($.$$.fragment),this.h()},l(t){r('[data-svelte="svelte-c2dkk3"]',document.head).forEach(c),e=o(t),i($.$$.fragment,t),this.h()},h(){document.title="Articles // Matt Brealey"},m(t,l){f(t,e,l),h($,t,l),s=!0},p(t,[e]){const s={};17&e&&(s.$$scope={dirty:e,ctx:t}),$.$set(s)},i(t){s||(m($.$$.fragment,t),s=!0)},o(t){d($.$$.fragment,t),s=!1},d(t){t&&c(e),u($,t)}}}async function z({params:t,query:e}){return this.fetch("articles.json").then(t=>t.json()).then(t=>({articles:t}))}function H(t,e,s){let{articles:l}=e;return t.$set=t=>{"articles"in t&&s(0,l=t.articles)},[l]}export default class extends t{constructor(t){super(),e(this,t,H,V,s,{articles:0})}}export{z as preload};
