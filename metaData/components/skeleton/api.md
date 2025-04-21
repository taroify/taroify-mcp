## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| row | 段落占位图行数 | _number \| string_ | `0` |
| rowWidth | 段落占位图宽度，可传数组来设置每一行的宽度 | _number \| string \| (number \| string)[]_ | `100%` |
| title | 是否显示标题占位图 | _boolean_ | `false` |
| avatar | 是否显示头像占位图 | _boolean_ | `false` |
| loading | 是否显示骨架屏，传 `false` 时会展示子组件内容 | _boolean_ | `true` |
| animate | 是否开启动画 | _boolean_ | `true` |
| round | 是否将标题和段落显示为圆角风格 | _boolean_ | `false` |
| titleWidth | 标题占位图宽度 | _number \| string_ | `40%` |
| avatarSize | 头像占位图大小 | _number \| string_ | `32px` |
| avatarShape | 头像占位图形状，可选值为 `square` | _square \| round_ | `round` |
| template | 骨架屏自定义 | _ReactNode_ | `-` |

### Skeleton.Paragraph Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| round | 是否将段落显示为圆角风格 | _boolean_ | `false` |
| rowWidth | 段落占位图宽度 | _number \| string_ | `100%` |

### Skeleton.Title Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| round | 是否将段落显示为圆角风格 | _boolean_ | `false` |
| titleWidth | 标题占位图宽度 | _number \| string_ | `100%` |

### Skeleton.Avatar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| avatarSize | 头像占位图大小 | _number \| string_ | `32px` |
| avatarShape | 头像占位图形状，可选值为 `square` | _square \| round_ | `round` |

### Skeleton.Image Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| imageSize | 图片占位图大小 | _number \| string_ | `32px` |
| imageShape | 图片占位图形状，可选值为 `square` | _square \| round_ | `round` |