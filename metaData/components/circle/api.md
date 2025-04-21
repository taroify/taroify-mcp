## API

### Props

| 参数                               | 说明                                                 | 类型               | 默认值    |
| ---------------------------------- | ---------------------------------------------------- | ------------------ | --------- |
| percent                            | 当前进度                                             | _number_           | -         |
| size                               | 圆环直径，默认单位为 `px`                            | _string_           | `100px`   |
| color                              | 进度条颜色，传入对象格式可以定义渐变色               | _string \| object_ | `#1989fa` |
| layerColor                         | 轨道颜色                                             | _string_           | `white`   |
| fill                               | 填充颜色                                             | _string_           | `none`    |
| speed                              | 动画速度（单位为 rate/s）                            | _number_           | `0`       |
| strokeWidth                        | 进度条宽度                                           | _number_           | `40`      |
| strokeLinecap                      | 进度条端点的形状，可选值为 `sqaure` `butt` `round`   | _string_           | `round`   |
| clockwise                          | 是否顺时针增加                                       | _boolean_          | `true`    |
| startPosition <br>`v0.4.0-alpha.0` | 进度起始位置，可选值为 `left` `right` `top` `bottom` | _string_           | `top`     |
| children                           | 文字                                                 | _ReactNode_        | -         |