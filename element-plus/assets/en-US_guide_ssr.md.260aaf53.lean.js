import{o as e,c as o,b as n,a as t,d as s,e as p,_ as c}from"./app.fbc2ae7a.js";const l=n("h1",{id:"server-side-rendering-ssr",tabindex:"-1"},[s("Server-Side Rendering (SSR) "),n("a",{class:"header-anchor vp-link",href:"#server-side-rendering-ssr","aria-hidden":"true"},"#")],-1),u=n("p",null,"When using Element Plus for SSR development, you need to carry out special handling during SSR to avoid hydrate errors.",-1),i={class:"tip custom-block"},r=n("p",{class:"custom-block-title"},"TIP",-1),k=s("For Nuxt users, we provide a "),d={href:"https://github.com/element-plus/element-plus-nuxt",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},g=s("Nuxt module"),h=s(" that contains these special processes. You only need to install it."),m=p("",4),_={href:"https://vuejs.org/guide/scaling-up/ssr.html#teleports",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},v=s("Teleport"),y=s(" is used internally by multiple components in Element Plus (eg. ElDialog, ElDrawer, ElTooltip, ElDropdown, ElSelect, ElDatePicker ...), so special handling is required during SSR."),f=p("",8),b={class:"warning custom-block"},w=n("p",{class:"custom-block-title"},"WARNING",-1),T=s("There may be some "),S={href:"https://github.com/vuejs/core/issues?q=is%3Aissue+is%3Aopen+ssr+teleport+",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},q=s("SSR problems with teleport"),x=s(", so you should pay attention to the following precautions."),I=n("ol",null,[n("li",null,[s("The "),n("code",null,"teleported"),s(" attribute in all components based on ElTooltip should be consistent, it is recommended to use the default value.")]),n("li",null,[s("The "),n("code",null,"append-to-body"),s(" attribute value of ElDialog and ElDrawer should be consistent, it is recommended to enable the "),n("code",null,"append-to-body"),s(".")]),n("li",null,[s("When the ElSubMenu component has a multi-layer popup, It is recommended to enable the "),n("code",null,"popper-append-to-body")])],-1),E=p("",5),R='{"title":"SSR","description":"","frontmatter":{"title":"SSR","lang":"en-US"},"headers":[{"level":2,"title":"Provide an ID","slug":"provide-an-id"},{"level":2,"title":"Teleports","slug":"teleports"},{"level":3,"title":"Render the Teleport on the mount","slug":"render-the-teleport-on-the-mount"},{"level":3,"title":"Inject the teleport markup","slug":"inject-the-teleport-markup"}],"relativePath":"en-US/guide/ssr.md","lastUpdated":1701174919000}',j={},C=Object.assign(j,{__name:"ssr",setup(A){return(D,P)=>{const a=c;return e(),o("div",null,[l,u,n("div",i,[r,n("p",null,[k,n("a",d,[g,t(a,{class:"link-icon"})]),h])]),m,n("p",null,[n("a",_,[v,t(a,{class:"link-icon"})]),y]),f,n("div",b,[w,n("p",null,[T,n("a",S,[q,t(a,{class:"link-icon"})]),x]),I]),E])}}});export{R as __pageData,C as default};
