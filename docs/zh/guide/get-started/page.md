---
title: 写一个页面
---

假设我们要写一个登陆页面。

我们首先创建一个 `lib/pages/sign_in/page.dart` 文件，然后引入 `fish_redux` 。

接着，我们需要定义一个 `Page` 类的派生类 `SignInPage` 。一个页面最少要具有初始化状态的函数 `initState` 和视图构建函数 `viewBuilder` 。

为了更好的管理，我们把不同的部分写成一个文件，为 `initState` 创建 `lib/pages/sign_in/state.dart` ，为 `viewBuilder` 创建 `lib/pages/sign_in/view.dart`。

然后在 同目录下的 `page.dart` 引入。

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

在 `state.dart` 内先定义一个 `initState` 函数，它接受一个参数，参数类型同 `Page` 的第二个泛型类型一致，返回一个 `SignInState` 实例。
```dart
SignInState initState<Map<String, dynamic> args> {
  return SignInState();
}
```
再定义一个实现 `Cloneable` 类的 `SignInState` 类，根据需求，声明类成员，以及实现一个 `clone` 的方法。

例如，登录页两个 `TextField` ，一个账号，一个密码，那么我们需要两个 `TextEditingController` 。
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


## View

我们先声明

## Action

构造一个`Action`类，需要两个参数：
1. type
2. payload - 可选


推荐的写法
1. 创建一个`action.dart`文件，包含两个类
    - 为 type 字段起一个枚举类
    - 为 Action 的创建起一个 ActionCreator 类，这样利于约束 payload 的类型。
```dart
enum MessageAction {
    onShare,
    shared,
}

class MessageActionCreator {
  static Action onShare(Map<String, Object> payload) {
    return Action(MessageAction.onShare, payload: payload);
  }

  static Action shared() {
    return const Action(MessageAction.shared);
  }
}
```

## Reducer

Reducer 接受处理的 Action，以{verb} 命名
```dart
```

## Effect

Effect 接受处理的 Action，以 on{Verb} 命名
```dart
```