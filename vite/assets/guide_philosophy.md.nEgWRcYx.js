import{_ as e,o as t,c as a,U as r}from"./chunks/framework.njmvNCfc.js";const f=JSON.parse('{"title":"Project Philosophy","description":"","frontmatter":{},"headers":[],"relativePath":"guide/philosophy.md","filePath":"guide/philosophy.md"}'),o={name:"guide/philosophy.md"},i=r('<h1 id="project-philosophy" tabindex="-1">Project Philosophy <a class="header-anchor" href="#project-philosophy" aria-label="Permalink to &quot;Project Philosophy&quot;">​</a></h1><h2 id="lean-extendable-core" tabindex="-1">Lean Extendable Core <a class="header-anchor" href="#lean-extendable-core" aria-label="Permalink to &quot;Lean Extendable Core&quot;">​</a></h2><p>Vite doesn&#39;t intend to cover every use case for every user. Vite aims to support the most common patterns to build Web apps out-of-the-box, but <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">Vite core</a> must remain lean with a small API surface to keep the project maintainable long-term. This goal is possible thanks to <a href="./api-plugin.html">Vite&#39;s rollup-based plugin system</a>. Features that can be implemented as external plugins will generally not be added to Vite core. <a href="https://vite-pwa-org.netlify.app/" target="_blank" rel="noreferrer">vite-plugin-pwa</a> is a great example of what can be achieved out of Vite core, and there are a lot of <a href="https://github.com/vitejs/awesome-vite#plugins" target="_blank" rel="noreferrer">well maintained plugins</a> to cover your needs. Vite works closely with the Rollup project to ensure that plugins can be used in both plain-rollup and Vite projects as much as possible, trying to push needed extensions to the Plugin API upstream when possible.</p><h2 id="pushing-the-modern-web" tabindex="-1">Pushing the Modern Web <a class="header-anchor" href="#pushing-the-modern-web" aria-label="Permalink to &quot;Pushing the Modern Web&quot;">​</a></h2><p>Vite provides opinionated features that pushes writing modern code. For example:</p><ul><li>The source code can only be written in ESM, where non-ESM dependencies needs to be <a href="./dep-pre-bundling.html">pre-bundled as ESM</a> in order to work.</li><li>Web workers are encouraged to be written with the <a href="./features.html#web-workers"><code>new Worker</code> syntax</a> to follow modern standards.</li><li>Node.js modules cannot be used in the browser.</li></ul><p>When adding new features, these patterns are followed to create a future-proof API, which may not always be compatible with other build tools.</p><h2 id="a-pragmatic-approach-to-performance" tabindex="-1">A Pragmatic Approach to Performance <a class="header-anchor" href="#a-pragmatic-approach-to-performance" aria-label="Permalink to &quot;A Pragmatic Approach to Performance&quot;">​</a></h2><p>Vite has been focused on performance since its <a href="./why.html">origins</a>. Its dev server architecture allows HMR that stays fast as projects scale. Vite uses native tools like <a href="https://esbuild.github.io/" target="_blank" rel="noreferrer">esbuild</a> and <a href="https://github.com/vitejs/vite-plugin-react-swc" target="_blank" rel="noreferrer">SWC</a> to implement intensive tasks but keeps the rest of the code in JS to balance speed with flexibility. When needed, framework plugins will tap into <a href="https://babeljs.io/" target="_blank" rel="noreferrer">Babel</a> to compile user code. And during build time Vite currently uses <a href="https://rollupjs.org/" target="_blank" rel="noreferrer">Rollup</a> where bundling size and having access to a wide ecosystem of plugins are more important than raw speed. Vite will continue to evolve internally, using new libraries as they appear to improve DX while keeping its API stable.</p><h2 id="building-frameworks-on-top-of-vite" tabindex="-1">Building Frameworks on top of Vite <a class="header-anchor" href="#building-frameworks-on-top-of-vite" aria-label="Permalink to &quot;Building Frameworks on top of Vite&quot;">​</a></h2><p>Although Vite can be used by users directly, it shines as a tool to create frameworks. Vite core is framework agnostic, but there are polished plugins for each UI frameworks. Its <a href="./api-javascript.html">JS API</a> allows App Framework authors to use Vite features to create tailored experiences for their users. Vite includes support for <a href="./ssr.html">SSR primitives</a>, usually present in higher-level tools but fundamental to building modern web frameworks. And Vite plugins complete the picture by offering a way to share between frameworks. Vite is also a great fit when paired with <a href="./backend-integration.html">Backend frameworks</a> like <a href="https://vite-ruby.netlify.app/" target="_blank" rel="noreferrer">Ruby</a> and <a href="https://laravel.com/docs/10.x/vite" target="_blank" rel="noreferrer">Laravel</a>.</p><h2 id="an-active-ecosystem" tabindex="-1">An Active Ecosystem <a class="header-anchor" href="#an-active-ecosystem" aria-label="Permalink to &quot;An Active Ecosystem&quot;">​</a></h2><p>Vite evolution is a cooperation between framework and plugin maintainers, users, and the Vite team. We encourage active participation in Vite&#39;s Core development once a project adopts Vite. We work closely with the main projects in the ecosystem to minimize regressions on each release, aided by tools like <a href="https://github.com/vitejs/vite-ecosystem-ci" target="_blank" rel="noreferrer">vite-ecosystem-ci</a>. It allows us to run the CI of major projects using Vite on selected PRs and gives us a clear status of how the Ecosystem would react to a release. We strive to fix regressions before they hit users and allow projects to update to the next versions as soon as they are released. If you are working with Vite, we invite you to join <a href="https://chat.vitejs.dev" target="_blank" rel="noreferrer">Vite&#39;s Discord</a> and get involved in the project too.</p>',13),s=[i];function n(l,h,p,c,d,u){return t(),a("div",null,s)}const b=e(o,[["render",n]]);export{f as __pageData,b as default};
