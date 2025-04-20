## API

### Flex Props

| 参数         | 说明             | 类型               | 默认值                          |
| ------------ | ---------------- | ------------------ | ------------------------------- |
| open         | 是否打开         | _boolean_          | `false`                         |
| data         | 悬浮导航内数据   | _FixedNavItem[]_   | `[]`                            |
| backdrop     | 是否显示遮罩层   | _boolean_          | `true`                          |
| activeText   | 收起按钮文案     | _string_           | `收起导航`                      |
| inactiveText | 展开按钮文案     | _string_           | `快速导航`                      |
| type         | 悬浮导航方向     | _left \| right_    | `right`                         |
| position     | 悬浮导航垂直位置 | _FixedNavPosition_ | `{top: 'auto', bottom: 'auto'}` |
| content      | 自定义按钮       | _ReactNode_        | `-`                             |

### Events

| 事件名   | 说明             | 回调参数         |
| -------- | ---------------- | ---------------- |
| onChange | 展开收起按钮回调 | _value: boolean_ |
| onClick  | 选择之后触发     | _item_           |