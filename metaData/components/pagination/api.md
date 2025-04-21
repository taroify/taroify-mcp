## API

### Props

| 参数                      | 说明                       | 类型     | 默认值 |
| ------------------------- | -------------------------- | -------- | ------ |
| current                   | 当前页码                   | _number_ | -      |
| mode `v0.1.0-alpha.9`     | 显示模式，可选值为 simple  | _string_ | multi  |
| prevText `v0.1.0-alpha.9` | 上一页按钮文字             | _string_ | 上一页 |
| nextText `v0.1.0-alpha.9` | 下一页按钮文字             | _string_ | 下一页 |
| siblingCount              | 当前页码两侧显示的数字个数 | _number_ | `2`    |
| count                     | 总页数                     | _number_ | -      |

### Events

| 事件名   | 说明           | 回调参数 |
| -------- | -------------- | -------- |
| onChange | 页码改变时触发 | -        |