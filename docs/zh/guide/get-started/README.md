---
title: 入门
---

# 入门

## 什么是 Fish Redux

### 简介
**Fish Redux** 是一个以 Redux 作为数据管理的思想，以数据驱动视图，组装式的 Flutter 应用框架， 它特别适用于构建中大型的复杂应用。

### 构成

**Fish Redux** 采用目前主流的开发方式，也是符合 **Flutter** 的设计理念，即可插拔的组件式开发。小部件是一个的组件(Component) ，复杂页面是由多个组件组成的组件。

为了降低耦合度和提高可扩展性，**Fish Redux** 将组件拆分成几个部分。

#### 数据

核心部分。定义了组件需要用到的数据，也是组件的重要组成，其分为两部分：
- 参与视图工作的 Redux
- 不参与视图工作的 LocalProps


#### 视图

最基本的，也就是最重要的部分，每一个组件都应该是可视的。

所以在组件构建时，我们必须为组件提供一个用于构建视图的函数。

#### 依赖

描述了组件与组件之间的关系，也是可插拔的组件式开发的一个重要特性。其分为两部分：
- 为列表而优化的 Adapter
- 组件整体的组成部分 slot

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


## 构建应用

### 组件

组件(Component)是 **Fish Redux** 最基本的元素。其与页面的区别在于，State 的数据是通过连接器(Connector)与其关联的父组件进行交流的。

既然是以数据驱动视图的开发，首先我们先为定义一个 `State` 类，以及组件数据必要的连接器：

```dart
class FishButtonState {
  String text;
}

class FishButtonConnector extends Reselect1<HomePageState, FishButtonState, String> {
  @override
  FishButtonState computed(String buttonText) {
    return new FishButtonState()
      ..text = buttonText;
  }

  @override
  String getSub0(HomePageState state) {
    return state.buttonText;
  }

  @override
  void set(HomePageState state, FishButtonState subState) {
    state.buttonText = subState.text;
  }
}
```
对于连接器(Connector)的更多详情，请参考[连接器](#)。

然后为组件声明一个必要的，用于提供视图的函数：

```dart
Widget viewBuilder(FishButtonState state, Dispatch dispatch, ViewService veiwService) {
  return FlatButton(
    onPressed: () {},
    child: Text(state.text),
  );
}
```

该函数返回 `Widget` ，接收三个参数：
- T state - 组件的 State 实例
- Dispatch dispatch - 用于发出数据修改意图的函数
- ViewService viewService - 一些可能需要用到的 API

最后定义 `Component` 类：

```dart
class FishButton extends Component<FishButtonState> {
  FishButton() : super(
    view: viewBuilder,
  );
}
```


### 页面

页面(Page)是一个行为丰富的组件，因为它的实现是在组件的基础上增加了 AOP 能力，以及自有的 State 。

同样的，先定义 `State` 类：

```dart
class HomePageState {
  String buttonText;
}
```

因为页面的 State 是自有的，所以构建页面，除了 `State` 类和提供视图的函数外，还需要一个为页面初始化 State 的函数，例如：

```dart
HomePageState initState(String buttonText) {
  return new HomePageState()
    ..buttonText = buttonText;
}
```

该函数返回 `State` 类的实例，接受一个参数，参数类型与定义 `Page` 类时，提供的第二个类型一致。

定义 `Page` 类，并挂载组件：

```dart
class HomePage extends Page<HomePageState, String> {
  HomePage() : super(
  	initState: initState,
    view: viewBuilder,
    dependencies: Dependencies<HomePageState>(
      adapter: null,
      slots: <String, Dependent<HomePageState>>{
        'FishButton': FishButton() + FishButtonConnector(),
      }),
    );
  );
}
```
对于依赖(Dependencies)的更多详情，请参考[依赖](#)。

页面的视图提供函数与组件一样。这里主要为示例在视图中使用已加入依赖的组件：

```dart
Widget viewBuilder(HomePageState state, Dispatch dispatch, ViewService viewService) {
  return Scaffold(
    body: Container(
      child: viewService.buildComponent('FishButton'),
    ),
  );
}
```

## 数据驱动

多数情况下，驱动视图的数据并非一成不变的，这也是使用 Redux 的原因。

**Fish Redux** 遵循 Redux 单向数据流的设计核心，在修改 State 的时候下，必须通过触发 Action ，然后调用 Reducer 去修改数据。

### State

一个可变的 State 需要实现 `Cloneable<T>` 类。其核心在于 `clone` 函数，它总是返回一个新的实例，使框架感知到 State 已经改变：

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


### Action

在 Redux 中，修改 `State` 是通过调用 `dispatch` 函数去触发 `Action` 来进行的，
但需要注意的是，`Action` 仅仅是表达了修改 `State` 的意图。

```dart
dispatch(new Action('changeToOtherTitle', payload: 'Other title'));
```

`Action` 的构造器接收两个参数：
- Object type - 必要参数，Action 实例的类型
- dyanmic payload - 可选参数，Action 实例携带的参数


为了更好的协作开发和减少低级错误，建议声明一个 `Action` 类型的枚举类，以及定义一个集合返回 `Action` 的函数的类，这样可以约束到 `payload` 的类型：

```dart
// 枚举类
enum HomePageAction { changeToEnglishTitle, changeToOtherTitle }

// 函数类
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

### Reducer

State 的实际操作者是 Reducer 。

Reducer 是一个函数，它返回新的 `State` 实例，且接受两个参数：
- T state - 当前的状态
- Action action - 触发的 Action 实例

```dart
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
```

通常，组件的 Reducer 不只一个，所以应当使用 `asReducer` 函数去将同个组件的 Reducer 组合成一个大的 Reducer ，并提供给组件。

```dart
Reducer<HomePageState> buildReducer() {
  return asReducer({
    HomePageAction.changeToEnglishTitle: _changeTitle,
    HomePageAction.changeToOtherTitle: _changeTitle,
  });
}

class HomePage extends Page<HomePageState, String> {
  HomePage() : super(
  	initState: initState,
    view: viewBuilder,
    reducer: buildReducer(),
  );
}
```

当触发 Action 时，框架内部会自动找到 Action 类型对应的 Reducer ，所以这里作为键的 Action 类型必须是唯一的。


### Effect

由于原生的 Redux 是同步的，单向的，纯函数的，导致一些行为无法被处理，例如异步请求。

对此，我们可以使用 Effect 去解决。

Effect 也是一个函数，它返回一个值或者 `Future` ，接收两个参数：
- Action action - Action 的实例
- Context\<T> context - 当前数据流的上下文

```dart
void _getTile(Action action, Context<HomePageState> context) async {
  final res = await http.get(url);
  context.dispatch(HomeActionCreator.changeToOtherTitle(res.data));
}
```

和 Reducer 一样，组件通常也是有多个 Effect ,所以我们会使用 `combineEffects` 函数将同个组件的 Effect 组合起来，并提供给组件。
```dart
class HomePage extends Page<HomePageState, String> {
  HomePage() : super(
  	initState: initState,
    view: viewBuilder,
    reducer: buildReducer(),
    effect: buildEffect(),
  );
}

Effect<HomePageState> buildEffect() {
  return combineEffects(<Object, Effect<HomePageState>>{
    HomePageAction.getTitle: _getTitle,
  });
}
```