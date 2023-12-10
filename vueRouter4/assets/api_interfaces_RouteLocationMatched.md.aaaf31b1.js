import{_ as e,o,c as a,S as r}from"./chunks/framework.538c82e7.js";const f=JSON.parse('{"title":"Interface: RouteLocationMatched","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/interfaces/RouteLocationMatched.md","filePath":"api/interfaces/RouteLocationMatched.md"}'),t={name:"api/interfaces/RouteLocationMatched.md"},d=r('<p><a href="./../">API Documentation</a> / RouteLocationMatched</p><h1 id="Interface-RouteLocationMatched" tabindex="-1">Interface: RouteLocationMatched <a class="header-anchor" href="#Interface-RouteLocationMatched" aria-label="Permalink to &quot;Interface: RouteLocationMatched&quot;">​</a></h1><p>Normalized version of a <a href="./../#RouteRecord">route record</a>.</p><h2 id="Hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#Hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><a href="./RouteRecordNormalized.html"><code>RouteRecordNormalized</code></a></p><p>↳ <strong><code>RouteLocationMatched</code></strong></p></li></ul><h2 id="Properties" tabindex="-1">Properties <a class="header-anchor" href="#Properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="aliasOf" tabindex="-1">aliasOf <a class="header-anchor" href="#aliasOf" aria-label="Permalink to &quot;aliasOf&quot;">​</a></h3><p>• <strong>aliasOf</strong>: <code>undefined</code> | <a href="./RouteRecordNormalized.html"><code>RouteRecordNormalized</code></a></p><p>Defines if this record is the alias of another one. This property is <code>undefined</code> if the record is the original one.</p><h4 id="Inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteRecordNormalized.html">RouteRecordNormalized</a>.<a href="./RouteRecordNormalized.html#aliasOf">aliasOf</a></p><hr><h3 id="beforeEnter" tabindex="-1">beforeEnter <a class="header-anchor" href="#beforeEnter" aria-label="Permalink to &quot;beforeEnter&quot;">​</a></h3><p>• <strong>beforeEnter</strong>: <code>undefined</code> | <a href="./NavigationGuardWithThis.html"><code>NavigationGuardWithThis</code></a>&lt;<code>undefined</code>&gt; | <a href="./NavigationGuardWithThis.html"><code>NavigationGuardWithThis</code></a>&lt;<code>undefined</code>&gt;[]</p><p>Registered beforeEnter guards</p><h4 id="Inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-1" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteRecordNormalized.html">RouteRecordNormalized</a>.<a href="./RouteRecordNormalized.html#beforeEnter">beforeEnter</a></p><hr><h3 id="children" tabindex="-1">children <a class="header-anchor" href="#children" aria-label="Permalink to &quot;children&quot;">​</a></h3><p>• <strong>children</strong>: <a href="./../#RouteRecordRaw"><code>RouteRecordRaw</code></a>[]</p><p>Nested route records.</p><h4 id="Inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-2" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteRecordNormalized.html">RouteRecordNormalized</a>.<a href="./RouteRecordNormalized.html#children">children</a></p><hr><h3 id="components" tabindex="-1">components <a class="header-anchor" href="#components" aria-label="Permalink to &quot;components&quot;">​</a></h3><p>• <strong>components</strong>: <code>undefined</code> | <code>null</code> | <code>Record</code>&lt;<code>string</code>, <a href="./../#RouteComponent"><code>RouteComponent</code></a>&gt;</p><p>Components to display when the URL matches this route. Allow using named views.</p><h4 id="Overrides" tabindex="-1">Overrides <a class="header-anchor" href="#Overrides" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./RouteRecordNormalized.html">RouteRecordNormalized</a>.<a href="./RouteRecordNormalized.html#components">components</a></p><hr><h3 id="instances" tabindex="-1">instances <a class="header-anchor" href="#instances" aria-label="Permalink to &quot;instances&quot;">​</a></h3><p>• <strong>instances</strong>: <code>Record</code>&lt;<code>string</code>, <code>undefined</code> | <code>null</code> | <code>ComponentPublicInstance</code>&gt;</p><p>Mounted route component instances Having the instances on the record mean beforeRouteUpdate and beforeRouteLeave guards can only be invoked with the latest mounted app instance if there are multiple application instances rendering the same view, basically duplicating the content on the page, which shouldn&#39;t happen in practice. It will work if multiple apps are rendering different named views.</p><h4 id="Inherited-from-3" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-3" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteRecordNormalized.html">RouteRecordNormalized</a>.<a href="./RouteRecordNormalized.html#instances">instances</a></p><hr><h3 id="meta" tabindex="-1">meta <a class="header-anchor" href="#meta" aria-label="Permalink to &quot;meta&quot;">​</a></h3><p>• <strong>meta</strong>: <a href="./RouteMeta.html"><code>RouteMeta</code></a></p><p>Arbitrary data attached to the record.</p><h4 id="Inherited-from-4" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-4" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteRecordNormalized.html">RouteRecordNormalized</a>.<a href="./RouteRecordNormalized.html#meta">meta</a></p><hr><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><p>• <strong>name</strong>: <code>undefined</code> | <a href="./../#RouteRecordName"><code>RouteRecordName</code></a></p><p>Name for the route record. Must be unique.</p><h4 id="Inherited-from-5" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-5" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteRecordNormalized.html">RouteRecordNormalized</a>.<a href="./RouteRecordNormalized.html#name">name</a></p><hr><h3 id="path" tabindex="-1">path <a class="header-anchor" href="#path" aria-label="Permalink to &quot;path&quot;">​</a></h3><p>• <strong>path</strong>: <code>string</code></p><p>Path of the record. Should start with <code>/</code> unless the record is the child of another record.</p><h4 id="Inherited-from-6" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-6" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteRecordNormalized.html">RouteRecordNormalized</a>.<a href="./RouteRecordNormalized.html#path">path</a></p><hr><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h3><p>• <strong>props</strong>: <code>Record</code>&lt;<code>string</code>, <code>_RouteRecordProps</code>&gt;</p><p>Allow passing down params as props to the component rendered by <code>router-view</code>. Should be an object with the same keys as <code>components</code> or a boolean to be applied to every component.</p><h4 id="Inherited-from-7" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-7" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteRecordNormalized.html">RouteRecordNormalized</a>.<a href="./RouteRecordNormalized.html#props">props</a></p><hr><h3 id="redirect" tabindex="-1">redirect <a class="header-anchor" href="#redirect" aria-label="Permalink to &quot;redirect&quot;">​</a></h3><p>• <strong>redirect</strong>: <code>undefined</code> | <code>RouteRecordRedirectOption</code></p><p>Where to redirect if the route is directly matched. The redirection happens before any navigation guard and triggers a new navigation with the new target location.</p><h4 id="Inherited-from-8" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-8" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteRecordNormalized.html">RouteRecordNormalized</a>.<a href="./RouteRecordNormalized.html#redirect">redirect</a></p>',65),i=[d];function n(h,c,l,s,m,u){return o(),a("div",null,i)}const R=e(t,[["render",n]]);export{f as __pageData,R as default};
