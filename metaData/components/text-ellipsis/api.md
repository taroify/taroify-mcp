## API

### Props

| 参数         | 说明                                | 类型               | 默认值  |
| ------------ | ----------------------------------- | ------------------ | ------- |
| rows         | 展示的行数                          | _number \| string_ | `1`     |
| content      | 需要展示的文本                      | _string_           | -       |
| expandText   | 展开操作的文案                      | _string_           | -       |
| collapseText | 收起操作的文案                      | _string_           | -       |
| dots         | 省略号的文本内容                    | _string_           | `'...'` |
| position     | 省略位置，可选值为 `start` `middle` | _string_           | `'end'` |

### Events

| 事件名        | 说明                | 回调参数            |
| ------------- | ------------------- | ------------------- |
| onClickAction | 点击展开/收起时触发 | _expanded: boolean_ |

### 方法

通过 `ref` 可以获取到 TextEllipsis 实例并调用实例方法

| 方法名 | 说明     | 参数 | 返回值 |
| :----- | -------- | ---- | ------ |
| toggle `v0.7.0`  | 切换文本的展开状态，传 true 为展开，false 为收起，不传参为切换 | _expanded?: boolean_   | -      |