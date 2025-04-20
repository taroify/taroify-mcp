## API

### Props

| 参数                              | 说明                                                                                          | 类型                                                                                  | 默认值       |
| --------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------ |
| label                             | 搜索框左侧文本                                                                                | _string_                                                                              | -            |
| shape                             | 搜索框形状，可选值为 `square` `rounded`                                                       | _string_                                                                              | -            |
| maxlength                         | 输入的最大字符数                                                                              | _number \| string_                                                                    | -            |
| placeholder                       | 占位提示文字                                                                                  | _string_                                                                              | -            |
| autoFocus                         | 自动聚焦，iOS 系统不支持该属性                                                                | _boolean_                                                                             | `false`      |
| focus                             | 获取焦点                                                                                      | _boolean_                                                                             | `false`      |
| disabled                          | 是否禁用输入框                                                                                | _boolean_                                                                             | `false`      |
| readonly                          | 是否将输入框设为只读状态，只读状态下无法输入内容                                              | _boolean_                                                                             | `false`      |
| icon                              | 输入框左侧图标                                                                                | _ReactNode_                                                                           | `<Search />` |
| rightIcon                         | 输入框右侧图标                                                                                | _ReactNode_                                                                           | -            |
| action                            | 是否在搜索框右侧显示取消按钮                                                                  | _boolean \| ReactNode_                                                                | `false`      |
| inputAlign                        | 输入框内容对齐方式，可选值为 `center` `right`                                                 | _string_                                                                              | `left`       |
| inputColor                        | 输入框内容颜色，可选值为 `primary` `info` `success` `warning` `danger`                        | _string_                                                                              | -            |
| clearable                         | 是否启用清除图标，点击清除图标后会清空输入框                                                  | _boolean_                                                                             | `true`       |
| clearIcon                         | 清除图标                                                                                      | _string_                                                                              | `<Clear />`  |
| clearTrigger                      | 显示清除图标的时机，`always` 表示输入框不为空时展示，<br>`focus` 表示输入框聚焦且不为空时展示 | _string_                                                                              | `focus`      |
| feedback                          | 提示文案，为空时不展示                                                                        | _string \| [FormFeedbackProps](/components/form/#formfeedback-props) \| ReactElement_ | -            |
| enableNative <br>`v0.4.0-alpha.0` | 使用原生键盘（仅支付宝小程序）                                                                | _boolean_                                                                             | `true`       |

### Events

| 事件名   | 说明                 | 回调参数                                                 |
| -------- | -------------------- | -------------------------------------------------------- |
| onSearch | 确定搜索时触发       | _event: BaseEventOrig<InputProps.inputValueEventDetail>_ |
| onChange | 输入框内容变化时触发 | _event: BaseEventOrig<InputProps.inputEventDetail>_      |
| onFocus  | 输入框获得焦点时触发 | _event: BaseEventOrig<InputProps.inputForceEventDetail>_ |
| onBlur   | 输入框失去焦点时触发 | _event: BaseEventOrig<InputProps.inputForceEventDetail>_ |
| onClear  | 点击清除按钮后触发   | _event: event: ITouchEvent_                              |
| onCancel | 点击取消按钮时触发   | _event: event: ITouchEvent_                              |