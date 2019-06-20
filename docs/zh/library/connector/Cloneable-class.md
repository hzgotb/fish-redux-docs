---
title: Cloneable class
---

```dart
abstract class Cloneable<T extends Cloneable<T>> {
  T clone();
}
```