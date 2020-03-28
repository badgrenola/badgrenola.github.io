import{S as t,i as e,s as l,e as r,b as s,h as n,k as o,d as c,P as a,G as h,a as i,c as m,q as p,f as d,g as u,j as f,m as g,t as v,n as y,o as x,u as E,v as j,w as k,y as w,C as I,z as b}from"./client.c6eaf1ca.js";function P(t,e,l){const r=t.slice();return r[5]=e[l],r}function $(t,e,l){const r=t.slice();return r[8]=e[l],r}function M(t,e,l){const r=t.slice();return r[11]=e[l],r}function A(t){let e,l;return{c(){e=r("meta"),this.h()},l(t){e=s(t,"META",{property:!0,content:!0}),this.h()},h(){n(e,"property","og:image"),n(e,"content",l="https://mattbrealey.com/"+t[0].smallImage)},m(t,l){o(t,e,l)},p(t,r){1&r&&l!==(l="https://mattbrealey.com/"+t[0].smallImage)&&n(e,"content",l)},d(t){t&&c(e)}}}function T(t){let e,l;return{c(){e=r("meta"),this.h()},l(t){e=s(t,"META",{property:!0,content:!0}),this.h()},h(){n(e,"property","twitter:image"),n(e,"content",l="https://mattbrealey.com/"+t[0].smallImage)},m(t,l){o(t,e,l)},p(t,r){1&r&&l!==(l="https://mattbrealey.com/"+t[0].smallImage)&&n(e,"content",l)},d(t){t&&c(e)}}}function L(t){let e,l,a=t[0].name+"";return{c(){e=r("span"),l=E(a),this.h()},l(t){e=s(t,"SPAN",{slot:!0});var r=j(e);l=k(r,a),r.forEach(c),this.h()},h(){n(e,"slot","title")},m(t,r){o(t,e,r),f(e,l)},p(t,e){1&e&&a!==(a=t[0].name+"")&&w(l,a)},d(t){t&&c(e)}}}function D(t){let e,l,a,h,m,p,u,g=t[11].title+"",v=t[11].url.split("//")[1]+"";return{c(){e=r("li"),l=E(g),a=E(" : "),h=r("a"),m=E(v),u=i(),this.h()},l(t){e=s(t,"LI",{});var r=j(e);l=k(r,g),a=k(r," : "),h=s(r,"A",{class:!0,href:!0,target:!0,rel:!0});var n=j(h);m=k(n,v),n.forEach(c),u=d(r),r.forEach(c),this.h()},h(){n(h,"class","pl-2 colorLink"),n(h,"href",p=t[11].url),n(h,"target","_blank"),n(h,"rel","noopener noreferrer")},m(t,r){o(t,e,r),f(e,l),f(e,a),f(e,h),f(h,m),f(e,u)},p(t,e){1&e&&g!==(g=t[11].title+"")&&w(l,g),1&e&&v!==(v=t[11].url.split("//")[1]+"")&&w(m,v),1&e&&p!==(p=t[11].url)&&n(h,"href",p)},d(t){t&&c(e)}}}function H(t){let e,l,a,h,m=t[0].features,p=[];for(let e=0;e<m.length;e+=1)p[e]=O($(t,m,e));return{c(){e=r("h2"),l=E("Features"),a=i(),h=r("div");for(let t=0;t<p.length;t+=1)p[t].c();this.h()},l(t){e=s(t,"H2",{id:!0,class:!0});var r=j(e);l=k(r,"Features"),r.forEach(c),a=d(t),h=s(t,"DIV",{class:!0});var n=j(h);for(let t=0;t<p.length;t+=1)p[t].l(n);n.forEach(c),this.h()},h(){n(e,"id","features"),n(e,"class","mt-6 text-xl text-pink-600 font-light"),n(h,"class","flex flex-wrap -mx-2 overflow-hidden sm:-mx-4")},m(t,r){o(t,e,r),f(e,l),o(t,a,r),o(t,h,r);for(let t=0;t<p.length;t+=1)p[t].m(h,null)},p(t,e){if(1&e){let l;for(m=t[0].features,l=0;l<m.length;l+=1){const r=$(t,m,l);p[l]?p[l].p(r,e):(p[l]=O(r),p[l].c(),p[l].m(h,null))}for(;l<p.length;l+=1)p[l].d(1);p.length=m.length}},d(t){t&&c(e),t&&c(a),t&&c(h),I(p,t)}}}function V(t){let e,l,a,h;return{c(){e=r("video"),l=r("source"),h=E("\n                                        Your browser does not support the video tag."),this.h()},l(t){e=s(t,"VIDEO",{autoplay:!0,loop:!0,class:!0});var r=j(e);l=s(r,"SOURCE",{src:!0,type:!0}),h=k(r,"\n                                        Your browser does not support the video tag."),r.forEach(c),this.h()},h(){l.src!==(a=t[8].video)&&n(l,"src",a),n(l,"type","video/mp4"),e.autoplay=!0,e.loop=!0,n(e,"class","absolute h-full w-full")},m(t,r){o(t,e,r),f(e,l),f(e,h)},p(t,e){1&e&&l.src!==(a=t[8].video)&&n(l,"src",a)},d(t){t&&c(e)}}}function N(t){let e,l,a;return{c(){e=r("img"),this.h()},l(t){e=s(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){n(e,"class","absolute h-full w-full object-cover"),e.src!==(l=t[8].image)&&n(e,"src",l),n(e,"alt",a=t[8].desc)},m(t,l){o(t,e,l)},p(t,r){1&r&&e.src!==(l=t[8].image)&&n(e,"src",l),1&r&&a!==(a=t[8].desc)&&n(e,"alt",a)},d(t){t&&c(e)}}}function O(t){let e,l,a,h,m,p,u,g,v,y=t[8].title+"",x=t[8].desc+"";function I(t,e){return t[8].image?N:t[8].video?V:void 0}let b=I(t),P=b&&b(t);return{c(){e=r("div"),l=r("div"),a=r("div"),P&&P.c(),h=i(),m=r("div"),p=E(y),u=i(),g=r("span"),v=i(),this.h()},l(t){e=s(t,"DIV",{class:!0});var r=j(e);l=s(r,"DIV",{class:!0});var n=j(l);a=s(n,"DIV",{class:!0});var o=j(a);P&&P.l(o),o.forEach(c),h=d(n),m=s(n,"DIV",{class:!0});var i=j(m);p=k(i,y),i.forEach(c),u=d(n),g=s(n,"SPAN",{class:!0}),j(g).forEach(c),n.forEach(c),v=d(r),r.forEach(c),this.h()},h(){n(a,"class","relative pb-2/3 rounded-md overflow-hidden"),n(m,"class","font-semibold mt-1 text-gray-900 group-hover:text-pink-500"),n(g,"class","text-sm text-gray-800"),n(l,"class","flex flex-col relative h-full"),n(e,"class","my-2 mb-4 px-2 w-full overflow-hidden sm:my-4 sm:px-4 sm:w-full md:w-1/2 xl:w-1/3")},m(t,r){o(t,e,r),f(e,l),f(l,a),P&&P.m(a,null),f(l,h),f(l,m),f(m,p),f(l,u),f(l,g),g.innerHTML=x,f(e,v)},p(t,e){b===(b=I(t))&&P?P.p(t,e):(P&&P.d(1),P=b&&b(t),P&&(P.c(),P.m(a,null))),1&e&&y!==(y=t[8].title+"")&&w(p,y),1&e&&x!==(x=t[8].desc+"")&&(g.innerHTML=x)},d(t){t&&c(e),P&&P.d()}}}function R(t){let e,l,a,h,m=t[0].todos,p=[];for(let e=0;e<m.length;e+=1)p[e]=S(P(t,m,e));return{c(){e=r("h2"),l=E("Todo List"),a=i(),h=r("ul");for(let t=0;t<p.length;t+=1)p[t].c();this.h()},l(t){e=s(t,"H2",{id:!0,class:!0});var r=j(e);l=k(r,"Todo List"),r.forEach(c),a=d(t),h=s(t,"UL",{class:!0});var n=j(h);for(let t=0;t<p.length;t+=1)p[t].l(n);n.forEach(c),this.h()},h(){n(e,"id","todo-list"),n(e,"class","mt-6 text-xl text-pink-600 font-light"),n(h,"class","list-disc")},m(t,r){o(t,e,r),f(e,l),o(t,a,r),o(t,h,r);for(let t=0;t<p.length;t+=1)p[t].m(h,null)},p(t,e){if(1&e){let l;for(m=t[0].todos,l=0;l<m.length;l+=1){const r=P(t,m,l);p[l]?p[l].p(r,e):(p[l]=S(r),p[l].c(),p[l].m(h,null))}for(;l<p.length;l+=1)p[l].d(1);p.length=m.length}},d(t){t&&c(e),t&&c(a),t&&c(h),I(p,t)}}}function S(t){let e,l,a=t[5]+"";return{c(){e=r("li"),l=E(a),this.h()},l(t){e=s(t,"LI",{class:!0});var r=j(e);l=k(r,a),r.forEach(c),this.h()},h(){n(e,"class","ml-6")},m(t,r){o(t,e,r),f(e,l)},p(t,e){1&e&&a!==(a=t[5]+"")&&w(l,a)},d(t){t&&c(e)}}}function _(t){let e,l,a,h,m,p,u=t[1].name+"";return{c(){e=r("h3"),l=E("Previous Project"),a=i(),h=r("a"),m=E(u),this.h()},l(t){e=s(t,"H3",{class:!0});var r=j(e);l=k(r,"Previous Project"),r.forEach(c),a=d(t),h=s(t,"A",{href:!0,class:!0});var n=j(h);m=k(n,u),n.forEach(c),this.h()},h(){n(e,"class","text-sm text-gray-600"),n(h,"href",p="./projects/"+t[1].slug),n(h,"class","colorLink")},m(t,r){o(t,e,r),f(e,l),o(t,a,r),o(t,h,r),f(h,m)},p(t,e){2&e&&u!==(u=t[1].name+"")&&w(m,u),2&e&&p!==(p="./projects/"+t[1].slug)&&n(h,"href",p)},d(t){t&&c(e),t&&c(a),t&&c(h)}}}function B(t){let e,l,a,h,m,p,u=t[2].name+"";return{c(){e=r("h3"),l=E("Next Project"),a=i(),h=r("a"),m=E(u),this.h()},l(t){e=s(t,"H3",{class:!0});var r=j(e);l=k(r,"Next Project"),r.forEach(c),a=d(t),h=s(t,"A",{href:!0,class:!0});var n=j(h);m=k(n,u),n.forEach(c),this.h()},h(){n(e,"class","text-sm text-gray-600"),n(h,"href",p="./projects/"+t[2].slug),n(h,"class","colorLink")},m(t,r){o(t,e,r),f(e,l),o(t,a,r),o(t,h,r),f(h,m)},p(t,e){4&e&&u!==(u=t[2].name+"")&&w(m,u),4&e&&p!==(p="./projects/"+t[2].slug)&&n(h,"href",p)},d(t){t&&c(e),t&&c(a),t&&c(h)}}}function G(t){let e,l,a,h,m,p,u,g,v,y,x,b,P,$,A,T,L,V,N,O,S,G,U,Y,q,C,F=t[0].links.length>1?"Links":"Link",W=t[0].desc+"",z=t[0].links,J=[];for(let e=0;e<z.length;e+=1)J[e]=D(M(t,z,e));let K=t[0].features.length&&H(t),Q=t[0].todos.length&&R(t),X=t[4].length&&function(t){let e,l;return{c(){e=r("h2"),l=E("Related Posts"),this.h()},l(t){e=s(t,"H2",{id:!0,class:!0});var r=j(e);l=k(r,"Related Posts"),r.forEach(c),this.h()},h(){n(e,"id","related-posts"),n(e,"class","mt-6 text-xl text-pink-600 font-light")},m(t,r){o(t,e,r),f(e,l)},d(t){t&&c(e)}}}(),Z=t[1]&&_(t),tt=t[2]&&B(t);return{c(){e=r("div"),l=r("a"),a=r("img"),u=i(),g=r("h2"),v=E(F),y=i(),x=r("ul");for(let t=0;t<J.length;t+=1)J[t].c();b=i(),P=r("h2"),$=E("What is it?"),A=i(),T=r("p"),L=i(),K&&K.c(),V=i(),Q&&Q.c(),N=i(),X&&X.c(),O=i(),S=r("hr"),G=i(),U=r("div"),Y=r("div"),Z&&Z.c(),q=i(),C=r("div"),tt&&tt.c(),this.h()},l(t){e=s(t,"DIV",{slot:!0});var r=j(e);l=s(r,"A",{href:!0,target:!0,rel:!0});var n=j(l);a=s(n,"IMG",{class:!0,src:!0,alt:!0}),n.forEach(c),u=d(r),g=s(r,"H2",{id:!0,class:!0});var o=j(g);v=k(o,F),o.forEach(c),y=d(r),x=s(r,"UL",{});var h=j(x);for(let t=0;t<J.length;t+=1)J[t].l(h);h.forEach(c),b=d(r),P=s(r,"H2",{id:!0,class:!0});var i=j(P);$=k(i,"What is it?"),i.forEach(c),A=d(r),T=s(r,"P",{class:!0}),j(T).forEach(c),L=d(r),K&&K.l(r),V=d(r),Q&&Q.l(r),N=d(r),X&&X.l(r),O=d(r),S=s(r,"HR",{class:!0}),G=d(r),U=s(r,"DIV",{class:!0});var m=j(U);Y=s(m,"DIV",{class:!0});var p=j(Y);Z&&Z.l(p),p.forEach(c),q=d(m),C=s(m,"DIV",{class:!0});var f=j(C);tt&&tt.l(f),f.forEach(c),m.forEach(c),r.forEach(c),this.h()},h(){n(a,"class","rounded-md object-cover"),a.src!==(h=t[0].largeImage)&&n(a,"src",h),n(a,"alt",m=t[0].name),n(l,"href",p=t[0].links[0].url),n(l,"target","_blank"),n(l,"rel","noopener noreferrer"),n(g,"id","links"),n(g,"class","mt-6 text-xl text-pink-600 font-light"),n(P,"id","what-is-it"),n(P,"class","mt-6 text-xl text-pink-600 font-light"),n(T,"class","mt-2 markdown"),n(S,"class","mt-12 w-full"),n(Y,"class","flex-1 pr-6"),n(C,"class","flex-1 text-right pl-6"),n(U,"class","flex justify-between pt-2"),n(e,"slot","content")},m(t,r){o(t,e,r),f(e,l),f(l,a),f(e,u),f(e,g),f(g,v),f(e,y),f(e,x);for(let t=0;t<J.length;t+=1)J[t].m(x,null);f(e,b),f(e,P),f(P,$),f(e,A),f(e,T),T.innerHTML=W,f(e,L),K&&K.m(e,null),f(e,V),Q&&Q.m(e,null),f(e,N),X&&X.m(e,null),f(e,O),f(e,S),f(e,G),f(e,U),f(U,Y),Z&&Z.m(Y,null),f(U,q),f(U,C),tt&&tt.m(C,null)},p(t,r){if(1&r&&a.src!==(h=t[0].largeImage)&&n(a,"src",h),1&r&&m!==(m=t[0].name)&&n(a,"alt",m),1&r&&p!==(p=t[0].links[0].url)&&n(l,"href",p),1&r&&F!==(F=t[0].links.length>1?"Links":"Link")&&w(v,F),1&r){let e;for(z=t[0].links,e=0;e<z.length;e+=1){const l=M(t,z,e);J[e]?J[e].p(l,r):(J[e]=D(l),J[e].c(),J[e].m(x,null))}for(;e<J.length;e+=1)J[e].d(1);J.length=z.length}1&r&&W!==(W=t[0].desc+"")&&(T.innerHTML=W),t[0].features.length?K?K.p(t,r):(K=H(t),K.c(),K.m(e,V)):K&&(K.d(1),K=null),t[0].todos.length?Q?Q.p(t,r):(Q=R(t),Q.c(),Q.m(e,N)):Q&&(Q.d(1),Q=null),t[1]?Z?Z.p(t,r):(Z=_(t),Z.c(),Z.m(Y,null)):Z&&(Z.d(1),Z=null),t[2]?tt?tt.p(t,r):(tt=B(t),tt.c(),tt.m(C,null)):tt&&(tt.d(1),tt=null)},d(t){t&&c(e),I(J,t),K&&K.d(),Q&&Q.d(),X&&X.d(),Z&&Z.d(),tt&&tt.d()}}}function U(t){let e;return{c(){e=i()},l(t){e=d(t)},m(t,l){o(t,e,l)},p:b,d(t){t&&c(e)}}}function Y(t){let e,l,E,j,k,w,I,b,P,$,M,D,H,V,N,O,R,S,_,B,Y,q;document.title=e=t[3];let C=t[0].smallImage&&A(t),F=t[0].smallImage&&T(t);const W=new a({props:{$$slots:{default:[U],content:[G],title:[L]},$$scope:{ctx:t}}});return{c(){l=r("meta"),j=r("meta"),w=r("meta"),I=r("meta"),P=r("meta"),M=r("meta"),C&&C.c(),H=r("meta"),V=r("meta"),O=r("meta"),S=r("meta"),F&&F.c(),B=h(),Y=i(),m(W.$$.fragment),this.h()},l(t){const e=p('[data-svelte="svelte-j97jsp"]',document.head);l=s(e,"META",{name:!0,content:!0}),j=s(e,"META",{name:!0,content:!0}),w=s(e,"META",{property:!0,content:!0}),I=s(e,"META",{property:!0,content:!0}),P=s(e,"META",{property:!0,content:!0}),M=s(e,"META",{property:!0,content:!0}),C&&C.l(e),H=s(e,"META",{property:!0,content:!0}),V=s(e,"META",{property:!0,content:!0}),O=s(e,"META",{property:!0,content:!0}),S=s(e,"META",{property:!0,content:!0}),F&&F.l(e),B=h(),e.forEach(c),Y=d(t),u(W.$$.fragment,t),this.h()},h(){n(l,"name","description"),n(l,"content",E=t[0].shortDesc),n(j,"name","keywords"),n(j,"content",k=t[0].keywords),n(w,"property","og:type"),n(w,"content","website"),n(I,"property","og:url"),n(I,"content",b="https://mattbrealey.com/projects/"+t[0].slug),n(P,"property","og:title"),n(P,"content",$=t[0].name),n(M,"property","og:description"),n(M,"content",D=t[0].shortDesc),n(H,"property","twitter:card"),n(H,"content","summary_large_image"),n(V,"property","twitter:url"),n(V,"content",N="https://mattbrealey.com/projects/"+t[0].slug),n(O,"property","twitter:title"),n(O,"content",R=t[0].name),n(S,"property","twitter:description"),n(S,"content",_=t[0].shortDesc)},m(t,e){f(document.head,l),f(document.head,j),f(document.head,w),f(document.head,I),f(document.head,P),f(document.head,M),C&&C.m(document.head,null),f(document.head,H),f(document.head,V),f(document.head,O),f(document.head,S),F&&F.m(document.head,null),f(document.head,B),o(t,Y,e),g(W,t,e),q=!0},p(t,[r]){(!q||8&r)&&e!==(e=t[3])&&(document.title=e),(!q||1&r&&E!==(E=t[0].shortDesc))&&n(l,"content",E),(!q||1&r&&k!==(k=t[0].keywords))&&n(j,"content",k),(!q||1&r&&b!==(b="https://mattbrealey.com/projects/"+t[0].slug))&&n(I,"content",b),(!q||1&r&&$!==($=t[0].name))&&n(P,"content",$),(!q||1&r&&D!==(D=t[0].shortDesc))&&n(M,"content",D),t[0].smallImage?C?C.p(t,r):(C=A(t),C.c(),C.m(H.parentNode,H)):C&&(C.d(1),C=null),(!q||1&r&&N!==(N="https://mattbrealey.com/projects/"+t[0].slug))&&n(V,"content",N),(!q||1&r&&R!==(R=t[0].name))&&n(O,"content",R),(!q||1&r&&_!==(_=t[0].shortDesc))&&n(S,"content",_),t[0].smallImage?F?F.p(t,r):(F=T(t),F.c(),F.m(B.parentNode,B)):F&&(F.d(1),F=null);const s={};16391&r&&(s.$$scope={dirty:r,ctx:t}),W.$set(s)},i(t){q||(v(W.$$.fragment,t),q=!0)},o(t){y(W.$$.fragment,t),q=!1},d(t){c(l),c(j),c(w),c(I),c(P),c(M),C&&C.d(t),c(H),c(V),c(O),c(S),F&&F.d(t),c(B),t&&c(Y),x(W,t)}}}async function q({params:t,query:e},l){const r=t=>{let e=Object.keys(l.projects).find(e=>l.projects[e].id==t);return e?l.projects[e]:null};if(l.projects.hasOwnProperty(t.slug)){const e=l.projects[t.slug];return{project:e,prevProject:r(e.id-1),nextProject:r(e.id+1)}}this.error(404,`I haven't made a project called ${t.slug}. Yet...`)}function C(t,e,l){let{project:r=null}=e,{prevProject:s=null}=e,{nextProject:n=null}=e,o="Matt Brealey";return t.$set=t=>{"project"in t&&l(0,r=t.project),"prevProject"in t&&l(1,s=t.prevProject),"nextProject"in t&&l(2,n=t.nextProject)},t.$$.update=()=>{1&t.$$.dirty&&l(3,o=r?`${r.name} // Matt Brealey`:"Matt Brealey")},[r,s,n,o,[]]}export default class extends t{constructor(t){super(),e(this,t,C,Y,l,{project:0,prevProject:1,nextProject:2})}}export{q as preload};
