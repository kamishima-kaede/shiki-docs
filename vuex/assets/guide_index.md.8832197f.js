import{_ as n,y as s,x as t,W as a}from"./plugin-vue_export-helper.0b0d78d5.js";const h='{"title":"Getting Started","description":"","frontmatter":{},"headers":[{"level":2,"title":"The Simplest Store","slug":"the-simplest-store"}],"relativePath":"guide/index.md","lastUpdated":1702210160122}',e={},o=a(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><div class="scrimba"><a href="https://scrimba.com/p/pnyzgAP/cMPa2Uk" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div><p>At the center of every Vuex application is the <strong>store</strong>. A &quot;store&quot; is basically a container that holds your application <strong>state</strong>. There are two things that make a Vuex store different from a plain global object:</p><ol><li><p>Vuex stores are reactive. When Vue components retrieve state from it, they will reactively and efficiently update if the store&#39;s state changes.</p></li><li><p>You cannot directly mutate the store&#39;s state. The only way to change a store&#39;s state is by explicitly <strong>committing mutations</strong>. This ensures every state change leaves a track-able record, and enables tooling that helps us better understand our applications.</p></li></ol><h2 id="the-simplest-store" tabindex="-1">The Simplest Store <a class="header-anchor" href="#the-simplest-store" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>We will be using ES2015 syntax for code examples for the rest of the docs. If you haven&#39;t picked it up, <a href="https://babeljs.io/docs/learn-es2015/" target="_blank" rel="noopener noreferrer">you should</a>!</p></div><p>After <a href="./../installation.html">installing</a> Vuex, let&#39;s create a store. It is pretty straightforward - just provide an initial state object, and some mutations:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token comment">// Create a new store instance.</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">state</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">/* your root component */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// Install the store instance as a plugin</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
</code></pre></div><p>Now, you can access the state object as <code>store.state</code>, and trigger a state change with the <code>store.commit</code> method:</p><div class="language-js"><pre><code>store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// -&gt; 1</span>
</code></pre></div><p>In a Vue component, you can access the store as <code>this.$store</code>. Now we can commit a mutation using a component method:</p><div class="language-js"><pre><code><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Again, the reason we are committing a mutation instead of changing <code>store.state.count</code> directly, is because we want to explicitly track it. This simple convention makes your intention more explicit, so that you can reason about state changes in your app better when reading the code. In addition, this gives us the opportunity to implement tools that can log every mutation, take state snapshots, or even perform time travel debugging.</p><p>Using store state in a component simply involves returning the state within a computed property, because the store state is reactive. Triggering changes simply means committing mutations in component methods.</p><p>Next, we will discuss each core concept in much finer details, starting with <a href="./state.html">State</a>.</p>`,15),p=[o];function c(i,r,l,u,k,d){return t(),s("div",null,p)}var g=n(e,[["render",c]]);export{h as __pageData,g as default};