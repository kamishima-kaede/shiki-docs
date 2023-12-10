import{i as z,c as Ze,e as et,a as tt,b as nt,d as st,f as ye,h as Ae,g as ot,j as it,k as rt,l as Ce,m as at,s as lt,r as ct,n as h,o as Ee,p as ut,q as W,t as dt,w as pt,u as b,v as N,_ as w,x as d,y as f,z as c,A as x,B as ee,C as E,D as p,E as Pe,F as C,G as Te,H as Ie,I as Re,J as O,K as F,L as M,M as q,N as te,O as g,P as $,Q as B,R as ft,S as Ne,T as Y,U as ht,V as P}from"./plugin-vue_export-helper.0b0d78d5.js";const _t="modulepreload",le={},mt="/",je=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${mt}${s}`,s in le)return;le[s]=!0;const o=s.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":_t,o||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),o)return new Promise((a,l)=>{i.addEventListener("load",a),i.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},vt="http://www.w3.org/2000/svg",R=typeof document!="undefined"?document:null,ce=R&&R.createElement("template"),gt={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t?R.createElementNS(vt,e):R.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>R.createTextNode(e),createComment:e=>R.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>R.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{ce.innerHTML=s?`<svg>${e}</svg>`:e;const a=ce.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function xt(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function bt(e,t,n){const s=e.style,o=z(n);if(n&&!o){for(const r in n)Q(s,r,n[r]);if(t&&!z(t))for(const r in t)n[r]==null&&Q(s,r,"")}else{const r=s.display;o?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const ue=/\s*!important$/;function Q(e,t,n){if(ye(n))n.forEach(s=>Q(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=kt(e,t);ue.test(n)?e.setProperty(Ae(s),n.replace(ue,""),"important"):e[s]=n}}const de=["Webkit","Moz","ms"],G={};function kt(e,t){const n=G[t];if(n)return n;let s=ot(t);if(s!=="filter"&&s in e)return G[t]=s;s=it(s);for(let o=0;o<de.length;o++){const r=de[o]+s;if(r in e)return G[t]=r}return t}const pe="http://www.w3.org/1999/xlink";function $t(e,t,n,s,o){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(pe,t.slice(6,t.length)):e.setAttributeNS(pe,t,n);else{const r=rt(t);n==null||r&&!Ce(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function wt(e,t,n,s,o,r,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,o,r),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ce(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function Lt(e,t,n,s){e.addEventListener(t,n,s)}function St(e,t,n,s){e.removeEventListener(t,n,s)}function yt(e,t,n,s,o=null){const r=e._vei||(e._vei={}),i=r[t];if(s&&i)i.value=s;else{const[a,l]=At(t);if(s){const u=r[t]=Pt(s,o);Lt(e,a,u,l)}else i&&(St(e,a,i,l),r[t]=void 0)}}const fe=/(?:Once|Passive|Capture)$/;function At(e){let t;if(fe.test(e)){t={};let s;for(;s=e.match(fe);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ae(e.slice(2)),t]}let K=0;const Ct=Promise.resolve(),Et=()=>K||(Ct.then(()=>K=0),K=Date.now());function Pt(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;at(Tt(s,n.value),t,5,[s])};return n.value=e,n.attached=Et(),n}function Tt(e,t){if(ye(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const he=/^on[a-z]/,It=(e,t,n,s,o=!1,r,i,a,l)=>{t==="class"?xt(e,s,o):t==="style"?bt(e,n,s):tt(t)?nt(t)||yt(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Rt(e,t,s,o))?wt(e,t,s,r,i,a,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),$t(e,t,s,o))};function Rt(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&he.test(t)&&st(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||he.test(t)&&z(n)?!1:t in e}const Nt=et({patchProp:It},gt);let J,_e=!1;function jt(){return J=_e?J:Ze(Nt),_e=!0,J}const Bt=(...e)=>{const t=jt().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Ht(s);if(o)return n(o,!0,o instanceof SVGElement)},t};function Ht(e){return z(e)?document.querySelector(e):e}var zt='{"lang":"en-US","title":"Vuex","description":"Centralized State Management for Vue.js","base":"/","head":[["link",{"rel":"icon","href":"/logo.png"}],["link",{"rel":"apple-touch-icon","href":"/icons/apple-touch-icon-152x152.png"}],["link",{"rel":"mask-icon","href":"/icons/safari-pinned-tab.svg","color":"#3eaf7c"}],["meta",{"name":"msapplication-TileImage","content":"/icons/msapplication-icon-144x144.png"}]],"themeConfig":{"repo":"vuejs/vuex","docsDir":"docs","docsBranch":"main","editLinks":true,"locales":{"/":{"label":"English","selectText":"Languages","editLinkText":"Edit this page on GitHub","lastUpdated":"Last Updated","nav":[{"text":"Guide","link":"/guide/"},{"text":"API Reference","link":"/api/"},{"text":"Release Notes","link":"https://github.com/vuejs/vuex/releases"},{"text":"v4.x","items":[{"text":"v3.x","link":"https://v3.vuex.vuejs.org/"}]}],"sidebar":[{"text":"Introduction","children":[{"text":"What is Vuex?","link":"/"},{"text":"Installation","link":"/installation"},{"text":"Getting Started","link":"/guide/"}]},{"text":"Core Concepts","children":[{"text":"State","link":"/guide/state"},{"text":"Getters","link":"/guide/getters"},{"text":"Mutations","link":"/guide/mutations"},{"text":"Actions","link":"/guide/actions"},{"text":"Modules","link":"/guide/modules"}]},{"text":"Advanced","children":[{"text":"Application Structure","link":"/guide/structure"},{"text":"Composition API","link":"/guide/composition-api"},{"text":"Plugins","link":"/guide/plugins"},{"text":"Strict Mode","link":"/guide/strict"},{"text":"Form Handling","link":"/guide/forms"},{"text":"Testing","link":"/guide/testing"},{"text":"Hot Reloading","link":"/guide/hot-reload"},{"text":"TypeScript Support","link":"/guide/typescript-support"}]},{"text":"Migration Guide","children":[{"text":"Migrating to 4.0 from 3.x","link":"/guide/migrating-to-4-0-from-3-x"}]}]},"/zh/":{"label":"\u7B80\u4F53\u4E2D\u6587","selectText":"\u9009\u62E9\u8BED\u8A00","editLinkText":"\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875","lastUpdated":"\u6700\u8FD1\u66F4\u65B0\u65F6\u95F4","nav":[{"text":"\u6307\u5357","link":"/zh/guide/"},{"text":"API \u53C2\u8003","link":"/zh/api/"},{"text":"\u66F4\u65B0\u8BB0\u5F55","link":"https://github.com/vuejs/vuex/releases"},{"text":"v4.x","items":[{"text":"v3.x","link":"https://v3.vuex.vuejs.org/zh"}]}],"sidebar":[{"text":"\u4ECB\u7ECD","children":[{"text":"Vuex \u662F\u4EC0\u4E48?","link":"/zh/"},{"text":"\u5B89\u88C5","link":"/zh/installation"},{"text":"\u5F00\u59CB","link":"/zh/guide/"}]},{"text":"\u6838\u5FC3\u6982\u5FF5","children":[{"text":"State","link":"/zh/guide/state"},{"text":"Getter","link":"/zh/guide/getters"},{"text":"Mutation","link":"/zh/guide/mutations"},{"text":"Action","link":"/zh/guide/actions"},{"text":"Module","link":"/zh/guide/modules"}]},{"text":"\u8FDB\u9636","children":[{"text":"\u9879\u76EE\u7ED3\u6784","link":"/zh/guide/structure"},{"text":"\u7EC4\u5408\u5F0F API","link":"/zh/guide/composition-api"},{"text":"\u63D2\u4EF6","link":"/zh/guide/plugins"},{"text":"\u4E25\u683C\u6A21\u5F0F","link":"/zh/guide/strict"},{"text":"\u8868\u5355\u5904\u7406","link":"/zh/guide/forms"},{"text":"\u6D4B\u8BD5","link":"/zh/guide/testing"},{"text":"\u70ED\u91CD\u8F7D","link":"/zh/guide/hot-reload"},{"text":"TypeScript \u652F\u6301","link":"/zh/guide/typescript-support"}]},{"text":"\u8FC1\u79FB\u6307\u5357","children":[{"text":"\u4ECE 3.x \u8FC1\u79FB\u5230 4.0","link":"/zh/guide/migrating-to-4-0-from-3-x"}]}]},"/ja/":{"label":"\u65E5\u672C\u8A9E","selectText":"\u8A00\u8A9E","editLinkText":"GitHub \u4E0A\u3067\u3053\u306E\u30DA\u30FC\u30B8\u3092\u7DE8\u96C6\u3059\u308B","lastUpdated":"\u6700\u7D42\u66F4\u65B0\u65E5\u6642","nav":[{"text":"\u30AC\u30A4\u30C9","link":"/ja/guide/"},{"text":"API \u30EA\u30D5\u30A1\u30EC\u30F3\u30B9","link":"/ja/api/"},{"text":"\u30EA\u30EA\u30FC\u30B9\u30CE\u30FC\u30C8","link":"https://github.com/vuejs/vuex/releases"},{"text":"v4.x","items":[{"text":"v3.x","link":"https://v3.vuex.vuejs.org/ja"}]}],"sidebar":[{"text":"\u306F\u3058\u3081\u306B","children":[{"text":"Vuex \u3068\u306F\u4F55\u304B\uFF1F","link":"/ja/"},{"text":"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB","link":"/ja/installation"},{"text":"Vuex \u5165\u9580","link":"/ja/guide/"}]},{"text":"\u30B3\u30A2\u30B3\u30F3\u30BB\u30D7\u30C8","children":[{"text":"\u30B9\u30C6\u30FC\u30C8","link":"/ja/guide/state"},{"text":"\u30B2\u30C3\u30BF\u30FC","link":"/ja/guide/getters"},{"text":"\u30DF\u30E5\u30FC\u30C6\u30FC\u30B7\u30E7\u30F3","link":"/ja/guide/mutations"},{"text":"\u30A2\u30AF\u30B7\u30E7\u30F3","link":"/ja/guide/actions"},{"text":"\u30E2\u30B8\u30E5\u30FC\u30EB","link":"/ja/guide/modules"}]},{"text":"\u9AD8\u5EA6\u306A\u6D3B\u7528","children":[{"text":"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u69CB\u9020","link":"/ja/guide/structure"},{"text":"Composition API","link":"/ja/guide/composition-api"},{"text":"\u30D7\u30E9\u30B0\u30A4\u30F3","link":"/ja/guide/plugins"},{"text":"\u53B3\u683C\u30E2\u30FC\u30C9","link":"/ja/guide/strict"},{"text":"\u30D5\u30A9\u30FC\u30E0\u306E\u6271\u3044","link":"/ja/guide/forms"},{"text":"\u30C6\u30B9\u30C8","link":"/ja/guide/testing"},{"text":"\u30DB\u30C3\u30C8\u30EA\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0","link":"/ja/guide/hot-reload"},{"text":"TypeScript \u30B5\u30DD\u30FC\u30C8","link":"/ja/guide/typescript-support"}]},{"text":"\u79FB\u884C \u30AC\u30A4\u30C9","children":[{"text":"3.x \u304B\u3089 4.0 \u3078\u306E\u79FB\u884C","link":"/ja/guide/migrating-to-4-0-from-3-x"}]}]},"/ptbr/":{"label":"Portugu\xEAs","selectText":"Idiomas","editLinkText":"Edite esta p\xE1gina no GitHub","lastUpdated":"\xDAltima Atualiza\xE7\xE3o","nav":[{"text":"Guia","link":"/ptbr/guide/"},{"text":"Refer\xEAncia da API","link":"/ptbr/api/"},{"text":"Notas de Lan\xE7amento","link":"https://github.com/vuejs/vuex/releases"},{"text":"v4.x","items":[{"text":"v3.x","link":"https://v3.vuex.vuejs.org/ptbr/"}]}],"sidebar":[{"text":"Introdu\xE7\xE3o","children":[{"text":"O que \xE9 Vuex?","link":"/ptbr/"},{"text":"Instala\xE7\xE3o","link":"/ptbr/installation"},{"text":"Come\xE7ando","link":"/ptbr/guide/"}]},{"text":"Conceitos B\xE1sicos","children":[{"text":"Estado","link":"/ptbr/guide/state"},{"text":"Getters","link":"/ptbr/guide/getters"},{"text":"Muta\xE7\xF5es","link":"/ptbr/guide/mutations"},{"text":"A\xE7\xF5es","link":"/ptbr/guide/actions"},{"text":"M\xF3dulos","link":"/ptbr/guide/modules"}]},{"text":"Avan\xE7ado","children":[{"text":"Estrutura da Aplica\xE7\xE3o","link":"/ptbr/guide/structure"},{"text":"Composition API","link":"/ptbr/guide/composition-api"},{"text":"Plugins","link":"/ptbr/guide/plugins"},{"text":"Modo Strict","link":"/ptbr/guide/strict"},{"text":"Manipula\xE7\xE3o de Formul\xE1rios","link":"/ptbr/guide/forms"},{"text":"Testando","link":"/ptbr/guide/testing"},{"text":"Hot Reloading","link":"/ptbr/guide/hot-reload"},{"text":"Suporte ao TypeScript","link":"/ptbr/guide/typescript-support"}]},{"text":"Guia de Migra\xE7\xE3o","children":[{"text":"Migrando do 3.x para 4.0","link":"/ptbr/guide/migrating-to-4-0-from-3-x"}]}]}}},"locales":{"/":{"lang":"en-US","title":"Vuex","description":"Centralized State Management for Vue.js"},"/zh/":{"lang":"zh-CN","title":"Vuex","description":"Vue.js \u7684\u4E2D\u5FC3\u5316\u72B6\u6001\u7BA1\u7406\u65B9\u6848"},"/ja/":{"lang":"ja","title":"Vuex","description":"Vue.js \u306E\u305F\u3081\u306E\u96C6\u4E2D\u72B6\u614B\u7BA1\u7406"},"/ptbr/":{"lang":"pt-BR","title":"Vuex","description":"Gerenciamento de Estado Centralizado para Vue.js"}},"langs":{"/":{"label":"English","lang":"en-US"},"/zh/":{"label":"\u7B80\u4F53\u4E2D\u6587","lang":"zh-CN"},"/ja/":{"label":"\u65E5\u672C\u8A9E","lang":"ja"},"/ptbr/":{"label":"Portugu\xEAs","lang":"pt-BR"}}}';const Be=/^https?:/i,y=typeof window!="undefined";function Mt(e,t){t.sort((n,s)=>{const o=s.split("/").length-n.split("/").length;return o!==0?o:s.length-n.length});for(const n of t)if(e.startsWith(n))return n}function me(e,t){const n=Mt(t,Object.keys(e));return n?e[n]:void 0}function Ut(e){const{locales:t}=e.themeConfig||{},n=e.locales;return t&&n?Object.keys(t).reduce((s,o)=>(s[o]={label:t[o].label,lang:n[o].lang},s),{}):{}}function Dt(e,t){t=Ot(e,t);const n=me(e.locales||{},t),s=me(e.themeConfig.locales||{},t);return Object.assign({},e,n,{themeConfig:Object.assign({},e.themeConfig,s,{locales:{}}),lang:(n||e).lang,locales:{},langs:Ut(e)})}function Ot(e,t){if(!y)return t;const n=e.base,s=n.endsWith("/")?n.slice(0,-1):n;return t.slice(s.length)}const He=Symbol(),ne=lt(Ft(zt));function Ft(e){return ct(JSON.parse(e))}function qt(e){const t=h(()=>Dt(ne.value,e.path));return{site:t,theme:h(()=>t.value.themeConfig),page:h(()=>e.data),frontmatter:h(()=>e.data.frontmatter),lang:h(()=>t.value.lang),localePath:h(()=>{const{langs:n,lang:s}=t.value,o=Object.keys(n).find(r=>n[r].lang===s);return j(o||"/")}),title:h(()=>e.data.title?e.data.title+" | "+t.value.title:t.value.title),description:h(()=>e.data.description||t.value.description)}}function A(){const e=Ee(He);if(!e)throw new Error("vitepress data not properly injected in app");return e}function Vt(e,t){return`${e}${t}`.replace(/\/+/g,"/")}function j(e){return Be.test(e)?e:Vt(ne.value.base,e)}function ze(e){let t=e.replace(/\.html$/,"");if(t=decodeURIComponent(t),t.endsWith("/")&&(t+="index"),y){const n="/";t=t.slice(n.length).replace(/\//g,"_")+".md";const s=__VP_HASH_MAP__[t.toLowerCase()];t=`${n}assets/${t}.${s}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const Me=Symbol(),ve="http://a.com",Wt=()=>({path:"/",component:null,data:null});function Gt(e,t){const n=ut(Wt());function s(i=y?location.href:"/"){const a=new URL(i,ve);return!a.pathname.endsWith("/")&&!a.pathname.endsWith(".html")&&(a.pathname+=".html",i=a.pathname+a.search+a.hash),y&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",i)),r(i)}let o=null;async function r(i,a=0){const l=new URL(i,ve),u=o=l.pathname;try{let _=e(u);if("then"in _&&typeof _.then=="function"&&(_=await _),o===u){o=null;const{default:m,__pageData:L}=_;if(!m)throw new Error(`Invalid route component: ${m}`);n.path=u,n.component=W(m),n.data=W(JSON.parse(L)),y&&dt(()=>{if(l.hash&&!a){let k=null;try{k=document.querySelector(decodeURIComponent(l.hash))}catch(S){console.warn(S)}if(k){ge(k,l.hash);return}}window.scrollTo(0,a)})}}catch(_){_.message.match(/fetch/)||console.error(_),o===u&&(o=null,n.path=u,n.component=t?W(t):null)}}return y&&(window.addEventListener("click",i=>{const a=i.target.closest("a");if(a){const{href:l,protocol:u,hostname:_,pathname:m,hash:L,target:k}=a,S=window.location,I=m.match(/\.\w+$/);!i.ctrlKey&&!i.shiftKey&&!i.altKey&&!i.metaKey&&k!=="_blank"&&u===S.protocol&&_===S.hostname&&!(I&&I[0]!==".html")&&(i.preventDefault(),m===S.pathname?L&&L!==S.hash&&(history.pushState(null,"",L),window.dispatchEvent(new Event("hashchange")),ge(a,L,a.classList.contains("header-anchor"))):s(l))}},{capture:!0}),window.addEventListener("popstate",i=>{r(location.href,i.state&&i.state.scrollPosition||0)}),window.addEventListener("hashchange",i=>{i.preventDefault()})),{route:n,go:s}}function Kt(){const e=Ee(Me);if(!e)throw new Error("useRouter() is called without provider.");return e}function T(){return Kt().route}function ge(e,t,n=!1){let s=null;try{s=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t))}catch(o){console.warn(o)}if(s){const o=s.offsetTop;!n||Math.abs(o-window.scrollY)>window.innerHeight?window.scrollTo(0,o):window.scrollTo({left:0,top:o,behavior:"smooth"})}}function Jt(e,t){let n=[],s=!0;const o=r=>{if(s){s=!1;return}const i=[],a=Math.min(n.length,r.length);for(let l=0;l<a;l++){let u=n[l];const[_,m,L=""]=r[l];if(u.tagName.toLocaleLowerCase()===_){for(const k in m)u.getAttribute(k)!==m[k]&&u.setAttribute(k,m[k]);for(let k=0;k<u.attributes.length;k++){const S=u.attributes[k].name;S in m||u.removeAttribute(S)}u.innerHTML!==L&&(u.innerHTML=L)}else document.head.removeChild(u),u=xe(r[l]),document.head.append(u);i.push(u)}n.slice(a).forEach(l=>document.head.removeChild(l)),r.slice(a).forEach(l=>{const u=xe(l);document.head.appendChild(u),i.push(u)}),n=i};pt(()=>{const r=e.data,i=t.value,a=r&&r.title,l=r&&r.description,u=r&&r.frontmatter.head;document.title=(a?a+" | ":"")+i.title,document.querySelector("meta[name=description]").setAttribute("content",l||i.description),o([...u?Yt(u):[]])})}function xe([e,t,n]){const s=document.createElement(e);for(const o in t)s.setAttribute(o,t[o]);return n&&(s.innerHTML=n),s}function Xt(e){return e[0]==="meta"&&e[1]&&e[1].name==="description"}function Yt(e){return e.filter(t=>!Xt(t))}const Qt=b({name:"VitePressContent",setup(){const e=T();return()=>N("div",{style:{position:"relative"}},[e.component?N(e.component):null])}});const Zt=/#.*$/,en=/(index)?\.(md|html)$/,U=/\/$/,tn=/^[a-z]+:/i;function se(e){return Array.isArray(e)}function oe(e){return tn.test(e)}function nn(e,t){if(t===void 0)return!1;const n=be(`/${e.data.relativePath}`),s=be(t);return n===s}function be(e){return decodeURI(e).replace(Zt,"").replace(en,"")}function sn(e,t){const n=e.endsWith("/"),s=t.startsWith("/");return n&&s?e.slice(0,-1)+t:!n&&!s?`${e}/${t}`:e+t}function Z(e){return/^\//.test(e)?e:`/${e}`}function Ue(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function on(e){return e===!1||e==="auto"||se(e)}function rn(e){return e.children!==void 0}function an(e){return se(e)?e.length===0:!e}function ie(e,t){if(on(e))return e;t=Z(t);for(const n in e)if(t.startsWith(Z(n)))return e[n];return"auto"}function De(e){return e.reduce((t,n)=>(n.link&&t.push({text:n.text,link:Ue(n.link)}),rn(n)&&(t=[...t,...De(n.children)]),t),[])}const ln=["href","aria-label"],cn=["src"],un=b({__name:"NavBarTitle",setup(e){const{site:t,theme:n,localePath:s}=A();return(o,r)=>(d(),f("a",{class:"nav-bar-title",href:c(s),"aria-label":`${c(t).title}, back to home`},[c(n).logo?(d(),f("img",{key:0,class:"logo",src:c(j)(c(n).logo),alt:"Logo"},null,8,cn)):x("",!0),ee(" "+E(c(t).title),1)],8,ln))}});var dn=w(un,[["__scopeId","data-v-4a583abe"]]);function pn(){const{site:e,localePath:t,theme:n}=A();return h(()=>{const s=e.value.langs,o=Object.keys(s);if(o.length<2)return null;const i=T().path.replace(t.value,""),a=o.map(u=>({text:s[u].label,link:`${u}${i}`}));return{text:n.value.selectText||"Languages",items:a}})}const fn=["GitHub","GitLab","Bitbucket"].map(e=>[e,new RegExp(e,"i")]);function hn(){const{site:e}=A();return h(()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const s=_n(n);return{text:mn(s,t.repoLabel),link:s}})}function _n(e){return Be.test(e)?e:`https://github.com/${e}`}function mn(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const s=fn.find(([o,r])=>r.test(n[0]));return s&&s[0]?s[0]:"Source"}function Oe(e){const t=T(),n=oe(e.value.link);return{props:h(()=>{const o=ke(`/${t.data.relativePath}`);let r=!1;if(e.value.activeMatch)r=new RegExp(e.value.activeMatch).test(o);else{const i=ke(e.value.link);r=i==="/"?i===o:o.startsWith(i)}return{class:{active:r,isExternal:n},href:n?e.value.link:j(e.value.link),target:e.value.target||(n?"_blank":null),rel:e.value.rel||(n?"noopener noreferrer":null),"aria-label":e.value.ariaLabel}}),isExternal:n}}function ke(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const vn={},gn={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},xn=p("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),bn=p("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),kn=[xn,bn];function $n(e,t){return d(),f("svg",gn,kn)}var re=w(vn,[["render",$n]]);const wn={class:"nav-link"},Ln=b({__name:"NavLink",props:{item:null},setup(e){const n=Pe(e),{props:s,isExternal:o}=Oe(n.item);return(r,i)=>(d(),f("div",wn,[p("a",Te({class:"item"},c(s)),[ee(E(e.item.text)+" ",1),c(o)?(d(),C(re,{key:0})):x("",!0)],16)]))}});var $e=w(Ln,[["__scopeId","data-v-b8818f8c"]]);const Sn=e=>(Ie("data-v-bbc27490"),e=e(),Re(),e),yn={class:"nav-dropdown-link-item"},An=Sn(()=>p("span",{class:"arrow"},null,-1)),Cn={class:"text"},En={class:"icon"},Pn=b({__name:"NavDropdownLinkItem",props:{item:null},setup(e){const n=Pe(e),{props:s,isExternal:o}=Oe(n.item);return(r,i)=>(d(),f("div",yn,[p("a",Te({class:"item"},c(s)),[An,p("span",Cn,E(e.item.text),1),p("span",En,[c(o)?(d(),C(re,{key:0})):x("",!0)])],16)]))}});var Tn=w(Pn,[["__scopeId","data-v-bbc27490"]]);const In=["aria-label"],Rn={class:"button-text"},Nn={class:"dialog"},jn=b({__name:"NavDropdownLink",props:{item:null},setup(e){const t=T(),n=O(!1);F(()=>t.path,()=>{n.value=!1});function s(){n.value=!n.value}return(o,r)=>(d(),f("div",{class:M(["nav-dropdown-link",{open:n.value}])},[p("button",{class:"button","aria-label":e.item.ariaLabel,onClick:s},[p("span",Rn,E(e.item.text),1),p("span",{class:M(["button-arrow",n.value?"down":"right"])},null,2)],8,In),p("ul",Nn,[(d(!0),f(q,null,te(e.item.items,i=>(d(),f("li",{key:i.text,class:"dialog-item"},[g(Tn,{item:i},null,8,["item"])]))),128))])],2))}});var we=w(jn,[["__scopeId","data-v-56bf3a3f"]]);const Bn={key:0,class:"nav-links"},Hn={key:1,class:"item"},zn={key:2,class:"item"},Mn=b({__name:"NavLinks",setup(e){const{theme:t}=A(),n=pn(),s=hn(),o=h(()=>t.value.nav||s.value||n.value);return(r,i)=>c(o)?(d(),f("nav",Bn,[c(t).nav?(d(!0),f(q,{key:0},te(c(t).nav,a=>(d(),f("div",{key:a.text,class:"item"},[a.items?(d(),C(we,{key:0,item:a},null,8,["item"])):(d(),C($e,{key:1,item:a},null,8,["item"]))]))),128)):x("",!0),c(n)?(d(),f("div",Hn,[g(we,{item:c(n)},null,8,["item"])])):x("",!0),c(s)?(d(),f("div",zn,[g($e,{item:c(s)},null,8,["item"])])):x("",!0)])):x("",!0)}});var Fe=w(Mn,[["__scopeId","data-v-eab3edfe"]]);const Un={emits:["toggle"]},Dn=p("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[p("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),On=[Dn];function Fn(e,t,n,s,o,r){return d(),f("div",{class:"sidebar-button",onClick:t[0]||(t[0]=i=>e.$emit("toggle"))},On)}var qn=w(Un,[["render",Fn]]);const Vn=e=>(Ie("data-v-675d8756"),e=e(),Re(),e),Wn={class:"nav-bar"},Gn=Vn(()=>p("div",{class:"flex-grow"},null,-1)),Kn={class:"nav"},Jn=b({__name:"NavBar",emits:["toggle"],setup(e){return(t,n)=>(d(),f("header",Wn,[g(qn,{onToggle:n[0]||(n[0]=s=>t.$emit("toggle"))}),g(dn),Gn,p("div",Kn,[g(Fe)]),$(t.$slots,"search",{},void 0,!0)]))}});var Xn=w(Jn,[["__scopeId","data-v-675d8756"]]);function Yn(){let e=null,t=null;const n=ns(s,300);function s(){const i=Qn(),a=Zn(i);for(let l=0;l<a.length;l++){const u=a[l],_=a[l+1],[m,L]=ts(l,u,_);if(m){history.replaceState(null,document.title,L||" "),o(L);return}}}function o(i){if(r(t),r(e),t=document.querySelector(`.sidebar a[href="${i}"]`),!t)return;t.classList.add("active");const a=t.closest(".sidebar-links > ul > li");a&&a!==t.parentElement?(e=a.querySelector("a"),e&&e.classList.add("active")):e=null}function r(i){i&&i.classList.remove("active")}B(()=>{s(),window.addEventListener("scroll",n)}),ft(()=>{o(decodeURIComponent(location.hash))}),Ne(()=>{window.removeEventListener("scroll",n)})}function Qn(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function Zn(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(t=>e.some(n=>n.hash===t.hash))}function es(){return document.querySelector(".nav-bar").offsetHeight}function Le(e){const t=es();return e.parentElement.offsetTop-t-15}function ts(e,t,n){const s=window.scrollY;return e===0&&s===0?[!0,null]:s<Le(t)?[!1,null]:!n||s<Le(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function ns(e,t){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(e,t):(e(),s=!0,setTimeout(()=>{s=!1},t))}}function ss(){const e=T(),{site:t}=A();return Yn(),h(()=>{const n=e.data.headers,s=e.data.frontmatter.sidebar,o=e.data.frontmatter.sidebarDepth;if(s===!1)return[];if(s==="auto")return Se(n,o);const r=ie(t.value.themeConfig.sidebar,e.data.relativePath);return r===!1?[]:r==="auto"?Se(n,o):r})}function Se(e,t){const n=[];if(e===void 0)return[];let s;return e.forEach(({level:o,title:r,slug:i})=>{if(o-1>t)return;const a={text:r,link:`#${i}`};o===2?(s=a,n.push(a)):s&&(s.children||(s.children=[])).push(a)}),n}const qe=e=>{const t=T(),{site:n,frontmatter:s}=A(),o=e.depth||1,r=s.value.sidebarDepth||1/0,i=t.data.headers,a=e.item.text,l=os(n.value.base,e.item.link),u=e.item.children,_=nn(t,e.item.link),m=o<r?Ve(_,u,i,o+1):null;return N("li",{class:"sidebar-link"},[N(l?"a":"p",{class:{"sidebar-link-item":!0,active:_},href:l},a),m])};function os(e,t){return t===void 0||t.startsWith("#")?t:sn(e,t)}function Ve(e,t,n,s=1){return t&&t.length>0?N("ul",{class:"sidebar-links"},t.map(o=>N(qe,{item:o,depth:s}))):e&&n?Ve(!1,is(n),void 0,s):null}function is(e){return We(rs(e))}function rs(e){e=e.map(n=>Object.assign({},n));let t;return e.forEach(n=>{n.level===2?t=n:t&&(t.children||(t.children=[])).push(n)}),e.filter(n=>n.level===2)}function We(e){return e.map(t=>({text:t.title,link:`#${t.slug}`,children:t.children?We(t.children):void 0}))}const as={key:0,class:"sidebar-links"},ls=b({__name:"SideBarLinks",setup(e){const t=ss();return(n,s)=>c(t).length>0?(d(),f("ul",as,[(d(!0),f(q,null,te(c(t),o=>(d(),C(c(qe),{item:o},null,8,["item"]))),256))])):x("",!0)}});const cs=b({__name:"SideBar",props:{open:{type:Boolean}},setup(e){return(t,n)=>(d(),f("aside",{class:M(["sidebar",{open:e.open}])},[g(Fe,{class:"nav"}),$(t.$slots,"sidebar-top",{},void 0,!0),g(ls),$(t.$slots,"sidebar-bottom",{},void 0,!0)],2))}});var us=w(cs,[["__scopeId","data-v-83e92a68"]]);const ds=/bitbucket.org/;function ps(){const{page:e,theme:t,frontmatter:n}=A(),s=h(()=>{const{repo:r,docsDir:i="",docsBranch:a="master",docsRepo:l=r,editLinks:u}=t.value,_=n.value.editLink!=null?n.value.editLink:u,{relativePath:m}=e.value;return!_||!m||!r?null:fs(r,l,i,a,m)}),o=h(()=>t.value.editLinkText||"Edit this page");return{url:s,text:o}}function fs(e,t,n,s,o){return ds.test(e)?_s(e,t,n,s,o):hs(e,t,n,s,o)}function hs(e,t,n,s,o){return(oe(t)?t:`https://github.com/${t}`).replace(U,"")+`/edit/${s}/`+(n?n.replace(U,"")+"/":"")+o}function _s(e,t,n,s,o){return(oe(t)?t:e).replace(U,"")+`/src/${s}/`+(n?n.replace(U,"")+"/":"")+o+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}const ms={class:"edit-link"},vs=["href"],gs=b({__name:"EditLink",setup(e){const{url:t,text:n}=ps();return(s,o)=>(d(),f("div",ms,[c(t)?(d(),f("a",{key:0,class:"link",href:c(t),target:"_blank",rel:"noopener noreferrer"},[ee(E(c(n))+" ",1),g(re,{class:"icon"})],8,vs)):x("",!0)]))}});var xs=w(gs,[["__scopeId","data-v-1ed99556"]]);const bs={key:0,class:"last-updated"},ks={class:"prefix"},$s={class:"datetime"},ws=b({__name:"LastUpdated",setup(e){const{theme:t,page:n}=A(),s=h(()=>{const i=t.value.lastUpdated;return i!==void 0&&i!==!1}),o=h(()=>{const i=t.value.lastUpdated;return i===!0?"Last Updated":i}),r=O("");return B(()=>{r.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(i,a)=>c(s)?(d(),f("p",bs,[p("span",ks,E(c(o))+":",1),p("span",$s,E(r.value),1)])):x("",!0)}});var Ls=w(ws,[["__scopeId","data-v-5797b537"]]);const Ss={class:"page-footer"},ys={class:"edit"},As={class:"updated"},Cs=b({__name:"PageFooter",setup(e){return(t,n)=>(d(),f("footer",Ss,[p("div",ys,[g(xs)]),p("div",As,[g(Ls)])]))}});var Es=w(Cs,[["__scopeId","data-v-fb8d84c6"]]);function Ps(){const{page:e,theme:t}=A(),n=h(()=>Ue(Z(e.value.relativePath))),s=h(()=>{const l=ie(t.value.sidebar,n.value);return se(l)?De(l):[]}),o=h(()=>s.value.findIndex(l=>l.link===n.value)),r=h(()=>{if(t.value.nextLinks!==!1&&o.value>-1&&o.value<s.value.length-1)return s.value[o.value+1]}),i=h(()=>{if(t.value.prevLinks!==!1&&o.value>0)return s.value[o.value-1]}),a=h(()=>!!r.value||!!i.value);return{next:r,prev:i,hasLinks:a}}const Ts={},Is={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Rs=p("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),Ns=[Rs];function js(e,t){return d(),f("svg",Is,Ns)}var Bs=w(Ts,[["render",js]]);const Hs={},zs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Ms=p("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),Us=[Ms];function Ds(e,t){return d(),f("svg",zs,Us)}var Os=w(Hs,[["render",Ds]]);const Fs={key:0,class:"next-and-prev-link"},qs={class:"container"},Vs={class:"prev"},Ws=["href"],Gs={class:"text"},Ks={class:"next"},Js=["href"],Xs={class:"text"},Ys=b({__name:"NextAndPrevLinks",setup(e){const{hasLinks:t,prev:n,next:s}=Ps();return(o,r)=>c(t)?(d(),f("div",Fs,[p("div",qs,[p("div",Vs,[c(n)?(d(),f("a",{key:0,class:"link",href:c(j)(c(n).link)},[g(Bs,{class:"icon icon-prev"}),p("span",Gs,E(c(n).text),1)],8,Ws)):x("",!0)]),p("div",Ks,[c(s)?(d(),f("a",{key:0,class:"link",href:c(j)(c(s).link)},[p("span",Xs,E(c(s).text),1),g(Os,{class:"icon icon-next"})],8,Js)):x("",!0)])])])):x("",!0)}});var Qs=w(Ys,[["__scopeId","data-v-38ede35f"]]);const Zs={class:"page"},eo={class:"container"},to=b({__name:"Page",setup(e){return(t,n)=>{const s=Y("Content");return d(),f("main",Zs,[p("div",eo,[$(t.$slots,"top",{},void 0,!0),g(s,{class:"content"}),g(Es),g(Qs),$(t.$slots,"bottom",{},void 0,!0)])])}}});var no=w(to,[["__scopeId","data-v-7eddb2c4"]]);const so={key:0,id:"ads-container"},oo=b({__name:"Layout",setup(e){const t=ht(()=>je(()=>import("./Home.497b6100.js"),["assets/Home.497b6100.js","assets/plugin-vue_export-helper.0b0d78d5.js"])),n=()=>null,s=n,o=n,r=n,i=T(),{site:a,page:l,theme:u,frontmatter:_}=A(),m=h(()=>!!_.value.customLayout),L=h(()=>!!_.value.home),k=h(()=>Object.keys(a.value.langs).length>1),S=h(()=>{const v=u.value;return _.value.navbar===!1||v.navbar===!1?!1:a.value.title||v.logo||v.repo||v.nav}),I=O(!1),Ke=h(()=>_.value.home||_.value.sidebar===!1?!1:!an(ie(u.value.sidebar,i.data.relativePath))),V=v=>{I.value=typeof v=="boolean"?v:!I.value},Je=V.bind(null,!1);F(i,Je);const Xe=h(()=>[{"no-navbar":!S.value,"sidebar-open":I.value,"no-sidebar":!Ke.value}]);return(v,ae)=>{const Ye=Y("Content"),Qe=Y("Debug");return d(),f(q,null,[p("div",{class:M(["theme",c(Xe)])},[c(S)?(d(),C(Xn,{key:0,onToggle:V},{search:P(()=>[$(v.$slots,"navbar-search",{},()=>[c(u).algolia?(d(),C(c(r),{key:0,options:c(u).algolia,multilang:c(k)},null,8,["options","multilang"])):x("",!0)])]),_:3})):x("",!0),g(us,{open:I.value},{"sidebar-top":P(()=>[$(v.$slots,"sidebar-top")]),"sidebar-bottom":P(()=>[$(v.$slots,"sidebar-bottom")]),_:3},8,["open"]),p("div",{class:"sidebar-mask",onClick:ae[0]||(ae[0]=ko=>V(!1))}),c(m)?(d(),C(Ye,{key:1})):c(L)?$(v.$slots,"home",{key:2},()=>[g(c(t),null,{hero:P(()=>[$(v.$slots,"home-hero")]),features:P(()=>[$(v.$slots,"home-features")]),footer:P(()=>[$(v.$slots,"home-footer")]),_:3})]):(d(),C(no,{key:3},{top:P(()=>[$(v.$slots,"page-top-ads",{},()=>[c(u).carbonAds&&c(u).carbonAds.carbon?(d(),f("div",so,[(d(),C(c(s),{key:"carbon"+c(l).relativePath,code:c(u).carbonAds.carbon,placement:c(u).carbonAds.placement},null,8,["code","placement"]))])):x("",!0)]),$(v.$slots,"page-top")]),bottom:P(()=>[$(v.$slots,"page-bottom"),$(v.$slots,"page-bottom-ads",{},()=>[c(u).carbonAds&&c(u).carbonAds.custom?(d(),C(c(o),{key:"custom"+c(l).relativePath,code:c(u).carbonAds.custom,placement:c(u).carbonAds.placement},null,8,["code","placement"])):x("",!0)])]),_:3}))],2),g(Qe)],64)}}}),io={class:"theme"},ro=p("h1",null,"404",-1),ao=["href"],lo=b({__name:"NotFound",setup(e){const{site:t}=A(),n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function s(){return n[Math.floor(Math.random()*n.length)]}return(o,r)=>(d(),f("div",io,[ro,p("blockquote",null,E(s()),1),p("a",{href:c(t).base,"aria-label":"go to home"},"Take me home.",8,ao)]))}}),co={Layout:oo,NotFound:lo};var D={...co};const X=new Set,Ge=()=>document.createElement("link"),uo=e=>{const t=Ge();t.rel="prefetch",t.href=e,document.head.appendChild(t)},po=e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};let H;const fo=y&&(H=Ge())&&H.relList&&H.relList.supports&&H.relList.supports("prefetch")?uo:po;function ho(){if(!y||!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(r=>{r.forEach(i=>{if(i.isIntersecting){const a=i.target;n.unobserve(a);const{pathname:l}=a;if(!X.has(l)){X.add(l);const u=ze(l);fo(u)}}})}),t(()=>{document.querySelectorAll("#app a").forEach(r=>{const{target:i,hostname:a,pathname:l}=r,u=l.match(/\.\w+$/);u&&u[0]!==".html"||i!=="_blank"&&a===location.hostname&&(l!==location.pathname?n.observe(r):X.add(l))})})};B(s);const o=T();F(()=>o.path,s),Ne(()=>{n&&n.disconnect()})}const _o=b({setup(e,{slots:t}){const n=O(!1);return B(()=>{n.value=!0}),()=>n.value&&t.default?t.default():null}}),mo=D.NotFound||(()=>"404 Not Found"),vo={name:"VitePressApp",setup(){const{site:e}=A();return B(()=>{F(()=>e.value.lang,t=>{document.documentElement.lang=t},{immediate:!0})}),ho(),()=>N(D.Layout)}};function go(){const e=bo(),t=xo();t.provide(Me,e);const n=qt(e.route);return t.provide(He,n),y&&Jt(e.route,n.site),t.component("Content",Qt),t.component("ClientOnly",_o),t.component("Debug",()=>null),Object.defineProperty(t.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),D.enhanceApp&&D.enhanceApp({app:t,router:e,siteData:ne}),{app:t,router:e}}function xo(){return Bt(vo)}function bo(){let e=y,t;return Gt(n=>{let s=ze(n);return e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),y?(e=!1,je(()=>import(s),[])):require(s)},mo)}if(y){const{app:e,router:t}=go();t.go().then(()=>{e.mount("#app")})}export{$e as N,go as createApp,A as u,j as w};
