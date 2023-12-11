import{_ as e,a as t}from"./vuex.dfb35270.js";import{_ as a,y as n,x as s,W as o}from"./plugin-vue_export-helper.0b0d78d5.js";const w='{"title":"What is Vuex?","description":"","frontmatter":{},"headers":[{"level":2,"title":"What is a \\"State Management Pattern\\"?","slug":"what-is-a-state-management-pattern"},{"level":2,"title":"When Should I Use It?","slug":"when-should-i-use-it"}],"relativePath":"index.md","lastUpdated":1702210160125}',i={},r=o(`<h1 id="what-is-vuex" tabindex="-1">What is Vuex? <a class="header-anchor" href="#what-is-vuex" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">Pinia is now the new default</p><p>The official state management library for Vue has changed to <a href="https://pinia.vuejs.org" target="_blank" rel="noopener noreferrer">Pinia</a>. Pinia has almost the exact same or enhanced API as Vuex 5, described in <a href="https://github.com/vuejs/rfcs/pull/271" target="_blank" rel="noopener noreferrer">Vuex 5 RFC</a>. You could simply consider Pinia as Vuex 5 with a different name. Pinia also works with Vue 2.x as well.</p><p>Vuex 3 and 4 will still be maintained. However, it&#39;s unlikely to add new functionalities to it. Vuex and Pinia can be installed in the same project. If you&#39;re migrating existing Vuex app to Pinia, it might be a suitable option. However, if you&#39;re planning to start a new project, we highly recommend using Pinia instead.</p></div><p>Vuex is a <strong>state management pattern + library</strong> for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.</p><h2 id="what-is-a-state-management-pattern" tabindex="-1">What is a &quot;State Management Pattern&quot;? <a class="header-anchor" href="#what-is-a-state-management-pattern" aria-hidden="true">#</a></h2><p>Let&#39;s start with a simple Vue counter app:</p><div class="language-js"><pre><code><span class="token keyword">const</span> Counter <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// state</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// view</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div&gt;{{ count }}&lt;/div&gt;
  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token comment">// actions</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>Counter<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>It is a self-contained app with the following parts:</p><ul><li>The <strong>state</strong>, the source of truth that drives our app;</li><li>The <strong>view</strong>, a declarative mapping of the <strong>state</strong>;</li><li>The <strong>actions</strong>, the possible ways the state could change in reaction to user inputs from the <strong>view</strong>.</li></ul><p>This is a simple representation of the concept of &quot;one-way data flow&quot;:</p><p style="text-align:center;margin:2em;"><img style="width:100%;max-width:450px;" src="`+e+'"></p><p>However, the simplicity quickly breaks down when we have <strong>multiple components that share a common state</strong>:</p><ul><li>Multiple views may depend on the same piece of state.</li><li>Actions from different views may need to mutate the same piece of state.</li></ul><p>For problem one, passing props can be tedious for deeply nested components, and simply doesn&#39;t work for sibling components. For problem two, we often find ourselves resorting to solutions such as reaching for direct parent/child instance references or trying to mutate and synchronize multiple copies of the state via events. Both of these patterns are brittle and quickly lead to unmaintainable code.</p><p>So why don&#39;t we extract the shared state out of the components, and manage it in a global singleton? With this, our component tree becomes a big &quot;view&quot;, and any component can access the state or trigger actions, no matter where they are in the tree!</p><p>By defining and separating the concepts involved in state management and enforcing rules that maintain independence between views and states, we give our code more structure and maintainability.</p><p>This is the basic idea behind Vuex, inspired by <a href="https://facebook.github.io/flux/docs/overview" target="_blank" rel="noopener noreferrer">Flux</a>, <a href="http://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux</a> and <a href="https://guide.elm-lang.org/architecture/" target="_blank" rel="noopener noreferrer">The Elm Architecture</a>. Unlike the other patterns, Vuex is also a library implementation tailored specifically for Vue.js to take advantage of its granular reactivity system for efficient updates.</p><p>If you want to learn Vuex in an interactive way you can check out this <a href="https://scrimba.com/g/gvuex" target="_blank" rel="noopener noreferrer">Vuex course on Scrimba</a>, which gives you a mix of screencast and code playground that you can pause and play around with anytime.</p><p><img src="'+t+'" alt="vuex"></p><h2 id="when-should-i-use-it" tabindex="-1">When Should I Use It? <a class="header-anchor" href="#when-should-i-use-it" aria-hidden="true">#</a></h2><p>Vuex helps us deal with shared state management with the cost of more concepts and boilerplate. It&#39;s a trade-off between short term and long term productivity.</p><p>If you&#39;ve never built a large-scale SPA and jump right into Vuex, it may feel verbose and daunting. That&#39;s perfectly normal - if your app is simple, you will most likely be fine without Vuex. A simple <a href="https://v3.vuejs.org/guide/state-management.html#simple-state-management-from-scratch" target="_blank" rel="noopener noreferrer">store pattern</a> may be all you need. But if you are building a medium-to-large-scale SPA, chances are you have run into situations that make you think about how to better handle state outside of your Vue components, and Vuex will be the natural next step for you. There&#39;s a good quote from Dan Abramov, the author of Redux:</p><blockquote><p>Flux libraries are like glasses: you\u2019ll know when you need them.</p></blockquote>',22),p=[r];function l(c,u,h,d,m,g){return s(),n("div",null,p)}var y=a(i,[["render",l]]);export{w as __pageData,y as default};