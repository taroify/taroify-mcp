## API

### Props

| 参数      | 说明                                                         | 类型      | 默认值    |
| --------- | ------------------------------------------------------------ | --------- | --------- |
| size      | 大小，可选值为 `large` `medium`                              | _string_  | -         |
| color     | 类型，可选值为 `primary` `info` `success` `danger` `warning` | _string_  | `default` |
| shape     | 形状，可选值为 `rounded` `roundedRight` `roundedLeft`        | _string_  | `square`  |
| closeable | 是否为可关闭标签                                             | _boolean_ | `false`   |

### Events

| 事件名  | 说明           | 回调参数             |
| ------- | -------------- | -------------------- |
| onClick | 点击时触发     | _event: ITouchEvent_ |
| onClose | 关闭标签时触发 | _event: ITouchEvent_ |