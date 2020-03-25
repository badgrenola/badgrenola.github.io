import{S as t,i as e,s as r,P as o,e as n,a,c as s,q as c,b as l,d as p,f as m,g as i,h as d,j as h,k as f,m as u,t as y,n as g,o as $,u as j,v,w as M,A as b,B as E,C as A,z as w}from"./client.02343383.js";import{C as T}from"./card.15c1f158.js";function x(t,e,r){const o=t.slice();return o[1]=e[r],o}function I(t){let e,r;return{c(){e=n("span"),r=j("Projects"),this.h()},l(t){e=l(t,"SPAN",{slot:!0});var o=v(e);r=M(o,"Projects"),o.forEach(p),this.h()},h(){d(e,"slot","title")},m(t,o){f(t,e,o),h(e,r)},d(t){t&&p(e)}}}function k(t){let e;const r=new T({props:{desc:t[1].shortDesc,link:`./projects/${t[1].slug}`,smallImage:t[1].smallImage,title:t[1].name}});return{c(){s(r.$$.fragment)},l(t){i(r.$$.fragment,t)},m(t,o){u(r,t,o),e=!0},p(t,e){const o={};1&e&&(o.desc=t[1].shortDesc),1&e&&(o.link=`./projects/${t[1].slug}`),1&e&&(o.smallImage=t[1].smallImage),1&e&&(o.title=t[1].name),r.$set(o)},i(t){e||(y(r.$$.fragment,t),e=!0)},o(t){g(r.$$.fragment,t),e=!1},d(t){$(r,t)}}}function B(t){let e,r,o,a=t[0],s=[];for(let e=0;e<a.length;e+=1)s[e]=k(x(t,a,e));const c=t=>g(s[t],1,1,()=>{s[t]=null});return{c(){e=n("div"),r=n("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=l(t,"DIV",{slot:!0});var o=v(e);r=l(o,"DIV",{class:!0});var n=v(r);for(let t=0;t<s.length;t+=1)s[t].l(n);n.forEach(p),o.forEach(p),this.h()},h(){d(r,"class","flex flex-wrap -mx-2 overflow-hidden sm:-mx-4"),d(e,"slot","content")},m(t,n){f(t,e,n),h(e,r);for(let t=0;t<s.length;t+=1)s[t].m(r,null);o=!0},p(t,e){if(1&e){let o;for(a=t[0],o=0;o<a.length;o+=1){const n=x(t,a,o);s[o]?(s[o].p(n,e),y(s[o],1)):(s[o]=k(n),s[o].c(),y(s[o],1),s[o].m(r,null))}for(b(),o=a.length;o<s.length;o+=1)c(o);E()}},i(t){if(!o){for(let t=0;t<a.length;t+=1)y(s[t]);o=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)g(s[t]);o=!1},d(t){t&&p(e),A(s,t)}}}function P(t){let e;return{c(){e=a()},l(t){e=m(t)},m(t,r){f(t,e,r)},p:w,i:w,o:w,d(t){t&&p(e)}}}function D(t){let e,r,j,v,M,b,E,A,w,T,x,k,D,z;const C=new o({props:{$$slots:{default:[P],content:[B],title:[I]},$$scope:{ctx:t}}});return{c(){e=n("meta"),r=n("meta"),j=n("meta"),v=n("meta"),M=n("meta"),b=n("meta"),E=n("meta"),A=n("meta"),w=n("meta"),T=n("meta"),x=n("meta"),k=n("meta"),D=a(),s(C.$$.fragment),this.h()},l(t){const o=c('[data-svelte="svelte-143hsze"]',document.head);e=l(o,"META",{name:!0,content:!0}),r=l(o,"META",{name:!0,content:!0}),j=l(o,"META",{property:!0,content:!0}),v=l(o,"META",{property:!0,content:!0}),M=l(o,"META",{property:!0,content:!0}),b=l(o,"META",{property:!0,content:!0}),E=l(o,"META",{property:!0,content:!0}),A=l(o,"META",{property:!0,content:!0}),w=l(o,"META",{property:!0,content:!0}),T=l(o,"META",{property:!0,content:!0}),x=l(o,"META",{property:!0,content:!0}),k=l(o,"META",{property:!0,content:!0}),o.forEach(p),D=m(t),i(C.$$.fragment,t),this.h()},h(){document.title="Projects // Matt Brealey",d(e,"name","description"),d(e,"content","Mainly space-based projects, created by a freelance creative problem solver."),d(r,"name","keywords"),d(r,"content","space, react, reactjs, threejs, sapper, svelte, sveltejs, ios, swift, 3d, ar, vfx, design"),d(j,"property","og:type"),d(j,"content","website"),d(v,"property","og:url"),d(v,"content","https://mattbrealey.com/projects"),d(M,"property","og:title"),d(M,"content","Matt Brealey"),d(b,"property","og:description"),d(b,"content","Mainly space-based projects, created by a freelance creative problem solver."),d(E,"property","og:image"),d(E,"content","https://mattbrealey.com/profile.jpg"),d(A,"property","twitter:card"),d(A,"content","summary_large_image"),d(w,"property","twitter:url"),d(w,"content","https://mattbrealey.com/projects"),d(T,"property","twitter:title"),d(T,"content","Matt Brealey"),d(x,"property","twitter:description"),d(x,"content","Mainly space-based projects, created by a freelance creative problem solver."),d(k,"property","twitter:image"),d(k,"content","https://mattbrealey.com/profile.jpg")},m(t,o){h(document.head,e),h(document.head,r),h(document.head,j),h(document.head,v),h(document.head,M),h(document.head,b),h(document.head,E),h(document.head,A),h(document.head,w),h(document.head,T),h(document.head,x),h(document.head,k),f(t,D,o),u(C,t,o),z=!0},p(t,[e]){const r={};17&e&&(r.$$scope={dirty:e,ctx:t}),C.$set(r)},i(t){z||(y(C.$$.fragment,t),z=!0)},o(t){g(C.$$.fragment,t),z=!1},d(t){p(e),p(r),p(j),p(v),p(M),p(b),p(E),p(A),p(w),p(T),p(x),p(k),t&&p(D),$(C,t)}}}async function z(t,e){return{projects:Object.keys(e.projects).map(t=>e.projects[t])}}function C(t,e,r){let{projects:o}=e;return t.$set=t=>{"projects"in t&&r(0,o=t.projects)},[o]}export default class extends t{constructor(t){super(),e(this,t,C,D,r,{projects:0})}}export{z as preload};
