import{_ as e,o as i,c as s,U as a}from"./chunks/framework.njmvNCfc.js";const k=JSON.parse('{"title":"Dependency Pre-Bundling","description":"","frontmatter":{},"headers":[],"relativePath":"guide/dep-pre-bundling.md","filePath":"guide/dep-pre-bundling.md"}'),n={name:"guide/dep-pre-bundling.md"},t=a(`<h1 id="dependency-pre-bundling" tabindex="-1">Dependency Pre-Bundling <a class="header-anchor" href="#dependency-pre-bundling" aria-label="Permalink to &quot;Dependency Pre-Bundling&quot;">​</a></h1><p>When you run <code>vite</code> for the first time, Vite prebundles your project dependencies before loading your site locally. It is done automatically and transparently by default.</p><h2 id="the-why" tabindex="-1">The Why <a class="header-anchor" href="#the-why" aria-label="Permalink to &quot;The Why&quot;">​</a></h2><p>This is Vite performing what we call &quot;dependency pre-bundling&quot;. This process serves two purposes:</p><ol><li><p><strong>CommonJS and UMD compatibility:</strong> During development, Vite&#39;s dev serves all code as native ESM. Therefore, Vite must convert dependencies that are shipped as CommonJS or UMD into ESM first.</p><p>When converting CommonJS dependencies, Vite performs smart import analysis so that named imports to CommonJS modules will work as expected even if the exports are dynamically assigned (e.g. React):</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// works as expected</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React, { useState } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;react&#39;</span></span></code></pre></div></li><li><p><strong>Performance:</strong> Vite converts ESM dependencies with many internal modules into a single module to improve subsequent page load performance.</p><p>Some packages ship their ES modules builds as many separate files importing one another. For example, <a href="https://unpkg.com/browse/lodash-es/" target="_blank" rel="noreferrer"><code>lodash-es</code> has over 600 internal modules</a>! When we do <code>import { debounce } from &#39;lodash-es&#39;</code>, the browser fires off 600+ HTTP requests at the same time! Even though the server has no problem handling them, the large amount of requests create a network congestion on the browser side, causing the page to load noticeably slower.</p><p>By pre-bundling <code>lodash-es</code> into a single module, we now only need one HTTP request instead!</p></li></ol><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>Dependency pre-bundling only applies in development mode, and uses <code>esbuild</code> to convert dependencies to ESM. In production builds, <code>@rollup/plugin-commonjs</code> is used instead.</p></div><h2 id="automatic-dependency-discovery" tabindex="-1">Automatic Dependency Discovery <a class="header-anchor" href="#automatic-dependency-discovery" aria-label="Permalink to &quot;Automatic Dependency Discovery&quot;">​</a></h2><p>If an existing cache is not found, Vite will crawl your source code and automatically discover dependency imports (i.e. &quot;bare imports&quot; that expect to be resolved from <code>node_modules</code>) and use these found imports as entry points for the pre-bundle. The pre-bundling is performed with <code>esbuild</code> so it&#39;s typically very fast.</p><p>After the server has already started, if a new dependency import is encountered that isn&#39;t already in the cache, Vite will re-run the dep bundling process and reload the page if needed.</p><h2 id="monorepos-and-linked-dependencies" tabindex="-1">Monorepos and Linked Dependencies <a class="header-anchor" href="#monorepos-and-linked-dependencies" aria-label="Permalink to &quot;Monorepos and Linked Dependencies&quot;">​</a></h2><p>In a monorepo setup, a dependency may be a linked package from the same repo. Vite automatically detects dependencies that are not resolved from <code>node_modules</code> and treats the linked dep as source code. It will not attempt to bundle the linked dep, and will analyze the linked dep&#39;s dependency list instead.</p><p>However, this requires the linked dep to be exported as ESM. If not, you can add the dependency to <a href="/config/dep-optimization-options.html#optimizedeps-include"><code>optimizeDeps.include</code></a> and <a href="/config/build-options.html#build-commonjsoptions"><code>build.commonjsOptions.include</code></a> in your config.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  optimizeDeps: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    include: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;linked-dep&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  build: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    commonjsOptions: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      include: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">linked-dep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">node_modules</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>When making changes to the linked dep, restart the dev server with the <code>--force</code> command line option for the changes to take effect.</p><h2 id="customizing-the-behavior" tabindex="-1">Customizing the Behavior <a class="header-anchor" href="#customizing-the-behavior" aria-label="Permalink to &quot;Customizing the Behavior&quot;">​</a></h2><p>The default dependency discovery heuristics may not always be desirable. In cases where you want to explicitly include/exclude dependencies from the list, use the <a href="/config/dep-optimization-options.html"><code>optimizeDeps</code> config options</a>.</p><p>A typical use case for <code>optimizeDeps.include</code> or <code>optimizeDeps.exclude</code> is when you have an import that is not directly discoverable in the source code. For example, maybe the import is created as a result of a plugin transform. This means Vite won&#39;t be able to discover the import on the initial scan - it can only discover it after the file is requested by the browser and transformed. This will cause the server to immediately re-bundle after server start.</p><p>Both <code>include</code> and <code>exclude</code> can be used to deal with this. If the dependency is large (with many internal modules) or is CommonJS, then you should include it; If the dependency is small and is already valid ESM, you can exclude it and let the browser load it directly.</p><p>You can further customize esbuild too with the <a href="/config/dep-optimization-options.html#optimizedeps-esbuildoptions"><code>optimizeDeps.esbuildOptions</code> option</a>. For example, adding an esbuild plugin to handle special files in dependencies or changing the <a href="https://esbuild.github.io/api/#target" target="_blank" rel="noreferrer">build <code>target</code></a>.</p><h2 id="caching" tabindex="-1">Caching <a class="header-anchor" href="#caching" aria-label="Permalink to &quot;Caching&quot;">​</a></h2><h3 id="file-system-cache" tabindex="-1">File System Cache <a class="header-anchor" href="#file-system-cache" aria-label="Permalink to &quot;File System Cache&quot;">​</a></h3><p>Vite caches the pre-bundled dependencies in <code>node_modules/.vite</code>. It determines whether it needs to re-run the pre-bundling step based on a few sources:</p><ul><li>Package manager lockfile content, e.g. <code>package-lock.json</code>, <code>yarn.lock</code>, <code>pnpm-lock.yaml</code> or <code>bun.lockb</code>.</li><li>Patches folder modification time.</li><li>Relevant fields in your <code>vite.config.js</code>, if present.</li><li><code>NODE_ENV</code> value.</li></ul><p>The pre-bundling step will only need to be re-run when one of the above has changed.</p><p>If for some reason you want to force Vite to re-bundle deps, you can either start the dev server with the <code>--force</code> command line option, or manually delete the <code>node_modules/.vite</code> cache directory.</p><h3 id="browser-cache" tabindex="-1">Browser Cache <a class="header-anchor" href="#browser-cache" aria-label="Permalink to &quot;Browser Cache&quot;">​</a></h3><p>Resolved dependency requests are strongly cached with HTTP headers <code>max-age=31536000,immutable</code> to improve page reload performance during dev. Once cached, these requests will never hit the dev server again. They are auto invalidated by the appended version query if a different version is installed (as reflected in your package manager lockfile). If you want to debug your dependencies by making local edits, you can:</p><ol><li>Temporarily disable cache via the Network tab of your browser devtools;</li><li>Restart Vite dev server with the <code>--force</code> flag to re-bundle the deps;</li><li>Reload the page.</li></ol>`,28),o=[t];function d(l,r,p,c,h,u){return i(),s("div",null,o)}const g=e(n,[["render",d]]);export{k as __pageData,g as default};
