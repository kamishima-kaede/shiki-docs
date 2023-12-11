import{_ as n,C as l,o as p,c as e,H as o,k as s,a as t,S as c}from"./chunks/framework.538c82e7.js";const g=JSON.parse('{"title":"Redirect and Alias","description":"","frontmatter":{},"headers":[],"relativePath":"guide/essentials/redirect-and-alias.md","filePath":"guide/essentials/redirect-and-alias.md"}'),r={name:"guide/essentials/redirect-and-alias.md"},i=s("h1",{id:"Redirect-and-Alias",tabindex:"-1"},[t("Redirect and Alias "),s("a",{class:"header-anchor",href:"#Redirect-and-Alias","aria-label":'Permalink to "Redirect and Alias"'},"​")],-1),y=c(`<h2 id="Redirect" tabindex="-1">Redirect <a class="header-anchor" href="#Redirect" aria-label="Permalink to &quot;Redirect&quot;">​</a></h2><p>Redirecting is also done in the <code>routes</code> configuration. To redirect from <code>/home</code> to <code>/</code>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [{ </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/home&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">redirect</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/&#39;</span><span style="color:#ABB2BF;"> }]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [{ path: </span><span style="color:#032F62;">&#39;/home&#39;</span><span style="color:#24292E;">, redirect: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;"> }]</span></span></code></pre></div><p>The redirect can also be targeting a named route:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [{ </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/home&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">redirect</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;homepage&#39;</span><span style="color:#ABB2BF;"> } }]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [{ path: </span><span style="color:#032F62;">&#39;/home&#39;</span><span style="color:#24292E;">, redirect: { name: </span><span style="color:#032F62;">&#39;homepage&#39;</span><span style="color:#24292E;"> } }]</span></span></code></pre></div><p>Or even use a function for dynamic redirecting:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// /search/screens -&gt; /search?q=screens</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/search/:searchText&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">redirect</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;font-style:italic;">to</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// the function receives the target route as the argument</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// we return a redirect path/location here.</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/search&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">query</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">q</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">to</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">params</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">searchText</span><span style="color:#ABB2BF;"> } }</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/search&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// /search/screens -&gt; /search?q=screens</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/search/:searchText&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">redirect</span><span style="color:#24292E;">: </span><span style="color:#E36209;">to</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// the function receives the target route as the argument</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// we return a redirect path/location here.</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> { path: </span><span style="color:#032F62;">&#39;/search&#39;</span><span style="color:#24292E;">, query: { q: to.params.searchText } }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/search&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>Note that <strong><a href="./../advanced/navigation-guards.html">Navigation Guards</a> are not applied on the route that redirects, only on its target</strong>. e.g. In the above example, adding a <code>beforeEnter</code> guard to the <code>/home</code> route would not have any effect.</p><p>When writing a <code>redirect</code>, you can omit the <code>component</code> option because it is never directly reached so there is no component to render. The only exception are <a href="./nested-routes.html">nested routes</a>: if a route record has <code>children</code> and a <code>redirect</code> property, it should also have a <code>component</code> property.</p><h3 id="Relative-redirecting" tabindex="-1">Relative redirecting <a class="header-anchor" href="#Relative-redirecting" aria-label="Permalink to &quot;Relative redirecting&quot;">​</a></h3><p>It&#39;s also possible to redirect to a relative location:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// will always redirect /users/123/posts to /users/123/profile</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/users/:id/posts&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">redirect</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;font-style:italic;">to</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// the function receives the target route as the argument</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// a relative location doesn&#39;t start with \`/\`</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// or { path: &#39;profile&#39;}</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;profile&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// will always redirect /users/123/posts to /users/123/profile</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/users/:id/posts&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">redirect</span><span style="color:#24292E;">: </span><span style="color:#E36209;">to</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// the function receives the target route as the argument</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// a relative location doesn&#39;t start with \`/\`</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// or { path: &#39;profile&#39;}</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;profile&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><h2 id="Alias" tabindex="-1">Alias <a class="header-anchor" href="#Alias" aria-label="Permalink to &quot;Alias&quot;">​</a></h2><p>A redirect means when the user visits <code>/home</code>, the URL will be replaced by <code>/</code>, and then matched as <code>/</code>. But what is an alias?</p><p><strong>An alias of <code>/</code> as <code>/home</code> means when the user visits <code>/home</code>, the URL remains <code>/home</code>, but it will be matched as if the user is visiting <code>/</code>.</strong></p><p>The above can be expressed in the route configuration as:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [{ </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">Homepage</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">alias</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/home&#39;</span><span style="color:#ABB2BF;"> }]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [{ path: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">, component: Homepage, alias: </span><span style="color:#032F62;">&#39;/home&#39;</span><span style="color:#24292E;"> }]</span></span></code></pre></div><p>An alias gives you the freedom to map a UI structure to an arbitrary URL, instead of being constrained by the configuration&#39;s nesting structure. Make the alias start with a <code>/</code> to make the path absolute in nested routes. You can even combine both and provide multiple aliases with an array:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/users&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">UsersLayout</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// this will render the UserList for these 3 URLs</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// - /users</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// - /users/list</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// - /people</span></span>
<span class="line"><span style="color:#ABB2BF;">      { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">UserList</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">alias</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&#39;/people&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;list&#39;</span><span style="color:#ABB2BF;">] },</span></span>
<span class="line"><span style="color:#ABB2BF;">    ],</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/users&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    component: UsersLayout,</span></span>
<span class="line"><span style="color:#24292E;">    children: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// this will render the UserList for these 3 URLs</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// - /users</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// - /users/list</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// - /people</span></span>
<span class="line"><span style="color:#24292E;">      { path: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, component: UserList, alias: [</span><span style="color:#032F62;">&#39;/people&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;list&#39;</span><span style="color:#24292E;">] },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>If your route has parameters, make sure to include them in any absolute alias:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/users/:id&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">UsersByIdLayout</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// this will render the UserDetails for these 3 URLs</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// - /users/24</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// - /users/24/profile</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// - /24</span></span>
<span class="line"><span style="color:#ABB2BF;">      { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;profile&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">UserDetails</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">alias</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&#39;/:id&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">] },</span></span>
<span class="line"><span style="color:#ABB2BF;">    ],</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/users/:id&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    component: UsersByIdLayout,</span></span>
<span class="line"><span style="color:#24292E;">    children: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// this will render the UserDetails for these 3 URLs</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// - /users/24</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// - /users/24/profile</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// - /24</span></span>
<span class="line"><span style="color:#24292E;">      { path: </span><span style="color:#032F62;">&#39;profile&#39;</span><span style="color:#24292E;">, component: UserDetails, alias: [</span><span style="color:#032F62;">&#39;/:id&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">] },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p><strong>Note about SEO</strong>: when using aliases, make sure to <a href="https://support.google.com/webmasters/answer/139066?hl=en" target="_blank" rel="noreferrer">define canonical links</a>.</p>`,22);function B(d,h,A,F,E,u){const a=l("VueSchoolLink");return p(),e("div",null,[i,o(a,{href:"https://vueschool.io/lessons/vue-router-4-redirect-and-alias",title:"Learn how to use redirect and alias"}),y])}const m=n(r,[["render",B]]);export{g as __pageData,m as default};