## API

### Props

| 参数           | 说明                                               | 类型                                                      | 默认值         |
|--------------|--------------------------------------------------|---------------------------------------------------------|-------------|
| variant      | 按钮变种，可选值为 `contained` `text` `outlined`          | _string_                                                | `contained` |
| color        | 按钮颜色，可选值为 `primary` `success` `warning` `danger` | _string_                                                | `default`   |
| size         | 尺寸，可选值为 `large` `small` `mini`                   | _string_                                                | `medium`    |
| shape        | 按钮形状，可选值为 `square` `round`                       | _string_                                                | `square`    |
| icon         | 左侧[图标](/components/icon)或[图片](/components/image) | _ReactNode_                                             | -           |
| iconPosition <br>`v0.1.1-alpha.0` | 图标展示位置，可选值为 `right`     | _string_                                                 | `left`      |
| formType     | 原生 button 标签的 type 属性                            | _string_                                                | `button`    |
| block        | 是否为块级元素                                          | _boolean_                                               | `false`     |
| disabled     | 是否禁用按钮                                           | _boolean_                                               | `false`     |
| hairline     | 是否使用 0.5px 边框                                    | _boolean_                                               | `false`     |
| loading      | 是否显示为加载状态                                        | _boolean \| [LoadingProps](/components/loading/#props)_ | `false`     |
| children     | 按钮文字                                             | _string_                                                | -           |


### Button.Group Props

| 参数       | 说明                                               | 类型        | 默认值         |
|----------|--------------------------------------------------|-----------|-------------|
| variant  | 按钮变种，可选值为 `contained` `text` `outlined`          | _string_  | `contained` |
| color    | 按钮颜色，可选值为 `primary` `success` `warning` `danger` | _string_  | `default`   |
| size     | 尺寸，可选值为 `large` `small` `mini`                   | _string_  | `medium`    |
| shape    | 按钮形状，可选值为 `round`                                | _string_  | `square`    |
| block    | 是否为块级元素                                          | _boolean_ | -           |
| disabled | 是否禁用按钮                                           | _boolean_ | -           |
| hairline | 是否使用 0.5px 边框                                    | _boolean_ | -           |