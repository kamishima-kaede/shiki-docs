import{_ as e,o as t,c as i,U as a}from"./chunks/framework.njmvNCfc.js";const k=JSON.parse('{"title":"Troubleshooting","description":"","frontmatter":{},"headers":[],"relativePath":"guide/troubleshooting.md","filePath":"guide/troubleshooting.md"}'),o={name:"guide/troubleshooting.md"},s=a(`<h1 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h1><p>See <a href="https://rollupjs.org/troubleshooting/" target="_blank" rel="noreferrer">Rollup&#39;s troubleshooting guide</a> for more information too.</p><p>If the suggestions here don&#39;t work, please try posting questions on <a href="https://github.com/vitejs/vite/discussions" target="_blank" rel="noreferrer">GitHub Discussions</a> or in the <code>#help</code> channel of <a href="https://chat.vitejs.dev" target="_blank" rel="noreferrer">Vite Land Discord</a>.</p><h2 id="cjs" tabindex="-1">CJS <a class="header-anchor" href="#cjs" aria-label="Permalink to &quot;CJS&quot;">​</a></h2><h3 id="vite-cjs-node-api-deprecated" tabindex="-1">Vite CJS Node API deprecated <a class="header-anchor" href="#vite-cjs-node-api-deprecated" aria-label="Permalink to &quot;Vite CJS Node API deprecated&quot;">​</a></h3><p>The CJS build of Vite&#39;s Node API is deprecated and will be removed in Vite 6. See the <a href="https://github.com/vitejs/vite/discussions/13928" target="_blank" rel="noreferrer">GitHub discussion</a> for more context. You should update your files or frameworks to import the ESM build of Vite instead.</p><p>In a basic Vite project, make sure:</p><ol><li>The <code>vite.config.js</code> file content is using the ESM syntax.</li><li>The closest <code>package.json</code> file has <code>&quot;type&quot;: &quot;module&quot;</code>, or use the <code>.mjs</code>/<code>.mts</code> extension, e.g. <code>vite.config.mjs</code> or <code>vite.config.mts</code>.</li></ol><p>For other projects, there are a few general approaches:</p><ul><li><strong>Configure ESM as default, opt-in to CJS if needed:</strong> Add <code>&quot;type&quot;: &quot;module&quot;</code> in the project <code>package.json</code>. All <code>*.js</code> files are now interpreted as ESM and needs to use the ESM syntax. You can rename a file with the <code>.cjs</code> extension to keep using CJS instead.</li><li><strong>Keep CJS as default, opt-in to ESM if needed:</strong> If the project <code>package.json</code> does not have <code>&quot;type&quot;: &quot;module&quot;</code>, all <code>*.js</code> files are interpreted as CJS. You can rename a file with the <code>.mjs</code> extension to use ESM instead.</li><li><strong>Dynamically import Vite:</strong> If you need to keep using CJS, you can dynamically import Vite using <code>import(&#39;vite&#39;)</code> instead. This requires your code to be written in an <code>async</code> context, but should still be manageable as Vite&#39;s API is mostly asynchronous.</li></ul><p>If you&#39;re unsure where the warning is coming from, you can run your script with the <code>VITE_CJS_TRACE=true</code> flag to log the stack trace:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VITE_CJS_TRACE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> vite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p>If you&#39;d like to temporarily ignore the warning, you can run your script with the <code>VITE_CJS_IGNORE_WARNING=true</code> flag:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VITE_CJS_IGNORE_WARNING</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> vite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p>Note that postcss config files does not support ESM + TypeScript (<code>.mts</code> or <code>.ts</code> in <code>&quot;type&quot;: &quot;module&quot;</code>) yet. If you have postcss configs with <code>.ts</code> and added <code>&quot;type&quot;: &quot;module&quot;</code> to package.json, you&#39;ll also need to rename the postcss config to use <code>.cts</code>.</p><h2 id="cli" tabindex="-1">CLI <a class="header-anchor" href="#cli" aria-label="Permalink to &quot;CLI&quot;">​</a></h2><h3 id="error-cannot-find-module-c-foo-bar-baz-vite-bin-vite-js" tabindex="-1"><code>Error: Cannot find module &#39;C:\\foo\\bar&amp;baz\\vite\\bin\\vite.js&#39;</code> <a class="header-anchor" href="#error-cannot-find-module-c-foo-bar-baz-vite-bin-vite-js" aria-label="Permalink to &quot;\`Error: Cannot find module &#39;C:\\foo\\bar&amp;baz\\vite\\bin\\vite.js&#39;\`&quot;">​</a></h3><p>The path to your project folder may include <code>&amp;</code>, which doesn&#39;t work with <code>npm</code> on Windows (<a href="https://github.com/npm/cmd-shim/issues/45" target="_blank" rel="noreferrer">npm/cmd-shim#45</a>).</p><p>You will need to either:</p><ul><li>Switch to another package manager (e.g. <code>pnpm</code>, <code>yarn</code>)</li><li>Remove <code>&amp;</code> from the path to your project</li></ul><h2 id="config" tabindex="-1">Config <a class="header-anchor" href="#config" aria-label="Permalink to &quot;Config&quot;">​</a></h2><h3 id="this-package-is-esm-only" tabindex="-1">This package is ESM only <a class="header-anchor" href="#this-package-is-esm-only" aria-label="Permalink to &quot;This package is ESM only&quot;">​</a></h3><p>When importing a ESM only package by <code>require</code>, the following error happens.</p><blockquote><p>Failed to resolve &quot;foo&quot;. This package is ESM only but it was tried to load by <code>require</code>.</p></blockquote><blockquote><p>&quot;foo&quot; resolved to an ESM file. ESM file cannot be loaded by <code>require</code>.</p></blockquote><p>ESM files cannot be loaded by <a href="https://nodejs.org/docs/latest-v18.x/api/esm.html#require:~:text=Using%20require%20to%20load%20an%20ES%20module%20is%20not%20supported%20because%20ES%20modules%20have%20asynchronous%20execution.%20Instead%2C%20use%20import()%20to%20load%20an%20ES%20module%20from%20a%20CommonJS%20module." target="_blank" rel="noreferrer"><code>require</code></a>.</p><p>We recommend converting your config to ESM by either:</p><ul><li>adding <code>&quot;type&quot;: &quot;module&quot;</code> to the nearest <code>package.json</code></li><li>renaming <code>vite.config.js</code>/<code>vite.config.ts</code> to <code>vite.config.mjs</code>/<code>vite.config.mts</code></li></ul><h2 id="dev-server" tabindex="-1">Dev Server <a class="header-anchor" href="#dev-server" aria-label="Permalink to &quot;Dev Server&quot;">​</a></h2><h3 id="requests-are-stalled-forever" tabindex="-1">Requests are stalled forever <a class="header-anchor" href="#requests-are-stalled-forever" aria-label="Permalink to &quot;Requests are stalled forever&quot;">​</a></h3><p>If you are using Linux, file descriptor limits and inotify limits may be causing the issue. As Vite does not bundle most of the files, browsers may request many files which require many file descriptors, going over the limit.</p><p>To solve this:</p><ul><li><p>Increase file descriptor limit by <code>ulimit</code></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Check current limit</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ulimit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Sn</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Change limit (temporary)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ulimit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Sn</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10000</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # You might need to change the hard limit too</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Restart your browser</span></span></code></pre></div></li><li><p>Increase the following inotify related limits by <code>sysctl</code></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Check current limits</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sysctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fs.inotify</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Change limits (temporary)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sysctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fs.inotify.max_queued_events=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16384</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sysctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fs.inotify.max_user_instances=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8192</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sysctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fs.inotify.max_user_watches=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">524288</span></span></code></pre></div></li></ul><p>If the above steps don&#39;t work, you can try adding <code>DefaultLimitNOFILE=65536</code> as an un-commented config to the following files:</p><ul><li>/etc/systemd/system.conf</li><li>/etc/systemd/user.conf</li></ul><p>For Ubuntu Linux, you may need to add the line <code>* - nofile 65536</code> to the file <code>/etc/security/limits.conf</code> instead of updating systemd config files.</p><p>Note that these settings persist but a <strong>restart is required</strong>.</p><h3 id="network-requests-stop-loading" tabindex="-1">Network requests stop loading <a class="header-anchor" href="#network-requests-stop-loading" aria-label="Permalink to &quot;Network requests stop loading&quot;">​</a></h3><p>When using a self-signed SSL certificate, Chrome ignores all caching directives and reloads the content. Vite relies on these caching directives.</p><p>To resolve the problem use a trusted SSL cert.</p><p>See: <a href="https://helpx.adobe.com/mt/experience-manager/kb/cache-problems-on-chrome-with-SSL-certificate-errors.html" target="_blank" rel="noreferrer">Cache problems</a>, <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=110649#c8" target="_blank" rel="noreferrer">Chrome issue</a></p><h4 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h4><p>You can install a trusted cert via the CLI with this command:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>security add-trusted-cert -d -r trustRoot -k ~/Library/Keychains/login.keychain-db your-cert.cer</span></span></code></pre></div><p>Or, by importing it into the Keychain Access app and updating the trust of your cert to &quot;Always Trust.&quot;</p><h3 id="_431-request-header-fields-too-large" tabindex="-1">431 Request Header Fields Too Large <a class="header-anchor" href="#_431-request-header-fields-too-large" aria-label="Permalink to &quot;431 Request Header Fields Too Large&quot;">​</a></h3><p>When the server / WebSocket server receives a large HTTP header, the request will be dropped and the following warning will be shown.</p><blockquote><p>Server responded with status code 431. See <a href="https://vitejs.dev/guide/troubleshooting.html#_431-request-header-fields-too-large" target="_blank" rel="noreferrer">https://vitejs.dev/guide/troubleshooting.html#_431-request-header-fields-too-large</a>.</p></blockquote><p>This is because Node.js limits request header size to mitigate <a href="https://www.cve.org/CVERecord?id=CVE-2018-12121" target="_blank" rel="noreferrer">CVE-2018-12121</a>.</p><p>To avoid this, try to reduce your request header size. For example, if the cookie is long, delete it. Or you can use <a href="https://nodejs.org/api/cli.html#--max-http-header-sizesize" target="_blank" rel="noreferrer"><code>--max-http-header-size</code></a> to change max header size.</p><h2 id="hmr" tabindex="-1">HMR <a class="header-anchor" href="#hmr" aria-label="Permalink to &quot;HMR&quot;">​</a></h2><h3 id="vite-detects-a-file-change-but-the-hmr-is-not-working" tabindex="-1">Vite detects a file change but the HMR is not working <a class="header-anchor" href="#vite-detects-a-file-change-but-the-hmr-is-not-working" aria-label="Permalink to &quot;Vite detects a file change but the HMR is not working&quot;">​</a></h3><p>You may be importing a file with a different case. For example, <code>src/foo.js</code> exists and <code>src/bar.js</code> contains:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./Foo.js&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // should be &#39;./foo.js&#39;</span></span></code></pre></div><p>Related issue: <a href="https://github.com/vitejs/vite/issues/964" target="_blank" rel="noreferrer">#964</a></p><h3 id="vite-does-not-detect-a-file-change" tabindex="-1">Vite does not detect a file change <a class="header-anchor" href="#vite-does-not-detect-a-file-change" aria-label="Permalink to &quot;Vite does not detect a file change&quot;">​</a></h3><p>If you are running Vite with WSL2, Vite cannot watch file changes in some conditions. See <a href="/config/server-options.html#server-watch"><code>server.watch</code> option</a>.</p><h3 id="a-full-reload-happens-instead-of-hmr" tabindex="-1">A full reload happens instead of HMR <a class="header-anchor" href="#a-full-reload-happens-instead-of-hmr" aria-label="Permalink to &quot;A full reload happens instead of HMR&quot;">​</a></h3><p>If HMR is not handled by Vite or a plugin, a full reload will happen as it&#39;s the only way to refresh the state.</p><p>If HMR is handled but it is within a circular dependency, a full reload will also happen to recover the execution order. To solve this, try breaking the loop. You can run <code>vite --debug hmr</code> to log the circular dependency path if a file change triggered it.</p><h2 id="build" tabindex="-1">Build <a class="header-anchor" href="#build" aria-label="Permalink to &quot;Build&quot;">​</a></h2><h3 id="built-file-does-not-work-because-of-cors-error" tabindex="-1">Built file does not work because of CORS error <a class="header-anchor" href="#built-file-does-not-work-because-of-cors-error" aria-label="Permalink to &quot;Built file does not work because of CORS error&quot;">​</a></h3><p>If the HTML file output was opened with <code>file</code> protocol, the scripts won&#39;t run with the following error.</p><blockquote><p>Access to script at &#39;file:///foo/bar.js&#39; from origin &#39;null&#39; has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.</p></blockquote><blockquote><p>Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at file:///foo/bar.js. (Reason: CORS request not http).</p></blockquote><p>See <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp" target="_blank" rel="noreferrer">Reason: CORS request not HTTP - HTTP | MDN</a> for more information about why this happens.</p><p>You will need to access the file with <code>http</code> protocol. The easiest way to achieve this is to run <code>npx vite preview</code>.</p><h2 id="optimized-dependencies" tabindex="-1">Optimized Dependencies <a class="header-anchor" href="#optimized-dependencies" aria-label="Permalink to &quot;Optimized Dependencies&quot;">​</a></h2><h3 id="outdated-pre-bundled-deps-when-linking-to-a-local-package" tabindex="-1">Outdated pre-bundled deps when linking to a local package <a class="header-anchor" href="#outdated-pre-bundled-deps-when-linking-to-a-local-package" aria-label="Permalink to &quot;Outdated pre-bundled deps when linking to a local package&quot;">​</a></h3><p>The hash key used to invalidate optimized dependencies depend on the package lock contents, the patches applied to dependencies, and the options in the Vite config file that affects the bundling of node modules. This means that Vite will detect when a dependency is overridden using a feature as <a href="https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides" target="_blank" rel="noreferrer">npm overrides</a>, and re-bundle your dependencies on the next server start. Vite won&#39;t invalidate the dependencies when you use a feature like <a href="https://docs.npmjs.com/cli/v9/commands/npm-link" target="_blank" rel="noreferrer">npm link</a>. In case you link or unlink a dependency, you&#39;ll need to force re-optimization on the next server start by using <code>vite --force</code>. We recommend using overrides instead, which are supported now by every package manager (see also <a href="https://pnpm.io/package_json#pnpmoverrides" target="_blank" rel="noreferrer">pnpm overrides</a> and <a href="https://yarnpkg.com/configuration/manifest/#resolutions" target="_blank" rel="noreferrer">yarn resolutions</a>).</p><h2 id="performance-bottlenecks" tabindex="-1">Performance bottlenecks <a class="header-anchor" href="#performance-bottlenecks" aria-label="Permalink to &quot;Performance bottlenecks&quot;">​</a></h2><p>If you suffer any application performance bottlenecks resulting in slow load times, you can start the built-in Node.js inspector with your Vite dev server or when building your application to create the CPU profile:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-5Yj_T" id="tab-qAjCyX1" checked="checked"><label for="tab-qAjCyX1">dev server</label><input type="radio" name="group-5Yj_T" id="tab-QkJPq5R"><label for="tab-QkJPq5R">build</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vite</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --profile</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --open</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --profile</span></span></code></pre></div></div></div><div class="tip custom-block"><p class="custom-block-title">Vite Dev Server</p><p>Once your application is opened in the browser, just await finish loading it and then go back to the terminal and press <code>p</code> key (will stop the Node.js inspector) then press <code>q</code> key to stop the dev server.</p></div><p>Node.js inspector will generate <code>vite-profile-0.cpuprofile</code> in the root folder, go to <a href="https://www.speedscope.app/" target="_blank" rel="noreferrer">https://www.speedscope.app/</a>, and upload the CPU profile using the <code>BROWSE</code> button to inspect the result.</p><p>You can install <a href="https://github.com/antfu/vite-plugin-inspect" target="_blank" rel="noreferrer">vite-plugin-inspect</a>, which lets you inspect the intermediate state of Vite plugins and can also help you to identify which plugins or middlewares are the bottleneck in your applications. The plugin can be used in both dev and build modes. Check the readme file for more details.</p><h2 id="others" tabindex="-1">Others <a class="header-anchor" href="#others" aria-label="Permalink to &quot;Others&quot;">​</a></h2><h3 id="module-externalized-for-browser-compatibility" tabindex="-1">Module externalized for browser compatibility <a class="header-anchor" href="#module-externalized-for-browser-compatibility" aria-label="Permalink to &quot;Module externalized for browser compatibility&quot;">​</a></h3><p>When you use a Node.js module in the browser, Vite will output the following warning.</p><blockquote><p>Module &quot;fs&quot; has been externalized for browser compatibility. Cannot access &quot;fs.readFile&quot; in client code.</p></blockquote><p>This is because Vite does not automatically polyfill Node.js modules.</p><p>We recommend avoiding Node.js modules for browser code to reduce the bundle size, although you can add polyfills manually. If the module is imported from a third-party library (that&#39;s meant to be used in the browser), it&#39;s advised to report the issue to the respective library.</p><h3 id="syntax-error-type-error-happens" tabindex="-1">Syntax Error / Type Error happens <a class="header-anchor" href="#syntax-error-type-error-happens" aria-label="Permalink to &quot;Syntax Error / Type Error happens&quot;">​</a></h3><p>Vite cannot handle and does not support code that only runs on non-strict mode (sloppy mode). This is because Vite uses ESM and it is always <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode" target="_blank" rel="noreferrer">strict mode</a> inside ESM.</p><p>For example, you might see these errors.</p><blockquote><p>[ERROR] With statements cannot be used with the &quot;esm&quot; output format due to strict mode</p></blockquote><blockquote><p>TypeError: Cannot create property &#39;foo&#39; on boolean &#39;false&#39;</p></blockquote><p>If these code are used inside dependencies, you could use <a href="https://github.com/ds300/patch-package" target="_blank" rel="noreferrer"><code>patch-package</code></a> (or <a href="https://yarnpkg.com/cli/patch" target="_blank" rel="noreferrer"><code>yarn patch</code></a> or <a href="https://pnpm.io/cli/patch" target="_blank" rel="noreferrer"><code>pnpm patch</code></a>) for an escape hatch.</p><h3 id="browser-extensions" tabindex="-1">Browser extensions <a class="header-anchor" href="#browser-extensions" aria-label="Permalink to &quot;Browser extensions&quot;">​</a></h3><p>Some browser extensions (like ad-blockers) may prevent the Vite client from sending requests to the Vite dev server. You may see a white screen without logged errors in this case. Try disabling extensions if you have this issue.</p><h3 id="cross-drive-links-on-windows" tabindex="-1">Cross drive links on Windows <a class="header-anchor" href="#cross-drive-links-on-windows" aria-label="Permalink to &quot;Cross drive links on Windows&quot;">​</a></h3><p>If there&#39;s a cross drive links in your project on Windows, Vite may not work.</p><p>An example of cross drive links are:</p><ul><li>a virtual drive linked to a folder by <code>subst</code> command</li><li>a symlink/junction to a different drive by <code>mklink</code> command (e.g. Yarn global cache)</li></ul><p>Related issue: <a href="https://github.com/vitejs/vite/issues/10802" target="_blank" rel="noreferrer">#10802</a></p>`,95),r=[s];function n(l,d,h,c,p,u){return t(),i("div",null,r)}const f=e(o,[["render",n]]);export{k as __pageData,f as default};
