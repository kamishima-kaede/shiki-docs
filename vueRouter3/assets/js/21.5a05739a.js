(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{530:function(t,e,a){"use strict";a.r(e);var s=a(49),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"intercepteurs-de-navigation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intercepteurs-de-navigation"}},[t._v("#")]),t._v(" Intercepteurs de navigation")]),t._v(" "),a("p",[t._v("Comme le nom le suggère, l'interception de navigation fournie par "),a("code",[t._v("vue-router")]),t._v(" est principalement utilisée pour intercepter la navigation avec des redirections ou des annulations d'accès. Il y a plusieurs hooks disponibles lors du processus de navigation : globaux, par route ou par composant.")]),t._v(" "),a("p",[t._v("Souvenez-vous de cela : "),a("strong",[t._v("le changement de paramètre ou de query ne va pas lancer d'interception d'entrée ou de sortie de navigation")]),t._v(". Vous pouvez toujours "),a("RouterLink",{attrs:{to:"/fr/guide/essentials/dynamic-matching.html#reacting-to-params-changes"}},[t._v("observer l'objet "),a("code",[t._v("$route")])]),t._v(" pour réagir à ces changements, ou utiliser la fonction "),a("code",[t._v("beforeRouteUpdate")]),t._v(" d'une interception par composant.")],1),t._v(" "),a("h2",{attrs:{id:"interception-globale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interception-globale"}},[t._v("#")]),t._v(" Interception globale")]),t._v(" "),a("p",[t._v("Vous pouvez abonner une interception d'entrée en utilisant "),a("code",[t._v("router.beforeEach")]),t._v(" :")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Les interceptions d'entrées globales sont appelées lors de l'ordre de création, chaque fois qu'une navigation est déclenchée. Les interceptions peuvent être résolues de manière asynchrone, et la navigation est considérée comme "),a("strong",[t._v("en attente")]),t._v(" avant que tous les hooks ne soient résolus.")]),t._v(" "),a("p",[t._v("Chaque fonction d'interception reçoit trois arguments :")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[a("code",[t._v("to: Route")])]),t._v(": L'"),a("RouterLink",{attrs:{to:"/fr/api/#the-route-object"}},[t._v("objet "),a("code",[t._v("Route")])]),t._v(" cible vers lequel on navigue.")],1)]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("from: Route")])]),t._v(": la route courante depuis laquelle nous venons de naviguer.")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("next: Function")])]),t._v(": cette fonction doit être appelée pour "),a("strong",[t._v("résoudre")]),t._v(" le hook. L'action dépend des arguments fournis à "),a("code",[t._v("next")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[a("code",[t._v("next()")])]),t._v(": se déplacer jusqu'au prochain hook du workflow. S'il ne reste aucun hook, la navigation est "),a("strong",[t._v("confirmée")]),t._v(".")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("next(false)")])]),t._v(": annuler la navigation courante. Si l'URL du navigateur avait changé (manuellement par l'utilisateur ou via le bouton retour du navigateur), il sera remis à sa valeur de route de "),a("code",[t._v("from")]),t._v(".")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("next('/')")]),t._v(" ou "),a("code",[t._v("next({ path: '/' })")])]),t._v(": redirige vers le nouvel URL. La navigation courante va être arrêtée et une nouvelle va se lancer. Vous pouvez passer n'importe quel objet à "),a("code",[t._v("next")]),t._v(", vous permettant ainsi de spécifier des options comme "),a("code",[t._v("replace: true")]),t._v(", "),a("code",[t._v("name: 'home'")]),t._v(" et n'importe quelles options dans "),a("RouterLink",{attrs:{to:"/fr/api/#to"}},[t._v("la prop "),a("code",[t._v("to")]),t._v(" du "),a("code",[t._v("router-link")])]),t._v(" ou "),a("RouterLink",{attrs:{to:"/fr/api/#routeur-push"}},[a("code",[t._v("router.push")])]),t._v(".")],1)]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("next(error)")])]),t._v(": (2.4.0+) si l'argument passé à "),a("code",[t._v("next")]),t._v(" est une instance de "),a("code",[t._v("Error")]),t._v(", la navigation va s'arrêter et l'erreur sera passée aux fonctions de rappel enregistrées via "),a("RouterLink",{attrs:{to:"/fr/api/#router-onerror"}},[a("code",[t._v("router.onError()")])]),t._v(".")],1)])])])]),t._v(" "),a("p",[a("strong",[t._v("Assurez-vous de toujours appeler la fonction "),a("code",[t._v("next")]),t._v(", sinon le hook ne sera jamais résolu.")])]),t._v(" "),a("h2",{attrs:{id:"resolutions-des-interceptions-globales"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolutions-des-interceptions-globales"}},[t._v("#")]),t._v(" Résolutions des interceptions globales")]),t._v(" "),a("p",[t._v("Vous pouvez abonner une interception globale avec "),a("code",[t._v("router.beforeResolve")]),t._v(". Ceci est similaire a "),a("code",[t._v("router.beforeEach")]),t._v(", mais la différence est qu'elle sera appelée juste après que la navigation soit confirmée, "),a("strong",[t._v("après que toutes les interceptions par composants et les composants de route asynchrone ait été résolu")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"hooks-de-sortie-globaux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks-de-sortie-globaux"}},[t._v("#")]),t._v(" Hooks de sortie globaux")]),t._v(" "),a("p",[t._v("Vous pouvez également abonner des hooks de sortie, cependant, à la différence des interceptions, ces hooks ne fournissent pas de fonction "),a("code",[t._v("next")]),t._v(" et n'affecte pas la navigation :")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("afterEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"interception-par-route"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interception-par-route"}},[t._v("#")]),t._v(" Interception par route")]),t._v(" "),a("p",[t._v("Vous pouvez définir l'interception "),a("code",[t._v("beforeEnter")]),t._v(" directement sur l'objet de configuration d'une route :")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("routes")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("beforeEnter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Ces interceptions ont exactement le même effet que les interceptions globales d'entrée.")]),t._v(" "),a("h2",{attrs:{id:"interception-par-composant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interception-par-composant"}},[t._v("#")]),t._v(" Interception par composant")]),t._v(" "),a("p",[t._v("Enfin, vous pouvez directement définir une interception de navigation a l'intérieur du composant lui-même (celui passé à la configuration du routeur) avec les options suivantes :")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("beforeRouteEnter")])]),t._v(" "),a("li",[a("code",[t._v("beforeRouteUpdate")])]),t._v(" "),a("li",[a("code",[t._v("beforeRouteLeave")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteEnter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// appelée avant que la route vers le composant soit confirmée.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cette fonction n'a pas accès à l'instance du composant avec `this`,")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// car le composant n'a pas encore été créé quand cette interception est appelée !")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteUpdate")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// appelée quand la route qui fait le rendu de ce composant change,")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mais que ce composant est utilisé de nouveau dans la nouvelle route.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Par exemple, pour une route avec le paramètre dynamique `/foo/:id`, quand nous")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// naviguons entre `/foo/1` et `/foo/2`, la même instance du composant `Foo`")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// va être réutilisée, et ce hook va être appelé quand cela arrivera.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ce hook a accès à l'instance de ce composant via `this`.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteLeave")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// appelée quand la route qui fait le rendu de ce composant est sur le point")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// d'être laissée en faveur de la prochaine route.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// elle a accès à l'instance de ce composant via `this`.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("L'interception "),a("code",[t._v("beforeRouteEnter")]),t._v(" "),a("strong",[t._v("n'a PAS")]),t._v(" accès à "),a("code",[t._v("this")]),t._v(", car l'interception est appelée avant que la navigation soit confirmée, et le nouveau composant entrant n'a même pas encore été créé.")]),t._v(" "),a("p",[t._v("Cependant, vous pouvez accéder à l'instance en passant dans la fonction de rappel "),a("code",[t._v("next")]),t._v(". Cette fonction de rappel va être appelée quand la navigation sera confirmée, et l'instance du composant sera passée à la fonction de rappel en tant qu'argument :")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteEnter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// accès à l'instance du composant via `vm`")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Notez que "),a("code",[t._v("beforeRouteEnter")]),t._v(" est la seule interception qui supporte une fonction de rappelle dans "),a("code",[t._v("next")]),t._v(". Pour "),a("code",[t._v("beforeRouteUpdate")]),t._v(" et "),a("code",[t._v("beforeRouteLeave")]),t._v(", "),a("code",[t._v("this")]),t._v(" est déjà disponible. Le passage d'une fonction de rappel n'étant pas nécessaire, il n'est donc pas "),a("em",[t._v("supporté")]),t._v(" :")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteUpdate")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// utiliser juste `this`")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("L'"),a("strong",[t._v("interception de sortie")]),t._v(" est habituellement utilisée pour empécher l'utilisateur de quitter la route sans avoir sauvegardé ses changements. La navigation peut être annulée en appelant "),a("code",[t._v("next(false)")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteLeave")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" answer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("confirm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Voulez-vous vraiment quitter cette page ? Vos changements seront perdus.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("answer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"le-flux-de-resolution-de-navigation-complet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#le-flux-de-resolution-de-navigation-complet"}},[t._v("#")]),t._v(" Le flux de résolution de navigation complet")]),t._v(" "),a("ol",[a("li",[t._v("La navigation est demandée.")]),t._v(" "),a("li",[t._v("Appel de l'interception de sortie des composants désactivés.")]),t._v(" "),a("li",[t._v("Appel des interceptions globales "),a("code",[t._v("beforeEach")]),t._v(".")]),t._v(" "),a("li",[t._v("Appel des interceptions "),a("code",[t._v("beforeRouteUpdate")]),t._v(" pour les composants réutilisés.")]),t._v(" "),a("li",[t._v("Appel de "),a("code",[t._v("beforeEnter")]),t._v(" dans la configuration de route.")]),t._v(" "),a("li",[t._v("Résolution des composants de route asynchrones.")]),t._v(" "),a("li",[t._v("Appel de "),a("code",[t._v("beforeRouteEnter")]),t._v(" dans les composants activés.")]),t._v(" "),a("li",[t._v("Appel des interceptions "),a("code",[t._v("beforeResolve")]),t._v(".")]),t._v(" "),a("li",[t._v("Confirmation de la navigation.")]),t._v(" "),a("li",[t._v("Appel des hooks globaux "),a("code",[t._v("afterEach")]),t._v(".")]),t._v(" "),a("li",[t._v("Modification du DOM demandée.")]),t._v(" "),a("li",[t._v("Appel des fonctions de rappel passées à "),a("code",[t._v("next")]),t._v(" dans l'interception "),a("code",[t._v("beforeRouteEnter")]),t._v(" avec l'instance instanciée.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);