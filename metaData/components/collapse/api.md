## API

### Collapse Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认展开面板的 value | 手风琴模式：_number \| string_<br>非手风琴模式：_(number \| string)[]_ | - |
| value | 当前展开面板的 value | 手风琴模式：_number \| string_<br>非手风琴模式：_(number \| string)[]_ | - |
| accordion | 是否开启手风琴模式 | _boolean_ | `false` |
| bordered | 是否显示外边框 | _boolean_ | `true` |

### Collapse Events

| 事件名 | 说明           | 回调参数                                 |
| ------ | -------------- | ---------------------------------------- |
| onChange | 切换面板时触发 | _value: any_ |

### Collapse.Item Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 唯一标识符，默认为索引值 | _number \| string_ | `index` |
| icon | 标题栏左侧[图标](/components/icon)或[图片](/components/image) | _ReactNode_ | - |
| expandIcon | 标题栏右侧[图标](/components/icon)或[图片](/components/image) | _ReactNode_ | - |
| size | 标题栏大小，可选值为 `large` | _string_ | - |
| title | 标题栏左侧内容 | _number \| string_ | - |
| extra | 标题栏右侧内容 | _number \| string_ | - |
| brief | 标题栏描述信息 | _number \| string_ | - |
| bordered | 是否显示内边框 | _boolean_ | `true` |
| clickable| 是否开启点击反馈 | _boolean_ | `true` |
| disabled | 是否禁用面板 | _boolean_ | `false` |