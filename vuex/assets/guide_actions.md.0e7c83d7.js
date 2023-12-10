import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.0b0d78d5.js";const h='{"title":"Actions","description":"","frontmatter":{},"headers":[{"level":2,"title":"Dispatching Actions","slug":"dispatching-actions"},{"level":2,"title":"Dispatching Actions in Components","slug":"dispatching-actions-in-components"},{"level":2,"title":"Composing Actions","slug":"composing-actions"}],"relativePath":"guide/actions.md","lastUpdated":1702210160121}',p={},o=t(`<h1 id="actions" tabindex="-1">Actions <a class="header-anchor" href="#actions" aria-hidden="true">#</a></h1><div class="scrimba"><a href="https://scrimba.com/p/pnyzgAP/c6ggR3cG" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div><p>Actions are similar to mutations, the differences being that:</p><ul><li>Instead of mutating the state, actions commit mutations.</li><li>Actions can contain arbitrary asynchronous operations.</li></ul><p>Let&#39;s register a simple action:</p><div class="language-js"><pre><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Action handlers receive a context object which exposes the same set of methods/properties on the store instance, so you can call <code>context.commit</code> to commit a mutation, or access the state and getters via <code>context.state</code> and <code>context.getters</code>. We can even call other actions with <code>context.dispatch</code>. We will see why this context object is not the store instance itself when we introduce <a href="./modules.html">Modules</a> later.</p><p>In practice, we often use ES2015 <a href="https://github.com/lukehoban/es6features#destructuring" target="_blank" rel="noopener noreferrer">argument destructuring</a> to simplify the code a bit (especially when we need to call <code>commit</code> multiple times):</p><div class="language-js"><pre><code><span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="dispatching-actions" tabindex="-1">Dispatching Actions <a class="header-anchor" href="#dispatching-actions" aria-hidden="true">#</a></h2><p>Actions are triggered with the <code>store.dispatch</code> method:</p><div class="language-js"><pre><code>store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>This may look silly at first sight: if we want to increment the count, why don&#39;t we just call <code>store.commit(&#39;increment&#39;)</code> directly? Remember that <strong>mutations have to be synchronous</strong>. Actions don&#39;t. We can perform <strong>asynchronous</strong> operations inside an action:</p><div class="language-js"><pre><code><span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">incrementAsync</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Actions support the same payload format and object-style dispatch:</p><div class="language-js"><pre><code><span class="token comment">// dispatch with a payload</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;incrementAsync&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// dispatch with an object</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;incrementAsync&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>A more practical example of real-world actions would be an action to checkout a shopping cart, which involves <strong>calling an async API</strong> and <strong>committing multiple mutations</strong>:</p><div class="language-js"><pre><code><span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">checkout</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit<span class="token punctuation">,</span> state <span class="token punctuation">}</span><span class="token punctuation">,</span> products</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// save the items currently in the cart</span>
    <span class="token keyword">const</span> savedCartItems <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">.</span>cart<span class="token punctuation">.</span>added<span class="token punctuation">]</span>
    <span class="token comment">// send out checkout request, and optimistically</span>
    <span class="token comment">// clear the cart</span>
    <span class="token function">commit</span><span class="token punctuation">(</span>types<span class="token punctuation">.</span><span class="token constant">CHECKOUT_REQUEST</span><span class="token punctuation">)</span>
    <span class="token comment">// the shop API accepts a success callback and a failure callback</span>
    shop<span class="token punctuation">.</span><span class="token function">buyProducts</span><span class="token punctuation">(</span>
      products<span class="token punctuation">,</span>
      <span class="token comment">// handle success</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">commit</span><span class="token punctuation">(</span>types<span class="token punctuation">.</span><span class="token constant">CHECKOUT_SUCCESS</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// handle failure</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">commit</span><span class="token punctuation">(</span>types<span class="token punctuation">.</span><span class="token constant">CHECKOUT_FAILURE</span><span class="token punctuation">,</span> savedCartItems<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Note we are performing a flow of asynchronous operations, and recording the side effects (state mutations) of the action by committing them.</p><h2 id="dispatching-actions-in-components" tabindex="-1">Dispatching Actions in Components <a class="header-anchor" href="#dispatching-actions-in-components" aria-hidden="true">#</a></h2><p>You can dispatch actions in components with <code>this.$store.dispatch(&#39;xxx&#39;)</code>, or use the <code>mapActions</code> helper which maps component methods to <code>store.dispatch</code> calls (requires root <code>store</code> injection):</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mapActions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">&#39;increment&#39;</span><span class="token punctuation">,</span> <span class="token comment">// map \`this.increment()\` to \`this.$store.dispatch(&#39;increment&#39;)\`</span>

      <span class="token comment">// \`mapActions\` also supports payloads:</span>
      <span class="token string">&#39;incrementBy&#39;</span> <span class="token comment">// map \`this.incrementBy(amount)\` to \`this.$store.dispatch(&#39;incrementBy&#39;, amount)\`</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">add</span><span class="token operator">:</span> <span class="token string">&#39;increment&#39;</span> <span class="token comment">// map \`this.add()\` to \`this.$store.dispatch(&#39;increment&#39;)\`</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="composing-actions" tabindex="-1">Composing Actions <a class="header-anchor" href="#composing-actions" aria-hidden="true">#</a></h2><p>Actions are often asynchronous, so how do we know when an action is done? And more importantly, how can we compose multiple actions together to handle more complex async flows?</p><p>The first thing to know is that <code>store.dispatch</code> can handle Promise returned by the triggered action handler and it also returns Promise:</p><div class="language-js"><pre><code><span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">actionA</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;someMutation&#39;</span><span class="token punctuation">)</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Now you can do:</p><div class="language-js"><pre><code>store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;actionA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>And also in another action:</p><div class="language-js"><pre><code><span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token function">actionB</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> dispatch<span class="token punctuation">,</span> commit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;actionA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;someOtherMutation&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Finally, if we make use of <a href="https://tc39.github.io/ecmascript-asyncawait/" target="_blank" rel="noopener noreferrer">async / await</a>, we can compose our actions like this:</p><div class="language-js"><pre><code><span class="token comment">// assuming \`getData()\` and \`getOtherData()\` return Promises</span>

<span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">actionA</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;gotData&#39;</span><span class="token punctuation">,</span> <span class="token keyword">await</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">actionB</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> dispatch<span class="token punctuation">,</span> commit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;actionA&#39;</span><span class="token punctuation">)</span> <span class="token comment">// wait for \`actionA\` to finish</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;gotOtherData&#39;</span><span class="token punctuation">,</span> <span class="token keyword">await</span> <span class="token function">getOtherData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>It&#39;s possible for a <code>store.dispatch</code> to trigger multiple action handlers in different modules. In such a case the returned value will be a Promise that resolves when all triggered handlers have been resolved.</p></blockquote>`,33),e=[o];function c(i,u,l,r,k,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{h as __pageData,g as default};
