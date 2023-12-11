import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.0b0d78d5.js";const h='{"title":"Actions","description":"","frontmatter":{},"headers":[{"level":2,"title":"Despachando A\xE7\xF5es","slug":"despachando-acoes"},{"level":2,"title":"Despachando A\xE7\xF5es em Componentes","slug":"despachando-acoes-em-componentes"},{"level":2,"title":"Composi\xE7\xE3o de A\xE7\xF5es","slug":"composicao-de-acoes"}],"relativePath":"ptbr/guide/actions.md","lastUpdated":1702210160131}',p={},o=t(`<h1 id="actions" tabindex="-1">Actions <a class="header-anchor" href="#actions" aria-hidden="true">#</a></h1><div class="scrimba"><a href="https://scrimba.com/p/pnyzgAP/c6ggR3cG" target="_blank" rel="noopener noreferrer">Tente esta li\xE7\xE3o no Scrimba</a></div><p>As a\xE7\xF5es s\xE3o semelhantes \xE0s muta\xE7\xF5es, as diferen\xE7as s\xE3o as seguintes:</p><ul><li>Em vez de mudar o estado, as a\xE7\xF5es confirmam (ou fazem <em>commit</em> de) muta\xE7\xF5es.</li><li>As a\xE7\xF5es podem conter opera\xE7\xF5es ass\xEDncronas arbitr\xE1rias.</li></ul><p>Vamos registrar uma a\xE7\xE3o simples:</p><div class="language-js"><pre><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
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
</code></pre></div><p>As fun\xE7\xF5es manipuladoras de a\xE7\xE3o recebem um objeto <em>context</em> que exp\xF5e o mesmo conjunto de m\xE9todos/propriedades na inst\xE2ncia do <em>store</em>, para que voc\xEA possa chamar <code>context.commit</code> para confirmar uma muta\xE7\xE3o ou acessar o estado e os <em>getters</em> atrav\xE9s do <code>context.state</code> e do <code>context.getters</code>. Podemos at\xE9 chamar outras a\xE7\xF5es com <code>context.dispatch</code>. Veremos por que esse objeto <em>context</em> n\xE3o \xE9 a pr\xF3pria inst\xE2ncia do <em>store</em> quando apresentarmos <a href="./modules.html">M\xF3dulos</a> mais tarde.</p><p>Na pr\xE1tica, muitas vezes usamos ES2015 <a href="https://github.com/lukehoban/es6features#destructuring" target="_blank" rel="noopener noreferrer">desestrutura\xE7\xE3o de argumentos</a> para simplificar um pouco o c\xF3digo (especialmente quando precisamos usar <em>commit</em> v\xE1rias vezes):</p><div class="language-js"><pre><code><span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="despachando-acoes" tabindex="-1">Despachando A\xE7\xF5es <a class="header-anchor" href="#despachando-acoes" aria-hidden="true">#</a></h2><p>As a\xE7\xF5es s\xE3o disparadas com o m\xE9todo <code>store.dispatch</code>:</p><div class="language-js"><pre><code>store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>Isso pode parecer \xF3bvio \xE0 primeira vista: se quisermos incrementar a contagem, por que n\xE3o chamamos <code>store.commit(&#39;increment&#39;)</code> diretamente? Voc\xEA se lembra que <strong>as muta\xE7\xF5es devem ser s\xEDncronas</strong>? As a\xE7\xF5es n\xE3o. Podemos executar opera\xE7\xF5es <strong>ass\xEDncronas</strong> dentro de uma a\xE7\xE3o:</p><div class="language-js"><pre><code><span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">incrementAsync</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>As a\xE7\xF5es suportam o mesmo formato de <em>payload</em> e despacho estilo-objeto:</p><div class="language-js"><pre><code><span class="token comment">// despacho com payload</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;incrementAsync&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// despacho com objeto</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;incrementAsync&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Um exemplo mais pr\xE1tico de a\xE7\xF5es reais seria uma a\xE7\xE3o para fazer <em>checkout</em> de um carrinho de compras, que envolve <strong>chamar uma API ass\xEDncrona</strong> e <strong>confirmar m\xFAltiplas muta\xE7\xF5es</strong>:</p><div class="language-js"><pre><code><span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">checkout</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit<span class="token punctuation">,</span> state <span class="token punctuation">}</span><span class="token punctuation">,</span> products</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// salva os itens que est\xE3o no carrinho</span>
    <span class="token keyword">const</span> savedCartItems <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">.</span>cart<span class="token punctuation">.</span>added<span class="token punctuation">]</span>
    <span class="token comment">// enviar solicita\xE7\xE3o de checkout e com otimismo</span>
    <span class="token comment">// limpa o carrinho</span>
    <span class="token function">commit</span><span class="token punctuation">(</span>types<span class="token punctuation">.</span><span class="token constant">CHECKOUT_REQUEST</span><span class="token punctuation">)</span>
    <span class="token comment">// a API da loja aceita um callback de sucesso e um callback de falha</span>
    shop<span class="token punctuation">.</span><span class="token function">buyProducts</span><span class="token punctuation">(</span>
      products<span class="token punctuation">,</span>
      <span class="token comment">// callback em caso de sucesso</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">commit</span><span class="token punctuation">(</span>types<span class="token punctuation">.</span><span class="token constant">CHECKOUT_SUCCESS</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// callback em caso de falha</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">commit</span><span class="token punctuation">(</span>types<span class="token punctuation">.</span><span class="token constant">CHECKOUT_FAILURE</span><span class="token punctuation">,</span> savedCartItems<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Observe que estamos realizando um fluxo de opera\xE7\xF5es ass\xEDncronas, e gravando os efeitos colaterais (muta\xE7\xF5es de estado) da a\xE7\xE3o confirmando-os (ou fazendo <em>commit</em> deles).</p><h2 id="despachando-acoes-em-componentes" tabindex="-1">Despachando A\xE7\xF5es em Componentes <a class="header-anchor" href="#despachando-acoes-em-componentes" aria-hidden="true">#</a></h2><p>Voc\xEA pode despachar a\xE7\xF5es em componentes com <code>this.$store.dispatch(&#39;xxx&#39;)</code>, ou usar o auxiliar <em>mapActions</em> que mapeia m\xE9todos do componente para chamadas do <code>store.dispatch</code> (esta a\xE7\xE3o requer a inje\xE7\xE3o do <em>store</em> na inst\xE2ncia raiz):</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mapActions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">&#39;increment&#39;</span><span class="token punctuation">,</span> <span class="token comment">// mapeia \`this.increment()\` para \`this.$store.dispatch(&#39;increment&#39;)\`</span>

      <span class="token comment">// \`mapActions\` tamb\xE9m suporta payloads:</span>
      <span class="token string">&#39;incrementBy&#39;</span> <span class="token comment">// mapeia \`this.incrementBy(amount)\` para \`this.$store.dispatch(&#39;incrementBy&#39;, amount)\`</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">add</span><span class="token operator">:</span> <span class="token string">&#39;increment&#39;</span> <span class="token comment">// mapeia \`this.add()\` para \`this.$store.dispatch(&#39;increment&#39;)\`</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="composicao-de-acoes" tabindex="-1">Composi\xE7\xE3o de A\xE7\xF5es <a class="header-anchor" href="#composicao-de-acoes" aria-hidden="true">#</a></h2><p>As a\xE7\xF5es geralmente s\xE3o ass\xEDncronas, ent\xE3o como sabemos quando uma a\xE7\xE3o \xE9 realizada? E mais importante, como podemos compor a\xE7\xF5es m\xFAltiplas em conjunto para lidar com fluxos ass\xEDncronos mais complexos?</p><p>A primeira coisa a saber \xE9 que o <code>store.dispatch</code> pode manipular a <em>Promise</em> retornada pela fun\xE7\xE3o manipuladora de a\xE7\xE3o acionada que tamb\xE9m retorna <em>Promise</em>:</p><div class="language-js"><pre><code><span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">actionA</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;someMutation&#39;</span><span class="token punctuation">)</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Agora voc\xEA pode fazer:</p><div class="language-js"><pre><code>store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;actionA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>E tamb\xE9m em outra a\xE7\xE3o:</p><div class="language-js"><pre><code><span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token function">actionB</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> dispatch<span class="token punctuation">,</span> commit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;actionA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;someOtherMutation&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Finalmente, se fizermos uso de <a href="https://tc39.github.io/ecmascript-asyncawait/" target="_blank" rel="noopener noreferrer">async / await</a>, podemos compor nossas a\xE7\xF5es desta maneira:</p><div class="language-js"><pre><code><span class="token comment">// assumindo que \`getData()\` e \`getOtherData()\` retornam Promises</span>

<span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">actionA</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;gotData&#39;</span><span class="token punctuation">,</span> <span class="token keyword">await</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">actionB</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> dispatch<span class="token punctuation">,</span> commit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;actionA&#39;</span><span class="token punctuation">)</span> <span class="token comment">// espera que \`actionA\` termine</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;gotOtherData&#39;</span><span class="token punctuation">,</span> <span class="token keyword">await</span> <span class="token function">getOtherData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>\xC9 poss\xEDvel para um <code>store.dispatch</code> disparar v\xE1rias fun\xE7\xF5es manipuladoras de a\xE7\xE3o em diferentes m\xF3dulos. Neste caso, o valor retornado ser\xE1 uma <em>Promise</em> que se resolve quando todas as outras fun\xE7\xF5es manipuladoras disparadas forem resolvidas.</p></blockquote>`,33),e=[o];function c(u,i,l,r,k,m){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{h as __pageData,g as default};