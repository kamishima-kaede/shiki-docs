import{f as r,h as i,r as d,o as _,c as l,F as g,j as b,b as s,t as y,a as t,w as f,u as $,ah as x,q as v,s as h,d as S}from"../app.fbc2ae7a.js";const w={class:"demo-image"},z={class:"demonstration"},O="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",k=i({__name:"basic-usage",setup(e){const o=["fill","contain","cover","none","scale-down"];return(p,n)=>{const a=d("el-image");return _(),l("div",w,[(_(),l(g,null,b(o,c=>s("div",{key:c,class:"block"},[s("span",z,y(c),1),t(a,{style:{width:"100px",height:"100px"},src:O,fit:c},null,8,["fit"])])),64))])}}});var I=r(k,[["__scopeId","data-v-5e53a8c3"]]),se=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));const P={class:"demo-image__preview"},T="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",C=i({__name:"image-preview",setup(e){const o=["https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg","https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg","https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg","https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg","https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg","https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg","https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"];return(p,n)=>{const a=d("el-image");return _(),l("div",P,[t(a,{style:{width:"100px",height:"100px"},src:T,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"preview-src-list":o,"initial-index":4,fit:"cover"},null,8,["zoom-rate","min-scale"])])}}});var L=r(C,[["__scopeId","data-v-0ce597d7"]]),te=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));const M={class:"demo-image__lazy"},F=i({__name:"lazy-load",setup(e){const o=["https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg","https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg","https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg","https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg","https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg","https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg","https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"];return(p,n)=>{const a=d("el-image");return _(),l("div",M,[(_(),l(g,null,b(o,c=>t(a,{key:c,src:c,lazy:""},null,8,["src"])),64))])}}});var B=r(F,[["__scopeId","data-v-3f471bb0"]]),ae=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));const j=e=>(v("data-v-c1e72660"),e=e(),h(),e),D={class:"demo-image__error"},N={class:"block"},V=j(()=>s("span",{class:"demonstration"},"Default",-1)),U={class:"block"},q=j(()=>s("span",{class:"demonstration"},"Custom",-1)),E={class:"image-slot"},A=i({__name:"load-failed",setup(e){return(o,p)=>{const n=d("el-image"),a=d("el-icon");return _(),l("div",D,[s("div",N,[V,t(n)]),s("div",U,[q,t(n,null,{error:f(()=>[s("div",E,[t(a,null,{default:f(()=>[t($(x))]),_:1})])]),_:1})])])}}});var G=r(A,[["__scopeId","data-v-c1e72660"]]),oe=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));const H={},m=e=>(v("data-v-6b0684da"),e=e(),h(),e),J={class:"demo-image__placeholder"},K={class:"block"},Q=m(()=>s("span",{class:"demonstration"},"Default",-1)),R={class:"block"},W=m(()=>s("span",{class:"demonstration"},"Custom",-1)),X=m(()=>s("div",{class:"image-slot"},[S("Loading"),s("span",{class:"dot"},"...")],-1));function Y(e,o,p,n,a,c){const u=d("el-image");return _(),l("div",J,[s("div",K,[Q,t(u,{src:e.src},null,8,["src"])]),s("div",R,[W,t(u,{src:e.src},{placeholder:f(()=>[X]),_:1},8,["src"])])])}var Z=r(H,[["render",Y],["__scopeId","data-v-6b0684da"]]),ce=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{se as _,te as a,ae as b,oe as c,ce as d};
