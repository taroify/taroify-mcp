## API

### Sidebar Props

| 参数    | 说明             | 类型               | 默认值 |
| ------- | ---------------- | ------------------ | ------ |
| defaultValue | 默认导航项的索引 | _number \| string_ | `0`    |
| value | 当前导航项的索引 | _number \| string_ | `0`    |

### Sidebar Events

| 事件名 | 说明             | 回调参数        |
| ------ | ---------------- | --------------- |
| onChange | 切换导航项时触发 | _value: any, tab: Sidebar.TabObject_ |

### Sidebar.Tab Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用该项 | _boolean_ | `false` |
| children | 内容 | _ReactNode_ | - |
| badge | 图标上徽标的内容 | _boolean \| number \| string \| Badge \| ReactNode_ | - |

### Sidebar.Tab Events

| 事件名 | 说明       | 回调参数        |
| ------ | ---------- | --------------- |
| onClick  | 点击时触发 | _event: ITouchEvent_|