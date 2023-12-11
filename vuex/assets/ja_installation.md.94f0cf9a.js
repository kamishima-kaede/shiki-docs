import{_ as a,y as n,x as s,W as t}from"./plugin-vue_export-helper.0b0d78d5.js";const g='{"title":"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u76F4\u63A5\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3059\u308B / CDN","slug":"\u76F4\u63A5\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3059\u308B-cdn"},{"level":2,"title":"NPM","slug":"npm"},{"level":2,"title":"Yarn","slug":"yarn"},{"level":2,"title":"\u958B\u767A\u7248\u30D3\u30EB\u30C9","slug":"\u958B\u767A\u7248\u30D3\u30EB\u30C9"}],"relativePath":"ja/installation.md","lastUpdated":1702210160130}',e={},p=t(`<h1 id="\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB" tabindex="-1">\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB <a class="header-anchor" href="#\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB" aria-hidden="true">#</a></h1><h2 id="\u76F4\u63A5\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3059\u308B-cdn" tabindex="-1">\u76F4\u63A5\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3059\u308B / CDN <a class="header-anchor" href="#\u76F4\u63A5\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3059\u308B-cdn" aria-hidden="true">#</a></h2><p><a href="https://unpkg.com/vuex@4" target="_blank" rel="noopener noreferrer">https://unpkg.com/vuex@4</a></p><p><a href="https://unpkg.com" target="_blank" rel="noopener noreferrer">Unpkg.com</a> \u3067 NPM \u30D9\u30FC\u30B9\u306E CDN \u30EA\u30F3\u30AF\u304C\u63D0\u4F9B\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u4E0A\u8A18\u30EA\u30F3\u30AF\u306F\u5E38\u306B NPM \u306E\u6700\u65B0\u306E\u30EA\u30EA\u30FC\u30B9\u3092\u6307\u3057\u307E\u3059\u3002<code>https://unpkg.com/vuex@4.0.0/dist/vuex.global.js</code> \u306E\u3088\u3046\u306A URL \u306B\u3088\u3063\u3066\u7279\u5B9A\u306E\u30D0\u30FC\u30B8\u30E7\u30F3/\u30BF\u30B0\u3092\u5229\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 </p><p>Vue \u306E\u3042\u3068\u3067 <code>vuex</code> \u3092\u53D6\u308A\u8FBC\u3080\u3068\u81EA\u52D5\u7684\u306B Vuex \u304C\u5C0E\u5165\u3055\u308C\u307E\u3059:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/path/to/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/path/to/vuex.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="npm" tabindex="-1">NPM <a class="header-anchor" href="#npm" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> vuex@next <span class="token parameter variable">--save</span>
</code></pre></div><h2 id="yarn" tabindex="-1">Yarn <a class="header-anchor" href="#yarn" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> vuex@next <span class="token parameter variable">--save</span>
</code></pre></div><h2 id="\u958B\u767A\u7248\u30D3\u30EB\u30C9" tabindex="-1">\u958B\u767A\u7248\u30D3\u30EB\u30C9 <a class="header-anchor" href="#\u958B\u767A\u7248\u30D3\u30EB\u30C9" aria-hidden="true">#</a></h2><p>\u6700\u65B0\u306E\u958B\u767A\u7248\u30D3\u30EB\u30C9\u3092\u5229\u7528\u3057\u305F\u3044\u5834\u5408\u306B\u306F\u3001 GitHub \u304B\u3089\u76F4\u63A5\u30AF\u30ED\u30FC\u30F3\u3057 <code>vuex</code> \u3092\u81EA\u8EAB\u3067\u30D3\u30EB\u30C9\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002</p><div class="language-bash"><pre><code><span class="token function">git</span> clone https://github.com/vuejs/vuex.git node_modules/vuex
<span class="token builtin class-name">cd</span> node_modules/vuex
<span class="token function">yarn</span>
<span class="token function">yarn</span> build
</code></pre></div>`,13),c=[p];function o(l,r,u,i,d,h){return s(),n("div",null,c)}var v=a(e,[["render",o]]);export{g as __pageData,v as default};