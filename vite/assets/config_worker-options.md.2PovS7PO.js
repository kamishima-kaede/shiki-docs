import{_ as o,o as r,c as e,R as t}from"./chunks/framework.HYN-VFUH.js";const f=JSON.parse('{"title":"Worker 选项","description":"","frontmatter":{},"headers":[],"relativePath":"config/worker-options.md","filePath":"config/worker-options.md"}'),a={name:"config/worker-options.md"},i=t('<h1 id="worker-options" tabindex="-1">Worker 选项 <a class="header-anchor" href="#worker-options" aria-label="Permalink to &quot;Worker 选项 {#worker-options}&quot;">​</a></h1><p>有关于 Web Worker 的选项。</p><h2 id="worker-format" tabindex="-1">worker.format <a class="header-anchor" href="#worker-format" aria-label="Permalink to &quot;worker.format&quot;">​</a></h2><ul><li><strong>类型：</strong> <code>&#39;es&#39; | &#39;iife&#39;</code></li><li><strong>默认：</strong> <code>&#39;iife&#39;</code></li></ul><p>worker 打包时的输出类型。</p><h2 id="worker-plugins" tabindex="-1">worker.plugins <a class="header-anchor" href="#worker-plugins" aria-label="Permalink to &quot;worker.plugins&quot;">​</a></h2><ul><li><strong>类型：</strong> <a href="./shared-options.html#plugins"><code>() =&gt; (Plugin | Plugin[])[]</code></a></li></ul><p>应用于 worker 打包的 Vite 插件。注意 <a href="./shared-options.html#plugins">config.plugins</a> 仅会在开发（dev）阶段应用于 worker，若要配置在构建（build）阶段应用于 worker 的插件则应该在本选项这里配置。 该函数应返回新的插件实例，因为它们在并行的 rollup worker 构建中使用。因此，在 <code>config</code> 钩子中修改 <code>config.worker</code> 选项将被忽略。</p><h2 id="worker-rollupoptions" tabindex="-1">worker.rollupOptions <a class="header-anchor" href="#worker-rollupoptions" aria-label="Permalink to &quot;worker.rollupOptions&quot;">​</a></h2><ul><li><strong>类型：</strong> <a href="https://rollupjs.org/configuration-options/" target="_blank" rel="noreferrer"><code>RollupOptions</code></a></li></ul><p>用于打包 worker 的 Rollup 配置项。</p>',11),n=[i];function l(s,p,c,d,u,k){return r(),e("div",null,n)}const g=o(a,[["render",l]]);export{f as __pageData,g as default};
