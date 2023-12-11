import{o,c as e,b as n,a as t,d as s,e as p,_ as c}from"./app.fbc2ae7a.js";const l=n("h1",{id:"\u670D\u52A1\u7AEF\u6E32\u67D3-ssr",tabindex:"-1"},[s("\u670D\u52A1\u7AEF\u6E32\u67D3 (SSR) "),n("a",{class:"header-anchor vp-link",href:"#\u670D\u52A1\u7AEF\u6E32\u67D3-ssr","aria-hidden":"true"},"#")],-1),u=n("p",null,"\u5F53\u4F7F\u7528 Element Plus \u5728 SSR \u573A\u666F\u4E0B\u5F00\u53D1\u65F6\uFF0C\u60A8\u9700\u8981\u5728 SSR \u671F\u95F4\u8FDB\u884C\u7279\u6B8A\u5904\u7406\uFF0C\u4EE5\u907F\u514D\u6C34\u5408\u9519\u8BEF\u3002",-1),i={class:"tip custom-block"},k=n("p",{class:"custom-block-title"},"TIP",-1),r=s("\u5BF9\u4E8ENuxt \u7528\u6237\uFF0C\u6211\u4EEC\u63D0\u4F9B\u7684 "),d={href:"https://github.com/element-plus/element-plus-nuxt",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},g=s("Nuxt \u6A21\u5757"),_=s(" \u5DF2\u7ECF\u5305\u542B\u4E86\u5BF9\u8FD9\u4E9B\u95EE\u9898\u7684\u5904\u7406\u65B9\u6848\u3002 \u60A8\u53EA\u9700\u8981\u5B89\u88C5\u5B83\u5C31\u53EF\u4EE5\u4E86\u3002"),m=p(`<h2 id="\u63D0\u4F9B\u4E00\u4E2Aid" tabindex="-1">\u63D0\u4F9B\u4E00\u4E2AID <a class="header-anchor vp-link" href="#\u63D0\u4F9B\u4E00\u4E2Aid" aria-hidden="true">#</a></h2><p>\u63D0\u4F9B\u7684\u503C\u7528\u4E8E\u751F\u6210 ElementPlus \u4E2D\u7684\u552F\u4E00ID\u3002 \u56E0\u4E3A\u4E0D\u540C\u7684 IDs \u5BB9\u6613\u53D1\u751FSSR\u4E2D\u7684\u6C34\u5408\u7387\u9519\u8BEF\uFF0C \u4E3A\u4E86\u786E\u4FDD\u670D\u52A1\u5668\u7AEF\u548C\u5BA2\u6237\u7AEF\u751F\u6210\u76F8\u540C\u7684ID\uFF0C \u6211\u4EEC\u9700\u8981\u5C06 <code>ID_injection_key</code> \u6CE8\u5165\u5230 Vue\u3002</p><div class="language-ts"><pre><code><span class="token comment">// src/main.js (irrelevant code omitted)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ID_INJECTION_KEY</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token constant">ID_INJECTION_KEY</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  prefix<span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>
  current<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="teleports" tabindex="-1">Teleports <a class="header-anchor vp-link" href="#teleports" aria-hidden="true">#</a></h2>`,4),h={href:"https://vuejs.org/guide/scaling-up/ssr.html#teleports",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},v=s("Teleport"),y=s(" \u88AB\u5143\u7D20\u52A0\u5143\u4EF6\u4E2D\u7684\u591A\u4E2A\u7EC4\u4EF6\u5185\u90E8\u4F7F\u7528 (\u4F8B\u5982) ElDialog, ElDrawer, ElTooltip, ElDropdown, ElSelect, ElDatePicker ...)\uFF0C\u6240\u4EE5\u5728SSR\u671F\u95F4\u9700\u8981\u7279\u6B8A\u5904\u7406\u3002"),f=p(`<h3 id="\u5728\u6302\u8F7D\u65F6\u6E32\u67D3-teleport" tabindex="-1">\u5728\u6302\u8F7D\u65F6\u6E32\u67D3 Teleport <a class="header-anchor vp-link" href="#\u5728\u6302\u8F7D\u65F6\u6E32\u67D3-teleport" aria-hidden="true">#</a></h3><p>\u4E00\u4E2A\u8F83\u5BB9\u6613\u7684\u89E3\u51B3\u529E\u6CD5\u662F\u6709\u6761\u4EF6\u6E32\u67D3\u6302\u8F7D\u4E0A\u7684 Teleport \u3002</p><p>\u4F8B\u5982\uFF0C\u5728Nuxt\u4E2D\u4F7F\u7528 <code>ClientOnly</code> \u8FD9\u4E2A\u7EC4\u4EF6\u3002</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>client-only</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>the tooltip content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span><span class="token punctuation">&gt;</span></span>tooltip<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tooltip</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>client-only</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u6216</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> isClient <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  isClient<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isClient<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>the tooltip content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span><span class="token punctuation">&gt;</span></span>tooltip<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tooltip</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u6CE8\u5165-teleport-\u6807\u8BB0" tabindex="-1">\u6CE8\u5165 Teleport \u6807\u8BB0 <a class="header-anchor vp-link" href="#\u6CE8\u5165-teleport-\u6807\u8BB0" aria-hidden="true">#</a></h3><p>\u53E6\u4E00\u79CD\u65B9\u5F0F\u662F\u5C06\u4F20\u9001\u6807\u8BB0\u6CE8\u5165\u5230\u4F60\u7684 HTML \u9875\u9762\u672B\u5C3E\u7684\u6B63\u786E\u4F4D\u7F6E\u3002</p>`,8),T={class:"warning custom-block"},w=n("p",{class:"custom-block-title"},"WARNING",-1),b=s("Teleport \u53EF\u80FD\u4F1A\u6709\u4E00\u4E9B "),S={href:"https://github.com/vuejs/core/issues?q=is%3Aissue+is%3Aopen+ssr+teleport+",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},q=s("SSR\u95EE\u9898"),x=s("\uFF0C\u6240\u4EE5\u4F60\u5E94\u8BE5\u7279\u522B\u6CE8\u610F\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\u3002"),E=n("ol",null,[n("li",null,[s("\u57FA\u4E8E ElTooltip \u7684 "),n("code",null,"teleported"),s(" \u7684\u5C5E\u6027\u5E94\u8BE5\u662F\u4E00\u81F4\u7684\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u9ED8\u8BA4\u503C\u3002")]),n("li",null,[s("ElDialog \u548C ElDrawer \u7684 "),n("code",null," append-to-body"),s(" \u5C5E\u6027\u503C\u5E94\u8BE5\u662F\u4E00\u81F4\u7684\uFF0C\u5EFA\u8BAE\u542F\u7528 "),n("code",null,"append-to-body"),s("\u3002")]),n("li",null,[s("ElSubMenu\u7EC4\u4EF6\u6709\u591A\u5C42\u5F39\u51FA\u7A97\u53E3\uFF0C\u5EFA\u8BAE\u542F\u7528 "),n("code",null,"popper-append-to-body")])],-1),I=p(`<p>\u60A8\u9700\u8981\u6CE8\u5165\u9760\u8FD1 <code>&lt;body&gt;</code> \u6807\u7B7E\u7684\u4F20\u9001\u6807\u8BB0\u3002</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Element Plus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--preload-links--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--app-teleports--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!--app-html--&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/src/entry-client.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5982\u679C\u60A8\u4FEE\u6539\u4E86 <a href="./namespace.html" class="vp-link">Namespace</a> \u6216 <code>append-to</code> \u5C5E\u6027\uFF0C\u60A8\u9700\u8981\u8C03\u6574 <code>#el-popper-container-</code> \u503C\u3002</p></div><div class="language-js"><pre><code><span class="token comment">// src/entry-server.js (irrelevant code omitted)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> renderToString <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue/server-renderer&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./main&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> manifest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">const</span> ctx <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">renderToString</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span>
  <span class="token keyword">const</span> preloadLinks <span class="token operator">=</span> <span class="token function">renderPreloadLinks</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>modules<span class="token punctuation">,</span> manifest<span class="token punctuation">)</span>
  <span class="token keyword">const</span> teleports <span class="token operator">=</span> <span class="token function">renderTeleports</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>teleports<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span>html<span class="token punctuation">,</span> preloadLinks<span class="token punctuation">,</span> teleports<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">renderTeleports</span><span class="token punctuation">(</span><span class="token parameter">teleports</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>teleports<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>teleports<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">all<span class="token punctuation">,</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;#el-popper-container-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>all<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;div id=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> all
  <span class="token punctuation">}</span><span class="token punctuation">,</span> teleports<span class="token punctuation">.</span>body <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// server.js or prerender.js (irrelevant code omitted)</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>appHtml<span class="token punctuation">,</span> preloadLinks<span class="token punctuation">,</span> teleports<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">render</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> manifest<span class="token punctuation">)</span>

<span class="token keyword">const</span> html <span class="token operator">=</span> template
  <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;!--preload-links--&gt;&#39;</span><span class="token punctuation">,</span> preloadLinks<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;!--app-html--&gt;&#39;</span><span class="token punctuation">,</span> appHtml<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\n|\\r\\n)\\s*&lt;!--app-teleports--&gt;</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> teleports<span class="token punctuation">)</span>
</code></pre></div>`,5),j='{"title":"SSR","description":"","frontmatter":{"title":"SSR","lang":"en-US"},"headers":[{"level":2,"title":"\u63D0\u4F9B\u4E00\u4E2AID","slug":"\u63D0\u4F9B\u4E00\u4E2Aid"},{"level":2,"title":"Teleports","slug":"teleports"},{"level":3,"title":"\u5728\u6302\u8F7D\u65F6\u6E32\u67D3 Teleport","slug":"\u5728\u6302\u8F7D\u65F6\u6E32\u67D3-teleport"},{"level":3,"title":"\u6CE8\u5165 Teleport \u6807\u8BB0","slug":"\u6CE8\u5165-teleport-\u6807\u8BB0"}],"relativePath":"zh-CN/guide/ssr.md","lastUpdated":null}',D={},R=Object.assign(D,{__name:"ssr",setup(A){return(N,P)=>{const a=c;return o(),e("div",null,[l,u,n("div",i,[k,n("p",null,[r,n("a",d,[g,t(a,{class:"link-icon"})]),_])]),m,n("p",null,[n("a",h,[v,t(a,{class:"link-icon"})]),y]),f,n("div",T,[w,n("p",null,[b,n("a",S,[q,t(a,{class:"link-icon"})]),x]),E]),I])}}});export{j as __pageData,R as default};
