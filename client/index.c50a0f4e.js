import{S as t,i as e,s,a,q as l,r as n,g as o,h as r,u as c,k as f,v as i,o as m,p as h,x as u,G as $,e as g,t as d,b as p,d as j,f as v,j as x,l as I,D,E,F as P,C as w,H as b}from"./client.8bde6024.js";import{P as k}from"./pageLayout.b3f6350d.js";import{C as y}from"./card.2349386a.js";function B(t,e,s){const a=t.slice();return a[1]=e[s],a}function C(t){let e,s;return{c(){e=g("span"),s=d("Projects"),this.h()},l(t){e=p(t,"SPAN",{slot:!0});var a=j(e);s=v(a,"Projects"),a.forEach(o),this.h()},h(){x(e,"slot","title")},m(t,a){f(t,e,a),I(e,s)},d(t){t&&o(e)}}}function S(t){let e;const s=new y({props:{desc:t[1].shortDesc,link:`./projects/${t[1].slug}`,smallImage:t[1].smallImage,title:t[1].name}});return{c(){l(s.$$.fragment)},l(t){c(s.$$.fragment,t)},m(t,a){i(s,t,a),e=!0},p(t,e){const a={};1&e&&(a.desc=t[1].shortDesc),1&e&&(a.link=`./projects/${t[1].slug}`),1&e&&(a.smallImage=t[1].smallImage),1&e&&(a.title=t[1].name),s.$set(a)},i(t){e||(m(s.$$.fragment,t),e=!0)},o(t){h(s.$$.fragment,t),e=!1},d(t){u(s,t)}}}function V(t){let e,s,a,l=t[0],n=[];for(let e=0;e<l.length;e+=1)n[e]=S(B(t,l,e));const r=t=>h(n[t],1,1,()=>{n[t]=null});return{c(){e=g("div"),s=g("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=p(t,"DIV",{slot:!0});var a=j(e);s=p(a,"DIV",{class:!0});var l=j(s);for(let t=0;t<n.length;t+=1)n[t].l(l);l.forEach(o),a.forEach(o),this.h()},h(){x(s,"class","flex flex-wrap -mx-2 overflow-hidden sm:-mx-4"),x(e,"slot","content")},m(t,l){f(t,e,l),I(e,s);for(let t=0;t<n.length;t+=1)n[t].m(s,null);a=!0},p(t,e){if(1&e){let a;for(l=t[0],a=0;a<l.length;a+=1){const o=B(t,l,a);n[a]?(n[a].p(o,e),m(n[a],1)):(n[a]=S(o),n[a].c(),m(n[a],1),n[a].m(s,null))}for(D(),a=l.length;a<n.length;a+=1)r(a);E()}},i(t){if(!a){for(let t=0;t<l.length;t+=1)m(n[t]);a=!0}},o(t){n=n.filter(Boolean);for(let t=0;t<n.length;t+=1)h(n[t]);a=!1},d(t){t&&o(e),P(n,t)}}}function q(t){let e;return{c(){e=a()},l(t){e=r(t)},m(t,s){f(t,e,s)},p:w,i:w,o:w,d(t){t&&o(e)}}}function A(t){let e,s;const $=new k({props:{$$slots:{default:[q],content:[V],title:[C]},$$scope:{ctx:t}}});return{c(){e=a(),l($.$$.fragment),this.h()},l(t){n('[data-svelte="svelte-13odci2"]',document.head).forEach(o),e=r(t),c($.$$.fragment,t),this.h()},h(){document.title="Projects // Matt Brealey"},m(t,a){f(t,e,a),i($,t,a),s=!0},p(t,[e]){const s={};17&e&&(s.$$scope={dirty:e,ctx:t}),$.$set(s)},i(t){s||(m($.$$.fragment,t),s=!0)},o(t){h($.$$.fragment,t),s=!1},d(t){t&&o(e),u($,t)}}}function F(t,e,s){let a;return $(t,b,t=>s(0,a=t)),[a]}export default class extends t{constructor(t){super(),e(this,t,F,A,s,{})}}
