import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.0b0d78d5.js";const g='{"title":"Testing","description":"","frontmatter":{},"headers":[{"level":2,"title":"Testing Mutations","slug":"testing-mutations"},{"level":2,"title":"Testing Actions","slug":"testing-actions"},{"level":2,"title":"Testing Getters","slug":"testing-getters"},{"level":2,"title":"Running Tests","slug":"running-tests"},{"level":3,"title":"Running in Node","slug":"running-in-node"},{"level":3,"title":"Running in Browser","slug":"running-in-browser"},{"level":3,"title":"Running in Browser with Karma + karma-webpack","slug":"running-in-browser-with-karma-karma-webpack"}],"relativePath":"guide/testing.md","lastUpdated":1702210160124}',p={},o=t(`<h1 id="testing" tabindex="-1">Testing <a class="header-anchor" href="#testing" aria-hidden="true">#</a></h1><div class="scrimba"><a href="https://scrimba.com/p/pnyzgAP/cPGkpJhq" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div><p>The main parts we want to unit test in Vuex are mutations and actions.</p><h2 id="testing-mutations" tabindex="-1">Testing Mutations <a class="header-anchor" href="#testing-mutations" aria-hidden="true">#</a></h2><p>Mutations are very straightforward to test, because they are just functions that completely rely on their arguments. One trick is that if you are using ES2015 modules and put your mutations inside your <code>store.js</code> file, in addition to the default export, you should also export the mutations as a named export:</p><div class="language-js"><pre><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>

<span class="token comment">// export \`mutations\` as a named export</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  state<span class="token punctuation">,</span>
  mutations
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Example testing a mutation using Mocha + Chai (you can use any framework/assertion libraries you like):</p><div class="language-js"><pre><code><span class="token comment">// mutations.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>count<span class="token operator">++</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// mutations.spec.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;chai&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mutations <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>

<span class="token comment">// destructure assign \`mutations\`</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> increment <span class="token punctuation">}</span> <span class="token operator">=</span> mutations

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;mutations&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;INCREMENT&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// mock state</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
    <span class="token comment">// apply mutation</span>
    <span class="token function">increment</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
    <span class="token comment">// assert result</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="testing-actions" tabindex="-1">Testing Actions <a class="header-anchor" href="#testing-actions" aria-hidden="true">#</a></h2><p>Actions can be a bit more tricky because they may call out to external APIs. When testing actions, we usually need to do some level of mocking - for example, we can abstract the API calls into a service and mock that service inside our tests. In order to easily mock dependencies, we can use webpack and <a href="https://github.com/plasticine/inject-loader" target="_blank" rel="noopener noreferrer">inject-loader</a> to bundle our test files.</p><p>Example testing an async action:</p><div class="language-js"><pre><code><span class="token comment">// actions.js</span>
<span class="token keyword">import</span> shop <span class="token keyword">from</span> <span class="token string">&#39;../api/shop&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getAllProducts</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;REQUEST_PRODUCTS&#39;</span><span class="token punctuation">)</span>
  shop<span class="token punctuation">.</span><span class="token function">getProducts</span><span class="token punctuation">(</span><span class="token parameter">products</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;RECEIVE_PRODUCTS&#39;</span><span class="token punctuation">,</span> products<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// actions.spec.js</span>

<span class="token comment">// use require syntax for inline loaders.</span>
<span class="token comment">// with inject-loader, this returns a module factory</span>
<span class="token comment">// that allows us to inject mocked dependencies.</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;chai&#39;</span>
<span class="token keyword">const</span> actionsInjector <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;inject-loader!./actions&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// create the module with our mocks</span>
<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token function">actionsInjector</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string-property property">&#39;../api/shop&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getProducts</span> <span class="token punctuation">(</span><span class="token parameter">cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token comment">/* mocked response */</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// helper for testing action with expected mutations</span>
<span class="token keyword">const</span> <span class="token function-variable function">testAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">action<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> state<span class="token punctuation">,</span> expectedMutations<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token comment">// mock commit</span>
  <span class="token keyword">const</span> <span class="token function-variable function">commit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mutation <span class="token operator">=</span> expectedMutations<span class="token punctuation">[</span>count<span class="token punctuation">]</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>mutation<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>deep<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>mutation<span class="token punctuation">.</span>payload<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">done</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    count<span class="token operator">++</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;=</span> expectedMutations<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// call the action with mocked store and arguments</span>
  <span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">{</span> commit<span class="token punctuation">,</span> state <span class="token punctuation">}</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>

  <span class="token comment">// check if no mutations should have been dispatched</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>expectedMutations<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;actions&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;getAllProducts&#39;</span><span class="token punctuation">,</span> <span class="token parameter">done</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">testAction</span><span class="token punctuation">(</span>actions<span class="token punctuation">.</span>getAllProducts<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;REQUEST_PRODUCTS&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;RECEIVE_PRODUCTS&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* mocked response */</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span> done<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>If you have spies available in your testing environment (for example via <a href="http://sinonjs.org/" target="_blank" rel="noopener noreferrer">Sinon.JS</a>), you can use them instead of the <code>testAction</code> helper:</p><div class="language-js"><pre><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;actions&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;getAllProducts&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> commit <span class="token operator">=</span> sinon<span class="token punctuation">.</span><span class="token function">spy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    actions<span class="token punctuation">.</span><span class="token function">getAllProducts</span><span class="token punctuation">(</span><span class="token punctuation">{</span> commit<span class="token punctuation">,</span> state <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>commit<span class="token punctuation">.</span>args<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>deep<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">[</span><span class="token string">&#39;REQUEST_PRODUCTS&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token string">&#39;RECEIVE_PRODUCTS&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token comment">/* mocked response */</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="testing-getters" tabindex="-1">Testing Getters <a class="header-anchor" href="#testing-getters" aria-hidden="true">#</a></h2><p>If your getters have complicated computation, it is worth testing them. Getters are also very straightforward to test for the same reason as mutations.</p><p>Example testing a getter:</p><div class="language-js"><pre><code><span class="token comment">// getters.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">filteredProducts</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> <span class="token punctuation">{</span> filterCategory <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> state<span class="token punctuation">.</span>products<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">product</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> product<span class="token punctuation">.</span>category <span class="token operator">===</span> filterCategory
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// getters.spec.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;chai&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./getters&#39;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;getters&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;filteredProducts&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// mock state</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">products</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Apple&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">&#39;fruit&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Orange&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">&#39;fruit&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Carrot&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">&#39;vegetable&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// mock getter</span>
    <span class="token keyword">const</span> filterCategory <span class="token operator">=</span> <span class="token string">&#39;fruit&#39;</span>

    <span class="token comment">// get the result from the getter</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> getters<span class="token punctuation">.</span><span class="token function">filteredProducts</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token punctuation">{</span> filterCategory <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// assert the result</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>deep<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Apple&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">&#39;fruit&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Orange&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">&#39;fruit&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="running-tests" tabindex="-1">Running Tests <a class="header-anchor" href="#running-tests" aria-hidden="true">#</a></h2><p>If your mutations and actions are written properly, the tests should have no direct dependency on Browser APIs after proper mocking. Thus you can simply bundle the tests with webpack and run it directly in Node. Alternatively, you can use <code>mocha-loader</code> or Karma + <code>karma-webpack</code> to run the tests in real browsers.</p><h3 id="running-in-node" tabindex="-1">Running in Node <a class="header-anchor" href="#running-in-node" aria-hidden="true">#</a></h3><p>Create the following webpack config (together with proper <a href="https://babeljs.io/docs/usage/babelrc/" target="_blank" rel="noopener noreferrer"><code>.babelrc</code></a>):</p><div class="language-js"><pre><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./test.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> __dirname<span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;test-bundle.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">loaders</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Then:</p><div class="language-bash"><pre><code>webpack
mocha test-bundle.js
</code></pre></div><h3 id="running-in-browser" tabindex="-1">Running in Browser <a class="header-anchor" href="#running-in-browser" aria-hidden="true">#</a></h3><ol><li>Install <code>mocha-loader</code>.</li><li>Change the <code>entry</code> from the webpack config above to <code>&#39;mocha-loader!babel-loader!./test.js&#39;</code>.</li><li>Start <code>webpack-dev-server</code> using the config.</li><li>Go to <code>localhost:8080/webpack-dev-server/test-bundle</code>.</li></ol><h3 id="running-in-browser-with-karma-karma-webpack" tabindex="-1">Running in Browser with Karma + karma-webpack <a class="header-anchor" href="#running-in-browser-with-karma-karma-webpack" aria-hidden="true">#</a></h3><p>Consult the setup in <a href="https://vue-loader.vuejs.org/en/workflow/testing.html" target="_blank" rel="noopener noreferrer">vue-loader documentation</a>.</p>`,32),e=[o];function c(u,l,r,i,k,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{g as __pageData,y as default};
