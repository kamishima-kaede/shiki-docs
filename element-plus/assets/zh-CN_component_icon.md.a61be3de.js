import{_ as v}from"./chunks/contributors.540831ef.js";import{r as c,o as f,c as b,b as n,a,w as p,d as s,e as l,u as e,m as i,y as r,G as d,ag as y,B as _,_ as q}from"./app.fbc2ae7a.js";const T=n("h1",{id:"icon-\u56FE\u6807",tabindex:"-1"},[s("Icon \u56FE\u6807 "),n("a",{class:"header-anchor vp-link",href:"#icon-\u56FE\u6807","aria-hidden":"true"},"#")],-1),x=n("p",null,"Element Plus \u63D0\u4F9B\u4E86\u4E00\u5957\u5E38\u7528\u7684\u56FE\u6807\u96C6\u5408\u3002",-1),S=n("h2",{id:"\u4F7F\u7528\u56FE\u6807",tabindex:"-1"},[s("\u4F7F\u7528\u56FE\u6807 "),n("a",{class:"header-anchor vp-link",href:"#\u4F7F\u7528\u56FE\u6807","aria-hidden":"true"},"#")],-1),I=s("\u5982\u679C\u4F60\u60F3\u50CF\u7528\u4F8B\u4E00\u6837"),E=n("strong",null,"\u76F4\u63A5\u4F7F\u7528",-1),V=s("\uFF0C\u4F60\u9700\u8981"),w={href:"https://v3.vuejs.org/guide/component-registration.html#global-registration",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},A=s("\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6"),C=s("\uFF0C\u624D\u80FD\u591F\u76F4\u63A5\u5728\u9879\u76EE\u91CC\u4F7F\u7528\u3002"),P=s("\u5982\u82E5\u9700\u8981\u67E5\u770B\u6240\u6709\u53EF\u7528\u7684 SVG \u56FE\u6807\u8BF7\u67E5\u9605 "),N={href:"https://unpkg.com/browse/@element-plus/icons-vue@1/dist/es/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},z=s("@element-plus/icons-vue@1.x"),D={href:"https://unpkg.com/browse/@element-plus/icons-vue@latest/dist/types/components/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},j=s("@element-plus/icons-vue@latest"),G=s(" \u548C\u6709\u5173 "),R=n("a",{href:"#icon-collection",class:"vp-link"},"Icon Collection",-1),L=s(" \u7684\u6E90\u7801 "),B={href:"https://github.com/element-plus/element-plus-icons",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},M=s("element-plus-icons"),H=l(`<h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor vp-link" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><h3 id="\u4F7F\u7528\u5305\u7BA1\u7406\u5668" tabindex="-1">\u4F7F\u7528\u5305\u7BA1\u7406\u5668 <a class="header-anchor vp-link" href="#\u4F7F\u7528\u5305\u7BA1\u7406\u5668" aria-hidden="true">#</a></h3><div class="language-shell"><pre><code><span class="token comment"># \u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5305\u7BA1\u7406\u5668</span>

<span class="token comment"># NPM</span>
$ <span class="token function">npm</span> <span class="token function">install</span> @element-plus/icons-vue
<span class="token comment"># Yarn</span>
$ <span class="token function">yarn</span> <span class="token function">add</span> @element-plus/icons-vue
<span class="token comment"># pnpm</span>
$ <span class="token function">pnpm</span> <span class="token function">install</span> @element-plus/icons-vue
</code></pre></div><h3 id="\u6CE8\u518C\u6240\u6709\u56FE\u6807" tabindex="-1">\u6CE8\u518C\u6240\u6709\u56FE\u6807 <a class="header-anchor vp-link" href="#\u6CE8\u518C\u6240\u6709\u56FE\u6807" aria-hidden="true">#</a></h3><p>\u60A8\u9700\u8981\u4ECE <code>@element-plus/icons-vue</code> \u4E2D\u5BFC\u5165\u6240\u6709\u56FE\u6807\u5E76\u8FDB\u884C\u5168\u5C40\u6CE8\u518C\u3002</p><div class="language-ts"><pre><code><span class="token comment">// main.ts</span>

<span class="token comment">// \u5982\u679C\u60A8\u6B63\u5728\u4F7F\u7528CDN\u5F15\u5165\uFF0C\u8BF7\u5220\u9664\u4E0B\u9762\u4E00\u884C\u3002</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ElementPlusIconsVue <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/icons-vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> component<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>ElementPlusIconsVue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> component<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),U=s("\u60A8\u4E5F\u53EF\u4EE5\u53C2\u8003 "),$={href:"https://codepen.io/sxzz/pen/xxpvdrg",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},F=s("\u6B64\u6A21\u677F"),O=s("\u3002"),W=n("h3",{id:"\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165",tabindex:"-1"},[s("\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165 "),n("a",{class:"header-anchor vp-link",href:"#\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165","aria-hidden":"true"},"#")],-1),Y=n("p",null,[s("\u76F4\u63A5\u901A\u8FC7\u6D4F\u89C8\u5668\u7684 HTML \u6807\u7B7E\u5BFC\u5165 Element Plus\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u4F7F\u7528\u5168\u5C40\u53D8\u91CF "),n("code",null,"ElementPlusIconsVue"),s("\u4E86\u3002")],-1),J=s("\u6839\u636E\u4E0D\u540C\u7684 CDN \u63D0\u4F9B\u5546\u6709\u4E0D\u540C\u7684\u5F15\u5165\u65B9\u5F0F\uFF0C \u6839\u636E\u4E0D\u540C\u7684 CDN \u63D0\u4F9B\u5546\u6709\u4E0D\u540C\u7684\u5F15\u5165\u65B9\u5F0F\uFF0C \u6211\u4EEC\u5728\u8FD9\u91CC\u4EE5 "),K={href:"https://unpkg.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},Q=s("unpkg"),X=s(" \u548C "),Z={href:"https://jsdelivr.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},nn=s("jsDelivr"),sn=s(" \u4E3E\u4F8B\u3002 \u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5176\u5B83\u7684 CDN \u4F9B\u5E94\u5546\u3002"),an=l(`<h4 id="\u4F7F\u7528-unpkg" tabindex="-1">\u4F7F\u7528 unpkg <a class="header-anchor vp-link" href="#\u4F7F\u7528-unpkg" aria-hidden="true">#</a></h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/@element-plus/icons-vue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="\u4F7F\u7528-jsdelivr" tabindex="-1">\u4F7F\u7528 jsDelivr <a class="header-anchor vp-link" href="#\u4F7F\u7528-jsdelivr" aria-hidden="true">#</a></h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@element-plus/icons-vue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,4),tn={class:"tip custom-block"},en=n("p",{class:"custom-block-title"},"TIP",-1),pn=s("\u6211\u4EEC\u5EFA\u8BAE\u4F7F\u7528 CDN \u5F15\u5165 Element Plus \u7684\u7528\u6237\u5728\u94FE\u63A5\u5730\u5740\u4E0A\u9501\u5B9A\u7248\u672C\uFF0C\u4EE5\u514D\u5C06\u6765 Element Plus \u5347\u7EA7\u65F6\u53D7\u5230\u975E\u517C\u5BB9\u6027\u66F4\u65B0\u7684\u5F71\u54CD\u3002 \u9501\u5B9A\u7248\u672C\u7684\u65B9\u6CD5\u8BF7\u67E5\u770B "),on={href:"https://unpkg.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},ln=s("unpkg.com"),cn=s("\u3002"),un=n("h3",{id:"\u81EA\u52A8\u5BFC\u5165",tabindex:"-1"},[s("\u81EA\u52A8\u5BFC\u5165 "),n("a",{class:"header-anchor vp-link",href:"#\u81EA\u52A8\u5BFC\u5165","aria-hidden":"true"},"#")],-1),kn=s("\u4F7F\u7528 "),rn={href:"https://github.com/antfu/unplugin-icons",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},dn=s("unplugin-icons"),_n=s(" \u548C "),hn={href:"https://github.com/antfu/unplugin-auto-import",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},gn=s("unplugin-auto-import"),mn=s(" \u4ECE iconify \u4E2D\u81EA\u52A8\u5BFC\u5165\u4EFB\u4F55\u56FE\u6807\u96C6\u3002 \u60A8\u53EF\u4EE5\u53C2\u8003"),vn={href:"https://github.com/sxzz/element-plus-best-practices/blob/db2dfc983ccda5570033a0ac608a1bd9d9a7f658/vite.config.ts#L21-L58",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},fn=s("\u6B64\u6A21\u677F"),bn=s("\u3002"),yn=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[s("\u57FA\u7840\u7528\u6CD5 "),n("a",{class:"header-anchor vp-link",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),qn={class:"warning custom-block"},Tn=n("p",{class:"custom-block-title"},"WARNING",-1),xn=s("\u56E0\u4E3A HTML \u6807\u51C6\u5DF2\u7ECF\u5B9A\u4E49\u4E86\u4E00\u4E2A\u540D\u4E3A "),Sn={href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},In=s("menu"),En=s(" \u7684\u6807\u7B7E\uFF0C \u5982\u679C\u60A8\u6CE8\u518C\u7684 "),Vn=n("code",null,"menu",-1),wn=s(" \u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u60A8\u9700\u8981\u4F7F\u7528\u522B\u540D\u6765\u6E32\u67D3\u56FE\u6807\u3002"),An=l(`<div class="language-vue"><pre><code><span class="token comment">&lt;!-- \u4F7F\u7528 el-icon \u4E3A SVG \u56FE\u6807\u63D0\u4F9B\u5C5E\u6027 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>size<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Edit</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u6216\u8005\u72EC\u7ACB\u4F7F\u7528\u5B83\uFF0C\u4E0D\u4ECE\u7236\u7EA7\u83B7\u53D6\u5C5E\u6027 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Edit</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),Cn=l(`<h2 id="\u7ED3\u5408-el-icon-\u4F7F\u7528" tabindex="-1">\u7ED3\u5408 el-icon \u4F7F\u7528 <a class="header-anchor vp-link" href="#\u7ED3\u5408-el-icon-\u4F7F\u7528" aria-hidden="true">#</a></h2><p><code>el-icon</code> \u4E3A raw SVG \u56FE\u6807\u63D0\u4F9B\u989D\u5916\u7684\u5C5E\u6027, \u63D0\u4F9B\u7684\u8BE6\u7EC6\u5C5E\u6027\u8BF7\u7EE7\u7EED\u9605\u8BFB\u3002</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    with extra class <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>is-loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>, your icon is able to rotate 360 deg in 2
    seconds, you can also override this
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Edit</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#409EFC<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-inherit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Share</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Delete</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>is-loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loading</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">vertical-align</span><span class="token punctuation">:</span> middle</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Search</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">vertical-align</span><span class="token punctuation">:</span> middle</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span> Search <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,3),Pn=n("p",null,[s(" \u901A\u8FC7\u6DFB\u52A0\u989D\u5916\u7684\u7C7B\u540D "),n("b",null,"is-loading"),s("\uFF0C\u4F60\u7684\u56FE\u6807\u5C31\u53EF\u4EE5\u5728 2 \u79D2\u5185\u65CB\u8F6C 360 \u5EA6\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u6539\u5199\u60F3\u8981\u7684\u52A8\u753B\u3002 ")],-1),Nn={style:{display:"flex","align-items":"center","justify-content":"space-between",width:"100%"}},zn=n("span",{style:{"vertical-align":"middle"}},null,-1),Dn=l(`<h2 id="\u76F4\u63A5\u4F7F\u7528-svg-\u56FE\u6807" tabindex="-1">\u76F4\u63A5\u4F7F\u7528 SVG \u56FE\u6807 <a class="header-anchor vp-link" href="#\u76F4\u63A5\u4F7F\u7528-svg-\u56FE\u6807" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u7531\u4E8ESVG\u56FE\u6807\u9ED8\u8BA4\u4E0D\u643A\u5E26\u4EFB\u4F55\u5C5E\u6027 --&gt;</span>
    <span class="token comment">&lt;!-- \u4F60\u9700\u8981\u76F4\u63A5\u63D0\u4F9B\u5B83\u4EEC --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Edit</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Share</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Delete</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Search</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),jn={style:{"font-size":"20px"}},Gn=n("h2",{id:"icon-collection",tabindex:"-1"},[s("\u56FE\u6807\u96C6\u5408 "),n("a",{class:"header-anchor vp-link",href:"#icon-collection","aria-hidden":"true"},"#")],-1),Rn=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("\u53EA\u8981\u4F60\u5B89\u88C5\u4E86 @element-plus/icons-vue\uFF0C"),n("strong",null,"\u5C31\u53EF\u4EE5\u5728\u4EFB\u610F\u7248\u672C\u91CC\u4F7F\u7528 SVG \u56FE\u6807"),s("\u3002")]),n("p",null,[n("strong",null,"\u60A8\u53EF\u4EE5\u70B9\u51FB\u56FE\u6807\u590D\u5236\u4EE3\u7801\u3002")])],-1),Ln=n("h2",{id:"api",tabindex:"-1"},[s("API "),n("a",{class:"header-anchor vp-link",href:"#api","aria-hidden":"true"},"#")],-1),Bn=n("h3",{id:"attributes",tabindex:"-1"},[s("Attributes "),n("a",{class:"header-anchor vp-link",href:"#attributes","aria-hidden":"true"},"#")],-1),Mn={class:"vp-table"},Hn=n("thead",null,[n("tr",null,[n("th",null,"\u5C5E\u6027\u540D"),n("th",null,"\u8BF4\u660E"),n("th",null,"\u7C7B\u578B"),n("th",null,"\u9ED8\u8BA4\u503C")])],-1),Un=n("td",null,"color",-1),$n=n("td",null,"svg \u7684 fill \u989C\u8272",-1),Fn=n("td",null,"\u7EE7\u627F\u989C\u8272",-1),On=n("td",null,"size",-1),Wn=n("td",null,"SVG \u56FE\u6807\u7684\u5927\u5C0F\uFF0Csize x size",-1),Yn=s(" / "),Jn=n("td",null,"\u7EE7\u627F\u5B57\u4F53\u5927\u5C0F",-1),Kn=l('<h3 id="slots" tabindex="-1">Slots <a class="header-anchor vp-link" href="#slots" aria-hidden="true">#</a></h3><div class="vp-table"><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td></tr></tbody></table></div><h2 id="\u6E90\u4EE3\u7801" tabindex="-1">\u6E90\u4EE3\u7801 <a class="header-anchor vp-link" href="#\u6E90\u4EE3\u7801" aria-hidden="true">#</a></h2>',3),Qn={href:"https://github.com/element-plus/element-plus/tree/dev/packages/components/icon",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},Xn=s("\u7EC4\u4EF6"),Zn=s(" \u2022 "),ns={href:"https://github.com/element-plus/element-plus/blob/dev/docs/en-US/component/icon.md",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},ss=s("\u6587\u6863"),as=n("h2",{id:"\u8D21\u732E\u8005",tabindex:"-1"},[s("\u8D21\u732E\u8005 "),n("a",{class:"header-anchor vp-link",href:"#\u8D21\u732E\u8005","aria-hidden":"true"},"#")],-1),is='{"title":"Icon \u56FE\u6807","description":"","frontmatter":{"title":"Icon \u56FE\u6807","lang":"zh-CN"},"headers":[{"level":2,"title":"\u4F7F\u7528\u56FE\u6807","slug":"\u4F7F\u7528\u56FE\u6807"},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"\u4F7F\u7528\u5305\u7BA1\u7406\u5668","slug":"\u4F7F\u7528\u5305\u7BA1\u7406\u5668"},{"level":3,"title":"\u6CE8\u518C\u6240\u6709\u56FE\u6807","slug":"\u6CE8\u518C\u6240\u6709\u56FE\u6807"},{"level":3,"title":"\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165","slug":"\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165"},{"level":3,"title":"\u81EA\u52A8\u5BFC\u5165","slug":"\u81EA\u52A8\u5BFC\u5165"},{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u7ED3\u5408 el-icon \u4F7F\u7528","slug":"\u7ED3\u5408-el-icon-\u4F7F\u7528"},{"level":2,"title":"\u76F4\u63A5\u4F7F\u7528 SVG \u56FE\u6807","slug":"\u76F4\u63A5\u4F7F\u7528-svg-\u56FE\u6807"},{"level":2,"title":"\u56FE\u6807\u96C6\u5408","slug":"icon-collection"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Attributes","slug":"attributes"},{"level":3,"title":"Slots","slug":"slots"},{"level":2,"title":"\u6E90\u4EE3\u7801","slug":"\u6E90\u4EE3\u7801"},{"level":2,"title":"\u8D21\u732E\u8005","slug":"\u8D21\u732E\u8005"}],"relativePath":"zh-CN/component/icon.md","lastUpdated":null}',ts={},us=Object.assign(ts,{__name:"icon",setup(es){return(ps,os)=>{const t=q,o=c("ElIcon"),u=c("ElRow"),h=c("ElButton"),g=c("IconList"),k=c("api-typing"),m=v;return f(),b("div",null,[T,x,S,n("ul",null,[n("li",null,[n("p",null,[I,E,V,n("a",w,[A,a(t,{class:"link-icon"})]),C])]),n("li",null,[n("p",null,[P,n("a",N,[z,a(t,{class:"link-icon"})]),n("a",D,[j,a(t,{class:"link-icon"})]),G,R,L,n("a",B,[M,a(t,{class:"link-icon"})])])])]),H,n("p",null,[U,n("a",$,[F,a(t,{class:"link-icon"})]),O]),W,Y,n("p",null,[J,n("a",K,[Q,a(t,{class:"link-icon"})]),X,n("a",Z,[nn,a(t,{class:"link-icon"})]),sn]),an,n("div",tn,[en,n("p",null,[pn,n("a",on,[ln,a(t,{class:"link-icon"})]),cn])]),un,n("p",null,[kn,n("a",rn,[dn,a(t,{class:"link-icon"})]),_n,n("a",hn,[gn,a(t,{class:"link-icon"})]),mn,n("a",vn,[fn,a(t,{class:"link-icon"})]),bn]),yn,n("div",qn,[Tn,n("p",null,[xn,n("a",Sn,[In,a(t,{class:"link-icon"})]),En,Vn,wn])]),An,a(u,null,{default:p(()=>[n("div",null,[a(o,{size:30},{default:p(()=>[a(e(i))]),_:1}),a(e(i))])]),_:1}),Cn,a(u,null,{default:p(()=>[Pn,n("div",Nn,[a(o,{size:20},{default:p(()=>[a(e(i))]),_:1}),a(o,{color:"#409EFC",class:"no-inherit"},{default:p(()=>[a(e(r))]),_:1}),a(o,null,{default:p(()=>[a(e(d))]),_:1}),a(o,{class:"is-loading"},{default:p(()=>[a(e(y))]),_:1}),a(h,{type:"primary"},{default:p(()=>[a(o,{style:{"vertical-align":"middle",color:"#fff"}},{default:p(()=>[a(e(_))]),_:1}),zn]),_:1})])]),_:1}),Dn,a(u,null,{default:p(()=>[n("div",jn,[a(e(i),{style:{width:"1em",height:"1em","margin-right":"8px"}}),a(e(r),{style:{width:"1em",height:"1em","margin-right":"8px"}}),a(e(d),{style:{width:"1em",height:"1em","margin-right":"8px"}}),a(e(_),{style:{width:"1em",height:"1em","margin-right":"8px"}})])]),_:1}),Gn,Rn,a(g),Ln,Bn,n("div",Mn,[n("table",null,[Hn,n("tbody",null,[n("tr",null,[Un,$n,n("td",null,[a(k,{type:"string",details:""})]),Fn]),n("tr",null,[On,Wn,n("td",null,[a(k,{type:"number",details:""}),Yn,a(k,{type:"string",details:""})]),Jn])])])]),Kn,n("p",null,[n("a",Qn,[Xn,a(t,{class:"link-icon"})]),Zn,n("a",ns,[ss,a(t,{class:"link-icon"})])]),as,a(m,{id:"icon"})])}}});export{is as __pageData,us as default};
