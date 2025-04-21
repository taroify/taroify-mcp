## API

### Tabs Props

| 参数                                | 说明                                                           | 类型                                                | 默认值  |
| ----------------------------------- | -------------------------------------------------------------- | --------------------------------------------------- | ------- |
| defaultValue                        | 绑定默认选中标签的标识符                                       | _number \| string_                                  | `0`     |
| value                               | 绑定当前选中标签的标识符                                       | _number \| string_                                  | `0`     |
| theme                               | 样式风格类型，可选值为 `card`                                  | _string_                                            | `line`  |
| duration                            | 动画时间，单位毫秒                                             | _number \| string_                                  | `300`   |
| animated                            | 是否开启切换标签内容时的转场动画                               | _boolean_                                           | `false` |
| bordered                            | 是否显示标签栏外边框，仅在 `type="line"` 时有效                | _boolean_                                           | `false` |
| ellipsis                            | 是否省略过长的标题文字                                         | _boolean_                                           | `true`  |
| sticky                              | 是否使用粘性定位布局                                           | _boolean \| { offsetTop }_                          | `false` |
| shrink                              | 是否使用收缩布局                                               | _boolean                                            | `false` |
| swipeable                           | 是否开启手势左右滑动切换                                       | _boolean_                                           | `false` |
| swipeThreshold <br>`v0.1.0-alpha.8` | 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动 | _number_                                            | `5`     |
| lazyRender                          | 是否延迟渲染未展示的选项卡                                     | _boolean_                                           | `false` |
| dot <br>`v0.1.1-alpha.11`           | 是否展示为小红点                                               | _boolean_                                           | `false` |
| badge <br>`v0.1.1-alpha.11`         | 图标上徽标的内容                                               | _boolean \| number \| string \| Badge \| ReactNode_ | -       |

### Tabs.Pane Props

| 参数     | 说明                 | 类型               | 默认值       |
| -------- | -------------------- | ------------------ | ------------ |
| value    | 标签值，作为匹配的值 | _number \| string_ | 标签的索引值 |
| title    | 标题                 | _ReactNode_        | -            |
| disabled | 是否禁用标签         | _boolean_          | `false`      |
| children | 标签面板内容         | _ReactNode_        | -            |

### Tabs Events

| 事件名     | 说明                     | 回调参数                            |
| ---------- | ------------------------ | ----------------------------------- |
| onTabClick | 点击标签时触发           | _event : Tabs.TabEvent_             |
| onChange   | 当前激活的标签改变时触发 | _value: any, event : Tabs.TabEvent_ |