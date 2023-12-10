import{_ as a,o as e,c as i,S as t}from"./chunks/framework.538c82e7.js";const g=JSON.parse('{"title":"Enumeration: NavigationFailureType","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/enums/NavigationFailureType.md","filePath":"api/enums/NavigationFailureType.md"}'),n={name:"api/enums/NavigationFailureType.md"},o=t('<p><a href="./../">API Documentation</a> / NavigationFailureType</p><h1 id="Enumeration-NavigationFailureType" tabindex="-1">Enumeration: NavigationFailureType <a class="header-anchor" href="#Enumeration-NavigationFailureType" aria-label="Permalink to &quot;Enumeration: NavigationFailureType&quot;">​</a></h1><p>Enumeration with all possible types for navigation failures. Can be passed to <a href="./../#isNavigationFailure">isNavigationFailure</a> to check for specific failures.</p><h2 id="Enumeration-Members" tabindex="-1">Enumeration Members <a class="header-anchor" href="#Enumeration-Members" aria-label="Permalink to &quot;Enumeration Members&quot;">​</a></h2><h3 id="aborted" tabindex="-1">aborted <a class="header-anchor" href="#aborted" aria-label="Permalink to &quot;aborted&quot;">​</a></h3><p>• <strong>aborted</strong> = <code>4</code></p><p>An aborted navigation is a navigation that failed because a navigation guard returned <code>false</code> or called <code>next(false)</code></p><hr><h3 id="cancelled" tabindex="-1">cancelled <a class="header-anchor" href="#cancelled" aria-label="Permalink to &quot;cancelled&quot;">​</a></h3><p>• <strong>cancelled</strong> = <code>8</code></p><p>A cancelled navigation is a navigation that failed because a more recent navigation finished started (not necessarily finished).</p><hr><h3 id="duplicated" tabindex="-1">duplicated <a class="header-anchor" href="#duplicated" aria-label="Permalink to &quot;duplicated&quot;">​</a></h3><p>• <strong>duplicated</strong> = <code>16</code></p><p>A duplicated navigation is a navigation that failed because it was initiated while already being at the exact same location.</p>',15),r=[o];function l(d,c,s,u,p,h){return e(),i("div",null,r)}const f=a(n,[["render",l]]);export{g as __pageData,f as default};
