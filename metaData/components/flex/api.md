## API

### Flex Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gutter | 列元素之间的间距（单位为 px） | _number_ | - |
| direction | 项目定位方向，可选值为 `row` `row-reverse` `column` `column-reverse` | _boolean_ | `row` |
| wrap | 子元素的换行方式，可选值为 `nowrap` `wrap` `wrap-reverse` | _boolean_ | `nowrap` |
| justify | 主轴对齐方式，可选值为 `start` `end` `center` `space-around` `space-between` | _string_ | `start` |
| align | 交叉轴对齐方式，可选值为 `start` `center` `end` `baseline` `stretch` | _string_ | `start` |

### Flex.Item Props

| 参数   | 说明           | 类型               | 默认值 |
| ------ | -------------- | ------------------ | ------ |
| span   | 列元素宽度     | _number_ | -      |
| offset | 列元素偏移距离 | _number_ | -      |