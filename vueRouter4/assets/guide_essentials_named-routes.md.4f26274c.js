import{_ as n,C as e,o,c as l,H as p,k as s,a as t,S as r}from"./chunks/framework.538c82e7.js";const E=JSON.parse('{"title":"Named Routes","description":"","frontmatter":{},"headers":[],"relativePath":"guide/essentials/named-routes.md","filePath":"guide/essentials/named-routes.md"}'),c={name:"guide/essentials/named-routes.md"},i=s("h1",{id:"Named-Routes",tabindex:"-1"},[t("Named Routes "),s("a",{class:"header-anchor",href:"#Named-Routes","aria-label":'Permalink to "Named Routes"'},"​")],-1),y=r(`<p>Alongside the <code>path</code>, you can provide a <code>name</code> to any route. This has the following advantages:</p><ul><li>No hardcoded URLs</li><li>Automatic encoding/decoding of <code>params</code></li><li>Prevents you from having a typo in the url</li><li>Bypassing path ranking (e.g. to display a )</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/user/:username&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;user&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">User</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/user/:username&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;user&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    component: User</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>To link to a named route, you can pass an object to the <code>router-link</code> component&#39;s <code>to</code> prop:</p><div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">router-link</span><span style="color:#ABB2BF;"> :</span><span style="color:#D19A66;">to</span><span style="color:#ABB2BF;">=</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;">{ </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;user&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">params</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">username</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;erina&#39;</span><span style="color:#ABB2BF;"> }}</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  User</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">router-link</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">router-link</span><span style="color:#24292E;"> :</span><span style="color:#6F42C1;">to</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">{ name: </span><span style="color:#032F62;">&#39;user&#39;</span><span style="color:#24292E;">, params: { username: </span><span style="color:#032F62;">&#39;erina&#39;</span><span style="color:#24292E;"> }}</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  User</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">router-link</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>This is the exact same object used programmatically with <code>router.push()</code>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;user&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">params</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">username</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;erina&#39;</span><span style="color:#ABB2BF;"> } })</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({ name: </span><span style="color:#032F62;">&#39;user&#39;</span><span style="color:#24292E;">, params: { username: </span><span style="color:#032F62;">&#39;erina&#39;</span><span style="color:#24292E;"> } })</span></span></code></pre></div><p>In both cases, the router will navigate to the path <code>/user/erina</code>.</p><p>Full example <a href="https://github.com/vuejs/vue-router/blob/dev/examples/named-routes/app.js" target="_blank" rel="noreferrer">here</a>.</p><p>Each name <strong>must be unique</strong> across all routes. If you add the same name to multiple routes, the router will only keep the last one. You can read more about this <a href="./../advanced/dynamic-routing.html#Removing-routes">in the Dynamic Routing</a> section.</p>`,10);function B(d,u,m,h,F,A){const a=e("VueSchoolLink");return o(),l("div",null,[i,p(a,{href:"https://vueschool.io/lessons/named-routes",title:"Learn about the named routes"}),y])}const C=n(c,[["render",B]]);export{E as __pageData,C as default};