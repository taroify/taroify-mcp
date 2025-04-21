## API

### Cell.Group Props

| 参数      | 说明                   | 类型      | 默认值  |
| --------- | ---------------------- | --------- | ------- |
| title     | 分组标题               | _string_  | `-`     |
| inset     | 是否展示为圆角卡片风格 | _boolean_ | `false` |
| bordered  | 是否显示外边框         | _boolean_ | `true`  |
| clickable | 是否开启点击反馈       | _boolean_ | `false` |

### Cell Props

| 参数                                | 说明                                                    | 类型               | 默认值  |
| ----------------------------------- | ------------------------------------------------------- | ------------------ | ------- |
| title                               | 左侧标题                                                | _number \| string_ | -       |
| children                            | 右侧内容                                                | _number \| string_ | -       |
| brief                               | 标题下方的描述信息                                      | _string_           | -       |
| size                                | 单元格大小，可选值为 `large`                            | _string_           | -       |
| icon                                | 左侧[图标](/components/icon)或[图片](/components/image) | _ReactNode_        | -       |
| rightIcon                           | 右侧[图标](/components/icon)或[图片](/components/image) | _ReactNode_        | -       |
| bordered                            | 是否显示内边框                                          | _boolean_          | `true`  |
| clickable                           | 是否开启点击反馈                                        | _boolean_          | `false` |
| isLink <br>`v0.1.1-alpha.5`         | 是否展示右侧箭头并开启点击反馈                          | _boolean_          | `false` |
| arrowDirection <br>`v0.1.1-alpha.5` | 箭头方向，可选值为 `left` `right` `up` `down`           | _string_           | `right` |
| required                            | 是否显示表单必填星号                                    | _boolean_          | `false` |
| align                               | 对齐方式，可选值为 `start` `center` `end`               | _string_           | -       |

### Cell Events

| 事件名  | 说明             | 回调参数            |
| ------- | ---------------- | ------------------- |
| onClick | 点击单元格时触发 | _event: MouseEvent_ |