import{_ as a,y as e,x as s,W as o}from"./plugin-vue_export-helper.0b0d78d5.js";const g='{"title":"Migrando para vers\xE3o 4.0 da vers\xE3o 3.x","description":"","frontmatter":{},"headers":[{"level":2,"title":"Altera\xE7\xF5es Importantes","slug":"alteracoes-importantes"},{"level":3,"title":"Processo de instala\xE7\xE3o","slug":"processo-de-instalacao"},{"level":3,"title":"Suporte ao TypeScript","slug":"suporte-ao-typescript"},{"level":3,"title":"Os pacotes agora est\xE3o alinhados com Vue 3","slug":"os-pacotes-agora-estao-alinhados-com-vue-3"},{"level":3,"title":"A fun\xE7\xE3o createLogger \xE9 exportada do m\xF3dulo principal","slug":"a-funcao-createlogger-e-exportada-do-modulo-principal"},{"level":2,"title":"Novas Caracter\xEDsticas","slug":"novas-caracteristicas"},{"level":3,"title":"Nova fun\xE7\xE3o de composi\xE7\xE3o useStore","slug":"nova-funcao-de-composicao-usestore"}],"relativePath":"ptbr/guide/migrating-to-4-0-from-3-x.md","lastUpdated":1702210160132}',n={},t=o(`<h1 id="migrando-para-versao-4-0-da-versao-3-x" tabindex="-1">Migrando para vers\xE3o 4.0 da vers\xE3o 3.x <a class="header-anchor" href="#migrando-para-versao-4-0-da-versao-3-x" aria-hidden="true">#</a></h1><p>Quase todas as APIs do Vuex 4 permaneceram inalteradas desde o Vuex 3. No entanto, ainda existem algumas mudan\xE7as importantes que voc\xEA deve corrigir.</p><ul><li><a href="#alteracoes-importantes">Altera\xE7\xF5es Importantes</a><ul><li><a href="#processo-de-instalacao">Processo de instala\xE7\xE3o</a></li><li><a href="#suporte-ao-typescript">Suporte ao TypeScript</a></li><li><a href="#os-pacotes-agora-estao-alinhados-com-vue-3">Os pacotes agora est\xE3o alinhados com Vue 3</a></li><li><a href="#a-funcao-createlogger-e-exportada-do-modulo-principal">A fun\xE7\xE3o &quot;createLogger&quot; \xE9 exportada do m\xF3dulo principal</a></li></ul></li><li><a href="#novas-caracteristicas">Novas Caracter\xEDsticas</a><ul><li><a href="#nova-funcao-de-composicao-usestore">Nova fun\xE7\xE3o de composi\xE7\xE3o &quot;useStore&quot;</a></li></ul></li></ul><h2 id="alteracoes-importantes" tabindex="-1">Altera\xE7\xF5es Importantes <a class="header-anchor" href="#alteracoes-importantes" aria-hidden="true">#</a></h2><h3 id="processo-de-instalacao" tabindex="-1">Processo de instala\xE7\xE3o <a class="header-anchor" href="#processo-de-instalacao" aria-hidden="true">#</a></h3><p>Para alinhar com o novo processo de inicializa\xE7\xE3o do Vue 3, o processo de instala\xE7\xE3o do Vuex mudou. Para criar um novo <em>store</em>, os usu\xE1rios agora s\xE3o incentivados a usar a fun\xE7\xE3o createStore rec\xE9m-introduzida.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">state</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Para instalar Vuex em uma inst\xE2ncia Vue, passe o <code>store</code> em vez do Vuex.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>Embora esta n\xE3o seja tecnicamente uma altera\xE7\xE3o importante, voc\xEA ainda pode usar a sintaxe <code>new Store(...)</code>, recomendamos esta abordagem para alinhar com Vue 3 e Vue Router Next.</p></div><h3 id="suporte-ao-typescript" tabindex="-1">Suporte ao TypeScript <a class="header-anchor" href="#suporte-ao-typescript" aria-hidden="true">#</a></h3><p>Vuex 4 remove suas tipagens globais para <code>this.$store</code> dentro de um componente Vue para resolver essa <a href="https://github.com/vuejs/vuex/issues/994" target="_blank" rel="noopener noreferrer">issue #994</a>. Quando usado com TypeScript, voc\xEA deve declarar seu pr\xF3prio <em>module</em> <em>augmentation</em>.</p><p>Coloque o seguinte c\xF3digo em seu projeto para permitir que <code>this.$store</code> seja tipado corretamente:</p><div class="language-ts"><pre><code><span class="token comment">// vuex-shim.d.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ComponentCustomProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;@vue/runtime-core&#39;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Declare seus pr\xF3prios estados do store</span>
  <span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
    count<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">interface</span> <span class="token class-name">ComponentCustomProperties</span> <span class="token punctuation">{</span>
    $store<span class="token operator">:</span> Store<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Voc\xEA pode aprender mais na se\xE7\xE3o <a href="./typescript-support.html">Suporte ao TypeScript</a>.</p><h3 id="os-pacotes-agora-estao-alinhados-com-vue-3" tabindex="-1">Os pacotes agora est\xE3o alinhados com Vue 3 <a class="header-anchor" href="#os-pacotes-agora-estao-alinhados-com-vue-3" aria-hidden="true">#</a></h3><p>Os seguintes pacotes s\xE3o gerados para se alinhar aos pacotes Vue 3:</p><ul><li><code>vuex.global(.prod).js</code><ul><li>Para uso direto com <code>&lt;script src=&quot;...&quot;&gt;</code> no navegador. Exp\xF5e o Vuex global.</li><li>A distribui\xE7\xE3o (ou <em>build</em>) global \xE9 constru\xEDda como IIFE, e n\xE3o UMD, e destina-se apenas ao uso direto com <code>&lt;script src=&quot;...&quot;&gt;</code>.</li><li>Cont\xE9m branches chumbadas no c\xF3digo (ou <em>hard-coded</em>) de prod/dev e a compila\xE7\xE3o de prod \xE9 pr\xE9-minificada. Use os arquivos <code>.prod.js</code> para produ\xE7\xE3o.</li></ul></li><li><code>vuex.esm-browser(.prod).js</code><ul><li>Para uso com importa\xE7\xF5es de m\xF3dulo ES nativo (incluindo navegadores de suporte de m\xF3dulo via <code>&lt;script type=&quot;module&quot;&gt;</code>.</li></ul></li><li><code>vuex.esm-bundler.js</code><ul><li>Para uso com empacotadores como <code>webpack</code>, <code>rollup</code> e <code>parcel</code>.</li><li>Deixa os branches de prod/dev com os guardas de tipo <code>process.<wbr>env.NODE_ENV</code> (deve ser substitu\xEDdo pelo empacotador).</li><li>N\xE3o envia distribui\xE7\xF5es (ou <em>builds</em>) minificados (para ser feito junto com o resto do c\xF3digo ap\xF3s o empacotamento).</li></ul></li><li><code>vuex.cjs.js</code><ul><li>Para uso em renderiza\xE7\xE3o do lado do servidor (<em>server-side</em> <em>rendering</em>) no Node.js com <code>require()</code>.</li></ul></li></ul><h3 id="a-funcao-createlogger-e-exportada-do-modulo-principal" tabindex="-1">A fun\xE7\xE3o <code>createLogger</code> \xE9 exportada do m\xF3dulo principal <a class="header-anchor" href="#a-funcao-createlogger-e-exportada-do-modulo-principal" aria-hidden="true">#</a></h3><p>No Vuex 3, a fun\xE7\xE3o <code>createLogger</code> foi exportada de <code>vuex/dist/logger</code>, mas agora est\xE1 inclu\xEDda no pacote principal. A fun\xE7\xE3o deve ser importada diretamente do pacote <code>vuex</code>.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createLogger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
</code></pre></div><h2 id="novas-caracteristicas" tabindex="-1">Novas Caracter\xEDsticas <a class="header-anchor" href="#novas-caracteristicas" aria-hidden="true">#</a></h2><h3 id="nova-funcao-de-composicao-usestore" tabindex="-1">Nova fun\xE7\xE3o de composi\xE7\xE3o <code>useStore</code> <a class="header-anchor" href="#nova-funcao-de-composicao-usestore" aria-hidden="true">#</a></h3><p>Vuex 4 apresenta uma nova API para interagir com o <em>store</em> na API de composi\xE7\xE3o (ou <em>Composition</em> API). Voc\xEA pode usar a fun\xE7\xE3o de composi\xE7\xE3o <code>useStore</code> para recuperar o <em>store</em> dentro do gatilho (ou <em>hook</em>) <code>setup</code> do componente.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Voc\xEA pode aprender mais na se\xE7\xE3o <a href="./composition-api.html">API de Composi\xE7\xE3o</a>.</p>`,26),p=[t];function r(c,i,u,l,d,m){return s(),e("div",null,p)}var v=a(n,[["render",r]]);export{g as __pageData,v as default};