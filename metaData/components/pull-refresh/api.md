## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| loading | 是否处于加载中状态 | _boolean_ | - |
| duration | 动画时长 | _number \| string_ | `300` |
| headHeight | 顶部内容高度 | _number \| string_ | `50` |
| reachTop | 是否处于顶部下拉 | _boolean_ | `true` |
| pullDistance | 触发下拉刷新的距离 | _number \| string_ | 与 `headHeight` 一致 |
| disabled | 是否禁用下拉刷新 | _boolean_ | `false` |

### Events

| 事件名  | 说明           | 回调参数 |
| ------- | -------------- | -------- |
| onRefresh | 下拉刷新时触发 | -        |