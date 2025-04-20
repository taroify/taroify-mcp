## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultOpen | 默认是否打开滑动单元格，可选值：`left` `right` `outside`  | _string_ | - |
| open | 是否打开滑动单元格，可选值：`left` `right` `outside`  | _string_ | - |
| beforeClose | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 Promise | _(args) => boolean \| Promise\<boolean\>_ | - |
| disabled | 是否禁用滑动 | _boolean_ | `false` |
| stopPropagation | 是否阻止滑动事件冒泡 | _boolean_ | `false` |
| catchMove | 是否捕获触摸移动事件 | _boolean_ | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onOpen | 打开时触发 | _position: 'left' \| 'right'_ |
| onClose | 关闭时触发 | _position: 'left' \| 'right' \| 'cell' \| 'outside'_ |