---
title: 数据驱动的页面
---

# 数据驱动的页面

Fish Redux 是一个以状态管理为核心的 Flutter 开发通用框架，所以我们的开发可以围绕着状态，即数据进行。


## Page

在 **Fish Redux** 中，每个页面都是一个 `Page` 。

定义一个页面，最简单的是这样：

```dart
class Home extends Page<HomeState, String> {
  Home : super(
  	initState: initState,
    view: viewBuilder,
  );
}
```

继承于 `Page` 类，而且我们需要两个类型，一个是相对应的 `State` 类，一个是传给 `initState` 的参数的类型。



除了必要的初始化 `State` 的函数 `initState` ，和构建视图的函数 `viewBuilder` 外，通常我们还需要一组返回 [Action]() 的函数，有些时候也需要一组 [Effect]() 函数。



class



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


## State - 状态

通常，我们会为页面定义一个 `State` 类，还有初始化 `State` 的函数。

```dart
class HomeState {
  String title;
}

HomeState initState(Map<String, dynamic> args) {
  return HomeState()
    ..title = '标题';
}
```



有些开发者可能会想用 `final` ，那么我们可以通过构造器来创建一个实例。

```dart
class HomeState {
  final String title;

  HomeState(this.title);
}

HomeState initState(Map<String, dynamic> args) {
  return HomeState('标题');
}
```

你会注意到，`initState` 接收一个类型为 `Map<String, dynamic>` 的参数，请参阅[页面传参]();



**Fish Redux** 内置一个 `Cloneable<T>` 的抽象类，用于实现可变的 `State` ，其核心在于 `clone` 函数，它总是返回一个新的实例，使框架感知到 `State` 已经改变。

```dart
class HomeState implements Cloneable<HomeState> {
  String title;

  @override
  clone() {
    return HomeState()
      ..title = title;
  }
}
```

## Action

当 `State` 是可变的时候，我们会需要一些行为来操作它们。在实际操作 `State` 之前，我们会表达我们要操作 `State` 的意图，我们称之为 `Action` ，对应的是 `Action` 类。



`Action` 的构造器接收两个形参：

1. type - 必要形参，`Action` 的类型
2. payload - 命名的可选形参，传给实际操作者的参数



为了约束类型的命名和开发体验，建议为 `Action` 定义一个类型的枚举类。

```dart
enum HomeAction { changeToEnglishTitle }
```



再定义一个集合类 `ActionCreator` ，其包含返回一个 `Action` 实例的方法 ，所有的方法都应该是静态的。

```dart
class HomeActionCreator {
  static Action changeToEnglishTitle() {
    return const Action(HomeAction.changeToEnglishTitle);
  }
}
```



假设页面有个按钮，点击之后修改中文标题到英文标题。

```dart
...
onPressed: () => dispatch(HomeActionCreator.changeToEnglishTitle());
...
```



如果要传参的话：

```dart
enum HomeAction { ..., changeToOtherTitle }

class HomeActionCreator {
  ...

  static Action changeToOtherTitle(title) {
    return Action(HomeAction.changeToOtherTitle, payload: title);
  }
}
```



发出意图：

```dart
...
onPressed: () => dispatch(HomeActionCreator.changeToOtherTitle('Title'));
...
```


## Reducer

因为 `Action` 仅仅代表意图，而实际操作者，是 `Reducer` ，它是一或多个 `Action` 类型为键，对应一个返回 `State` 的操作函数为值的 `Map` 结构。



操作函数通过 `State` 的 `clone`方法新建一个新实例，并修改相对应的 `State`，然后返回该新实例。其接收两个形参：

1. state - 对应的 `State`
2. action - `Action` 实例



例如，接上面的代码 `changeToEnglishTitle` ，我们需要这样的操作函数：

```dart
HomeState _changeTitle(HomeState state, Action action) {
  return state.clone()
    ..title = 'Title';
}
```



然后，定义一个返回 `Reducer` 的函数，这是页面需要的，同时也是确定，哪些意图会调用哪些操作。

```dart
Reducer<HomeState> buildReducer() {
  return asReducer({
    HomeState.changeToEnglishTitle: _changeTitle,
  });
}
```



有的开发者在 `State` 中使用了 `final` ，那我们的 `Reducer` 函数可以这样写：

```dart
HomeState _changeTitle(HomeState state, Action action) {
  return HomeState('Title');
  
  /// 如果一部分改变了，一部分没有改变 
  /// HomeState(this.title, this.subTitle)
  
  // return HomeState('Title', state.subTitle);
}
```



当我们有多个意图，并且是相同的操作函数时，即多对一，我们可以通过判断 `action` 的 `type` 来执行相应的操作：

```dart
HomeState _changeTitle(HomeState state, Action action) {
  final newState = state.clone();
  switch (action.type) {
    case HomeAction.changeToEnglishTitle:
      newState.title = 'Title';
      break;
    case HomeAction.changeToOtherTitle:
      newState.title = action.payload;
      break;
  }
  return newState;
}

Reducer<HomeState> buildReducer() {
  return asReducer({
    HomeState.changeToEnglishTitle: _changeTitle,
    HomeState.changeToOtherTitle: _changeTitle,
  });
}
```
**上面的代码同时也说明了，当有传参的时候，我们是通过 `action` 的 `payload`  来获取传进来的参数。**




## Effect

`State` -> `Action` -> `Reducer` 是一个单向的数据流，但有时候我们可能需要一些副作用，例如异步请求，**Fish Redux** 提出了 `Effect` 的概念，它作为 `Action` 到 `Reducer` 的拦截层，相对应的是 `Effect` 类。


与 `Reducer` 相同，也是一或多个 `Action` 类型为键，对应一个操作函数为值的 `Map` 结构。


操作函数接受两个形参：

1. action - `Action` 实例
2. context - Context<T> 

一个简单的 `Effect` 函数是这样的：

```dart
void _getTile(Action action, Context<HomeState> context) async {
  final res = await http.get(url);
  context.dispatch(HomeActionCreator.changeToOtherTitle(res.data));
}
```

有时候，我们可能会需要一个返回值，例如登录时，页面上会有个载入动画的弹窗，但请求完毕后，我们要关闭掉这个弹窗。

```dart
Future<Response> _getTitle(Action action, Context<HomeState> context) {
  return http.get(url);
}
```

在页面调用时：

```dart
...
onPressed: () async {
  showDialog(...);
  try {
    final res = await dispatch(HomeActionCreator.getTitle());
    // 当完成后，先关闭 dialog
    Navigator.of(context).pop();
    // 然后通过判断res.code来做不同的操作。
  } catch (e) {
    
  }
}
...
```

## View

在视图部分，我们仅需要定义一个提供视图的函数即可，例如 `viewBuilder` 。

这个函数将接收三个形参：

1. state - 对应的 state
2. dispatch - 发出意图的方法
3. viewService - `ViewService` 实例

```dart
Widget viewBuilder(HomeState state, Dispatch dispatch, ViewService viewService) {
  return Scaffold(
    appBar: AppBar(
      title: Text(state.title),
    ),
    body: SafeArea(
      child: Center(
        child: Container(
          margin: EdgeInsets.fromLTRB(40.0, 26.0, 40.0, 0),
          width: 180.0,
          height: 48.0,
          child: RaisedButton(
            color: Color(0xFFffd84d),
            onPressed: () => dispatch(HomeActionCreator.changeToEnglishTitle()),
            child: Text('修改标题', style: TextStyle(fontSize: 18.0)),
          ),
        ),
      ),
    ),
  );
}
```