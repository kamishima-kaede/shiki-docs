import{_ as a,C as l,o as p,c as o,H as e,k as s,a as t,S as c}from"./chunks/framework.538c82e7.js";const g=JSON.parse('{"title":"入门","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/index.md","filePath":"zh/guide/index.md"}'),r={name:"zh/guide/index.md"},y=s("h1",{id:"入门",tabindex:"-1"},[t("入门 "),s("a",{class:"header-anchor",href:"#入门","aria-label":'Permalink to "入门"'},"​")],-1),B=c(`<p>用 Vue + Vue Router 创建单页应用非常简单：通过 Vue.js，我们已经用组件组成了我们的应用。当加入 Vue Router 时，我们需要做的就是将我们的组件映射到路由上，让 Vue Router 知道在哪里渲染它们。下面是一个基本的例子：</p><h2 id="HTML" tabindex="-1">HTML <a class="header-anchor" href="#HTML" aria-label="Permalink to &quot;HTML&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">src</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;https://unpkg.com/vue@3&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">src</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;https://unpkg.com/vue-router@4&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;app&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;">&gt;Hello App!&lt;/</span><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">&lt;!--使用 router-link 组件进行导航 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">&lt;!--通过传递 \`to\` 来指定链接 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">&lt;!--\`&lt;router-link&gt;\` 将呈现一个带有正确 \`href\` 属性的 \`&lt;a&gt;\` 标签--&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">router-link</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">to</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;/&quot;</span><span style="color:#ABB2BF;">&gt;Go to Home&lt;/</span><span style="color:#E06C75;">router-link</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">router-link</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">to</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;/about&quot;</span><span style="color:#ABB2BF;">&gt;Go to About&lt;/</span><span style="color:#E06C75;">router-link</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">&lt;!-- 路由出口 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">&lt;!-- 路由匹配到的组件将渲染在这里 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">router-view</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">router-view</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://unpkg.com/vue@3&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://unpkg.com/vue-router@4&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;Hello App!&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!--使用 router-link 组件进行导航 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!--通过传递 \`to\` 来指定链接 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!--\`&lt;router-link&gt;\` 将呈现一个带有正确 \`href\` 属性的 \`&lt;a&gt;\` 标签--&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">router-link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">to</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/&quot;</span><span style="color:#24292E;">&gt;Go to Home&lt;/</span><span style="color:#22863A;">router-link</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">router-link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">to</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/about&quot;</span><span style="color:#24292E;">&gt;Go to About&lt;/</span><span style="color:#22863A;">router-link</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- 路由出口 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- 路由匹配到的组件将渲染在这里 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">router-view</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">router-view</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="router-link" tabindex="-1"><code>router-link</code> <a class="header-anchor" href="#router-link" aria-label="Permalink to &quot;\`router-link\`&quot;">​</a></h3><p>请注意，我们没有使用常规的 <code>a</code> 标签，而是使用一个自定义组件 <code>router-link</code> 来创建链接。这使得 Vue Router 可以在不重新加载页面的情况下更改 URL，处理 URL 的生成以及编码。我们将在后面看到如何从这些功能中获益。</p><h3 id="router-view" tabindex="-1"><code>router-view</code> <a class="header-anchor" href="#router-view" aria-label="Permalink to &quot;\`router-view\`&quot;">​</a></h3><p><code>router-view</code> 将显示与 url 对应的组件。你可以把它放在任何地方，以适应你的布局。</p><h2 id="JavaScript" tabindex="-1">JavaScript <a class="header-anchor" href="#JavaScript" aria-label="Permalink to &quot;JavaScript&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 1. 定义路由组件.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 也可以从其他文件导入</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Home</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&lt;div&gt;Home&lt;/div&gt;&#39;</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">About</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&lt;div&gt;About&lt;/div&gt;&#39;</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 2. 定义一些路由</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 每个路由都需要映射到一个组件。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 我们后面再讨论嵌套路由。</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">Home</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/about&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">About</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 3. 创建路由实例并传递 \`routes\` 配置</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 你可以在这里输入更多的配置，但我们在这里</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 暂时保持简单</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">VueRouter</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">createRouter</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">history</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">VueRouter</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">createWebHashHistory</span><span style="color:#ABB2BF;">(),</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">routes</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">// \`routes: routes\` 的缩写</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 5. 创建并挂载根实例</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Vue</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">createApp</span><span style="color:#ABB2BF;">({})</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//确保 _use_ 路由实例使</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//整个应用支持路由。</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">router</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">mount</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;#app&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 现在，应用已经启动了！</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 1. 定义路由组件.</span></span>
<span class="line"><span style="color:#6A737D;">// 也可以从其他文件导入</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Home</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { template: </span><span style="color:#032F62;">&#39;&lt;div&gt;Home&lt;/div&gt;&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">About</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { template: </span><span style="color:#032F62;">&#39;&lt;div&gt;About&lt;/div&gt;&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. 定义一些路由</span></span>
<span class="line"><span style="color:#6A737D;">// 每个路由都需要映射到一个组件。</span></span>
<span class="line"><span style="color:#6A737D;">// 我们后面再讨论嵌套路由。</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">, component: Home },</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/about&#39;</span><span style="color:#24292E;">, component: About },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3. 创建路由实例并传递 \`routes\` 配置</span></span>
<span class="line"><span style="color:#6A737D;">// 你可以在这里输入更多的配置，但我们在这里</span></span>
<span class="line"><span style="color:#6A737D;">// 暂时保持简单</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">router</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> VueRouter.</span><span style="color:#6F42C1;">createRouter</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。</span></span>
<span class="line"><span style="color:#24292E;">  history: VueRouter.</span><span style="color:#6F42C1;">createWebHashHistory</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">  routes, </span><span style="color:#6A737D;">// \`routes: routes\` 的缩写</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 5. 创建并挂载根实例</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Vue.</span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">({})</span></span>
<span class="line"><span style="color:#6A737D;">//确保 _use_ 路由实例使</span></span>
<span class="line"><span style="color:#6A737D;">//整个应用支持路由。</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(router)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 现在，应用已经启动了！</span></span></code></pre></div><p>通过调用 <code>app.use(router)</code>，我们会触发第一次导航且可以在任意组件中以 <code>this.$router</code> 的形式访问它，并且以 <code>this.$route</code> 的形式访问当前路由：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// Home.vue</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">computed</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">username</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 我们很快就会看到 \`params\` 是什么</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">$route</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">params</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">username</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">methods</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">goToDashboard</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">isAuthenticated</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">$router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/dashboard&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">      } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">$router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/login&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Home.vue</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  computed: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">username</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 我们很快就会看到 \`params\` 是什么</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$route.params.username</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">goToDashboard</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (isAuthenticated) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/dashboard&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/login&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>要在 <code>setup</code> 函数中访问路由，请调用 <code>useRouter</code> 或 <code>useRoute</code> 函数。我们将在 <a href="./advanced/composition-api.html#在-setup-中访问路由和当前路由">Composition API</a> 中了解更多信息。</p><p>在整个文档中，我们会经常使用 <code>router</code> 实例，请记住，<code>this.$router</code> 与直接使用通过 <code>createRouter</code> 创建的 <code>router</code> 实例完全相同。我们使用 <code>this.$router</code> 的原因是，我们不想在每个需要操作路由的组件中都导入路由。</p>`,13);function i(A,F,u,E,d,C){const n=l("VueSchoolLink");return p(),o("div",null,[y,e(n,{href:"https://vueschool.io/courses/vue-router-4-for-everyone",title:"Learn how to build powerful Single Page Applications with the Vue Router on Vue School"}),B])}const D=a(r,[["render",i]]);export{g as __pageData,D as default};
