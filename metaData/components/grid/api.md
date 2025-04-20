## API

### Grid Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 列数 | _number \| string_ | `4` |
| iconSize | 图标大小，默认单位为`px` | _number \| string_ | `28px` |
| gutter | 格子之间的间距，默认单位为`px` | _number \| string_ | `0` |
| bordered | 是否显示边框 | _boolean_ | `true` |
| centered | 是否将格子内容居中显示 | _boolean_ | `true` |
| square | 是否将格子固定为正方形 | _boolean_ | `false` |
| clickable | 是否开启格子点击反馈 | _boolean_ | `false` |
| direction | 格子内容排列的方向，可选值为 `horizontal` | _string_ | `vertical` |

### Grid.Item Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 文字 | _string_ | - |
| icon | [图标](/components/icon)或[图片](/components/image) | _ReactNode_ | - |
| badge | 图标上徽标的内容 | _boolean \| number \| string \| Badge \| ReactNode_ | - |

### Grid.Item Events

| 事件名     | 说明      | 回调参数                |
|---------|---------|---------------------|
| onClick | 点击格子时触发 | _event: MouseEvent_ |