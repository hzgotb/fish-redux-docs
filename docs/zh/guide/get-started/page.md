---
title: 数据驱动的页面
---

# 入门

## 什么是 Fish Redux

**Fish Redux** 是一个基于 Redux 数据管理的组装式 flutter 应用框架， 它特别适用于构建中大型的复杂应用。

## 页面的组成部分

**Fish Redux** 的特点是配置式组装。 

在视图方面将一个大的页面拆解成一些独立的模块，称之为组件（Component）。

为了更好的扩展和解耦，**Fish Redux** 将这些模块拆分为几个部分：
- View - 视图
- State - 数据
- Reducer - 操作数据
- Effect - 处理副作用
- Dependencies - 子组件挂载



页面（Page）是一个特殊的模块，它继承于组件，有组件的所有特性。

页面和组件的区别在于，页面的数据是自身的，它有一个必要的函数 `initState` ，用于初始化自身的数据，而组件的数据是通过连接器（Connector）向其父组件（可能是一个页面）获取的。



## 一个简单的页面

首先，我们可以先为页面定义一个 `State` 类：

```dart
class HomePageState {
  String title;
}
```



还有页面必要的，用于初始化数据的函数 `initState` ，它接收一个参数，参数类型和页面定义的一致：

```dart
HomePageState initState(String title) {
  return HomePageState()
    ..title = '标题';
    // or ..title = title;
}
```



有些开发者可能会想用 `final` ，那么我们可以通过构造器来创建一个实例。

```dart
class HomePageState {
  final String title;

  HomePageState(this.title);
}

HomePageState initState(String title) {
  return HomePageState('标题');
  // return HomePageState(title);
}
```



在 **Fish Redux** 中，每个页面继承于 `Page<T,P>` 类，其中 `T` 为对应的 `State` 类， `P` 为初始化 `State` 的函数的参数的类型：

```dart
class HomePage extends Page<HomePageState, String> {
  Home : super(
  	initState: initState,
    view: viewBuilder,
  );
}
```



除了 `initState` 函数外，还有一个必要的函数是提供视图的，即 `viewBuilder` ，它接收三个参数：

1. T state - 对应的数据
2. Dispatch dispatch - 用于发送操作数据的意图
3. ViewService viewService - 一些扩展的服务

并返回一个 `Widget` ：

```dart
Widget viewBuilder(HomePageState state, Dispatch dispatch, ViewService viewService) {
  return Scaffold(
    appBar: AppBar(
      title: Text(state.title),
    ),
  );
}
```



## 可变的数据


很多情况下，我们都需要修改页面的数据。

**Fish Redux** 内置一个 `Cloneable<T>` 的抽象类，用于实现可变的 `State` ，其核心在于 `clone` 函数，它总是返回一个新的实例，使框架感知到 `State` 已经改变。

```dart
class HomePageState implements Cloneable<HomePageState> {
  String title;

  @override
  clone() {
    return HomePageState()
      ..title = title;
  }
}
```

**如果使用了 final 声明，则不需要这样写。**



除了实现 `clone` 方法，我们还需要用到页面组成的其他部分，即 `Reducer` ，数据的操作者。我们怎么去调用 `Reducer` 呢？通过 `dispatch` 函数，它接收两个参数，一个为必要的 `Action` 类型，一个为可选的命名参数 `payload` 。



同时，为了更好的协作开发和减少低级错误，我们会定义一个 `Action` 类型的枚举类：

```dart
enum HomePageAction { changeToEnglishTitle }
```



然后我们再来定义 `Reducer` ：

```dart
Reducer<HomePageState> buildReducer() {
  return asReducer({
    HomePageAction.changeToEnglishTitle: _changeTitle,
  });
}

HomePageState _changeTitle(HomePageState state, Action action) {
  return state.clone()
    ..title = 'Title';
  
  /// 使用了 final 的 State
  /// return HomePageState('Title');
  /// 部分改变，部分不变
  /// 如果 State 构造器为 HomePageState(this.title, this.subTitle)
  /// return HomePageState('Title', state.subTitle);
}
```



把 `Reducer` 加入到页面中：

```dart
class HomePage extends Page<HomePageState, String> {
  Home : super(
  	initState: initState,
    view: viewBuilder,
    reducer: buildReducer(),
  );
}
```



在视图中调用：

```dart
dispatch(Action(HomePageAction.changeToEnglishTitle));
```



## 使用参数修改数据

很多时候，我们需要修改的值是不确定的，所以可以通过传参来修改数据：

```dart
// 1
enum HomePageAction { changeToEnglishTitle, changeToOtherTitle }

// 2
Reducer<HomePageState> buildReducer() {
  return asReducer({
    HomePageAction.changeToEnglishTitle: _changeTitle,
    HomePageAction.changeToOtherTitle: _changeTitle,
  });
}

HomePageState _changeTitle(HomePageState state, Action action) {
  final newState = state.clone();
  switch (action.type) {
    case HomePageAction.changeToEnglishTitle:
      newState.title = 'Title';
      break;
    case HomePageAction.changeToOtherTitle:
      newState.title = action.payload;	// 使用参数
      break;
  }
  return newState;
}

// 3
dispatch(Action(HomePageAction.changeToOtherTitle, payload: 'Fish Redux'));
```



比较建议的是，可以通过定义一个集合返回 `Action` 的函数的类，这样可以约束到 `payload` 的类型：

```dart
class HomePageActionCreator {
  static Action changeToEnglishTitle() {
    return const Action(HomePageAction.changeToEnglishTitle);
  }
  static Action changeToOtherTitle(String title) {
    return Action(HomePageAction.changeToOtherTitle, payload: title);
  }
}

// 调用
dispatch(HomePageActionCreator.changeToOtherTitle('Fish Redux'));
```


## 处理副作用

有时候，我们修改数据，可能需要一些副作用，例如异步请求，**Fish Redux** 提出了 `Effect` 的概念。

一个简单的 `Effect` 是这样的：

```dart
void _getTile(Action action, Context<HomePageState> context) async {
  final res = await http.get(url);
  context.dispatch(HomeActionCreator.changeToOtherTitle(res.data));
}

Effect<HomePageState> buildEffect() {
  return combineEffects(<Object, Effect<HomePageState>>{
    HomePageAction.getTitle: _getTitle,
  });
}
```



为了让它生效，需要在页面上加入它：

```dart
class HomePage extends Page<HomePageState, String> {
  Home : super(
  	initState: initState,
    view: viewBuilder,
    reducer: buildReducer(),
    effect: buildEffect(),
  );
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
    if (res.code == 200) {
      // dispatch(...)
    }
  } catch (e) {
    
  }
}
...
```