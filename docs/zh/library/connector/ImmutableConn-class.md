---
title: ImmutableConn class
---

# ImmutableConn Class

// TODO introduction

**Inheritance**

[AbstractConnector]() > ImmutableConn

// TODO **Implementers**

Example:

```dart
class State {
  final SubState sub;
  final String name;
  const State({this.sub, this.name});
}

class SubState {}

class Conn<State, SubState> extends ImmutableConn<State, SubState> {
  SubState get(State state) => state.sub;
  State set(State state, SubState sub) => State(sub: sub, name: state.name);
}
```



```dart
abstract class ImmutableConn<T, P> implements AbstractConnector<T, P> {
  const ImmutableConn();

  T set(T state, P subState);

  @override
  SubReducer<T> subReducer(Reducer<P> reducer) {
    return (T state, Action action, bool isStateCopied) {
      final P props = get(state);
      if (props == null) {
        return state;
      }
      final P newProps = reducer(props, action);
      final bool hasChanged = newProps != props;
      if (hasChanged) {
        final T result = set(state, newProps);
        assert(result != null, 'Expected to return a non-null value.');
        return result;
      }
      return state;
    };
  }
}
```