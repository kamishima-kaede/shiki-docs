import{_ as i,o as s,c as a,U as n}from"./chunks/framework.njmvNCfc.js";const u=JSON.parse('{"title":"Using Plugins","description":"","frontmatter":{},"headers":[],"relativePath":"guide/using-plugins.md","filePath":"guide/using-plugins.md"}'),e={name:"guide/using-plugins.md"},l=n(`<h1 id="using-plugins" tabindex="-1">Using Plugins <a class="header-anchor" href="#using-plugins" aria-label="Permalink to &quot;Using Plugins&quot;">​</a></h1><p>Vite can be extended using plugins, which are based on Rollup&#39;s well-designed plugin interface with a few extra Vite-specific options. This means that Vite users can rely on the mature ecosystem of Rollup plugins, while also being able to extend the dev server and SSR functionality as needed.</p><h2 id="adding-a-plugin" tabindex="-1">Adding a Plugin <a class="header-anchor" href="#adding-a-plugin" aria-label="Permalink to &quot;Adding a Plugin&quot;">​</a></h2><p>To use a plugin, it needs to be added to the <code>devDependencies</code> of the project and included in the <code>plugins</code> array in the <code>vite.config.js</code> config file. For example, to provide support for legacy browsers, the official <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noreferrer">@vitejs/plugin-legacy</a> can be used:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ npm add -D @vitejs/plugin-legacy</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> legacy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@vitejs/plugin-legacy&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vite&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    legacy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      targets: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;defaults&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;not IE 11&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p><code>plugins</code> also accepts presets including several plugins as a single element. This is useful for complex features (like framework integration) that are implemented using several plugins. The array will be flattened internally.</p><p>Falsy plugins will be ignored, which can be used to easily activate or deactivate plugins.</p><h2 id="finding-plugins" tabindex="-1">Finding Plugins <a class="header-anchor" href="#finding-plugins" aria-label="Permalink to &quot;Finding Plugins&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>Vite aims to provide out-of-the-box support for common web development patterns. Before searching for a Vite or compatible Rollup plugin, check out the <a href="./../guide/features.html">Features Guide</a>. A lot of the cases where a plugin would be needed in a Rollup project are already covered in Vite.</p></div><p>Check out the <a href="./../plugins/">Plugins section</a> for information about official plugins. Community plugins are listed in <a href="https://github.com/vitejs/awesome-vite#plugins" target="_blank" rel="noreferrer">awesome-vite</a>. For compatible Rollup plugins, check out <a href="https://vite-rollup-plugins.patak.dev" target="_blank" rel="noreferrer">Vite Rollup Plugins</a> for a list of compatible official Rollup plugins with usage instructions or the <a href="./../guide/api-plugin.html#rollup-plugin-compatibility">Rollup Plugin Compatibility section</a> in case it is not listed there.</p><p>You can also find plugins that follow the <a href="./api-plugin.html#conventions">recommended conventions</a> using a <a href="https://www.npmjs.com/search?q=vite-plugin&amp;ranking=popularity" target="_blank" rel="noreferrer">npm search for vite-plugin</a> for Vite plugins or a <a href="https://www.npmjs.com/search?q=rollup-plugin&amp;ranking=popularity" target="_blank" rel="noreferrer">npm search for rollup-plugin</a> for Rollup plugins.</p><h2 id="enforcing-plugin-ordering" tabindex="-1">Enforcing Plugin Ordering <a class="header-anchor" href="#enforcing-plugin-ordering" aria-label="Permalink to &quot;Enforcing Plugin Ordering&quot;">​</a></h2><p>For compatibility with some Rollup plugins, it may be needed to enforce the order of the plugin or only apply at build time. This should be an implementation detail for Vite plugins. You can enforce the position of a plugin with the <code>enforce</code> modifier:</p><ul><li><code>pre</code>: invoke plugin before Vite core plugins</li><li>default: invoke plugin after Vite core plugins</li><li><code>post</code>: invoke plugin after Vite build plugins</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> image </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@rollup/plugin-image&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vite&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      ...</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      enforce: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pre&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>Check out <a href="./api-plugin.html#plugin-ordering">Plugins API Guide</a> for detailed information, and look out for the <code>enforce</code> label and usage instructions for popular plugins in the <a href="https://vite-rollup-plugins.patak.dev" target="_blank" rel="noreferrer">Vite Rollup Plugins</a> compatibility listing.</p><h2 id="conditional-application" tabindex="-1">Conditional Application <a class="header-anchor" href="#conditional-application" aria-label="Permalink to &quot;Conditional Application&quot;">​</a></h2><p>By default, plugins are invoked for both serve and build. In cases where a plugin needs to be conditionally applied only during serve or build, use the <code>apply</code> property to only invoke them during <code>&#39;build&#39;</code> or <code>&#39;serve&#39;</code>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> typescript2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;rollup-plugin-typescript2&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vite&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      ...</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">typescript2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      apply: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;build&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="building-plugins" tabindex="-1">Building Plugins <a class="header-anchor" href="#building-plugins" aria-label="Permalink to &quot;Building Plugins&quot;">​</a></h2><p>Check out the <a href="./api-plugin.html">Plugins API Guide</a> for documentation about creating plugins.</p>`,22),t=[l];function p(h,r,o,d,g,k){return s(),a("div",null,t)}const E=i(e,[["render",p]]);export{u as __pageData,E as default};