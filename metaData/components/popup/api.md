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