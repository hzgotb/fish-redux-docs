---
title: 写一个页面
---

# 写一个页面

假设我们要写一个登陆页面。

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

## State

在 `state.dart` 内先定义一个实现 `Cloneable` 类的 `SignInState` 类，根据需求，声明类成员，以及实现一个 `clone` 的方法。

例如，登录页有两个 `TextField` ，一个账号，一个密码，那么我们需要两个 `TextEditingController` 。
```dart
class SignInState implements Cloneable<SignInState> {
  TextEditingController accountController;
  TextEditingController passwordController;

  SignInState clone() {
    return SignInState()
      ..accountController = accountController
      ..passwordController = passwordController;
  }
}
```

然后，定义一个 `initState` 函数，它接受一个参数，参数类型同 `Page` 的第二个泛型类型一致，返回一个 `SignInState` 实例。

同时我们初始化类成员的值。
```dart
SignInState initState<Map<String, dynamic> args> {
  return SignInState()
    ..accountController = new TextEditingController()
    ..passwordController = new TextEditingController();
}
```

## View

在 `view.start` 内，我们需要定义一个 `viewBuilder` 函数。

这个函数接收三个参数：

1. SignInState state
2. Dispatch dispatch
3. ViewService viewService

```dart
import 'package:fish_redux/fish_redux.dart';

import 'action.dart';
import 'state.dart';

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

## Action

首先，创建 `lib/pages/sign_in/action.dart` 。

然后，我先定义关于 `Action` 类型的枚举类 `SignInAction` 。

```dart
enum SignInAction {
  login,
}
```

接着，定义 `SignInActionCreator` 。

```dart
class SignInActionCreator {
 static Action login() {
   return const Action(SignInAction.login);
 }
}
```

工作尚未完成。因为 `Action` 仅仅代表，程序要做这个操作，而实际操作者，是接下来的 `Reducer` ，它会修改在 `State` 中的数据。

## Reducer

创建 `lib/pages/sign_in/reducer.dart` 。

在 `Reducer` 里的命名，应当是语义化的，即从函数名可看出该函数对 `State` 做了什么操作。

```dart
import 'package:fish_redux/fish_redux.dart';

import 'action.dart';
import 'state.dart';

Reducer<SignInState> buildReducer() {
  return asReducer(
    <Object, Reducer<SignInState>>{
      SignInAction.cacheUserInfo: _cacheUserInfo,
    },
  );
}

SignInState _cacheUserInfo(SignInState state, Action action) {
  final Map<String, dynamic> data = action.payload;
  final newState = state.clone();
  if (data.containsKey(StateKey.obscureText)) {
    newState.obscureText = data[StateKey.obscureText];
  } 
  return newState;
}

```

## Effect

Effect 接受处理的 Action，以 on{Verb} 命名
```dart
```