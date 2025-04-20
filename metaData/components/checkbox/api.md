## API

### Checkbox Props

| 参数           | 说明                      | 类型               | 默认值    |
| -------------- | ------------------------- | ------------------ | --------- |
| defaultChecked | 默认是否为选中状态            | _boolean_          | `false`   |
| checked        | 是否为选中状态            | _boolean_          | `false`   |
| name           | 标识符                    | _any_              | -         |
| shape          | 形状，可选值为 `square`   | _string_           | `round`   |
| disabled       | 是否禁用复选框            | _boolean_          | `false`   |
| size      | 图标大小，默认单位为 `px` | _number \| string_ | `20px`    |

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认所有选中项的标识符 | _any[]_  | -   |
| value | 所有选中项的标识符 | _any[]_ | - |
| disabled | 是否禁用所有复选框 | _boolean_ | `false` |
| max | 最大可选数，`0` 为无限制 | _number \| string_ | `0` |
| direction | 排列方向，可选值为 `horizontal` | _string_ | `vertical` |
| size | 所有复选框的图标大小，默认单位为 `px` | _number \| string_ | `20px` |

### Checkbox Events

| 事件名 | 说明                     | 回调参数            |
| ------ | ------------------------ | ------------------- |
| onChange | 当绑定值变化时触发的事件 | _checked: boolean_  |

### CheckboxGroup Events

| 事件名 | 说明                     | 回调参数       |
| ------ | ------------------------ | -------------- |
| onChange | 当绑定值变化时触发的事件 | _names: any[]_ |