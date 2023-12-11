import{_ as a,y as n,x as s,W as t}from"./plugin-vue_export-helper.0b0d78d5.js";const v='{"title":"Installation","description":"","frontmatter":{},"headers":[{"level":2,"title":"Direct Download / CDN","slug":"direct-download-cdn"},{"level":2,"title":"NPM","slug":"npm"},{"level":2,"title":"Yarn","slug":"yarn"},{"level":2,"title":"Dev Build","slug":"dev-build"}],"relativePath":"installation.md","lastUpdated":1702210160125}',e={},o=t(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h1><h2 id="direct-download-cdn" tabindex="-1">Direct Download / CDN <a class="header-anchor" href="#direct-download-cdn" aria-hidden="true">#</a></h2><p><a href="https://unpkg.com/vuex@4" target="_blank" rel="noopener noreferrer">https://unpkg.com/vuex@4</a></p><p><a href="https://unpkg.com" target="_blank" rel="noopener noreferrer">Unpkg.com</a> provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like <code>https://unpkg.com/vuex@4.0.0/dist/vuex.global.js</code>. </p><p>Include <code>vuex</code> after Vue and it will install itself automatically:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/path/to/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/path/to/vuex.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="npm" tabindex="-1">NPM <a class="header-anchor" href="#npm" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> vuex@next <span class="token parameter variable">--save</span>
</code></pre></div><h2 id="yarn" tabindex="-1">Yarn <a class="header-anchor" href="#yarn" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> vuex@next <span class="token parameter variable">--save</span>
</code></pre></div><h2 id="dev-build" tabindex="-1">Dev Build <a class="header-anchor" href="#dev-build" aria-hidden="true">#</a></h2><p>You will have to clone directly from GitHub and build <code>vuex</code> yourself if you want to use the latest dev build.</p><div class="language-bash"><pre><code><span class="token function">git</span> clone https://github.com/vuejs/vuex.git node_modules/vuex
<span class="token builtin class-name">cd</span> node_modules/vuex
<span class="token function">yarn</span>
<span class="token function">yarn</span> build
</code></pre></div>`,13),l=[o];function p(c,i,r,u,d,h){return s(),n("div",null,l)}var g=a(e,[["render",p]]);export{v as __pageData,g as default};