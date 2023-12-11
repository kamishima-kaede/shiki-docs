import{_ as s,o as n,c as a,S as l}from"./chunks/framework.ac4b5791.js";const u=JSON.parse('{"title":"处理组合式函数","description":"","frontmatter":{},"headers":[],"relativePath":"zh/cookbook/composables.md","filePath":"zh/cookbook/composables.md"}'),o={name:"zh/cookbook/composables.md"},p=l(`<h1 id="dealing-with-composables" tabindex="-1">处理组合式函数 <a class="header-anchor" href="#dealing-with-composables" aria-label="Permalink to &quot;处理组合式函数 %{#dealing-with-composables}%&quot;">​</a></h1><p><a href="https://cn.vuejs.org/guide/reusability/composables.html#composables" target="_blank" rel="noreferrer">组合式函数</a>是利用 Vue 组合式 API 来封装和复用有状态逻辑的函数。无论你是自己写，还是使用<a href="https://vueuse.org/" target="_blank" rel="noreferrer">外部库</a>，或者两者都有，你都可以在 pinia store 中充分发挥组合式函数的力量。</p><h2 id="option-stores" tabindex="-1">Option Stores <a class="header-anchor" href="#option-stores" aria-label="Permalink to &quot;Option Stores %{#option-stores}%&quot;">​</a></h2><p>当定义一个 option store 时，你可以在 <code>state</code> 属性中调用组合式函数：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> useAuthStore </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">defineStore</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">auth</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">state</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> ({</span></span>
<span class="line"><span style="color:#F6F6F4;">    user</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">useLocalStorage</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">pinia/auth/login</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">bob</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">),</span></span>
<span class="line"><span style="color:#F6F6F4;">  }),</span></span>
<span class="line"><span style="color:#F6F6F4;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">export</span><span style="color:#AB5959;"> const </span><span style="color:#B07D48;">useAuthStore</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">defineStore</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">auth</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#59873A;">state</span><span style="color:#999999;">: () =&gt; ({</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">user</span><span style="color:#999999;">: </span><span style="color:#59873A;">useLocalStorage</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">pinia/auth/login</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">, </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">bob</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">),</span></span>
<span class="line"><span style="color:#999999;">  }),</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre></div><p>请记住，<strong>你只能返回可写的状态</strong> (例如，一个 <code>ref()</code>) 。下面是一些可用的组合式函数的示例：</p><ul><li><a href="https://vueuse.org/core/useLocalStorage/" target="_blank" rel="noreferrer">useLocalStorage</a></li><li><a href="https://vueuse.org/core/useAsyncState/" target="_blank" rel="noreferrer">useAsyncState</a></li></ul><p>下面是一些不可在 option store 中使用的组合式函数 (但可在 setup store 中使用) ：</p><ul><li><a href="https://vueuse.org/core/useMediaControls/" target="_blank" rel="noreferrer">useMediaControls</a>: exposes functions</li><li><a href="https://vueuse.org/core/useMemory/" target="_blank" rel="noreferrer">useMemoryInfo</a>: exposes readonly data</li><li><a href="https://vueuse.org/core/useEyeDropper/" target="_blank" rel="noreferrer">useEyeDropper</a>: exposes readonly data and functions</li></ul><h2 id="setup-stores" tabindex="-1">Setup Stores <a class="header-anchor" href="#setup-stores" aria-label="Permalink to &quot;Setup Stores %{#setup-stores}%&quot;">​</a></h2><p>另外，当定义一个 setup store 时，你几乎可以使用任何组合式函数，因为每一个属性都会被辨别为 state 、action 或者 getter：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { defineStore, skipHydrate } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">pinia</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { useMediaControls } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">@vueuse/core</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> useVideoPlayer </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">defineStore</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">video</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 我们不会直接暴露这个元素</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> videoElement </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">ref</span><span style="color:#F6F6F4;">&lt;</span><span style="color:#FFB86C;font-style:italic;">HTMLVideoElement</span><span style="color:#F6F6F4;">&gt;()</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> src </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">ref</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">/data/video.mp4</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> { playing, volume, currentTime, togglePictureInPicture } </span><span style="color:#F286C4;">=</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">useMediaControls</span><span style="color:#F6F6F4;">(video, { src })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">loadVideo</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">element</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">HTMLVideoElement</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">src</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">string</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    videoElement.value </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> element</span></span>
<span class="line"><span style="color:#F6F6F4;">    src.value </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> src</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    src,</span></span>
<span class="line"><span style="color:#F6F6F4;">    playing,</span></span>
<span class="line"><span style="color:#F6F6F4;">    volume,</span></span>
<span class="line"><span style="color:#F6F6F4;">    currentTime,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    loadVideo,</span></span>
<span class="line"><span style="color:#F6F6F4;">    togglePictureInPicture,</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineStore</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">skipHydrate</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">pinia</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useMediaControls</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">@vueuse/core</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#AB5959;"> const </span><span style="color:#B07D48;">useVideoPlayer</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">defineStore</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">video</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#999999;">()</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// 我们不会直接暴露这个元素</span></span>
<span class="line"><span style="color:#AB5959;">  const </span><span style="color:#B07D48;">videoElement</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">ref</span><span style="color:#999999;">&lt;</span><span style="color:#2E8F82;">HTMLVideoElement</span><span style="color:#999999;">&gt;()</span></span>
<span class="line"><span style="color:#AB5959;">  const </span><span style="color:#B07D48;">src</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">ref</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">/data/video.mp4</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#AB5959;">  const </span><span style="color:#999999;">{</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">playing</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">volume</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">currentTime</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">togglePictureInPicture</span><span style="color:#AB5959;"> </span><span style="color:#999999;">}</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span></span>
<span class="line"><span style="color:#AB5959;">    </span><span style="color:#59873A;">useMediaControls</span><span style="color:#999999;">(</span><span style="color:#B07D48;">video</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{ </span><span style="color:#B07D48;">src</span><span style="color:#999999;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">  function </span><span style="color:#59873A;">loadVideo</span><span style="color:#999999;">(</span><span style="color:#B07D48;">element</span><span style="color:#999999;">: </span><span style="color:#2E8F82;">HTMLVideoElement</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">src</span><span style="color:#999999;">: </span><span style="color:#2E8F82;">string</span><span style="color:#999999;">)</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#AB5959;">    </span><span style="color:#B07D48;">videoElement</span><span style="color:#999999;">.</span><span style="color:#B07D48;">value</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">element</span></span>
<span class="line"><span style="color:#AB5959;">    </span><span style="color:#B07D48;">src</span><span style="color:#999999;">.</span><span style="color:#B07D48;">value</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">src</span></span>
<span class="line"><span style="color:#AB5959;">  </span><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">  </span><span style="color:#1E754F;">return</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#B07D48;">src</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#B07D48;">playing</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#B07D48;">volume</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#B07D48;">currentTime</span><span style="color:#999999;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#B07D48;">loadVideo</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#B07D48;">togglePictureInPicture</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">  }</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre></div><h2 id="ssr" tabindex="-1">服务端渲染 <a class="header-anchor" href="#ssr" aria-label="Permalink to &quot;服务端渲染 %{#ssr}%&quot;">​</a></h2><p>当处理<a href="./../ssr/">服务端渲染</a>时，你有一些需要额外注意的内容，以便在 store 中使用组合式函数。</p><p>在 <a href="#option-stores">Option Store</a> 中，你需要定义一个 <code>hydrate()</code> 函数。当 store 在客户端 (浏览器) 上被实例化的过程中，创建 store 时有一个可用的初始状态时，这个函数就会被调用。我们需要定义这个函数的原因是，在这种情况下，<code>state()</code> 是不会被调用的。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { defineStore, skipHydrate } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">pinia</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { useLocalStorage } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">@vueuse/core</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> useAuthStore </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">defineStore</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">auth</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">state</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> ({</span></span>
<span class="line"><span style="color:#F6F6F4;">    user</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">useLocalStorage</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">pinia/auth/login</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">bob</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">),</span></span>
<span class="line"><span style="color:#F6F6F4;">  }),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">hydrate</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">state</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">initialState</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 在这种情况下，我们可以完全忽略初始状态</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 因为我们想从浏览器中读取数值。</span></span>
<span class="line"><span style="color:#F6F6F4;">    state.user </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">useLocalStorage</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">pinia/auth/login</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">bob</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineStore</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">skipHydrate</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">pinia</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useLocalStorage</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">@vueuse/core</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#AB5959;"> const </span><span style="color:#B07D48;">useAuthStore</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">defineStore</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">auth</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#59873A;">state</span><span style="color:#999999;">: () =&gt; ({</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">user</span><span style="color:#999999;">: </span><span style="color:#59873A;">useLocalStorage</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">pinia/auth/login</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">, </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">bob</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">),</span></span>
<span class="line"><span style="color:#999999;">  }),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#59873A;">hydrate</span><span style="color:#999999;">(</span><span style="color:#B07D48;">state</span><span style="color:#999999;">, </span><span style="color:#B07D48;">initialState</span><span style="color:#999999;">) {</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#A0ADA0;">// 在这种情况下，我们可以完全忽略初始状态</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#A0ADA0;">// 因为我们想从浏览器中读取数值。</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#B07D48;">state</span><span style="color:#999999;">.</span><span style="color:#B07D48;">user</span><span style="color:#999999;"> = </span><span style="color:#59873A;">useLocalStorage</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">pinia/auth/login</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">, </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">bob</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">  },</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre></div><p>在 <a href="#setup-stores">Setup Store</a> 中，对于任何不应该从初始状态中接收的 state 属性 你都需要使用一个名为 <code>skipHydrate()</code> 的辅助函数。与 option store 不同，setup store 不能直接<strong>跳过调用 <code>state()</code></strong>，所以我们用 <code>skipHydrate()</code> 标记那些不能被激活的属性。请注意，这只适用于可写的响应式属性：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { defineStore, skipHydrate } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">pinia</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { useEyeDropper, useLocalStorage } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">@vueuse/core</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> useColorStore </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">defineStore</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">colors</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> { isSupported, open, sRGBHex } </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">useEyeDropper</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> lastColor </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">useLocalStorage</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">lastColor</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, sRGBHex)</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// ...</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    lastColor</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">skipHydrate</span><span style="color:#F6F6F4;">(lastColor), </span><span style="color:#7B7F8B;">// Ref&lt;string&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">    open, </span><span style="color:#7B7F8B;">// Function</span></span>
<span class="line"><span style="color:#F6F6F4;">    isSupported, </span><span style="color:#7B7F8B;">// boolean (非响应式)</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineStore</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">skipHydrate</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">pinia</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useEyeDropper</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useLocalStorage</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">@vueuse/core</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">useColorStore</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">defineStore</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">colors</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#999999;">()</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#AB5959;">  const </span><span style="color:#999999;">{</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">isSupported</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">open</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">sRGBHex</span><span style="color:#AB5959;"> </span><span style="color:#999999;">}</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">useEyeDropper</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#AB5959;">  const </span><span style="color:#B07D48;">lastColor</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">useLocalStorage</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">lastColor</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">sRGBHex</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// ...</span></span>
<span class="line"><span style="color:#AB5959;">  </span><span style="color:#1E754F;">return</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">lastColor</span><span style="color:#999999;">: </span><span style="color:#59873A;">skipHydrate</span><span style="color:#999999;">(</span><span style="color:#B07D48;">lastColor</span><span style="color:#999999;">), </span><span style="color:#A0ADA0;">// Ref&lt;string&gt;</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#B07D48;">open</span><span style="color:#999999;">, </span><span style="color:#A0ADA0;">// Function</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#B07D48;">isSupported</span><span style="color:#999999;">, </span><span style="color:#A0ADA0;">// boolean (非响应式)</span></span>
<span class="line"><span style="color:#999999;">  }</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre></div>`,18),e=[p];function t(r,c,y,F,i,B){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{u as __pageData,d as default};