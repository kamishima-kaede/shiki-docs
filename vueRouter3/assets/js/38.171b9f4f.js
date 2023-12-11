(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{546:function(t,a,e){"use strict";e.r(a);var s=e(49),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"navigation-guards"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#navigation-guards"}},[t._v("#")]),t._v(" Navigation Guards")]),t._v(" "),e("p",[t._v("As the name suggests, the navigation guards provided by "),e("code",[t._v("vue-router")]),t._v(" are primarily used to guard navigations either by redirecting it or canceling it. There are a number of ways to hook into the route navigation process: globally, per-route, or in-component.")]),t._v(" "),e("p",[t._v("Remember that "),e("strong",[t._v("params or query changes won't trigger enter/leave navigation guards")]),t._v(". You can either "),e("RouterLink",{attrs:{to:"/guide/essentials/dynamic-matching.html#reacting-to-params-changes"}},[t._v("watch the "),e("code",[t._v("$route")]),t._v(" object")]),t._v(" to react to those changes, or use the "),e("code",[t._v("beforeRouteUpdate")]),t._v(" in-component guard.")],1),t._v(" "),e("h2",{attrs:{id:"global-before-guards"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#global-before-guards"}},[t._v("#")]),t._v(" Global Before Guards")]),t._v(" "),e("div",{staticClass:"vueschool"},[e("a",{attrs:{href:"https://vueschool.io/lessons/how-to-configure-an-authentication-middleware-route-guard-with-vue-router?friend=vuerouter",target:"_blank",rel:"sponsored noopener",title:"Learn how to create an authentication middleware with a global route guard on Vue School"}},[t._v("Learn how navigation guards works with a free lesson on Vue School")])]),t._v(" "),e("p",[t._v("You can register global before guards using "),e("code",[t._v("router.beforeEach")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Global before guards are called in creation order, whenever a navigation is triggered. Guards may be resolved asynchronously, and the navigation is considered "),e("strong",[t._v("pending")]),t._v(" before all hooks have been resolved.")]),t._v(" "),e("p",[t._v("Every guard function receives three arguments:")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[e("code",[t._v("to: Route")])]),t._v(": the target "),e("RouterLink",{attrs:{to:"/api/#the-route-object"}},[t._v("Route Object")]),t._v(" being navigated to.")],1)]),t._v(" "),e("li",[e("p",[e("strong",[e("code",[t._v("from: Route")])]),t._v(": the current route being navigated away from.")])]),t._v(" "),e("li",[e("p",[e("strong",[e("code",[t._v("next: Function")])]),t._v(": this function must be called to "),e("strong",[t._v("resolve")]),t._v(" the hook. The action depends on the arguments provided to "),e("code",[t._v("next")]),t._v(":")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[e("code",[t._v("next()")])]),t._v(": move on to the next hook in the pipeline. If no hooks are left, the navigation is "),e("strong",[t._v("confirmed")]),t._v(".")])]),t._v(" "),e("li",[e("p",[e("strong",[e("code",[t._v("next(false)")])]),t._v(": abort the current navigation. If the browser URL was changed (either manually by the user or via back button), it will be reset to that of the "),e("code",[t._v("from")]),t._v(" route.")])]),t._v(" "),e("li",[e("p",[e("strong",[e("code",[t._v("next('/')")]),t._v(" or "),e("code",[t._v("next({ path: '/' })")])]),t._v(": redirect to a different location. The current navigation will be aborted and a new one will be started. You can pass any location object to "),e("code",[t._v("next")]),t._v(", which allows you to specify options like "),e("code",[t._v("replace: true")]),t._v(", "),e("code",[t._v("name: 'home'")]),t._v(" and any option used in "),e("RouterLink",{attrs:{to:"/api/#to"}},[e("code",[t._v("router-link")]),t._v("'s "),e("code",[t._v("to")]),t._v(" prop")]),t._v(" or "),e("RouterLink",{attrs:{to:"/api/#router-push"}},[e("code",[t._v("router.push")])])],1)]),t._v(" "),e("li",[e("p",[e("strong",[e("code",[t._v("next(error)")])]),t._v(": (2.4.0+) if the argument passed to "),e("code",[t._v("next")]),t._v(" is an instance of "),e("code",[t._v("Error")]),t._v(", the navigation will be aborted and the error will be passed to callbacks registered via "),e("RouterLink",{attrs:{to:"/api/#router-onerror"}},[e("code",[t._v("router.onError()")])]),t._v(".")],1)])])])]),t._v(" "),e("p",[e("strong",[t._v("Make sure that the "),e("code",[t._v("next")]),t._v(" function is called exactly once in any given pass through the navigation guard. It can appear more than once, but only if the logical paths have no overlap, otherwise the hook will never be resolved or produce errors.")]),t._v(" Here is an example of redirecting to user to "),e("code",[t._v("/login")]),t._v(" if they are not authenticated:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// BAD")]),t._v("\nrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Login'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("isAuthenticated"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Login'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if the user is not authenticated, `next` is called twice")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GOOD")]),t._v("\nrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Login'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("isAuthenticated"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Login'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"global-resolve-guards"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#global-resolve-guards"}},[t._v("#")]),t._v(" Global Resolve Guards")]),t._v(" "),e("p",[t._v("You can register a global guard with "),e("code",[t._v("router.beforeResolve")]),t._v(". This is similar to "),e("code",[t._v("router.beforeEach")]),t._v(", with the difference that resolve guards will be called right before the navigation is confirmed, "),e("strong",[t._v("after all in-component guards and async route components are resolved")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"global-after-hooks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#global-after-hooks"}},[t._v("#")]),t._v(" Global After Hooks")]),t._v(" "),e("p",[t._v("You can also register global after hooks, however unlike guards, these hooks do not get a "),e("code",[t._v("next")]),t._v(" function and cannot affect the navigation:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("afterEach")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"per-route-guard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#per-route-guard"}},[t._v("#")]),t._v(" Per-Route Guard")]),t._v(" "),e("p",[t._v("You can define "),e("code",[t._v("beforeEnter")]),t._v(" guards directly on a route's configuration object:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("routes")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("component")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("beforeEnter")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("These guards have the exact same signature as global before guards.")]),t._v(" "),e("h2",{attrs:{id:"in-component-guards"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#in-component-guards"}},[t._v("#")]),t._v(" In-Component Guards")]),t._v(" "),e("p",[t._v("Finally, you can directly define route navigation guards inside route components (the ones passed to the router configuration) with the following options:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("beforeRouteEnter")])]),t._v(" "),e("li",[e("code",[t._v("beforeRouteUpdate")])]),t._v(" "),e("li",[e("code",[t._v("beforeRouteLeave")])])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("template")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteEnter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// called before the route that renders this component is confirmed.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// does NOT have access to `this` component instance,")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// because it has not been created yet when this guard is called!")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteUpdate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// called when the route that renders this component has changed.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This component being reused (by using an explicit `key`) in the new route or not doesn't change anything.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For example, for a route with dynamic params `/foo/:id`, when we")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will be reused (unless you provided a `key` to `<router-view>`), and this hook will be called when that happens.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// has access to `this` component instance.")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteLeave")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// called when the route that renders this component is about to")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// be navigated away from.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// has access to `this` component instance.")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The "),e("code",[t._v("beforeRouteEnter")]),t._v(" guard does "),e("strong",[t._v("NOT")]),t._v(" have access to "),e("code",[t._v("this")]),t._v(", because the guard is called before the navigation is confirmed, thus the new entering component has not even been created yet.")]),t._v(" "),e("p",[t._v("However, you can access the instance by passing a callback to "),e("code",[t._v("next")]),t._v(". The callback will be called when the navigation is confirmed, and the component instance will be passed to the callback as the argument:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteEnter")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// access to component instance via `vm`")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Note that "),e("code",[t._v("beforeRouteEnter")]),t._v(" is the only guard that supports passing a callback to "),e("code",[t._v("next")]),t._v(". For "),e("code",[t._v("beforeRouteUpdate")]),t._v(" and "),e("code",[t._v("beforeRouteLeave")]),t._v(", "),e("code",[t._v("this")]),t._v(" is already available, so passing a callback is unnecessary and therefore "),e("em",[t._v("not supported")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteUpdate")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// just use `this`")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The "),e("strong",[t._v("leave guard")]),t._v(" is usually used to prevent the user from accidentally leaving the route with unsaved edits. The navigation can be canceled by calling "),e("code",[t._v("next(false)")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteLeave")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" answer "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("confirm")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Do you really want to leave? you have unsaved changes!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("answer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("If you are using mixins that add in-component navigation guards, make sure to add the mixin "),e("strong",[t._v("after installing the router plugin")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("Vue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nVue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mixin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteUpdate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"the-full-navigation-resolution-flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-full-navigation-resolution-flow"}},[t._v("#")]),t._v(" The Full Navigation Resolution Flow")]),t._v(" "),e("ol",[e("li",[t._v("Navigation triggered.")]),t._v(" "),e("li",[t._v("Call "),e("code",[t._v("beforeRouteLeave")]),t._v(" guards in deactivated components.")]),t._v(" "),e("li",[t._v("Call global "),e("code",[t._v("beforeEach")]),t._v(" guards.")]),t._v(" "),e("li",[t._v("Call "),e("code",[t._v("beforeRouteUpdate")]),t._v(" guards in reused components.")]),t._v(" "),e("li",[t._v("Call "),e("code",[t._v("beforeEnter")]),t._v(" in route configs.")]),t._v(" "),e("li",[t._v("Resolve async route components.")]),t._v(" "),e("li",[t._v("Call "),e("code",[t._v("beforeRouteEnter")]),t._v(" in activated components.")]),t._v(" "),e("li",[t._v("Call global "),e("code",[t._v("beforeResolve")]),t._v(" guards.")]),t._v(" "),e("li",[t._v("Navigation confirmed.")]),t._v(" "),e("li",[t._v("Call global "),e("code",[t._v("afterEach")]),t._v(" hooks.")]),t._v(" "),e("li",[t._v("DOM updates triggered.")]),t._v(" "),e("li",[t._v("Call callbacks passed to "),e("code",[t._v("next")]),t._v(" in "),e("code",[t._v("beforeRouteEnter")]),t._v(" guards with instantiated instances.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);