## API

### Props

| 参数      | 说明                                          | 类型       | 默认值 |
| :-------- | --------------------------------------------- | ---------- | ------ |
| startNum  | 起始数值                                      | _number_   | `0`    |
| targetNum | 目标数值                                      | _number_   | `-`    |
| textList  | 内容数组，用于翻转非数字内                    | _string[]_ | `[]`   |
| duration  | 动画时长，单位为秒                            | _number_   | `2`    |
| direction | 文本翻滚方向，值为 `down` 和 `up`             | _string_   | `down` |
| autoStart | 是否自动开始动画                              | _boolean_  | `true` |
| stopOrder | 各个数位动画停止先后顺序，值为 `ltr` 和 `rtl` | _string_   | `ltr`  |
| height    | 数字高度，单位为 `px`                         | _number_   | `40`   |

### 方法

通过 `ref` 可以获取到 RollingText 实例并调用实例方法

| 方法名 | 说明     | 参数 | 返回值 |
| :----- | -------- | ---- | ------ |
| start  | 开始动画 | \_   | -      |
| reset  | 重置动画 | \_   | -      |