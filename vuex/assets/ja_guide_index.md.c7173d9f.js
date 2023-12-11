import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.0b0d78d5.js";const h='{"title":"Vuex \u5165\u9580","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u30B7\u30F3\u30D7\u30EB\u306A\u30B9\u30C8\u30A2","slug":"\u30B7\u30F3\u30D7\u30EB\u306A\u30B9\u30C8\u30A2"}],"relativePath":"ja/guide/index.md","lastUpdated":1702210160127}',p={},o=t(`<h1 id="vuex-\u5165\u9580" tabindex="-1">Vuex \u5165\u9580 <a class="header-anchor" href="#vuex-\u5165\u9580" aria-hidden="true">#</a></h1><div class="scrimba"><a href="https://scrimba.com/p/pnyzgAP/cMPa2Uk" target="_blank" rel="noopener noreferrer">Scrimba \u306E\u30EC\u30C3\u30B9\u30F3\u3092\u8A66\u3059</a></div><p>Vuex \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4E2D\u5FC3\u306B\u3042\u308B\u3082\u306E\u306F<strong>\u30B9\u30C8\u30A2</strong>\u3067\u3059\u3002&quot;\u30B9\u30C8\u30A2&quot; \u306F\u3001\u57FA\u672C\u7684\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E <strong>\u72B6\u614B\uFF08state\uFF09</strong> \u3092\u4FDD\u6301\u3059\u308B\u30B3\u30F3\u30C6\u30CA\u3067\u3059\u3002\u5358\u7D14\u306A\u30B0\u30ED\u30FC\u30D0\u30EB\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u306E\u9055\u3044\u304C 2\u3064\u3042\u308A\u307E\u3059\u3002</p><ol><li><p>Vuex \u30B9\u30C8\u30A2\u306F\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u3067\u3059\u3002Vue \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u30B9\u30C8\u30A2\u304B\u3089\u72B6\u614B\u3092\u53D6\u308A\u51FA\u3059\u3068\u304D\u3001\u3082\u3057\u30B9\u30C8\u30A2\u306E\u72B6\u614B\u304C\u5909\u5316\u3057\u305F\u3089\u3001\u30B9\u30C8\u30A2\u306F\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u304B\u3064\u52B9\u7387\u7684\u306B\u66F4\u65B0\u3092\u884C\u3044\u307E\u3059\u3002</p></li><li><p>\u30B9\u30C8\u30A2\u306E\u72B6\u614B\u3092\u76F4\u63A5\u5909\u66F4\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u660E\u793A\u7684\u306B<strong>\u30DF\u30E5\u30FC\u30C6\u30FC\u30B7\u30E7\u30F3\u3092\u30B3\u30DF\u30C3\u30C8\u3059\u308B</strong>\u3053\u3068\u306B\u3088\u3063\u3066\u306E\u307F\u3001\u30B9\u30C8\u30A2\u306E\u72B6\u614B\u3092\u5909\u66F4\u3057\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u3063\u3066\u3001\u5168\u3066\u306E\u72B6\u614B\u306E\u5909\u66F4\u306B\u3064\u3044\u3066\u8FFD\u8DE1\u53EF\u80FD\u306A\u8A18\u9332\u3092\u6B8B\u3059\u3053\u3068\u304C\u4FDD\u8A3C\u3055\u308C\u3001\u30C4\u30FC\u30EB\u3067\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u52D5\u4F5C\u306E\u7406\u89E3\u3092\u52A9\u3051\u307E\u3059\u3002</p></li></ol><h2 id="\u30B7\u30F3\u30D7\u30EB\u306A\u30B9\u30C8\u30A2" tabindex="-1">\u30B7\u30F3\u30D7\u30EB\u306A\u30B9\u30C8\u30A2 <a class="header-anchor" href="#\u30B7\u30F3\u30D7\u30EB\u306A\u30B9\u30C8\u30A2" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u79C1\u305F\u3061\u306F\u3001\u3053\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u30B3\u30FC\u30C9\u4F8B\u306B ES2015 \u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u5229\u7528\u3057\u3066\u3044\u307E\u3059\u3002 \u3082\u3057\u89E6\u308C\u305F\u3053\u3068\u304C\u306A\u3051\u308C\u3070\u3001<a href="https://babeljs.io/docs/learn-es2015/" target="_blank" rel="noopener noreferrer">\u305C\u3072\u89E6\u308C\u3066\u304F\u3060\u3055\u3044</a>\uFF01</p></div><p>Vuex \u3092<a href="./../installation.html">\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB</a> \u3057\u3066\u304B\u3089\u3001\u30B9\u30C8\u30A2\u3092\u3064\u304F\u3063\u3066\u307F\u307E\u3057\u3087\u3046\u3002Vuex \u30B9\u30C8\u30A2\u306E\u4F5C\u6210\u306F\u3001\u3068\u3066\u3082\u7C21\u5358\u3067\u3059\u3002\u30B9\u30C8\u30A2\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u521D\u671F\u72B6\u614B\u3068\u3001\u3044\u304F\u3064\u304B\u306E\u30DF\u30E5\u30FC\u30C6\u30FC\u30B7\u30E7\u30F3\u3092\u6E96\u5099\u3059\u308B\u3060\u3051\u3067\u3059\u3002</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token comment">// \u65B0\u3057\u3044\u30B9\u30C8\u30A2\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u4F5C\u6210\u3057\u307E\u3059</span>
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

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">/* \u30EB\u30FC\u30C8\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u30D7\u30E9\u30B0\u30A4\u30F3\u3068\u3057\u3066\u30B9\u30C8\u30A2\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u307E\u3059</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
</code></pre></div><p>\u3053\u308C\u3067 <code>store.state</code> \u3067\u30B9\u30C8\u30A2\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u72B6\u614B\u3092\u53C2\u7167\u3067\u304D\u3001\u307E\u305F <code>store.commit</code> \u30E1\u30BD\u30C3\u30C9\u3067\u72B6\u614B\u306E\u5909\u66F4\u3092\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><div class="language-js"><pre><code>store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// -&gt; 1</span>
</code></pre></div><p>Vue \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u306F\u3001<code>this.$store</code> \u3068\u3057\u3066\u30B9\u30C8\u30A2\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059\u3002\u305D\u308C\u3067\u306F\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u3063\u3066\u30DF\u30E5\u30FC\u30C6\u30FC\u30B7\u30E7\u30F3\u3092\u30B3\u30DF\u30C3\u30C8\u3057\u3066\u307F\u307E\u3057\u3087\u3046\u3002</p><div class="language-js"><pre><code><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u305D\u3057\u3066 <code>store.state.count</code> \u3092\u76F4\u63A5\u5909\u66F4\u3059\u308B\u4EE3\u308F\u308A\u306B\u30DF\u30E5\u30FC\u30C6\u30FC\u30B7\u30E7\u30F3\u3092\u30B3\u30DF\u30C3\u30C8\u3059\u308B\u7406\u7531\u306F\u3001\u72B6\u614B\u306E\u5909\u66F4\u3092\u660E\u78BA\u306B\u8FFD\u8DE1\u3057\u305F\u3044\u304B\u3089\u3067\u3059\u3002\u3053\u306E\u30B7\u30F3\u30D7\u30EB\u306A\u898F\u7D04\u306F\u3001\u3042\u306A\u305F\u306E\u30B3\u30FC\u30C9\u306E\u610F\u56F3\u3092\u3055\u3089\u306B\u660E\u78BA\u306B\u3057\u3001\u30B3\u30FC\u30C9\u3092\u8AAD\u3093\u3060\u6642\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u72B6\u614B\u306E\u5909\u66F4\u306B\u3064\u3044\u3066\u3001\u8AD6\u7406\u7684\u306B\u8003\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002\u52A0\u3048\u3066\u3001\u79C1\u305F\u3061\u306B\u5168\u3066\u306E\u5909\u66F4\u306E\u30ED\u30B0\u3092\u53D6\u3063\u305F\u308A\u3001\u72B6\u614B\u306E\u30B9\u30CA\u30C3\u30D7\u30B7\u30E7\u30C3\u30C8\u3092\u53D6\u3063\u305F\u308A\u3001\u30BF\u30A4\u30E0\u30C8\u30E9\u30D9\u30EB\u30C7\u30D0\u30C3\u30B0\u3092\u884C\u3046\u3088\u3046\u306A\u30C4\u30FC\u30EB\u3092\u5B9F\u88C5\u3059\u308B\u4F59\u5730\u3092\u4E0E\u3048\u3066\u304F\u308C\u307E\u3059\u3002</p><p>\u30B9\u30C8\u30A2\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u72B6\u614B\u306F\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u306E\u3067\u3001\u30B9\u30C8\u30A2\u306E\u72B6\u614B\u3092\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5185\u3067\u4F7F\u3046\u306B\u306F\u7B97\u51FA\u30D7\u30ED\u30D1\u30C6\u30A3\u5185\u3067\u305F\u3060\u72B6\u614B\u3092\u8FD4\u305B\u3070\u826F\u3044\u3067\u3059\u3002\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u30E1\u30BD\u30C3\u30C9\u3067\u30DF\u30E5\u30FC\u30C6\u30FC\u30B7\u30E7\u30F3\u3092\u30B3\u30DF\u30C3\u30C8\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u72B6\u614B\u306E\u5909\u66F4\u3092\u884C\u3044\u307E\u3059\u3002</p><p>\u3053\u308C\u304B\u3089 Vuex \u306E\u30B3\u30A2\u30B3\u30F3\u30BB\u30D7\u30C8\u306B\u3064\u3044\u3066\u8A73\u3057\u304F\u8AAC\u660E\u3057\u3066\u3044\u304D\u307E\u3059\u3002\u307E\u305A\u306F<a href="./state.html">\u72B6\u614B\uFF08state\uFF09</a>\u304B\u3089\u306F\u3058\u3081\u307E\u3057\u3087\u3046\u3002</p>`,15),e=[o];function c(u,l,r,i,k,d){return a(),s("div",null,e)}var _=n(p,[["render",c]]);export{h as __pageData,_ as default};