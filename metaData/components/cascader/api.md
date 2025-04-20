## API

### Cascader Props

| 参数                          | 说明                        | 类型                                                                   | 默认值                                                     |
| ----------------------------- | --------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------- |
| value                         | 选中项的值                  | _string[]_                                                             | -                                                          |
| placeholder                   | 未选中时的提示文案          | _ReactNode_                                                            | `请选择`                                                   |
| title                         | 顶部标题                    | _ReactNode_                                                            | -                                                          |
| swipeable                     | 是否开启手势左右滑动切换    | _boolean_                                                              | `false`                                                    |
| animated                      | 是否开启动过渡动画          | _boolean_                                                              | `true`                                                     |
| options <br>`v0.1.1-alpha.4`  | 可选项数据源                | _CascaderDataOption_                                                   | `[]`                                                       |
| loadData <br>`v0.1.1-alpha.4` | 动态加载数据                | _(values: string[], options: CascaderEventOption[]) => Promise<any[]>_ | `_`                                                        |
| fieldNames `v0.1.1-alpha.4`   | 自定义 options 结构中的字段 | _CascaderFieldNames_                                                   | `{ label: 'label', value: 'value', children: 'children' }` |
| ellipsis <br>`v0.5.0-alpha.0` | 是否省略过长的标题文字      | _boolean_                                                              | `true`                                                     |

### Cascader Events

| 事件       | 说明                   | 回调参数                                        |
| ---------- | ---------------------- | ----------------------------------------------- |
| onSelect   | 选中项变化时触发       | _values: any[], options: CascaderEventOption[]_ |
| onChange   | 全部选项选择完成后触发 | _values: any[], options: CascaderEventOption[]_ |
| onTabClick | 点击标签时触发         | _event: Tabs.TabEvent_                          |

### Cascader.Header Props

| 参数     | 说明     | 类型       | 默认值 |
| -------- | -------- | ---------- | ------ |
| children | 头部内容 | _ReactNoe_ | -      |

### Cascader.Tab Props

| 参数     | 说明       | 类型       | 默认值 |
| -------- | ---------- | ---------- | ------ |
| children | 子选项列表 | _ReactNoe_ | -      |

### Cascader.Option Props

| 参数     | 说明                 | 类型               | 默认值  |
| -------- | -------------------- | ------------------ | ------- |
| children | 选项内容（必填）     | _ReactNoe_         | -       |
| value    | 选项对应的值（必填） | _string \| number_ | -       |
| disabled | 是否禁用选项         | _boolean_          | `false` |

### 类型定义

通过`@taroify/core/cascader`导入类型

```tsx
import type {
  CascaderDataOption,
  CascaderEventOption,
  CascaderFieldNames,
} from "@taroify/core/cascader"
```