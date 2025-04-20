## API

### Props

| 参数                                      | 说明                                                                                                  | 类型                                              | 默认值                                                        |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------- |
| type                                      | 选择类型:<br>`single` 表示选择单个日期，<br>`multiple` 表示选择多个日期，<br>`range` 表示选择日期区间 | _string_                                          | `single`                                                      |
| defaultValue                              | 默认选中的日期，`type` 为 `multiple` 或 `range` 时为数组，传入 `null` 表示默认不选择                  | _Date \| Date[] \| null_                          | 今天                                                          |
| value                                     | 选中的日期，`type` 为 `multiple` 或 `range` 时为数组，传入 `null` 表示默认不选择                      | _Date \| Date[] \| null_                          | 今天                                                          |
| formatter                                 | 日期格式化函数                                                                                        | _(day: Calendar.DayObject) => Calendar.DayObject_ | -                                                             |
| title                                     | 日历标题                                                                                              | _ReactNode_                                       | `日期选择`                                                    |
| showSubtitle<br> `v0.1.1-alpha.6`         | 是否展示日历副标题（年月）                                                                            | _boolean_                                         | `true`                                                        |
| subtitle                                  | 自定义日历副标题                                                                                      | _ReactNode\|((date: Date) => ReactNode)_          | (date) => \`${date.getFullYear()}年${date.getMonth() + 1}月\` |
| watermark                                 | 是否显示月份背景水印                                                                                  | _boolean_                                         | `true`                                                        |
| min                                       | 可选择的最小日期                                                                                      | _Date_                                            | 当前日期                                                      |
| max                                       | 可选择的最大日期                                                                                      | _Date_                                            | 当前日期的六个月后                                            |
| poppable <br> `v0.1.1-alpha.6`            | 是否以弹层的形式展示日历                                                                              | _boolean_                                         | `false`                                                       |
| showPopup <br> `v0.1.1-alpha.6`           | 是否显示日历弹窗, poppable: true 时生效                                                               | _boolean_                                         | `false`                                                       |
| popupPlacement                            | 弹出位置，可选值为 `left` `right` `top` , poppable: true 时生效                                       | _string_                                          | `bottom`                                                      |
| popupRound                                | 是否显示圆角弹窗, poppable: true 时生效                                                               | _boolean_                                         | `true`                                                        |
| popupCloseIcon                            | 弹框是否显示关闭图标, poppable: true 时生效                                                           | _boolean_                                         | `true`                                                        |
| readonly                                  | 是否为只读状态，只读状态下不能选择日期                                                                | _boolean_                                         | `false`                                                       |
| showConfirm <br> `v0.1.1-alpha.6`         | 是否展示确认按钮                                                                                      | _boolean_                                         | `true`                                                        |
| confirmText <br> `v0.1.1-alpha.6`         | 确认按钮的文字                                                                                        | _ReactNode_                                       | `确认`                                                        |
| confirmDisabledText <br> `v0.1.1-alpha.6` | 确认按钮处于禁用状态时的文字                                                                          | _ReactNode_                                       | `确认`                                                        |
| firstDayOfWeek                            | 设置周起始日                                                                                          | _0-6_                                             | `0`                                                           |

### Calendar.DayObject 数据结构

日历中的每个日期都对应一个 Day 对象，通过`formatter`属性可以自定义 Day 对象的内容

| 键名      | 说明                                                          | 类型     |
| --------- | ------------------------------------------------------------- | -------- |
| value     | 日期对应的 Date 对象                                          | _Date_   |
| type      | 日期类型，可选值为 `active` `start` `middle` `end` `disabled` | _string_ |
| children  | 中间显示的文字                                                | _string_ |
| top       | 上方的提示信息                                                | _string_ |
| bottom    | 下方的提示信息                                                | _string_ |
| className | 额外类名                                                      | _string_ |

### Events

| 事件名                       | 说明                                                                    | 回调参数                |
| ---------------------------- | ----------------------------------------------------------------------- | ----------------------- |
| onChange                     | 点击并选中任意日期时触发                                                | _value: Date \| Date[]_ |
| onConfirm                    | 日期选择完成后触发，若使用 `Calendar.Button` 组件，则点击确认按钮后触发 | _value: Date \| Date[]_ |
| onClose <br>`v0.1.1-alpha.6` | 关闭弹层时出发                                                          | _visible: boolean_      |

### Calendar.Footer Props

| 参数     | 说明     | 类型       | 默认值 |
| -------- | -------- | ---------- | ------ |
| children | 底部内容 | _ReactNoe_ | -      |

### Calendar.Button Props

| 参数                | 说明                         | 类型        | 默认值    |
| ------------------- | ---------------------------- | ----------- | --------- |
| children            | 按钮内容                     | _ReactNoe_  | 确认      |
| type                | 按钮类型                     | _confirm_   | `confirm` |
| confirmText         | 确认按钮的文字               | _ReactNode_ | -         |
| confirmDisabledText | 确认按钮处于禁用状态时的文字 | _ReactNode_ | -         |