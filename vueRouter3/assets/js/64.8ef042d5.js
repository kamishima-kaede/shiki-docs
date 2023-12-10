(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{573:function(t,s,a){"use strict";a.r(s);var r=a(49),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"プログラムによるナビゲーション"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#プログラムによるナビゲーション"}},[t._v("#")]),t._v(" プログラムによるナビゲーション")]),t._v(" "),a("div",{staticClass:"vueschool"},[a("a",{attrs:{href:"https://vueschool.io/courses/vue-router-for-everyone?friend=vuerouter",target:"_blank",rel:"sponsored noopener",title:"Learn how to build powerful Single Page Applications with the Vue Router on Vue School"}},[t._v("Watch a free video course about Vue Router on Vue School")])]),t._v(" "),a("p",[t._v("宣言的なナビゲーションとしてアンカータグを作成する "),a("code",[t._v("<router-link>")]),t._v(" がありますが、ルーターのインスタンスメソッドを使ったプログラムによる方法でもそれは可能です。")]),t._v(" "),a("h4",{attrs:{id:"router-push-location-oncomplete-onabort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router-push-location-oncomplete-onabort"}},[t._v("#")]),t._v(" "),a("code",[t._v("router.push(location, onComplete?, onAbort?)")])]),t._v(" "),a("p",[a("strong",[t._v("注意: Vue インスタンスの内部では、"),a("code",[t._v("$router")]),t._v(" としてルーターインスタンスにアクセスできます。従って、"),a("code",[t._v("this.$router.push")]),t._v(" で呼ぶことができます。")])]),t._v(" "),a("p",[t._v("異なる URL へ遷移するときに "),a("code",[t._v("router.push")]),t._v(" が使えます。このメソッドは history スタックに新しいエントリを追加します。それによってユーザーがブラウザの戻るボタンをクリックした時に前の URL に戻れるようになります。")]),t._v(" "),a("p",[t._v("このメソッドは "),a("code",[t._v("<router-link>")]),t._v(" をクリックした時に内部的に呼ばれています。つまり "),a("code",[t._v('<router-link :to="...">')]),t._v(" をクリックすることは "),a("code",[t._v("router.push(...)")]),t._v(" を呼ぶことと等価です。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("宣言的")]),t._v(" "),a("th",[t._v("プログラム的")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v('<router-link :to="...">')])]),t._v(" "),a("td",[a("code",[t._v("router.push(...)")])])])])]),t._v(" "),a("p",[t._v("引数は文字列のパス、もしくは、location を記述するオブジェクトが使えます。例:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文字列パス")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// オブジェクト")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'home'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 名前付きルート")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("params")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("userId")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 結果的に /register?plan=private になる query")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'register'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("query")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plan")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'private'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("注意")]),t._v(": "),a("code",[t._v("path")]),t._v(" が渡された場合は "),a("code",[t._v("params")]),t._v(" は無視されます（"),a("code",[t._v("query")]),t._v(" は上の例の通り無視されません）。代わりに "),a("code",[t._v("name")]),t._v(" でルート名を渡すか、"),a("code",[t._v("path")]),t._v(" にすべてのパラメータを含める必要があります:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" userId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("params")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" userId "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> /user/123")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("/user/")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("userId"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> /user/123")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// これは動作"しません"')]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("params")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" userId "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> /user")]),t._v("\n")])])]),a("p",[t._v("同じルールが、"),a("code",[t._v("router-link")]),t._v(" コンポーネントの "),a("code",[t._v("to")]),t._v(" プロパティに対して適用されます。")]),t._v(" "),a("p",[t._v("2.2.0 以降では、必要に応じて、第 2 引数と第 3 引数として "),a("code",[t._v("router.push")]),t._v(" または "),a("code",[t._v("router.replace")]),t._v(" に "),a("code",[t._v("onComplete")]),t._v(" と "),a("code",[t._v("onAbort")]),t._v(" コールバックを指定します。これらのコールバックは、ナビゲーションが正常に完了したとき(すべての非同期フックが解決された後)に呼び出されるか、またはそれぞれ中止されます(現在のナビゲーションが終了する前に同じルートまたは別のルートにナビゲートされた)")]),t._v(" "),a("p",[a("strong",[t._v("注意:")]),t._v(" ルートの行き先が現在のルートと同じで、かつパラメータのみが変更されている場合(例: "),a("code",[t._v("/users/1")]),t._v(" -> "),a("code",[t._v("/users/2")]),t._v(" のようにあるプロファイルから他へ)、変更(例: ユーザー情報の取得など)に反応するために"),a("RouterLink",{attrs:{to:"/ja/guide/essentials/dynamic-matching.html#パラメーター変更の検知"}},[t._v("beforeRouteUpdate")]),t._v(" を使用しなければなりません。")],1),t._v(" "),a("h4",{attrs:{id:"router-replace-location-oncomplete-onabort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router-replace-location-oncomplete-onabort"}},[t._v("#")]),t._v(" "),a("code",[t._v("router.replace(location, onComplete?, onAbort?)")])]),t._v(" "),a("p",[t._v("これは "),a("code",[t._v("router.push")]),t._v(" のように動作しますが、異なる点は新しい history エントリを追加しないで遷移することです。この名前から推定されるように、現在のエントリを置換します。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("宣言的")]),t._v(" "),a("th",[t._v("プログラム的")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v('<router-link :to="..." replace>')])]),t._v(" "),a("td",[a("code",[t._v("router.replace(...)")])])])])]),t._v(" "),a("h4",{attrs:{id:"router-go-n"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router-go-n"}},[t._v("#")]),t._v(" "),a("code",[t._v("router.go(n)")])]),t._v(" "),a("p",[t._v("このメソッドは、history スタックの中でどのくらいステップを進めるか、もしくは戻るのか、を表す 1 つの integer をパラメーターとして受け取ります。"),a("code",[t._v("window.history.go(n)")]),t._v(" と類似しています。")]),t._v(" "),a("p",[t._v("例")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 つレコードを進める。history.forward() と同じ")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 つレコードを戻す。history.back() と同じ")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3 つレコードを進める")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// もし多くのレコードが存在しない場合、サイレントに失敗します")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"history-操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#history-操作"}},[t._v("#")]),t._v(" History 操作")]),t._v(" "),a("p",[t._v("もしかすると "),a("code",[t._v("router.push")]),t._v("、"),a("code",[t._v("router.replace")]),t._v("、"),a("code",[t._v("router.go")]),t._v(" は "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/History",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("window.history.pushState")]),t._v("、"),a("code",[t._v("window.history.replaceState")]),t._v("、"),a("code",[t._v("window.history.go")]),a("OutboundLink")],1),t._v(" と対応することにお気づきかもしれません。これらは "),a("code",[t._v("window.history")]),t._v(" API を模倣しています。")]),t._v(" "),a("p",[t._v("したがって、もしあなたが既に "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("Browser History APIs"),a("OutboundLink")],1),t._v(" について詳しい場合は、vue-router による History 操作はとても簡単です。")]),t._v(" "),a("p",[t._v("vue-router のナビゲーションメソッド ("),a("code",[t._v("push")]),t._v("、"),a("code",[t._v("replace")]),t._v("、"),a("code",[t._v("go")]),t._v(") は全てのモード ("),a("code",[t._v("history")]),t._v("、"),a("code",[t._v("hash")]),t._v("、"),a("code",[t._v("abstract")]),t._v(") で一貫して動作することは特筆すべき点です。")])])}),[],!1,null,null,null);s.default=e.exports}}]);