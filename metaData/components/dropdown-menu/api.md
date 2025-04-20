## API

### DropdownMenu Props

| 参数                              | 说明                               | 类型     | 默认值  |
| --------------------------------- | ---------------------------------- | -------- | ------- |
| direction                         | 菜单展开方向，可选值为`up`         | _string_ | `down`  |
| backdropType <br>`v0.2.3-alpha.0` | 背景板位置，可选值 `inner` `outer` | _string_ | `inner` |

### DropdownMenu.Item Props

| 参数                         | 说明                   | 类型                             | 默认值         |
| ---------------------------- | ---------------------- | -------------------------------- | -------------- |
| defaultValue                 | 默认选中项对应的 value | _any_                            | -              |
| value                        | 当前选中项对应的 value | _any_                            | -              |
| title                        | 菜单项标题             | _string_                         | 当前选中项文字 |
| disabled                     | 是否禁用菜单           | _boolean_                        | `false`        |
| lock <br>`v0.1.7-alpha.0`    | 是否锁定背景滚动       | _boolean_                        | `false`        |
| options <br>`v0.1.7-alpha.0` | 选项数组               | 同下方 DropdownMenu.Option Props | -              |

### DropdownMenu.Item Events

| 事件名                    | 说明                          | 回调参数     |
| ------------------------- | ----------------------------- | ------------ |
| onChange                  | 点击选项导致 value 变化时触发 | _value: any_ |
| onOpen `v0.1.1-alpha.1`   | 打开菜单栏时触发              | -            |
| onClose `v0.1.1-alpha.1`  | 关闭菜单栏时触发              | -            |
| onOpened `v0.1.1-alpha.1` | 打开菜单栏且动画结束后触发    | -            |
| onClosed `v0.1.1-alpha.1` | 关闭菜单栏且动画结束后触发    | -            |

### DropdownMenu.Option Props

| 键名  | 说明                                                    | 类型        |
| ----- | ------------------------------------------------------- | ----------- |
| value | 标识符                                                  | _any_       |
| icon  | 左侧[图标](/components/icon)或[图片](/components/image) | _ReactNode_ |
| title | 展示 DropdownMenu 选中的 title 内容                     | _ReactNode_ |