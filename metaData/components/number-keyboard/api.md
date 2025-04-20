## API

### NumberKeyboard Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前输入值 | _string_ | - |
| open | 是否显示键盘 | _boolean_ | - |
| title | 键盘标题 | _string_ | - |
| maxlength | 输入值最大长度 | _number \| string_ | - |
| transition | 是否开启过场动画 | _boolean_ | `true` |
| extraKey | 底部额外按键的内容 | _ReactNode \| [ReactNode, ReactNode]_ | `''` |
| random | 是否将通过随机顺序展示按键 | _boolean_ | `false` |

### NumberKeyboard Events

| 事件名 | 说明                           | 回调参数      |
| ------ | ------------------------------ | ------------- |
| onChange  | 点击按键时触发                 | key: 按键内容 |
| onBackspace | 点击删除键时触发               | -             |
| onHide  | 点击关闭按钮时触发             | -             |