## API

### Navbar Props

| 参数          | 说明                                                    | 类型      | 默认值  |
| ------------- | ------------------------------------------------------- | --------- | ------- |
| title         | 标题                                                    | _string_  | `''`    |
| bordered      | 是否显示下边框                                          | _boolean_ | `false`  |
| fixed         | 是否固定在顶部                                          | _boolean_ | `false` |
| safeArea      | 安全区域，可选值 `top` `bottom`，仅在`fixed=true`时有效 | _string_  | -       |
| nativeSafeTop | 是否启用顶部安全区域原生属性                            | _boolean_ | `false` |
| placeholder   | 固定在顶部时，是否在标签位置生成一个等高的占位元素      | _boolean_ | `false` |

### Navbar.NavLeft Props

| 参数     | 说明     | 类型        | 默认值 |
| -------- | -------- | ----------- | ------ |
| icon     | 左侧图标 | _Icon_      | -      |
| children | 左侧文案 | _ReactNode_ | -      |

### Navbar.NavRight Props

| 参数     | 说明     | 类型        | 默认值 |
| -------- | -------- | ----------- | ------ |
| icon     | 右侧图标 | _Icon_      | -      |
| children | 右侧文案 | _ReactNode_ | -      |