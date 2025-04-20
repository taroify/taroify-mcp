## API

### Props

| 参数      | 说明                                                        | 类型               | 默认值    |
| --------- | ----------------------------------------------------------- | ------------------ | --------- |
| width     | 水印宽度                                                    | _number_           | `80`      |
| height    | 水印高度                                                    | _number_           | `80`      |
| zIndex    | 水印的 z-index                                              | _number \| string_ | `100`     |
| content   | 文字水印的内容                                              | _string_           | -         |
| image     | 图片水印的内容，如果与 `content` 同时传入，优先使用图片水印 | _string_           | -         |
| rotate    | 水印的旋转角度                                              | _number_           | `-11`     |
| fullPage  | 水印是否全屏显示                                            | _boolean_          | `false`   |
| gapX      | 水印之间的水平间隔                                          | _number_           | `20`      |
| gapY      | 水印之间的垂直间隔                                          | _number_           | `20`      |
| textColor | 文字水印的颜色                                              | _string_           | `#dcdee0` |
| textSize  | 文字水印的大小                                              | _number_           | `20`      |
| opacity   | 水印的透明度                                                | _number_           | -         |