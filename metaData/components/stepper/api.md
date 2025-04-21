## API

### Stepper Props

| 参数         | 说明                                    | 类型               | 默认值    |
| ------------ | --------------------------------------- | ------------------ | --------- |
| defaultValue | 默认输入的值                            | _number \| string_ | -         |
| value        | 当前输入的值                            | _number \| string_ | -         |
| min          | 最小值                                  | _number \| string_ | `1`       |
| max          | 最大值                                  | _number \| string_ | -         |
| step         | 步长，每次点击时改变的值                | _number \| string_ | `1`       |
| size         | 按钮大小以及输入框高度，默认单位为 `px` | _number \| string_ | `28px`    |
| precision    | 固定显示的小数位数                      | _number \| string_ | -         |
| shape        | 样式风格，可选值为 `square` `circular`  | _string_           | `rounded` |
| placeholder  | 输入框占位提示文字                      | _string_           | -         |
| disabled     | 是否禁用步进器                          | _boolean_          | `false`   |
| longPress    | 是否开启长按手势                        | _boolean_          | `true`    |

### Stepper.Input Props

| 参数                     | 说明                        | 类型               | 默认值  |
| ------------------------ | --------------------------- | ------------------ | ------- |
| width                    | 输入框宽度，默认单位为 `px` | _number \| string_ | `32px`  |
| disabled                 | 是否禁用输入框              | _boolean_          | `false` |
| cursor `v0.1.0-alpha.10` | 指定 focus 时的光标位置     | _number_           | -       |

### Stepper.Button Props

| 参数     | 说明         | 类型      | 默认值  |
| -------- | ------------ | --------- | ------- |
| disabled | 是否禁用按钮 | _boolean_ | `false` |

### Events

| 事件名   | 说明                     | 回调参数        |
| -------- | ------------------------ | --------------- |
| onChange | 当绑定值变化时触发的事件 | _value: string_ |