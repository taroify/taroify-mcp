## API

### Props

| 参数     | 说明                                                         | 类型               | 默认值      |
| -------- | ------------------------------------------------------------ | ------------------ | ----------- |
| content  | 徽标内容                                                     | _ReactNode_        | -           |
| dot      | 是否展示为小红点                                             | _boolean_          | `false`     |
| max      | 最大值，超过最大值会显示 `{max}+`，仅当 content 为数字时有效 | _number \| string_ | -           |
| position | 徽标位置，可选值为 `top-left` `bottom-left` `bottom-right`   | _string_           | `top-right` |