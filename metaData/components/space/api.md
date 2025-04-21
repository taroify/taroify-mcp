## API

### Props

| 参数                  | 说明                                                                         | 类型                                    | 默认值       |
| --------------------- | ---------------------------------------------------------------------------- | --------------------------------------- | ------------ |
| direction             | 垂直排列方式 可选值 `horizontal` `vertical`                                  | _string_                                | `horizontal` |
| size                  | 间距，可选值为 `mini` `small` `medium` `large`，或者自定义间距               | _string \| number \| [number, number?]_ | `small`      |
| wrap                  | 子元素的换行方式，可选值为 `nowrap` `wrap` `wrap-reverse`                    | _boolean_                               | `wrap`       |
| justify               | 主轴对齐方式，可选值为 `start` `end` `center` `space-around` `space-between` | _string_                                | `start`      |
| align                 | 交叉轴对齐方式，可选值为 `start` `center` `end` `baseline` `stretch`         | _string_                                | `start`      |
| fill `v0.1.1-alpha.2` | 是否填充整个父元素                                                           | _boolean_                               | `false`      |