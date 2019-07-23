---
title: 入门
---

# 入门

## 什么是 Fish Redux

**Fish Redux** 是一个以 Redux 作为数据管理的思想，以数据驱动视图，组装式的 Flutter 应用框架， 它特别适用于构建中大型的复杂应用。

## 安装

### 引入项目

在 `pubspec.yaml` 的 `dependencies` 下加入 `fish_redux` 并运行 `flutter get packages`。
```yaml
...
dependencies:
  fish_redux: ^0.2.4
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


## 构成

**Fish Redux** 采用目前主流的开发方式，也是符合 **Flutter** 的设计理念，即可插拔的组件式开发。小部件是一个的组件(Component) ，复杂页面是由多个组件组成的组件。

为了降低耦合度和提高可扩展性，**Fish Redux** 将组件拆分成几个部分。

### 数据

核心部分。定义了组件需要用到的数据，也是组件的重要组成，其分为两部分：
- 参与视图工作的 `Redux` 。
- 不参与视图工作的 `LocalProps` 。


### 视图

最基本的，也就是最重要的部分，每一个组件都应该是可视的。

所以在组件构建时，我们必须为组件提供一个用于构建视图的函数。

### 依赖

描述了组件与组件之间的关系，也是可插拔的组件式开发的一个重要特性。其分为两部分：
- 为列表而优化的 `Adapter`
- 组件整体的组成部分 `slot`


## 页面

页面(Page)是一个行为丰富的组件，因为它的实现是在组件的基础上增加了 `AOP` 能力，以及独立的 `Store` 。

### 简单页面

既然是以数据驱动视图的开发，首先我们先为页面定义一个 `State` 类：

```dart
class HomePageState {
  String title;
}
```

构建一个页面，除了 `State` 类之后，最少还需要两个函数。

一个是为页面初始化 `State` 的函数，例如：

```dart
HomePageState initState(String title) {
  return new HomePageState()
    ..title = title;
}
```

该函数返回 `State` 类的实例，接受一个参数，参数类型与定义 `Page` 类提供的第二个类型一致。如何定义 `Page` 请往下阅读。

另外一个是为页面提供视图的函数，例如：

```dart
Widget viewBuilder(HomePageState state, Dispatch dispatch, ViewService viewService) {
  return Scaffold(
    appBar: AppBar(
      title: Text(state.title),
    ),
  );
}
```

该函数返回 `Widget` ，接收三个参数：
- state - 页面的 `State` 实例
- dispatch - 来自 Redux ，用于发出数据修改意图的函数
- viewService - 一些可能需要用到的 API 


最后，定义 `Page` 类：

```dart
class HomePage extends Page<HomePageState, String> {
  Home() : super(
  	initState: initState,
    view: viewBuilder,
  );
}
```


### Redux

多数情况下，驱动视图的数据并非一成不变的，这也是使用 Redux 的原因。

**Fish Redux** 遵循 Redux 单向数据流的设计核心，在修改 `State` 的时候下，必须通过触发 `Action` ，然后调用 `Reducer` 去修改数据。

#### State

一个可变的 `State` 需要实现 `Cloneable<T>` 类。其核心在于 `clone` 函数，它总是返回一个新的实例，使框架感知到 `State` 已经改变：

```dart
class HomePageState implements Cloneable<HomePageState> {
  String title;

  @override
  clone() {
    return new HomePageState()
      ..title = title;
  }
}
```
需要注意的是，**State 在不使用 final 去声明时，是可以任意读写的。所以即使没有限制，修改 State 也应当通过触发 Action 来进行**。


#### Action

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

#### Reducer

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


### 使用参数修改数据

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


### 处理副作用

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

### 使用组件与适配器

在定义页面的类时，有一个 `dependencies` 的参数，用于描述页面使用到的组件 (Component) 和适配器 (Adapter)
 ，其中 `slots` 是用来描述组件的。

```dart
class HomePage extends Page<HomePageState, String> {
  Home() : super(
  	initState: initState,
    view: viewBuilder,
    dependencies: Dependencies(
      slots: <String, Dependent<HomePageState>>{
        'FishButton': FishButtonConnector() + FishButton(),
      },
    ),
  );
}
```

## 组件

现在的移动应用通常都是复杂的，多数页面都是由多个组件组成。

在 Fish Redux 中，组件通过 `Component` 去定义的。

### 组成部分

`Page` 类继承于 `Component` ，所以可以参考页面的[组成部分](#组成部分) 。

此外，组件的 `State` 来自于其挂载的父组件（或页面），所以组件需要一个连接器（Connector）来向其父组件进行数据交流。

### 简单组件

为组件定义 `State` 类：

```dart
// fish_button/state.dart
class FishButtonState {
  String text;
}
```

你会注意到，该类没有实现 `Cloneable<T>` ，因为数据是从父组件获取，所以不需要实现。

然后定义 `Component` 类：

```dart
// fish_button/component.dart
class FishButton extends Component<FishButtonState> {
  ButtonComponent() : super(
    view: viewBuilder,  // viewBuilder 函数同页面一样
  );
}
```

在定义 `Connector` ，最简单的是继承 `ConnOp<T, P>` 类，`T` 为父组件的 `State` , `P` 为组件的 `State` ：

```dart
// fish_button/connector.dart
// 假设 HomePageState 上有 buttonText
class ButtonConnector extends ConnOp<HomePageState, FishButtonState> {
  @override
  FishButtonState get(HomePageState state) {
    return new FishButtonState()
      ..text = state.buttonText;
  }

  // 假设有点击事件，点击按钮后修改按钮文本
  @override
  void set(HomePageState state, FishButtonState subState) {
    state.buttonText = subState.text + '1';
  }
}
```

### 