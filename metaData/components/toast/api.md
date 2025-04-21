## API

### Props

| 参数                          | 说明                                                       | 类型                       | 默认值   |
| ----------------------------- | ---------------------------------------------------------- | -------------------------- | -------- |
| defaultOpen                   | 默认是否显示弹出层                                         | _boolean_                  | `false`  |
| open                          | 是否显示弹出层                                             | _boolean_                  | `false`  |
| type                          | 提示类型，可选值为 `loading` `success`<br>`fail` `html`    | _string_                   | `text`   |
| icon                          | 自定义图标，支持传入[图标名称](/components/icon)或图片链接 | _ReactNode_                | -        |
| position                      | 弹出位置，可选值为 `top` `bottom`                          | _string_                   | `center` |
| duration <br>`v0.4.0-alpha.0` | 动画时长，单位毫秒，值为 0 时，toast 不会消失              | _number \| string_         | `3000`   |
| backdrop                      | 是否显示遮罩层                                             | _boolean_                  | `false`  |
| children                      | 文本内容                                                   | _ReactNode_                | -        |
| onClose                       | 关闭时的回调函数                                           | _(open : boolean) => void_ | -        |

### Options

| 参数                          | 说明                                                                    | 类型                       | 默认值   |
| ----------------------------- | ----------------------------------------------------------------------- | -------------------------- | -------- |
| selector                      | 自定义节点选择器                                                        | _string_                   | `toast`  |
| type                          | 提示类型，可选值为 `loading` `success`<br>`fail` `html`                 | _string_                   | `text`   |
| icon                          | 自定义图标，支持传入[图标](/components/icon)或[图片](/components/image) | _ReactNode_                | -        |
| position                      | 弹出位置，可选值为 `top` `bottom`                                       | _string_                   | `center` |
| duration <br>`v0.4.0-alpha.0` | 动画时长，单位毫秒，值为 0 时，toast 不会消失                           | _number \| string_         | `3000`   |
| backdrop                      | 是否显示遮罩层                                                          | _boolean_                  | `false`  |
| message                       | 文本内容                                                                | _ReactNode_                | -        |
| onClose                       | 关闭时的回调函数                                                        | _(open : boolean) => void_ | -        |

### 方法

| 方法名            | 参数                 | 返回值 | 介绍                                           |
| ----------------- | -------------------- | ------ | ---------------------------------------------- |
| Toast.open        | _options \| message_ | _string \| undefined_ | 展示提示，返回 Toast 实例标识符  |
| Toast.loading     | _options \| message_ | _string \| undefined_ | 展示加载提示，返回 Toast 实例标识符 |
| Toast.success     | _options \| message_ | _string \| undefined_ | 展示成功提示，返回 Toast 实例标识符 |
| Toast.fail        | _options \| message_ | _string \| undefined_ | 展示失败提示，返回 Toast 实例标识符 |
| Toast.close       | _selector? \| id?_   | -      | 关闭提示，不传参时关闭所有提示，传入实例标识符时关闭指定提示 |
| Toast.allowMultiple `v0.7.0` | _boolean_          | -      | 允许同时存在多个 Toast 提示，默认为 `false`    |