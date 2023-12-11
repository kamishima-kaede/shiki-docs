import{_ as e,o as i,c as s,U as t}from"./chunks/framework.njmvNCfc.js";const g=JSON.parse('{"title":"Migration from v4","description":"","frontmatter":{},"headers":[],"relativePath":"guide/migration.md","filePath":"guide/migration.md"}'),a={name:"guide/migration.md"},o=t(`<h1 id="migration-from-v4" tabindex="-1">Migration from v4 <a class="header-anchor" href="#migration-from-v4" aria-label="Permalink to &quot;Migration from v4&quot;">​</a></h1><h2 id="node-js-support" tabindex="-1">Node.js Support <a class="header-anchor" href="#node-js-support" aria-label="Permalink to &quot;Node.js Support&quot;">​</a></h2><p>Vite no longer supports Node.js 14 / 16 / 17 / 19, which reached its EOL. Node.js 18 / 20+ is now required.</p><h2 id="rollup-4" tabindex="-1">Rollup 4 <a class="header-anchor" href="#rollup-4" aria-label="Permalink to &quot;Rollup 4&quot;">​</a></h2><p>Vite is now using Rollup 4 which also brings along its breaking changes, in particular:</p><ul><li>Import assertions (<code>assertions</code> prop) has been renamed to import attributes (<code>attributes</code> prop).</li><li>Acorn plugins are no longer supported.</li><li>For Vite plugins, <code>this.resolve</code> <code>skipSelf</code> option is now <code>true</code> by default.</li><li>For Vite plugins, <code>this.parse</code> now only supports the <code>allowReturnOutsideFunction</code> option for now.</li></ul><p>Read the full breaking changes in <a href="https://github.com/rollup/rollup/releases/tag/v4.0.0" target="_blank" rel="noreferrer">Rollup&#39;s release notes</a> for build-related changes in <a href="/config/build-options.html#build-rollupoptions"><code>build.rollupOptions</code></a>.</p><p>If you are using TypeScript, make sure to set <code>moduleResolution: &#39;bundler&#39;</code> (or <code>node16</code>/<code>nodenext</code>) as Rollup 4 requires it. Or you can set <code>skipLibCheck: true</code> instead.</p><h2 id="deprecate-cjs-node-api" tabindex="-1">Deprecate CJS Node API <a class="header-anchor" href="#deprecate-cjs-node-api" aria-label="Permalink to &quot;Deprecate CJS Node API&quot;">​</a></h2><p>The CJS Node API of Vite is deprecated. When calling <code>require(&#39;vite&#39;)</code>, a deprecation warning is now logged. You should update your files or frameworks to import the ESM build of Vite instead.</p><p>In a basic Vite project, make sure:</p><ol><li>The <code>vite.config.js</code> file content is using the ESM syntax.</li><li>The closest <code>package.json</code> file has <code>&quot;type&quot;: &quot;module&quot;</code>, or use the <code>.mjs</code>/<code>.mts</code> extension, e.g. <code>vite.config.mjs</code> or <code>vite.config.mts</code>.</li></ol><p>For other projects, there are a few general approaches:</p><ul><li><strong>Configure ESM as default, opt-in to CJS if needed:</strong> Add <code>&quot;type&quot;: &quot;module&quot;</code> in the project <code>package.json</code>. All <code>*.js</code> files are now interpreted as ESM and needs to use the ESM syntax. You can rename a file with the <code>.cjs</code> extension to keep using CJS instead.</li><li><strong>Keep CJS as default, opt-in to ESM if needed:</strong> If the project <code>package.json</code> does not have <code>&quot;type&quot;: &quot;module&quot;</code>, all <code>*.js</code> files are interpreted as CJS. You can rename a file with the <code>.mjs</code> extension to use ESM instead.</li><li><strong>Dynamically import Vite:</strong> If you need to keep using CJS, you can dynamically import Vite using <code>import(&#39;vite&#39;)</code> instead. This requires your code to be written in an <code>async</code> context, but should still be manageable as Vite&#39;s API is mostly asynchronous.</li></ul><p>See the <a href="/guide/troubleshooting.html#vite-cjs-node-api-deprecated">troubleshooting guide</a> for more information.</p><h2 id="rework-define-and-import-meta-env-replacement-strategy" tabindex="-1">Rework <code>define</code> and <code>import.meta.env.*</code> replacement strategy <a class="header-anchor" href="#rework-define-and-import-meta-env-replacement-strategy" aria-label="Permalink to &quot;Rework \`define\` and \`import.meta.env.*\` replacement strategy&quot;">​</a></h2><p>In Vite 4, the <a href="/config/shared-options.html#define"><code>define</code></a> and <a href="/guide/env-and-mode.html#env-variables"><code>import.meta.env.*</code></a> features use different replacement strategies in dev and build:</p><ul><li>In dev, both features are injected as global variables to <code>globalThis</code> and <code>import.meta</code> respectively.</li><li>In build, both features are statically replaced with a regex.</li></ul><p>This results in a dev and build inconsistency when trying to access the variables, and sometimes even caused failed builds. For example:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  define: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    __APP_VERSION__: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1.0.0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { __APP_VERSION__ }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// dev: { __APP_VERSION__: &quot;1.0.0&quot; } ✅</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// build: { &quot;1.0.0&quot; } ❌</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> docs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;I like import.meta.env.MODE&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// dev: &quot;I like import.meta.env.MODE&quot; ✅</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// build: &quot;I like &quot;production&quot;&quot; ❌</span></span></code></pre></div><p>Vite 5 fixes this by using <code>esbuild</code> to handle the replacements in builds, aligning with the dev behaviour.</p><p>This change should not affect most setups, as it&#39;s already documented that <code>define</code> values should follow esbuild&#39;s syntax:</p><blockquote><p>To be consistent with esbuild behavior, expressions must either be a JSON object (null, boolean, number, string, array, or object) or a single identifier.</p></blockquote><p>However, if you prefer to keep statically replacing values directly, you can use <a href="https://github.com/rollup/plugins/tree/master/packages/replace" target="_blank" rel="noreferrer"><code>@rollup/plugin-replace</code></a>.</p><h2 id="general-changes" tabindex="-1">General Changes <a class="header-anchor" href="#general-changes" aria-label="Permalink to &quot;General Changes&quot;">​</a></h2><h3 id="ssr-externalized-modules-value-now-matches-production" tabindex="-1">SSR externalized modules value now matches production <a class="header-anchor" href="#ssr-externalized-modules-value-now-matches-production" aria-label="Permalink to &quot;SSR externalized modules value now matches production&quot;">​</a></h3><p>In Vite 4, SSR externalized modules are wrapped with <code>.default</code> and <code>.__esModule</code> handling for better interoperability, but it doesn&#39;t match the production behaviour when loaded by the runtime environment (e.g. Node.js), causing hard-to-catch inconsistencies. By default, all direct project dependencies are SSR externalized.</p><p>Vite 5 now removes the <code>.default</code> and <code>.__esModule</code> handling to match the production behaviour. In practice, this shouldn&#39;t affect properly-packaged dependencies, but if you encounter new issues loading modules, you can try these refactors:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Before:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { foo } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bar&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// After:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _bar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bar&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _bar</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Before:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bar&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// After:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bar&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _foo.default</span></span></code></pre></div><p>Note that these changes matches the Node.js behaviour, so you can also run the imports in Node.js to test it out. If you prefer to stick with the previous behaviour, you can set <code>legacy.proxySsrExternalModules</code> to <code>true</code>.</p><h3 id="worker-plugins-is-now-a-function" tabindex="-1"><code>worker.plugins</code> is now a function <a class="header-anchor" href="#worker-plugins-is-now-a-function" aria-label="Permalink to &quot;\`worker.plugins\` is now a function&quot;">​</a></h3><p>In Vite 4, <a href="/config/worker-options.html#worker-plugins"><code>worker.plugins</code></a> accepted an array of plugins (<code>(Plugin | Plugin[])[]</code>). From Vite 5, it needs to be configured as a function that returns an array of plugins (<code>() =&gt; (Plugin | Plugin[])[]</code>). This change is required so parallel worker builds run more consistently and predictably.</p><h3 id="allow-path-containing-to-fallback-to-index-html" tabindex="-1">Allow path containing <code>.</code> to fallback to index.html <a class="header-anchor" href="#allow-path-containing-to-fallback-to-index-html" aria-label="Permalink to &quot;Allow path containing \`.\` to fallback to index.html&quot;">​</a></h3><p>In Vite 4, accessing a path in dev containing <code>.</code> did not fallback to index.html even if <a href="/config/shared-options.html#apptype"><code>appType</code></a> is set to <code>&#39;spa&#39;</code> (default). From Vite 5, it will fallback to index.html.</p><p>Note that the browser will no longer show a 404 error message in the console if you point the image path to a non-existent file (e.g. <code>&lt;img src=&quot;./file-does-not-exist.png&quot;&gt;</code>).</p><h3 id="align-dev-and-preview-html-serving-behaviour" tabindex="-1">Align dev and preview HTML serving behaviour <a class="header-anchor" href="#align-dev-and-preview-html-serving-behaviour" aria-label="Permalink to &quot;Align dev and preview HTML serving behaviour&quot;">​</a></h3><p>In Vite 4, the dev and preview servers serve HTML based on its directory structure and trailing slash differently. This causes inconsistencies when testing your built app. Vite 5 refactors into a single behaviour like below, given the following file structure:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>├── index.html</span></span>
<span class="line"><span>├── file.html</span></span>
<span class="line"><span>└── dir</span></span>
<span class="line"><span>    └── index.html</span></span></code></pre></div><table><thead><tr><th>Request</th><th>Before (dev)</th><th>Before (preview)</th><th>After (dev &amp; preview)</th></tr></thead><tbody><tr><td><code>/dir/index.html</code></td><td><code>/dir/index.html</code></td><td><code>/dir/index.html</code></td><td><code>/dir/index.html</code></td></tr><tr><td><code>/dir</code></td><td><code>/index.html</code> (SPA fallback)</td><td><code>/dir/index.html</code></td><td><code>/index.html</code> (SPA fallback)</td></tr><tr><td><code>/dir/</code></td><td><code>/dir/index.html</code></td><td><code>/dir/index.html</code></td><td><code>/dir/index.html</code></td></tr><tr><td><code>/file.html</code></td><td><code>/file.html</code></td><td><code>/file.html</code></td><td><code>/file.html</code></td></tr><tr><td><code>/file</code></td><td><code>/index.html</code> (SPA fallback)</td><td><code>/file.html</code></td><td><code>/file.html</code></td></tr><tr><td><code>/file/</code></td><td><code>/index.html</code> (SPA fallback)</td><td><code>/file.html</code></td><td><code>/index.html</code> (SPA fallback)</td></tr></tbody></table><h3 id="manifest-files-are-now-generated-in-vite-directory-by-default" tabindex="-1">Manifest files are now generated in <code>.vite</code> directory by default <a class="header-anchor" href="#manifest-files-are-now-generated-in-vite-directory-by-default" aria-label="Permalink to &quot;Manifest files are now generated in \`.vite\` directory by default&quot;">​</a></h3><p>In Vite 4, the manifest files (<a href="/config/build-options.html#build-manifest"><code>build.manifest</code></a> and <a href="/config/build-options.html#build-ssrmanifest"><code>build.ssrManifest</code></a>) were generated in the root of <a href="/config/build-options.html#build-outdir"><code>build.outDir</code></a> by default.</p><p>From Vite 5, they will be generated in the <code>.vite</code> directory in the <code>build.outDir</code> by default. This change helps deconflict public files with the same manifest file names when they are copied to the <code>build.outDir</code>.</p><h3 id="corresponding-css-files-are-not-listed-as-top-level-entry-in-manifest-json-file" tabindex="-1">Corresponding CSS files are not listed as top level entry in manifest.json file <a class="header-anchor" href="#corresponding-css-files-are-not-listed-as-top-level-entry-in-manifest-json-file" aria-label="Permalink to &quot;Corresponding CSS files are not listed as top level entry in manifest.json file&quot;">​</a></h3><p>In Vite 4, the corresponding CSS file for a JavaScript entry point was also listed as a top-level entry in the manifest file (<a href="/config/build-options.html#build-manifest"><code>build.manifest</code></a>). These entries were unintentionally added and only worked for simple cases.</p><p>In Vite 5, corresponding CSS files can only be found within the JavaScript entry file section. When injecting the JS file, the corresponding CSS files <a href="/guide/backend-integration.html#:~:text=&lt;!-- if production --&gt;
&lt;link rel%3D&quot;stylesheet&quot; href%3D&quot;/assets/{{ manifest[&#39;main.js&#39;].css }}&quot; /&gt;
&lt;script type%3D&quot;module&quot; src%3D&quot;/assets/{{ manifest[&#39;main.js&#39;].file }}&quot;&gt;&lt;/script&gt;">should be injected</a>. When the CSS should be injected separately, it must be added as a separate entry point.</p><h3 id="cli-shortcuts-require-an-additional-enter-press" tabindex="-1">CLI shortcuts require an additional <code>Enter</code> press <a class="header-anchor" href="#cli-shortcuts-require-an-additional-enter-press" aria-label="Permalink to &quot;CLI shortcuts require an additional \`Enter\` press&quot;">​</a></h3><p>CLI shortcuts, like <code>r</code> to restart the dev server, now require an additional <code>Enter</code> press to trigger the shortcut. For example, <code>r + Enter</code> to restart the dev server.</p><p>This change prevents Vite from swallowing and controlling OS-specific shortcuts, allowing better compatibility when combining the Vite dev server with other processes, and avoids the <a href="https://github.com/vitejs/vite/pull/14342" target="_blank" rel="noreferrer">previous caveats</a>.</p><h3 id="update-experimentaldecorators-and-usedefineforclassfields-typescript-behaviour" tabindex="-1">Update <code>experimentalDecorators</code> and <code>useDefineForClassFields</code> TypeScript behaviour <a class="header-anchor" href="#update-experimentaldecorators-and-usedefineforclassfields-typescript-behaviour" aria-label="Permalink to &quot;Update \`experimentalDecorators\` and \`useDefineForClassFields\` TypeScript behaviour&quot;">​</a></h3><p>Vite 5 uses esbuild 0.19 and removes the compatibility layer for esbuild 0.18, which changes how <a href="https://www.typescriptlang.org/tsconfig#experimentalDecorators" target="_blank" rel="noreferrer"><code>experimentalDecorators</code></a> and <a href="https://www.typescriptlang.org/tsconfig#useDefineForClassFields" target="_blank" rel="noreferrer"><code>useDefineForClassFields</code></a> are handled.</p><ul><li><p><strong><code>experimentalDecorators</code> is not enabled by default</strong></p><p>You need to set <code>compilerOptions.experimentalDecorators</code> to <code>true</code> in <code>tsconfig.json</code> to use decorators.</p></li><li><p><strong><code>useDefineForClassFields</code> defaults depend on the TypeScript <code>target</code> value</strong></p><p>If <code>target</code> is not <code>ESNext</code> or <code>ES2022</code> or newer, or if there&#39;s no <code>tsconfig.json</code> file, <code>useDefineForClassFields</code> will default to <code>false</code> which can be problematic with the default <code>esbuild.target</code> value of <code>esnext</code>. It may transpile to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks#browser_compatibility" target="_blank" rel="noreferrer">static initialization blocks</a> which may not be supported in your browser.</p><p>As such, it is recommended to set <code>target</code> to <code>ESNext</code> or <code>ES2022</code> or newer, or set <code>useDefineForClassFields</code> to <code>true</code> explicitly when configuring <code>tsconfig.json</code>.</p></li></ul><div class="language-jsonc vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsonc</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;compilerOptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Set true if you use decorators</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;experimentalDecorators&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Set true if you see parsing errors in your browser</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;useDefineForClassFields&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="remove-https-flag-and-https-true" tabindex="-1">Remove <code>--https</code> flag and <code>https: true</code> <a class="header-anchor" href="#remove-https-flag-and-https-true" aria-label="Permalink to &quot;Remove \`--https\` flag and \`https: true\`&quot;">​</a></h3><p>The <code>--https</code> flag sets <code>server.https: true</code> and <code>preview.https: true</code> internally. This config was meant to be used together with the automatic https certification generation feature which <a href="https://v3.vitejs.dev/guide/migration.html#automatic-https-certificate-generation" target="_blank" rel="noreferrer">was dropped in Vite 3</a>. Hence, this config is no longer useful as it will start a Vite HTTPS server without a certificate.</p><p>If you use <a href="https://github.com/vitejs/vite-plugin-basic-ssl" target="_blank" rel="noreferrer"><code>@vitejs/plugin-basic-ssl</code></a> or <a href="https://github.com/liuweiGL/vite-plugin-mkcert" target="_blank" rel="noreferrer"><code>vite-plugin-mkcert</code></a>, they will already set the <code>https</code> config internally, so you can remove <code>--https</code>, <code>server.https: true</code>, and <code>preview.https: true</code> in your setup.</p><h3 id="remove-resolvepackageentry-and-resolvepackagedata-apis" tabindex="-1">Remove <code>resolvePackageEntry</code> and <code>resolvePackageData</code> APIs <a class="header-anchor" href="#remove-resolvepackageentry-and-resolvepackagedata-apis" aria-label="Permalink to &quot;Remove \`resolvePackageEntry\` and \`resolvePackageData\` APIs&quot;">​</a></h3><p>The <code>resolvePackageEntry</code> and <code>resolvePackageData</code> APIs are removed as they exposed Vite&#39;s internals and blocked potential Vite 4.3 optimizations in the past. These APIs can be replaced with third-party packages, for example:</p><ul><li><code>resolvePackageEntry</code>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import%2Emeta/resolve" target="_blank" rel="noreferrer"><code>import.meta.resolve</code></a> or the <a href="https://github.com/wooorm/import-meta-resolve" target="_blank" rel="noreferrer"><code>import-meta-resolve</code></a> package.</li><li><code>resolvePackageData</code>: Same as above, and crawl up the package directory to get the root <code>package.json</code>. Or use the community <a href="https://github.com/svitejs/vitefu" target="_blank" rel="noreferrer"><code>vitefu</code></a> package.</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { resolve } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;import-meta-env&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { findDepPkgJsonPath } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitefu&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;node:fs&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pkg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;my-lib&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> basedir</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> process.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cwd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// \`resolvePackageEntry\`:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> packageEntry</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pkg, basedir)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// \`resolvePackageData\`:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> packageJsonPath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> findDepPkgJsonPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pkg, basedir)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> packageJson</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readFileSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(packageJsonPath, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><h2 id="removed-deprecated-apis" tabindex="-1">Removed Deprecated APIs <a class="header-anchor" href="#removed-deprecated-apis" aria-label="Permalink to &quot;Removed Deprecated APIs&quot;">​</a></h2><ul><li>Default exports of CSS files (e.g <code>import style from &#39;./foo.css&#39;</code>): Use the <code>?inline</code> query instead</li><li><code>import.meta.globEager</code>: Use <code>import.meta.glob(&#39;*&#39;, { eager: true })</code> instead</li><li><code>ssr.format: &#39;cjs&#39;</code> and <code>legacy.buildSsrCjsExternalHeuristics</code> (<a href="https://github.com/vitejs/vite/discussions/13816" target="_blank" rel="noreferrer">#13816</a>)</li><li><code>server.middlewareMode: &#39;ssr&#39;</code> and <code>server.middlewareMode: &#39;html&#39;</code>: Use <a href="/config/shared-options.html#apptype"><code>appType</code></a> + <a href="/config/server-options.html#server-middlewaremode"><code>server.middlewareMode: true</code></a> instead (<a href="https://github.com/vitejs/vite/pull/8452" target="_blank" rel="noreferrer">#8452</a>)</li></ul><h2 id="advanced" tabindex="-1">Advanced <a class="header-anchor" href="#advanced" aria-label="Permalink to &quot;Advanced&quot;">​</a></h2><p>There are some changes which only affect plugin/tool creators.</p><ul><li><a href="https://github.com/vitejs/vite/pull/14119" target="_blank" rel="noreferrer">[#14119] refactor!: merge <code>PreviewServerForHook</code> into <code>PreviewServer</code> type</a><ul><li>The <code>configurePreviewServer</code> hook now accepts the <code>PreviewServer</code> type instead of <code>PreviewServerForHook</code> type.</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/14818" target="_blank" rel="noreferrer">[#14818] refactor(preview)!: use base middleware</a><ul><li>Middlewares added from the returned function in <code>configurePreviewServer</code> now does not have access to the <code>base</code> when comparing the <code>req.url</code> value. This aligns the behaviour with the dev server. You can check the <code>base</code> from the <code>configResolved</code> hook if needed.</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/14834" target="_blank" rel="noreferrer">[#14834] fix(types)!: expose httpServer with Http2SecureServer union</a><ul><li><code>http.Server | http2.Http2SecureServer</code> is now used instead of <code>http.Server</code> where appropriate.</li></ul></li></ul><p>Also there are other breaking changes which only affect few users.</p><ul><li><a href="https://github.com/vitejs/vite/pull/14098" target="_blank" rel="noreferrer">[#14098] fix!: avoid rewriting this (reverts #5312)</a><ul><li>Top level <code>this</code> was rewritten to <code>globalThis</code> by default when building. This behavior is now removed.</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/14231" target="_blank" rel="noreferrer">[#14231] feat!: add extension to internal virtual modules</a><ul><li>Internal virtual modules&#39; id now has an extension (<code>.js</code>).</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/14583" target="_blank" rel="noreferrer">[#14583] refactor!: remove exporting internal APIs</a><ul><li>Removed accidentally exported internal APIs: <code>isDepsOptimizerEnabled</code> and <code>getDepOptimizationConfig</code></li><li>Removed exported internal types: <code>DepOptimizationResult</code>, <code>DepOptimizationProcessing</code>, and <code>DepsOptimizer</code></li><li>Renamed <code>ResolveWorkerOptions</code> type to <code>ResolvedWorkerOptions</code></li></ul></li><li><a href="https://github.com/vitejs/vite/pull/5657" target="_blank" rel="noreferrer">[#5657] fix: return 404 for resources requests outside the base path</a><ul><li>In the past, Vite responded to requests outside the base path without <code>Accept: text/html</code>, as if they were requested with the base path. Vite no longer does that and responds with 404 instead.</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/14723" target="_blank" rel="noreferrer">[#14723] fix(resolve)!: remove special .mjs handling</a><ul><li>In the past, when a library <code>&quot;exports&quot;</code> field maps to an <code>.mjs</code> file, Vite will still try to match the <code>&quot;browser&quot;</code> and <code>&quot;module&quot;</code> fields to fix compatibility with certain libraries. This behavior is now removed to align with the exports resolution algorithm.</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/14733" target="_blank" rel="noreferrer">[#14733] feat(resolve)!: remove <code>resolve.browserField</code></a><ul><li><code>resolve.browserField</code> has been deprecated since Vite 3 in favour of an updated default of <code>[&#39;browser&#39;, &#39;module&#39;, &#39;jsnext:main&#39;, &#39;jsnext&#39;]</code> for <a href="/config/shared-options.html#resolve-mainfields"><code>resolve.mainFields</code></a>.</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/14855" target="_blank" rel="noreferrer">[#14855] feat!: add isPreview to ConfigEnv and resolveConfig</a><ul><li>Renamed <code>ssrBuild</code> to <code>isSsrBuild</code> in the <code>ConfigEnv</code> object.</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/14945" target="_blank" rel="noreferrer">[#14945] fix(css): correctly set manifest source name and emit CSS file</a><ul><li>CSS file names are now generated based on the chunk name.</li></ul></li></ul><h2 id="migration-from-v3" tabindex="-1">Migration from v3 <a class="header-anchor" href="#migration-from-v3" aria-label="Permalink to &quot;Migration from v3&quot;">​</a></h2><p>Check the <a href="https://v4.vitejs.dev/guide/migration.html" target="_blank" rel="noreferrer">Migration from v3 Guide</a> in the Vite v4 docs first to see the needed changes to port your app to Vite v4, and then proceed with the changes on this page.</p>`,70),n=[o];function r(l,d,h,p,c,u){return i(),s("div",null,n)}const f=e(a,[["render",r]]);export{g as __pageData,f as default};