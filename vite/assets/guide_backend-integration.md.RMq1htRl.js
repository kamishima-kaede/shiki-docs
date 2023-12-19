import{_ as s,o as n,c as a,R as l}from"./chunks/framework.HYN-VFUH.js";const F=JSON.parse('{"title":"后端集成","description":"","frontmatter":{},"headers":[],"relativePath":"guide/backend-integration.md","filePath":"guide/backend-integration.md"}'),o={name:"guide/backend-integration.md"},p=l(`<h1 id="backend-integration" tabindex="-1">后端集成 <a class="header-anchor" href="#backend-integration" aria-label="Permalink to &quot;后端集成 {#backend-integration}&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">Note</p><p>如果你想使用传统的后端（如 Rails, Laravel）来服务 HTML，但使用 Vite 来服务其他资源，可以查看在 <a href="https://github.com/vitejs/awesome-vite#integrations-with-backends" target="_blank" rel="noreferrer">Awesome Vite</a> 上的已有的后端集成列表。</p><p>如果你需要自定义集成，你可以按照本指南的步骤配置它：</p></div><ol><li><p>在你的 Vite 配置中配置入口文件和启用创建 <code>manifest</code>：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  build: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 在 outDir 中生成 .vite/manifest.json</span></span>
<span class="line"><span style="color:#E1E4E8;">    manifest: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    rollupOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 覆盖默认的 .html 入口</span></span>
<span class="line"><span style="color:#E1E4E8;">      input: </span><span style="color:#9ECBFF;">&#39;/path/to/main.js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  build: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 在 outDir 中生成 .vite/manifest.json</span></span>
<span class="line"><span style="color:#24292E;">    manifest: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    rollupOptions: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 覆盖默认的 .html 入口</span></span>
<span class="line"><span style="color:#24292E;">      input: </span><span style="color:#032F62;">&#39;/path/to/main.js&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>如果你没有禁用 <a href="/config/build-options.html#build-polyfillmodulepreload">module preload 的 polyfill</a>，你还需在你的入口处添加此 polyfill：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 在你应用的入口起始处添加此 polyfill</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vite/modulepreload-polyfill&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 在你应用的入口起始处添加此 polyfill</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vite/modulepreload-polyfill&#39;</span></span></code></pre></div></li><li><p>在开发环境中，在服务器的 HTML 模板中注入以下内容（用正在运行的本地 URL 替换 <code>http://localhost:5173</code>）：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 如果是在开发环境中 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;module&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://localhost:5173/@vite/client&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;module&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://localhost:5173/main.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 如果是在开发环境中 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;module&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://localhost:5173/@vite/client&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;module&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://localhost:5173/main.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>为了正确地提供资源，你有两种选项：</p><ul><li>确保服务器被配置过，将会拦截代理资源请求给到 Vite 服务器</li><li>设置 <a href="/config/server-options.html#server-origin"><code>server.origin</code></a> 以求生成的资源链接将以服务器 URL 形式被解析而非一个相对路径</li></ul><p>这对于图片等资源的正确加载是必需的。</p><p>如果你正使用 <code>@vitejs/plugin-react</code> 配合 React，你还需要在上述脚本前添加下面这个，因为插件不能修改你正在服务的 HTML（请将 <code>http://localhost:5173</code> 替换为 Vite 正在运行的本地 URL）：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;module&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> RefreshRuntime </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;http://localhost:5173/@react-refresh&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  RefreshRuntime.</span><span style="color:#B392F0;">injectIntoGlobalHook</span><span style="color:#E1E4E8;">(window)</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.</span><span style="color:#B392F0;">$RefreshReg$</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.</span><span style="color:#B392F0;">$RefreshSig$</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> type</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.__vite_plugin_react_preamble_installed__ </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;module&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> RefreshRuntime </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;http://localhost:5173/@react-refresh&#39;</span></span>
<span class="line"><span style="color:#24292E;">  RefreshRuntime.</span><span style="color:#6F42C1;">injectIntoGlobalHook</span><span style="color:#24292E;">(window)</span></span>
<span class="line"><span style="color:#24292E;">  window.</span><span style="color:#6F42C1;">$RefreshReg$</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;">  window.</span><span style="color:#6F42C1;">$RefreshSig$</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">type</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> type</span></span>
<span class="line"><span style="color:#24292E;">  window.__vite_plugin_react_preamble_installed__ </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></li><li><p>在生产环境中：在运行 <code>vite build</code> 之后，一个 <code>.vite/manifest.json</code> 文件将与静态资源文件一同生成。一个示例清单文件会像下面这样：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;main.js&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;file&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;assets/main.4889e940.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;src&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;main.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;isEntry&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;dynamicImports&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;views/foo.js&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;css&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;assets/main.b82dbe22.css&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;assets&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;assets/asset.0ab0f9cd.png&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;views/foo.js&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;file&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;assets/foo.869aea0d.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;src&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;views/foo.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;isDynamicEntry&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;imports&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;_shared.83069a53.js&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;_shared.83069a53.js&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;file&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;assets/shared.83069a53.js&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;main.js&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;file&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;assets/main.4889e940.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;src&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;main.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;isEntry&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;dynamicImports&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;views/foo.js&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;css&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;assets/main.b82dbe22.css&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;assets&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;assets/asset.0ab0f9cd.png&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;views/foo.js&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;file&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;assets/foo.869aea0d.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;src&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;views/foo.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;isDynamicEntry&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;imports&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;_shared.83069a53.js&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;_shared.83069a53.js&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;file&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;assets/shared.83069a53.js&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><ul><li>清单是一个 <code>Record&lt;name, chunk&gt;</code> 结构的对象。</li><li>对于 入口 或动态入口 chunk，键是相对于项目根目录的资源路径。</li><li>对于非入口 chunk，键是生成文件的名称并加上前缀 <code>_</code>。</li><li>Chunk 将信息包含在其静态和动态导入上（两者都是映射到清单中相应 chunk 的键)，以及任何与之相关的 CSS 和资源文件。</li></ul><p>你可以使用这个文件来渲染链接或者用散列文件名预加载指令（注意：这里的语法只是为了解释，实际使用时请你的服务器模板语言代替）：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 如果是在生产环境中 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">link</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">rel</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;stylesheet&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/assets/{{ manifest[&#39;main.js&#39;].css }}&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;module&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/assets/{{ manifest[&#39;main.js&#39;].file }}&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 如果是在生产环境中 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">rel</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;stylesheet&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/assets/{{ manifest[&#39;main.js&#39;].css }}&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;module&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/assets/{{ manifest[&#39;main.js&#39;].file }}&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></li></ol>`,3),t=[p];function e(c,r,E,y,i,u){return n(),a("div",null,t)}const q=s(o,[["render",e]]);export{F as __pageData,q as default};