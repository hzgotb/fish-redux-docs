---
title: MutableConn class
---

```dart
abstract class MutableConn<T, P> implements AbstractConnector<T, P> {
  const MutableConn();

  void set(T state, P subState);

  @override
  SubReducer<T> subReducer(Reducer<P> reducer) {
    return (T state, Action action, bool isStateCopied) {
      final P props = get(state);
      if (props == null) {
        return state;
      }
      final P newProps = reducer(props, action);
      final bool hasChanged = newProps != props;
      final T copy = (hasChanged && !isStateCopied) ? _clone<T>(state) : state;
      if (hasChanged) {
        set(copy, newProps);
      }
      return copy;
    };
  }
}
```