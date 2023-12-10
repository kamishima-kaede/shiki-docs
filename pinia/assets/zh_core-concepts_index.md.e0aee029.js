import{_ as a,C as o,o as p,c as l,H as e,k as s,a as t,S as c}from"./chunks/framework.ac4b5791.js";const C=JSON.parse('{"title":"定义 Store","description":"","frontmatter":{},"headers":[],"relativePath":"zh/core-concepts/index.md","filePath":"zh/core-concepts/index.md"}'),r={name:"zh/core-concepts/index.md"},y=s("h1",{id:"defining-a-store",tabindex:"-1"},[t("定义 Store "),s("a",{class:"header-anchor",href:"#defining-a-store","aria-label":'Permalink to "定义 Store %{#defining-a-store}%"'},"​")],-1),i=c(`<p>在深入研究核心概念之前，我们得知道 Store 是用 <code>defineStore()</code> 定义的，它的第一个参数要求是一个<strong>独一无二的</strong>名字：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { defineStore } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">pinia</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 你可以对 \`defineStore()\` 的返回值进行任意命名，但最好使用 store 的名字，同时以 \`use\` 开头且以 \`Store\` 结尾。(比如 \`useUserStore\`，\`useCartStore\`，\`useProductStore\`)</span></span>
<span class="line"><span style="color:#7B7F8B;">// 第一个参数是你的应用中 Store 的唯一 ID。</span></span>
<span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> useAlertsStore </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">defineStore</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">alerts</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 其他配置...</span></span>
<span class="line"><span style="color:#F6F6F4;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineStore</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">pinia</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// 你可以对 \`defineStore()\` 的返回值进行任意命名，但最好使用 store 的名字，同时以 \`use\` 开头且以 \`Store\` 结尾。(比如 \`useUserStore\`，\`useCartStore\`，\`useProductStore\`)</span></span>
<span class="line"><span style="color:#A0ADA0;">// 第一个参数是你的应用中 Store 的唯一 ID。</span></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useAlertsStore</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineStore</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">alerts</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// 其他配置...</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre></div><p>这个<strong>名字</strong> ，也被用作 <em>id</em> ，是必须传入的， Pinia 将用它来连接 store 和 devtools。为了养成习惯性的用法，将返回的函数命名为 <em>use...</em> 是一个符合组合式函数风格的约定。</p><p><code>defineStore()</code> 的第二个参数可接受两类值：Setup 函数或 Option 对象。</p><h2 id="option-stores" tabindex="-1">Option Store <a class="header-anchor" href="#option-stores" aria-label="Permalink to &quot;Option Store %{#option-stores}%&quot;">​</a></h2><p>与 Vue 的选项式 API 类似，我们也可以传入一个带有 <code>state</code>、<code>actions</code> 与 <code>getters</code> 属性的 Option 对象</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> useCounterStore </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">defineStore</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">counter</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line highlighted"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">state</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> ({ count</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;"> }),</span></span>
<span class="line highlighted"><span style="color:#F6F6F4;">  getters</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line highlighted"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">double</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">state</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> state.count </span><span style="color:#F286C4;">*</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">,</span></span>
<span class="line highlighted"><span style="color:#F6F6F4;">  },</span></span>
<span class="line highlighted"><span style="color:#F6F6F4;">  actions</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line highlighted"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">increment</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line highlighted"><span style="color:#F6F6F4;">      </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.count</span><span style="color:#F286C4;">++</span></span>
<span class="line highlighted"><span style="color:#F6F6F4;">    },</span></span>
<span class="line highlighted"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">})</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useCounterStore</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineStore</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">counter</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line highlighted"><span style="color:#393A34;">  </span><span style="color:#59873A;">state</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">({</span><span style="color:#393A34;"> </span><span style="color:#998418;">count</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">0</span><span style="color:#393A34;"> </span><span style="color:#999999;">}),</span></span>
<span class="line highlighted"><span style="color:#393A34;">  </span><span style="color:#998418;">getters</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line highlighted"><span style="color:#393A34;">    </span><span style="color:#59873A;">double</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">state</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">state</span><span style="color:#999999;">.</span><span style="color:#B07D48;">count</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">*</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">2</span><span style="color:#999999;">,</span></span>
<span class="line highlighted"><span style="color:#393A34;">  </span><span style="color:#999999;">},</span></span>
<span class="line highlighted"><span style="color:#393A34;">  </span><span style="color:#998418;">actions</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line highlighted"><span style="color:#393A34;">    </span><span style="color:#59873A;">increment</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line highlighted"><span style="color:#393A34;">      </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">count</span><span style="color:#AB5959;">++</span></span>
<span class="line highlighted"><span style="color:#393A34;">    </span><span style="color:#999999;">},</span></span>
<span class="line highlighted"><span style="color:#393A34;">  </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre></div><p>你可以认为 <code>state</code> 是 store 的数据 (<code>data</code>)，<code>getters</code> 是 store 的计算属性 (<code>computed</code>)，而 <code>actions</code> 则是方法 (<code>methods</code>)。</p><p>为方便上手使用，Option Store 应尽可能直观简单。</p><h2 id="setup-stores" tabindex="-1">Setup Store <a class="header-anchor" href="#setup-stores" aria-label="Permalink to &quot;Setup Store %{#setup-stores}%&quot;">​</a></h2><p>也存在另一种定义 store 的可用语法。与 Vue 组合式 API 的 <a href="https://cn.vuejs.org/api/composition-api-setup.html" target="_blank" rel="noreferrer">setup 函数</a> 相似，我们可以传入一个函数，该函数定义了一些响应式属性和方法，并且返回一个带有我们想暴露出去的属性和方法的对象。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> useCounterStore </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">defineStore</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">counter</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> count </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">ref</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">increment</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    count.value</span><span style="color:#F286C4;">++</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> { count, increment }</span></span>
<span class="line"><span style="color:#F6F6F4;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useCounterStore</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineStore</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">counter</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">count</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">ref</span><span style="color:#999999;">(</span><span style="color:#2F798A;">0</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">increment</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B07D48;">count</span><span style="color:#999999;">.</span><span style="color:#B07D48;">value</span><span style="color:#AB5959;">++</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">count</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">increment</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre></div><p>在 <em>Setup Store</em> 中：</p><ul><li><code>ref()</code> 就是 <code>state</code> 属性</li><li><code>computed()</code> 就是 <code>getters</code></li><li><code>function()</code> 就是 <code>actions</code></li></ul><p>Setup store 比 <a href="#option-stores">Option Store</a> 带来了更多的灵活性，因为你可以在一个 store 内创建侦听器，并自由地使用任何<a href="https://cn.vuejs.org/guide/reusability/composables.html#composables" target="_blank" rel="noreferrer">组合式函数</a>。不过，请记住，使用组合式函数会让 <a href="./../cookbook/composables.html">SSR</a> 变得更加复杂。</p><h2 id="what-syntax-should-i-pick" tabindex="-1">你应该选用哪种语法？ <a class="header-anchor" href="#what-syntax-should-i-pick" aria-label="Permalink to &quot;你应该选用哪种语法？ %{#what-syntax-should-i-pick}%&quot;">​</a></h2><p>和<a href="https://cn.vuejs.org/guide/introduction.html#which-to-choose" target="_blank" rel="noreferrer">在 Vue 中如何选择组合式 API 与选项式 API</a> 一样，选择你觉得最舒服的那一个就好。如果你还不确定，可以先试试 <a href="#option-stores">Option Store</a>。</p><h2 id="using-the-store" tabindex="-1">使用 Store <a class="header-anchor" href="#using-the-store" aria-label="Permalink to &quot;使用 Store %{#using-the-store}%&quot;">​</a></h2><p>虽然我们前面定义了一个 store，但在我们使用 <code>&lt;script setup&gt;</code> 调用 <code>useStore()</code>(或者使用 <code>setup()</code> 函数，<strong>像所有的组件那样</strong>) 之前，store 实例是不会被创建的：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">&lt;</span><span style="color:#F286C4;">script</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;font-style:italic;">setup</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { useCounterStore } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">@/stores/counter</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#7B7F8B;">// 可以在组件中的任意位置访问 \`store\` 变量 ✨</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> store </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">useCounterStore</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">&lt;/</span><span style="color:#F286C4;">script</span><span style="color:#F6F6F4;">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">script</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">setup</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useCounterStore</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">@/stores/counter</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#A0ADA0;">// 可以在组件中的任意位置访问 \`store\` 变量 ✨</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">store</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">useCounterStore</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span></code></pre></div><p>你可以定义任意多的 store，但为了让使用 pinia 的益处最大化(比如允许构建工具自动进行代码分割以及 TypeScript 推断)，<strong>你应该在不同的文件中去定义 store</strong>。</p><p>如果你还不会使用 <code>setup</code> 组件，<a href="./../cookbook/options-api.html">你也可以通过<strong>映射辅助函数</strong>来使用 Pinia</a>。</p><p>一旦 store 被实例化，你可以直接访问在 store 的 <code>state</code>、<code>getters</code> 和 <code>actions</code> 中定义的任何属性。我们将在后续章节继续了解这些细节，目前自动补全将帮助你使用相关属性。</p><p>请注意，<code>store</code> 是一个用 <code>reactive</code> 包装的对象，这意味着不需要在 getters 后面写 <code>.value</code>，就像 <code>setup</code> 中的 <code>props</code> 一样，<strong>如果你写了，我们也不能解构它</strong>：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki dracula-soft has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">&lt;</span><span style="color:#F286C4;">script</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;font-style:italic;">setup</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> store </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">useCounterStore</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#7B7F8B;">// ❌ 这将不起作用，因为它破坏了响应性</span></span>
<span class="line"><span style="color:#7B7F8B;">// 这就和直接解构 \`props\` 一样</span></span>
<span class="line highlighted warning"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> { name, doubleCount } </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> store </span></span>
<span class="line highlighted warning"><span style="color:#F6F6F4;">name </span><span style="color:#7B7F8B;">// 将始终是 &quot;Eduardo&quot; </span></span>
<span class="line highlighted warning"><span style="color:#F6F6F4;">doubleCount </span><span style="color:#7B7F8B;">// 将始终是 0 </span></span>
<span class="line"><span style="color:#62E884;">setTimeout</span><span style="color:#F6F6F4;">(() </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  store.</span><span style="color:#62E884;">increment</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">}, </span><span style="color:#BF9EEE;">1000</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#7B7F8B;">// ✅ 这样写是响应式的</span></span>
<span class="line"><span style="color:#7B7F8B;">// 💡 当然你也可以直接使用 \`store.doubleCount\`</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> doubleValue </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">computed</span><span style="color:#F6F6F4;">(() </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> store.doubleCount)</span></span>
<span class="line"><span style="color:#F6F6F4;">&lt;/</span><span style="color:#F286C4;">script</span><span style="color:#F6F6F4;">&gt;</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">script</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">setup</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">store</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">useCounterStore</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#A0ADA0;">// ❌ 这将不起作用，因为它破坏了响应性</span></span>
<span class="line"><span style="color:#A0ADA0;">// 这就和直接解构 \`props\` 一样</span></span>
<span class="line highlighted warning"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">name</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">doubleCount</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">store</span><span style="color:#393A34;"> </span></span>
<span class="line highlighted warning"><span style="color:#B07D48;">name</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// 将始终是 &quot;Eduardo&quot; </span></span>
<span class="line highlighted warning"><span style="color:#B07D48;">doubleCount</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// 将始终是 0 </span></span>
<span class="line"><span style="color:#59873A;">setTimeout</span><span style="color:#999999;">(()</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">store</span><span style="color:#999999;">.</span><span style="color:#59873A;">increment</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#999999;">},</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">1000</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#A0ADA0;">// ✅ 这样写是响应式的</span></span>
<span class="line"><span style="color:#A0ADA0;">// 💡 当然你也可以直接使用 \`store.doubleCount\`</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">doubleValue</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">computed</span><span style="color:#999999;">(()</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">store</span><span style="color:#999999;">.</span><span style="color:#B07D48;">doubleCount</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span></code></pre></div><p>为了从 store 中提取属性时保持其响应性，你需要使用 <code>storeToRefs()</code>。它将为每一个响应式属性创建引用。当你只使用 store 的状态而不调用任何 action 时，它会非常有用。请注意，你可以直接从 store 中解构 action，因为它们也被绑定到 store 上：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">&lt;</span><span style="color:#F286C4;">script</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;font-style:italic;">setup</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { storeToRefs } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">pinia</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> store </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">useCounterStore</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#7B7F8B;">// \`name\` 和 \`doubleCount\` 是响应式的 ref</span></span>
<span class="line"><span style="color:#7B7F8B;">// 同时通过插件添加的属性也会被提取为 ref</span></span>
<span class="line"><span style="color:#7B7F8B;">// 并且会跳过所有的 action 或非响应式 (不是 ref 或 reactive) 的属性</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> { name, doubleCount } </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">storeToRefs</span><span style="color:#F6F6F4;">(store)</span></span>
<span class="line"><span style="color:#7B7F8B;">// 作为 action 的 increment 可以直接解构</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> { increment } </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> store</span></span>
<span class="line"><span style="color:#F6F6F4;">&lt;/</span><span style="color:#F286C4;">script</span><span style="color:#F6F6F4;">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">script</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">setup</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">storeToRefs</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">pinia</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">store</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">useCounterStore</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#A0ADA0;">// \`name\` 和 \`doubleCount\` 是响应式的 ref</span></span>
<span class="line"><span style="color:#A0ADA0;">// 同时通过插件添加的属性也会被提取为 ref</span></span>
<span class="line"><span style="color:#A0ADA0;">// 并且会跳过所有的 action 或非响应式 (不是 ref 或 reactive) 的属性</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">name</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">doubleCount</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">storeToRefs</span><span style="color:#999999;">(</span><span style="color:#B07D48;">store</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#A0ADA0;">// 作为 action 的 increment 可以直接解构</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">increment</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">store</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span></code></pre></div>`,27);function F(d,A,u,h,g,B){const n=o("VueSchoolLink");return p(),l("div",null,[y,e(n,{href:"https://vueschool.io/lessons/define-your-first-pinia-store",title:"Learn how to define and use stores in Pinia"}),i])}const f=a(r,[["render",F]]);export{C as __pageData,f as default};
