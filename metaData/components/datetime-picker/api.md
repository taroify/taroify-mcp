## API

### Props

| 参数         | 说明                                                                                                   | 类型                                           | 默认值     |
| ------------ | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------- | ---------- |
| type         | 时间类型，可选值为 `date` `time` <br> `year-month` `month-day` `date-hour` `date-minute` `hour-minute` | _string_                                       | `datetime` |
| defaultValue | 默认选中的时间                                                                                         | _Date_                                         | -          |
| value        | 选中的时间                                                                                             | _Date_                                         | -          |
| min          | 可选的最小时间，精确到秒                                                                               | _Date_                                         | 十年前     |
| max          | 可选的最大时间，精确到秒                                                                               | _Date_                                         | 十年后     |
| filter       | 选项过滤函数                                                                                           | _(type: string, values: string[]) => string[]_ | -          |
| formatter    | 选项格式化函数                                                                                         | _(type: string, value: string) => string_      | -          |
| fields       | 自定义列排序数组, 子项可选值为<br> `year` `month` `day` `hour` `minute`                                | _string[]_                                     | -          |
| loading      | 是否显示加载状态                                                                                       | _boolean_                                      | `false`    |
| readonly     | 是否为只读状态，只读状态下无法切换选项                                                                 | _boolean_                                      | `false`    |
| siblingCount | 可见的选项相邻个数                                                                                     | _number_                                       | `3`        |

### Events

| 事件名    | 说明                     | 回调参数    |
| --------- | ------------------------ | ----------- |
| onChange  | 当值变化时触发的事件     | value: Date |
| onConfirm | 点击完成按钮时触发的事件 | value: Date |
| onCancel  | 点击取消按钮时触发的事件 | value: Date |