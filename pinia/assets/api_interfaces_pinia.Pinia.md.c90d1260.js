import{_ as e,o as a,c as t,S as i}from"./chunks/framework.ac4b5791.js";const f=JSON.parse('{"title":"Interface: Pinia","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/interfaces/pinia.Pinia.md","filePath":"api/interfaces/pinia.Pinia.md"}'),r={name:"api/interfaces/pinia.Pinia.md"},o=i('<p><a href="./../">API Documentation</a> / <a href="./../modules/pinia.html">pinia</a> / Pinia</p><h1 id="Interface-Pinia" tabindex="-1">Interface: Pinia <a class="header-anchor" href="#Interface-Pinia" aria-label="Permalink to &quot;Interface: Pinia&quot;">​</a></h1><p><a href="./../modules/pinia.html">pinia</a>.Pinia</p><p>Every application must own its own pinia to be able to create stores</p><h2 id="Hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#Hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><strong><code>Pinia</code></strong></p><p>↳ <a href="./pinia_testing.TestingPinia.html"><code>TestingPinia</code></a></p></li></ul><h2 id="Properties" tabindex="-1">Properties <a class="header-anchor" href="#Properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="install" tabindex="-1">install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;install&quot;">​</a></h3><p>• <strong>install</strong>: (<code>app</code>: <code>App</code>&lt;<code>any</code>&gt;) =&gt; <code>void</code></p><h4 id="Type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#Type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><p>▸ (<code>app</code>): <code>void</code></p><h5 id="Parameters" tabindex="-1">Parameters <a class="header-anchor" href="#Parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>app</code></td><td style="text-align:left;"><code>App</code>&lt;<code>any</code>&gt;</td></tr></tbody></table><h5 id="Returns" tabindex="-1">Returns <a class="header-anchor" href="#Returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><hr><h3 id="state" tabindex="-1">state <a class="header-anchor" href="#state" aria-label="Permalink to &quot;state&quot;">​</a></h3><p>• <strong>state</strong>: <code>Ref</code>&lt;<code>Record</code>&lt;<code>string</code>, <a href="./../modules/pinia.html#StateTree"><code>StateTree</code></a>&gt;&gt;</p><p>root state</p><h2 id="Methods" tabindex="-1">Methods <a class="header-anchor" href="#Methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="use" tabindex="-1">use <a class="header-anchor" href="#use" aria-label="Permalink to &quot;use&quot;">​</a></h3><p>▸ <strong>use</strong>(<code>plugin</code>): <a href="./pinia.Pinia.html"><code>Pinia</code></a></p><p>Adds a store plugin to extend every store</p><h4 id="Parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#Parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>plugin</code></td><td style="text-align:left;"><a href="./pinia.PiniaPlugin.html"><code>PiniaPlugin</code></a></td><td style="text-align:left;">store plugin to add</td></tr></tbody></table><h4 id="Returns-1" tabindex="-1">Returns <a class="header-anchor" href="#Returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./pinia.Pinia.html"><code>Pinia</code></a></p>',27),n=[o];function l(d,s,c,h,p,u){return a(),t("div",null,n)}const m=e(r,[["render",l]]);export{f as __pageData,m as default};
