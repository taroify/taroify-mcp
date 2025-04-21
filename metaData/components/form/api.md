## API

### Form Props

| 参数                          | 说明                                                        | 类型      | 默认值   |
| ----------------------------- | ----------------------------------------------------------- | --------- | -------- |
| defaultValues                 | 表单默认值                                                  | _object_  |          |
| labelAlign                    | 表单项 label 对齐方式，可选值为 `center` `right`            | _string_  | `left`   |
| controlAlign                  | 表单项 control 对齐方式，可选值为 `center` `right`          | _string_  | `left`   |
| validateTrigger               | 表单校验触发时机，可选值为 `onChange`、`onSubmit`，详见下表 | _string_  | `onBlur` |
| colon                         | 是否在 label 后面添加冒号                                   | _boolean_ | `false`  |
| disabled <br>`v0.3.1-alpha.0` | 是否禁用表单                                                | _boolean_ | `false`  |

### Form Events

| 事件名         | 说明                       | 回调参数                                              |
| -------------- | -------------------------- | ----------------------------------------------------- |
| onSubmit       | 提交表单且验证通过后触发   | _event: BaseEventOrig<FormProps.onSubmitEventDetail>_ |
| onReset        | 重置表单后触发             | _event: BaseEventOrig_                                |
| onValidate     | 提交表单且验证不通过后触发 | _errors: { name: string, errors: string[] }[]_        |
| onValuesChange | 字段值更新后触发           | _changedValues: object, allValues: object_            |

### Form Methods

通过 ref 可以获取到 Form 实例并调用实例方法。

| 方法名                      | 说明                                                         | 参数                        | 返回值             |
| --------------------------- | ------------------------------------------------------------ | --------------------------- | ------------------ |
| setValues                   | 设置表单值(浅合并)                                           | _object_                    | -                  |
| getValues                   | 获得表单值，支持传入 `name` 来获得单个或部分表单项           | _name?: string \| string[]_ | _object_           |
| setErrors                   | 设置表单验证错误信息(浅合并)                                 | _FormValidError[]_          | _void_             |
| getErrors                   | 获得表单验证错误信息，支持传入 `name` 来获得单个或部分表单项 | _name?: string \| string[]_ | _FormValidError[]_ |
| validate                    | 验证表单，支持传入 `name` 来验证单个或部分表单项             | _name?: string \| string[]_ | _Promise_          |
| submit <br>`v0.3.1-alpha.0` | 提交表单，与点击提交按钮的效果等价                           | -                           | -                  |
| reset                       | 重置表单                                                     | -                           | _void_             |

### validateTrigger 可选值

通过 `validateTrigger` 属性可以自定义表单校验的触发时机。

| 值       | 描述                                 |
| -------- | ------------------------------------ |
| onSubmit | 仅在提交表单时触发校验               |
| onBlur   | 在提交表单和输入框失焦时触发校验     |
| onChange | 在提交表单和输入框内容变化时触发校验 |

### Form.Item Props

| 参数                              | 说明                                 | 类型                                          | 默认值  |
| --------------------------------- | ------------------------------------ | --------------------------------------------- | ------- |
| name                              | 表单项名称，提交表单的标识符         | _string_                                      | -       |
| defaultValue                      | 表单项默认值                         | _any_                                         | -       |
| required                          | 是否显示表单必填星号                 | _boolean_                                     | `false` |
| rules                             | 表单校验规则                         | _FormRule[]_                                  | -       |
| dependencies <br>`v0.1.6-alpha.0` | 当依赖的字段值改变时，触发自身的校验 | _string[]_                                    | -       |
| shouldUpdate <br>`v0.1.6-alpha.0` | 当值为 true 时，触发当前区域重新渲染 | _boolean\|(prevValues, curValues) => boolean_ | -       |
| noStyle <br>`v0.1.6-alpha.0`      | 直接渲染 children                    | boolean                                       | -       |

> 属性继承自 Cell 组件，更多属性参见：[Cell 组件](/components/cell/#cell-props)

### Rule 数据结构

使用 Form.Item 的 `rules` 属性可以定义校验规则，可选属性如下：

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| required | 是否为必选字段，当值为空字符串、空数组、`undefined`、`null` 时，校验不通过 | _boolean_ |
| message | 错误提示文案 | _string \| (value, rule) => string_ |
| validator | 通过函数进行校验 | _(value, rule) => boolean \| string \| Promise_ |
| validateFirst `v0.5.0-alpha.0` | 当某一规则校验不通过时，是否停止剩下的规则的校验。 | _boolean_ | `false` |
| pattern | 通过正则表达式进行校验 | _RegExp_ |
| trigger | 本项规则的触发时机，可选值为 `onChange`、`onBlur` | _string_ |
| formatter | 格式化函数，将表单项的值转换后进行校验 | _(value, rule) => any_ |

### Form.Label Props

| 参数  | 说明                                | 类型      | 默认值  |
| ----- | ----------------------------------- | --------- | ------- |
| align | 对齐方式，可选值为 `center` `right` | _string_  | `left`  |
| colon | 是否在 label 后面添加冒号           | _boolean_ | `false` |

### Form.Feedback Props

| 参数   | 说明                                           | 类型     | 默认值 |
| ------ | ---------------------------------------------- | -------- | ------ |
| align  | 对齐方式，可选值为 `center` `right`            | _string_ | `left` |
| status | 反馈状态，可选值为 `valid` `warning` `invalid` | _string_ | -      |

### Form.Control Props

| 参数     | 说明                                | 类型                                                        | 默认值 |
| -------- | ----------------------------------- | ----------------------------------------------------------- | ------ |
| align    | 对齐方式，可选值为 `center` `right` | _string_                                                    | `left` |
| children | 内容                                | _ReactNode\|((controller: FormController<V>) => ReactNode)_ | --     |

```tsx
interface FormController<V> {
  value?: V // 当前表单项值
  validateStatus?: FormValidateStatus // 当前表单项验证状态
  disabled?: boolean // 当前表单项是否禁用

  onChange?(value: V): void // 改变当前表单项值

  onBlur?(value: V): void // 触发onBlur当前表单项校验
}
```

> Tips: 使用 onBlur 触发表单验证，自定义表单项时，要手动调用 onBlur，才能触发校验

### Form.List

| 参数         | 说明                         | 类型                                                                                 |
| ------------ | ---------------------------- | ------------------------------------------------------------------------------------ | --- |
| children     | 渲染函数                     | _(fields: { key: string, name: string }[], operation: { add, remove }) => ReactNode_ | \_  |
| name         | 表单项名称，提交表单的标识符 | _string_                                                                             |
| defaultValue | 表单项默认值                 | _any_                                                                                |

### 类型定义

通过`@taroify/core/form`导入组件类型：

```tsx
import { FormRule, FormItemInstance, FormListInstance, FormInstance } from "@taroify/core/form"
```