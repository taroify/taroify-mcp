## API

### Props

| 参数           | 说明                     | 类型               | 默认值    |
| -------------- | ------------------------ | ------------------ | --------- |
| defaultChecked | 默认开关选中状态             | _boolean_              | `false`   |
| checked        | 开关选中状态             | _boolean_              | `false`   |
| loading        | 是否为加载状态           | _boolean_          | `false`   |
| disabled       | 是否为禁用状态           | _boolean_          | `false`   |
| size           | 开关尺寸，默认单位为`px` | _number \| string_ | `30px`    |

### Events

| 事件名 | 说明               | 回调参数            |
| ------ | ------------------ | ------------------- |
| onChange | 开关状态切换时触发 | _value: boolean_        |