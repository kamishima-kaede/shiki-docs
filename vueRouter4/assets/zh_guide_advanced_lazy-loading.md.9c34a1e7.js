import{_ as n,C as l,o as p,c as o,H as e,k as s,a as t,S as c}from"./chunks/framework.538c82e7.js";const D=JSON.parse('{"title":"路由懒加载","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/advanced/lazy-loading.md","filePath":"zh/guide/advanced/lazy-loading.md"}'),r={name:"zh/guide/advanced/lazy-loading.md"},y=s("h1",{id:"路由懒加载",tabindex:"-1"},[t("路由懒加载 "),s("a",{class:"header-anchor",href:"#路由懒加载","aria-label":'Permalink to "路由懒加载"'},"​")],-1),i=c(`<p>当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。</p><p>Vue Router 支持开箱即用的<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports" target="_blank" rel="noreferrer">动态导入</a>，这意味着你可以用动态导入代替静态导入：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 将</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// import UserDetails from &#39;./views/UserDetails.vue&#39;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 替换成</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">UserDetails</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">import</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;./views/UserDetails.vue&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">createRouter</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">routes</span><span style="color:#ABB2BF;">: [{ </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/users/:id&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">UserDetails</span><span style="color:#ABB2BF;"> }],</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 将</span></span>
<span class="line"><span style="color:#6A737D;">// import UserDetails from &#39;./views/UserDetails.vue&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// 替换成</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UserDetails</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./views/UserDetails.vue&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">router</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createRouter</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">  routes: [{ path: </span><span style="color:#032F62;">&#39;/users/:id&#39;</span><span style="color:#24292E;">, component: UserDetails }],</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p><code>component</code> (和 <code>components</code>) 配置接收一个返回 Promise 组件的函数，Vue Router <strong>只会在第一次进入页面时才会获取这个函数</strong>，然后使用缓存数据。这意味着你也可以使用更复杂的函数，只要它们返回一个 Promise ：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">UserDetails</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> () </span><span style="color:#C678DD;">=&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">Promise</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/* 组件定义 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UserDetails</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* 组件定义 */</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span></code></pre></div><p>一般来说，对所有的路由<strong>都使用动态导入</strong>是个好主意。</p><div class="tip custom-block"><p class="custom-block-title">注意</p><p><strong>不要</strong>在路由中使用<a href="https://cn.vuejs.org/guide/components/async.html" target="_blank" rel="noreferrer">异步组件</a>。异步组件仍然可以在路由组件中使用，但路由组件本身就是动态导入的。</p></div><p>如果你使用的是 webpack 之类的打包器，它将自动从<a href="https://webpack.js.org/guides/code-splitting/" target="_blank" rel="noreferrer">代码分割</a>中受益。</p><p>如果你使用的是 Babel，你将需要添加 <a href="https://babeljs.io/docs/plugins/syntax-dynamic-import/" target="_blank" rel="noreferrer">syntax-dynamic-import</a> 插件，才能使 Babel 正确地解析语法。</p><h2 id="把组件按组分块" tabindex="-1">把组件按组分块 <a class="header-anchor" href="#把组件按组分块" aria-label="Permalink to &quot;把组件按组分块&quot;">​</a></h2><h3 id="使用-webpack" tabindex="-1">使用 webpack <a class="header-anchor" href="#使用-webpack" aria-label="Permalink to &quot;使用 webpack&quot;">​</a></h3><p>有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用<a href="https://webpack.js.org/guides/code-splitting/#dynamic-imports" target="_blank" rel="noreferrer">命名 chunk</a>，一个特殊的注释语法来提供 chunk name (需要 Webpack &gt; 2.4)：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">UserDetails</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> () </span><span style="color:#C678DD;">=&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">import</span><span style="color:#ABB2BF;">(</span><span style="color:#7F848E;font-style:italic;">/* webpackChunkName: &quot;group-user&quot; */</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;./UserDetails.vue&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">UserDashboard</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> () </span><span style="color:#C678DD;">=&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">import</span><span style="color:#ABB2BF;">(</span><span style="color:#7F848E;font-style:italic;">/* webpackChunkName: &quot;group-user&quot; */</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;./UserDashboard.vue&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">UserProfileEdit</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> () </span><span style="color:#C678DD;">=&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">import</span><span style="color:#ABB2BF;">(</span><span style="color:#7F848E;font-style:italic;">/* webpackChunkName: &quot;group-user&quot; */</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;./UserProfileEdit.vue&#39;</span><span style="color:#ABB2BF;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UserDetails</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span><span style="color:#6A737D;">/* webpackChunkName: &quot;group-user&quot; */</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./UserDetails.vue&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UserDashboard</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span><span style="color:#6A737D;">/* webpackChunkName: &quot;group-user&quot; */</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./UserDashboard.vue&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UserProfileEdit</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;">(</span><span style="color:#6A737D;">/* webpackChunkName: &quot;group-user&quot; */</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./UserProfileEdit.vue&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>webpack 会将任何一个异步模块与相同的块名称组合到相同的异步块中。</p><h3 id="使用-Vite" tabindex="-1">使用 Vite <a class="header-anchor" href="#使用-Vite" aria-label="Permalink to &quot;使用 Vite&quot;">​</a></h3><p>在Vite中，你可以在<a href="https://vitejs.dev/config/#build-rollupoptions" target="_blank" rel="noreferrer"><code>rollupOptions</code></a>下定义分块：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// vite.config.js</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">defineConfig</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">build</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">rollupOptions</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// https://rollupjs.org/guide/en/#outputmanualchunks</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">output</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">manualChunks</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#98C379;">&#39;group-user&#39;</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#98C379;">&#39;./src/UserDetails&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#98C379;">&#39;./src/UserDashboard&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#98C379;">&#39;./src/UserProfileEdit&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          ],</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  build: {</span></span>
<span class="line"><span style="color:#24292E;">    rollupOptions: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// https://rollupjs.org/guide/en/#outputmanualchunks</span></span>
<span class="line"><span style="color:#24292E;">      output: {</span></span>
<span class="line"><span style="color:#24292E;">        manualChunks: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;group-user&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;./src/UserDetails&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;./src/UserDashboard&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;./src/UserProfileEdit&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          ],</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,17);function B(d,u,F,A,E,h){const a=l("VueSchoolLink");return p(),o("div",null,[y,e(a,{href:"https://vueschool.io/lessons/lazy-loading-routes-vue-cli-only",title:"Learn about lazy loading routes"}),i])}const C=n(r,[["render",B]]);export{D as __pageData,C as default};
