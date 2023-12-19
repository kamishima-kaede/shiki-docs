import{_ as e,o,c as s,R as l}from"./chunks/framework.HYN-VFUH.js";const g=JSON.parse('{"title":"构建选项","description":"","frontmatter":{},"headers":[],"relativePath":"config/build-options.md","filePath":"config/build-options.md"}'),a={name:"config/build-options.md"},n=l(`<h1 id="build-options" tabindex="-1">构建选项 <a class="header-anchor" href="#build-options" aria-label="Permalink to &quot;构建选项 {#build-options}&quot;">​</a></h1><h2 id="build-target" tabindex="-1">build.target <a class="header-anchor" href="#build-target" aria-label="Permalink to &quot;build.target {#build-target}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>string | string[]</code></li><li><strong>默认：</strong> <code>&#39;modules&#39;</code></li><li><strong>相关内容：</strong> <a href="/guide/build.html#browser-compatibility">浏览器兼容性</a></li></ul><p>设置最终构建的浏览器兼容目标。默认值是一个 Vite 特有的值：<code>&#39;modules&#39;</code>，这是指 <a href="https://caniuse.com/es6-module" target="_blank" rel="noreferrer">支持原生 ES 模块</a>、<a href="https://caniuse.com/es6-module-dynamic-import" target="_blank" rel="noreferrer">原生 ESM 动态导入</a> 和 <a href="https://caniuse.com/mdn-javascript_operators_import_meta" target="_blank" rel="noreferrer"><code>import.meta</code></a> 的浏览器。Vite 将替换 <code>modules</code> 为 <code>[&#39;es2020&#39;, &#39;edge88&#39;, &#39;firefox78&#39;, &#39;chrome87&#39;, &#39;safari14&#39;]</code></p><p>另一个特殊值是 “esnext” —— 即假设有原生动态导入支持，并且将会转译得尽可能小：</p><ul><li>如果 <a href="#build-minify"><code>build.minify</code></a> 选项为 <code>&#39;terser&#39;</code>，并且安装的 Terser 版本小于 5.16.0，<code>&#39;esnext&#39;</code> 将会强制降级为 <code>&#39;es2021&#39;</code>。</li><li>其他情况下将完全不会执行转译。</li></ul><p>转换过程将会由 esbuild 执行，并且此值应该是一个合法的 <a href="https://esbuild.github.io/api/#target" target="_blank" rel="noreferrer">esbuild 目标选项</a>。自定义目标也可以是一个 ES 版本（例如：<code>es2015</code>）、一个浏览器版本（例如：<code>chrome58</code>）或是多个目标组成的一个数组。</p><p>注意：如果代码包含不能被 <code>esbuild</code> 安全地编译的特性，那么构建将会失败。查看 <a href="https://esbuild.github.io/content-types/#javascript" target="_blank" rel="noreferrer">esbuild 文档</a> 获取更多细节。</p><h2 id="build-modulepreload" tabindex="-1">build.modulePreload <a class="header-anchor" href="#build-modulepreload" aria-label="Permalink to &quot;build.modulePreload {#build-modulepreload}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>boolean | { polyfill?: boolean, resolveDependencies?: ResolveModulePreloadDependenciesFn }</code></li><li><strong>默认值：</strong> <code>{ polyfill: true }</code></li></ul><p>默认情况下，一个 <a href="https://guybedford.com/es-module-preloading-integrity#modulepreload-polyfill" target="_blank" rel="noreferrer">模块预加载 polyfill</a> 会被自动注入。该 polyfill 会自动注入到每个 <code>index.html</code> 入口的的代理模块中。如果构建通过 <code>build.rollupOptions.input</code> 被配置为了使用非 HTML 入口的形式，那么必须要在你的自定义入口中手动引入该 polyfill：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vite/modulepreload-polyfill&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vite/modulepreload-polyfill&#39;</span></span></code></pre></div><p>注意：此 polyfill <strong>不适用于</strong> <a href="/guide/build.html#library-mode">Library 模式</a>。如果你需要支持不支持动态引入的浏览器，你应该避免在你的库中使用此选项。</p><p>此 polyfill 可以通过 <code>{ polyfill: false }</code> 来禁用。</p><p>每个动态导入要预加载的块列表将由 Vite 计算。默认情况下，在载入这些依赖时，会使用一个包含 <code>base</code> 的绝对路径。如果 <code>base</code> 是相对路径（<code>&#39;&#39;</code> 或者 &#39;./&#39;），解析时则会使用 <code>import.meta.url</code>，以避免出现依赖于最终部署基路径的绝对路径。</p><p>目前有一个实验性功能支持使用 <code>resolveDependencies</code> 函数对依赖项列表及其路径进行细粒度控制。可以在这里 <a href="https://github.com/vitejs/vite/discussions/13841" target="_blank" rel="noreferrer">提供反馈</a>。它期望接收一个 <code>ResolveModulePreloadDependenciesFn</code> 类型的函数:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ResolveModulePreloadDependenciesFn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">url</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">deps</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">[],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">context</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">importer</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">[]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ResolveModulePreloadDependenciesFn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">url</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">deps</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">[],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">context</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">importer</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">[]</span></span></code></pre></div><p><code>resolveDependencies</code> 函数将为每个动态导入调用，同时带着一个它所依赖的 chunk 列表。并且它还会为每个在入口 HTML 文件中导入的 chunk 调用。 可以返回一个新的依赖关系数组，可能被过滤后变少了，也可能有更多依赖注入进来了，同时它们的路径也被修改过。<code>deps</code> 路径是相对于 <code>build.outDir</code> 的。若在注入该模块到 HTML head 时使用 <code>new URL(dep, import.meta.url)</code> 获取绝对路径，则对于 <code>hostType === &#39;js&#39;</code>，允许返回一个相对于 <code>hostId</code> 的路径。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">modulePreload</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">resolveDependencies</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">filename</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">deps</span><span style="color:#E1E4E8;">, { </span><span style="color:#FFAB70;">hostId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">hostType</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> deps.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(condition)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">modulePreload</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">resolveDependencies</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">filename</span><span style="color:#24292E;">, </span><span style="color:#E36209;">deps</span><span style="color:#24292E;">, { </span><span style="color:#E36209;">hostId</span><span style="color:#24292E;">, </span><span style="color:#E36209;">hostType</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> deps.</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">(condition)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>解析得到的依赖路径可以再在之后使用 <a href="./../guide/build.html#advanced-base-options"><code>experimental.renderBuiltUrl</code></a> 更改。</p><h2 id="build-polyfillmodulepreload" tabindex="-1">build.polyfillModulePreload <a class="header-anchor" href="#build-polyfillmodulepreload" aria-label="Permalink to &quot;build.polyfillModulePreload {#build-polyfillmodulepreload}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>boolean</code></li><li><strong>默认：</strong> <code>true</code></li><li><strong>已废弃</strong> 请使用 <code>build.modulePreload.polyfill</code> 替代</li></ul><p>是否自动注入一个 <a href="https://guybedford.com/es-module-preloading-integrity#modulepreload-polyfill" target="_blank" rel="noreferrer">模块预加载 polyfill</a>。</p><h2 id="build-outdir" tabindex="-1">build.outDir <a class="header-anchor" href="#build-outdir" aria-label="Permalink to &quot;build.outDir {#build-outdir}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>string</code></li><li><strong>默认：</strong> <code>dist</code></li></ul><p>指定输出路径（相对于 <a href="/guide/#index-html-and-project-root">项目根目录</a>).</p><h2 id="build-assetsdir" tabindex="-1">build.assetsDir <a class="header-anchor" href="#build-assetsdir" aria-label="Permalink to &quot;build.assetsDir {#build-assetsdir}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>string</code></li><li><strong>默认：</strong> <code>assets</code></li></ul><p>指定生成静态资源的存放路径（相对于 <code>build.outDir</code>）。在 <a href="/guide/build.html#library-mode">库模式</a> 下不能使用。</p><h2 id="build-assetsinlinelimit" tabindex="-1">build.assetsInlineLimit <a class="header-anchor" href="#build-assetsinlinelimit" aria-label="Permalink to &quot;build.assetsInlineLimit {#build-assetsinlinelimit}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>number</code></li><li><strong>默认：</strong> <code>4096</code> (4 KiB)</li></ul><p>小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 <code>0</code> 可以完全禁用此项。</p><p>Git LFS 占位符会自动排除在内联之外，因为它们不包含它们所表示的文件的内容。</p><div class="tip custom-block"><p class="custom-block-title">注意</p><p>如果你指定了 <code>build.lib</code>，那么 <code>build.assetsInlineLimit</code> 将被忽略，无论文件大小或是否为 Git LFS 占位符，资源都会被内联。</p></div><h2 id="build-csscodesplit" tabindex="-1">build.cssCodeSplit <a class="header-anchor" href="#build-csscodesplit" aria-label="Permalink to &quot;build.cssCodeSplit {#build-csscodesplit}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>boolean</code></li><li><strong>默认：</strong> <code>true</code></li></ul><p>启用/禁用 CSS 代码拆分。当启用时，在异步 chunk 中导入的 CSS 将内联到异步 chunk 本身，并在其被加载时一并获取。</p><p>如果禁用，整个项目中的所有 CSS 将被提取到一个 CSS 文件中。</p><div class="tip custom-block"><p class="custom-block-title">注意</p><p>如果指定了 <code>build.lib</code>，<code>build.cssCodeSplit</code> 会默认为 <code>false</code>。</p></div><h2 id="build-csstarget" tabindex="-1">build.cssTarget <a class="header-anchor" href="#build-csstarget" aria-label="Permalink to &quot;build.cssTarget {#build-csstarget}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>string | string[]</code></li><li><strong>默认值：</strong> 与 <a href="/config/#build-target"><code>build.target</code></a> 一致</li></ul><p>此选项允许用户为 CSS 的压缩设置一个不同的浏览器 target，此处的 target 并非是用于 JavaScript 转写目标。</p><p>应只在针对非主流浏览器时使用。 最直观的示例是当你要兼容的场景是安卓微信中的 webview 时，它支持大多数现代的 JavaScript 功能，但并不支持 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb_colors" target="_blank" rel="noreferrer">CSS 中的 <code>#RGBA</code> 十六进制颜色符号</a>。 这种情况下，你需要将 <code>build.cssTarget</code> 设置为 <code>chrome61</code>，以防止 vite 将 <code>rgba()</code> 颜色转化为 <code>#RGBA</code> 十六进制符号的形式。</p><h2 id="build-cssminify" tabindex="-1">build.cssMinify <a class="header-anchor" href="#build-cssminify" aria-label="Permalink to &quot;build.cssMinify {#build-cssminify}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>boolean | &#39;esbuild&#39; | &#39;lightningcss&#39;</code></li><li><strong>默认：</strong> 与 <a href="#build-minify"><code>build.minify</code></a> 一致</li></ul><p>此选项允许用户覆盖 CSS 最小化压缩的配置，而不是使用默认的 <code>build.minify</code>，这样你就可以单独配置 JS 和 CSS 的最小化压缩方式。Vite 默认使用 <code>esbuild</code> 来最小化 CSS。将此选项设置为 <code>&#39;lightningcss&#39;</code> 可以改用 <a href="https://lightningcss.dev/minification.html" target="_blank" rel="noreferrer">Lightning CSS</a> 进行压缩。设置为该项，便可以使用 <a href="./shared-options.html#css-lightningcss"><code>css.lightningcss</code></a> 选项来进行配置。</p><h2 id="build-sourcemap" tabindex="-1">build.sourcemap <a class="header-anchor" href="#build-sourcemap" aria-label="Permalink to &quot;build.sourcemap {#build-sourcemap}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>boolean | &#39;inline&#39; | &#39;hidden&#39;</code></li><li><strong>默认：</strong> <code>false</code></li></ul><p>构建后是否生成 source map 文件。如果为 <code>true</code>，将会创建一个独立的 source map 文件。如果为 <code>&#39;inline&#39;</code>，source map 将作为一个 data URI 附加在输出文件中。<code>&#39;hidden&#39;</code> 的工作原理与 <code>true</code> 相似，只是 bundle 文件中相应的注释将不被保留。</p><h2 id="build-rollupoptions" tabindex="-1">build.rollupOptions <a class="header-anchor" href="#build-rollupoptions" aria-label="Permalink to &quot;build.rollupOptions {#build-rollupoptions}&quot;">​</a></h2><ul><li><strong>类型：</strong> <a href="https://rollupjs.org/configuration-options/" target="_blank" rel="noreferrer"><code>RollupOptions</code></a></li></ul><p>自定义底层的 Rollup 打包配置。这与从 Rollup 配置文件导出的选项相同，并将与 Vite 的内部 Rollup 选项合并。查看 <a href="https://rollupjs.org/configuration-options/" target="_blank" rel="noreferrer">Rollup 选项文档</a> 获取更多细节。</p><h2 id="build-commonjsoptions" tabindex="-1">build.commonjsOptions <a class="header-anchor" href="#build-commonjsoptions" aria-label="Permalink to &quot;build.commonjsOptions {#build-commonjsoptions}&quot;">​</a></h2><ul><li><strong>类型：</strong> <a href="https://github.com/rollup/plugins/tree/master/packages/commonjs#options" target="_blank" rel="noreferrer"><code>RollupCommonJSOptions</code></a></li></ul><p>传递给 <a href="https://github.com/rollup/plugins/tree/master/packages/commonjs" target="_blank" rel="noreferrer">@rollup/plugin-commonjs</a> 插件的选项。</p><h2 id="build-dynamicimportvarsoptions" tabindex="-1">build.dynamicImportVarsOptions <a class="header-anchor" href="#build-dynamicimportvarsoptions" aria-label="Permalink to &quot;build.dynamicImportVarsOptions {#build-dynamicimportvarsoptions}&quot;">​</a></h2><ul><li><strong>类型：</strong> <a href="https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#options" target="_blank" rel="noreferrer"><code>RollupDynamicImportVarsOptions</code></a></li><li><strong>相关内容：</strong> <a href="/guide/features.html#dynamic-import">动态导入</a></li></ul><p>传递给 <a href="https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars" target="_blank" rel="noreferrer">@rollup/plugin-dynamic-import-vars</a> 的选项。</p><h2 id="build-lib" tabindex="-1">build.lib <a class="header-anchor" href="#build-lib" aria-label="Permalink to &quot;build.lib {#build-lib}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>{ entry: string | string[] | { [entryAlias: string]: string }, name?: string, formats?: (&#39;es&#39; | &#39;cjs&#39; | &#39;umd&#39; | &#39;iife&#39;)[], fileName?: string | ((format: ModuleFormat, entryName: string) =&gt; string) }</code></li><li><strong>相关内容：</strong> <a href="/guide/build.html#library-mode">库模式</a></li></ul><p>构建为库。<code>entry</code> 是必需的，因为库不能使用 HTML 作为入口。<code>name</code> 则是暴露的全局变量，并且在 <code>formats</code> 包含 <code>&#39;umd&#39;</code> 或 <code>&#39;iife&#39;</code> 时是必需的。默认 <code>formats</code> 是 <code>[&#39;es&#39;, &#39;umd&#39;]</code>，如果使用了多个配置入口，则是 <code>[&#39;es&#39;, &#39;cjs&#39;]</code>。<code>fileName</code> 是输出的包文件名，默认 <code>fileName</code> 是 <code>package.json</code> 的 <code>name</code> 选项，同时，它还可以被定义为参数为 <code>format</code> 和 <code>entryAlias</code> 的函数。</p><h2 id="build-manifest" tabindex="-1">build.manifest <a class="header-anchor" href="#build-manifest" aria-label="Permalink to &quot;build.manifest {#build-manifest}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>boolean | string</code></li><li><strong>默认：</strong> <code>false</code></li><li><strong>相关内容：</strong> <a href="/guide/backend-integration.html">后端集成</a></li></ul><p>当设置为 <code>true</code>，构建后将会生成 <code>.vite/manifest.json</code> 文件，包含了没有被 hash 过的资源文件名和 hash 后版本的映射。可以为一些服务器框架渲染时提供正确的资源引入链接。当该值为一个字符串时，它将作为 manifest 文件的名字。</p><h2 id="build-ssrmanifest" tabindex="-1">build.ssrManifest <a class="header-anchor" href="#build-ssrmanifest" aria-label="Permalink to &quot;build.ssrManifest {#build-ssrmanifest}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>boolean | string</code></li><li><strong>默认值：</strong> <code>false</code></li><li><strong>相关链接：</strong> <a href="/guide/ssr.html">服务端渲染</a></li></ul><p>当设置为 <code>true</code> 时，构建也将生成 SSR 的 manifest 文件，以确定生产中的样式链接与资产预加载指令。当该值为一个字符串时，它将作为 manifest 文件的名字。</p><h2 id="build-ssr" tabindex="-1">build.ssr <a class="header-anchor" href="#build-ssr" aria-label="Permalink to &quot;build.ssr {#build-ssr}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>boolean | string</code></li><li><strong>默认值：</strong> <code>false</code></li><li><strong>相关链接：</strong> <a href="/guide/ssr.html">服务端渲染</a></li></ul><p>生成面向 SSR 的构建。此选项的值可以是字符串，用于直接定义 SSR 的入口，也可以为 <code>true</code>，但这需要通过设置 <code>rollupOptions.input</code> 来指定 SSR 的入口。</p><h2 id="build-ssremitassets" tabindex="-1">build.ssrEmitAssets <a class="header-anchor" href="#build-ssremitassets" aria-label="Permalink to &quot;build.ssrEmitAssets {#build-ssremitassets}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>boolean</code></li><li><strong>默认：</strong> <code>false</code></li></ul><p>在 SSR 构建期间，静态资源不会被输出，因为它们通常被认为是客户端构建的一部分。这个选项允许框架强制在客户端和 SSR 构建中都输出它们。将静态资源在构建后合并是框架的责任。</p><h2 id="build-minify" tabindex="-1">build.minify <a class="header-anchor" href="#build-minify" aria-label="Permalink to &quot;build.minify {#build-minify}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>boolean | &#39;terser&#39; | &#39;esbuild&#39;</code></li><li><strong>默认：</strong> <code>&#39;esbuild&#39;</code></li></ul><p>设置为 <code>false</code> 可以禁用最小化混淆，或是用来指定使用哪种混淆器。默认为 <a href="https://github.com/evanw/esbuild" target="_blank" rel="noreferrer">Esbuild</a>，它比 terser 快 20-40 倍，压缩率只差 1%-2%。<a href="https://github.com/privatenumber/minification-benchmarks" target="_blank" rel="noreferrer">Benchmarks</a></p><p>注意，在 lib 模式下使用 <code>&#39;es&#39;</code> 时，<code>build.minify</code> 选项不会缩减空格，因为会移除掉 pure 标注，导致破坏 tree-shaking。</p><p>当设置为 <code>&#39;terser&#39;</code> 时必须先安装 Terser。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">terser</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">terser</span></span></code></pre></div><h2 id="build-terseroptions" tabindex="-1">build.terserOptions <a class="header-anchor" href="#build-terseroptions" aria-label="Permalink to &quot;build.terserOptions {#build-terseroptions}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>TerserOptions</code></li></ul><p>传递给 Terser 的更多 <a href="https://terser.org/docs/api-reference#minify-options" target="_blank" rel="noreferrer">minify 选项</a>。</p><p>此外，你还可以传递一个 <code>maxWorkers: number</code> 选项来指定最大的工作线程数。默认为 CPU 核心数减 1。</p><h2 id="build-write" tabindex="-1">build.write <a class="header-anchor" href="#build-write" aria-label="Permalink to &quot;build.write {#build-write}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>boolean</code></li><li><strong>默认：</strong> <code>true</code></li></ul><p>设置为 <code>false</code> 来禁用将构建后的文件写入磁盘。这常用于 <a href="/guide/api-javascript.html#build">编程式地调用 <code>build()</code></a> 在写入磁盘之前，需要对构建后的文件进行进一步处理。</p><h2 id="build-emptyoutdir" tabindex="-1">build.emptyOutDir <a class="header-anchor" href="#build-emptyoutdir" aria-label="Permalink to &quot;build.emptyOutDir {#build-emptyoutdir}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>boolean</code></li><li><strong>默认：</strong> 若 <code>outDir</code> 在 <code>root</code> 目录下，则为 <code>true</code></li></ul><p>默认情况下，若 <code>outDir</code> 在 <code>root</code> 目录下，则 Vite 会在构建时清空该目录。若 <code>outDir</code> 在根目录之外则会抛出一个警告避免意外删除掉重要的文件。可以设置该选项来关闭这个警告。该功能也可以通过命令行参数 <code>--emptyOutDir</code> 来使用。</p><h2 id="build-copypublicdir" tabindex="-1">build.copyPublicDir <a class="header-anchor" href="#build-copypublicdir" aria-label="Permalink to &quot;build.copyPublicDir {#build-copypublicdir}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>boolean</code></li><li><strong>默认：</strong> <code>true</code></li></ul><p>默认情况下，Vite 会在构建阶段将 <code>publicDir</code> 目录中的所有文件复制到 <code>outDir</code> 目录中。可以通过设置该选项为 <code>false</code> 来禁用该行为。</p><h2 id="build-reportcompressedsize" tabindex="-1">build.reportCompressedSize <a class="header-anchor" href="#build-reportcompressedsize" aria-label="Permalink to &quot;build.reportCompressedSize {#build-reportcompressedsize}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>boolean</code></li><li><strong>默认：</strong> <code>true</code></li></ul><p>启用/禁用 gzip 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。</p><h2 id="build-chunksizewarninglimit" tabindex="-1">build.chunkSizeWarningLimit <a class="header-anchor" href="#build-chunksizewarninglimit" aria-label="Permalink to &quot;build.chunkSizeWarningLimit {#build-chunksizewarninglimit}&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>number</code></li><li><strong>默认：</strong> <code>500</code></li></ul><p>规定触发警告的 chunk 大小。（以 kB 为单位）。它将与未压缩的 chunk 大小进行比较，因为 <a href="https://v8.dev/blog/cost-of-javascript-2019" target="_blank" rel="noreferrer">JavaScript 大小本身与执行时间相关</a>。</p><h2 id="build-watch" tabindex="-1">build.watch <a class="header-anchor" href="#build-watch" aria-label="Permalink to &quot;build.watch {#build-watch}&quot;">​</a></h2><ul><li><strong>类型：</strong> <a href="https://rollupjs.org/configuration-options/#watch" target="_blank" rel="noreferrer"><code>WatcherOptions</code></a><code>| null</code></li><li><strong>默认：</strong> <code>null</code></li></ul><p>设置为 <code>{}</code> 则会启用 rollup 的监听器。对于只在构建阶段或者集成流程使用的插件很常用。</p><div class="warning custom-block"><p class="custom-block-title">在 Windows Linux 子系统（WSL）上使用 Vite</p><p>某些情况下 WSL2 的文件系统监听可能无法正常工作。 查看 <a href="./server-options.html#server-watch"><code>server.watch</code></a> 了解更多细节。</p></div>`,102),r=[n];function i(t,d,c,p,u,b){return o(),s("div",null,r)}const m=e(a,[["render",i]]);export{g as __pageData,m as default};
