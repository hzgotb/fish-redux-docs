(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{225:function(a,t,r){"use strict";r.r(t);var e=r(0),l=Object(e.a)({},function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h2",{attrs:{id:"页面内通信"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#页面内通信","aria-hidden":"true"}},[a._v("#")]),a._v(" 页面内通信")]),a._v(" "),r("ul",[r("li",[a._v("组件|适配器内通信")]),a._v(" "),r("li",[a._v("组件|适配器间内通信")])]),a._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.nlark.com/lark/0/2018/png/82574/1545365233153-4c8105b4-050c-49e6-be02-dbf28a861caa.png",alt:"image.png | left | 747x399"}})]),a._v(" "),r("p",[a._v("Self-First-Broadcast。\n发出的 Action，自己优先处理，否则广播给其他组件和 Redux 处理。")]),a._v(" "),r("p",[a._v("最终我们通过一个简单而直观的 dispatch 完成了组件内，组件间（父到子，子到父，兄弟间等）的通信。")]),a._v(" "),r("h2",{attrs:{id:"页面间通信"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#页面间通信","aria-hidden":"true"}},[a._v("#")]),a._v(" 页面间通信")]),a._v(" "),r("ul",[r("li",[a._v("页面间通信")]),a._v(" "),r("li",[a._v("Context.appBroadcast")]),a._v(" "),r("li",[a._v("每一个页面的 PageStore 都会收到消息，各自独立负责处理。")])]),a._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.nlark.com/lark/0/2018/png/82574/1545368705599-745c46a3-f5c6-41a7-a757-1bc6f9a389d4.png",alt:"image.png | left | 691x519"}})]),a._v(" "),r("h2",{attrs:{id:"数据刷新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据刷新","aria-hidden":"true"}},[a._v("#")]),a._v(" 数据刷新")]),a._v(" "),r("ul",[r("li",[a._v("局部数据修改，自动层层触发上层数据的浅拷贝，对业务代码是透明的。")]),a._v(" "),r("li",[a._v("层层的数据的拷贝\n"),r("ul",[r("li",[a._v("一方面是对 Redux 数据修改的严格的 follow。")]),a._v(" "),r("li",[a._v("另一方面也是对数据驱动展示的严格的 follow。")])])]),a._v(" "),r("li",[a._v("数据的任何一个局部的变动，必须要让能看到这个局部的所有视图感知到。如果不拷贝，对应的视图通过新旧两份数据的比较（同一个引用），会错以为自己没有发生变化。")])]),a._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.nlark.com/lark/0/2018/png/82574/1545386668521-0081cb5f-8017-47d1-ad7c-8802bb0be8a0.png",alt:"image.png | left | 747x361"}})]),a._v(" "),r("h2",{attrs:{id:"视图刷新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#视图刷新","aria-hidden":"true"}},[a._v("#")]),a._v(" 视图刷新")]),a._v(" "),r("ul",[r("li",[a._v("扁平化通知到所有组件，组件通过 shouldUpdate 确定自己是否需要刷新")])]),a._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.nlark.com/lark/0/2018/png/82574/1545386773247-2eddfa99-e6b9-4be9-ac43-d1944ff44e9b.png",alt:"image.png | left | 747x336"}})])])},[],!1,null,null,null);t.default=l.exports}}]);