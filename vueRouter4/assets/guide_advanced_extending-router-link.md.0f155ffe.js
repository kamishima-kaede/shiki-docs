import{_ as a,C as l,o as p,c as o,H as e,k as s,a as t,S as c}from"./chunks/framework.538c82e7.js";const v=JSON.parse('{"title":"Extending RouterLink","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/extending-router-link.md","filePath":"guide/advanced/extending-router-link.md"}'),r={name:"guide/advanced/extending-router-link.md"},y=s("h1",{id:"Extending-RouterLink",tabindex:"-1"},[t("Extending RouterLink "),s("a",{class:"header-anchor",href:"#Extending-RouterLink","aria-label":'Permalink to "Extending RouterLink"'},"​")],-1),i=c(`<p>The RouterLink component exposes enough <code>props</code> to suffice most basic applications but it doesn&#39;t try to cover every possible use case and you will likely find yourself using <code>v-slot</code> for some advanced cases. In most medium to large sized applications, it&#39;s worth creating one if not multiple custom RouterLink components to reuse them across your application. Some examples are Links in a Navigation Menu, handling external links, adding an <code>inactive-class</code>, etc.</p><p>Let&#39;s extend RouterLink to handle external links as well and adding a custom <code>inactive-class</code> in an <code>AppLink.vue</code> file:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">v-if</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;isExternalLink&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">v-bind</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;$attrs&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">:href</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;to&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">target</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;_blank&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">slot</span><span style="color:#ABB2BF;"> </span><span style="color:#FFFFFF;">/</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">router-link</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">v-else</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">v-bind</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;$props&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">custom</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">v-slot</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;{ isActive, href, navigate }&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">a</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#D19A66;">v-bind</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;$attrs&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#D19A66;">:href</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;href&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#D19A66;">@click</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;navigate&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#D19A66;">:class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;isActive ? activeClass : inactiveClass&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">slot</span><span style="color:#ABB2BF;"> </span><span style="color:#FFFFFF;">/</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">router-link</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">RouterLink</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;AppLink&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">inheritAttrs</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// add @ts-ignore if using TypeScript</span></span>
<span class="line"><span style="color:#ABB2BF;">    ...</span><span style="color:#E5C07B;">RouterLink</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">inactiveClass</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">String</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">computed</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">isExternalLink</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">typeof</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">to</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;string&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">to</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">startsWith</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;http&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-if</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;isExternalLink&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-bind</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$attrs&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;to&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">target</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;_blank&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">slot</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">/</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">router-link</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-else</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-bind</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$props&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">custom</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ isActive, href, navigate }&quot;</span></span>
<span class="line"><span style="color:#24292E;">  &gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">a</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-bind</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$attrs&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;href&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;navigate&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;isActive ? activeClass : inactiveClass&quot;</span></span>
<span class="line"><span style="color:#24292E;">    &gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">slot</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">/</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">router-link</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { RouterLink } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;AppLink&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  inheritAttrs: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// add @ts-ignore if using TypeScript</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">RouterLink.props,</span></span>
<span class="line"><span style="color:#24292E;">    inactiveClass: String,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  computed: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">isExternalLink</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.to </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.to.</span><span style="color:#6F42C1;">startsWith</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;http&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>If you prefer using a render function or create <code>computed</code> properties, you can use the <code>useLink</code> from the <a href="./composition-api.html">Composition API</a>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">RouterLink</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">useLink</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;AppLink&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// add @ts-ignore if using TypeScript</span></span>
<span class="line"><span style="color:#ABB2BF;">    ...</span><span style="color:#E5C07B;">RouterLink</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">inactiveClass</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">String</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">setup</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">props</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// \`props\` contains \`to\` and any other prop that can be passed to &lt;router-link&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">navigate</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">href</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">route</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">isActive</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">isExactActive</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useLink</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// profit!</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">isExternalLink</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { RouterLink, useLink } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;AppLink&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// add @ts-ignore if using TypeScript</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">RouterLink.props,</span></span>
<span class="line"><span style="color:#24292E;">    inactiveClass: String,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">(</span><span style="color:#E36209;">props</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// \`props\` contains \`to\` and any other prop that can be passed to &lt;router-link&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">navigate</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">href</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">route</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">isActive</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">isExactActive</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useLink</span><span style="color:#24292E;">(props)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// profit!</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> { isExternalLink }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>In practice, you might want to use your <code>AppLink</code> component for different parts of your application. e.g. using <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">Tailwind CSS</a>, you could create a <code>NavLink.vue</code> component with all the classes:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">AppLink</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">v-bind</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;$attrs&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">active-class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;border-indigo-500 text-gray-900 focus:border-indigo-700&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">inactive-class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">slot</span><span style="color:#ABB2BF;"> </span><span style="color:#FFFFFF;">/</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">AppLink</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">AppLink</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-bind</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$attrs&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">active-class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;border-indigo-500 text-gray-900 focus:border-indigo-700&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">inactive-class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300&quot;</span></span>
<span class="line"><span style="color:#24292E;">  &gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">slot</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">/</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">AppLink</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,7);function B(A,F,E,u,d,C){const n=l("VueSchoolLink");return p(),o("div",null,[y,e(n,{href:"https://vueschool.io/lessons/extending-router-link-for-external-urls",title:"Learn how to extend router-link"}),i])}const f=a(r,[["render",B]]);export{v as __pageData,f as default};
