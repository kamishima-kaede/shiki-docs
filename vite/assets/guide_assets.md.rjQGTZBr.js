import{_ as s,o as a,c as l,R as n}from"./chunks/framework.HYN-VFUH.js";const u=JSON.parse('{"title":"静态资源处理","description":"","frontmatter":{},"headers":[],"relativePath":"guide/assets.md","filePath":"guide/assets.md"}'),o={name:"guide/assets.md"},p=n(`<h1 id="static-asset-handling" tabindex="-1">静态资源处理 <a class="header-anchor" href="#static-asset-handling" aria-label="Permalink to &quot;静态资源处理 {#static-asset-handling}&quot;">​</a></h1><ul><li>相关: <a href="./build.html#public-base-path">公共基础路径</a></li><li>相关: <a href="/config/shared-options.html#assetsinclude"><code>assetsInclude</code> 配置项</a></li></ul><h2 id="importing-asset-as-url" tabindex="-1">将资源引入为 URL <a class="header-anchor" href="#importing-asset-as-url" aria-label="Permalink to &quot;将资源引入为 URL {#importing-asset-as-url}&quot;">​</a></h2><p>服务时引入一个静态资源会返回解析后的公共路径：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> imgUrl </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./img.png&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hero-img&#39;</span><span style="color:#E1E4E8;">).src </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> imgUrl</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> imgUrl </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./img.png&#39;</span></span>
<span class="line"><span style="color:#24292E;">document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hero-img&#39;</span><span style="color:#24292E;">).src </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> imgUrl</span></span></code></pre></div><p>例如，<code>imgUrl</code> 在开发时会是 <code>/img.png</code>，在生产构建后会是 <code>/assets/img.2d8efhg.png</code>。</p><p>行为类似于 Webpack 的 <code>file-loader</code>。区别在于导入既可以使用绝对公共路径（基于开发期间的项目根路径），也可以使用相对路径。</p><ul><li><p><code>url()</code> 在 CSS 中的引用也以同样的方式处理。</p></li><li><p>如果 Vite 使用了 Vue 插件，Vue SFC 模板中的资源引用都将自动转换为导入。</p></li><li><p>常见的图像、媒体和字体文件类型被自动检测为资源。你可以使用 <a href="/config/shared-options.html#assetsinclude"><code>assetsInclude</code> 选项</a> 扩展内部列表。</p></li><li><p>引用的资源作为构建资源图的一部分包括在内，将生成散列文件名，并可以由插件进行处理以进行优化。</p></li><li><p>较小的资源体积小于 <a href="/config/build-options.html#build-assetsinlinelimit"><code>assetsInlineLimit</code> 选项值</a> 则会被内联为 base64 data URL。</p></li><li><p>Git LFS 占位符会自动排除在内联之外，因为它们不包含它们所表示的文件的内容。要获得内联，请确保在构建之前通过 Git LFS 下载文件内容。</p></li><li><p>默认情况下，TypeScript 不会将静态资源导入视为有效的模块。要解决这个问题，需要添加 <a href="./features.html#client-types"><code>vite/client</code></a>。</p></li></ul><h3 id="explicit-url-imports" tabindex="-1">显式 URL 引入 <a class="header-anchor" href="#explicit-url-imports" aria-label="Permalink to &quot;显式 URL 引入 {#explicit-url-imports}&quot;">​</a></h3><p>未被包含在内部列表或 <code>assetsInclude</code> 中的资源，可以使用 <code>?url</code> 后缀显式导入为一个 URL。这十分有用，例如，要导入 <a href="https://houdini.how/usage" target="_blank" rel="noreferrer">Houdini Paint Worklets</a> 时：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> workletURL </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;extra-scalloped-border/worklet.js?url&#39;</span></span>
<span class="line"><span style="color:#79B8FF;">CSS</span><span style="color:#E1E4E8;">.paintWorklet.</span><span style="color:#B392F0;">addModule</span><span style="color:#E1E4E8;">(workletURL)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> workletURL </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;extra-scalloped-border/worklet.js?url&#39;</span></span>
<span class="line"><span style="color:#005CC5;">CSS</span><span style="color:#24292E;">.paintWorklet.</span><span style="color:#6F42C1;">addModule</span><span style="color:#24292E;">(workletURL)</span></span></code></pre></div><h3 id="importing-asset-as-string" tabindex="-1">将资源引入为字符串 <a class="header-anchor" href="#importing-asset-as-string" aria-label="Permalink to &quot;将资源引入为字符串 {#importing-asset-as-string}&quot;">​</a></h3><p>资源可以使用 <code>?raw</code> 后缀声明作为字符串引入。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> shaderString </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./shader.glsl?raw&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> shaderString </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./shader.glsl?raw&#39;</span></span></code></pre></div><h3 id="importing-script-as-a-worker" tabindex="-1">导入脚本作为 Worker <a class="header-anchor" href="#importing-script-as-a-worker" aria-label="Permalink to &quot;导入脚本作为 Worker {#importing-script-as-a-worker}&quot;">​</a></h3><p>脚本可以通过 <code>?worker</code> 或 <code>?sharedworker</code> 后缀导入为 web worker。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 在生产构建中将会分离出 chunk</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Worker </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./shader.js?worker&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">worker</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Worker</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 在生产构建中将会分离出 chunk</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Worker </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./shader.js?worker&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">worker</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Worker</span><span style="color:#24292E;">()</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// sharedworker</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> SharedWorker </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./shader.js?sharedworker&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">sharedWorker</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SharedWorker</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// sharedworker</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> SharedWorker </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./shader.js?sharedworker&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">sharedWorker</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SharedWorker</span><span style="color:#24292E;">()</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 内联为 base64 字符串</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> InlineWorker </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./shader.js?worker&amp;inline&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 内联为 base64 字符串</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> InlineWorker </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./shader.js?worker&amp;inline&#39;</span></span></code></pre></div><p>查看 <a href="./features.html#web-workers">Web Worker 小节</a> 获取更多细节。</p><h3 id="the-public-directory" tabindex="-1"><code>public</code> 目录 <a class="header-anchor" href="#the-public-directory" aria-label="Permalink to &quot;\`public\` 目录 {#the-public-directory}&quot;">​</a></h3><p>如果你有下列这些资源：</p><ul><li>不会被源码引用（例如 <code>robots.txt</code>）</li><li>必须保持原有文件名（没有经过 hash）</li><li>...或者你压根不想引入该资源，只是想得到其 URL。</li></ul><p>那么你可以将该资源放在指定的 <code>public</code> 目录中，它应位于你的项目根目录。该目录中的资源在开发时能直接通过 <code>/</code> 根路径访问到，并且打包时会被完整复制到目标目录的根目录下。</p><p>目录默认是 <code>&lt;root&gt;/public</code>，但可以通过 <a href="/config/shared-options.html#publicdir"><code>publicDir</code> 选项</a> 来配置。</p><p>请注意：</p><ul><li>引入 <code>public</code> 中的资源永远应该使用根绝对路径 —— 举个例子，<code>public/icon.png</code> 应该在源码中被引用为 <code>/icon.png</code>。</li><li><code>public</code> 中的资源不应该被 JavaScript 文件引用。</li></ul><h2 id="new-url-url-import-meta-url" tabindex="-1">new URL(url, import.meta.url) <a class="header-anchor" href="#new-url-url-import-meta-url" aria-label="Permalink to &quot;new URL(url, import.meta.url)&quot;">​</a></h2><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import%2Emeta" target="_blank" rel="noreferrer">import.meta.url</a> 是一个 ESM 的原生功能，会暴露当前模块的 URL。将它与原生的 <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL" target="_blank" rel="noreferrer">URL 构造器</a> 组合使用，在一个 JavaScript 模块中，通过相对路径我们就能得到一个被完整解析的静态资源 URL：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">imgUrl</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">URL</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./img.png&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url).href</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hero-img&#39;</span><span style="color:#E1E4E8;">).src </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> imgUrl</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">imgUrl</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">URL</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./img.png&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">meta</span><span style="color:#24292E;">.url).href</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hero-img&#39;</span><span style="color:#24292E;">).src </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> imgUrl</span></span></code></pre></div><p>这在现代浏览器中能够原生使用 - 实际上，Vite 并不需要在开发阶段处理这些代码！</p><p>这个模式同样还可以通过字符串模板支持动态 URL：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getImageUrl</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">URL</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`./dir/\${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}.png\`</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url).href</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getImageUrl</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">URL</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`./dir/\${</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}.png\`</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">meta</span><span style="color:#24292E;">.url).href</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>在生产构建时，Vite 才会进行必要的转换保证 URL 在打包和资源哈希后仍指向正确的地址。然而，这个 URL 字符串必须是静态的，这样才好分析。否则代码将被原样保留、因而在 <code>build.target</code> 不支持 <code>import.meta.url</code> 时会导致运行时错误。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Vite 不会转换这个</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">imgUrl</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">URL</span><span style="color:#E1E4E8;">(imagePath, </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url).href</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Vite 不会转换这个</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">imgUrl</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">URL</span><span style="color:#24292E;">(imagePath, </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">meta</span><span style="color:#24292E;">.url).href</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意：无法在 SSR 中使用</p><p>如果你正在以服务端渲染模式使用 Vite 则此模式不支持，因为 <code>import.meta.url</code> 在浏览器和 Node.js 中有不同的语义。服务端的产物也无法预先确定客户端主机 URL。</p></div>`,36),e=[p];function r(t,c,i,y,d,E){return a(),l("div",null,e)}const m=s(o,[["render",r]]);export{u as __pageData,m as default};
