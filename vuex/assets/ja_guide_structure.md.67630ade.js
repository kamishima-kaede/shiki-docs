import{_ as n,y as s,x as t,W as e}from"./plugin-vue_export-helper.0b0d78d5.js";const h='{"title":"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u69CB\u9020","description":"","frontmatter":{},"relativePath":"ja/guide/structure.md","lastUpdated":1702210160129}',a={},o=e(`<h1 id="\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u69CB\u9020" tabindex="-1">\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u69CB\u9020 <a class="header-anchor" href="#\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u69CB\u9020" aria-hidden="true">#</a></h1><p>Vuex \u306F\u5B9F\u969B\u306E\u3068\u3053\u308D\u3001\u3042\u306A\u305F\u304C\u30B3\u30FC\u30C9\u3092\u69CB\u9020\u5316\u3059\u308B\u65B9\u6CD5\u3092\u5236\u9650\u3057\u307E\u305B\u3093\u3002\u3082\u3063\u3068\u6B63\u78BA\u306B\u8A00\u3046\u3068\u3001\u305D\u308C\u3088\u308A\u9AD8\u3044\u30EC\u30D9\u30EB\u306E\u539F\u7406\u539F\u5247\u3092\u9069\u7528\u3055\u305B\u307E\u3059:</p><ol><li><p>\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30EC\u30D9\u30EB\u306E\u72B6\u614B\u306F\u30B9\u30C8\u30A2\u306B\u96C6\u7D04\u3055\u308C\u307E\u3059\u3002</p></li><li><p>\u72B6\u614B\u3092\u5909\u66F4\u3059\u308B\u552F\u4E00\u306E\u65B9\u6CD5\u306F\u3001\u540C\u671F\u7684\u306B\u51E6\u7406\u3092\u884C\u3046<strong>\u30DF\u30E5\u30FC\u30C6\u30FC\u30B7\u30E7\u30F3</strong>\u3092\u30B3\u30DF\u30C3\u30C8\u3059\u308B\u3053\u3068\u306E\u307F\u3067\u3059\u3002</p></li><li><p>\u975E\u540C\u671F\u7684\u306A\u30ED\u30B8\u30C3\u30AF\u306F\u30AB\u30D7\u30BB\u30EB\u5316\u3055\u308C\u308B\u3079\u304D\u3067\u3042\u308A\u3001\u305D\u308C\u306F<strong>\u30A2\u30AF\u30B7\u30E7\u30F3</strong>\u306B\u3088\u3063\u3066\u69CB\u6210\u3055\u308C\u307E\u3059\u3002</p></li></ol><p>\u3053\u308C\u3089\u306E\u30EB\u30FC\u30EB\u306B\u5F93\u3063\u3066\u3044\u308B\u9650\u308A\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u3069\u306E\u3088\u3046\u306B\u69CB\u9020\u5316\u3059\u308B\u304B\u306F\u3042\u306A\u305F\u6B21\u7B2C\u3067\u3059\u3002\u3082\u3057\u30B9\u30C8\u30A2\u30D5\u30A1\u30A4\u30EB\u304C\u5927\u304D\u304F\u306A\u308A\u904E\u304E\u305F\u3089\u3001\u5358\u7D14\u306B\u30A2\u30AF\u30B7\u30E7\u30F3\u3084\u30DF\u30E5\u30FC\u30C6\u30FC\u30B7\u30E7\u30F3\u3001\u30B2\u30C3\u30BF\u30FC\u3092\u305D\u308C\u305E\u308C\u5225\u306E\u30D5\u30A1\u30A4\u30EB\u306B\u5207\u308A\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><p>\u305D\u308C\u306A\u308A\u306B\u624B\u306E\u8FBC\u3093\u3060\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u3042\u308C\u3070\u3001\u30E2\u30B8\u30E5\u30FC\u30EB\u3092\u6D3B\u7528\u3059\u308B\u5FC5\u8981\u304C\u51FA\u3066\u304D\u305D\u3046\u3067\u3059\u3002\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u69CB\u9020\u306E\u4F8B\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059:</p><div class="language-bash"><pre><code>\u251C\u2500\u2500 index.html
\u251C\u2500\u2500 main.js
\u251C\u2500\u2500 api
\u2502   \u2514\u2500\u2500 <span class="token punctuation">..</span>. <span class="token comment"># API \u547C\u3073\u51FA\u3057\u3092\u62BD\u8C61\u5316\u3059\u308B</span>
\u251C\u2500\u2500 components
\u2502   \u251C\u2500\u2500 App.vue
\u2502   \u2514\u2500\u2500 <span class="token punctuation">..</span>.
\u2514\u2500\u2500 store
    \u251C\u2500\u2500 index.js          <span class="token comment"># \u30E2\u30B8\u30E5\u30FC\u30EB\u3092\u96C6\u3081\u3066\u30B9\u30C8\u30A2\u3092\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u3059\u308B</span>
    \u251C\u2500\u2500 actions.js        <span class="token comment"># \u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u30EB\u30FC\u30C8\u30D5\u30A1\u30A4\u30EB</span>
    \u251C\u2500\u2500 mutations.js      <span class="token comment"># \u30DF\u30E5\u30FC\u30C6\u30FC\u30B7\u30E7\u30F3\u306E\u30EB\u30FC\u30C8\u30D5\u30A1\u30A4\u30EB</span>
    \u2514\u2500\u2500 modules
        \u251C\u2500\u2500 cart.js       <span class="token comment"># cart \u30E2\u30B8\u30E5\u30FC\u30EB</span>
        \u2514\u2500\u2500 products.js   <span class="token comment"># products \u30E2\u30B8\u30E5\u30FC\u30EB</span>
</code></pre></div><p>\u53C2\u8003\u3068\u3057\u3066 <a href="https://github.com/vuejs/vuex/tree/4.0/examples/classic/shopping-cart" target="_blank" rel="noopener noreferrer">Shopping Cart Example</a> \u3092\u307F\u3066\u307F\u308B\u306E\u3082\u3088\u3044\u3067\u3057\u3087\u3046\u3002</p>`,7),p=[o];function c(r,i,l,_,d,m){return t(),s("div",null,p)}var g=n(a,[["render",c]]);export{h as __pageData,g as default};