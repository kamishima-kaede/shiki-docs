import{_ as e,o as t,c as r,U as a,a8 as o,a9 as i}from"./chunks/framework.njmvNCfc.js";const b=JSON.parse('{"title":"Vite 4.0 is out!","description":"","frontmatter":{"title":"Vite 4.0 is out!","author":{"name":"The Vite Team"},"date":"2022-12-09T00:00:00.000Z","sidebar":false,"head":[["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:title","content":"Announcing Vite 4"}],["meta",{"property":"og:image","content":"https://vitejs.dev/og-image-announcing-vite4.png"}],["meta",{"property":"og:url","content":"https://vitejs.dev/blog/announcing-vite4"}],["meta",{"property":"og:description","content":"Vite 4 Release Announcement"}],["meta",{"name":"twitter:card","content":"summary_large_image"}]]},"headers":[],"relativePath":"blog/announcing-vite4.md","filePath":"blog/announcing-vite4.md"}'),s={name:"blog/announcing-vite4.md"},n=a('<h1 id="vite-4-0-is-out" tabindex="-1">Vite 4.0 is out! <a class="header-anchor" href="#vite-4-0-is-out" aria-label="Permalink to &quot;Vite 4.0 is out!&quot;">​</a></h1><p><em>December 9, 2022</em> - Check out the <a href="./announcing-vite5.html">Vite 5.0 announcement</a></p><p>Vite 3 <a href="./announcing-vite3.html">was released</a> five months ago. npm downloads per week have gone from 1 million to 2.5 million since then. The ecosystem has matured too, and continues to grow. In this year&#39;s <a href="https://twitter.com/vite_js/status/1589665610119585793" target="_blank" rel="noreferrer">Jamstack Conf survey</a>, usage among the community jumped from 14% to 32% while keeping a high 9.7 satisfaction score. We saw the stable releases of <a href="https://astro.build/" target="_blank" rel="noreferrer">Astro 1.0</a>, <a href="https://v3.nuxtjs.org/" target="_blank" rel="noreferrer">Nuxt 3</a>, and other Vite-powered frameworks that are innovating and collaborating: <a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a>, <a href="https://www.solidjs.com/blog/introducing-solidstart" target="_blank" rel="noreferrer">Solid Start</a>, <a href="https://qwik.builder.io/qwikcity/overview/" target="_blank" rel="noreferrer">Qwik City</a>. Storybook announced first-class support for Vite as one of its main features for <a href="https://storybook.js.org/blog/first-class-vite-support-in-storybook/" target="_blank" rel="noreferrer">Storybook 7.0</a>. Deno now <a href="https://www.youtube.com/watch?v=Zjojo9wdvmY" target="_blank" rel="noreferrer">supports Vite</a>. <a href="https://vitest.dev" target="_blank" rel="noreferrer">Vitest</a> adoption is exploding, it will soon represent half of Vite&#39;s npm downloads. Nx is also investing in the ecosystem, and <a href="https://nx.dev/packages/vite" target="_blank" rel="noreferrer">officially supports Vite</a>.</p><p><a href="https://viteconf.org/2022/replay" target="_blank" rel="noreferrer"><img src="'+o+'" alt="Vite 4 Ecosystem"></a></p><p>As a showcase of the growth Vite and related projects have experienced, the Vite ecosystem gathered on October 11th at <a href="https://viteconf.org/2022/replay" target="_blank" rel="noreferrer">ViteConf 2022</a>. We saw representatives from the main web framework and tools tell stories of innovation and collaboration. And in a symbolic move, the Rollup team choose that exact day to release <a href="https://rollupjs.org" target="_blank" rel="noreferrer">Rollup 3</a>.</p><p>Today, the Vite <a href="https://vitejs.dev/team" target="_blank" rel="noreferrer">team</a> with the help of our ecosystem partners, is happy to announce the release of Vite 4, powered during build time by Rollup 3. We&#39;ve worked with the ecosystem to ensure a smooth upgrade path for this new major. Vite is now using <a href="https://github.com/vitejs/vite/issues/9870" target="_blank" rel="noreferrer">Rollup 3</a>, which allowed us to simplify Vite&#39;s internal asset handling and has many improvements. See the <a href="https://github.com/rollup/rollup/releases/tag/v3.0.0" target="_blank" rel="noreferrer">Rollup 3 release notes here</a>.</p><p><img src="'+i+'" alt="Vite 4 Announcement Cover Image"></p><p>Quick links:</p><ul><li><a href="/">Docs</a></li><li><a href="https://v4.vitejs.dev/guide/migration.html" target="_blank" rel="noreferrer">Migration Guide</a></li><li><a href="https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md#400-2022-12-09" target="_blank" rel="noreferrer">Changelog</a></li></ul><p>Docs in other languages:</p><ul><li><a href="https://cn.vitejs.dev/" target="_blank" rel="noreferrer">简体中文</a></li><li><a href="https://ja.vitejs.dev/" target="_blank" rel="noreferrer">日本語</a></li><li><a href="https://es.vitejs.dev/" target="_blank" rel="noreferrer">Español</a></li></ul><p>If you recently started using Vite, we suggest reading the <a href="https://vitejs.dev/guide/why.html" target="_blank" rel="noreferrer">Why Vite Guide</a> and checking out <a href="https://vitejs.dev/guide/" target="_blank" rel="noreferrer">the Getting Started</a> and <a href="https://vitejs.dev/guide/features" target="_blank" rel="noreferrer">Features guide</a>. If you want to get involved, contributions are welcome at <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">GitHub</a>. Almost <a href="https://github.com/vitejs/vite/graphs/contributors" target="_blank" rel="noreferrer">700 collaborators</a> have contributed to Vite. Follow the updates on <a href="https://twitter.com/vite_js" target="_blank" rel="noreferrer">Twitter</a> and <a href="https://webtoo.ls/@vite" target="_blank" rel="noreferrer">Mastodon</a>, or join collaborate with others on our <a href="http://chat.vitejs.dev/" target="_blank" rel="noreferrer">Discord community</a>.</p><h2 id="start-playing-with-vite-4" tabindex="-1">Start playing with Vite 4 <a class="header-anchor" href="#start-playing-with-vite-4" aria-label="Permalink to &quot;Start playing with Vite 4&quot;">​</a></h2><p>Use <code>pnpm create vite</code> to scaffold a Vite project with your preferred framework, or open a started template online to play with Vite 4 using <a href="https://vite.new" target="_blank" rel="noreferrer">vite.new</a>.</p><p>You can also run <code>pnpm create vite-extra</code> to get access to templates from other frameworks and runtimes (Solid, Deno, SSR, and library starters). <code>create vite-extra</code> templates are also available when you run <code>create vite</code> under the <code>Others</code> option.</p><p>Note that Vite starter templates are intended to be used as a playground to test Vite with different frameworks. When building your next project, we recommend reaching out to the starters recommended by each framework. Some frameworks now redirect in <code>create vite</code> to their starters too (<code>create-vue</code> and <code>Nuxt 3</code> for Vue, and <code>SvelteKit</code> for Svelte).</p><h2 id="new-react-plugin-using-swc-during-development" tabindex="-1">New React plugin using SWC during development <a class="header-anchor" href="#new-react-plugin-using-swc-during-development" aria-label="Permalink to &quot;New React plugin using SWC during development&quot;">​</a></h2><p><a href="https://swc.rs/" target="_blank" rel="noreferrer">SWC</a> is now a mature replacement for <a href="https://babeljs.io/" target="_blank" rel="noreferrer">Babel</a>, especially in the context of React projects. SWC&#39;s React Fast Refresh implementation is a lot faster than Babel, and for some projects, it is now a better alternative. From Vite 4, two plugins are available for React projects with different tradeoffs. We believe that both approaches are worth supporting at this point, and we&#39;ll continue to explore improvements to both plugins in the future.</p><h3 id="vitejs-plugin-react" tabindex="-1">@vitejs/plugin-react <a class="header-anchor" href="#vitejs-plugin-react" aria-label="Permalink to &quot;@vitejs/plugin-react&quot;">​</a></h3><p><a href="https://github.com/vitejs/vite-plugin-react" target="_blank" rel="noreferrer">@vitejs/plugin-react</a> is a plugin that uses esbuild and Babel, achieving fast HMR with a small package footprint and the flexibility of being able to use the Babel transform pipeline.</p><h3 id="vitejs-plugin-react-swc-new" tabindex="-1">@vitejs/plugin-react-swc (new) <a class="header-anchor" href="#vitejs-plugin-react-swc-new" aria-label="Permalink to &quot;@vitejs/plugin-react-swc (new)&quot;">​</a></h3><p><a href="https://github.com/vitejs/vite-plugin-react-swc" target="_blank" rel="noreferrer">@vitejs/plugin-react-swc</a> is a new plugin that uses esbuild during build, but replaces Babel with SWC during development. For big projects that don&#39;t require non-standard React extensions, cold start and Hot Module Replacement (HMR) can be significantly faster.</p><h2 id="browser-compatibility" tabindex="-1">Browser Compatibility <a class="header-anchor" href="#browser-compatibility" aria-label="Permalink to &quot;Browser Compatibility&quot;">​</a></h2><p>The modern browser build now targets <code>safari14</code> by default for wider ES2020 compatibility. This means that modern builds can now use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt" target="_blank" rel="noreferrer"><code>BigInt</code></a> and that the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing" target="_blank" rel="noreferrer">nullish coalescing operator</a> isn&#39;t transpiled anymore. If you need to support older browsers, you can add <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noreferrer"><code>@vitejs/plugin-legacy</code></a> as usual.</p><h2 id="importing-css-as-a-string" tabindex="-1">Importing CSS as a String <a class="header-anchor" href="#importing-css-as-a-string" aria-label="Permalink to &quot;Importing CSS as a String&quot;">​</a></h2><p>In Vite 3, importing the default export of a <code>.css</code> file could introduce a double loading of CSS.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cssString </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./global.css&#39;</span></span></code></pre></div><p>This double loading could occur since a <code>.css</code> file will be emitted and it&#39;s likely that the CSS string will also be used by the application code — for example, injected by the framework runtime. From Vite 4, the <code>.css</code> default export <a href="https://github.com/vitejs/vite/issues/11094" target="_blank" rel="noreferrer">has been deprecated</a>. The <code>?inline</code> query suffix modifier needs to be used in this case, as that doesn&#39;t emit the imported <code>.css</code> styles.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stuff </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./global.css?inline&#39;</span></span></code></pre></div><p>Learn more in the <a href="https://v4.vitejs.dev/guide/migration.html" target="_blank" rel="noreferrer">Migration Guide</a>.</p><h2 id="environment-variables" tabindex="-1">Environment Variables <a class="header-anchor" href="#environment-variables" aria-label="Permalink to &quot;Environment Variables&quot;">​</a></h2><p>Vite now uses <code>dotenv</code> 16 and <code>dotenv-expand</code> 9 (previously <code>dotenv</code> 14 and <code>dotenv-expand</code> 5). If you have a value including <code>#</code> or <code>`</code>, you will need to wrap them with quotes.</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">-VITE_APP=ab#cd`ef</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+VITE_APP=&quot;ab#cd`ef&quot;</span></span></code></pre></div><p>For more details, see the <a href="https://github.com/motdotla/dotenv/blob/master/CHANGELOG.md" target="_blank" rel="noreferrer"><code>dotenv</code></a> and <a href="https://github.com/motdotla/dotenv-expand/blob/master/CHANGELOG.md" target="_blank" rel="noreferrer"><code>dotenv-expand</code> changelog</a>.</p><h2 id="other-features" tabindex="-1">Other Features <a class="header-anchor" href="#other-features" aria-label="Permalink to &quot;Other Features&quot;">​</a></h2><ul><li>CLI Shortcuts (press <code>h</code> during dev to see them all) (<a href="https://github.com/vitejs/vite/pull/11228" target="_blank" rel="noreferrer">#11228</a>)</li><li>Support for patch-package when pre bundling dependencies (<a href="https://github.com/vitejs/vite/issues/10286" target="_blank" rel="noreferrer">#10286</a>)</li><li>Cleaner build logs output (<a href="https://github.com/vitejs/vite/issues/10895" target="_blank" rel="noreferrer">#10895</a>) and switch to <code>kB</code> to align with browser dev tools (<a href="https://github.com/vitejs/vite/issues/10982" target="_blank" rel="noreferrer">#10982</a>)</li><li>Improved error messages during SSR (<a href="https://github.com/vitejs/vite/issues/11156" target="_blank" rel="noreferrer">#11156</a>)</li></ul><h2 id="reduced-package-size" tabindex="-1">Reduced Package Size <a class="header-anchor" href="#reduced-package-size" aria-label="Permalink to &quot;Reduced Package Size&quot;">​</a></h2><p>Vite cares about its footprint, to speed up installation, especially in the use case of playgrounds for documentation and reproductions. And once more, this major brings improvements in Vite&#39;s package size. Vite 4 install size is 23% smaller compared to vite 3.2.5 (14.1 MB vs 18.3 MB).</p><h2 id="upgrades-to-vite-core" tabindex="-1">Upgrades to Vite Core <a class="header-anchor" href="#upgrades-to-vite-core" aria-label="Permalink to &quot;Upgrades to Vite Core&quot;">​</a></h2><p><a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">Vite Core</a> and <a href="https://github.com/vitejs/vite-ecosystem-ci" target="_blank" rel="noreferrer">vite-ecosystem-ci</a> continue to evolve to provide a better experience to maintainers and collaborators and to ensure that Vite development scales to cope with the growth in the ecosystem.</p><h3 id="framework-plugins-out-of-core" tabindex="-1">Framework plugins out of core <a class="header-anchor" href="#framework-plugins-out-of-core" aria-label="Permalink to &quot;Framework plugins out of core&quot;">​</a></h3><p><a href="https://github.com/vitejs/vite-plugin-vue" target="_blank" rel="noreferrer"><code>@vitejs/plugin-vue</code></a> and <a href="https://github.com/vitejs/vite-plugin-react" target="_blank" rel="noreferrer"><code>@vitejs/plugin-react</code></a> have been part of Vite core monorepo since the first versions of Vite. This helped us to get a close feedback loop when making changes as we were getting both Core and the plugins tested and released together. With <a href="https://github.com/vitejs/vite-ecosystem-ci" target="_blank" rel="noreferrer">vite-ecosystem-ci</a> we can get this feedback with these plugins developed on independent repositories, so from Vite 4, <a href="https://github.com/vitejs/vite/pull/11158" target="_blank" rel="noreferrer">they have been moved out of the Vite core monorepo</a>. This is meaningful for Vite&#39;s framework-agnostic story and will allow us to build independent teams to maintain each of the plugins. If you have bugs to report or features to request, please create issues on the new repositories moving forward: <a href="https://github.com/vitejs/vite-plugin-vue" target="_blank" rel="noreferrer"><code>vitejs/vite-plugin-vue</code></a> and <a href="https://github.com/vitejs/vite-plugin-react" target="_blank" rel="noreferrer"><code>vitejs/vite-plugin-react</code></a>.</p><h3 id="vite-ecosystem-ci-improvements" tabindex="-1">vite-ecosystem-ci improvements <a class="header-anchor" href="#vite-ecosystem-ci-improvements" aria-label="Permalink to &quot;vite-ecosystem-ci improvements&quot;">​</a></h3><p><a href="https://github.com/vitejs/vite-ecosystem-ci" target="_blank" rel="noreferrer">vite-ecosystem-ci</a> extends Vite&#39;s CI by providing on-demand status reports on the state of the CIs of <a href="https://github.com/vitejs/vite-ecosystem-ci/tree/main/tests" target="_blank" rel="noreferrer">most major downstream projects</a>. We run vite-ecosystem-ci three times a week against Vite&#39;s main branch and receive timely reports before introducing a regression. Vite 4 will soon be compatible with most projects using Vite, which already prepared branches with the needed changes and will be releasing them in the next few days. We are also able to run vite-ecosystem-ci on-demand on PRs using <code>/ecosystem-ci run</code> in a comment, allowing us to know <a href="https://github.com/vitejs/vite/pull/11269#issuecomment-1343365064" target="_blank" rel="noreferrer">the effect of changes</a> before they hit main.</p><h2 id="acknowledgments" tabindex="-1">Acknowledgments <a class="header-anchor" href="#acknowledgments" aria-label="Permalink to &quot;Acknowledgments&quot;">​</a></h2><p>Vite 4 wouldn&#39;t be possible without uncountable hours of work by Vite contributors, many of them maintainers of downstream projects and plugins, and the efforts of the <a href="/team.html">Vite Team</a>. All of us have worked together to improve Vite&#39;s DX once more, for every framework and app using it. We&#39;re grateful to be able to improve a common base for such a vibrant ecosystem.</p><p>We&#39;re also thankful to individuals and companies sponsoring the Vite team, and companies investing directly in Vite&#39;s future: <a href="https://twitter.com/antfu7" target="_blank" rel="noreferrer">@antfu7</a>&#39;s work on Vite and the ecosystem is part of his job at <a href="https://nuxtlabs.com/" target="_blank" rel="noreferrer">Nuxt Labs</a>, <a href="https://astro.build" target="_blank" rel="noreferrer">Astro</a> is funding <a href="https://twitter.com/bluwyoo" target="_blank" rel="noreferrer">@bluwyoo</a>&#39;s&#39; Vite core work, and <a href="https://stackblitz.com/" target="_blank" rel="noreferrer">StackBlitz</a> hires <a href="https://twitter.com/patak_dev" target="_blank" rel="noreferrer">@patak_dev</a> to work full time on Vite.</p><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>Our immediate focus would be on triaging newly opened issues to avoid disruption by possible regressions. If you would like to get involved and help us improve Vite, we suggest starting with issues triaging. Join <a href="https://chat.vitejs.dev" target="_blank" rel="noreferrer">our Discord</a> and reach out on the <code>#contributing</code> channel. Polish our <code>#docs</code> story, and <code>#help</code> others. We need to continue to build a helpful and welcoming community for the next wave of users, as Vite&#39;s adoption continues to grow.</p><p>There are a lot of open fronts to keep improving the DX of everyone that has chosen Vite to power their frameworks and develop their apps. Onwards!</p>',50),l=[n];function h(c,d,p,u,g,m){return t(),r("div",null,l)}const v=e(s,[["render",h]]);export{b as __pageData,v as default};
