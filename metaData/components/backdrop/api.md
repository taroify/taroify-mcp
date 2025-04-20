## API

### Props

| 参数        | 说明                     | 类型        | 默认值  |
| ----------- | ------------------------ | ----------- | ------- |
| className   | 自定义类名               | _string_    | -       |
| children    | 用于在遮罩层上方嵌入内容 | _ReactNode_ | -       |
| defaultOpen | 是否默认展示遮罩层       | _boolean_   | `false` |
| open        | 是否展示遮罩层           | _boolean_   | `false` |
| duration    | 动画时长，单位毫秒       | _number_    | `300`   |
| lock        | 是否锁定背景滚动         | _boolean_   | `true`  |
| closeable   | 点击遮罩层时是否关闭     | _boolean_   | `false` |

### Event

| 事件    | 说明       | 回调参数 |
| ------- | ---------- | -------  |
| onClick | 点击时触发 | -        |
| onClose | 关闭时触发 | -        |