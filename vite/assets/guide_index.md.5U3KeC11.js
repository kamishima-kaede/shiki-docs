import{_ as l,o as e,c as a,k as s,a as n,R as t,ab as p,ac as o}from"./chunks/framework.HYN-VFUH.js";const B=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index.md","filePath":"guide/index.md"}'),r={name:"guide/index.md"},c=o+"#voice",i=t('<h1 id="getting-started" tabindex="-1">开始 <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;开始 {#getting-started}&quot;">​</a></h1><audio id="vite-audio"><source src="'+p+'" type="audio/mpeg"></audio><h2 id="overview" tabindex="-1">总览 <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;总览 {#overview}&quot;">​</a></h2>',3),d=s("code",null,"/vit/",-1),y={id:"play-vite-audio",onclick:"document.getElementById('vite-audio').play();",style:{border:"none",padding:"3px","border-radius":"4px","vertical-align":"bottom"}},E={style:{height:"2em",width:"2em"}},h=s("use",{href:c},null,-1),u=[h],v=t(`<ul><li><p>一个开发服务器，它基于 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" target="_blank" rel="noreferrer">原生 ES 模块</a> 提供了 <a href="./features.html">丰富的内建功能</a>，如速度快到惊人的 <a href="./features.html#hot-module-replacement">模块热更新（HMR）</a>。</p></li><li><p>一套构建指令，它使用 <a href="https://rollupjs.org" target="_blank" rel="noreferrer">Rollup</a> 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。</p></li></ul><p>Vite 是一种具有明确建议的工具，具备合理的默认设置。您可以在 <a href="./features.html">功能指南</a> 中了解 Vite 的各种可能性。通过 <a href="./using-plugins.html">插件</a>，Vite 支持与其他框架或工具的集成。如有需要，您可以通过 <a href="./../config/">配置部分</a> 自定义适应你的项目。</p><p>Vite 还提供了强大的扩展性，可通过其 <a href="./api-plugin.html">插件 API</a> 和 <a href="./api-javascript.html">JavaScript API</a> 进行扩展，并提供完整的类型支持。</p><p>你可以在 <a href="./why.html">为什么选 Vite</a> 部分深入了解该项目的设计理念。</p><h2 id="browser-support" tabindex="-1">浏览器支持 <a class="header-anchor" href="#browser-support" aria-label="Permalink to &quot;浏览器支持 {#browser-support}&quot;">​</a></h2><p>在开发阶段，Vite 将 <a href="https://esbuild.github.io/api/#target" target="_blank" rel="noreferrer"><code>esnext</code> 作为转换目标</a>，因为我们假设使用的是现代浏览器，它支持所有最新的 JavaScript 和 CSS 特性。这样可以防止语法降级，让 Vite 尽可能地接近原始源代码。</p><p>对于生产构建，默认情况下 Vite 的目标浏览器支持 <a href="https://caniuse.com/es6-module" target="_blank" rel="noreferrer">原生 ES 模块</a>、<a href="https://caniuse.com/es6-module-dynamic-import" target="_blank" rel="noreferrer">原生 ESM 动态导入</a> 和 <a href="https://caniuse.com/mdn-javascript_operators_import_meta" target="_blank" rel="noreferrer"><code>import.meta</code></a>。旧版浏览器可以通过官方的 <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noreferrer">@vitejs/plugin-legacy</a>。查看 <a href="./build.html">构建生产环境</a> 了解更多细节。</p><h2 id="trying-vite-online" tabindex="-1">在线试用 Vite <a class="header-anchor" href="#trying-vite-online" aria-label="Permalink to &quot;在线试用 Vite {#trying-vite-online}&quot;">​</a></h2><p>你可以通过 <a href="https://vite.new/" target="_blank" rel="noreferrer">StackBlitz</a> 在线试用 vite。它直接在浏览器中运行基于 Vite 的构建，因此它与本地开发几乎无差别，同时无需在你的机器上安装任何东西。你可以浏览 <code>vite.new/{template}</code> 来选择你要使用的框架。</p><p>目前支持的模板预设如下：</p><table><thead><tr><th style="text-align:center;">JavaScript</th><th style="text-align:center;">TypeScript</th></tr></thead><tbody><tr><td style="text-align:center;"><a href="https://vite.new/vanilla" target="_blank" rel="noreferrer">vanilla</a></td><td style="text-align:center;"><a href="https://vite.new/vanilla-ts" target="_blank" rel="noreferrer">vanilla-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/vue" target="_blank" rel="noreferrer">vue</a></td><td style="text-align:center;"><a href="https://vite.new/vue-ts" target="_blank" rel="noreferrer">vue-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/react" target="_blank" rel="noreferrer">react</a></td><td style="text-align:center;"><a href="https://vite.new/react-ts" target="_blank" rel="noreferrer">react-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/preact" target="_blank" rel="noreferrer">preact</a></td><td style="text-align:center;"><a href="https://vite.new/preact-ts" target="_blank" rel="noreferrer">preact-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/lit" target="_blank" rel="noreferrer">lit</a></td><td style="text-align:center;"><a href="https://vite.new/lit-ts" target="_blank" rel="noreferrer">lit-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/svelte" target="_blank" rel="noreferrer">svelte</a></td><td style="text-align:center;"><a href="https://vite.new/svelte-ts" target="_blank" rel="noreferrer">svelte-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/solid" target="_blank" rel="noreferrer">solid</a></td><td style="text-align:center;"><a href="https://vite.new/solid-ts" target="_blank" rel="noreferrer">solid-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/qwik" target="_blank" rel="noreferrer">qwik</a></td><td style="text-align:center;"><a href="https://vite.new/qwik-ts" target="_blank" rel="noreferrer">qwik-ts</a></td></tr></tbody></table><h2 id="scaffolding-your-first-vite-project" tabindex="-1">搭建第一个 Vite 项目 <a class="header-anchor" href="#scaffolding-your-first-vite-project" aria-label="Permalink to &quot;搭建第一个 Vite 项目 {#scaffolding-your-first-vite-project}&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">兼容性注意</p><p>Vite 需要 <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node.js</a> 版本 18+，20+。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的 Node 版本。</p></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-r_Lo3" id="tab-OBzE0VY" checked="checked"><label for="tab-OBzE0VY">NPM</label><input type="radio" name="group-r_Lo3" id="tab-npr11--"><label for="tab-npr11--">Yarn</label><input type="radio" name="group-r_Lo3" id="tab-_6lq69J"><label for="tab-_6lq69J">PNPM</label><input type="radio" name="group-r_Lo3" id="tab-nW9KNHK"><label for="tab-nW9KNHK">Bun</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite@latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite@latest</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bunx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create-vite</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bunx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create-vite</span></span></code></pre></div></div></div><p>然后按照提示操作即可！</p><p>你还可以通过附加的命令行选项直接指定项目名称和你想要使用的模板。例如，要构建一个 Vite + Vue 项目，运行:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># npm 7+, extra double-dash is needed:</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite@latest</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-vue-app</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--template</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># yarn</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-vue-app</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--template</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># pnpm</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-vue-app</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--template</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># bun</span></span>
<span class="line"><span style="color:#B392F0;">bunx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create-vite</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-vue-app</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--template</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vue</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># npm 7+, extra double-dash is needed:</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite@latest</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-vue-app</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--template</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># yarn</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-vue-app</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--template</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># pnpm</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-vue-app</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--template</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># bun</span></span>
<span class="line"><span style="color:#6F42C1;">bunx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create-vite</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-vue-app</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--template</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vue</span></span></code></pre></div><p>查看 <a href="https://github.com/vitejs/vite/tree/main/packages/create-vite" target="_blank" rel="noreferrer">create-vite</a> 以获取每个模板的更多细节：<code>vanilla</code>，<code>vanilla-ts</code>, <code>vue</code>, <code>vue-ts</code>，<code>react</code>，<code>react-ts</code>，<code>react-swc</code>，<code>react-swc-ts</code>，<code>preact</code>，<code>preact-ts</code>，<code>lit</code>，<code>lit-ts</code>，<code>svelte</code>，<code>svelte-ts</code>，<code>solid</code>，<code>solid-ts</code>，<code>qwik</code>，<code>qwik-ts</code>。</p><h2 id="community-templates" tabindex="-1">社区模板 <a class="header-anchor" href="#community-templates" aria-label="Permalink to &quot;社区模板 {#community-templates}&quot;">​</a></h2><p>create-vite 是一个快速生成主流框架基础模板的工具。查看 Awesome Vite 仓库的 <a href="https://github.com/vitejs/awesome-vite#templates" target="_blank" rel="noreferrer">社区维护模板</a>，里面包含各种工具和不同框架的模板。你可以用如 <a href="https://github.com/Rich-Harris/degit" target="_blank" rel="noreferrer">degit</a> 之类的工具，使用社区模版来搭建项目。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">degit</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user/project</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-project</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-project</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">degit</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user/project</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-project</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-project</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span></span></code></pre></div><p>如果该项目使用 <code>main</code> 作为默认分支, 需要在项目名后添加 <code>#main</code>。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">degit</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user/project#main</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-project</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">degit</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user/project#main</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-project</span></span></code></pre></div><h2 id="index-html-and-project-root" tabindex="-1"><code>index.html</code> 与项目根目录 <a class="header-anchor" href="#index-html-and-project-root" aria-label="Permalink to &quot;\`index.html\` 与项目根目录 {#index-html-and-project-root}&quot;">​</a></h2><p>你可能已经注意到，在一个 Vite 项目中，<code>index.html</code> 在项目最外层而不是在 <code>public</code> 文件夹内。这是有意而为之的：在开发期间 Vite 是一个服务器，而 <code>index.html</code> 是该 Vite 项目的入口文件。</p><p>Vite 将 <code>index.html</code> 视为源码和模块图的一部分。Vite 解析 <code>&lt;script type=&quot;module&quot; src=&quot;...&quot;&gt;</code> ，这个标签指向你的 JavaScript 源码。甚至内联引入 JavaScript 的 <code>&lt;script type=&quot;module&quot;&gt;</code> 和引用 CSS 的 <code>&lt;link href&gt;</code> 也能利用 Vite 特有的功能被解析。另外，<code>index.html</code> 中的 URL 将被自动转换，因此不再需要 <code>%PUBLIC_URL%</code> 占位符了。</p><p>与静态 HTTP 服务器类似，Vite 也有 “根目录” 的概念，即服务文件的位置，在接下来的文档中你将看到它会以 <code>&lt;root&gt;</code> 代称。源码中的绝对 URL 路径将以项目的 “根” 作为基础来解析，因此你可以像在普通的静态文件服务器上一样编写代码（并且功能更强大！）。Vite 还能够处理依赖关系，解析处于根目录外的文件位置，这使得它即使在基于 monorepo 的方案中也十分有用。</p><p>Vite 也支持多个 <code>.html</code> 作入口点的 <a href="./build.html#multi-page-app">多页面应用模式</a>。</p><h4 id="specifying-alternative-root" tabindex="-1">指定替代根目录 <a class="header-anchor" href="#specifying-alternative-root" aria-label="Permalink to &quot;指定替代根目录 {#specifying-alternative-root}&quot;">​</a></h4><p><code>vite</code> 以当前工作目录作为根目录启动开发服务器。你也可以通过 <code>vite serve some/sub/dir</code> 来指定一个替代的根目录。注意 Vite 同时会解析项目根目录下的 <a href="/config/#configuring-vite">配置文件（即 <code>vite.config.js</code>）</a>，因此如果根目录被改变了，你需要将配置文件移动到新的根目录下。</p><h2 id="command-line-interface" tabindex="-1">命令行界面 <a class="header-anchor" href="#command-line-interface" aria-label="Permalink to &quot;命令行界面 {#command-line-interface}&quot;">​</a></h2><p>在安装了 Vite 的项目中，可以在 npm scripts 中使用 <code>vite</code> 可执行文件，或者直接使用 <code>npx vite</code> 运行它。下面是通过脚手架创建的 Vite 项目中默认的 npm scripts：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;dev&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vite&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 启动开发服务器，别名：\`vite dev\`，\`vite serve\`</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;build&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vite build&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 为生产环境构建产物</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;preview&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vite preview&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 本地预览生产构建产物</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;scripts&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;dev&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vite&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 启动开发服务器，别名：\`vite dev\`，\`vite serve\`</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;build&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vite build&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 为生产环境构建产物</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;preview&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vite preview&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 本地预览生产构建产物</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>可以指定额外的命令行选项，如 <code>--port</code> 或 <code>--open</code>。运行 <code>npx vite --help</code> 获得完整的命令行选项列表。</p><p>查看 <a href="./cli.html">命令行界面</a> 了解更多细节。</p><h2 id="using-unreleased-commits" tabindex="-1">使用未发布的功能 <a class="header-anchor" href="#using-unreleased-commits" aria-label="Permalink to &quot;使用未发布的功能 {#using-unreleased-commits}&quot;">​</a></h2><p>如果你迫不及待想要体验最新的功能，可以自行克隆 <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">vite 仓库</a> 到本地机器上然后自行将其链接（将需要 <a href="https://pnpm.io/" target="_blank" rel="noreferrer">pnpm</a>）：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/vitejs/vite.git</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">packages/vite</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">link</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 在这一步中可使用你喜欢的包管理器</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/vitejs/vite.git</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">packages/vite</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">link</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 在这一步中可使用你喜欢的包管理器</span></span></code></pre></div><p>然后，回到你的 Vite 项目并运行 <code>pnpm link --global vite</code>（或者使用你的其他包管理工具来全局链接 <code>vite</code>）。重新启动开发服务器来体验新功能吧！</p><h2 id="community" tabindex="-1">社区 <a class="header-anchor" href="#community" aria-label="Permalink to &quot;社区 {#community}&quot;">​</a></h2><p>如果你有疑问或者需要帮助，可以到 <a href="https://chat.vitejs.dev" target="_blank" rel="noreferrer">Discord</a> 和 <a href="https://github.com/vitejs/vite/discussions" target="_blank" rel="noreferrer">GitHub Discussions</a> 社区来寻求帮助。</p>`,41);function F(g,m,b,f,C,k){return e(),a("div",null,[i,s("p",null,[n('Vite（法语意为 "快速的"，发音 '),d,s("button",y,[(e(),a("svg",E,u))]),n('，发音同 "veet"）是一种新型前端构建工具，能够显著提升前端开发体验。它主要由两部分组成：')]),v])}const q=l(r,[["render",F]]);export{B as __pageData,q as default};
