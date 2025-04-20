## API

### PasswordInput Props

| 参数       | 说明                                  | 类型           | 默认值                         |
|----------|-------------------------------------|--------------|-----------------------------|
| value    | 密码值                                 | _string_     | `''`                        |
| length   | 密码最大长度                              | _number \| string_                     | `6` |
| gutter   | 输入框格子之间的间距，如 `20px` `2em`，默认单位为`px` | _number \| string_                     | `0` |
| mask     | 是否隐藏密码内容                            | _boolean_    | `true`                      |
| focus    | 是否聚焦，聚焦时会显示光标                       | _boolean_    | `false`                     |
| feedback | 输入框下方文字提示           | _ReactText \| PasswordInputFeedbackProps \| ReactElement_ | - |

### PasswordInput Events

| 事件名     | 说明       | 回调参数 |
|---------|----------|------|
| onFocus | 输入框聚焦时触发 | -    |


### PasswordInput.Feedback Props

| 参数    | 说明                                                      | 类型       | 默认值 |
|-------|---------------------------------------------------------|----------|-----|
| color | 颜色，可选值为 `primary` `info` `success`  `warning`  `danger` | _string_ | -   |