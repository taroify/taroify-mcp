## API

### Props

| 参数                        | 说明                                         | 类型                       | 默认值   |
| --------------------------- | -------------------------------------------- | -------------------------- | -------- |
| className                   | 自定义类名                                   | _string_                   | -        |
| style                       | 组件样式                                     | _CSSProperties_            | -        |
| defaultOpen                 | 默认是否显示消息提示                         | _boolean_                  | -        |
| open                        | 是否显示消息提示                             | _boolean_                  | -        |
| type                        | 类型，可选值为 `primary` `success` `warning` | _string_                   | `danger` |
| color `v0.6.0-alpha.0`      | 字体颜色                                     | _string_                   | -        |
| background `v0.6.0-alpha.0` | 背景颜色                                     | _string_                   | -        |
| duration                    | 展示时长(ms)，值为 0 时，notify 不会消失     | _number_                   | `3000`   |
| children                    | 展示文案，支持通过`\n`换行                   | _ReactNode_                | -        |
| onClose                     | 关闭时的回调函数                             | _(open : boolean) => void_ | -        |

### Options

| 参数      | 说明                                         | 类型                       | 默认值   |
| --------- | -------------------------------------------- | -------------------------- | -------- |
| selector  | 自定义节点选择器                             | _string_                   | `notify` |
| className | 自定义类名                                   | _string_                   | -        |
| style     | 组件样式                                     | _CSSProperties_            | -        |
| color     | 类型，可选值为 `primary` `success` `warning` | _string_                   | `danger` |
| duration  | 展示时长(ms)，值为 0 时，notify 不会消失     | _number_                   | `3000`   |
| message   | 展示文案，支持通过`\n`换行                   | _ReactNode_                | -        |
| onClose   | 关闭时的回调函数                             | _(open : boolean) => void_ | -        |