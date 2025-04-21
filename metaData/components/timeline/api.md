## API

### Timeline Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| position | 位置布局，可选值为 `left` `right` `alternate` `alternate-reverse` | _string_ | - |

### Timeline.Item Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dot | 圆点 | _ReactNode \| TimelineDotProps_ | - |

### Timeline.Dot Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| variant | 圆点变体，可选值为 `outlined` | _string_ | `filled` |
| color | 圆点颜色，可选值为 `primary` `info` `success` `warning` `danger` | _string_ | `default` |