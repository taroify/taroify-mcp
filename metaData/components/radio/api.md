## API

### Radio Props

| 参数           | 说明                      | 类型               | 默认值    |
| -------------- | ------------------------- | ------------------ | --------- |
| name           | 标识符                    | _any_              | -         |
| shape          | 形状，可选值为 `square`   | _string_           | `round`   |
| disabled       | 是否为禁用状态            | _boolean_          | `false`   |
| size           | 图标大小，默认单位为`px`  | _number \| string_ | `20px`    |

### Radio.Group Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认选中项的标识符 | _any_ | - |
| value | 当前选中项的标识符 | _any_ | - |
| disabled | 是否禁用所有单选框 | _boolean_ | `false` |
| direction | 排列方向，可选值为`horizontal` | _string_ | `vertical` |
| size | 所有单选框的图标大小，默认单位为`px` | _number \| string_ | `20px` |

### Radio.Group Events

| 事件名 | 说明                     | 回调参数       |
| ------ | ------------------------ | -------------- |
| onChange | 当绑定值变化时触发的事件 | _name: string_ |