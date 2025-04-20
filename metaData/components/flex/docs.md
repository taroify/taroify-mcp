# Layout 布局

### 介绍

`Flex` 组件是 CSS `flex` 布局的一个封装。

### 引入

```tsx
import { Flex } from "@taroify/core"
```

## 代码演示

### 基础用法

`Flex` 组件提供了 `24列栅格`，通过在 `Flex.Item` 上添加 `span` 属性设置列所占的宽度百分比。此外，添加 `offset` 属性可以设置列的偏移宽度，计算方式与 span 相同。

```tsx
<Flex>
  <Flex.Item span={8}>span: 8</Flex.Item>
  <Flex.Item span={8}>span: 8</Flex.Item>
  <Flex.Item span={8}>span: 8</Flex.Item>
</Flex>

<Flex>
  <Flex.Item span={4}>span: 4</Flex.Item>
  <Flex.Item span={10} offset={4}>
    offset: 4, span: 10
  </Flex.Item>
</Flex>

<Flex>
  <Flex.Item offset={12} span={12}>
    offset: 12, span: 12
  </Flex.Item>
</Flex>
```

### 设置列元素间距

通过 `gutter` 属性可以设置列元素之间的间距，默认间距为 0。

```tsx
<Flex gutter={20}>
  <Flex.Item span={8}>span: 8</Flex.Item>
  <Flex.Item span={8}>span: 8</Flex.Item>
  <Flex.Item span={8}>span: 8</Flex.Item>
</Flex>
```

### 对齐方式

通过 `justify` 属性可以设置主轴上内容的对齐方式，等价于 flex 布局中的 `justify-content` 属性。

```tsx
<!-- 居中 -->
<Flex justify="center">
  <Flex.Item span={6}>span: 6</Flex.Item>
  <Flex.Item span={6}>span: 6</Flex.Item>
  <Flex.Item span={6}>span: 6</Flex.Item>
</Flex>

<!-- 右对齐 -->
<Flex justify="end">
  <Flex.Item span={6}>span: 6</Flex.Item>
  <Flex.Item span={6}>span: 6</Flex.Item>
  <Flex.Item span={6}>span: 6</Flex.Item>
</Flex>

<!-- 两端对齐 -->
<Flex justify="space-between">
  <Flex.Item span={6}>span: 6</Flex.Item>
  <Flex.Item span={6}>span: 6</Flex.Item>
  <Flex.Item span={6}>span: 6</Flex.Item>
</Flex>

<!-- 每个元素的两侧间隔相等 -->
<Flex justify="space-around">
  <Flex.Item span={6}>span: 6</Flex.Item>
  <Flex.Item span={6}>span: 6</Flex.Item>
  <Flex.Item span={6}>span: 6</Flex.Item>
</Flex>
```

## API

### Flex Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gutter | 列元素之间的间距（单位为 px） | _number_ | - |
| direction | 项目定位方向，可选值为 `row` `row-reverse` `column` `column-reverse` | _boolean_ | `row` |
| wrap | 子元素的换行方式，可选值为 `nowrap` `wrap` `wrap-reverse` | _boolean_ | `nowrap` |
| justify | 主轴对齐方式，可选值为 `start` `end` `center` `space-around` `space-between` | _string_ | `start` |
| align | 交叉轴对齐方式，可选值为 `start` `center` `end` `baseline` `stretch` | _string_ | `start` |

### Flex.Item Props

| 参数   | 说明           | 类型               | 默认值 |
| ------ | -------------- | ------------------ | ------ |
| span   | 列元素宽度     | _number_ | -      |
| offset | 列元素偏移距离 | _number_ | -      |
