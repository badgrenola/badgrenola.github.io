import{S as t,i as l,s,C as e,q as a,u as r,v as c,o as n,p as o,x as h,G as i,a as f,r as d,g as u,h as m,l as g,k as p,H as v,E as x,I as E,e as $,t as k,b as I,d as j,f as y,j as b,B as w,D as P,J as L,F as D}from"./client.dc38b3fb.js";import{P as H}from"./pageLayout.085be1a2.js";function V(t,l,s){const e=t.slice();return e[7]=l[s],e}function A(t,l,s){const e=t.slice();return e[10]=l[s],e}function N(t,l,s){const e=t.slice();return e[13]=l[s],e}function F(t){let l;return document.title=l=t[0].name+" // Matt Brealey",{c:e,l:e,m:e,d:e}}function G(t){let l;const s=new H({props:{$$slots:{default:[C],content:[q],title:[M]},$$scope:{ctx:t}}});return{c(){a(s.$$.fragment)},l(t){r(s.$$.fragment,t)},m(t,e){c(s,t,e),l=!0},p(t,l){const e={};65543&l&&(e.$$scope={dirty:l,ctx:t}),s.$set(e)},i(t){l||(n(s.$$.fragment,t),l=!0)},o(t){o(s.$$.fragment,t),l=!1},d(t){h(s,t)}}}function M(t){let l,s,e=t[0].name+"";return{c(){l=$("span"),s=k(e),this.h()},l(t){l=I(t,"SPAN",{slot:!0});var a=j(l);s=y(a,e),a.forEach(u),this.h()},h(){b(l,"slot","title")},m(t,e){p(t,l,e),g(l,s)},p(t,l){1&l&&e!==(e=t[0].name+"")&&w(s,e)},d(t){t&&u(l)}}}function R(t){let l,s,e,a=t[13].split("//")[1]+"";return{c(){l=$("a"),s=k(a),this.h()},l(t){l=I(t,"A",{href:!0,target:!0,rel:!0});var e=j(l);s=y(e,a),e.forEach(u),this.h()},h(){b(l,"href",e=t[13]),b(l,"target","_blank"),b(l,"rel","noopener noreferrer")},m(t,e){p(t,l,e),g(l,s)},p(t,r){1&r&&a!==(a=t[13].split("//")[1]+"")&&w(s,a),1&r&&e!==(e=t[13])&&b(l,"href",e)},d(t){t&&u(l)}}}function S(t){let l,s,e,a,r,c,n,o,h,i,d,v,x,E=t[10].title+"",P=t[10].desc+"";return{c(){l=$("div"),s=$("div"),e=$("div"),a=$("img"),n=f(),o=$("div"),h=k(E),i=f(),d=$("span"),v=k(P),x=f(),this.h()},l(t){l=I(t,"DIV",{class:!0});var r=j(l);s=I(r,"DIV",{class:!0});var c=j(s);e=I(c,"DIV",{class:!0});var f=j(e);a=I(f,"IMG",{class:!0,src:!0,alt:!0}),f.forEach(u),n=m(c),o=I(c,"DIV",{class:!0});var g=j(o);h=y(g,E),g.forEach(u),i=m(c),d=I(c,"SPAN",{class:!0});var p=j(d);v=y(p,P),p.forEach(u),c.forEach(u),x=m(r),r.forEach(u),this.h()},h(){b(a,"class","absolute h-full w-full object-cover"),a.src!==(r=t[10].image)&&b(a,"src",r),b(a,"alt",c=t[10].desc),b(e,"class","relative pb-2/3 rounded-md overflow-hidden"),b(o,"class","font-semibold mt-1 text-gray-900 group-hover:text-pink-500"),b(d,"class","text-sm text-gray-800"),b(s,"class","flex flex-col relative h-full cursor-pointer"),b(l,"class","my-2 mb-4 px-2 w-full overflow-hidden sm:my-4 sm:px-4 sm:w-full md:w-1/2 xl:w-1/3")},m(t,r){p(t,l,r),g(l,s),g(s,e),g(e,a),g(s,n),g(s,o),g(o,h),g(s,i),g(s,d),g(d,v),g(l,x)},p(t,l){1&l&&a.src!==(r=t[10].image)&&b(a,"src",r),1&l&&c!==(c=t[10].desc)&&b(a,"alt",c),1&l&&E!==(E=t[10].title+"")&&w(h,E),1&l&&P!==(P=t[10].desc+"")&&w(v,P)},d(t){t&&u(l)}}}function B(t){let l,s,e,a,r=t[0].todos,c=[];for(let l=0;l<r.length;l+=1)c[l]=T(V(t,r,l));return{c(){l=$("h2"),s=k("Todo List"),e=f(),a=$("ul");for(let t=0;t<c.length;t+=1)c[t].c();this.h()},l(t){l=I(t,"H2",{class:!0});var r=j(l);s=y(r,"Todo List"),r.forEach(u),e=m(t),a=I(t,"UL",{class:!0});var n=j(a);for(let t=0;t<c.length;t+=1)c[t].l(n);n.forEach(u),this.h()},h(){b(l,"class","mt-6 text-xl text-pink-600 font-light"),b(a,"class","list-disc")},m(t,r){p(t,l,r),g(l,s),p(t,e,r),p(t,a,r);for(let t=0;t<c.length;t+=1)c[t].m(a,null)},p(t,l){if(1&l){let s;for(r=t[0].todos,s=0;s<r.length;s+=1){const e=V(t,r,s);c[s]?c[s].p(e,l):(c[s]=T(e),c[s].c(),c[s].m(a,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=r.length}},d(t){t&&u(l),t&&u(e),t&&u(a),P(c,t)}}}function T(t){let l,s,e=t[7]+"";return{c(){l=$("li"),s=k(e),this.h()},l(t){l=I(t,"LI",{class:!0});var a=j(l);s=y(a,e),a.forEach(u),this.h()},h(){b(l,"class","ml-6")},m(t,e){p(t,l,e),g(l,s)},p(t,l){1&l&&e!==(e=t[7]+"")&&w(s,e)},d(t){t&&u(l)}}}function W(t){let l,s,e,a,r,c,n=t[1].name+"";return{c(){l=$("h3"),s=k("Previous Project"),e=f(),a=$("a"),r=k(n),this.h()},l(t){l=I(t,"H3",{class:!0});var c=j(l);s=y(c,"Previous Project"),c.forEach(u),e=m(t),a=I(t,"A",{href:!0,class:!0});var o=j(a);r=y(o,n),o.forEach(u),this.h()},h(){b(l,"class","text-sm text-gray-600"),b(a,"href",c="./projects/"+t[1].slug),b(a,"class","colorLink")},m(t,c){p(t,l,c),g(l,s),p(t,e,c),p(t,a,c),g(a,r)},p(t,l){2&l&&n!==(n=t[1].name+"")&&w(r,n),2&l&&c!==(c="./projects/"+t[1].slug)&&b(a,"href",c)},d(t){t&&u(l),t&&u(e),t&&u(a)}}}function _(t){let l,s,e,a,r,c,n=t[2].name+"";return{c(){l=$("h3"),s=k("Next Project"),e=f(),a=$("a"),r=k(n),this.h()},l(t){l=I(t,"H3",{class:!0});var c=j(l);s=y(c,"Next Project"),c.forEach(u),e=m(t),a=I(t,"A",{href:!0,class:!0});var o=j(a);r=y(o,n),o.forEach(u),this.h()},h(){b(l,"class","text-sm text-gray-600"),b(a,"href",c="./projects/"+t[2].slug),b(a,"class","colorLink")},m(t,c){p(t,l,c),g(l,s),p(t,e,c),p(t,a,c),g(a,r)},p(t,l){4&l&&n!==(n=t[2].name+"")&&w(r,n),4&l&&c!==(c="./projects/"+t[2].slug)&&b(a,"href",c)},d(t){t&&u(l),t&&u(e),t&&u(a)}}}function q(t){let l,s,e,a,r,c,n,o,h,i,d,v,x,E,L,D,H,V,F,G,M,T,q,C,J,U,z,K,O,Q,X,Y,Z=t[0].links.length>1?"Links":"Link",tt=t[0].desc+"",lt=t[0].links,st=[];for(let l=0;l<lt.length;l+=1)st[l]=R(N(t,lt,l));let et=t[0].features,at=[];for(let l=0;l<et.length;l+=1)at[l]=S(A(t,et,l));let rt=t[0].todos.length&&B(t),ct=t[1]&&W(t),nt=t[2]&&_(t);return{c(){l=$("div"),s=$("a"),e=$("img"),n=f(),o=$("h2"),h=k(Z),i=f();for(let t=0;t<st.length;t+=1)st[t].c();d=f(),v=$("h2"),x=k("What is it?"),E=f(),L=$("p"),D=k(tt),H=f(),V=$("h2"),F=k("Features"),G=f(),M=$("div");for(let t=0;t<at.length;t+=1)at[t].c();T=f(),rt&&rt.c(),q=f(),C=$("h2"),J=k("Related Posts"),U=f(),z=$("hr"),K=f(),O=$("div"),Q=$("div"),ct&&ct.c(),X=f(),Y=$("div"),nt&&nt.c(),this.h()},l(t){l=I(t,"DIV",{slot:!0});var a=j(l);s=I(a,"A",{href:!0,target:!0,rel:!0});var r=j(s);e=I(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(u),n=m(a),o=I(a,"H2",{class:!0});var c=j(o);h=y(c,Z),c.forEach(u),i=m(a);for(let t=0;t<st.length;t+=1)st[t].l(a);d=m(a),v=I(a,"H2",{class:!0});var f=j(v);x=y(f,"What is it?"),f.forEach(u),E=m(a),L=I(a,"P",{class:!0});var g=j(L);D=y(g,tt),g.forEach(u),H=m(a),V=I(a,"H2",{class:!0});var p=j(V);F=y(p,"Features"),p.forEach(u),G=m(a),M=I(a,"DIV",{class:!0});var $=j(M);for(let t=0;t<at.length;t+=1)at[t].l($);$.forEach(u),T=m(a),rt&&rt.l(a),q=m(a),C=I(a,"H2",{class:!0});var k=j(C);J=y(k,"Related Posts"),k.forEach(u),U=m(a),z=I(a,"HR",{class:!0}),K=m(a),O=I(a,"DIV",{class:!0});var b=j(O);Q=I(b,"DIV",{class:!0});var w=j(Q);ct&&ct.l(w),w.forEach(u),X=m(b),Y=I(b,"DIV",{class:!0});var P=j(Y);nt&&nt.l(P),P.forEach(u),b.forEach(u),a.forEach(u),this.h()},h(){b(e,"class","rounded-md object-cover"),e.src!==(a=t[0].largeImage)&&b(e,"src",a),b(e,"alt",r=t[0].name),b(s,"href",c=t[0].links[0]),b(s,"target","_blank"),b(s,"rel","noopener noreferrer"),b(o,"class","mt-6 text-xl text-pink-600 font-light"),b(v,"class","mt-6 text-xl text-pink-600 font-light"),b(L,"class","mt-2"),b(V,"class","mt-6 text-xl text-pink-600 font-light"),b(M,"class","flex flex-wrap -mx-2 overflow-hidden sm:-mx-4"),b(C,"class","mt-6 text-xl text-pink-600 font-light"),b(z,"class","mt-12 w-full"),b(Q,"class","flex-1 pr-6"),b(Y,"class","flex-1 text-right pl-6"),b(O,"class","flex justify-between pt-2"),b(l,"slot","content")},m(t,a){p(t,l,a),g(l,s),g(s,e),g(l,n),g(l,o),g(o,h),g(l,i);for(let t=0;t<st.length;t+=1)st[t].m(l,null);g(l,d),g(l,v),g(v,x),g(l,E),g(l,L),g(L,D),g(l,H),g(l,V),g(V,F),g(l,G),g(l,M);for(let t=0;t<at.length;t+=1)at[t].m(M,null);g(l,T),rt&&rt.m(l,null),g(l,q),g(l,C),g(C,J),g(l,U),g(l,z),g(l,K),g(l,O),g(O,Q),ct&&ct.m(Q,null),g(O,X),g(O,Y),nt&&nt.m(Y,null)},p(t,n){if(1&n&&e.src!==(a=t[0].largeImage)&&b(e,"src",a),1&n&&r!==(r=t[0].name)&&b(e,"alt",r),1&n&&c!==(c=t[0].links[0])&&b(s,"href",c),1&n&&Z!==(Z=t[0].links.length>1?"Links":"Link")&&w(h,Z),1&n){let s;for(lt=t[0].links,s=0;s<lt.length;s+=1){const e=N(t,lt,s);st[s]?st[s].p(e,n):(st[s]=R(e),st[s].c(),st[s].m(l,d))}for(;s<st.length;s+=1)st[s].d(1);st.length=lt.length}if(1&n&&tt!==(tt=t[0].desc+"")&&w(D,tt),1&n){let l;for(et=t[0].features,l=0;l<et.length;l+=1){const s=A(t,et,l);at[l]?at[l].p(s,n):(at[l]=S(s),at[l].c(),at[l].m(M,null))}for(;l<at.length;l+=1)at[l].d(1);at.length=et.length}t[0].todos.length?rt?rt.p(t,n):(rt=B(t),rt.c(),rt.m(l,q)):rt&&(rt.d(1),rt=null),t[1]?ct?ct.p(t,n):(ct=W(t),ct.c(),ct.m(Q,null)):ct&&(ct.d(1),ct=null),t[2]?nt?nt.p(t,n):(nt=_(t),nt.c(),nt.m(Y,null)):nt&&(nt.d(1),nt=null)},d(t){t&&u(l),P(st,t),P(at,t),rt&&rt.d(),ct&&ct.d(),nt&&nt.d()}}}function C(t){let l;return{c(){l=f()},l(t){l=m(t)},m(t,s){p(t,l,s)},p:e,d(t){t&&u(l)}}}function J(t){let l,s,e,a,r=t[0]&&F(t),c=t[0]&&G(t);return{c(){r&&r.c(),l=i(),s=f(),c&&c.c(),e=i()},l(t){const a=d('[data-svelte="svelte-1uxvasu"]',document.head);r&&r.l(a),l=i(),a.forEach(u),s=m(t),c&&c.l(t),e=i()},m(t,n){r&&r.m(document.head,null),g(document.head,l),p(t,s,n),c&&c.m(t,n),p(t,e,n),a=!0},p(t,[s]){t[0]?r||(r=F(t),r.c(),r.m(l.parentNode,l)):r&&(r.d(1),r=null),t[0]?c?(c.p(t,s),n(c,1)):(c=G(t),c.c(),n(c,1),c.m(e.parentNode,e)):c&&(L(),o(c,1,1,()=>{c=null}),v())},i(t){a||(n(c),a=!0)},o(t){o(c),a=!1},d(t){r&&r.d(t),u(l),t&&u(s),c&&c.d(t),t&&u(e)}}}function U(t,l,s){let e,a;x(t,D,t=>s(6,a=t));const{page:r}=E();x(t,r,t=>s(5,e=t));let c,n,o=null,h=null;return t.$$.update=()=>{32&t.$$.dirty&&s(4,o=e.params.slug),80&t.$$.dirty&&s(0,h=o&&a.find(t=>t.slug==o)),65&t.$$.dirty&&s(1,c=h&&a.find(t=>t.id==h.id-1)),65&t.$$.dirty&&s(2,n=h&&a.find(t=>t.id==h.id+1))},[h,c,n,r]}export default class extends t{constructor(t){super(),l(this,t,U,J,s,{})}}
