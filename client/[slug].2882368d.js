import{S as t,i as l,s,q as e,u as r,v as a,o as c,p as n,x as o,G as h,k as i,H as f,g as d,D as u,I as m,e as g,t as p,b as v,d as x,f as E,j as $,l as k,B as I,a as j,h as y,E as P,C as b,J as w,F as D}from"./client.321045e1.js";import{P as L}from"./pageLayout.6a9dcba5.js";function V(t,l,s){const e=t.slice();return e[7]=l[s],e}function H(t,l,s){const e=t.slice();return e[10]=l[s],e}function A(t,l,s){const e=t.slice();return e[13]=l[s],e}function N(t){let l;const s=new L({props:{$$slots:{default:[q],content:[_],title:[G]},$$scope:{ctx:t}}});return{c(){e(s.$$.fragment)},l(t){r(s.$$.fragment,t)},m(t,e){a(s,t,e),l=!0},p(t,l){const e={};65543&l&&(e.$$scope={dirty:l,ctx:t}),s.$set(e)},i(t){l||(c(s.$$.fragment,t),l=!0)},o(t){n(s.$$.fragment,t),l=!1},d(t){o(s,t)}}}function G(t){let l,s,e=t[0].title+"";return{c(){l=g("span"),s=p(e),this.h()},l(t){l=v(t,"SPAN",{slot:!0});var r=x(l);s=E(r,e),r.forEach(d),this.h()},h(){$(l,"slot","title")},m(t,e){i(t,l,e),k(l,s)},p(t,l){1&l&&e!==(e=t[0].title+"")&&I(s,e)},d(t){t&&d(l)}}}function S(t){let l,s,e,r=t[13].split("//")[1]+"";return{c(){l=g("a"),s=p(r),this.h()},l(t){l=v(t,"A",{href:!0,target:!0,rel:!0});var e=x(l);s=E(e,r),e.forEach(d),this.h()},h(){$(l,"href",e=t[13]),$(l,"target","_blank"),$(l,"rel","noopener noreferrer")},m(t,e){i(t,l,e),k(l,s)},p(t,a){1&a&&r!==(r=t[13].split("//")[1]+"")&&I(s,r),1&a&&e!==(e=t[13])&&$(l,"href",e)},d(t){t&&d(l)}}}function M(t){let l,s,e,r,a,c,n,o,h,f,u,m,P,b=t[10].title+"",w=t[10].desc+"";return{c(){l=g("div"),s=g("div"),e=g("div"),r=g("img"),n=j(),o=g("div"),h=p(b),f=j(),u=g("span"),m=p(w),P=j(),this.h()},l(t){l=v(t,"DIV",{class:!0});var a=x(l);s=v(a,"DIV",{class:!0});var c=x(s);e=v(c,"DIV",{class:!0});var i=x(e);r=v(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(d),n=y(c),o=v(c,"DIV",{class:!0});var g=x(o);h=E(g,b),g.forEach(d),f=y(c),u=v(c,"SPAN",{class:!0});var p=x(u);m=E(p,w),p.forEach(d),c.forEach(d),P=y(a),a.forEach(d),this.h()},h(){$(r,"class","absolute h-full w-full object-cover"),r.src!==(a=t[10].image)&&$(r,"src",a),$(r,"alt",c=t[10].desc),$(e,"class","relative pb-2/3 rounded-md overflow-hidden"),$(o,"class","font-semibold mt-1 text-gray-900 group-hover:text-pink-500"),$(u,"class","text-sm text-gray-800"),$(s,"class","flex flex-col relative h-full cursor-pointer"),$(l,"class","my-2 mb-4 px-2 w-full overflow-hidden sm:my-4 sm:px-4 sm:w-full md:w-1/2 xl:w-1/3")},m(t,a){i(t,l,a),k(l,s),k(s,e),k(e,r),k(s,n),k(s,o),k(o,h),k(s,f),k(s,u),k(u,m),k(l,P)},p(t,l){1&l&&r.src!==(a=t[10].image)&&$(r,"src",a),1&l&&c!==(c=t[10].desc)&&$(r,"alt",c),1&l&&b!==(b=t[10].title+"")&&I(h,b),1&l&&w!==(w=t[10].desc+"")&&I(m,w)},d(t){t&&d(l)}}}function R(t){let l,s,e=t[7]+"";return{c(){l=g("li"),s=p(e),this.h()},l(t){l=v(t,"LI",{class:!0});var r=x(l);s=E(r,e),r.forEach(d),this.h()},h(){$(l,"class","ml-6")},m(t,e){i(t,l,e),k(l,s)},p(t,l){1&l&&e!==(e=t[7]+"")&&I(s,e)},d(t){t&&d(l)}}}function T(t){let l,s,e,r,a,c,n=t[1].title+"";return{c(){l=g("h3"),s=p("Prev Project"),e=j(),r=g("a"),a=p(n),this.h()},l(t){l=v(t,"H3",{class:!0});var c=x(l);s=E(c,"Prev Project"),c.forEach(d),e=y(t),r=v(t,"A",{href:!0,class:!0});var o=x(r);a=E(o,n),o.forEach(d),this.h()},h(){$(l,"class","text-sm text-gray-600"),$(r,"href",c="./projects/"+t[1].slug),$(r,"class","colorLink")},m(t,c){i(t,l,c),k(l,s),i(t,e,c),i(t,r,c),k(r,a)},p(t,l){2&l&&n!==(n=t[1].title+"")&&I(a,n),2&l&&c!==(c="./projects/"+t[1].slug)&&$(r,"href",c)},d(t){t&&d(l),t&&d(e),t&&d(r)}}}function W(t){let l,s,e,r,a,c,n=t[2].title+"";return{c(){l=g("h3"),s=p("Next Project"),e=j(),r=g("a"),a=p(n),this.h()},l(t){l=v(t,"H3",{class:!0});var c=x(l);s=E(c,"Next Project"),c.forEach(d),e=y(t),r=v(t,"A",{href:!0,class:!0});var o=x(r);a=E(o,n),o.forEach(d),this.h()},h(){$(l,"class","text-sm text-gray-600"),$(r,"href",c="./projects/"+t[2].slug),$(r,"class","colorLink")},m(t,c){i(t,l,c),k(l,s),i(t,e,c),i(t,r,c),k(r,a)},p(t,l){4&l&&n!==(n=t[2].title+"")&&I(a,n),4&l&&c!==(c="./projects/"+t[2].slug)&&$(r,"href",c)},d(t){t&&d(l),t&&d(e),t&&d(r)}}}function _(t){let l,s,e,r,a,c,n,o,h,f,u,m,b,w,D,L,N,G,_,q,B,C,F,J,U,z,K,O,Q,X,Y,Z=t[0].desc+"",tt=t[0].links,lt=[];for(let l=0;l<tt.length;l+=1)lt[l]=S(A(t,tt,l));let st=t[0].features,et=[];for(let l=0;l<st.length;l+=1)et[l]=M(H(t,st,l));let rt=t[0].todos,at=[];for(let l=0;l<rt.length;l+=1)at[l]=R(V(t,rt,l));let ct=t[1]&&T(t),nt=t[2]&&W(t);return{c(){l=g("div"),s=g("a"),e=g("img"),n=j(),o=g("h2"),h=p("Links"),f=j();for(let t=0;t<lt.length;t+=1)lt[t].c();u=j(),m=g("h2"),b=p("What is it?"),w=j(),D=g("p"),L=p(Z),N=j(),G=g("div");for(let t=0;t<et.length;t+=1)et[t].c();_=j(),q=g("h2"),B=p("Todo List"),C=j(),F=g("ul");for(let t=0;t<at.length;t+=1)at[t].c();J=j(),U=g("h2"),z=p("Related Posts"),K=j(),O=g("div"),Q=g("div"),ct&&ct.c(),X=j(),Y=g("div"),nt&&nt.c(),this.h()},l(t){l=v(t,"DIV",{slot:!0});var r=x(l);s=v(r,"A",{href:!0,target:!0,rel:!0});var a=x(s);e=v(a,"IMG",{class:!0,src:!0,alt:!0}),a.forEach(d),n=y(r),o=v(r,"H2",{class:!0});var c=x(o);h=E(c,"Links"),c.forEach(d),f=y(r);for(let t=0;t<lt.length;t+=1)lt[t].l(r);u=y(r),m=v(r,"H2",{class:!0});var i=x(m);b=E(i,"What is it?"),i.forEach(d),w=y(r),D=v(r,"P",{class:!0});var g=x(D);L=E(g,Z),g.forEach(d),N=y(r),G=v(r,"DIV",{class:!0});var p=x(G);for(let t=0;t<et.length;t+=1)et[t].l(p);p.forEach(d),_=y(r),q=v(r,"H2",{class:!0});var $=x(q);B=E($,"Todo List"),$.forEach(d),C=y(r),F=v(r,"UL",{class:!0});var k=x(F);for(let t=0;t<at.length;t+=1)at[t].l(k);k.forEach(d),J=y(r),U=v(r,"H2",{class:!0});var I=x(U);z=E(I,"Related Posts"),I.forEach(d),K=y(r),O=v(r,"DIV",{class:!0});var j=x(O);Q=v(j,"DIV",{class:!0});var P=x(Q);ct&&ct.l(P),P.forEach(d),X=y(j),Y=v(j,"DIV",{class:!0});var V=x(Y);nt&&nt.l(V),V.forEach(d),j.forEach(d),r.forEach(d),this.h()},h(){$(e,"class","rounded-md object-cover"),e.src!==(r=t[0].largeImage)&&$(e,"src",r),$(e,"alt",a=t[0].title),$(s,"href",c=t[0].links[0]),$(s,"target","_blank"),$(s,"rel","noopener noreferrer"),$(o,"class","mt-6 text-xl text-pink-600 font-light"),$(m,"class","mt-6 text-xl text-pink-600 font-light"),$(D,"class","mt-2"),$(G,"class","flex flex-wrap -mx-2 overflow-hidden sm:-mx-4"),$(q,"class","mt-6 text-xl text-pink-600 font-light"),$(F,"class","list-disc"),$(U,"class","mt-6 text-xl text-pink-600 font-light"),$(Q,"class","flex-1 pr-6"),$(Y,"class","flex-1 text-right pl-6"),$(O,"class","flex justify-between mt-6"),$(l,"slot","content")},m(t,r){i(t,l,r),k(l,s),k(s,e),k(l,n),k(l,o),k(o,h),k(l,f);for(let t=0;t<lt.length;t+=1)lt[t].m(l,null);k(l,u),k(l,m),k(m,b),k(l,w),k(l,D),k(D,L),k(l,N),k(l,G);for(let t=0;t<et.length;t+=1)et[t].m(G,null);k(l,_),k(l,q),k(q,B),k(l,C),k(l,F);for(let t=0;t<at.length;t+=1)at[t].m(F,null);k(l,J),k(l,U),k(U,z),k(l,K),k(l,O),k(O,Q),ct&&ct.m(Q,null),k(O,X),k(O,Y),nt&&nt.m(Y,null)},p(t,n){if(1&n&&e.src!==(r=t[0].largeImage)&&$(e,"src",r),1&n&&a!==(a=t[0].title)&&$(e,"alt",a),1&n&&c!==(c=t[0].links[0])&&$(s,"href",c),1&n){let s;for(tt=t[0].links,s=0;s<tt.length;s+=1){const e=A(t,tt,s);lt[s]?lt[s].p(e,n):(lt[s]=S(e),lt[s].c(),lt[s].m(l,u))}for(;s<lt.length;s+=1)lt[s].d(1);lt.length=tt.length}if(1&n&&Z!==(Z=t[0].desc+"")&&I(L,Z),1&n){let l;for(st=t[0].features,l=0;l<st.length;l+=1){const s=H(t,st,l);et[l]?et[l].p(s,n):(et[l]=M(s),et[l].c(),et[l].m(G,null))}for(;l<et.length;l+=1)et[l].d(1);et.length=st.length}if(1&n){let l;for(rt=t[0].todos,l=0;l<rt.length;l+=1){const s=V(t,rt,l);at[l]?at[l].p(s,n):(at[l]=R(s),at[l].c(),at[l].m(F,null))}for(;l<at.length;l+=1)at[l].d(1);at.length=rt.length}t[1]?ct?ct.p(t,n):(ct=T(t),ct.c(),ct.m(Q,null)):ct&&(ct.d(1),ct=null),t[2]?nt?nt.p(t,n):(nt=W(t),nt.c(),nt.m(Y,null)):nt&&(nt.d(1),nt=null)},d(t){t&&d(l),P(lt,t),P(et,t),P(at,t),ct&&ct.d(),nt&&nt.d()}}}function q(t){let l;return{c(){l=j()},l(t){l=y(t)},m(t,s){i(t,l,s)},p:b,d(t){t&&d(l)}}}function B(t){let l,s,e=t[0]&&N(t);return{c(){e&&e.c(),l=h()},l(t){e&&e.l(t),l=h()},m(t,r){e&&e.m(t,r),i(t,l,r),s=!0},p(t,[s]){t[0]?e?(e.p(t,s),c(e,1)):(e=N(t),e.c(),c(e,1),e.m(l.parentNode,l)):e&&(w(),n(e,1,1,()=>{e=null}),f())},i(t){s||(c(e),s=!0)},o(t){n(e),s=!1},d(t){e&&e.d(t),t&&d(l)}}}function C(t,l,s){let e,r;u(t,D,t=>s(6,r=t));const{page:a}=m();u(t,a,t=>s(5,e=t));let c,n,o=null,h=null;return t.$$.update=()=>{32&t.$$.dirty&&s(4,o=e.params.slug),80&t.$$.dirty&&s(0,h=o&&r.find(t=>t.slug==o)),65&t.$$.dirty&&s(1,c=h&&r.find(t=>t.id==h.id-1)),65&t.$$.dirty&&s(2,n=h&&r.find(t=>t.id==h.id+1))},[h,c,n,a]}export default class extends t{constructor(t){super(),l(this,t,C,B,s,{})}}
