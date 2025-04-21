## API

### Tabbar Props

| 参数           | 说明                        | 类型        | 默认值     |
|--------------|---------------------------|-----------|---------|
| defaultValue | 默认选中标签的标识或索引值             | _any_     | `0`     |
| value        | 当前选中标签的标识或索引值             | _any_     | `0`     |
| bordered     | 是否显示外边框                   | _boolean_ | `false` |
| fixed        | 是否固定在底部                   | _boolean_ | `false` |
| safeArea     | 安全区域，可选值 `top` `bottom`，仅在`fixed=true`时有效   | _string_  | -       |
| placeholder  | 固定在底部时，是否在标签位置生成一个等高的占位元素 | _boolean_ | `false` |

### Tabbar Events

| 事件名 | 说明           | 回调参数                   |
| ------ | -------------- | -------------------------- |
| onChange | 切换标签时触发 | _value: any_ |

### Tabbar.TabItem Props

| 参数       | 说明                                             | 类型          | 默认值      |
|----------|------------------------------------------------|-------------|----------|
| value    | 标签值，作为匹配的标识符                                   | _any_       | -        |
| icon     | [图标](/components/icon)或[图片](/components/image) | _ReactNode_ | -        |
| badge | 图标上徽标的内容 | _boolean \| number \| string \| Badge \| ReactNode_ | - |
| children | 标签名                                            | _ReactNode_ | -        |