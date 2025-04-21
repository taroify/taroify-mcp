## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认当前分值 | _number_ | - |
| value | 当前分值 | _number_ | - |
| count | 图标总数 | _number \| string_ | `5` |
| size | 图标大小，默认单位为`px` | _number \| string_ | `20px` |
| gutter | 图标间距，默认单位为`px` | _number \| string_ | `4px` |
| icon | 选中时的图标 | _string_ | `<Star />` |
| emptyIcon | 未选中时的图标 | _string_ | `<StarOutlined />` |
| allowHalf | 是否允许半选 | _boolean_ | `false` |
| readonly | 是否为只读状态，只读状态下无法修改评分 | _boolean_ | `false` |
| disabled | 是否禁用评分 | _boolean_ | `false` |
| touchable | 是否可以通过滑动手势选择评分 | _boolean_ | `true` |

### Events

| 事件名 | 说明                     | 回调参数 |
| ------ | ------------------------ | -------- |
| onChange | 当前分值变化时触发的事件 | _value :number_ |