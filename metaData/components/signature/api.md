## API

### Signature Props

| 参数            | 说明               | 类型     | 默认值           |
| --------------- | ------------------ | -------- | ---------------- |
| type            | 导出图片类型       | _string_ | `png`            |
| penColor        | 笔触颜色，默认黑色 | _string_ | `#000`           |
| lineWidth       | 线条宽度           | _number_ | `3`              |
| backgroundColor | 背景颜色           | _string_ | -                |
| canvasId        | canvas id          | _string_ | `taroify-canvas` |

### Signature Events

| 事件名    | 说明           | 回调参数 |
| --------- | -------------- | -------- |
| onStart   | 开始签名时触发 | -        |
| onEnd     | 结束签名时触发 | -        |
| onSigning | 签名过程中触发 | -        |