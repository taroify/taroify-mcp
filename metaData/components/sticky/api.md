## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| position | 吸附位置，可选值为 `bottom` | _string_ | `top` |
| offsetTop | 吸顶时与顶部的距离，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `0` |
| offsetBottom | 吸底时与底部的距离，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `0` |
| container | 容器对应的 HTML 节点 | _Element_ | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onChange | 当吸顶状态改变时触发 | _fixed: boolean_ |