## API

### IndexList Props

| 参数                             | 说明                                                | 类型               | 默认值                                       |
| -------------------------------- | --------------------------------------------------- | ------------------ | -------------------------------------------- |
| sticky                           | 是否开启锚点自动吸顶                                | _boolean_          | `true`                                       |
| stickyOffsetTop                  | 锚点自动吸顶时与顶部的距离                          | _number \| string_ | `0`                                          |
| inner <br>`v0.2.0-alpha.0`       | 是否是底部弹窗内使用                                | _boolean_          | `false`                                      |
| delay <br>`v0.2.0-alpha.0`       | inner 为 `true`，并且自定义了弹窗弹出动画时长时设置 | _number_           | inner 为 true 时候是 `300`，false 时候是 `0` |
| showSidebar <br>`v0.2.1-alpha.0` | 是否显示索引                                        | _boolean_          | `true`                                       |

### IndexList Events

| 事件名                        | 说明             | 回调参数                                    |
| ----------------------------- | ---------------- | ------------------------------------------- |
| onChange <br>`v0.2.1-alpha.0` | 索引位变化时触发 | _current: number, anchor: number \| string_ |

### IndexList Method

通过 `ref` 可以获取到 IndexList 实例并调用实例方法

| 方法名                        | 说明         | 参数  | 返回值 |
| :---------------------------- | ------------ | ----- | ------ |
| scrollTo <br>`v0.2.1-alpha.0` | 跳转指定位置 | index | -      |

### IndexList.Anchor Props

| 参数     | 说明     | 类型               | 默认值 |
| -------- | -------- | ------------------ | ------ |
| index    | 索引字符 | _number \| string_ | -      |
| children | 索引内容 | _ReactNode_        | -      |

### IndexList Events

| 事件名   | 说明                         | 回调参数                  |
| -------- | ---------------------------- | ------------------------- |
| onSelect | 点击索引栏的字符时触发       | _index: number \| string_ |
| onChange | 当前高亮的索引字符变化时触发 | _index: number \| string_ |