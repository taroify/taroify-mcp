## API

### Props

| 参数      | 说明                                | 类型      | 默认值   |
| --------- | ----------------------------------- | --------- | -------- | ---- |
| right     | 距离页面右侧的距离，默认单位为 `px` | _number_  | _string_ | `30` |
| bottom    | 距离页面底部的距离，默认单位为 `px` | _number_  | _string_ | `40` |
| offset    | 滚动高度达到此参数值时才显示组件    | _number_  | `200`    |
| immediate | 是否瞬间滚动到顶部                  | _boolean_ | `false`  |
| zIndex    | 设置组件的 z-index 层级             | _number_  | `100`    |

### Event

| 事件    | 说明           | 回调参数            |
| ------- | -------------- | ------------------- |
| onClick | 点击组件时触发 | _event:ITouchEvent_ |

### 注意

非 `H5` 项目需要显式调用 `onClick`