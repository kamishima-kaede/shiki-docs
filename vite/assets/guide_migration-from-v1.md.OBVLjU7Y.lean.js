import{_ as s,o as a,c as n,R as l}from"./chunks/framework.HYN-VFUH.js";const h=JSON.parse('{"title":"从 v1 迁移","description":"","frontmatter":{},"headers":[],"relativePath":"guide/migration-from-v1.md","filePath":"guide/migration-from-v1.md"}'),o={name:"guide/migration-from-v1.md"},p=l(`<h1 id="migration-from-v1" tabindex="-1">从 v1 迁移 <a class="header-anchor" href="#migration-from-v1" aria-label="Permalink to &quot;从 v1 迁移 {#migration-from-v1}&quot;">​</a></h1><h2 id="config-options-change" tabindex="-1">配置项变化 <a class="header-anchor" href="#config-options-change" aria-label="Permalink to &quot;配置项变化 {#config-options-change}&quot;">​</a></h2><ul><li><p>以下选项已被删除，应通过 <a href="./api-plugin.html">插件</a> 实现：</p><ul><li><code>resolvers</code></li><li><code>transforms</code></li><li><code>indexHtmlTransforms</code></li></ul></li><li><p><code>jsx</code> 和 <code>enableEsbuild</code> 都已被删除，请使用新的 <a href="/config/#esbuild"><code>esbuild</code></a> 选项。</p></li><li><p><a href="/config/#css-modules">CSS 相关选项</a> 都包含在 <code>css</code> 字段下。</p></li><li><p>所有 <a href="/config/#build-options">用于构建的选项</a> 都包含在 <code>build</code> 字段下。</p><ul><li><code>rollupInputOptions</code> 和 <code>rollupOutputOptions</code> 已经被 <a href="/config/#build-rollupoptions"><code>build.rollupOptions</code></a> 替代。</li><li><code>esbuildTarget</code> 变更为 <a href="/config/#build-target"><code>build.target</code></a></li><li><code>emitManifest</code> 变更为 <a href="/config/#build-manifest"><code>build.manifest</code></a></li><li>以下构建选项已经被移除，因为它们可以通过插件钩子或其他选项实现： <ul><li><code>entry</code></li><li><code>rollupDedupe</code></li><li><code>emitAssets</code></li><li><code>emitIndex</code></li><li><code>shouldPreload</code></li><li><code>configureBuild</code></li></ul></li></ul></li><li><p>所有的 <a href="/config/#server-options">server-specific options</a> 都包含在 <code>server</code> 字段下。</p><ul><li><code>hostname</code> 变更为 <a href="/config/#server-host"><code>server.host</code></a>。</li><li><code>httpsOptions</code> 已被删除，<a href="/config/#server-https"><code>server.https</code></a> 可以直接接收选项对象。</li><li><code>chokidarWatchOptions</code> 变更为 <a href="/config/#server-watch"><code>server.watch</code></a>。</li></ul></li><li><p><a href="/config/#assetsinclude"><code>assetsInclude</code></a> 现在接收 <code>string | RegExp | (string | RegExp)[]</code> 而不是一个函数。</p></li><li><p>所有 Vue 特定选项都已移除；应将选项传递给 Vue 插件。</p></li></ul><h2 id="alias-behavior-change" tabindex="-1">别名用法变化 <a class="header-anchor" href="#alias-behavior-change" aria-label="Permalink to &quot;别名用法变化 {#alias-behavior-change}&quot;">​</a></h2><p><a href="/config/#resolve-alias"><code>alias</code></a> 现在会被传递给 <code>@rollup/plugin-alias</code> 并不再需要开始/结尾处的斜线了。此行为目前是一个直接替换，所以 1.0 风格的目录别名需要删除其结尾处的斜线：</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">- alias: { &#39;/@foo/&#39;: path.resolve(__dirname, &#39;some-special-dir&#39;) }</span></span>
<span class="line"><span style="color:#85E89D;">+ alias: { &#39;/@foo&#39;: path.resolve(__dirname, &#39;some-special-dir&#39;) }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">- alias: { &#39;/@foo/&#39;: path.resolve(__dirname, &#39;some-special-dir&#39;) }</span></span>
<span class="line"><span style="color:#22863A;">+ alias: { &#39;/@foo&#39;: path.resolve(__dirname, &#39;some-special-dir&#39;) }</span></span></code></pre></div><p>另外，你可以对该选项使用 <code>[{ find: RegExp, replacement: string }]</code> 格式以求更精确的控制。</p><h2 id="vue-support" tabindex="-1">Vue Support <a class="header-anchor" href="#vue-support" aria-label="Permalink to &quot;Vue Support {#vue-support}&quot;">​</a></h2><p>Vite 2.0 核心已经是框架无关的了。对 Vue 的支持目前详见 <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-vue" target="_blank" rel="noreferrer"><code>@vitejs/plugin-vue</code></a>。安装它并添加到 Vite 配置十分简单:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vite&#39;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#B392F0;">vue</span><span style="color:#E1E4E8;">()]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vite&#39;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span><span style="color:#6F42C1;">vue</span><span style="color:#24292E;">()]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="custom-blocks-transforms" tabindex="-1">自定义块转换 <a class="header-anchor" href="#custom-blocks-transforms" aria-label="Permalink to &quot;自定义块转换 {#custom-blocks-transforms}&quot;">​</a></h3><p>一个自定义插件可以用来转换 Vue 自定义块，如下所示:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vite&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vueI18nPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;vue-i18n&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">transform</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">vue&amp;type=i18n</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(id)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">ya</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">ml</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(id)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      code </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;js-yaml&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(code.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">()))</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`export default Comp =&gt; {</span></span>
<span class="line"><span style="color:#9ECBFF;">      Comp.i18n = \${</span><span style="color:#E1E4E8;">code</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">    }\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#B392F0;">vue</span><span style="color:#E1E4E8;">(), vueI18nPlugin]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vite&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vueI18nPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;vue-i18n&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">transform</span><span style="color:#24292E;">(</span><span style="color:#E36209;">code</span><span style="color:#24292E;">, </span><span style="color:#E36209;">id</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#032F62;">/vue&amp;type=i18n/</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(id)) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">/</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">ya</span><span style="color:#D73A49;">?</span><span style="color:#032F62;">ml</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(id)) {</span></span>
<span class="line"><span style="color:#24292E;">      code </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;js-yaml&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">load</span><span style="color:#24292E;">(code.</span><span style="color:#6F42C1;">trim</span><span style="color:#24292E;">()))</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`export default Comp =&gt; {</span></span>
<span class="line"><span style="color:#032F62;">      Comp.i18n = \${</span><span style="color:#24292E;">code</span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#032F62;">    }\`</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span><span style="color:#6F42C1;">vue</span><span style="color:#24292E;">(), vueI18nPlugin]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="react-support" tabindex="-1">React 支持 <a class="header-anchor" href="#react-support" aria-label="Permalink to &quot;React 支持 {#react-support}&quot;">​</a></h2><p>现已支持 React Fast Refresh，详见 <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-react" target="_blank" rel="noreferrer"><code>@vitejs/plugin-react</code></a>。</p><h2 id="hmr-api-change" tabindex="-1">HMR API 变化 <a class="header-anchor" href="#hmr-api-change" aria-label="Permalink to &quot;HMR API 变化 {#hmr-api-change}&quot;">​</a></h2><p><code>import.meta.hot.acceptDeps()</code> 已经弃用。<a href="./api-hmr.html#hot-accept-deps-cb"><code>import.meta.hot.accept()</code></a> 现在可以接收一个或多个依赖。</p><h2 id="manifest-format-change" tabindex="-1">Manifest 格式变化 <a class="header-anchor" href="#manifest-format-change" aria-label="Permalink to &quot;Manifest 格式变化 {#manifest-format-change}&quot;">​</a></h2><p>构建清单现在使用以下格式:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;index.js&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;file&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;assets/index.acaf2b48.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;imports&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#FDAEB7;font-style:italic;">...</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;index.css&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;file&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;assets/index.7b7dbd85.css&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;asset.png&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;file&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;assets/asset.0ab0f9cd.png&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;index.js&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;file&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;assets/index.acaf2b48.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;imports&quot;</span><span style="color:#24292E;">: [</span><span style="color:#B31D28;font-style:italic;">...</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;index.css&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;file&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;assets/index.7b7dbd85.css&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;asset.png&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;file&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;assets/asset.0ab0f9cd.png&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>对于入口 JS chunk，它还列出了它导入的 chunk，这些 chunk 可以用来渲染预加载指令。</p><h2 id="for-plugin-authors" tabindex="-1">致插件作者 <a class="header-anchor" href="#for-plugin-authors" aria-label="Permalink to &quot;致插件作者 {#for-plugin-authors}&quot;">​</a></h2><p>Vite 2 使用了一套完全重定义的，扩展了 Rollup 插件的接口。请阅读新的 <a href="./api-plugin.html">插件开发指南</a>.</p><p>一些将 v1 插件迁移到 v2 的提示:</p><ul><li><code>resolvers</code> -&gt; 使用 <a href="https://rollupjs.org/guide/en/#resolveid" target="_blank" rel="noreferrer"><code>resolveId</code></a> 钩子</li><li><code>transforms</code> -&gt; 使用 <a href="https://rollupjs.org/guide/en/#transform" target="_blank" rel="noreferrer"><code>transform</code></a> 钩子</li><li><code>indexHtmlTransforms</code> -&gt; 使用 <a href="./api-plugin.html#transformindexhtml"><code>transformIndexHtml</code></a> 钩子</li><li>虚拟文件支持 -&gt; 使用 <a href="https://rollupjs.org/guide/en/#resolveid" target="_blank" rel="noreferrer"><code>resolveId</code></a> + <a href="https://rollupjs.org/guide/en/#load" target="_blank" rel="noreferrer"><code>load</code></a> 钩子</li><li>添加 <code>alias</code>，<code>define</code> 或其他配置项 -&gt; 使用 <a href="./api-plugin.html#config"><code>config</code></a> 钩子</li></ul><p>由于大多数逻辑应通过插件钩子实现，而无需使用中间件，因此对中间件的需求大大减少。内部服务器应用现在看起来像旧版的 <a href="https://github.com/senchalabs/connect" target="_blank" rel="noreferrer">connect</a> 实例，而不是 Koa。</p>`,26),e=[p];function t(c,r,i,E,y,d){return a(),n("div",null,e)}const f=s(o,[["render",t]]);export{h as __pageData,f as default};