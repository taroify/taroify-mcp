## API

### Picker Props

| 参数                                   | 说明                                                      | 类型                                         | 默认值                            |
| -------------------------------------- | --------------------------------------------------------- | -------------------------------------------- | --------------------------------- |
| defaultValue                           | 默认选中的值                                              | _string \| string[]_                         | -                                 |
| value                                  | 选中的值                                                  | _string \| string[]_                         | -                                 |
| title                                  | 顶部栏标题                                                | _ReactNode_                                  | -                                 |
| confirmText <br>`v0.1.1-alpha.5`       | 确认按钮文字                                              | _ReactNode_                                  | `确认`                            |
| cancelText <br>`v0.1.1-alpha.5`        | 取消按钮文字                                              | _ReactNode_                                  | `取消`                            |
| columns <br>`v0.1.1-alpha.5`           | 对象数组，配置每一列显示的数据                            | _PickerOptionData[] \| PickerOptionData[][]_ | -                                 |
| columnsFieldNames <br>`v0.1.1-alpha.5` | 自定义 columns 结构中的字段                               | _{label?: string,value?: string}_            | `{label: "label",value: "value"}` |
| loading                                | 是否显示加载状态                                          | _boolean_                                    | `false`                           |
| readonly                               | 是否为只读状态，只读状态下无法切换选项                    | _boolean_                                    | `false`                           |
| siblingCount                           | 可见的选项相邻个数                                        | _number_                                     | `3`                               |
| optionHeight <br>`v0.1.1-alpha.5`      | 选项高度，支持 `px` `vw` `vh` `rem` `rpx` 单位，默认 `px` | _number\|string_                             | `44`                              |

### Picker Events

当选择器有多列时，事件回调参数会返回数组。

| 事件名    | 说明               | 回调参数                                                                             |
| --------- | ------------------ | ------------------------------------------------------------------------------------ |
| onConfirm | 点击完成按钮时触发 | 单列：选中值，选中值对应的选项对象<br>多列：所有列选中值，所有列选中值对应的选项对象 |
| onCancel  | 点击取消按钮时触发 | 单列：选中值，选中值对应的选项对象<br>多列：所有列选中值，所有列选中值对应的选项对象 |
| onChange  | 选项改变时触发     | 单列：选中值，选中值对应的选项对象<br>多列：所有列选中值，当前列对应的选项对象       |

### Picker.Toolbar Props

| 参数     | 说明     | 类型       | 默认值 |
| -------- | -------- | ---------- | ------ |
| children | 头部内容 | _ReactNoe_ | -      |

### Picker.Title Props

| 参数     | 说明       | 类型       | 默认值 |
| -------- | ---------- | ---------- | ------ |
| children | 顶部栏标题 | _ReactNoe_ | -      |

### Picker.Button Props

| 参数     | 说明     | 类型                    | 默认值 |
| -------- | -------- | ----------------------- | ------ |
| children | 按钮内容 | _ReactNoe_              | -      |
| type     | 按钮类型 | _"cancel" \| "confirm"_ | -      |

### Picker.Column Props

| 参数     | 说明     | 类型       | 默认值 |
| -------- | -------- | ---------- | ------ |
| children | 一列选项 | _ReactNoe_ | -      |

### Picker.Option Props

| 参数     | 说明         | 类型       | 默认值  |
| -------- | ------------ | ---------- | ------- |
| children | 选项内容     | _ReactNoe_ | -       |
| value    | 选项对应的值 | _string_   | -       |
| label    | 选项内容     | _ReactNoe_ | -       |
| disabled | 是否禁用选项 | _boolean_  | `false` |