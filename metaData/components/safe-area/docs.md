# SafeArea 安全区

### 介绍

用于将其内容放置在视口的安全区域中。

### 引入

```tsx
import { SafeArea } from "@taroify/core"
```

## 代码演示

### 基础用法

```tsx
<SafeArea position="top" />
<View>{lorem.generateParagraphs(10)}</View>
<SafeArea position="bottom" />
```

## API

### SafeArea Props

| 参数          | 说明                                  | 类型      | 默认值  |
| ------------- | ------------------------------------- | --------- | ------- |
| position      | 安全区的位置，可选值为 `top` `bottom` | _string_  | -       |
| nativeSafeTop <br>`v0.5.1-alpha.0` | 是否启用顶部安全区域原生属性          | _boolean_ | `false` |
