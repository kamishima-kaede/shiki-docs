import{_ as e,o as t,c as a,S as o}from"./chunks/framework.538c82e7.js";const f=JSON.parse('{"title":"接口：Router","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"zh/api/interfaces/Router.md","filePath":"zh/api/interfaces/Router.md"}'),s={name:"zh/api/interfaces/Router.md"},r=o(`<p><a href="./../">API 参考</a> / Router</p><h1 id="接口-Router" tabindex="-1">接口：Router <a class="header-anchor" href="#接口-Router" aria-label="Permalink to &quot;接口：Router&quot;">​</a></h1><p>路由器实例。</p><h2 id="Properties" tabindex="-1">属性 <a class="header-anchor" href="#Properties" aria-label="Permalink to &quot;属性 %{#Properties}%&quot;">​</a></h2><h3 id="Properties-currentRoute" tabindex="-1">currentRoute <a class="header-anchor" href="#Properties-currentRoute" aria-label="Permalink to &quot;currentRoute %{#Properties-currentRoute}%&quot;">​</a></h3><p>• <code>只读</code> <strong>currentRoute</strong>: <code>Ref</code>&lt;<a href="./RouteLocationNormalizedLoaded.html"><code>RouteLocationNormalizedLoaded</code></a>&gt;</p><p>当前的 <a href="./RouteLocationNormalized.html">RouteLocationNormalized</a>。</p><hr><h3 id="Properties-listening" tabindex="-1">listening <a class="header-anchor" href="#Properties-listening" aria-label="Permalink to &quot;listening %{#Properties-listening}%&quot;">​</a></h3><p>• <strong>listening</strong>: <code>boolean</code></p><p>允许关闭历史事件的监听器。这是一个为微前端提供的底层 API。</p><hr><h3 id="Properties-options" tabindex="-1">options <a class="header-anchor" href="#Properties-options" aria-label="Permalink to &quot;options %{#Properties-options}%&quot;">​</a></h3><p>• <code>只读</code> <strong>options</strong>: <a href="./RouterOptions.html"><code>RouterOptions</code></a></p><p>创建路由器时的原始选项对象。</p><h2 id="Methods" tabindex="-1">Methods <a class="header-anchor" href="#Methods" aria-label="Permalink to &quot;Methods %{#Methods}%&quot;">​</a></h2><h3 id="Methods-addRoute" tabindex="-1">addRoute <a class="header-anchor" href="#Methods-addRoute" aria-label="Permalink to &quot;addRoute %{#Methods-addRoute}%&quot;">​</a></h3><p>▸ <strong>addRoute</strong>(<code>parentName</code>, <code>route</code>): () =&gt; <code>void</code></p><p>添加一个新的<a href="./../#routerecordraw">路由记录</a>，将其作为一个已有路由的子路由。</p><h4 id="Methods-addRoute-Parameters" tabindex="-1">参数 <a class="header-anchor" href="#Methods-addRoute-Parameters" aria-label="Permalink to &quot;参数 %{#Methods-addRoute-Parameters}%&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>parentName</code></td><td style="text-align:left;"><a href="./../#routerecordname"><code>RouteRecordName</code></a></td><td style="text-align:left;"><code>route</code> 应该被加入到的父级路由记录</td></tr><tr><td style="text-align:left;"><code>route</code></td><td style="text-align:left;"><a href="./../#routerecordraw"><code>RouteRecordRaw</code></a></td><td style="text-align:left;">要加入的路由记录</td></tr></tbody></table><h4 id="Methods-addRoute-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-addRoute-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-addRoute-Returns}%&quot;">​</a></h4><p><code>fn</code></p><p>▸ (): <code>void</code></p><p>添加一个新的<a href="./../#routerecordraw">路由记录</a>，将其作为一个已有路由的子路由。</p><h5 id="Methods-addRoute-Returns-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-addRoute-Returns-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-addRoute-Returns-Returns}%&quot;">​</a></h5><p><code>void</code></p><p>▸ <strong>addRoute</strong>(<code>route</code>): () =&gt; <code>void</code></p><p>添加一个新的<a href="./../#routerecordraw">路由记录</a>到该路由器中。</p><h4 id="Methods-addRoute-Parameters_1" tabindex="-1">参数 <a class="header-anchor" href="#Methods-addRoute-Parameters_1" aria-label="Permalink to &quot;参数 %{#Methods-addRoute-Parameters_1}%&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>route</code></td><td style="text-align:left;"><a href="./../#routerecordraw"><code>RouteRecordRaw</code></a></td><td style="text-align:left;">要加入的路由记录</td></tr></tbody></table><h4 id="Methods-addRoute-Returns_1" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-addRoute-Returns_1" aria-label="Permalink to &quot;返回值 %{#Methods-addRoute-Returns_1}%&quot;">​</a></h4><p><code>fn</code></p><p>▸ (): <code>void</code></p><p>添加一个新的<a href="./../#routerecordraw">路由记录</a>到该路由器中。</p><h5 id="Methods-addRoute-Returns-Returns_1" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-addRoute-Returns-Returns_1" aria-label="Permalink to &quot;返回值 %{#Methods-addRoute-Returns-Returns_1}%&quot;">​</a></h5><p><code>void</code></p><hr><h3 id="Methods-afterEach" tabindex="-1">afterEach <a class="header-anchor" href="#Methods-afterEach" aria-label="Permalink to &quot;afterEach %{#Methods-afterEach}%&quot;">​</a></h3><p>▸ <strong>afterEach</strong>(<code>guard</code>): () =&gt; <code>void</code></p><p>添加一个导航钩子，它会在每次导航之后被执行。返回一个用来移除该钩子的函数。</p><p><strong><code>Example</code></strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">afterEach</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">to</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">from</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">failure</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#61AFEF;">isNavigationFailure</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">failure</span><span style="color:#ABB2BF;">)) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;failed navigation&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">failure</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">afterEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">to</span><span style="color:#24292E;">, </span><span style="color:#E36209;">from</span><span style="color:#24292E;">, </span><span style="color:#E36209;">failure</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">isNavigationFailure</span><span style="color:#24292E;">(failure)) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;failed navigation&#39;</span><span style="color:#24292E;">, failure)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h4 id="Methods-afterEach-Parameters" tabindex="-1">参数 <a class="header-anchor" href="#Methods-afterEach-Parameters" aria-label="Permalink to &quot;参数 %{#Methods-afterEach-Parameters}%&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>guard</code></td><td style="text-align:left;"><a href="./NavigationHookAfter.html"><code>NavigationHookAfter</code></a></td><td style="text-align:left;">要加入的导航钩子</td></tr></tbody></table><h4 id="Methods-afterEach-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-afterEach-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-afterEach-Returns}%&quot;">​</a></h4><p><code>fn</code></p><p>▸ (): <code>void</code></p><p>添加一个导航钩子，它会在每次导航之后被执行。返回一个用来移除该钩子的函数。</p><p><strong><code>Example</code></strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">afterEach</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">to</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">from</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">failure</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#61AFEF;">isNavigationFailure</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">failure</span><span style="color:#ABB2BF;">)) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;failed navigation&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">failure</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">afterEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">to</span><span style="color:#24292E;">, </span><span style="color:#E36209;">from</span><span style="color:#24292E;">, </span><span style="color:#E36209;">failure</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">isNavigationFailure</span><span style="color:#24292E;">(failure)) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;failed navigation&#39;</span><span style="color:#24292E;">, failure)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h5 id="Methods-afterEach-Returns-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-afterEach-Returns-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-afterEach-Returns-Returns}%&quot;">​</a></h5><p><code>void</code></p><hr><h3 id="Methods-back" tabindex="-1">back <a class="header-anchor" href="#Methods-back" aria-label="Permalink to &quot;back %{#Methods-back}%&quot;">​</a></h3><p>▸ <strong>back</strong>(): <code>void</code></p><p>通过调用 <code>history.back()</code> 在可能的情况下在历史中后退。相当于 <code>router.go(-1)</code>。</p><h4 id="Methods-back-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-back-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-back-Returns}%&quot;">​</a></h4><p><code>void</code></p><hr><h3 id="Methods-beforeEach" tabindex="-1">beforeEach <a class="header-anchor" href="#Methods-beforeEach" aria-label="Permalink to &quot;beforeEach %{#Methods-beforeEach}%&quot;">​</a></h3><p>▸ <strong>beforeEach</strong>(<code>guard</code>): () =&gt; <code>void</code></p><p>添加一个导航钩子，它会在每次导航之前被执行。返回一个用来移除该钩子的函数。</p><h4 id="Methods-beforeEach-Parameters" tabindex="-1">参数 <a class="header-anchor" href="#Methods-beforeEach-Parameters" aria-label="Permalink to &quot;参数 %{#Methods-beforeEach-Parameters}%&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>guard</code></td><td style="text-align:left;"><a href="./NavigationGuardWithThis.html"><code>NavigationGuardWithThis</code></a>&lt;<code>undefined</code>&gt;</td><td style="text-align:left;">要加入的导航钩子</td></tr></tbody></table><h4 id="Methods-beforeEach-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-beforeEach-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-beforeEach-Returns}%&quot;">​</a></h4><p><code>fn</code></p><p>▸ (): <code>void</code></p><p>添加一个导航钩子，它会在每次导航之前被执行。返回一个用来移除该钩子的函数。</p><h5 id="Methods-beforeEach-Returns-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-beforeEach-Returns-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-beforeEach-Returns-Returns}%&quot;">​</a></h5><p><code>void</code></p><hr><h3 id="Methods-beforeResolve" tabindex="-1">beforeResolve <a class="header-anchor" href="#Methods-beforeResolve" aria-label="Permalink to &quot;beforeResolve %{#Methods-beforeResolve}%&quot;">​</a></h3><p>▸ <strong>beforeResolve</strong>(<code>guard</code>): () =&gt; <code>void</code></p><p>添加一个导航守卫，它会在导航将要被解析之前被执行。此时所有组件都已经获取完毕，且其它导航守卫也都已经完成调用。返回一个用来移除该守卫的函数。</p><p><strong><code>Example</code></strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">beforeResolve</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">to</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">to</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">meta</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">requiresAuth</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">!</span><span style="color:#E06C75;">isAuthenticated</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">beforeResolve</span><span style="color:#24292E;">(</span><span style="color:#E36209;">to</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (to.meta.requiresAuth </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">isAuthenticated) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h4 id="Methods-beforeResolve-Parameters" tabindex="-1">参数 <a class="header-anchor" href="#Methods-beforeResolve-Parameters" aria-label="Permalink to &quot;参数 %{#Methods-beforeResolve-Parameters}%&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>guard</code></td><td style="text-align:left;"><a href="./NavigationGuardWithThis.html"><code>NavigationGuardWithThis</code></a>&lt;<code>undefined</code>&gt;</td><td style="text-align:left;">navigation guard to add</td></tr></tbody></table><h4 id="Methods-beforeResolve-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-beforeResolve-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-beforeResolve-Returns}%&quot;">​</a></h4><p><code>fn</code></p><p>▸ (): <code>void</code></p><p>添加一个导航守卫，它会在导航将要被解析之前被执行。此时所有组件都已经获取完毕，且其它导航守卫也都已经完成调用。返回一个用来移除该守卫的函数。</p><p><strong><code>Example</code></strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">beforeResolve</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">to</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">to</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">meta</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">requiresAuth</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">!</span><span style="color:#E06C75;">isAuthenticated</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">beforeResolve</span><span style="color:#24292E;">(</span><span style="color:#E36209;">to</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (to.meta.requiresAuth </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">isAuthenticated) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h5 id="Methods-beforeResolve-Returns-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-beforeResolve-Returns-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-beforeResolve-Returns-Returns}%&quot;">​</a></h5><p><code>void</code></p><hr><h3 id="Methods-forward" tabindex="-1">forward <a class="header-anchor" href="#Methods-forward" aria-label="Permalink to &quot;forward %{#Methods-forward}%&quot;">​</a></h3><p>▸ <strong>forward</strong>(): <code>void</code></p><p>通过调用 <code>history.forward()</code> 在可能的情况下在历史中前进。相当于 <code>router.go(1)</code>。</p><h4 id="Methods-forward-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-forward-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-forward-Returns}%&quot;">​</a></h4><p><code>void</code></p><hr><h3 id="Methods-getRoutes" tabindex="-1">getRoutes <a class="header-anchor" href="#Methods-getRoutes" aria-label="Permalink to &quot;getRoutes %{#Methods-getRoutes}%&quot;">​</a></h3><p>▸ <strong>getRoutes</strong>(): <a href="./RouteRecordNormalized.html"><code>RouteRecordNormalized</code></a>[]</p><p>获得所有<a href="./../#routerecord">路由记录</a>的完整列表。</p><h4 id="Methods-getRoutes-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-getRoutes-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-getRoutes-Returns}%&quot;">​</a></h4><p><a href="./RouteRecordNormalized.html"><code>RouteRecordNormalized</code></a>[]</p><hr><h3 id="Methods-go" tabindex="-1">go <a class="header-anchor" href="#Methods-go" aria-label="Permalink to &quot;go %{#Methods-go}%&quot;">​</a></h3><p>▸ <strong>go</strong>(<code>delta</code>): <code>void</code></p><p>允许你在历史中前进或后退。相当于 <code>router.go()</code>。</p><h4 id="Methods-go-Parameters" tabindex="-1">参数 <a class="header-anchor" href="#Methods-go-Parameters" aria-label="Permalink to &quot;参数 %{#Methods-go-Parameters}%&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>delta</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">相对于当前页面你想要移动到的历史中的位置</td></tr></tbody></table><h4 id="Methods-go-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-go-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-go-Returns}%&quot;">​</a></h4><p><code>void</code></p><hr><h3 id="Methods-hasRoute" tabindex="-1">hasRoute <a class="header-anchor" href="#Methods-hasRoute" aria-label="Permalink to &quot;hasRoute %{#Methods-hasRoute}%&quot;">​</a></h3><p>▸ <strong>hasRoute</strong>(<code>name</code>): <code>boolean</code></p><p>检查一个给定名称的路由是否存在。</p><h4 id="Methods-hasRoute-Parameters" tabindex="-1">参数 <a class="header-anchor" href="#Methods-hasRoute-Parameters" aria-label="Permalink to &quot;参数 %{#Methods-hasRoute-Parameters}%&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><a href="./../#routerecordname"><code>RouteRecordName</code></a></td><td style="text-align:left;">要检查的路由名称</td></tr></tbody></table><h4 id="Methods-hasRoute-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-hasRoute-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-hasRoute-Returns}%&quot;">​</a></h4><p><code>boolean</code></p><hr><h3 id="Methods-isReady" tabindex="-1">isReady <a class="header-anchor" href="#Methods-isReady" aria-label="Permalink to &quot;isReady %{#Methods-isReady}%&quot;">​</a></h3><p>▸ <strong>isReady</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>返回一个 Promise，它会在路由器完成初始导航之后被解析，也就是说这时所有和初始路由有关联的异步入口钩子和异步组件都已经被解析。如果初始导航已经发生，则该 Promise 会被立刻解析。</p><p>这在服务端渲染中确认服务端和客户端输出一致的时候非常有用。注意在服务端你需要手动加入初始地址，而在客户端，路由器会从 URL 中自动获取。</p><h4 id="Methods-isReady-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-isReady-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-isReady-Returns}%&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><hr><h3 id="Methods-onError" tabindex="-1">onError <a class="header-anchor" href="#Methods-onError" aria-label="Permalink to &quot;onError %{#Methods-onError}%&quot;">​</a></h3><p>▸ <strong>onError</strong>(<code>handler</code>): () =&gt; <code>void</code></p><p>添加一个错误处理器，它会在每次导航遇到未被捕获的错误出现时被调用。其中包括同步和异步被抛出的错误、在任何导航守卫中返回或传入 <code>next</code> 的错误、尝试解析一个需要渲染路由的异步组件时发生的错误。</p><h4 id="Methods-onError-Parameters" tabindex="-1">参数 <a class="header-anchor" href="#Methods-onError-Parameters" aria-label="Permalink to &quot;参数 %{#Methods-onError-Parameters}%&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>handler</code></td><td style="text-align:left;"><code>_ErrorHandler</code></td><td style="text-align:left;">要注册的错误处理器</td></tr></tbody></table><h4 id="Methods-onError-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-onError-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-onError-Returns}%&quot;">​</a></h4><p><code>fn</code></p><p>▸ (): <code>void</code></p><p>添加一个错误处理器，它会在每次导航遇到未被捕获的错误出现时被调用。其中包括同步和异步被抛出的错误、在任何导航守卫中返回或传入 <code>next</code> 的错误、尝试解析一个需要渲染路由的异步组件时发生的错误。</p><h5 id="Methods-onError-Returns-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-onError-Returns-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-onError-Returns-Returns}%&quot;">​</a></h5><p><code>void</code></p><hr><h3 id="Methods-push" tabindex="-1">push <a class="header-anchor" href="#Methods-push" aria-label="Permalink to &quot;push %{#Methods-push}%&quot;">​</a></h3><p>▸ <strong>push</strong>(<code>to</code>): <code>Promise</code>&lt;<code>undefined</code> | <code>void</code> | <a href="./NavigationFailure.html"><code>NavigationFailure</code></a>&gt;</p><p>程序式地通过将一条记录加入到历史栈中来导航到一个新的 URL。</p><h4 id="Methods-push-Parameters" tabindex="-1">参数 <a class="header-anchor" href="#Methods-push-Parameters" aria-label="Permalink to &quot;参数 %{#Methods-push-Parameters}%&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>to</code></td><td style="text-align:left;"><a href="./../#routelocationraw"><code>RouteLocationRaw</code></a></td><td style="text-align:left;">要导航到的路由</td></tr></tbody></table><h4 id="Methods-push-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-push-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-push-Returns}%&quot;">​</a></h4><p><code>Promise</code>&lt;<code>undefined</code> | <code>void</code> | <a href="./NavigationFailure.html"><code>NavigationFailure</code></a>&gt;</p><hr><h3 id="Methods-removeRoute" tabindex="-1">removeRoute <a class="header-anchor" href="#Methods-removeRoute" aria-label="Permalink to &quot;removeRoute %{#Methods-removeRoute}%&quot;">​</a></h3><p>▸ <strong>removeRoute</strong>(<code>name</code>): <code>void</code></p><p>根据其名称移除一个现有的路由。</p><h4 id="Methods-removeRoute-Parameters" tabindex="-1">参数 <a class="header-anchor" href="#Methods-removeRoute-Parameters" aria-label="Permalink to &quot;参数 %{#Methods-removeRoute-Parameters}%&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><a href="./../#routerecordname"><code>RouteRecordName</code></a></td><td style="text-align:left;">要移除的路由名称</td></tr></tbody></table><h4 id="Methods-removeRoute-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-removeRoute-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-removeRoute-Returns}%&quot;">​</a></h4><p><code>void</code></p><hr><h3 id="Methods-replace" tabindex="-1">replace <a class="header-anchor" href="#Methods-replace" aria-label="Permalink to &quot;replace %{#Methods-replace}%&quot;">​</a></h3><p>▸ <strong>replace</strong>(<code>to</code>): <code>Promise</code>&lt;<code>undefined</code> | <code>void</code> | <a href="./NavigationFailure.html"><code>NavigationFailure</code></a>&gt;</p><p>程序式地通过替换历史栈中的当前记录来导航到一个新的 URL。</p><h4 id="Methods-replace-Parameters" tabindex="-1">参数 <a class="header-anchor" href="#Methods-replace-Parameters" aria-label="Permalink to &quot;参数 %{#Methods-replace-Parameters}%&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>to</code></td><td style="text-align:left;"><a href="./../#routelocationraw"><code>RouteLocationRaw</code></a></td><td style="text-align:left;">要导航到的路由</td></tr></tbody></table><h4 id="Methods-replace-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-replace-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-replace-Returns}%&quot;">​</a></h4><p><code>Promise</code>&lt;<code>undefined</code> | <code>void</code> | <a href="./NavigationFailure.html"><code>NavigationFailure</code></a>&gt;</p><hr><h3 id="Methods-resolve" tabindex="-1">resolve <a class="header-anchor" href="#Methods-resolve" aria-label="Permalink to &quot;resolve %{#Methods-resolve}%&quot;">​</a></h3><p>▸ <strong>resolve</strong>(<code>to</code>, <code>currentLocation?</code>): <a href="./RouteLocation.html"><code>RouteLocation</code></a> &amp; { <code>href</code>: <code>string</code> }</p><p>返回一个<a href="./../#routelocationraw">路由地址</a>的<a href="./RouteLocation.html">规范化版本</a>。同时包含一个包含任何现有 <code>base</code> 的 <code>href</code> 属性。默认情况下，用于 <code>router.currentRoute</code> 的 <code>currentLocation</code> 应该在特别高阶的用例下才会被覆写。</p><h4 id="Methods-resolve-Parameters" tabindex="-1">参数 <a class="header-anchor" href="#Methods-resolve-Parameters" aria-label="Permalink to &quot;参数 %{#Methods-resolve-Parameters}%&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>to</code></td><td style="text-align:left;"><a href="./../#routelocationraw"><code>RouteLocationRaw</code></a></td><td style="text-align:left;">要解析的原始路由地址</td></tr><tr><td style="text-align:left;"><code>currentLocation?</code></td><td style="text-align:left;"><a href="./RouteLocationNormalizedLoaded.html"><code>RouteLocationNormalizedLoaded</code></a></td><td style="text-align:left;">可选的被解析的当前地址</td></tr></tbody></table><h4 id="Methods-resolve-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-resolve-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-resolve-Returns}%&quot;">​</a></h4><p><a href="./RouteLocation.html"><code>RouteLocation</code></a> &amp; { <code>href</code>: <code>string</code> }</p>`,166),l=[r];function n(d,c,p,h,i,u){return t(),a("div",null,l)}const g=e(s,[["render",n]]);export{f as __pageData,g as default};
