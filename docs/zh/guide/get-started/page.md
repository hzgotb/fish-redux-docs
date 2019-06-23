---
title: 数据驱动的页面
---

# 数据驱动的页面

Fish Redux 是一个以状态管理为核心的 `Flutter` 开发通用框架，那么我们的开发都是围绕着 `State` 所进行的。

本例子为一个常见的登陆页面。

最终效果如图：

<img :src="$withBase('/20190622161356.png')">

通常情况下，我们会有关于 APP 的原型图，或者更加精美的 UI 设计图，这时我们能够确定，这个页面我们需要多少个变量。

如上图，我们分析得出：
1. TextEditingController accountController - 用于获取用户输入的账号
2. TextEditingController PasswordController  - 用于获取用户输入的密码
3. bool obscureText - 用于设置密码是否为明文
4. bool submitting - 按钮可用状态

在项目里，创建一个这样的目录结构 `<project_name>/lib/pages` 。

在 `pages` 文件夹下创建一个存放页面文件的文件夹，本例为 `sign_in` ，接着创建一个 `state.dart` 文件。

## State

首先我们要定义一个 `SignInPageState` 类，并且是实现 `Cloneable` 类的。

```dart
// lib/pages/sign_in/state.dart
class SignInPageState implements Cloneable<SignInPageState> {}
```

然后上面所分析到的变量，添加为该类的实例属性。

```dart
class SignInPageState implements Cloneable<SignInPageState> {

  TextEditingController accountController;
  TextEditingController passwordController;
  bool obscureText;
  bool submitting;

}
```

接着，我们要实现来自 `Cloneable` 的方法 `clone` 。为了让 `Fish Redux` 检测到页面状态已经改变，我们总是返回一个新的 `State` 对象，而非修改对象的属性值。

```dart
  @override
  SignInPageState clone() {
    return SignInPageState()
      ..obscureText = obscureText
      ..submitting = submitting
      ..usernameController = usernameController
      ..passwordController = passwordController;
  }
```

最后，我们要为页面定义一个初始 `State` 的函数，这个函数接收一个参数，并返回 `SignInPageState` 的实例。

```dart
SignInPageState initState(Map<String, dynamic> args) {
  return SignInState()
    ..obscureText = true
    ..submitting = false
    ..usernameController = new TextEditingController()
    ..passwordController = new TextEditingController();
}
```


最后代码如下：
```dart
class SignInPageState implements Cloneable<SignInPageState> {

  TextEditingController accountController;
  TextEditingController passwordController;
  bool obscureText;
  bool submitting;

  @override
  SignInPageState clone() {
    return SignInPageState()
      ..obscureText = obscureText
      ..submitting = submitting
      ..accountController = accountController
      ..passwordController = passwordController;
  }
}

SignInPageState initState(Map<String, dynamic> args) {
  return SignInPageState()
    ..obscureText = true
    ..submitting = false
    ..accountController = TextEditingController()
    ..passwordController = TextEditingController();
}
```

## Action

在这个例子中，我们只需要关注的两种行为：
- 点击图标，切换密码显示效果，本质上是修改 `obscureText` 。
- 点击登陆按钮，进入正在提交的状态，按钮不可再次点击，本质上是修改 `submitting` 。

在 Fish Redux 中，修改 `State` 的意图，我们称之为 `Action` 。

为了减少代码错误和约束 `Action` 命名，建议先定义一个枚举类。并添加上可能的意图：
1. toggleObscureText - 切换 `obscureText`
2. submit - 提交

```dart
// 创建 lib/pages/sign_in/action.dart
enum SignInPageAction { toggleObscureText, submit }
```

接着，定义 `SignInActionCreator` ，并加上静态方法。

```dart
class SignInPageActionCreator {
  static Action toggleObscureText() {
    return const Action(SignInPageAction.toggleObscureText);
  }
  static Action submit() {
    return const Action(SignInPageAction.submit);
  }
}
```

最后代码如下：

```dart
enum SignInPageAction { toggleObscureText, submit }

class SignInPageActionCreator {
  static Action toggleObscureText() {
    return const Action(SignInPageAction.toggleObscureText);
  }
  static Action submit() {
    return const Action(SignInPageAction.submit);
  }
}
```

## Reducer

因为 `Action` 仅仅代表意图，而实际操作者，是 `Reducer` ，它会“修改”在 `State` 中的数据，然后返回一个新的 `State` 实例。

在 `Reducer` 里的命名，应当是语义化的，即从函数名可看出该函数对 `State` 做了什么操作。

操作函数接收两个参数：
1. SignInPagePageState state - reducer 对应的 state
2. Action

```dart
//创建 lib/pages/sign_in/reducer.dart
SignInPageState _toggleObscureText(SignInPageState state, Action action) {
  return state.clone()
    ..obscureText = !state.obscureText;
}

SignInPageState _updateSubmitting(SignInPageState state, Action action) {
  return state.clone()
    ..submitting = true;
}
```

然后，定义一个组合 `Reducer` 的函数，这是页面需要的，同时也是确定，哪些意图会调用哪些操作。

```dart
Reducer<SignInPageState> buildReducer() {
  return asReducer({
    SignInPageAction.toggleObscureText: _toggleObscureText,
  });
}
```


## Effect



## Page

我们首先创建一个 `lib/pages/sign_in/page.dart` 文件，然后引入 `fish_redux` 。

接着，我们需要定义一个 `Page` 类的派生类 `SignInPage` 。

需要注意的是，一个 `Page` 最少要具有初始化状态的函数 `initState` 和视图构建函数 `viewBuilder` 。

为了更好的管理，我们把不同的部分写成一个文件：

1. 为 `initState` 创建 `lib/pages/sign_in/state.dart`。
2. 为 `viewBuilder` 创建 `lib/pages/sign_in/view.dart`。

然后在同目录下的 `page.dart` 引入。

```dart
import 'package:fish_redux/fish_redux.dart';

import 'state.dart';
import 'view.dart';

class SignInPage extends Page<SignInState, Map<String, dynamic>> {
  SignInPage() : super(
    initState: initState,
    view: viewBuilder,
  );
}
```

## View

在 `view.start` 内，我们需要定义一个 `viewBuilder` 函数。

这个函数接收三个参数：

1. SignInState state
2. Dispatch dispatch
3. ViewService viewService

```dart
Widget viewBuilder(SignInState state, Dispatch dispatch, ViewService viewService) {
  return Scaffold(
    body: SafeArea(
      child: Center(
        child: Column(
          children: <Widget>[
            // Account TextField
            Container(
              margin: EdgeInsets.fromLTRB(40.0, 26.0, 40.0, 10.0),
              child: TextField(
                controller: state.uidController,
                decoration: InputDecoration(
                  labelText: 'Account',
                ),
              ),
            ),
            //  Password TextField
            Container(
              margin: EdgeInsets.fromLTRB(40.0, 0, 40.0, 0.0),
              child: TextField(
                controller: state.pwdController,
                decoration: InputDecoration(
                  labelText: 'Password',
                ),
              ),
            ),
            // LoginButton
            Container(
              margin: EdgeInsets.fromLTRB(40.0, 26.0, 40.0, 0),
              width: 180.0,
              height: 48.0,
              child: RaisedButton(
                color: Color(0xFFffd84d),
                onPressed: () => dispatch(SignInActionCreator.login()),
                child: Text('LOGIN', style: TextStyle(fontSize: 18.0)),
              ),
            ),
          ],
        ),
      ),
    ),
  );
}
```

从上面的代码可以看出，我们在 `viewBuilder` 函数中使用了在 `State` 里定义的数据。

可能还注意到了，我在 `LoginButton` 的点击事件中使用了 `dispatch` 。接下来我们要在 `Action` 部分去定义。