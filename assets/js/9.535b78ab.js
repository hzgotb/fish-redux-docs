(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{245:function(t,a,n){"use strict";n.r(a);var s=n(0),e=Object(s.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"action"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#action","aria-hidden":"true"}},[t._v("#")]),t._v(" Action")]),t._v(" "),n("ul",[n("li",[t._v("Action contains two fields\n"),n("ul",[n("li",[t._v("type")]),t._v(" "),n("li",[t._v("payload")])])]),t._v(" "),n("li",[t._v("Recommended way of writing action\n"),n("ul",[n("li",[t._v("Create an action.dart file for a component|adapter that contains two classes\n"),n("ul",[n("li",[t._v("An enumeration class for the type field")]),t._v(" "),n("li",[t._v("An ActionCreator class is created for the creator of the Action, which helps to constrain the type of payload.")])])]),t._v(" "),n("li",[t._v("Effect Accepted Action which's type is named after "),n("code",[t._v("on{verb}")])]),t._v(" "),n("li",[t._v("Reducer ccepted Action which's type is named after "),n("code",[t._v("{verb}")])]),t._v(" "),n("li",[t._v("Sample code")])])])]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" MessageAction "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    onShare"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    shared"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageActionCreator")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" Action "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onShare")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Map"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" payload"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Action")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MessageAction"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onShare"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payload"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" payload"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" Action "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("shared")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Action")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MessageAction"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shared"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);