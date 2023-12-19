import{_ as e,o as a,c as s,R as o}from"./chunks/framework.HYN-VFUH.js";const g=JSON.parse('{"title":"从 v2 迁移","description":"","frontmatter":{},"headers":[],"relativePath":"guide/migration-from-v2.md","filePath":"guide/migration-from-v2.md"}'),t={name:"guide/migration-from-v2.md"},l=o(`<h1 id="migration-from-v2" tabindex="-1">从 v2 迁移 <a class="header-anchor" href="#migration-from-v2" aria-label="Permalink to &quot;从 v2 迁移 {#migration-from-v2}&quot;">​</a></h1><h2 id="node-support" tabindex="-1">Node 支持 <a class="header-anchor" href="#node-support" aria-label="Permalink to &quot;Node 支持 {#node-support}&quot;">​</a></h2><p>Vite 不再支持 Node 12 / 13 / 15，因为上述版本已经进入了 EOL 阶段。现在你必须使用 Node 14.18+ / 16+ 版本。</p><h2 id="modern-browser-baseline-change" tabindex="-1">现代浏览器基准线变化 <a class="header-anchor" href="#modern-browser-baseline-change" aria-label="Permalink to &quot;现代浏览器基准线变化 {#modern-browser-baseline-change}&quot;">​</a></h2><p>生产构建打包时会假定目标支持现代 JavaScript。默认情况下，Vite 的目标是支持 <a href="https://caniuse.com/es6-module" target="_blank" rel="noreferrer">原生 ES 模块</a>、<a href="https://caniuse.com/es6-module-dynamic-import" target="_blank" rel="noreferrer">原生 ESM 动态导入</a> 以及 <a href="https://caniuse.com/mdn-javascript_operators_import_meta" target="_blank" rel="noreferrer"><code>import.meta</code></a> 的浏览器：</p><ul><li>Chrome &gt;=87</li><li>Firefox &gt;=78</li><li>Safari &gt;=13</li><li>Edge &gt;=88</li></ul><p>一小部分用户需要 <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noreferrer">@vitejs/plugin-legacy</a>，它会自动生成兼容性 chunk 以及相应的 ES 语言功能的 polyfill。</p><h2 id="config-options-changes" tabindex="-1">配置选项变化 <a class="header-anchor" href="#config-options-changes" aria-label="Permalink to &quot;配置选项变化 {#config-options-changes}&quot;">​</a></h2><ul><li><p>下列在 v2 当中我们已经标记为弃用选项，现在已经被移除：</p><ul><li><code>alias</code>（改为了 <a href="./../config/shared-options.html#resolve-alias"><code>resolve.alias</code></a>）</li><li><code>dedupe</code>（改为了 <a href="./../config/shared-options.html#resolve-dedupe"><code>resolve.dedupe</code></a>）</li><li><code>build.base</code>（改为了 <a href="./../config/shared-options.html#base"><code>base</code></a>）</li><li><code>build.brotliSize</code>（改为了 <a href="./../config/build-options.html#build-reportcompressedsize"><code>build.reportCompressedSize</code></a>）</li><li><code>build.cleanCssOptions</code>（Vite 现在使用 esbuild 来做 CSS 最小化压缩）</li><li><code>build.polyfillDynamicImport</code>（在没有支持动态导入的浏览器中，使用 <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noreferrer"><code>@vitejs/plugin-legacy</code></a>）</li><li><code>optimizeDeps.keepNames</code>（改为了 <a href="./../config/dep-optimization-options.html#optimizedeps-esbuildoptions"><code>optimizeDeps.esbuildOptions.keepNames</code></a>）</li></ul></li></ul><h2 id="achitecture-changes-and-legacy-options" tabindex="-1">架构变更和兼容选项 <a class="header-anchor" href="#achitecture-changes-and-legacy-options" aria-label="Permalink to &quot;架构变更和兼容选项 {#achitecture-changes-and-legacy-options}&quot;">​</a></h2><p>这一小节描述了 Vite v3 中最大的架构变更。在项目从 v2 迁移、遇到兼容性问题时，可以使用新添加的兼容选项来恢复到 Vite v2 策略。</p><h3 id="dev-server-changes" tabindex="-1">开发服务器变化 <a class="header-anchor" href="#dev-server-changes" aria-label="Permalink to &quot;开发服务器变化 {#dev-server-changes}&quot;">​</a></h3><p>Vite 的默认开发服务器端口号现在改为了 5173。你可以使用 <a href="./../config/server-options.html#server-port"><code>server.port</code></a> 将其设置为 3000。</p><p>Vite 的默认开发服务器主机地址现在改为了 <code>localhost</code>。在 Vite v2，Vite 默认监听的是 <code>127.0.0.1</code>。Node.js 在 v17 版本以下通常会解析 <code>localhost</code> 到 <code>127.0.0.1</code>，因此对这些版本，主机地址并未变更。若明确需要，对于 Node.js v17 版本以上，你可以使用 <a href="./../config/server-options.html#server-host"><code>server.host</code></a>、将其设置为 <code>127.0.0.1</code>。</p><p>请注意，现在 Vite v3 会打印出正确的主机地址。这意味着使用 <code>localhost</code> 时 Vite 可能会打印 <code>127.0.0.1</code> 作为正在监听的地址。你可以设置 <a href="https://nodejs.org/api/dns.html#dns_dns_setdefaultresultorder_order" target="_blank" rel="noreferrer"><code>dns.setDefaultResultOrder(&#39;verbatim&#39;)</code></a> 来避免这一表现。查看 <a href="./../config/server-options.html#server-host"><code>server.host</code></a> 了解详情。</p><h3 id="ssr-changes" tabindex="-1">SSR Changes <a class="header-anchor" href="#ssr-changes" aria-label="Permalink to &quot;SSR Changes {#ssr-changes}&quot;">​</a></h3><p>Vite v3 默认在 SSR 构建时使用 ESM 格式。当使用 ESM 时，<a href="https://vitejs.dev/guide/ssr.html#ssr-externals" target="_blank" rel="noreferrer">SSR 外部化的启发式方法</a> 将不再需要。默认情况下所有的依赖都将被外部化。你可以使用 <a href="./../config/ssr-options.html#ssrnoexternal"><code>ssr.noExternal</code></a> 来控制哪些依赖需要被包含进 SSR 的打包产物中。</p><p>如果你无法在你的 SSR 项目中使用 ESM，你可以设置 <code>ssr.format: &#39;cjs&#39;</code> 来生成一个 CJS 格式的产物。在这种情况下，会使用和 Vite v2 相同的外部化策略。</p><p>同样 <a href="https://rollupjs.org/guide/en/#outputinlinedynamicimports" target="_blank" rel="noreferrer"><code>build.rollupOptions.output.inlineDynamicImports</code></a> 现在在 <code>ssr.target</code> 是 <code>node</code> 时，也默认置为了 <code>false</code>。<code>inlineDynamicImports</code> 它会改变执行顺序，并且 node 构建不需要打包到单个文件。</p><h2 id="general-changes" tabindex="-1">其他一般性变化 <a class="header-anchor" href="#general-changes" aria-label="Permalink to &quot;其他一般性变化 {#general-changes}&quot;">​</a></h2><ul><li>SSR 和库模式中将会根据语法格式和包的类型，为输出的 JS 文件提供一个更合理的文件扩展名（<code>js</code>、<code>mjs</code> 或是 <code>cjs</code>）。</li><li>Terser 现在是一个可选依赖。如果你使用的是 <code>build.minify: &#39;terser&#39;</code>，你需要手动安装它：<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm add -D terser</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm add -D terser</span></span></code></pre></div></li></ul><h3 id="importmetaglob" tabindex="-1"><code>import.meta.glob</code> <a class="header-anchor" href="#importmetaglob" aria-label="Permalink to &quot;\`import.meta.glob\` {#importmetaglob}&quot;">​</a></h3><ul><li><p><a href="./features.html#glob-import-as">原始 <code>import.meta.glob</code></a> 从 <code>{ assert: { type: &#39;raw&#39; }}</code> 迁移为 <code>{ as: &#39;raw&#39; }</code></p></li><li><p><code>import.meta.glob</code> 的 key 现在是相对于当前模块。</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">// 文件：/foo/index.js</span></span>
<span class="line"><span style="color:#E1E4E8;">const modules = import.meta.glob(&#39;../foo/*.js&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">// 转换为：</span></span>
<span class="line"><span style="color:#E1E4E8;">const modules = {</span></span>
<span class="line"><span style="color:#FDAEB7;">-  &#39;../foo/bar.js&#39;: () =&gt; {}</span></span>
<span class="line"><span style="color:#85E89D;">+  &#39;./bar.js&#39;: () =&gt; {}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">// 文件：/foo/index.js</span></span>
<span class="line"><span style="color:#24292E;">const modules = import.meta.glob(&#39;../foo/*.js&#39;)</span></span>
<span class="line"><span style="color:#24292E;">// 转换为：</span></span>
<span class="line"><span style="color:#24292E;">const modules = {</span></span>
<span class="line"><span style="color:#B31D28;">-  &#39;../foo/bar.js&#39;: () =&gt; {}</span></span>
<span class="line"><span style="color:#22863A;">+  &#39;./bar.js&#39;: () =&gt; {}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></li><li><p>当在 <code>import.meta.glob</code> 中使用别名（alias）时，键值总是绝对路径。</p></li><li><p><code>import.meta.globEager</code> 已经弃用，请使用 <code>import.meta.glob(&#39;*&#39;, { eager: true })</code> 来代替。</p></li></ul><h3 id="webassembly-support" tabindex="-1">WebAssembly 支持 <a class="header-anchor" href="#webassembly-support" aria-label="Permalink to &quot;WebAssembly 支持 {#webassembly-support}&quot;">​</a></h3><p><code>import init from &#39;example.wasm&#39;</code> 语法被弃用，以防止将来与 <a href="https://github.com/WebAssembly/esm-integration" target="_blank" rel="noreferrer">&quot;WASM 的 ESM 集成&quot;</a> 冲突。</p><p>你可以使用 <code>?init</code> 参数，和之前的行为类似：</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">-import init from &#39;example.wasm&#39;</span></span>
<span class="line"><span style="color:#85E89D;">+import init from &#39;example.wasm?init&#39;</span></span>
<span class="line"><span style="color:#FDAEB7;">-init().then((exports) =&gt; {</span></span>
<span class="line"><span style="color:#85E89D;">+init().then(({ exports }) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  exports.test()</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">-import init from &#39;example.wasm&#39;</span></span>
<span class="line"><span style="color:#22863A;">+import init from &#39;example.wasm?init&#39;</span></span>
<span class="line"><span style="color:#B31D28;">-init().then((exports) =&gt; {</span></span>
<span class="line"><span style="color:#22863A;">+init().then(({ exports }) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  exports.test()</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="automatic-https-certificate-generation" tabindex="-1">自动生成 https 证书 <a class="header-anchor" href="#automatic-https-certificate-generation" aria-label="Permalink to &quot;自动生成 https 证书 {#automatic-https-certificate-generation}&quot;">​</a></h3><p>当使用 <code>https</code> 时需要一个合法可用的证书。在 Vite v2 中，如果没有配置证书，Vite 会自动生成和缓存一个自签名的证书。 从 Vite v3 开始，我们推荐手动创建你自己的证书。如果你仍想要使用 v2 中的自动生成，该功能可以通过添加 <a href="https://github.com/vitejs/vite-plugin-basic-ssl" target="_blank" rel="noreferrer">@vitejs/plugin-basic-ssl</a> 到项目插件中来实现。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> basicSsl </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vitejs/plugin-basic-ssl&#39;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#B392F0;">basicSsl</span><span style="color:#E1E4E8;">()]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> basicSsl </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vitejs/plugin-basic-ssl&#39;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span><span style="color:#6F42C1;">basicSsl</span><span style="color:#24292E;">()]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="experimental" tabindex="-1">实验性 <a class="header-anchor" href="#experimental" aria-label="Permalink to &quot;实验性 {#experimental}&quot;">​</a></h2><h3 id="在构建阶段使用-esbuild-依赖优化" tabindex="-1">在构建阶段使用 esbuild 依赖优化 <a class="header-anchor" href="#在构建阶段使用-esbuild-依赖优化" aria-label="Permalink to &quot;在构建阶段使用 esbuild 依赖优化&quot;">​</a></h3><p>在 v3 版本下，Vite 允许在构建阶段使用 esbuild 进行依赖优化。如果开启此项，那么它将消除 v2 版本中存在的最明显的开发与构建最终产物之间的区别。<a href="https://github.com/rollup/plugins/tree/master/packages/commonjs" target="_blank" rel="noreferrer"><code>@rollupjs/plugin-commonjs</code></a> 在此处不再需要，因为 esbuild 会将纯 CommonJS 依赖转换为 ESM。</p><p>如果你想尝试该构建策略，你可以使用 <code>optimizeDeps.disabled: false</code>（在 v3 中默认是 <code>disabled: &#39;build&#39;</code>）。<code>@rollup/plugin-commonjs</code> 可以通过设置 <code>build.commonjsOptions: { include: [] }</code> 来移除。</p><h2 id="advanced" tabindex="-1">进阶 <a class="header-anchor" href="#advanced" aria-label="Permalink to &quot;进阶 {#advanced}&quot;">​</a></h2><p>下列改动仅会影响到插件/工具的作者：</p><ul><li><a href="https://github.com/vitejs/vite/pull/5868" target="_blank" rel="noreferrer">[#5868] refactor: remove deprecated api for 3.0</a><ul><li><code>printHttpServerUrls</code> 被移除</li><li><code>server.app</code>、<code>server.transformWithEsbuild</code> 被移除</li><li><code>import.meta.hot.acceptDeps</code> 被移除</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/6901" target="_blank" rel="noreferrer">[#6901] fix: sequential injection of tags in transformIndexHtml</a><ul><li><code>transformIndexHtml</code> 现在会从更早的插件处获取到正确的内容，因此，现在注入的标签的顺序与预期的一样。</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/7995" target="_blank" rel="noreferrer">[#7995] chore: do not fixStacktrace</a><ul><li><code>ssrLoadModule</code> 的 <code>fixStacktrace</code> 选项现在默认为 <code>false</code></li></ul></li><li><a href="https://github.com/vitejs/vite/pull/8178" target="_blank" rel="noreferrer">[#8178] feat!: migrate to ESM</a><ul><li><code>formatPostcssSourceMap</code> 现在是异步的</li><li><code>resolvePackageEntry</code>、<code>resolvePackageData</code> 在 CJS 构建中将不再可用（需要在 CJS 中使用动态导入）</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/8626" target="_blank" rel="noreferrer">[#8626] refactor: type client maps</a><ul><li><code>import.meta.hot.accept</code> 的回调函数类型现在更严格了。现在是 <code>(mod: (Record&lt;string, any&gt; &amp; { [Symbol.toStringTag]: &#39;Module&#39; }) | undefined) =&gt; void</code>（之前是 <code>(mod: any) =&gt; void</code>）。</li></ul></li></ul><p>此外，还有其他一些只影响少数用户的破坏性变化。</p><ul><li><a href="https://github.com/vitejs/vite/pull/5018" target="_blank" rel="noreferrer">[#5018] feat: enable <code>generatedCode: &#39;es2015&#39;</code> for rollup build</a><ul><li>转义到 ES5 现在是必要的，即使用户代码仅含 ES5。</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/7877" target="_blank" rel="noreferrer">[#7877] fix: vite client types</a><ul><li><code>/// &lt;reference lib=&quot;dom&quot; /&gt;</code> 已从 <code>vite/client.d.ts</code> 中移除。必须在 <code>tsconfig.json</code> 使用 <code>{ &quot;lib&quot;: [&quot;dom&quot;] }</code> 或 <code>{ &quot;lib&quot;: [&quot;webworker&quot;] }</code>。</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/8090" target="_blank" rel="noreferrer">[#8090] feat: preserve process env vars in lib build</a><ul><li><code>process.env.*</code> 现在在库模式下是被保留的了。</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/8280" target="_blank" rel="noreferrer">[#8280] feat: non-blocking esbuild optimization at build time</a><ul><li><code>server.force</code> 选项现已移除，改为了直接的 <code>force</code> 选项。</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/8550" target="_blank" rel="noreferrer">[#8550] fix: dont handle sigterm in middleware mode</a><ul><li>当以中间件模式运行时，Vite 不再在 <code>SIGTERM</code> 强制杀进程。</li></ul></li></ul><h2 id="migration-from-v1" tabindex="-1">从 v1 迁移 <a class="header-anchor" href="#migration-from-v1" aria-label="Permalink to &quot;从 v1 迁移 {#migration-from-v1}&quot;">​</a></h2><p>在 Vite v2 文档中查看 <a href="https://v2.vitejs.dev/guide/migration.html" target="_blank" rel="noreferrer">Migration from v1 Guide</a>（<a href="https://cn.vitejs.dev/guide/migration-from-v1.html" target="_blank" rel="noreferrer">中文版</a>），了解如何将你的应用迁移到 Vite v2，然后再处理本页中所提及的变化。</p>`,41),r=[l];function n(i,c,p,d,h,m){return a(),s("div",null,r)}const b=e(t,[["render",n]]);export{g as __pageData,b as default};
