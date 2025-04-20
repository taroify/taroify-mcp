## API

### Slider Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 当前进度百分比，在双滑块模式下为数组格式 | _number \| [number, number]_ | `0` |
| value | 当前进度百分比，在双滑块模式下为数组格式 | _number \| [number, number]_ | `0` |
| max | 最大值 | _number \| string_ | `100` |
| min | 最小值 | _number \| string_ | `0` |
| step | 步长 | _number \| string_ | `1` |
| size | 进度条高度，默认单位为 `px` | _number \| string_ | `2px` |
| range | 是否开启双滑块模式 | _boolean_ | `false` |
| disabled | 是否禁用滑块 | _boolean_ | `false` |
| readonly | 是否为只读状态，只读状态下无法修改滑块的值 | _boolean_ | `false` |
| orientation | 滑块按钮展示方向，`vertical` 为垂直展示 | _SliderOrientation_ | `horizontal` |

### Slider.Thumb Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 滑块按钮大小，默认单位为 `px` |_number \| string_ | `24px` |

### Slider Events

| 事件名      | 说明           | 回调参数            |
|----------|--------------|-----------------|
| onChange | 进度变化且结束拖动后触发 | _value: number_ |