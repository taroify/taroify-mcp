## API

### Dialog Props

| 参数                          | 说明                                  | 类型                                          | 默认值   |
| ----------------------------- | ------------------------------------- | --------------------------------------------- | -------- |
| defaultOpen                   | 默认是否显示弹窗                      | _boolean_                                     | -        |
| open                          | 是否显示弹窗                          | _boolean_                                     | -        |
| children                      | 组件内容                              | _ReactNode_                                   | -        |
| backdrop `v0.6.0-alpha.0`     | 遮罩层相关配置                        | _boolean \| Omit<PopupBackdropProps, "open">_ | -        |
| title `v0.6.0-alpha.0`        | 标题                                  | _ReactNode_                                   | -        |
| message `v0.6.0-alpha.0`      | 文本内容，支持通过 `\n` 换行          | _ReactNode_                                   | -        |
| messageAlign `v0.6.0-alpha.0` | 内容对齐方式，可选值为 `left` `right` | _string_                                      | `center` |
| confirm `v0.6.0-alpha.0`      | 确认按钮                              | _string \| ButtonProps_                       | -        |
| cancel `v0.6.0-alpha.0`       | 取消按钮                              | _string \| ButtonProps_                       | -        |

### Dialog Event

| 事件名    | 说明           | 回调参数 |
| --------- | -------------- | -------- |
| onConfirm | 点击确认时触发 | -        |
| onCancel  | 点击取消时触发 | -        |

### Dialog.Header Props

| 参数     | 说明     | 类型        | 默认值 |
| -------- | -------- | ----------- | ------ |
| children | 标题内容 | _ReactNode_ | -      |

### Dialog.Content Props

| 参数     | 说明                                  | 类型        | 默认值   |
| -------- | ------------------------------------- | ----------- | -------- |
| align    | 文本对齐方式，可选值为 `left` `right` | _string_    | `center` |
| children | 文本内容                              | _ReactNode_ | -        |

### Dialog.Actions Props

| 参数     | 说明                         | 类型        | 默认值    |
| -------- | ---------------------------- | ----------- | --------- |
| variant  | 样式风格，可选值为 `rounded` | _string_    | `default` |
| children | 按钮内容                     | _ReactNode_ | -         |

### Dialog Options

| 参数                      | 说明                                  | 类型                                          | 默认值   |
| ------------------------- | ------------------------------------- | --------------------------------------------- | -------- |
| selector                  | 自定义节点选择器                      | _string_                                      | `toast`  |
| className                 | 自定义类名                            | _string_                                      | -        |
| style                     | 自定义样式                            | _CSSProperties_                               | -        |
| title                     | 标题                                  | _ReactNode_                                   | -        |
| message                   | 文本内容，支持通过 `\n` 换行          | _ReactNode_                                   | -        |
| messageAlign              | 内容对齐方式，可选值为 `left` `right` | _string_                                      | `center` |
| backdrop `v0.6.0-alpha.0` | 遮罩层相关配置                        | _boolean \| Omit<PopupBackdropProps, "open">_ | -        |
| confirm                   | 确认按钮                              | _string \| ButtonProps_                       | -        |
| cancel                    | 取消按钮                              | _string \| ButtonProps_                       | -        |
| onConfirm                 | 确认事件                              | _() => void_                                  | -        |
| onCancel                  | 取消事件                              | _() => void_                                  | -        |

### Dialog Methods

| 方法名         | 参数                 | 返回值 | 介绍             |
| -------------- | -------------------- | ------ | ---------------- |
| Dialog.open    | _options \| message_ | -      | 展示弹窗         |
| Dialog.alert   | _options \| message_ | -      | 展示消息提示弹窗 |
| Dialog.confirm | _options \| message_ | -      | 展示消息确认弹窗 |