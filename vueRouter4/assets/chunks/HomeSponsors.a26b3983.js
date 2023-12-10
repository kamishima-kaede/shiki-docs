import{d as v,u as _,g as f,o as t,c as i,k as o,t as S,F as h,D as k,n as d,l as s,P as y,_ as b,b as p,e as g}from"./framework.538c82e7.js";const D=[],w=[],L=[{alt:"VueMastery",href:"https://www.vuemastery.com/",imgSrcDark:"https://posva-sponsors.pages.dev/logos/vuemastery-dark.png",imgSrcLight:"https://posva-sponsors.pages.dev/logos/vuemastery-light.svg"},{alt:"Prefect",href:"https://www.prefect.io/",imgSrcDark:"https://posva-sponsors.pages.dev/logos/prefectlogo-dark.svg",imgSrcLight:"https://posva-sponsors.pages.dev/logos/prefectlogo-light.svg"}],z=[{alt:"Stanislas Ormières",href:"https://stormier.ninja",imgSrcDark:"https://avatars.githubusercontent.com/u/2486424?u=7b0c73ae5d090ce53bf59473094e9606fe082c59&v=4",imgSrcLight:"https://avatars.githubusercontent.com/u/2486424?u=7b0c73ae5d090ce53bf59473094e9606fe082c59&v=4"},{alt:"Antony Konstantinidis",href:"https://www.vuejs.de",imgSrcDark:"https://avatars.githubusercontent.com/u/4183726?u=6b50a8ea16de29d2982f43c5640b1db9299ebcd1&v=4",imgSrcLight:"https://avatars.githubusercontent.com/u/4183726?u=6b50a8ea16de29d2982f43c5640b1db9299ebcd1&v=4"},{alt:"Storyblok",href:"https://storyblok.com",imgSrcDark:"https://posva-sponsors.pages.dev/logos/storyblok.png",imgSrcLight:"https://posva-sponsors.pages.dev/logos/storyblok.png"},{alt:"Nuxt UI Pro Templates",href:"https://ui.nuxt.com/pro",imgSrcDark:"https://avatars.githubusercontent.com/u/81570812?v=4",imgSrcLight:"https://avatars.githubusercontent.com/u/81570812?v=4"}],l={platinum:D,gold:w,silver:L,bronze:z},x=["href","title"],H=["src","alt"],B=v({__name:"HomeSponsorsGroup",props:{name:{type:String,required:!0},size:{type:[Number,String],default:140}},setup(n){const{isDark:a}=_(),c=n,u=f(()=>l[c.name.toLowerCase()].map(r=>({...r,imgSrc:a.value?r.imgSrcDark:r.imgSrcLight})));return(r,I)=>(t(),i(h,null,[o("h3",null,S(n.name)+" Sponsors",1),o("p",null,[(t(!0),i(h,null,k(u.value,e=>(t(),i("a",{key:e.href,href:e.href,title:e.alt,target:"_blank",rel:"sponsored noopener",class:d(["sponsor_wrapper",s(a)&&e.imgSrcLight===e.imgSrcDark&&"apply-bg"])},[o("img",{src:e.imgSrc,class:d(s(a)&&e.imgSrcLight===e.imgSrcDark&&"invert-colors"),alt:e.alt,style:y({height:n.size+"px"})},null,14,H)],10,x))),128))])],64))}});const m=b(B,[["__scopeId","data-v-6a2bf901"]]),C={class:"sponsors_outer"},N={class:"cta"},G={class:"become-sponsor",href:"https://github.com/sponsors/posva"},P=v({__name:"HomeSponsors",setup(n){const{site:a}=_(),c={en:"Become a sponsor","en-US":"Become a Sponsor!","zh-CN":"成为赞助者！"};return(u,r)=>(t(),i("div",C,[o("div",null,[s(l).platinum.length?(t(),p(m,{key:0,name:"Platinum",size:"96"})):g("",!0),s(l).gold.length?(t(),p(m,{key:1,name:"Gold",size:"38"})):g("",!0),s(l).silver.length?(t(),p(m,{key:2,name:"Silver",size:"24"})):g("",!0),o("div",N,[o("a",G,S(c[s(a).lang]||c.en),1)])])]))}});const $=b(P,[["__scopeId","data-v-626a3219"]]);export{$ as H};
