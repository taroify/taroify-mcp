## API

### Props

| 参数                              | 说明                                                      | 类型             | 默认值  |
| --------------------------------- | --------------------------------------------------------- | ---------------- | ------- |
| defaultValue                      | 默认选中的值                                              | _string[]_       | -       |
| value                             | 选中的值                                                  | _string[]_       | -       |
| areaList <br>`v0.1.1-alpha.7`     | 省市区数据                                                | _object_         | -       |
| depth                             | 显示列数，3-省市区，2-省市，1-省                          | _string_         | `3`     |
| title <br>`v0.1.1-alpha.7`        | 顶部栏标题                                                | _ReactNode_      | -       |
| confirmText <br>`v0.1.1-alpha.7`  | 确认按钮文字                                              | _ReactNode_      | `确认`  |
| cancelText <br>`v0.1.1-alpha.7`   | 取消按钮文字                                              | _ReactNode_      | `取消`  |
| loading                           | 是否显示加载状态                                          | _boolean_        | `false` |
| readonly                          | 是否为只读状态，只读状态下无法切换选项                    | _boolean_        | `false` |
| siblingCount                      | 可见的选项相邻个数                                        | _number_         | `3`     |
| optionHeight <br>`v0.1.1-alpha.7` | 选项高度，支持 `px` `vw` `vh` `rem` `rpx` 单位，默认 `px` | _number\|string_ | `44`    |

### Events

| 事件      | 说明               | 回调参数                                                                   |
| --------- | ------------------ | -------------------------------------------------------------------------- |
| onConfirm | 点击完成按钮时触发 | _values: string[], options: PickerOptionObject[]_                          |
| onCancel  | 点击取消按钮时触发 | _values: string[], options: PickerOptionObject[]_                          |
| onChange  | 选项改变时触发     | _values: string[], option: PickerOptionObject, column: PickerOptionObject_ |