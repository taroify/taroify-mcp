## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultTabValue | 左侧默认选中项的索引 | _number \| string_ | `0` |
| tabValue | 左侧选中项的索引 | _number \| string_ | `0` |
| defaultValue | 右侧默认选中项的 value，支持传入数组 | _number \| string \|<br>(number \| string)[]_ | `0` |
| value | 右侧选中项的 value，支持传入数组 | _number \| string \|<br>(number \| string)[]_ | `0` |
| max | 右侧项最大选中个数 | _number \| string_ | `Infinity` |
| activeIcon | 自定义右侧栏选中状态的图标 | _ReactNode_ | `<Success />` |

### Events

| 事件名     | 说明                 | 回调参数                  |
| ---------- | -------------------- | ------------------------- |
| onTabChange | 点击左侧导航时触发   | _value: any, tabObject: TreeSelect.TabObject_ |
| onChange | 点击右侧选择项时触发 | _any \| any[]_     |