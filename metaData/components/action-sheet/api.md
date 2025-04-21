## API

### ActionSheet Props

| 参数                             | 说明                                  | 类型                        | 默认值   |
| -------------------------------- | ------------------------------------- | --------------------------- | -------- |
| defaultOpen                      | 默认是否显示动作面板                  | _boolean_                   | `false`  |
| open                             | 是否显示动作面板                      | _boolean_                   | `false`  |
| description <br>`v0.3.0-alpha.0` | 选项上方的描述信息                    | _ReactNode_                 | -        |
| cancelText <br>`v0.3.0-alpha.0`  | 取消按钮文字                          | _ReactNode_                 | -        |
| actions <br>`v0.3.0-alpha.0`     | 面板选项列表                          | _ActionSheetActionObject[]_ | -        |
| className                        | 样式类名                              | _string_                    | -        |
| style                            | 样式对象                              | _CSSProperties_             | -        |
| rounded                          | 是否为圆角                            | _string_                    | -        |
| safeArea                         | 安全区的位置，可选值为 `top` `bottom` | _string_                    | `bottom` |

### ActionSheetActionObject 数据结构

| 参数      | 说明           | 类型        |
| --------- | -------------- | ----------- |
| name      | 标题           | _ReactNode_ |
| subname   | 二级标题       | _ReactNode_ |
| disabled  | 是否为禁用状态 | _boolean_   |
| loading   | 是否为加载状态 | _boolean_   |
| value     | 值             | _any_       |
| style     |                |             |
| className |                |             |

### ActionSheet.Backdrop Props

| 参数      | 说明               | 类型               | 默认值 |
| --------- | ------------------ | ------------------ | ------ |
| className | 样式类名           | _string_           | -      |
| style     | 样式对象           | _CSSProperties_    | -      |
| duration  | 动画时长，单位毫秒 | _number \| string_ | `300`  |
| closeable | 点击是否可以关闭   | _boolean_          | `true` |

### ActionSheet.Header Props

| 参数      | 说明     | 类型            | 默认值 |
| --------- | -------- | --------------- | ------ |
| className | 样式类名 | _string_        | -      |
| style     | 样式对象 | _CSSProperties_ | -      |
| title     | 标题     | _string_        | -      |
| children  | 描述信息 | _string_        | -      |

### ActionSheet.Action Props

| 参数      | 说明           | 类型            | 默认值 |
| --------- | -------------- | --------------- | ------ |
| className | 样式类名       | _string_        | -      |
| style     | 样式对象       | _CSSProperties_ | -      |
| name      | 标题           | _string_        | -      |
| value     | 选项值         | _string_        | -      |
| disabled  | 是否为禁用状态 | _boolean_       | -      |
| loading   | 是否为加载状态 | _boolean_       | -      |
| children  | 描述信息       | _string_        | -      |

### ActionSheet.Button Props

| 参数      | 说明                        | 类型            | 默认值   |
| --------- | --------------------------- | --------------- | -------- |
| className | 按钮类名                    | _string_        | -        |
| style     | 按钮样式                    | _CSSProperties_ | -        |
| type      | 按钮类型，可选值为 `cancel` | _string_        | `button` |
| children  | 按钮内容                    | _string_        | -        |

### ActionSheet Events

| 事件名   | 说明                                     | 回调参数                         |
| -------- | ---------------------------------------- | -------------------------------- |
| onSelect | 点击选项时触发，禁用或加载状态下不会触发 | _event: ActionSheet.ActionEvent_ |
| onCancel | 点击取消按钮时触发                       | -                                |
| onClose  | 关闭面板时触发                           | -                                |