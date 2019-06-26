(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{208:function(t,e,r){"use strict";r.r(e);var a=r(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"什么是-fish-redux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-fish-redux","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是 Fish Redux")]),t._v(" "),r("p",[t._v("Fish Redux 是一个基于 Redux 数据管理的组装式 flutter 应用框架， 它特别适用于构建中大型的复杂应用。")]),t._v(" "),r("p",[t._v("它的特点是配置式组装。 一方面我们将一个大的页面，对视图和数据层层拆解为互相独立的 Component|Adapter，上层负责组装，下层负责实现； 另一方面将 Component|Adapter 拆分为 View，Reducer，Effect 等相互独立的上下文无关函数。")]),t._v(" "),r("p",[t._v("所以它会非常干净，易维护，易协作。")]),t._v(" "),r("p",[t._v("Fish Redux 的灵感主要来自于 Redux， Elm， Dva 这样的优秀框架。而 Fish Redux 站在巨人的肩膀上，将集中，分治，复用，隔离做的更进一步。")]),t._v(" "),r("h2",{attrs:{id:"直接使用-flutter-会面临的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#直接使用-flutter-会面临的问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 直接使用 Flutter 会面临的问题")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/flutter/flutter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flutter"),r("OutboundLink")],1),t._v(" 是 Google 推出的新一代跨平台渲染框架。\n它帮助开发者解决了跨平台，高性能，富有表现力和灵活的 UI 表达，快速开发等核心问题。\n但是如果开发大应用，还需要解决以下问题。")]),t._v(" "),r("ol",[r("li",[t._v("数据流问题")]),t._v(" "),r("li",[t._v("通信问题")]),t._v(" "),r("li",[t._v("可插拔的组件系统")]),t._v(" "),r("li",[t._v("展示和逻辑解耦")]),t._v(" "),r("li",[t._v("统一的编程模型和规范\n我们可以类比 Flutter 和 React ，事实上在中大型应用中 React 会面临的绝大多数问题，Flutter也同样面临考验。")])]),t._v(" "),r("h2",{attrs:{id:"数据流问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据流问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据流问题")]),t._v(" "),r("p",[t._v("目前社区流行的数据流方案有：")]),t._v(" "),r("ol",[r("li",[t._v("单向数据流方案，以 "),r("a",{attrs:{href:"https://github.com/reduxjs/redux",target:"_blank",rel:"noopener noreferrer"}},[t._v("ReduxJs"),r("OutboundLink")],1),t._v(" 为代表")]),t._v(" "),r("li",[t._v("响应式数据流方案，以 "),r("a",{attrs:{href:"https://github.com/mobxjs/mobx",target:"_blank",rel:"noopener noreferrer"}},[t._v("MobxJs"),r("OutboundLink")],1),t._v(" 为代表")]),t._v(" "),r("li",[t._v("其他，以 "),r("a",{attrs:{href:"https://github.com/ReactiveX/RxJS",target:"_blank",rel:"noopener noreferrer"}},[t._v("RxJS"),r("OutboundLink")],1),t._v(" 为代表")])]),t._v(" "),r("p",[t._v("那么哪一种架构最合适 Flutter ？\n我们追随了 Javascript 栈绝大多数开发者的选择 - Redux。我们是几乎100%的还原了它在 Dart 上的实现。所以我们也继承了它的优点："),r("strong",[t._v("Predictable")]),t._v("，"),r("strong",[t._v("Centralized")]),t._v("，"),r("strong",[t._v("Debuggable")]),t._v("，"),r("strong",[t._v("Flexible")]),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"通信问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通信问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 通信问题")]),t._v(" "),r("p",[t._v("直接使用 Flutter ，在 Widgets 之间传递状态和回调，随着应用复杂度的上升，会变成是一件可怕而糟糕的事情。通过 Fish Redux，依托于集中的 Redux 和分治的 Effect 模块，通过一个极简的 "),r("router-link",{attrs:{to:"/zh/guide/mechanism.html"}},[t._v("Dispatch")]),t._v(" ，完成所有的通信的诉求。")],1),t._v(" "),r("h2",{attrs:{id:"可插拔的组件系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#可插拔的组件系统","aria-hidden":"true"}},[t._v("#")]),t._v(" 可插拔的组件系统")]),t._v(" "),r("p",[t._v("Fish Redux通过一个配置式的 Dependencies ，来完成灵活的可插拔的组件系统。同时有这一配置的存在，它解放了我们手动拼装 Reducer 的繁琐工作。\n参考:")]),t._v(" "),r("ol",[r("li",[r("router-link",{attrs:{to:"/zh/guide/what's-connector.html"}},[t._v("what's-connector")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/zh/guide/connector.html"}},[t._v("connector")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/zh/guide/dependencies.html"}},[t._v("dependencies")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/zh/guide/component.html"}},[t._v("component")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/zh/guide/adapter.html"}},[t._v("adapter")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/zh/guide/what's-adapter.html"}},[t._v("what's-adapter")])],1)]),t._v(" "),r("h2",{attrs:{id:"展示和逻辑解耦"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#展示和逻辑解耦","aria-hidden":"true"}},[t._v("#")]),t._v(" 展示和逻辑解耦")]),t._v(" "),r("p",[t._v("Fish Redux从"),r("a",{attrs:{href:"https://guide.elm-lang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("elm"),r("OutboundLink")],1),t._v(" 中得到了非常多的设计灵感。\n将一个组件，拆分为相互独立的 View，Effect，Reducer 三个函数，我们优雅的解决了展示和逻辑解耦的问题。\n通过这样的拆分，我们将 UI 的表达隔离于一个函数内，它让我们更好的面向未来，一份 UI 表达它可能来自于开发者，可能来自于深度学习框架的 UI 代码生成，可能是面向移动终端，也可能是面向浏览器。它让我们有了更多的组合的可能。\n同时函数式的编程模型带来了更容易编写，更容易扩展，更容易测试，更容易维护等特性。")])])},[],!1,null,null,null);e.default=n.exports}}]);