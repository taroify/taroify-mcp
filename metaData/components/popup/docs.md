# Popup 弹出层

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

### 引入

```tsx
import { Popup } from "@taroify/core"
```

## 代码演示

### 基础用法

通过 `open` 控制弹出层是否展示。

```tsx
<Popup open>内容</Popup>
```

### 弹出位置

通过 `placement` 属性设置弹出位置，默认居中弹出，可以设置为 `top`、`bottom`、`left`、`right`。

```tsx
<Popup defaultOpen placement="top" style={{ height: "30%" }} />
```

### 关闭图标

设置 `Popup.Close` 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 `closeIcon` 属性自定义图标。

```tsx
<Popup defaultOpen placement="bottom" style={{ height: '30%' }}>
  <Popup.Close />
</Popup>

<!-- 自定义图标 -->
<Popup defaultOpen placement="bottom" style={{ height: '30%' }}>
  <Popup.Close>
    <Close />
  </Popup.Close>
</Popup>
```

### 圆角弹窗

设置 `rounded` 属性后，弹窗会根据弹出位置添加不同的圆角样式。

```tsx
<!-- 圆角弹窗（居中） -->
<Popup
  open
  style={{
    padding: "64px",
  }}
  rounded
  lock={false}
>
  内容
</Popup>

<!-- 圆角弹窗（底部） -->
<Popup open rounded placement="bottom" style={{ height: '30%' }} />
```

### 禁止滚动穿透

```tsx
<Popup lock>
  <View>无法滑动</View>
</Popup>
```

如果需要内容支持溢出滚动，则需要包裹一层 ScrollView 组件。

```tsx
<Popup lock>
  <ScrollView>可以滑动</ScrollView>
</Popup>
```

## API

### Popup Props

| 参数                  | 说明                                                      | 类型               | 默认值   |
| --------------------- | --------------------------------------------------------- | ------------------ | -------- |
| defaultOpen           | 默认是否显示弹出层                                        | _boolean_          | `false`  |
| open                  | 是否显示弹出层                                            | _boolean_          | `false`  |
| placement             | 弹出位置，可选值为 `top` `bottom` `right` `left` `center` | _string_           | `center` |
| duration              | 动画时长，单位毫秒                                        | _number \| string_ | `300`    |
| rounded               | 是否显示圆角                                              | _boolean_          | `false`  |
| lock `v0.1.4-alpha.0` | 是否锁定背景滚动                                          | _boolean_          | `true`   |

动画相关参数继承自 `Transition` 组件，详细属性参见：[Transition 组件](/components/style/#动画)
| Popup 参数 | Transition 对应参数 |
| --------- | ---------------------- |
| mountOnEnter | mountOnEnter |
| transactionName | name |
| transitionAppear | appear |
| transactionTimeout | timeout |
| onTransitionEnter | onEnter |
| onTransitionEntered | onEntered |
| onTransitionExit | onExit |
| onTransitionExited | onExited |

### Popup.Backdrop Props

| 参数      | 说明                   | 类型               | 默认值  |
| --------- | ---------------------- | ------------------ | ------- |
| className | 背景板类名             | _string_           | `false` |
| style     | 背景板样式             | _CSSProperties_    | `false` |
| open      | 是否显示背景板         | _boolean_          | `false` |
| closeable | 是否在点击遮罩层后关闭 | _boolean_          | `true`  |
| duration  | 动画时长，单位毫秒     | _number \| string_ | `300`   |

### Popup.Close Props

| 参数      | 说明                                                         | 类型        | 默认值      |
| --------- | ------------------------------------------------------------ | ----------- | ----------- |
| placement | 关闭图标位置，可选值 `top-left` `bottom-left` `bottom-right` | _string_    | `top-right` |
| children  | 图标内容                                                     | _ReactNode_ | `<Cross />` |

### Events

| 事件名  | 说明             | 回调参数             |
| ------- | ---------------- | -------------------- |
| onClick | 点击弹出层时触发 | _event: ITouchEvent_ |
| onClose | 关闭弹出层时触发 | -                    |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider](/components/config-provider/) 组件。

| 名称                            | 默认值                           | 描述 |
| ------------------------------- | -------------------------------- | ---- |
| --popup-z-index                 | _1010_                           | -    |
| --popup-background-color        | _var(--background-color-light)_  | -    |
| --popup-animation-duration      | _var(--animation-duration-base)_ | -    |
| --popup-rounded-border-radius   | _16px \* $hd_                    | -    |
| --popup-close-icon-z-index      | _1_                              | -    |
| --popup-close-icon-size         | _22px \* $hd_                    | -    |
| --popup-close-icon-color        | _var(--gray-5)_                  | -    |
| --popup-close-icon-active-color | _var(--gray-6)_                  | -    |
| --popup-close-icon-margin       | _16px \* $hd_                    | -    |
