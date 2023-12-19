import{_ as u,S as b,d as _,u as f,o as c,c as i,k as r,r as y,a as p,t as S,l as m,e as k,p as V,m as L,a2 as d,s as l,a3 as A,a4 as w,a5 as C,a6 as P,a7 as x,a8 as $,a9 as I,aa as E,ab as M,ac as R,J as j,j as D,y as N,ad as O,ae as T,af as F}from"./chunks/framework.ac4b5791.js";import{t as h}from"./chunks/theme.cf04854b.js";const B="/mp-pinia-logo.svg",U="/banners/vuejs-certification.svg";const G={},z=b('<a class="mp-banner" href="https://masteringpinia.com?utm=pinia-sidebar" target="_blank" data-v-8c9b75d2><img width="22" height="22" src="'+B+'" data-v-8c9b75d2><span data-v-8c9b75d2><p class="extra-info" data-v-8c9b75d2>Complete guide to</p><p class="heading" data-v-8c9b75d2>Mastering Pinia</p><p class="extra-info" data-v-8c9b75d2>written by its creator</p></span></a><a class="banner" href="https://certificates.dev/vuejs?friend=VUEROUTER" target="_blank" data-v-8c9b75d2><img src="'+U+'" alt="Vue.js Certification" data-v-8c9b75d2></a>',2);function H(e,t){return z}const J=u(G,[["render",H],["__scopeId","data-v-8c9b75d2"]]);const W={class:"vueschool"},q=["href","title"],K=_({__name:"VueSchoolLink",props:{href:{},title:{}},setup(e){const{site:t}=f(),a={"en-US":"Watch a free video lesson on Vue School","zh-CN":"在 Vue School 上观看免费视频课程"};return(s,o)=>(c(),i("div",W,[r("a",{href:`${s.href}?friend=vuerouter`,target:"_blank",rel:"sponsored noopener",title:s.title,class:"no-icon"},[y(s.$slots,"default",{},()=>[p(S(a[m(t).lang]),1)],!0)],8,q)]))}});const Q=u(K,[["__scopeId","data-v-8f8151a0"]]),g=e=>(V("data-v-1c5cd6d2"),e=e(),L(),e),X=["href"],Y=g(()=>r("span",{class:"logo-wrapper"},[r("img",{alt:"Vue Mastery Logo",width:"25px",src:"https://firebasestorage.googleapis.com/v0/b/vue-mastery.appspot.com/o/flamelink%2Fmedia%2Fvue-mastery-logo-small.png?alt=media&token=941fcc3a-2b6f-40e9-b4c8-56b3890da108"})],-1)),Z={key:0,class:"description"},ee=g(()=>r("span",{class:"highlight"},"Pinia Cheat Sheet",-1)),te=_({__name:"VueMasteryLogoLink",props:{for:{}},setup(e){const t=e,s={"pinia-cheat-sheet":"https://www.vuemastery.com/pinia?coupon=PINIA-DOCS&via=eduardo"}[t.for],o=t.for==="pinia-cheat-sheet";return(ie,pe)=>(c(),i("a",{href:m(s),target:"_blank"},[Y,o?(c(),i("span",Z,[p(" Get the "),ee,p(" from Vue Mastery ")])):k("",!0)],8,X))}});const ae=u(te,[["__scopeId","data-v-1c5cd6d2"]]),se={...h,Layout(){return d(h.Layout,null,{"aside-ads-before":()=>d(J)})},enhanceApp({app:e}){e.component("VueSchoolLink",Q),e.component("VueMasteryLogoLink",ae)}};function v(e){if(e.extends){const t=v(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const n=v(se),ne=_({name:"VitePressApp",setup(){const{site:e}=f();return D(()=>{N(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),O(),T(),F(),n.setup&&n.setup(),()=>d(n.Layout)}});async function oe(){const e=ce(),t=re();t.provide(w,e);const a=C(e.route);return t.provide(P,a),t.component("Content",x),t.component("ClientOnly",$),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:t,router:e,siteData:I}),{app:t,router:e,data:a}}function re(){return E(ne)}function ce(){let e=l,t;return M(a=>{let s=R(a),o=null;return s&&(e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),o=j(()=>import(s),[])),l&&(e=!1),o},n.NotFound)}l&&oe().then(({app:e,router:t,data:a})=>{t.go().then(()=>{A(t.route,a.site),e.mount("#app")})});export{oe as createApp};