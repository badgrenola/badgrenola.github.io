import{S as t,i as e,s,P as n,a as l,c as o,q as r,d as a,b as c,e as f,f as i,m,t as h,g as p,h as u,k as $,n as g,p as d,r as j,u as x,v,x as I,A as P,B as k,C as w,z as y}from"./client.f347c12b.js";import{C as D}from"./card.4d489613.js";function E(t,e,s){const n=t.slice();return n[1]=e[s],n}function b(t){let e,s;return{c(){e=$("span"),s=g("Projects"),this.h()},l(t){e=d(t,"SPAN",{slot:!0});var n=j(e);s=x(n,"Projects"),n.forEach(a),this.h()},h(){v(e,"slot","title")},m(t,n){i(t,e,n),I(e,s)},d(t){t&&a(e)}}}function B(t){let e;const s=new D({props:{desc:t[1].shortDesc,link:`./projects/${t[1].slug}`,smallImage:t[1].smallImage,title:t[1].name}});return{c(){o(s.$$.fragment)},l(t){f(s.$$.fragment,t)},m(t,n){m(s,t,n),e=!0},p(t,e){const n={};1&e&&(n.desc=t[1].shortDesc),1&e&&(n.link=`./projects/${t[1].slug}`),1&e&&(n.smallImage=t[1].smallImage),1&e&&(n.title=t[1].name),s.$set(n)},i(t){e||(h(s.$$.fragment,t),e=!0)},o(t){p(s.$$.fragment,t),e=!1},d(t){u(s,t)}}}function A(t){let e,s,n,l=t[0],o=[];for(let e=0;e<l.length;e+=1)o[e]=B(E(t,l,e));const r=t=>p(o[t],1,1,()=>{o[t]=null});return{c(){e=$("div"),s=$("div");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){e=d(t,"DIV",{slot:!0});var n=j(e);s=d(n,"DIV",{class:!0});var l=j(s);for(let t=0;t<o.length;t+=1)o[t].l(l);l.forEach(a),n.forEach(a),this.h()},h(){v(s,"class","flex flex-wrap -mx-2 overflow-hidden sm:-mx-4"),v(e,"slot","content")},m(t,l){i(t,e,l),I(e,s);for(let t=0;t<o.length;t+=1)o[t].m(s,null);n=!0},p(t,e){if(1&e){let n;for(l=t[0],n=0;n<l.length;n+=1){const r=E(t,l,n);o[n]?(o[n].p(r,e),h(o[n],1)):(o[n]=B(r),o[n].c(),h(o[n],1),o[n].m(s,null))}for(P(),n=l.length;n<o.length;n+=1)r(n);k()}},i(t){if(!n){for(let t=0;t<l.length;t+=1)h(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)p(o[t]);n=!1},d(t){t&&a(e),w(o,t)}}}function C(t){let e;return{c(){e=l()},l(t){e=c(t)},m(t,s){i(t,e,s)},p:y,i:y,o:y,d(t){t&&a(e)}}}function S(t){let e,s;const $=new n({props:{$$slots:{default:[C],content:[A],title:[b]},$$scope:{ctx:t}}});return{c(){e=l(),o($.$$.fragment),this.h()},l(t){r('[data-svelte="svelte-13odci2"]',document.head).forEach(a),e=c(t),f($.$$.fragment,t),this.h()},h(){document.title="Projects // Matt Brealey"},m(t,n){i(t,e,n),m($,t,n),s=!0},p(t,[e]){const s={};17&e&&(s.$$scope={dirty:e,ctx:t}),$.$set(s)},i(t){s||(h($.$$.fragment,t),s=!0)},o(t){p($.$$.fragment,t),s=!1},d(t){t&&a(e),u($,t)}}}async function V(t,e){return{projects:Object.keys(e.projects).map(t=>e.projects[t])}}function q(t,e,s){let{projects:n}=e;return t.$set=t=>{"projects"in t&&s(0,n=t.projects)},[n]}export default class extends t{constructor(t){super(),e(this,t,q,S,s,{projects:0})}}export{V as preload};
