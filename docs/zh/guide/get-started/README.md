---
title: 入门
---

# 入门

## 什么是 Fish Redux

**Fish Redux** 是一个基于 Redux 数据管理的组装式 Flutter 应用框架， 它特别适用于构建中大型的复杂应用。

## 安装

### 引入项目

在 `pubspec.yaml` 的 `dependencies` 下加入 `fish_redux` 并运行 `flutter get packages`。
```yaml
...
dependencies:
  fish_redux: ^0.2.2
...
```

### 增强开发体验

#### 模板生成插件

##### VS Code

[fish-redux-template](https://marketplace.visualstudio.com/items?itemName=huangjianke.fish-redux-template)

##### Android Studio

[FishReduxTemplateForAS](https://github.com/BakerJQ/FishReduxTemplateForAS)

#### 调试工具

[Flutter Debugger](https://github.com/blankapp/flutter-debugger)

[flipperkit_fish_redux_middleware](https://pub.dev/packages/flipperkit_fish_redux_middleware)

## 页面的组成部分

**Fish Redux** 的特点是配置式组装。 

在视图方面将一个大的页面拆解成一些独立的模块，称之为组件（Component）。

为了更好的扩展和解耦，**Fish Redux** 将模块拆分为几个部分：
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

多数情况下，我们都需要修改页面的数据。

**Fish Redux** 遵循 **Redux** 单向数据流的设计核心，在 `State` 可变的情况下，修改 `State` ，必须通过触发 `Action` ，然后调用 `Reducer` 去修改数据。

### State

首先声明一个可变的 `State`，并实现 `Cloneable<T>` 抽象类。可变 `State` 的核心在于 `clone` 函数，它总是返回一个新的实例，使框架感知到 `State` 已经改变。

```dart
class HomePageState implements Cloneable<HomePageState> {
  String title

  @override
  clone() {
    return HomePageState()
      ..title = title;
  }
}
```
需要注意的是，**State 在不使用 final 去声明时，是可以任意读写的。所以即使没有限制，修改 State 也应当通过触发 Action 来进行**。


### Action

在 `View` 或 `Effect` 中触发 `Action`，是通过 `dispatch` 函数：
```dart
dispatch(Action('changeToEnglishTitle'));

// or
dispatch(Action('changeToOtherTitle', payload: 'other title'));
```

`Action` 构造器接收两个参数：
1. Object type - 必选，`Action` 类型
2. dyanmic payload - 可选，接收的参数


为了更好的协作开发和减少低级错误，建议声明一个 `Action` 类型的枚举类：

```dart
enum HomePageAction { changeToEnglishTitle }
```

调用：
```dart
dispatch(Action(HomePageAction.changeToEnglishTitle))
```

### Reducer

因为 `Reducer` 是属于 `Page` 的一部分，所以我们需要一个用于返回 `Reducers` 到 `Page` 的函数。

```dart
Reducer<HomePageState> buildReducer() {
  return asReducer({
    HomePageAction.changeToEnglishTitle: _changeTitle,
  });
}
```

接着声明，实际操作数据的函数：
```dart
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


## 使用参数修改数据

有一种场景是，数据是非本地的，即可能是网络请求得到的，这种情况下，通过传参来修改 `State` ：

```dart
// 使用枚举类约束 Action 类型
enum HomePageAction { changeToEnglishTitle, changeToOtherTitle }

// 定义 Reducer
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

// 调用
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

由于 Redux 是同步的，单向的，纯函数的，导致一些行为无法被处理，例如异步请求。

对此，我们可以使用 `Effect` 去解决：

```dart
// 处理的函数
void _getTile(Action action, Context<HomePageState> context) async {
  final res = await http.get(url);
  context.dispatch(HomeActionCreator.changeToOtherTitle(res.data));
}

// 返回 Effect 组合给页面的函数
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
    effect: buildEffect(),
  );
}
```