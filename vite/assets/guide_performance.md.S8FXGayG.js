import{_ as s,o as e,c as o,R as a}from"./chunks/framework.HYN-VFUH.js";const m=JSON.parse('{"title":"性能","description":"","frontmatter":{},"headers":[],"relativePath":"guide/performance.md","filePath":"guide/performance.md"}'),n={name:"guide/performance.md"},l=a(`<h1 id="performance" tabindex="-1">性能 <a class="header-anchor" href="#performance" aria-label="Permalink to &quot;性能 {#performance}&quot;">​</a></h1><p>虽然 Vite 默认运行速度很快，但随着项目需求的增长，性能问题可能会悄然出现。本指南旨在帮助您识别并修复常见的性能问题，例如：</p><ul><li>服务器启动慢</li><li>页面加载慢</li><li>构建慢</li></ul><h2 id="audit-configured-vite-plugins" tabindex="-1">审核配置的 Vite 插件 <a class="header-anchor" href="#audit-configured-vite-plugins" aria-label="Permalink to &quot;审核配置的 Vite 插件 {#audit-configured-vite-plugins}&quot;">​</a></h2><p>Vite 的内部和官方插件已经优化，以在提供与更广泛的生态系统兼容性的同时做尽可能少的工作。例如，代码转换在开发中使用正则表达式，但在构建中进行完整解析以确保正确性。</p><p>然而，社区插件的性能是 Vite 无法控制的，这可能会影响开发者的体验。在使用额外的 Vite 插件时，有一些事情可以注意：</p><ol><li><p>只在特定情况下，大型依赖项应动态导入，以减少Node.js的启动时间。重构示例：<a href="https://github.com/vitejs/vite-plugin-react/pull/212" target="_blank" rel="noreferrer">vite-plugin-react#212</a> 和 <a href="https://github.com/vite-pwa/vite-plugin-pwa/pull/244" target="_blank" rel="noreferrer">vite-plugin-pwa#224</a>。</p></li><li><p><code>buildStart</code>，<code>config</code>，和 <code>configResolved</code> 钩子不应运行过长的时间和进行大量的操作。这些钩子会在开发服务器启动期间等待，这会延迟可以在浏览器中访问站点的时间。</p></li><li><p><code>resolveId</code>，<code>load</code>，和 <code>transform</code> 钩子可能会导致一些文件加载速度比其他文件慢。虽然有时无法避免，但仍值得检查可能的优化区域。例如，检查 <code>code</code> 是否包含特定关键字，或 <code>id</code> 是否匹配特定扩展名，然后再进行完整的转换。</p><p>转换文件所需的时间越长，加载站点时在浏览器中的请求瀑布图就会越明显。</p><p>您可以使用 <code>DEBUG=&quot;vite:plugin-transform&quot; vite</code> 或 <a href="https://github.com/antfu/vite-plugin-inspect" target="_blank" rel="noreferrer">vite-plugin-inspect</a> 检查转换文件所需的时间。请注意，由于异步操作往往提供不准确的时间，应将这些数字视为粗略的估计，但它仍应揭示消耗很大的操作。</p></li></ol><div class="tip custom-block"><p class="custom-block-title">性能分析</p><p>可以运行 <code>vite --profile</code>，访问站点，并在终端中按 <code>p + enter</code> 来记录一个 <code>.cpuprofile</code>。然后可以使用像 <a href="https://www.speedscope.app" target="_blank" rel="noreferrer">speedscope</a> 这样的工具来检查配置文件并识别瓶颈。也可以 <a href="https://chat.vitejs.dev" target="_blank" rel="noreferrer">分享配置文件</a> 给 Vite 团队，帮助我们识别性能问题。</p></div><h2 id="reduce-resolve-operations" tabindex="-1">减少解析操作 <a class="header-anchor" href="#reduce-resolve-operations" aria-label="Permalink to &quot;减少解析操作 {#reduce-resolve-operations}&quot;">​</a></h2><p>当经常遇到最糟糕的情况时，解析导入路径可能是一项昂贵的操作。例如，Vite 支持通过 <a href="/config/shared-options.html#resolve-extensions"><code>resolve.extensions</code></a> 选项“猜测”导入路径，该选项默认为 <code>[&#39;.mjs&#39;, &#39;.js&#39;, &#39;.mts&#39;, &#39;.ts&#39;, &#39;.jsx&#39;, &#39;.tsx&#39;, &#39;.json&#39;]</code>。</p><p>当您尝试使用 <code>import &#39;./Component&#39;</code> 导入 <code>./Component.jsx</code> 时，Vite 将运行以下步骤来解析它：</p><ol><li>检查 <code>./Component</code> 是否存在，不存在。</li><li>检查 <code>./Component.mjs</code> 是否存在，不存在。</li><li>检查 <code>./Component.js</code> 是否存在，不存在。</li><li>检查 <code>./Component.mts</code> 是否存在，不存在。</li><li>检查 <code>./Component.ts</code> 是否存在，不存在。</li><li>检查 <code>./Component.jsx</code> 是否存在，存在！</li></ol><p>如上所示，解析一个导入路径需要进行 6 次文件系统检查。您的隐式导入越多，解析路径所需的时间就越多。</p><p>因此，通常最好明确您的导入路径，例如 <code>import &#39;./Component.jsx&#39;</code>。也可以缩小 <code>resolve.extensions</code> 的列表以减少一般的文件系统检查，但必须确保它也适用于 <code>node_modules</code> 中的文件。</p><p>如果你是插件作者，请确保只在需要时调用 <a href="https://rollupjs.org/plugin-development/#this-resolve" target="_blank" rel="noreferrer"><code>this.resolve</code></a> 以减少上述检查的次数。</p><div class="tip custom-block"><p class="custom-block-title">TypeScript</p><p>如果你正在使用 TypeScript，启用 <code>tsconfig.json</code> 中的 <code>compilerOptions</code> 的 <code>&quot;moduleResolution&quot;: &quot;bundler&quot;</code> 和 <code>&quot;allowImportingTsExtensions&quot;: true</code> 以直接在代码中使用 <code>.ts</code> 和 <code>.tsx</code> 扩展名。</p></div><h2 id="avoid-barrel-files" tabindex="-1">避免使用桶文件 <a class="header-anchor" href="#avoid-barrel-files" aria-label="Permalink to &quot;避免使用桶文件 {#avoid-barrel-files}&quot;">​</a></h2><p>桶文件（barrel files）是重新导出同一目录下其他文件 API 的文件。例如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// src/utils/index.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./color.js&#39;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./dom.js&#39;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./slash.js&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// src/utils/index.js</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./color.js&#39;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./dom.js&#39;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./slash.js&#39;</span></span></code></pre></div><p>当你只导入一个单独的 API，例如 <code>import { slash } from &#39;./utils&#39;</code>，需要获取和转换桶文件中的所有文件，因为它们可能包含 <code>slash</code> API，也可能包含在初始化时运行的其他副作用。这意味着在初始页面加载时，你加载的文件比所需的要更多，导致页面加载速度变慢。</p><p>如果可能的话，你应该尽量避免使用桶文件（barrel files），直接导入单独的 API，例如 <code>import { slash } from &#39;./utils/slash.js&#39;</code>。你可以阅读 <a href="https://github.com/vitejs/vite/issues/8237" target="_blank" rel="noreferrer">issue #8237</a> 了解更多信息。</p><h2 id="warm-up-frequently-used-files" tabindex="-1">预热常用文件 <a class="header-anchor" href="#warm-up-frequently-used-files" aria-label="Permalink to &quot;预热常用文件 {#warm-up-frequently-used-files}&quot;">​</a></h2><p>Vite 开发服务器只转换浏览器请求的文件，这使得它能够快速启动，并且只对使用的文件执行转换。如果预计某些文件将被短时间内请求，也可以预先转换。然而，如果某些文件的转换时间比其他文件长，仍然可能发生请求瀑布。例如：</p><p>给定一个导入图，左边的文件导入右边的文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">main.js -&gt; BigComponent.vue -&gt; big-utils.js -&gt; large-data.json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">main.js -&gt; BigComponent.vue -&gt; big-utils.js -&gt; large-data.json</span></span></code></pre></div><p>导入关系只有在文件转换后才能知道。如果 <code>BigComponent.vue</code> 需要一些时间来转换，<code>big-utils.js</code> 就必须等待它的轮次，依此类推。即使内置了预先转换，这也会导致内部瀑布。</p><p>Vite 允许预热你确定频繁使用的文件，例如 <code>big-utils.js</code>，可以使用 <a href="/config/server-options.html#server-warmup"><code>server.warmup</code></a> 选项。这样，当请求时，<code>big-utils.js</code> 将准备好并被缓存，以便立即提供服务。</p><p>你可以通过运行 <code>DEBUG=&quot;vite:transform&quot; vite</code> 并检查日志来找到频繁使用的文件：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">vite:transform</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">28.72</span><span style="color:#9ECBFF;">ms</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/@vite/client</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+1ms</span></span>
<span class="line"><span style="color:#B392F0;">vite:transform</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">62.95</span><span style="color:#9ECBFF;">ms</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/src/components/BigComponent.vue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+1ms</span></span>
<span class="line"><span style="color:#B392F0;">vite:transform</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">102.54</span><span style="color:#9ECBFF;">ms</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/src/utils/big-utils.js</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+1ms</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">vite:transform</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">28.72</span><span style="color:#032F62;">ms</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/@vite/client</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+1ms</span></span>
<span class="line"><span style="color:#6F42C1;">vite:transform</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">62.95</span><span style="color:#032F62;">ms</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/src/components/BigComponent.vue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+1ms</span></span>
<span class="line"><span style="color:#6F42C1;">vite:transform</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">102.54</span><span style="color:#032F62;">ms</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/src/utils/big-utils.js</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+1ms</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  server: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    warmup: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      clientFiles: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;./src/components/BigComponent.vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;./src/utils/big-utils.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  server: {</span></span>
<span class="line"><span style="color:#24292E;">    warmup: {</span></span>
<span class="line"><span style="color:#24292E;">      clientFiles: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;./src/components/BigComponent.vue&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;./src/utils/big-utils.js&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>请注意，只应该预热频繁使用的文件，以免在启动时过载 Vite 开发服务器。查看 <a href="/config/server-options.html#server-warmup"><code>server.warmup</code></a> 选项以获取更多信息。</p><p>使用 <a href="/config/server-options.html#server-open"><code>--open</code> 或 <code>server.open</code></a> 也可以提供性能提升，因为 Vite 将自动预热你的应用的入口起点或被提供的要打开的 URL。</p><h2 id="use-lesser-or-native-tooling" tabindex="-1">使用更少或更原生化的工具链 <a class="header-anchor" href="#use-lesser-or-native-tooling" aria-label="Permalink to &quot;使用更少或更原生化的工具链 {#use-lesser-or-native-tooling}&quot;">​</a></h2><p>保持 Vite 如此之快的关键在于减少源文件（JS/TS/CSS）的工作量。</p><p>精简工作的例子：</p><ul><li>使用 CSS 而不是 Sass/Less/Stylus（可以由 PostCSS 处理嵌套）</li><li>不要使用 <code>@vitejs/plugin-react-refresh</code>，而是使用 React Fast Refresh 的原生支持。</li><li>当使用 <code>@vitejs/plugin-react</code> 时，避免配置 Babel 选项，这样它就会在构建期间跳过转换（只使用 esbuild）。</li></ul><p>使用更原生化工具链的例子：</p><p>使用更原生化的工具链往往会带来更大的安装大小，因此在启动新的 Vite 项目时不是默认的。但对于较大的应用程序来说，这可能是值得的。</p><ul><li>尝试实验性的 <a href="https://github.com/vitejs/vite/discussions/13835" target="_blank" rel="noreferrer">LightningCSS</a></li><li>使用 <a href="https://github.com/vitejs/vite-plugin-react-swc" target="_blank" rel="noreferrer"><code>@vitejs/plugin-react-swc</code></a> 代替 <code>@vitejs/plugin-react</code>。</li></ul>`,39),p=[l];function t(r,c,i,d,u,E){return e(),o("div",null,p)}const h=s(n,[["render",t]]);export{m as __pageData,h as default};