(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{188:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"filter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filter","aria-hidden":"true"}},[t._v("#")]),t._v(" Filter")]),t._v(" "),s("p",[t._v("用于优化 Reducer 的性能。")]),t._v(" "),s("p",[t._v("因为 Reducer 是层层组装的，所以处理每一个 Action，理论上会遍历一遍所有的小 Reducer，在一些非常复杂的场景下，这样的一次深度遍历的耗时可能会到毫秒级别（一般情况下都应该小于 1 毫秒）。那么我们需要对 Reducer 做性能优化，提前决定要不要遍历这份 Reducer 子树，减少遍历的深度和次数。")]),t._v(" "),s("p",[t._v("示例代码")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("bool "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Action action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some action'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);