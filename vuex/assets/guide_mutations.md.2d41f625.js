import{_ as n,y as a,x as s,W as t}from"./plugin-vue_export-helper.0b0d78d5.js";const h='{"title":"Mutations","description":"","frontmatter":{},"headers":[{"level":2,"title":"Commit with Payload","slug":"commit-with-payload"},{"level":2,"title":"Object-Style Commit","slug":"object-style-commit"},{"level":2,"title":"Using Constants for Mutation Types","slug":"using-constants-for-mutation-types"},{"level":2,"title":"Mutations Must Be Synchronous","slug":"mutations-must-be-synchronous"},{"level":2,"title":"Committing Mutations in Components","slug":"committing-mutations-in-components"},{"level":2,"title":"On to Actions","slug":"on-to-actions"}],"relativePath":"guide/mutations.md","lastUpdated":1702210160123}',o={},e=t(`<h1 id="mutations" tabindex="-1">Mutations <a class="header-anchor" href="#mutations" aria-hidden="true">#</a></h1><div class="scrimba"><a href="https://scrimba.com/p/pnyzgAP/ckMZp4HN" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div><p>The only way to actually change state in a Vuex store is by committing a mutation. Vuex mutations are very similar to events: each mutation has a string <strong>type</strong> and a <strong>handler</strong>. The handler function is where we perform actual state modifications, and it will receive the state as the first argument:</p><div class="language-js"><pre><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// mutate state</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>You cannot directly call a mutation handler. Think of it more like event registration: &quot;When a mutation with type <code>increment</code> is triggered, call this handler.&quot; To invoke a mutation handler, you need to call <code>store.commit</code> with its type:</p><div class="language-js"><pre><code>store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="commit-with-payload" tabindex="-1">Commit with Payload <a class="header-anchor" href="#commit-with-payload" aria-hidden="true">#</a></h2><p>You can pass an additional argument to <code>store.commit</code>, which is called the <strong>payload</strong> for the mutation:</p><div class="language-js"><pre><code><span class="token comment">// ...</span>
<span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>count <span class="token operator">+=</span> n
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code>store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
</code></pre></div><p>In most cases, the payload should be an object so that it can contain multiple fields, and the recorded mutation will also be more descriptive:</p><div class="language-js"><pre><code><span class="token comment">// ...</span>
<span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>count <span class="token operator">+=</span> payload<span class="token punctuation">.</span>amount
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code>store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="object-style-commit" tabindex="-1">Object-Style Commit <a class="header-anchor" href="#object-style-commit" aria-hidden="true">#</a></h2><p>An alternative way to commit a mutation is by directly using an object that has a <code>type</code> property:</p><div class="language-js"><pre><code>store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;increment&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>When using object-style commit, the entire object will be passed as the payload to mutation handlers, so the handler remains the same:</p><div class="language-js"><pre><code><span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>count <span class="token operator">+=</span> payload<span class="token punctuation">.</span>amount
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="using-constants-for-mutation-types" tabindex="-1">Using Constants for Mutation Types <a class="header-anchor" href="#using-constants-for-mutation-types" aria-hidden="true">#</a></h2><p>It is a commonly seen pattern to use constants for mutation types in various Flux implementations. This allows the code to take advantage of tooling like linters, and putting all constants in a single file allows your collaborators to get an at-a-glance view of what mutations are possible in the entire application:</p><div class="language-js"><pre><code><span class="token comment">// mutation-types.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">SOME_MUTATION</span> <span class="token operator">=</span> <span class="token string">&#39;SOME_MUTATION&#39;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// store.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">SOME_MUTATION</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./mutation-types&#39;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// we can use the ES2015 computed property name feature</span>
    <span class="token comment">// to use a constant as the function name</span>
    <span class="token punctuation">[</span><span class="token constant">SOME_MUTATION</span><span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// mutate state</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Whether to use constants is largely a preference - it can be helpful in large projects with many developers, but it&#39;s totally optional if you don&#39;t like them.</p><h2 id="mutations-must-be-synchronous" tabindex="-1">Mutations Must Be Synchronous <a class="header-anchor" href="#mutations-must-be-synchronous" aria-hidden="true">#</a></h2><p>One important rule to remember is that <strong>mutation handler functions must be synchronous</strong>. Why? Consider the following example:</p><div class="language-js"><pre><code><span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">someMutation</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    api<span class="token punctuation">.</span><span class="token function">callAsyncMethod</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Now imagine we are debugging the app and looking at the devtool&#39;s mutation logs. For every mutation logged, the devtool will need to capture a &quot;before&quot; and &quot;after&quot; snapshots of the state. However, the asynchronous callback inside the example mutation above makes that impossible: the callback is not called yet when the mutation is committed, and there&#39;s no way for the devtool to know when the callback will actually be called - any state mutation performed in the callback is essentially un-trackable!</p><h2 id="committing-mutations-in-components" tabindex="-1">Committing Mutations in Components <a class="header-anchor" href="#committing-mutations-in-components" aria-hidden="true">#</a></h2><p>You can commit mutations in components with <code>this.$store.commit(&#39;xxx&#39;)</code>, or use the <code>mapMutations</code> helper which maps component methods to <code>store.commit</code> calls (requires root <code>store</code> injection):</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mapMutations <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">&#39;increment&#39;</span><span class="token punctuation">,</span> <span class="token comment">// map \`this.increment()\` to \`this.$store.commit(&#39;increment&#39;)\`</span>

      <span class="token comment">// \`mapMutations\` also supports payloads:</span>
      <span class="token string">&#39;incrementBy&#39;</span> <span class="token comment">// map \`this.incrementBy(amount)\` to \`this.$store.commit(&#39;incrementBy&#39;, amount)\`</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">add</span><span class="token operator">:</span> <span class="token string">&#39;increment&#39;</span> <span class="token comment">// map \`this.add()\` to \`this.$store.commit(&#39;increment&#39;)\`</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="on-to-actions" tabindex="-1">On to Actions <a class="header-anchor" href="#on-to-actions" aria-hidden="true">#</a></h2><p>Asynchronicity combined with state mutation can make your program very hard to reason about. For example, when you call two methods both with async callbacks that mutate the state, how do you know when they are called and which callback was called first? This is exactly why we want to separate the two concepts. In Vuex, <strong>mutations are synchronous transactions</strong>:</p><div class="language-js"><pre><code>store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// any state change that the &quot;increment&quot; mutation may cause</span>
<span class="token comment">// should be done at this moment.</span>
</code></pre></div><p>To handle asynchronous operations, let&#39;s introduce <a href="./actions.html">Actions</a>.</p>`,34),p=[e];function c(i,l,r,u,k,m){return s(),a("div",null,p)}var y=n(o,[["render",c]]);export{h as __pageData,y as default};
