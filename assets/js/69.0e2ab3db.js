(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{210:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"写一个页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写一个页面","aria-hidden":"true"}},[t._v("#")]),t._v(" 写一个页面")]),t._v(" "),s("p",[t._v("假设我们要写一个登陆页面。")]),t._v(" "),s("h2",{attrs:{id:"page"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page","aria-hidden":"true"}},[t._v("#")]),t._v(" Page")]),t._v(" "),s("p",[t._v("我们首先创建一个 "),s("code",[t._v("lib/pages/sign_in/page.dart")]),t._v(" 文件，然后引入 "),s("code",[t._v("fish_redux")]),t._v(" 。")]),t._v(" "),s("p",[t._v("接着，我们需要定义一个 "),s("code",[t._v("Page")]),t._v(" 类的派生类 "),s("code",[t._v("SignInPage")]),t._v(" 。")]),t._v(" "),s("p",[t._v("需要注意的是，一个 "),s("code",[t._v("Page")]),t._v(" 最少要具有初始化状态的函数 "),s("code",[t._v("initState")]),t._v(" 和视图构建函数 "),s("code",[t._v("viewBuilder")]),t._v(" 。")]),t._v(" "),s("p",[t._v("为了更好的管理，我们把不同的部分写成一个文件：")]),t._v(" "),s("ol",[s("li",[t._v("为 "),s("code",[t._v("initState")]),t._v(" 创建 "),s("code",[t._v("lib/pages/sign_in/state.dart")]),t._v("。")]),t._v(" "),s("li",[t._v("为 "),s("code",[t._v("viewBuilder")]),t._v(" 创建 "),s("code",[t._v("lib/pages/sign_in/view.dart")]),t._v("。")])]),t._v(" "),s("p",[t._v("然后在同目录下的 "),s("code",[t._v("page.dart")]),t._v(" 引入。")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package:fish_redux/fish_redux.dart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'state.dart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'view.dart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SignInPage")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Page")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SignInState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Map"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("dynamic")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignInPage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    initState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" initState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" viewBuilder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state","aria-hidden":"true"}},[t._v("#")]),t._v(" State")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("state.dart")]),t._v(" 内先定义一个实现 "),s("code",[t._v("Cloneable")]),t._v(" 类的 "),s("code",[t._v("SignInState")]),t._v(" 类，根据需求，声明类成员，以及实现一个 "),s("code",[t._v("clone")]),t._v(" 的方法。")]),t._v(" "),s("p",[t._v("例如，登录页有两个 "),s("code",[t._v("TextField")]),t._v(" ，一个账号，一个密码，那么我们需要两个 "),s("code",[t._v("TextEditingController")]),t._v(" 。")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SignInState")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cloneable")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SignInState"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  TextEditingController accountController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  TextEditingController passwordController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  SignInState "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignInState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accountController "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" accountController\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("passwordController "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" passwordController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("然后，定义一个 "),s("code",[t._v("initState")]),t._v(" 函数，它接受一个参数，参数类型同 "),s("code",[t._v("Page")]),t._v(" 的第二个泛型类型一致，返回一个 "),s("code",[t._v("SignInState")]),t._v(" 实例。")]),t._v(" "),s("p",[t._v("同时我们初始化类成员的值。")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("SignInState initState"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Map"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("dynamic")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignInState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accountController "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextEditingController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("passwordController "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextEditingController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"view"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#view","aria-hidden":"true"}},[t._v("#")]),t._v(" View")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("view.start")]),t._v(" 内，我们需要定义一个 "),s("code",[t._v("viewBuilder")]),t._v(" 函数。")]),t._v(" "),s("p",[t._v("这个函数接收三个参数：")]),t._v(" "),s("ol",[s("li",[t._v("SignInState state")]),t._v(" "),s("li",[t._v("Dispatch dispatch")]),t._v(" "),s("li",[t._v("ViewService viewService")])]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package:fish_redux/fish_redux.dart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'action.dart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'state.dart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nWidget "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("viewBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SignInState state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Dispatch dispatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ViewService viewService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Scaffold")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SafeArea")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Center")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Column")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Widget"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Account TextField")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Container")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n              margin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" EdgeInsets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromLTRB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("TextField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uidController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                decoration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("InputDecoration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                  labelText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Account'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  Password TextField")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Container")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n              margin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" EdgeInsets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromLTRB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("TextField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pwdController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                decoration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("InputDecoration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                  labelText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Password'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// LoginButton")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Container")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n              margin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" EdgeInsets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromLTRB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("180.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("48.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RaisedButton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xFFffd84d")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                onPressed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SignInActionCreator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("login")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'LOGIN'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("TextStyle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fontSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("从上面的代码可以看出，我们在 "),s("code",[t._v("viewBuilder")]),t._v(" 函数中使用了在 "),s("code",[t._v("State")]),t._v(" 里定义的数据。")]),t._v(" "),s("p",[t._v("可能还注意到了，我在 "),s("code",[t._v("LoginButton")]),t._v(" 的点击事件中使用了 "),s("code",[t._v("dispatch")]),t._v(" 。接下来我们要在 "),s("code",[t._v("Action")]),t._v(" 部分去定义。")]),t._v(" "),s("h2",{attrs:{id:"action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#action","aria-hidden":"true"}},[t._v("#")]),t._v(" Action")]),t._v(" "),s("p",[t._v("首先，创建 "),s("code",[t._v("lib/pages/sign_in/action.dart")]),t._v(" 。")]),t._v(" "),s("p",[t._v("然后，我先定义关于 "),s("code",[t._v("Action")]),t._v(" 类型的枚举类 "),s("code",[t._v("SignInAction")]),t._v(" 。")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" SignInAction "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  login"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("接着，定义 "),s("code",[t._v("SignInActionCreator")]),t._v(" 。")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SignInActionCreator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" Action "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("login")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SignInAction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("login"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("工作尚未完成。因为 "),s("code",[t._v("Action")]),t._v(" 仅仅代表，程序要做这个操作，而实际操作者，是接下来的 "),s("code",[t._v("Reducer")]),t._v(" ，它会修改在 "),s("code",[t._v("State")]),t._v(" 中的数据。")]),t._v(" "),s("h2",{attrs:{id:"reducer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reducer","aria-hidden":"true"}},[t._v("#")]),t._v(" Reducer")]),t._v(" "),s("p",[t._v("创建 "),s("code",[t._v("lib/pages/sign_in/reducer.dart")]),t._v(" 。")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("Reducer")]),t._v(" 里的命名，应当是语义化的，即从函数名可看出该函数对 "),s("code",[t._v("State")]),t._v(" 做了什么操作。")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package:fish_redux/fish_redux.dart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'action.dart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'state.dart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nReducer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SignInState"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildReducer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("asReducer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Reducer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SignInState"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      SignInAction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cacheUserInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" _cacheUserInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nSignInState "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_cacheUserInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SignInState state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Action action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Map"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("dynamic")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" newState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("containsKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("StateKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("obscureText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    newState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("obscureText "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("StateKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("obscureText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" newState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"effect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#effect","aria-hidden":"true"}},[t._v("#")]),t._v(" Effect")]),t._v(" "),s("p",[t._v("Effect 接受处理的 Action，以 on{Verb} 命名")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code")])])])},[],!1,null,null,null);a.default=e.exports}}]);